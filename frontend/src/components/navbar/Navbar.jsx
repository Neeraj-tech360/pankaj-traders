import { NavLink, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import styles from "./Navbar.module.css";


const XIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  const navLinkClass = ({ isActive }) =>
    `${styles.navButton} ${isActive ? styles.navButtonActive : ""}`;

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  return (
    <div className={styles.navElements}>
      {/* Mobile overlay background */}
      {isMenuOpen && (
        <div className={styles.mobileOverlay} onClick={closeMenu} />
      )}

      <div className={styles.logo}>
        <Link to="/" onClick={closeMenu}>
          <button className={styles.logoBtn}>
            <img src="/pt_logo.svg" alt="Yahora Logo" />
          </button>
        </Link>
      </div>

      <div className={`${styles.navLinks} ${isMenuOpen ? styles.active : ""}`}>
        {/* Mobile Menu Header (Only visible on small screens) */}
        <div className={styles.mobileMenuHeader}>
          <img
            src="/pt_logo.svg"
            alt="Yahora"
            className={styles.mobileLogo}
          />
          <button className={styles.closeMenuBtn} onClick={closeMenu}>
            <XIcon />
          </button>
        </div>

        <NavLink to="/" end className={navLinkClass} onClick={closeMenu}>
          <span>Home</span>
        </NavLink>
        <NavLink to="/products" className={navLinkClass} onClick={closeMenu}>
          <span>Products</span>
        </NavLink>
        <NavLink to="/services" className={navLinkClass} onClick={closeMenu}>
          <span>Services</span>
        </NavLink>
        <NavLink to="/about" className={navLinkClass} onClick={closeMenu}>
          <span>About Us</span>
        </NavLink>
        <NavLink to="/gallery" className={navLinkClass} onClick={closeMenu}>
          <span>Gallery</span>
        </NavLink>
        <NavLink to="/contact" className={navLinkClass} onClick={closeMenu}>
          <span>Contact Us</span>
        </NavLink>
      </div>

      {/* Hamburger button (mobile only) */}
      <div className={styles.navActions}>
        <button className={styles.hamburgerMenu} onClick={toggleMenu} aria-label="Toggle menu">
          <FiMenu size={24} />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
