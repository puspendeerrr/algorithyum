import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Heart, Coins, ShoppingBag, Factory, GraduationCap, 
  Landmark, Truck, Home, Car, Film, ArrowRight 
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
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

export const Industries: React.FC = () => {
  const navigate = useNavigate();
  const [selectedId, setSelectedId] = useState<string>('finance');

  const industries: IndustryItem[] = [
    {
      id: 'healthcare',
      title: 'Healthcare',
      icon: <Heart size={28} />,
      shortDesc: 'HIPAA-aligned databases, telehealth routes, and patient diagnostic assist configurations.',
      longDesc: 'We construct secure healthcare solutions that synchronize clinical workflows, route database records, and assist patient telehealth systems safely.',
      solution: 'Encrypted telemetry databases and telehealth connection routes',
      focusArea: 'Data Privacy Standards',
      focusDesc: 'HIPAA alignment configurations'
    },
    {
      id: 'finance',
      title: 'Finance',
      icon: <Coins size={28} />,
      shortDesc: 'Cryptographic ledger books, automated fraud tracking, and transactional API routes.',
      longDesc: 'Empowering banking and payment operators with transaction syncing ledgers, anomaly detection scripts, and strict identity authentication systems.',
      solution: 'Secure transaction pipelines and ledger validation checks',
      focusArea: 'Identity Authentication',
      focusDesc: 'Multi-factor access rules'
    },
    {
      id: 'retail',
      title: 'Retail & E-commerce',
      icon: <ShoppingBag size={28} />,
      shortDesc: 'Inventory management triggers, shopping cart workflows, and recommendation indexing.',
      longDesc: 'We connect inventory databases with multi-region web portals and mobile checkouts to synchronize inventory items in real-time.',
      solution: 'Real-time database sync and secure checkout paths',
      focusArea: 'Inventory Syncing',
      focusDesc: 'Database-triggered updates'
    },
    {
      id: 'manufacturing',
      title: 'Manufacturing',
      icon: <Factory size={28} />,
      shortDesc: 'Embedded device telemetry trackers, operational dashboards, and hardware diagnostic checkers.',
      longDesc: 'Connecting shopfloor systems with cloud servers to display sensor readings, record operational alerts, and notify maintenance pods.',
      solution: 'IoT sensor telemetry networks and diagnostic dashboards',
      focusArea: 'Device Telemetry',
      focusDesc: 'Real-time sensor logs'
    },
    {
      id: 'education',
      title: 'Education',
      icon: <GraduationCap size={28} />,
      shortDesc: 'Student LMS databases, grading modules, and remote classroom connection pathways.',
      longDesc: 'We develop study platforms that store content securely, coordinate course catalogs, and display progress metrics cleanly.',
      solution: 'Corporate training platforms and database LMS software',
      focusArea: 'LMS Configurations',
      focusDesc: 'Secure database portals'
    },
    {
      id: 'government',
      title: 'Government',
      icon: <Landmark size={28} />,
      shortDesc: 'Encrypted civic directories, request forms routing, and authenticated citizen portals.',
      longDesc: 'Helping municipal departments digitize document requests, secure information access, and coordinate municipal pipelines securely.',
      solution: 'Secure document request routers and registry databases',
      focusArea: 'Access Governance',
      focusDesc: 'Zero-trust infrastructure configuration'
    },
    {
      id: 'logistics',
      title: 'Logistics & Supply Chain',
      icon: <Truck size={28} />,
      shortDesc: 'Transit telemetry monitors, automated route calculators, and dispatch dashboards.',
      longDesc: 'Optimizing warehouse inventory tracking, shipment logs, and fleet telemetry reporting using secure database triggers.',
      solution: 'Automated dispatch scripts and transit log databases',
      focusArea: 'Transit Logs',
      focusDesc: 'Automated route indicators'
    },
    {
      id: 'real-estate',
      title: 'Real Estate',
      icon: <Home size={28} />,
      shortDesc: 'MLS sync templates, property lease databases, and contract document builders.',
      longDesc: 'We develop transaction managers that index property listings, log client agreements, and route maintenance requests.',
      solution: 'Real-time MLS syncing databases and tenant portals',
      focusArea: 'Listing Syncing',
      focusDesc: 'MLS API integrations'
    },
    {
      id: 'automotive',
      title: 'Automotive',
      icon: <Car size={28} />,
      shortDesc: 'Vehicle telemetry parsers, diagnostic telemetry, and battery status reporting.',
      longDesc: 'Engineering vehicle connection gateways that report battery logs, engine error states, and travel paths securely.',
      solution: 'Connected vehicle telemetry APIs and logging platforms',
      focusArea: 'API Gateways',
      focusDesc: 'Telemetry payload processing'
    },
    {
      id: 'media',
      title: 'Media & Entertainment',
      icon: <Film size={28} />,
      shortDesc: 'Streaming storage caches, metadata index systems, and media upload pathways.',
      longDesc: 'Configuring servers and file cache layers to stream video formats, catalog metadata titles, and protect copyright files.',
      solution: 'High-availability storage pools and content indexing tools',
      focusArea: 'Content Caching',
      focusDesc: 'Multi-region content availability'
    }
  ];

  const selectedIndustry = industries.find(ind => ind.id === selectedId) || industries[0];

  return (
    <section id="industries" className={styles.industriesSection}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <span className="section-subtitle">Industries We Serve</span>
          <h2 className="section-title">Sector-Specific Solutions</h2>
          <p className="section-desc">
            We adapt our core capabilities to address the compliance, scaling, and database needs of specific sectors.
          </p>
        </div>

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
              <h3 className={styles.detailTitle}>{selectedIndustry.title} Infrastructure</h3>
              <p className={styles.detailBody}>{selectedIndustry.longDesc}</p>
              
              <div style={{ marginTop: '0.75rem' }}>
                <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase' }}>
                  Core Algorithyum Delivery:
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
                  <span className={styles.metricValue} style={{ fontSize: '1.2rem', lineHeight: '1.4' }}>SECURE ARCHITECTURE</span>
                  <span className={styles.metricLabel}>Operational Alignment</span>
                </div>
              </div>

              <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'flex-start' }}>
                <button
                  onClick={() => navigate(`/industries/${selectedIndustry.id}`)}
                  className="btn btn-primary"
                  aria-label={`Explore our dedicated ${selectedIndustry.title} engineering solutions`}
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
