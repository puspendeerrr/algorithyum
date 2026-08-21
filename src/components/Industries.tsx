'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Heart, GraduationCap, ShoppingBag, Factory, Truck, 
  Coins, Rocket, Layers, Store, Coffee, ArrowRight 
} from 'lucide-react';
import { useAppNavigation } from '@/lib/utils/useNavigation';
import styles from './Industries.module.css';

interface IndustryItem {
  id: string;
  title: string;
  icon: React.ReactNode;
  shortDesc: string;
  longDesc: string;
  solution: string;
  focusArea: string;
  focusDesc: string;
}

interface IndustriesProps {
  hideHeader?: boolean;
}

export const Industries: React.FC<IndustriesProps> = ({ hideHeader = false }) => {
  const { navigate } = useAppNavigation();
  const [selectedId, setSelectedId] = useState<string>('healthcare');

  const industries: IndustryItem[] = [
    {
      id: 'healthcare',
      title: 'Healthcare & Medical',
      icon: <Heart size={28} />,
      shortDesc: 'Patient appointment software, clinic ERP systems, medical records, and telemedicine apps.',
      longDesc: 'We build custom software, Hospital ERPs, patient scheduling portals, and mobile apps for clinics, doctors, and medical providers.',
      solution: 'Custom Hospital ERP, Patient Portals & Telehealth Apps',
      focusArea: 'Patient Privacy',
      focusDesc: 'Secure data storage & privacy'
    },
    {
      id: 'education',
      title: 'Education & Schools',
      icon: <GraduationCap size={28} />,
      shortDesc: 'School ERP systems, student management portals, online learning apps, and attendance tracking.',
      longDesc: 'We build custom School ERPs, Learning Management Systems (LMS), student portals, and mobile apps for schools and colleges.',
      solution: 'School ERP, Student Management & LMS Software',
      focusArea: 'School Operations',
      focusDesc: 'Fee, attendance & grade management'
    },
    {
      id: 'retail',
      title: 'Retail & E-commerce',
      icon: <ShoppingBag size={28} />,
      shortDesc: 'Retail ERP systems, inventory software, online shopping stores, and POS billing tools.',
      longDesc: 'We build custom Retail ERP software, POS billing solutions, e-commerce websites, and inventory tracking systems for store owners.',
      solution: 'Retail ERP, POS Billing & E-commerce Websites',
      focusArea: 'Inventory & POS',
      focusDesc: 'Real-time stock & sales tracking'
    },
    {
      id: 'manufacturing',
      title: 'Manufacturing',
      icon: <Factory size={28} />,
      shortDesc: 'Manufacturing ERP, production tracking, raw material management, and inventory systems.',
      longDesc: 'We build custom Manufacturing ERP software to track raw materials, production output, factory inventory, and order fulfillment.',
      solution: 'Manufacturing ERP & Production Tracking Systems',
      focusArea: 'Factory Operations',
      focusDesc: 'Material & production control'
    },
    {
      id: 'logistics',
      title: 'Logistics & Warehouse',
      icon: <Truck size={28} />,
      shortDesc: 'Warehouse management systems, fleet tracking apps, inventory software, and dispatch management.',
      longDesc: 'We build custom Warehouse Management Systems (WMS), shipment tracking tools, and mobile apps for logistics and delivery operators.',
      solution: 'Warehouse ERP & Shipment Tracking Apps',
      focusArea: 'Warehouse Tracking',
      focusDesc: 'Stock movements & shipment logs'
    },
    {
      id: 'finance',
      title: 'Finance & Banking',
      icon: <Coins size={28} />,
      shortDesc: 'Custom accounting software, billing systems, financial dashboards, and payment portals.',
      longDesc: 'We build secure financial portals, custom billing software, accounting management systems, and mobile payment apps.',
      solution: 'Custom Financial Software & Automated Billing Systems',
      focusArea: 'Data Accuracy',
      focusDesc: 'Secure transaction records'
    },
    {
      id: 'startups',
      title: 'Startups & Tech',
      icon: <Rocket size={28} />,
      shortDesc: 'MVP development, mobile app launches, web applications, and fast software builds.',
      longDesc: 'We help startup founders transform ideas into working software, web apps, and mobile applications with clear timelines and budgets.',
      solution: 'MVP Software Development & App Launching',
      focusArea: 'Fast Launch',
      focusDesc: 'Clean code & quick turnaround'
    },
    {
      id: 'saas',
      title: 'SaaS Businesses',
      icon: <Layers size={28} />,
      shortDesc: 'Multi-tenant web products, subscription management, user dashboards, and API platforms.',
      longDesc: 'We design and build multi-tenant SaaS products with user roles, subscription management, payment checkout, and API integrations.',
      solution: 'Custom SaaS Web Applications & API Architecture',
      focusArea: 'SaaS Platforms',
      focusDesc: 'Scalable subscription software'
    },
    {
      id: 'e-commerce',
      title: 'E-commerce Brands',
      icon: <Store size={28} />,
      shortDesc: 'Custom online stores, mobile shopping apps, inventory sync, and payment gateway setups.',
      longDesc: 'We build fast, conversion-optimized e-commerce websites and mobile shopping apps with custom inventory and order tracking.',
      solution: 'Custom E-commerce Stores & Shopping Apps',
      focusArea: 'Online Sales',
      focusDesc: 'Fast checkout & inventory sync'
    },
    {
      id: 'hospitality',
      title: 'Hospitality & Hotels',
      icon: <Coffee size={28} />,
      shortDesc: 'Hotel booking engines, restaurant POS software, reservation apps, and guest portals.',
      longDesc: 'We build reservation systems, hotel management software, restaurant POS tools, and guest ordering mobile applications.',
      solution: 'Hotel Management ERP & Restaurant POS Software',
      focusArea: 'Guest Services',
      focusDesc: 'Bookings, POS & reservations'
    }
  ];

  const selectedIndustry = industries.find(ind => ind.id === selectedId) || industries[0];

  return (
    <section id="industries" className={styles.industriesSection}>
      <div className="container">
        
        {/* Section Header */}
        {!hideHeader && (
          <div className="section-header">
            <span className="section-subtitle">Industries We Work With</span>
            <h2 className="section-title">Software Built for Your Specific Industry</h2>
            <p className="section-desc">
              We build custom software, ERP systems, mobile apps, and AI solutions tailored to the unique operational needs of your business.
            </p>
          </div>
        )}

        {/* Industries Grid */}
        <div className={styles.grid}>
          {industries.map((ind) => (
            <motion.div
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
              key={ind.id}
              onClick={() => setSelectedId(ind.id)}
              className={`${styles.card} ${selectedId === ind.id ? styles.activeCard : ''}`}
              style={{
                borderColor: selectedId === ind.id ? 'var(--accent)' : '',
                boxShadow: selectedId === ind.id ? '0 8px 32px 0 rgba(0, 82, 255, 0.12)' : ''
              }}
            >
              <div 
                className={styles.iconWrapper}
                style={{
                  background: selectedId === ind.id ? 'var(--accent)' : '',
                  color: selectedId === ind.id ? '#ffffff' : ''
                }}
              >
                {ind.icon}
              </div>
              <h3 className={styles.cardTitle}>{ind.title}</h3>
              <p className={styles.cardDesc}>{ind.shortDesc}</p>
            </motion.div>
          ))}
        </div>

        {/* Selected Industry Detail Panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedIndustry.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className={styles.detailPanel}
          >
            <div className={styles.detailIcon}>
              {selectedIndustry.icon}
            </div>

            <div className={styles.detailText}>
              <h3 className={styles.detailTitle}>{selectedIndustry.title} Software Solutions</h3>
              <p className={styles.detailBody}>{selectedIndustry.longDesc}</p>
              
              <div style={{ marginTop: '0.75rem' }}>
                <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase' }}>
                  What Algorithyum Delivers:
                </span>
                <p style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--accent-light)', marginTop: '0.25rem' }}>
                  {selectedIndustry.solution}
                </p>
              </div>

              <div className={styles.detailMetrics}>
                <div className={styles.metricItem}>
                  <span className={styles.metricValue} style={{ fontSize: '1.2rem', lineHeight: '1.4' }}>{selectedIndustry.focusArea}</span>
                  <span className={styles.metricLabel}>{selectedIndustry.focusDesc}</span>
                </div>
                <div className={styles.metricItem}>
                  <span className={styles.metricValue} style={{ fontSize: '1.2rem', lineHeight: '1.4' }}>CUSTOM SOLUTIONS</span>
                  <span className={styles.metricLabel}>Tailored to Your Workflows</span>
                </div>
              </div>

              <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'flex-start' }}>
                <button
                  onClick={() => navigate(`/industries`)}
                  className="btn btn-primary"
                  aria-label={`Explore ${selectedIndustry.title} software solutions`}
                >
                  Explore {selectedIndustry.title} Solutions
                  <ArrowRight size={16} aria-hidden="true" />
                </button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
};
