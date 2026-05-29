// src/pages/Home/Home.jsx
// Pankaj Traders — Home Page
// Adapted from Yahora project. Community Feed & Recent Listings removed.
// Video file: place your video in /public/ as "hero-video.mp4"

import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  Truck,
  HardHat,
  Wrench,
  Zap,
  Package,
  Phone,
  MapPin,
  Shield,
  CheckCircle,
  Layers,
  Settings,
  Award,
  ChevronRight,
  Palette,
  Hammer,
  Building2,
  Star,
  Clock,
  ChevronDown,
} from "lucide-react";
import styles from "./Home.module.css";

// ─── TAGLINES (typewriter cycles through these) ──────────────────────────────
const TAGLINES = [
  "निर्माण की हर जरूरत, बस एक नाम — Pankaj Traders",
  "बन रहा है घर? आइए पंकज ट्रेडर्स",
  "मजबूत निर्माण की पहली पसंद",
];

// ─── PRODUCT CATEGORY DATA ────────────────────────────────────────────────────
const PRODUCT_CATEGORIES = [
  {
    icon: Wrench,
    label: "Plumbing Materials",
    desc: "Pipes, fittings, taps, tanks & all plumbing accessories",
    color: "#0277BD",
    bg: "#E3F2FD",
    link: "/products?cat=plumbing",
  },
  {
    icon: Zap,
    label: "Electrical Supplies",
    desc: "Wires, cables, switches, sockets, boards & fans",
    color: "#E65100",
    bg: "#FFF3E0",
    link: "/products?cat=electrical",
  },
  {
    icon: Palette,
    label: "Paints & Putty",
    desc: "All brands, mixing machine for any custom colour",
    color: "#AD1457",
    bg: "#FCE4EC",
    link: "/products?cat=paints",
  },
  {
    icon: Layers,
    label: "Cement & Hardware",
    desc: "Sand, gitti, balu, cement, nut-bolts, chains & helmets",
    color: "#4E342E",
    bg: "#EFEBE9",
    link: "/products?cat=cement",
  },
  {
    icon: Hammer,
    label: "Tools & Machines",
    desc: "Drills, paint mixers, grinders & all power tools",
    color: "#2E7D32",
    bg: "#E8F5E9",
    link: "/products?cat=tools",
  },
  {
    icon: Package,
    label: "Appliances & More",
    desc: "Geysers, water pumps, motors, buckets & engine oil",
    color: "#6A1B9A",
    bg: "#F3E5F5",
    link: "/products?cat=appliances",
  },
];

// ─── TRUST STRIP DATA ─────────────────────────────────────────────────────────
const TRUST_ITEMS = [
  {
    icon: Award,
    title: "Est. 2014",
    sub: "12+ years of trusted service",
  },
  {
    icon: Shield,
    title: "Quality Assured",
    sub: "Only verified, branded materials",
  },
  {
    icon: Truck,
    title: "Delivery",
    sub: "For heavy & bulk orders",
  },
  {
    icon: Settings,
    title: "Skilled Workers",
    sub: "Plumbers, electricians & more",
  },
];

// ─── HOW WE SERVE YOU (3 steps) ───────────────────────────────────────────────
const STEPS = [
  {
    step: "01",
    icon: Phone,
    title: "Visit or Call Us",
    desc: "Walk in or call us at +91 9621552345 and +91 8858755334. Our experts will guide you to exactly the right materials for your project.",
  },
  {
    step: "02",
    icon: Package,
    title: "Pick Your Materials",
    desc: "Choose from 500+ construction, plumbing, electrical and hardware products — all quality-assured and fairly priced.",
  },
  {
    step: "03",
    icon: Truck,
    title: "We Deliver to You",
    desc: "Heavy materials like cement, sand and gitti? We deliver straight to your site — no extra hassle, no extra trips.",
  },
];

// ─── WHY CHOOSE US (4 benefits) ──────────────────────────────────────────────
const BENEFITS = [
  {
    icon: Building2,
    title: "Everything Under One Roof",
    desc: "From a single bolt to a full building's worth — find every material for any construction project in one visit.",
  },
  {
    icon: Star,
    title: "Best Prices Guaranteed",
    desc: "Competitive pricing with zero compromise on quality. Trusted brands at rates that keep your budget intact.",
  },
  {
    icon: HardHat,
    title: "Expert Service Workers",
    desc: "Need someone to do the actual work? We connect you with skilled plumbers, electricians, and masons.",
  },
  {
    icon: CheckCircle,
    title: "Trusted for 12+ Years",
    desc: "Since 2014, thousands of homeowners and contractors in Gorakhpur have relied on us for their builds.",
  },
];

