import React from 'react';
import { DynamicPageTemplate } from '../components/DynamicPageTemplate';

interface ServiceDetailProps {
  onOpenConsultation?: () => void;
}

export const ServiceDetail: React.FC<ServiceDetailProps> = () => {
  return <DynamicPageTemplate pageType="service" />;
};
