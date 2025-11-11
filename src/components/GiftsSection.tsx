import { bankDetails } from "../constants";

const AccountDetailsSection = () => {
  return (
    <section className="min-h-screen bg-marble py-section-lg px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl text-emerald mb-6">
            Blessed Gifts for the Couple
          </h2>
          <div className="gold-divider max-w-md mx-auto mb-6"></div>
          <p className="font-body text-xl text-emerald/80 max-w-3xl mx-auto leading-relaxed">
            Your generous contributions will help 
            <span className="font-script text-gold text-2xl"> Rodiyyah & Isma'eel </span>
            create their blessed home together.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-xl p-12 border border-gold/20 text-center">
          <h3 className="font-display text-3xl text-emerald mb-8">
            Account Details
          </h3>
          <div className="gold-divider max-w-sm mx-auto mb-8"></div>
          
          <div className="space-y-6">
            <div>
              <p className="font-body text-emerald/70 text-lg mb-2">Account Number</p>
              <p className="font-display text-4xl font-bold text-burgundy">
                {bankDetails.accountNumber}
              </p>
            </div>
            
            <div>
              <p className="font-body text-emerald/70 text-lg mb-2">Bank Name</p>
              <p className="font-display text-3xl font-bold text-emerald">
                {bankDetails.bankName}
              </p>
            </div>
            
            <div>
              <p className="font-body text-emerald/70 text-lg mb-2">Account Name</p>
              <p className="font-display text-3xl font-bold text-emerald">
                {bankDetails.accountName}
              </p>
            </div>
          </div>
          
          <div className="mt-12 p-6 bg-gold/10 rounded-lg border border-gold/30">
            <p className="font-script text-2xl text-gold mb-2">
              Barakallahu Lakuma
            </p>
            <p className="font-body text-emerald/80 text-lg">
              May Allah bless your generous contribution
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccountDetailsSection;
