import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import StatsCards from '@/components/StatsCards';
import HowItWorks from '@/components/HowItWorks';
import FeatureCards from '@/components/FeatureCards';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="tabular-nums">
        <HeroSection />
        <div className="space-y-32 px-6 pb-32">
          <StatsCards />
          <HowItWorks />
          <FeatureCards />
        </div>
      </main>
    </div>
  );
};

export default Index;