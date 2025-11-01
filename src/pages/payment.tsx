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
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
              Complete Your Payment
            </h1>
            <div className="bg-blue-50 p-4 rounded-lg">
              <h2 className="text-xl font-semibold text-blue-800">
                {itemName}
              </h2>
              <p className="text-2xl font-bold text-green-600 mt-2">
                ₦{price}
              </p>
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg mb-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Bank Transfer Details
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Account Number:</span>
                <div className="flex items-center gap-2">
                  <span className="font-mono font-semibold">
                    {bankDetails.accountNumber}
                  </span>
                  <button
                    onClick={() => copyToClipboard(bankDetails.accountNumber, 'account')}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded text-sm transition-colors"
                  >
                    {copied === 'account' ? '✓ Copied!' : 'Copy'}
                  </button>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Bank Name:</span>
                <span className="font-semibold">{bankDetails.bankName}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Account Name:</span>
                <span className="font-semibold">{bankDetails.accountName}</span>
              </div>
            </div>
          </div>

          <div className="bg-green-50 border border-green-200 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-green-800 mb-3">
              Thank You for Your Generous Gift! 💝
            </h3>
            <p className="text-green-700 mb-4">
              Your thoughtful contribution means the world to us. This gift will help create beautiful memories and support our new journey together.
            </p>
            <p className="text-green-700 mb-4">
              Please transfer the amount to the account details above. Once payment is completed, we'll be notified and will reach out to coordinate delivery.
            </p>
            <p className="text-green-700 font-medium">
              With heartfelt gratitude,<br />
              Maryam & Abdulqadr ❤️
            </p>
          </div>

          <div className="mt-6 text-center">
            <button
              onClick={() => router.push("/")}
              className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-2 rounded-lg transition-colors duration-200"
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