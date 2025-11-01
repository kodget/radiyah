const Footer = () => {
  return (
    <footer className="bg-emerald text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-8">
          <div className="gold-divider max-w-md mx-auto mb-6"></div>
          <h3 className="font-script text-3xl text-gold mb-4">
            Radiyah & Ibrahim
          </h3>
          <p className="font-body text-white/80 text-lg">
            May Allah bless our union with love, peace, and prosperity
          </p>
          <div className="mt-4 text-2xl">🌹 💍 🌹</div>
        </div>
        
        <div className="text-center border-t border-gold/30 pt-6">
          <p className="font-body text-white/60 text-sm">
            Built with love by{' '}
            <a
              href="https://www.linkedin.com/company/nexatage"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold hover:text-gold/80 font-medium transition-colors"
            >
              Nexatage
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;