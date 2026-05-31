// src/pages/Gallery/Gallery.jsx
// Pankaj Traders — Gallery Page
// 99 images from /public/gallery/

import React, { useState, useCallback, useEffect } from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/image-gallery.css';
import { X, ZoomIn } from 'lucide-react';
import styles from './Gallery.module.css';

// ── All 99 gallery images ──────────────────────────────────────────────────────
const GALLERY_IMAGES = Array.from({ length: 99 }, (_, i) => ({
  src:         `/gallery/${i + 1}.jpg`,
  original:    `/gallery/${i + 1}.jpg`,
  thumbnail:   `/gallery/${i + 1}.jpg`,
  description: `Pankaj Traders — Photo ${i + 1}`,
}));

// ─── COMPONENT ────────────────────────────────────────────────────────────────
const Gallery = () => {
  const [lightboxOpen, setLightboxOpen]   = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightbox = useCallback((idx) => {
    setLightboxIndex(idx);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  }, []);

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
          <p className={styles.heroCount}>{GALLERY_IMAGES.length} Photos</p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          2. IMAGE GRID
      ════════════════════════════════════════════════════ */}
      <section className={styles.gridSection}>
        <div className={styles.grid}>
          {GALLERY_IMAGES.map((img, idx) => (
            <button
              key={idx}
              className={styles.gridItem}
              onClick={() => openLightbox(idx)}
              aria-label={`Open photo ${idx + 1}`}
            >
              <img
                src={img.src}
                alt={`Pankaj Traders photo ${idx + 1}`}
                className={styles.gridItemImage}
                loading="lazy"
              />
              <div className={styles.gridOverlay} aria-hidden="true">
                <div className={styles.zoomIcon}>
                  <ZoomIn size={24} />
                </div>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          3. LIGHTBOX MODAL
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
            <button
              className={styles.closeBtn}
              onClick={closeLightbox}
              aria-label="Close photo viewer"
            >
              <X size={20} />
            </button>

            <ImageGallery
              items={GALLERY_IMAGES}
              startIndex={lightboxIndex}
              showPlayButton={true}
              showFullscreenButton={true}
              autoPlay={false}
              slideInterval={3500}
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