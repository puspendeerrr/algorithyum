'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ConsultationModal } from '@/components/Modals';

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);

  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <Navbar onOpenConsultation={() => setIsConsultationOpen(true)} />

      <main id="main-content" role="main">
        {children}
      </main>

      <Footer onOpenConsultation={() => setIsConsultationOpen(true)} />

      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
      />
    </>
  );
}
