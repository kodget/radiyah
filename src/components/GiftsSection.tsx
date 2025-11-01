import Image from "next/image";
import { useRouter } from "next/router";
import { giftItems } from "../constants";

const GiftsSection = () => {
  const router = useRouter();

  const handlePayment = (gift: (typeof giftItems)[0]) => {
    router.push(
      `/payment?item=${encodeURIComponent(
        gift.name
      )}&price=${encodeURIComponent(gift.price)}`
    );
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 pb-20 px-4">
      <div className="max-w-[1400px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Gift the Happy Couple
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Help us start our new journey together with these meaningful gifts
          </p>
        </div>

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 sm:gap-6">
          {giftItems.map((gift) => (
            <div
              key={gift.id}
              className="group relative bg-white border border-black rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2 hover:scale-105 p-6"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>

              <div className="relative h-64 overflow-hidden rounded-2xl">
                <Image
                  src={gift.image}
                  alt={gift.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  quality={95}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />

              </div>

              <div className="p-8 relative z-20">
                <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">
                  {gift.name}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {gift.description}
                </p>

                <div className="mb-6">
                  <span className="text-3xl font-bold text-green-600">
                    ₦{gift.price}
                  </span>
                </div>

                <button
                  onClick={() => handlePayment(gift)}
                  className="w-full bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 hover:from-blue-700 hover:via-blue-800 hover:to-indigo-800 text-white py-4 rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95"
                >
                  🎁 Get This Gift
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GiftsSection;
