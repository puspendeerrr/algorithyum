'use client';

import React from 'react';
import { Hero } from '../components/Hero';
import { Services } from '../components/Services';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { Industries } from '../components/Industries';
import { Process } from '../components/Process';
import { TechStack } from '../components/TechStack';
import { CTA } from '../components/CTA';
import { 
  CompanyIntro, 
  SoftwareDevHighlight,
  ErpHighlight, 
  MobileAppHighlight, 
  AiHighlight, 
  SeoHighlight, 
  WhoWeWorkWith,
  ProjectTypes,
  TrustAndMethodology,
  HomeFaq 
} from '../components/HomeSections';
import { useAppNavigation } from '@/lib/utils/useNavigation';

interface HomeProps {
  onOpenConsultation?: () => void;
  onOpenContact?: () => void;
}

export const Home: React.FC<HomeProps> = ({ onOpenConsultation, onOpenContact }) => {
  const { navigate } = useAppNavigation();

  const handleConsultation = onOpenConsultation || (() => navigate('/contact'));
  const handleContact = onOpenContact || (() => navigate('/contact'));

  return (
    <>
      {/* 1. Hero Section */}
      <Hero onOpenConsultation={handleConsultation} />

      {/* 2. Company Introduction */}
      <CompanyIntro />

      {/* 3. Featured Services (All 11 Services) */}
      <Services />

      {/* 4. Dedicated Custom Software Section */}
      <SoftwareDevHighlight />

      {/* 5. Dedicated ERP Landing Section */}
      <ErpHighlight />

      {/* 6. Mobile App Engineering Section */}
      <MobileAppHighlight />

      {/* 7. AI Solutions & Automation Section */}
      <AiHighlight />

      {/* 8. Technical SEO & Search Ranking Section */}
      <SeoHighlight />

      {/* 9. Why Businesses Choose Algorithyum */}
      <WhyChooseUs />

      {/* 10. Who We Build Software For */}
      <WhoWeWorkWith />

      {/* 11. Project Types Directory */}
      <ProjectTypes />

      {/* 12. Industries We Work With */}
      <Industries />

      {/* 13. Our Development Process (How We Work) */}
      <Process />

      {/* 14. Technology Stack */}
      <TechStack />

      {/* 15. Quality Standards & Trust Building */}
      <TrustAndMethodology />

      {/* 16. Comprehensive FAQs (18 Questions) */}
      <HomeFaq />

      {/* 17. Final Call to Action */}
      <CTA onOpenConsultation={handleConsultation} onOpenContact={handleContact} />
    </>
  );
};

export default Home;
