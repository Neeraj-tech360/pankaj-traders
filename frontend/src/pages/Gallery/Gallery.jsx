// src/pages/Gallery/Gallery.jsx
// Pankaj Traders — Gallery Page
// ─────────────────────────────────────────────────────────────────────────────
// 📸 HOW TO ADD YOUR PHOTOS:
//    1. Create /public/gallery/ folder
//    2. Add your image files there
//    3. Update the GALLERY_IMAGES array below with the correct filenames
//    4. Categories available: 'Shop' | 'Products' | 'Work' | 'Team'
// ─────────────────────────────────────────────────────────────────────────────

import React, { useState, useCallback, useEffect } from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import { X, ZoomIn, Images } from 'lucide-react';
import styles from './Gallery.module.css';

// ── Category tabs ─────────────────────────────────────────────────────────────
const CATEGORIES = ['All', 'Shop', 'Products', 'Work', 'Team'];

// ── Gallery image data ─────────────────────────────────────────────────────────
// Replace src values with your actual image filenames from /public/gallery/
const GALLERY_IMAGES = [
  {
    src: '/gallery/shop-front.jpg',
    caption: 'Pankaj Traders — Ramnagar Karjahan, Near Four Lane',
    category: 'Shop',
  },
  {
    src: '/gallery/shop-inside-1.jpg',
    caption: 'Fully stocked shelves — every building material you need',
    category: 'Shop',
  },
  {
    src: '/gallery/shop-inside-2.jpg',
    caption: 'Plumbing and electrical supplies aisle',
    category: 'Shop',
  },
  {
    src: '/gallery/shop-inside-3.jpg',
    caption: 'Paint section with custom colour mixing machine',
    category: 'Shop',
  },
  {
    src: '/gallery/products-paints.jpg',
    caption: 'Wide range of paints, putty and primers',
    category: 'Products',
  },
  {
    src: '/gallery/products-pipes.jpg',
    caption: 'PVC pipes, fittings and all plumbing accessories',
    category: 'Products',
  },
  {
    src: '/gallery/products-electrical.jpg',
    caption: 'Wires, cables, switches and electrical boards',
    category: 'Products',
  },
  {
    src: '/gallery/products-cement.jpg',
    caption: 'Cement, sand (balu), gitti and construction aggregates',
    category: 'Products',
  },
  {
    src: '/gallery/products-tools.jpg',
    caption: 'Drill machines, grinders and power tools — buy or rent',
    category: 'Products',
  },
  {
    src: '/gallery/work-delivery.jpg',
    caption: 'Free delivery of heavy materials straight to your site',
    category: 'Work',
  },
  {
    src: '/gallery/work-site-1.jpg',
    caption: 'A home built start-to-finish with Pankaj Traders supplies',
    category: 'Work',
  },
  {
    src: '/gallery/team-proprietors.jpg',
    caption: 'Jitendra Kumar & Pankaj Kumar — Proprietors',
    category: 'Team',
  },
];

// ─── COMPONENT ────────────────────────────────────────────────────────────────
const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxOpen, setLightboxOpen]     = useState(false);
  const [lightboxIndex, setLightboxIndex]   = useState(0);

  // Filtered set based on active tab
  const filteredImages =
    activeCategory === 'All'
      ? GALLERY_IMAGES
      : GALLERY_IMAGES.filter(img => img.category === activeCategory);

  // Format for react-image-gallery
  const galleryItems = filteredImages.map(img => ({
    original:    img.src,
    thumbnail:   img.src,
    description: img.caption,
  }));

  // Open lightbox at a specific index
  const openLightbox = useCallback((idx) => {
    setLightboxIndex(idx);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  }, []);

  // Close lightbox
  const closeLightbox = useCallback(() => {
    setLightboxOpen(false);
    document.body.style.overflow = '';
  }, []);

  // ESC key closes lightbox
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') closeLightbox(); };
    if (lightboxOpen) window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [lightboxOpen, closeLightbox]);

  return (
    <div className={styles.galleryContainer}>

      {/* ═══════════════════════════════════════════════════
          1. HERO
      ════════════════════════════════════════════════════ */}
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <span className={styles.heroBadge}>📸 Est. 2014 · Gorakhpur</span>
          <h1>Step Inside Pankaj Traders</h1>
          <p>
            Loaded shelves. Busy job sites. The people who make it happen. —
            A visual story of everything we stock, supply, and stand behind.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          2. FILTER TABS
      ════════════════════════════════════════════════════ */}
      <section className={styles.filterSection}>
        <div className={styles.filterTabs} role="tablist" aria-label="Filter gallery by category">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              role="tab"
              aria-selected={activeCategory === cat}
              className={`${styles.filterTab} ${activeCategory === cat ? styles.filterTabActive : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
              {/* Count badge on non-All tabs */}
              {cat !== 'All' && (
                <span className={styles.filterCount}>
                  {GALLERY_IMAGES.filter(i => i.category === cat).length}
                </span>
              )}
            </button>
          ))}
        </div>
        <p className={styles.filterSubtext}>
          Showing <strong>{filteredImages.length}</strong> photo{filteredImages.length !== 1 ? 's' : ''}
        </p>
      </section>

      {/* ═══════════════════════════════════════════════════
          3. IMAGE GRID
      ════════════════════════════════════════════════════ */}
      <section className={styles.gridSection}>
        {filteredImages.length === 0 ? (
          /* Empty state */
          <div className={styles.emptyState}>
            <Images size={52} aria-hidden="true" />
            <p>No photos in this category yet. Check back soon!</p>
          </div>
        ) : (
          <div className={styles.grid}>
            {filteredImages.map((img, idx) => (
              <button
                key={`${img.src}-${idx}`}
                className={styles.gridItem}
                onClick={() => openLightbox(idx)}
                aria-label={`Open photo: ${img.caption}`}
              >
                {/* Photo */}
                <img
                  src={img.src}
                  alt={img.caption}
                  className={styles.gridItemImage}
                  loading="lazy"
                />

                {/* Hover overlay */}
                <div className={styles.gridOverlay} aria-hidden="true">
                  {/* Zoom icon — center */}
                  <div className={styles.zoomIcon}>
                    <ZoomIn size={26} />
                  </div>
                  {/* Caption + tag — bottom */}
                  <div className={styles.gridBottom}>
                    <span className={styles.gridCategoryTag}>{img.category}</span>
                    <p className={styles.gridCaption}>{img.caption}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        )}
      </section>

      {/* ═══════════════════════════════════════════════════
          4. LIGHTBOX MODAL
      ════════════════════════════════════════════════════ */}
      {lightboxOpen && (
        <div
          className={styles.lightboxOverlay}
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label="Photo viewer"
        >
          <div
            className={styles.lightboxInner}
            onClick={e => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              className={styles.closeBtn}
              onClick={closeLightbox}
              aria-label="Close photo viewer"
            >
              <X size={20} />
            </button>

            {/* react-image-gallery */}
            <ImageGallery
              items={galleryItems}
              startIndex={lightboxIndex}
              showPlayButton={true}
              showFullscreenButton={true}
              autoPlay={false}
              slideInterval={4000}
              thumbnailPosition="bottom"
              showIndex={true}
              onSlide={idx => setLightboxIndex(idx)}
            />
          </div>
        </div>
      )}

    </div>
  );
};

export default Gallery;