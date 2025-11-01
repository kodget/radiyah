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
    <section className="min-h-screen bg-marble py-section-lg px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl text-emerald mb-6">
            Blessed Gifts for the Couple
          </h2>
          <div className="gold-divider max-w-md mx-auto mb-6"></div>
          <p className="font-body text-xl text-emerald/80 max-w-3xl mx-auto leading-relaxed">
            Choose from these carefully selected items to help 
            <span className="font-script text-gold text-2xl"> Radiyah & Ibrahim </span>
            create their blessed home together.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {giftItems.map((gift) => (
            <div
              key={gift.id}
              className="group bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gold/20 hover:border-gold/40"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={gift.image}
                  alt={gift.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  quality={95}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute top-4 right-4">
                  <span className="text-2xl">🌹</span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-display text-2xl text-emerald mb-3">
                  {gift.name}
                </h3>
                <p className="font-body text-emerald/70 mb-4 leading-relaxed">
                  {gift.description}
                </p>

                <div className="mb-6">
                  <span className="font-display text-3xl text-burgundy">
                    ₦{gift.price}
                  </span>
                </div>

                <button
                  onClick={() => handlePayment(gift)}
                  className="w-full bg-emerald hover:bg-emerald/90 text-white py-3 rounded-lg font-body text-lg transition-all duration-300 hover:shadow-lg border-2 border-gold/30 hover:border-gold"
                >
                  🎁 Bless with This Gift
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
