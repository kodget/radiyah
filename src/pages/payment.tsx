import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { bankDetails } from "../constants";

const Payment = () => {
  const router = useRouter();
  const [itemName, setItemName] = useState("");
  const [price, setPrice] = useState("");
  const [copied, setCopied] = useState("");

  useEffect(() => {
    if (router.query.item && router.query.price) {
      setItemName(router.query.item as string);
      setPrice(router.query.price as string);
    }
  }, [router.query]);

  const copyToClipboard = (text: string, type: string) => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(text).then(() => {
          setCopied(type);
          setTimeout(() => setCopied(""), 2000);
        });
      } else {
        const textArea = document.createElement('textarea');
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        setCopied(type);
        setTimeout(() => setCopied(""), 2000);
      }
    } catch (err) {
      alert(`Copy failed. Please manually copy: ${text}`);
    }
  };

  return (
    <div className="min-h-screen bg-marble py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-lg shadow-xl p-8 border border-gold/20">
          <div className="text-center mb-8">
            <h1 className="font-display text-3xl text-emerald mb-4">
              Complete Your Blessed Gift
            </h1>
            <div className="gold-divider max-w-md mx-auto mb-6"></div>
            <div className="bg-emerald/5 p-6 rounded-lg border border-gold/30">
              <h2 className="font-body text-2xl text-emerald mb-2">
                {itemName}
              </h2>
              <p className="font-display text-3xl text-burgundy">
                ₦{price}
              </p>
            </div>
          </div>

          <div className="bg-marble p-6 rounded-lg mb-6 border border-gold/20">
            <h3 className="font-display text-xl text-emerald mb-4">
              Bank Transfer Details
            </h3>
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                <span className="font-body text-emerald/70">Account Number:</span>
                <div className="flex items-center gap-2">
                  <span className="font-mono font-semibold text-emerald">
                    {bankDetails.accountNumber}
                  </span>
                  <button
                    onClick={() => copyToClipboard(bankDetails.accountNumber, 'account')}
                    className="bg-emerald hover:bg-emerald/90 text-white px-3 py-1 rounded text-sm transition-colors border border-gold/30"
                  >
                    {copied === 'account' ? '✓ Copied!' : 'Copy'}
                  </button>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                <span className="font-body text-emerald/70">Bank Name:</span>
                <span className="font-body font-semibold text-emerald">{bankDetails.bankName}</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                <span className="font-body text-emerald/70">Account Name:</span>
                <span className="font-body font-semibold text-emerald">{bankDetails.accountName}</span>
              </div>
            </div>
          </div>

          <div className="bg-gold/10 border border-gold/30 p-6 rounded-lg">
            <h3 className="font-display text-xl text-emerald mb-3">
              Barakallahu Lakuma! 🌹
            </h3>
            <p className="font-body text-emerald/80 mb-4 leading-relaxed">
              Your generous gift is a blessing that will help us build our home with love and faith. 
              May Allah reward your kindness abundantly.
            </p>
            <p className="font-body text-emerald/80 mb-4 leading-relaxed">
              Please transfer the amount to the account details above. Once completed, 
              we'll coordinate the delivery of your blessed gift.
            </p>
            <p className="font-script text-2xl text-gold text-center">
              With heartfelt gratitude,<br />
              Radiyah & Ibrahim 💕
            </p>
          </div>

          <div className="mt-8 text-center">
            <button
              onClick={() => router.push("/")}
              className="bg-emerald hover:bg-emerald/90 text-white px-8 py-3 rounded-lg font-body text-lg transition-colors duration-200 border-2 border-gold/30 hover:border-gold"
            >
              Back to Gifts
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;