// ─── COMPONENT ────────────────────────────────────────────────────────────────
const Home = () => {
  const videoRef = useRef(null);

  // ── Typewriter states ──
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(100);

  // ── Typewriter logic (unchanged from original) ──
  useEffect(() => {
    const handleType = () => {
      const i = loopNum % TAGLINES.length;
      const fullText = TAGLINES[i];
      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1),
      );
      setTypingSpeed(isDeleting ? 40 : 100);
      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 2800);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(500);
      }
    };
    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  // ── Slow video playback ──
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.75;
    }
  }, []);

  return (
    <div className={styles.homeContainer}>
      {/* ═══════════════════════════════════════════════════════════
          1. HERO SECTION
          Video: place your file in /public/ as hero-video.mp4
      ════════════════════════════════════════════════════════════ */}
      <section className={styles.heroSection}>
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className={styles.heroVideo}
          src="/hero-video.mp4"
        />
        <div className={styles.heroOverlay}>
          <div className={styles.heroContent}>
            {/* Badge */}
            <span className={styles.heroBadge}>
              ⚒️ Est. 2014 &nbsp;•&nbsp; Ramnagar Karjahan, Uttar Pradesh
            </span>

            {/* Typewriter headline */}
            <h1 className={styles.heroTitle}>
              {text}
              <span className={styles.typewriterCursor}>|</span>
            </h1>

            {/* CTA Buttons */}
            <div className={styles.heroButtons}>
              <Link to="/products" className={styles.learnMore}>
                <span className={styles.circle} aria-hidden="true">
                  <span className={`${styles.icon} ${styles.arrow}`}></span>
                </span>
                <span className={styles.buttonText}>Explore Products</span>
              </Link>
              <a
                href="https://wa.me/916306346835"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.btnWhatsApp}
              >
                {/* WhatsApp SVG icon */}
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>

        {/* Animated scroll indicator */}
        <div className={styles.scrollIndicator} aria-hidden="true">
  <ChevronDown size={16} className={styles.scrollArrow} />
