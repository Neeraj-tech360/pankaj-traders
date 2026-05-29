import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import styles from "./Navbar.module.css";

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

      {/* Brand logo / name */}
      <div className={styles.logo}>
        <NavLink to="/" onClick={closeMenu} className={styles.logoLink}>
          <span className={styles.brandName}>Pankaj Traders</span>
        </NavLink>
      </div>

      {/* Navigation links */}
      <div className={`${styles.navLinks} ${isMenuOpen ? styles.active : ""}`}>
        {/* Mobile menu header */}
        <div className={styles.mobileMenuHeader}>
          <span className={styles.mobileBrandName}>Pankaj Traders</span>
          <button className={styles.closeMenuBtn} onClick={closeMenu} aria-label="Close menu">
            <FiX size={20} />
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
