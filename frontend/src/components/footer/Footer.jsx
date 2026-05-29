import { Link } from "react-router-dom";
import { MdLocationOn, MdEmail, MdAccessTime } from "react-icons/md";
import { FaPhone, FaWhatsapp, FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      {/* Brand description */}
      <div className={styles.description}>
        <p className={styles.brandName}>Pankaj Traders</p>
        <p className={styles.tagline}>निर्माण की हर जरूरत, बस एक नाम — Pankaj Traders</p>
        <p className={styles.about}>
          Your trusted partner for construction, plumbing, electrical, paints &amp; hardware since 2014.
        </p>
        <p className={styles.hours}>
          <MdAccessTime className={styles.icon} />
          <span>Mon–Sun: 7:00 AM – 9:00 PM</span>
        </p>
      </div>

      {/* Quick navigation links */}
      <nav className={styles.navigation}>
        <h4>Quick Links</h4>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/products">Products</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/gallery">Gallery</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
        </ul>
      </nav>

      {/* Contact information */}
      <div className={styles.contactInfo}>
        <h4>Contact Us</h4>
        <ul>
          <li>
            <MdLocationOn className={styles.icon} />
            <span>Ramnagar Karjahan, Near Four Lane, UP 273202</span>
          </li>
          <li>
            <FaPhone className={styles.icon} />
            <a href="tel:+919621552345">+91 9621552345</a>
          </li>
          <li>
            <FaWhatsapp className={styles.icon} />
            <a href="https://wa.me/916306346835" target="_blank" rel="noopener noreferrer">
              +91 6306346835
            </a>
          </li>
          <li>
            <MdEmail className={styles.icon} />
            <span>Email coming soon</span>
          </li>
        </ul>
      </div>

      {/* Social media links */}
      <div className={styles.socialMedia}>
        <h4>Follow Us</h4>
        <ul>
          <li>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FaInstagram className={styles.icon} /> Instagram
            </a>
          </li>
          <li>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FaFacebook className={styles.icon} /> Facebook
            </a>
          </li>
          <li>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FaYoutube className={styles.icon} /> YouTube
            </a>
          </li>
        </ul>
      </div>

      {/* Copyright and legal */}
      <div className={styles.copyright}>
        <p>GST: 09CVAPK5077L1Z4</p>
        <p>Copyright © 2026 Pankaj Traders. All Rights Reserved.</p>
        <div className={styles.legalLinks}>
          <a href="/terms">Terms &amp; Conditions</a>
          <span>|</span>
          <a href="/privacy">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