</div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          2. STATS STRIP — dark bar with key numbers
      ════════════════════════════════════════════════════════════ */}
      <section className={styles.statsStrip}>
        <div className={styles.statItem}>
          <span className={styles.statNumber}>12+</span>
          <span className={styles.statLabel}>Years of Trust</span>
        </div>
        <div className={styles.statDivider} aria-hidden="true" />
        <div className={styles.statItem}>
          <span className={styles.statNumber}>500+</span>
          <span className={styles.statLabel}>Products Available</span>
        </div>
        <div className={styles.statDivider} aria-hidden="true" />
        <div className={styles.statItem}>
          <span className={styles.statNumber}>On Time</span>
          <span className={styles.statLabel}>Home Delivery</span>
        </div>
        <div className={styles.statDivider} aria-hidden="true" />
        <div className={styles.statItem}>
          <Clock size={28} className={styles.statIcon} aria-hidden="true" />
          <span className={styles.statLabel}>Open 8 AM – 8 PM Daily</span>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          3. PRODUCT CATEGORIES GRID
      ════════════════════════════════════════════════════════════ */}
      <section className={styles.categoriesSection}>
        <span className={styles.sectionTag}>What We Offer</span>
        <h2 className={styles.sectionHeading}>
          Everything to Build{" "}
          <span className={styles.orangeText}>Your Dream</span>
        </h2>
        <p className={styles.sectionSubheading}>
          From a single bolt to a full building's worth of materials — find it
          all at Pankaj Traders.
        </p>

        <div className={styles.categoriesGrid}>
          {PRODUCT_CATEGORIES.map((cat, idx) => {
            const IconComp = cat.icon;
            return (
              <Link
                to={cat.link}
                key={idx}
                className={styles.categoryCard}
                style={{ "--cat-color": cat.color, "--cat-bg": cat.bg }}
              >
                {/* Icon box */}
                <div className={styles.categoryIconWrap}>
                  <IconComp size={30} strokeWidth={1.8} aria-hidden="true" />
                </div>

                {/* Text */}
                <h3 className={styles.categoryLabel}>{cat.label}</h3>
                <p className={styles.categoryDesc}>{cat.desc}</p>

                {/* Arrow — appears on hover */}
                <span className={styles.categoryArrow} aria-hidden="true">
                  <ChevronRight size={16} />
                </span>
              </Link>
            );
          })}
        </div>

        <div className={styles.viewAllWrap}>
          <Link to="/products" className={styles.btnViewAll}>
            View All Products <ChevronRight size={18} aria-hidden="true" />
          </Link>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          4. HOW WE SERVE YOU — 3 step cards
      ════════════════════════════════════════════════════════════ */}
      <section className={styles.infoSection}>
        <span className={styles.sectionTag}>Our Process</span>
        <h2 className={styles.infoHeading}>How We Serve You</h2>
        <div className={`${styles.infoGrid} ${styles.stepsGrid}`}>
          {STEPS.map((s, idx) => {
            const IconComp = s.icon;
            return (
              <div key={idx} className={styles.featureCard}>
                {/* Background step number */}
                <div className={styles.featureStep}>{s.step}</div>

                <div className={styles.featureIcon}>
                  <IconComp size={44} strokeWidth={1.5} aria-hidden="true" />
                </div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <div className={styles.featureDot}></div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          5. TRUST STRIP — 4 white cards on warm background
      ════════════════════════════════════════════════════════════ */}
      <section className={styles.trustStrip}>
        {TRUST_ITEMS.map((item, idx) => {
          const IconComp = item.icon;
          return (
            <div key={idx} className={styles.trustItem}>
              <IconComp className={styles.trustIcon} aria-hidden="true" />
              <div>
                <strong>{item.title}</strong>
                <p>{item.sub}</p>
              </div>
            </div>
          );
        })}
      </section>

      {/* ═══════════════════════════════════════════════════════════
          6. WHY CHOOSE PANKAJ TRADERS — 4 benefit cards
      ════════════════════════════════════════════════════════════ */}
      <section className={`${styles.infoSection} ${styles.benefitsSection}`}>
        <span className={styles.sectionTag}>Our Promise</span>
        <h2 className={styles.infoHeading}>
          Why Builders Trust{" "}
          <span className={styles.orangeText}>Pankaj Traders</span>
        </h2>
        <div className={`${styles.infoGrid} ${styles.benefitsGrid}`}>
          {BENEFITS.map((b, idx) => {
            const IconComp = b.icon;
            return (
              <div key={idx} className={styles.featureCard}>
                <div className={styles.featureIcon}>
                  <IconComp size={44} strokeWidth={1.5} aria-hidden="true" />
                </div>
                <h3>{b.title}</h3>
                <p>{b.desc}</p>
                <div className={styles.featureDot}></div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          7. CTA SECTION
      ════════════════════════════════════════════════════════════ */}
      <section className={styles.ctaSection}>
        {/* decorative radial glow */}
        <div className={styles.ctaGlow} aria-hidden="true" />

        <div className={styles.ctaContent}>
          <h2>Ready to Build Your Dream?</h2>
          <p>
            Visit Pankaj Traders today or reach us on WhatsApp. We're open every
            day from 8 AM to 8 PM — ready to help you build.
          </p>

          <div className={styles.ctaButtons}>
            <Link to="/products" className={styles.ctaBtnPrimary}>
              Browse Products
            </Link>
            <Link to="/contact" className={styles.ctaBtnOutline}>
              <MapPin size={18} aria-hidden="true" />
              Find Us on Map
            </Link>
          </div>

          {/* Phone numbers */}
          <div className={styles.ctaContact}>
            <a href="tel:+919621552345" className={styles.ctaPhone}>
              <Phone size={15} aria-hidden="true" />
              +91 96215 52345
            </a>
            <span className={styles.ctaDivider} aria-hidden="true">
              •
            </span>
            <a href="tel:+918858755334" className={styles.ctaPhone}>
              <Phone size={15} aria-hidden="true" />
              +91 88587 55334
            </a>
            <span className={styles.ctaDivider} aria-hidden="true">
              •
            </span>
            <a
              href="https://wa.me/916306346835"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.ctaPhone}
            >
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              +91 63063 46835 (WhatsApp)
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
