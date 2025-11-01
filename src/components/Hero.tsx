import Image from 'next/image';

const Hero = () => {
  return (
    <section className="w-full h-screen relative">
      <Image
        src="/images/ChatGPT Image Oct 28, 2025, 09_29_03 AM.png"
        alt="Hero image mobile"
        fill
        className="object-contain sm:hidden"
        quality={100}
        priority
      />
      <Image
        src="/images/IMG-20251027-WA0010.jpg"
        alt="Hero image tablet"
        fill
        className="object-contain hidden sm:block"
        quality={100}
        priority
      />
    </section>
  );
};

export default Hero;