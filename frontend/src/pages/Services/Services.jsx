// src/pages/Services/Services.jsx
// Pankaj Traders — Services Page

import React from "react";
import { Link } from "react-router-dom";
import {
  Wrench,
  Zap,
  Droplets,
  Hammer,
  Paintbrush,
  Box,
  MapPin,
  Phone,
  HardHat,
  Settings,
  Users,
  ShieldCheck,
  Send,
} from "lucide-react";
import styles from "./Services.module.css";

// ─── SERVICES DATA ────────────────────────────────────────────────────────────
const SERVICES_LIST = [
  {
    id: 1,
    icon: Wrench,
    title: "Plumber",
    desc: "Expert pipe fitting, leak repair, tap installation, and complete bathroom setup.",
  },
  {
    id: 2,
    icon: Zap,
    title: "Electrician",
    desc: "Safe house wiring, switchboard fixing, fan & appliance installation, and fault repair.",
  },
  {
    id: 3,
    icon: Droplets,
    title: "Hand Pump Technician",
    desc: "Boring, pipe insertion, motor coupling, and repairing all hand pump issues.",
  },
  {
    id: 4,
    icon: Hammer,
    title: "Shuttering Carpenter",
    desc: "Precise framework for roofs, pillars, and beams ensuring structural stability.",
  },
  {
    id: 5,
    icon: Paintbrush,
    title: "POP Designer",
    desc: "Beautiful ceiling designs, wall putty finishes, and professional house painting.",
  },
  {
    id: 6,
    icon: Box,
    title: "Septic Tank Installer",
    desc: "Digging, fitting, and sealing durable septic tanks for long-lasting use.",
  },
  {
    id: 7,
    icon: HardHat,
    title: "Mason (Rajmistri)",
    desc: "Skilled bricklaying, plastering, flooring, and general masonry work.",
  },
  {
    id: 8,
    icon: Settings,
    title: "Tile & Marble Setter",
    desc: "Precision cutting and laying of tiles, granites, and marbles for flawless floors.",
  },
];

// ─── LOCALITIES DATA (Within 10km of 273202) ──────────────────────────────────
const LOCALITIES = [
  "Ramnagar Karjahan",
  "Sardar Nagar",
  "Khorabar / Suba Bazar",
  "Kunraghat (Koodaghat)",
  "MMMUT / Engineering College Area",
  "AIIMS / Medical Road",
  "Divya Nagar",
  "Deoria Bypass Road",
  "Naushad / Transport Nagar",
  "Mahadev Jharkhandi",
];

const Services = () => {
  return (
    <div className={styles.servicesContainer}>
      {/* ═══════════════════════════════════════════════════════════
          1. HERO SECTION
      ════════════════════════════════════════════════════════════ */}
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <span className={styles.heroBadge}>मजबूत निर्माण की पहली पसंद</span>
          <h1 className={styles.heroTitle}>Professional Building Services</h1>
          <p className={styles.heroSubtitle}>
            Whether you need a quick repair or a complete team for a new build,
            we have our own dedicated staff and actively connect you with
            verified professionals.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          3. SERVICES GRID
      ════════════════════════════════════════════════════════════ */}
      <section className={styles.gridSection}>
        <span className={styles.sectionTag}>What We Do</span>
        <h2 className={styles.sectionHeading}>
          Our Expert <span className={styles.orangeText}>Services</span>
        </h2>
        <p className={styles.sectionSubheading}>
          Everything you need to build and maintain your dream home, right here
          at Pankaj Traders.
        </p>

        <div className={styles.servicesGrid}>
          {SERVICES_LIST.map((service) => {
            const IconComp = service.icon;
            return (
              <div key={service.id} className={styles.serviceCard}>
                <div className={styles.serviceIconWrap}>
                  <IconComp size={32} strokeWidth={1.8} aria-hidden="true" />
                </div>
                <h3 className={styles.serviceTitle}>{service.title}</h3>
                <p className={styles.serviceDesc}>{service.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          4. SERVICE AREAS
      ════════════════════════════════════════════════════════════ */}
      <section className={styles.areasSection}>
        <div className={styles.areasContent}>
          <div className={styles.areasHeader}>
            <span className={styles.sectionTag}>Coverage</span>
            <h2 className={styles.sectionHeading}>Service Areas We Cover</h2>
            <p className={styles.sectionSubheading}>
              We provide swift service dispatch and material delivery within a radius of our shop in Ramnagar Karjahan (273202).
            </p>
          </div>
          <div className={styles.areasList}>
            {LOCALITIES.map((area, idx) => (
              <div key={idx} className={styles.areaPill}>
                <MapPin
                  size={16}
                  aria-hidden="true"
                  className={styles.areaIcon}
                />
                {area}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          5. CTA / BOOKING SECTION
      ════════════════════════════════════════════════════════════ */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaGlow} aria-hidden="true" />
        <div className={styles.ctaContent}>
          <h2>Book a Service Professional Today</h2>
          <p>
            Call us directly to book a service or message us on WhatsApp with
            your requirements. We will connect you with the right person
            immediately.
          </p>

          <div className={styles.ctaButtons}>
            <a href="tel:+919621552345" className={styles.ctaBtnOutline}>
              <Phone size={18} aria-hidden="true" />
              Call +91 96215 52345
            </a>
            <a href="tel:+918858755334" className={styles.ctaBtnOutline}>
              <Phone size={18} aria-hidden="true" />
              Call +91 88587 55334
            </a>
            <a
              href="https://wa.me/916306346835?text=Hello%20Pankaj%20Traders!%20I%20would%20like%20to%20book%20a%20service."
              target="_blank"
              rel="noopener noreferrer"
              className={styles.ctaBtnPrimary}
            >
              <Send size={18} aria-hidden="true" />
              WhatsApp Us (+91 63063 46835)
            </a>
          </div>
        </div>
      </section>
{/* ═══════════════════════════════════════════════════════════
          2. TRUST STRIP
      ════════════════════════════════════════════════════════════ */}
        <section className={styles.trustStrip}>
          <div className={styles.trustItem}>
            <Users className={styles.trustIcon} aria-hidden="true" />
            <div>
              <strong>In-House & Network Staff</strong>
              <p>Directly employed and trusted pros</p>
            </div>
          </div>
          <div className={styles.trustItem}>
            <ShieldCheck className={styles.trustIcon} aria-hidden="true" />
            <div>
              <strong>Verified Expertise</strong>
              <p>Experienced in residential & commercial</p>
            </div>
          </div>
        </section>
    </div>
  );
};

export default Services;
