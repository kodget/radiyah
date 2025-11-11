import Hero from '../components/Hero';
import WelcomeSection from '../components/WelcomeSection';
import AccountDetailsSection from '../components/GiftsSection';

export default function Home() {
  return (
    <div>
      <Hero />
      <AccountDetailsSection />
      <WelcomeSection />
    </div>
  );
}
