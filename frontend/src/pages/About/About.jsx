// src/pages/About/About.jsx
// Pankaj Traders — About Us Page
// Adapted from Sanshi E-Com About.jsx
// Photos: place owner photos in /src/assets/owners/ as jitendra.jpg and pankaj.jpg
//         Then replace the <OwnerAvatar> with <img src="..." className={styles.ownerImg} />

import { Shield, Truck, Star, Building2 } from 'lucide-react';
import styles from './About.module.css';

// ─── PLACEHOLDER AVATAR (remove when real photos are added) ──────────────────
const OwnerAvatar = ({ initials }) => (
  <div className={styles.ownerAvatarPlaceholder} aria-hidden="true">
    {initials}
  </div>
);

// ─── VALUES DATA ──────────────────────────────────────────────────────────────
const VALUES = [
  {
    icon: Shield,
    title: 'Quality Assured',
    desc: 'Every product we stock meets strict quality standards. We work only with trusted, established brands and verified suppliers.',
  },
  {
    icon: Building2,
    title: 'Complete Under One Roof',
    desc: 'From cement and sand to electrical wiring, paints, and appliances — find everything for any construction project in one visit.',
  },
  {
    icon: Truck,
    title: 'Doorstep Delivery',
    desc: 'Heavy materials like cement, gitti, and sand are delivered directly to your construction site. No extra hassle, no extra trips.',
  },
  {
    icon: Star,
    title: 'Trusted Since 2014',
    desc: 'Over 12 years of honest service to homeowners, contractors, and builders across Gorakhpur. Our reputation is our biggest asset.',
  },
];

// ─── COMPONENT ────────────────────────────────────────────────────────────────
function About() {
  return (
    <div className={styles.aboutContainer}>

      {/* ═══════════════════════════════════════════════════
          1. HERO SECTION
      ════════════════════════════════════════════════════ */}
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <span className={styles.heroBadge}>Est. 2014 · Gorakhpur, Uttar Pradesh</span>
          <h1>About Pankaj Traders</h1>
          <p>
            Gorakhpur's trusted construction and building materials store —
            serving homeowners, contractors, and builders for over 12 years.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          2. OUR STORY
      ════════════════════════════════════════════════════ */}
      <section className={styles.storySection}>
        <div className={styles.storyInner}>
          <span className={styles.sectionTag}>Our Story</span>
          <h2>
            Built on Trust,{' '}
            <span className={styles.orangeText}>Built for Builders</span>
          </h2>
          <div className={styles.storyContent}>
            <p>
              Pankaj Traders was founded in 2014 with a single mission: to be the most
              reliable and complete source for construction and building materials in the
              region. What started as a small hardware store has grown into Gorakhpur's
              trusted one-stop destination — from cement and sand to electrical wiring,
              plumbing, paints, and specialised appliances.
            </p>
            <p>
              Over 12 years, we have earned the trust of homeowners, contractors, and
              builders by consistently delivering quality products at honest prices. We
              understand that building a home is a significant undertaking — which is why
              we stock only trusted brands and ensure every customer gets exactly what
              they need, at every stage of their project.
            </p>
            <p>
              Beyond materials, we connect our customers with skilled service workers —
              plumbers, electricians, and more — making Pankaj Traders a truly complete
              building solution. From the very first brick to the final coat of paint,
              we stand with you every step of the way.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          3. PROPRIETORS
      ════════════════════════════════════════════════════ */}
      <section className={styles.ownersSection}>
        <div className={styles.ownersSectionInner}>
          <span className={styles.sectionTag}>Our Proprietors</span>
          <h2>
            The People Behind{' '}
            <span className={styles.orangeText}>Pankaj Traders</span>
          </h2>

          <div className={styles.ownersGrid}>

            {/* ── Jitendra Kumar ── */}
            <div className={styles.ownerCard}>
              <div className={styles.ownerImageWrap}>
                {/*
                  ✅ TO ADD PHOTO: Replace the OwnerAvatar below with:
                  <img src="/src/assets/owners/jitendra.jpg" alt="Jitendra Kumar"
                       className={styles.ownerImg} />
                */}
                <OwnerAvatar initials="JK" />
              </div>
              <div className={styles.ownerInfo}>
                <h3>Jitendra Kumar</h3>
                <span className={styles.ownerRole}>Proprietor</span>
                <p>
                  With over 12 years of hands-on experience in the construction
                  materials trade, Jitendra brings deep product knowledge and an
                  unwavering commitment to quality. His dedication to sourcing only
                  the best materials has made Pankaj Traders a go-to name among
                  serious builders and homeowners in Gorakhpur.
                </p>
              </div>
            </div>

            {/* ── Pankaj Kumar ── */}
            <div className={`${styles.ownerCard} ${styles.ownerCardReverse}`}>
              <div className={styles.ownerImageWrap}>
                {/*
                  ✅ TO ADD PHOTO: Replace the OwnerAvatar below with:
                  <img src="/src/assets/owners/pankaj.jpg" alt="Pankaj Kumar"
                       className={styles.ownerImg} />
                */}
                <OwnerAvatar initials="PK" />
              </div>
              <div className={styles.ownerInfo}>
                <h3>Pankaj Kumar</h3>
                <span className={styles.ownerRole}>Proprietor</span>
                <p>
                  The heart and name behind the shop, Pankaj Kumar has dedicated over
                  a decade to building trusted relationships with customers and suppliers
                  alike. His vision — to be a complete, all-in-one building solution for
                  every customer — continues to drive the shop's growth and reputation
                  across the region.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          4. OUR VALUES (dark section)
      ════════════════════════════════════════════════════ */}
      <section className={styles.valuesSection}>
        <span className={`${styles.sectionTag} ${styles.sectionTagInverted}`}>
          Our Values
        </span>
        <h2>What We Stand For</h2>
        <div className={styles.valuesGrid}>
          {VALUES.map((val, idx) => {
            const IconComp = val.icon;
            return (
              <div key={idx} className={styles.valueCard}>
                <div className={styles.valueIcon}>
                  <IconComp size={26} strokeWidth={1.8} aria-hidden="true" />
                </div>
                <h4>{val.title}</h4>
                <p>{val.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

    </div>
  );
}

export default About;