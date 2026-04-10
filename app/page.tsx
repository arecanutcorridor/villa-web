import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/sections/HeroSection';
import WelcomeSection from '@/components/sections/WelcomeSection';
import AmenitiesSection from '@/components/sections/AmenitiesSection';
import RoomsSection from '@/components/sections/RoomsSection';
import GallerySection from '@/components/sections/GallerySection';
import HighlightsSection from '@/components/sections/HighlightsSection';
import LivingSpacesSection from '@/components/sections/LivingSpacesSection';
import ActivitiesSection from '@/components/sections/ActivitiesSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import NewsletterSection from '@/components/sections/NewsletterSection';
import FeaturedPackagesSection from '@/components/sections/FeaturedPackagesSection';

export default function Home() {
  return (
    <main className="w-full">
      <Header />
      <HeroSection />
      <WelcomeSection />
      <AmenitiesSection />
      <RoomsSection />
      <GallerySection />
      <HighlightsSection />
      <LivingSpacesSection />
      <ActivitiesSection />
      <TestimonialsSection />
      <FeaturedPackagesSection />
      <NewsletterSection />
      <Footer />
    </main>
  );
}
