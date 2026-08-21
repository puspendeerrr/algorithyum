'use client';

import React from 'react';
import { Hero } from '../components/Hero';
import { Process } from '../components/Process';
import { CTA } from '../components/CTA';
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
      <Hero onOpenConsultation={handleConsultation} />
      <Process />
      <CTA onOpenConsultation={handleConsultation} onOpenContact={handleContact} />
    </>
  );
};

export default Home;
