const WelcomeSection = () => {
  return (
    <section className="px-8 py-section-lg bg-marble">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <h2 className="font-display text-4xl md:text-5xl text-emerald mb-6">
              Blessed Beginnings
            </h2>
            <div className="gold-divider mb-6"></div>
            <p className="font-body text-xl text-emerald leading-relaxed mb-8">
              As Radiyah and Ibrahim embark on their sacred journey together, 
              your generous gifts will help them build a home filled with 
              barakah and love.
            </p>
            <div className="font-script text-2xl text-gold">
              "And among His signs is that He created for you mates from among yourselves, 
              that you may dwell in tranquility with them."
              <span className="block text-lg mt-2 text-burgundy">— Quran 30:21</span>
            </div>
          </div>
          <div className="text-center">
            <div className="bg-white rounded-lg p-8 shadow-lg border border-gold/20">
              <div className="text-6xl mb-4">💍</div>
              <h3 className="font-display text-2xl text-emerald mb-4">Join Our Celebration</h3>
              <p className="font-body text-emerald/80">
                Help us create beautiful memories and a blessed home together.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;