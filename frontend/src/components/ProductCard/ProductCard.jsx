import React, { useState } from "react";
import { FaShareAlt } from "react-icons/fa";
import styles from "./ProductCard.module.css";

/* ── Pankaj Traders — ProductCard ──────────────────────────
   Displays: product image · product title · share button
   Keeps Yahora card dimensions & style, stripped to essentials
   ──────────────────────────────────────────────────────────── */
export default function ProductCard({ product }) {
  const [imgLoaded, setImgLoaded] = useState(false);
  const [shareToast, setShareToast] = useState(false);

  /* Share this product via Web Share API or clipboard fallback */
  const handleShare = async (e) => {
    e.stopPropagation();
    const text =
      `${product.title} — Available at Pankaj Traders, Ramnagar Karjahan, UP.\n` +
      `📞 +91 96215 52345  |  WhatsApp: +91 63063 46835`;
    try {
      if (navigator.share) {
        await navigator.share({ title: `Pankaj Traders — ${product.title}`, text });
      } else {
        await navigator.clipboard.writeText(text);
        setShareToast(true);
        setTimeout(() => setShareToast(false), 2000);
      }
    } catch {
      /* user cancelled or not supported */
    }
  };

  return (
    <div className={styles.card}>
      {/* ── Product Image ── */}
      <div className={styles.imageWrap}>
        {/* Rental badge */}
        {product.isRental && (
          <span className={styles.rentalBadge}>On Rent</span>
        )}

        {/* Skeleton shimmer while image loads */}
        {!imgLoaded && (
          <div className={`${styles.imgPlaceholder} ${styles.shimmer}`} />
        )}

        <img
          src={product.image}
          alt={product.title}
          className={`${styles.image} ${imgLoaded ? styles.imageVisible : ""}`}
          onLoad={() => setImgLoaded(true)}
          loading="lazy"
        />
      </div>

      {/* ── Footer: title + share ── */}
      <div className={styles.footer}>
        <h3 className={styles.title}>{product.title}</h3>

        <div className={styles.shareWrap}>
          {/* "Copied!" toast */}
          {shareToast && (
            <span className={styles.shareToast}>Copied!</span>
          )}
          <button
            className={styles.shareBtn}
            onClick={handleShare}
            title="Share this product"
            aria-label={`Share ${product.title}`}
          >
            <FaShareAlt size={13} />
          </button>
        </div>
      </div>
    </div>
  );
}