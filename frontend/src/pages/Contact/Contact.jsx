// src/pages/Contact/Contact.jsx
// Pankaj Traders — Contact Us Page
// Adapted from Sanshi Contact.jsx
// ✅ Frontend-only: no axios/backend. Form submits via WhatsApp redirect.
// ✅ Google Maps embed included. No API key needed.

import { useState } from 'react';
import { Phone, MapPin, Clock, MessageCircle, Send } from 'lucide-react';
import styles from './Contact.module.css';

// ─── CONTACT INFO TILES DATA ──────────────────────────────────────────────────
const CONTACT_TILES = [
  {
    icon: Phone,
    title: 'Call Us',
    lines: ['+91 96215 52345', 'For orders and inquiries'],
    link: 'tel:+919621552345',
    linkText: 'Call Now',
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp',
    lines: ['+91 63063 46835', 'Quick replies, all days'],
    link: 'https://wa.me/916306346835',
    linkText: 'Message Us',
  },
  {
    icon: MapPin,
    title: 'Visit Us',
    lines: ['Ramnagar Karjahan, Near Four Lane', 'Uttar Pradesh — 273202'],
    link: 'https://maps.app.goo.gl/vLoV6umQ7eSRetGx5',
    linkText: 'Get Directions',
  },
  {
    icon: Clock,
    title: 'Business Hours',
    lines: ['Monday – Sunday', '7:00 AM – 9:00 PM (All Days)'],
    link: null,
  },
];

// ─── PROPRIETOR TILES DATA ────────────────────────────────────────────────────
const PROPRIETORS = [
  {
    initials: 'JK',
    name: 'Jitendra Kumar',
    role: 'Proprietor',
    phone: '+91 96215 52345',
    note: 'Product inquiries, bulk orders, general questions',
  },
  {
    initials: 'PK',
    name: 'Pankaj Kumar',
    role: 'Proprietor',
    phone: '+91 63063 46835',
    note: 'Deliveries, service workers, partnerships',
  },
];

// ─── COMPONENT ────────────────────────────────────────────────────────────────
function Contact() {
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // ── WhatsApp redirect on submit (no backend needed) ──
  const handleSubmit = (e) => {
    e.preventDefault();
    const msg =
      `Hello Pankaj Traders! 👋\n\n` +
      `My name is *${formData.name}*.` +
      (formData.phone ? `\nPhone: ${formData.phone}` : '') +
      `\n\nMessage: ${formData.message}`;

    const encoded = encodeURIComponent(msg);
    window.open(`https://wa.me/916306346835?text=${encoded}`, '_blank');
    setStatus('✅ Opening WhatsApp...');
    setFormData({ name: '', phone: '', message: '' });
    setTimeout(() => setStatus(''), 3500);
  };

  return (
    <div className={styles.contactContainer}>

      {/* ═══════════════════════════════════════════════════
          1. HERO SECTION
      ════════════════════════════════════════════════════ */}
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <span className={styles.heroBadge}>Open Every Day · 7 AM – 9 PM</span>
          <h1>Get in Touch</h1>
          <p>
            Have questions about products, need a quote, or want to book a
            skilled worker? We're always ready to help you build.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          2. MAIN SECTION — Form + Info
      ════════════════════════════════════════════════════ */}
      <section className={styles.mainSection}>

        {/* ── LEFT: Contact Form ── */}
        <div className={styles.formWrap}>
          <h2>Send Us a Message</h2>
          <p className={styles.formSubtext}>
            Fill the form and we'll reply on WhatsApp within minutes.
          </p>

          <form className={styles.form} onSubmit={handleSubmit}>

            <div className={styles.formGroup}>
              <label htmlFor="name">Your Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Your WhatsApp or call number"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="message">Message *</label>
              <textarea
                id="message"
                name="message"
                placeholder="Tell us what you need — products, quantities, delivery, service workers, etc."
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className={styles.submitBtn}>
              <Send size={16} aria-hidden="true" />
              Send via WhatsApp
            </button>

            {status && (
              <p className={styles.statusMsg} role="status">
                {status}
              </p>
            )}
          </form>
        </div>

        {/* ── RIGHT: Contact Info ── */}
        <div className={styles.infoWrap}>

          {/* Contact tiles */}
          <h2>Contact Information</h2>
          <p className={styles.infoSubtext}>Reach us through any of these channels.</p>

          <div className={styles.tilesGrid}>
            {CONTACT_TILES.map((tile, idx) => {
              const IconComp = tile.icon;
              return (
                <div key={idx} className={styles.contactTile}>
                  <div className={styles.tileIcon}>
                    <IconComp size={20} strokeWidth={1.8} aria-hidden="true" />
                  </div>
                  <div className={styles.tileText}>
                    <h4>{tile.title}</h4>
                    {tile.lines.map((line, i) => <p key={i}>{line}</p>)}
                    {tile.link && (
                      <a
                        href={tile.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.tileLink}
                      >
                        {tile.linkText} →
                      </a>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Proprietor cards */}
          <h3 className={styles.proprietorsTitle}>Our Proprietors</h3>
          <div className={styles.proprietorsRow}>
            {PROPRIETORS.map((p, idx) => (
              <div key={idx} className={styles.proprietorCard}>
                <div className={styles.proprietorAvatar}>{p.initials}</div>
                <div className={styles.proprietorInfo}>
                  <strong>{p.name}</strong>
                  <span>{p.role}</span>
                  <a href={`tel:${p.phone.replace(/\s/g, '')}`} className={styles.proprietorPhone}>
                    {p.phone}
                  </a>
                  <p>{p.note}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          3. MAP SECTION
      ════════════════════════════════════════════════════ */}
      <section className={styles.mapSection}>
        <div className={styles.mapHeader}>
          <span className={styles.sectionTag}>Find Us</span>
          <h2>Our Location</h2>
          <p>Ramnagar Karjahan, Near Four Lane, Uttar Pradesh 273202</p>
        </div>

        <div className={styles.mapWrapper}>
          {/*
            💡 TO GET A PRECISE EMBED:
            1. Go to maps.google.com
            2. Search "Pankaj Traders Ramnagar Karjahan"
            3. Click Share → Embed a map → Copy HTML → paste only the src URL below
          */}
          <iframe
            title="Pankaj Traders Location on Google Maps"
            src="https://maps.google.com/maps?q=Ramnagar+Karjahan+Near+Four+Lane+Gorakhpur+Uttar+Pradesh+273202&output=embed"
            width="100%"
            height="460"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>

    </div>
  );
}

export default Contact;