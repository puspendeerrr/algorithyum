import React from 'react';
import { Hero } from '../components/Hero';
import { Process } from '../components/Process';
import { CTA } from '../components/CTA';

interface HomeProps {
  onOpenConsultation: () => void;
  onOpenContact: () => void;
}

export const Home: React.FC<HomeProps> = ({ onOpenConsultation, onOpenContact }) => {
  return (
    <>
      <Hero onOpenConsultation={onOpenConsultation} />
      <Process />
      <CTA onOpenConsultation={onOpenConsultation} onOpenContact={onOpenContact} />
    </>
  );
};
