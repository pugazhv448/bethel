import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import ProjectsSection from '@/components/ProjectsSection';
import ReviewsSection from '@/components/ReviewsSection';
import FAQSection from '@/components/FAQSection';
import CTASection from '@/components/CTASection';

export default function Home() {
  return (
    <div className="bg-white overflow-x-hidden">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <ReviewsSection />
      <FAQSection />
      <CTASection />

      {/* WhatsApp Float Button */}
      <a
        href="https://wa.me/919884828642?text=Hi%20Bethel%20Stones%2C%20I%20am%20interested%20in%20your%20granite%20services."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-50 bg-green-500 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 hover:scale-110 transition-all text-2xl"
      >
        💬
      </a>
    </div>
  );
}
