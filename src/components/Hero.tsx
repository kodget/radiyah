import Image from 'next/image';

const Hero = () => {
  return (
    <section className="w-full h-screen relative bg-emerald-gradient">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="text-center px-8 max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="font-display text-5xl md:text-7xl text-gold mb-4">
              Radiyah & Isma'eel
            </h1>
            <div className="gold-divider"></div>
            <p className="font-script text-3xl md:text-4xl text-gold mb-6">
              Together in Faith, United in Love
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-gold/30">
            <p className="font-body text-white text-lg md:text-xl leading-relaxed">
              Join us as we celebrate the blessed union of two hearts,
              <br className="hidden md:block" />
              guided by Allah's grace and surrounded by love.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;