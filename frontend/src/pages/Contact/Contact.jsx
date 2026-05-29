// src/pages/Contact/Contact.jsx
// Pankaj Traders — Contact Us Page

import { useState } from "react";
import { Phone, MapPin, Clock, MessageCircle, Send } from "lucide-react";
import {
  FaLinkedin,
  FaXTwitter,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa6";
import styles from "./Contact.module.css";

// ─── CONTACT INFO TILES DATA ──────────────────────────────────────────────────
const CONTACT_TILES = [
  {
    icon: Phone,
    title: "Call Us",
    lines: ["9621552345, 8858755334", "For orders and inquiries"],
    link: "tel:+919621552345",
    linkText: "Call Now",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    lines: ["+91 63063 46835", "Quick replies, all days"],
    link: "https://wa.me/916306346835",
    linkText: "Message Us",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    lines: ["Ramnagar Karjahan, Near Four Lane Over-Bridge", "Uttar Pradesh — 273202"],
    link: "https://maps.app.goo.gl/vLoV6umQ7eSRetGx5",
    linkText: "Get Directions",
  },
  {
    icon: Clock,
    title: "Business Hours",
    lines: ["Monday – Sunday", "8:00 AM – 8:00 PM (All Days)"],
    link: null,
  },
];

// ─── PROPRIETOR TILES DATA ────────────────────────────────────────────────────
const PROPRIETORS = [
  {
    initials: "JK",
    name: "Jitendra Kumar",
    role: "Proprietor",
    phone: "+91 88587 55334",
    note: "Product inquiries, bulk orders, general questions",
    image: "/Jitendra_nc.png",
  },
  {
    initials: "PK",
    name: "Pankaj Kumar",
    role: "Proprietor",
    phone: "+91 96215 52345",
    note: "Deliveries, service workers, partnerships",
    image: "/Pankaj_nc.png",
  },
];

// ─── COMPONENT ────────────────────────────────────────────────────────────────
function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // ── WhatsApp redirect on submit (no backend needed) ──
  const handleSubmit = (e) => {
    e.preventDefault();
    const msg =
      `Hello Pankaj Traders! 👋\n\n` +
      `My name is *${formData.name}*.` +
      (formData.phone ? `\nPhone: ${formData.phone}` : "") +
      `\n\nMessage: ${formData.message}`;

    const encoded = encodeURIComponent(msg);
    window.open(`https://wa.me/916306346835?text=${encoded}`, "_blank");
    setStatus("✅ Opening WhatsApp...");
    setFormData({ name: "", phone: "", message: "" });
    setTimeout(() => setStatus(""), 3500);
  };

  return (
    <div className={styles.contactContainer}>
      {/* ═══════════════════════════════════════════════════
          1. HERO SECTION
      ════════════════════════════════════════════════════ */}
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <span className={styles.heroBadge}>Open Every Day · 8 AM – 8 PM</span>
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
            <center>
            <button type="submit" className={styles.submitBtn}>
              <Send size={16} aria-hidden="true" />
              Send via WhatsApp
            </button>
            </center>

            {status && (
              <p className={styles.statusMsg} role="status">
                {status}
              </p>
            )}
          </form>

          {/* Social Links — adapted from original with Pankaj Traders theme */}
          <div className={styles.socialLinks}>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X (Twitter)"
            >
              <FaXTwitter />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a href="mailto:" aria-label="Email">
              <FaEnvelope />
            </a>
          </div>
        </div>

        {/* ── RIGHT: Contact Info ── */}
        <div className={styles.infoWrap}>
          {/* Contact tiles */}
          <h2>Contact Information</h2>
          <p className={styles.infoSubtext}>
            Reach us through any of these channels.
          </p>

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
                    {tile.lines.map((line, i) => (
                      <p key={i}>{line}</p>
                    ))}
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
      
      {/* Updated Avatar Section */}
      <div className={styles.proprietorAvatar}>
        <img 
          src={p.image} 
          alt={`${p.name} - ${p.role}`} 
          style={{ width: '100%', height: '100%', objectFit: 'contain', borderRadius: 'inherit' }} 
        />
      </div>

      <div className={styles.proprietorInfo}>
        <strong>{p.name}</strong>
        <span>{p.role}</span>
        <a
          href={`tel:${p.phone.replace(/\s/g, "")}`}
          className={styles.proprietorPhone}
        >
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
          <p>Ramnagar Karjahan, Near Four Lane Over-Bridge, Uttar Pradesh 273202</p>
        </div>

        <div className={styles.mapWrapper}>
          <iframe
            title="Pankaj Traders Location on Google Maps"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d28516.028972672826!2d83.4411782!3d26.6963534!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39915d785a31a73d%3A0x653d1d7996462f84!2sPankaj%20Traders%20Hardware%20%23!5e0!3m2!1sen!2sin!4v1780057845517!5m2!1sen!2sin"
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
