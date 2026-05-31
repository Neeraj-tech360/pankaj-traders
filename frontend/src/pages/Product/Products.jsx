import React, {
  useState,
  useEffect,
  useMemo,
  useCallback,
  memo,
} from "react";
import { useSearchParams } from "react-router-dom";
import ProductCard from "../../components/ProductCard/ProductCard";
import styles from "./Products.module.css";
import {
  FaSearch,
  FaTimes,
  FaSlidersH,
  FaTag,
  FaMoneyBill,
  FaWrench,
  FaChevronDown,
  FaChevronUp,
  FaShoppingBag,
  FaTint,
  FaBolt,
  FaPaintBrush,
  FaBox,
  FaPlug,
  FaCog,
  FaHardHat,
  FaSortAmountDown,
} from "react-icons/fa";

/* ── Categories adapted for a construction & building materials shop ── */
const CATEGORIES = [
  { id: "plumbing",      label: "Plumbing",            icon: <FaTint size={13} /> },
  { id: "electrical",    label: "Electrical",           icon: <FaBolt size={13} /> },
  { id: "paints",        label: "Paints & Putty",       icon: <FaPaintBrush size={13} /> },
  { id: "cement",        label: "Cement & Masonry",     icon: <FaHardHat size={13} /> },
  { id: "tools",         label: "Tools & Equipment",    icon: <FaWrench size={13} /> },
  { id: "appliances",    label: "Appliances",           icon: <FaPlug size={13} /> },
  { id: "hardware",      label: "Hardware & Fasteners", icon: <FaCog size={13} /> },
  { id: "construction",  label: "Building Materials",   icon: <FaBox size={13} /> },
];

/* ── Sort options for a product catalog ── */
const SORT_OPTIONS = [
  { key: "featured",  label: "Featured"        },
  { key: "az",        label: "A to Z"          },
  { key: "price_low", label: "Price: Low First" },
];

/* ─────────────────────────────────────────────────────────────────
   PANKAJ TRADERS — PRODUCT CATALOG  (68 products)
   Images: Real photos from Pexels (free, no attribution required).
   To use your own shop photos: replace the `image` URL with a
   local path, e.g.  "/src/assets/products/opc-cement.jpg"
   ───────────────────────────────────────────────────────────────── */
const PEXELS = (id) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=400&h=420&fit=crop`;

const MOCK_PRODUCTS = [

  /* ══════════════════════════════════════════════════
     🚰  PLUMBING MATERIALS  (18 products)
  ══════════════════════════════════════════════════ */
  {
    id: "pl01",
    title: "PVC Pipe (Half inch to 4 inch, per metre)",
    category: "plumbing",
    price: 75,
    isRental: false,
    image: "https://5.imimg.com/data5/SELLER/Default/2022/3/TR/MT/SQ/117692394/rigid-pvc-pipe-1000x1000.jpg",   // vertical industrial pipes
  },
  {
    id: "pl02",
    title: "CPVC Pipe – Hot & Cold Water (per metre)",
    category: "plumbing",
    price: 120,
    isRental: false,
    image: "https://5.imimg.com/data5/SELLER/Default/2026/2/581504228/OE/VR/FS/116927944/prince-cpvc-pipes-and-fittings-1000x1000.jpeg",   // close-up steel pipes
  },
  {
    id: "pl03",
    title: "Water Storage Tank (500L to 2000L)",
    category: "plumbing",
    price: 2800,
    isRental: false,
    image: "https://5.imimg.com/data5/ANDROID/Default/2025/11/560299405/GO/QV/MD/24563462/product-jpeg-1000x1000.jpg",  // large industrial storage tanks
  },
  {
    id: "pl04",
    title: "Pipe Fittings – Elbow, Tee, Socket, Reducer",
    category: "plumbing",
    price: 25,
    isRental: false,
    image: "https://as2.ftcdn.net/v2/jpg/04/60/10/49/1000_F_460104945_YrTEmqCJGgkkqd2jcJusoVCmW3FlgOak.jpg",   // metal pipes & fittings
  },
  {
    id: "pl05",
    title: "Bib Cock Tap (Wall Mounted)",
    category: "plumbing",
    price: 280,
    isRental: false,
    image: PEXELS(36215888),  // outdoor wall faucet dripping
  },
  {
    id: "pl06",
    title: "Pillar Cock Tap (Basin Tap)",
    category: "plumbing",
    price: 320,
    isRental: false,
    image: PEXELS(3616761),   // two metal faucets on white wall
  },
  {
    id: "pl07",
    title: "Mixer Tap / Single-Lever Faucet",
    category: "plumbing",
    price: 850,
    isRental: false,
    image: PEXELS(33745624),  // ornate brass tap
  },
  {
    id: "pl08",
    title: "Ball Valve (Half inch to 2 inch)",
    category: "plumbing",
    price: 85,
    isRental: false,
    image: PEXELS(12040632),  // chrome sink tap valves
  },
  {
    id: "pl09",
    title: "Gate Valve & Check Valve",
    category: "plumbing",
    price: 150,
    isRental: false,
    image: PEXELS(10099095),  // contemporary bathroom faucet
  },
  {
    id: "pl10",
    title: "Shower & Shower Head (Overhead & Handheld)",
    category: "plumbing",
    price: 650,
    isRental: false,
    image: PEXELS(6934184),   // modern bathroom with shower
  },
  {
    id: "pl11",
    title: "Wash Basin with Pedestal",
    category: "plumbing",
    price: 2800,
    isRental: false,
    image: PEXELS(6980725),   // modern bathroom washbasin
  },
  {
    id: "pl12",
    title: "Stainless Steel Kitchen Sink",
    category: "plumbing",
    price: 3200,
    isRental: false,
    image: PEXELS(7031767),   // clean bathroom sink
  },
  {
    id: "pl13",
    title: "Western & Indian Style Toilet Commode",
    category: "plumbing",
    price: 4500,
    isRental: false,
    image: PEXELS(7018822),   // contemporary bathroom toilet
  },
  {
    id: "pl14",
    title: "Cistern / Flush Tank",
    category: "plumbing",
    price: 1500,
    isRental: false,
    image: PEXELS(7511697),   // bathroom with bathtub & toilet
  },
  {
    id: "pl15",
    title: "Flexible Connection Hose (Geyser & Basin)",
    category: "plumbing",
    price: 120,
    isRental: false,
    image: PEXELS(9658236),   // pipes
  },
  {
    id: "pl16",
    title: "Floor Trap & S.S. Jaali (Drain Cover)",
    category: "plumbing",
    price: 80,
    isRental: false,
    image: PEXELS(8581897),   // metal pipe fittings
  },
  {
    id: "pl17",
    title: "Solvent Cement & Teflon Tape",
    category: "plumbing",
    price: 60,
    isRental: false,
    image: PEXELS(1029243),   // flat-lay hand tools (includes tape)
  },
  {
    id: "pl18",
    title: "Plastic Bucket & Mug Set",
    category: "plumbing",
    price: 250,
    isRental: false,
    image: PEXELS(5691680),   // plastic bucket with white paint
  },

  /* ══════════════════════════════════════════════════
     ⚡  ELECTRICAL PRODUCTS  (13 products)
  ══════════════════════════════════════════════════ */
  {
    id: "el01",
    title: "Electrical Cable & Wire (per metre, all sizes)",
    category: "electrical",
    price: 32,
    isRental: false,
    image: PEXELS(12266914),  // close-up colourful cable wires
  },
  {
    id: "el02",
    title: "Modular Switch & Switchboard (6-module)",
    category: "electrical",
    price: 380,
    isRental: false,
    image: PEXELS(5691642),   // power socket during construction
  },
  {
    id: "el03",
    title: "Socket & Plug (5A and 16A)",
    category: "electrical",
    price: 80,
    isRental: false,
    image: PEXELS(5691642),   // electrical socket
  },
  {
    id: "el04",
    title: "MCB – Miniature Circuit Breaker",
    category: "electrical",
    price: 220,
    isRental: false,
    image: PEXELS(2182863),   // circuit board electronics
  },
  {
    id: "el05",
    title: "RCCB – Residual Current Circuit Breaker",
    category: "electrical",
    price: 680,
    isRental: false,
    image: PEXELS(3520697),   // PCB circuits close-up
  },
  {
    id: "el06",
    title: "Distribution Board (DB Box)",
    category: "electrical",
    price: 1200,
    isRental: false,
    image: PEXELS(2182863),   // circuit board
  },
  {
    id: "el07",
    title: "LED Bulb, Tube Light & Panel Light",
    category: "electrical",
    price: 120,
    isRental: false,
    image: PEXELS(10196790),  // colourful LED tube lights
  },
  {
    id: "el08",
    title: "PVC Conduit / Electrical Pipe (per metre)",
    category: "electrical",
    price: 28,
    isRental: false,
    image: PEXELS(9658236),   // industrial pipes (conduit)
  },
  {
    id: "el09",
    title: "Casing Capping (Open Wiring, per metre)",
    category: "electrical",
    price: 18,
    isRental: false,
    image: PEXELS(14019256),  // electrical wires on wooden post
  },
  {
    id: "el10",
    title: "Bulb Holder & Ceiling Rose",
    category: "electrical",
    price: 55,
    isRental: false,
    image: PEXELS(45072),     // glowing light bulb
  },
  {
    id: "el11",
    title: "Fan Regulator (5-Step & Electronic)",
    category: "electrical",
    price: 180,
    isRental: false,
    image: PEXELS(5691642),   // electrical switch/socket
  },
  {
    id: "el12",
    title: "Extension Board & Spike Buster",
    category: "electrical",
    price: 380,
    isRental: false,
    image: PEXELS(12266914),  // colourful wires
  },
  {
    id: "el13",
    title: "Insulation / Electrical Tape",
    category: "electrical",
    price: 35,
    isRental: false,
    image: PEXELS(1029243),   // hand tools flat lay (tape visible)
  },

  /* ══════════════════════════════════════════════════
     🔌  APPLIANCES  (5 products)
  ══════════════════════════════════════════════════ */
  {
    id: "ap01",
    title: "Submersible Water Pump (0.5 HP to 2 HP)",
    category: "appliances",
    price: 5500,
    isRental: false,
    image: PEXELS(6537731),   // industrial plant with tanks/pumps
  },
  {
    id: "ap02",
    title: "Water Motor / Engine (Monoblock, 1 HP)",
    category: "appliances",
    price: 3200,
    isRental: false,
    image: PEXELS(16647824),  // close-up modern machinery
  },
  {
    id: "ap03",
    title: "Electric Geyser & Water Heater (10 to 15 Litre)",
    category: "appliances",
    price: 5800,
    isRental: false,
    image: PEXELS(8142977),   // fully furnished bathroom (with geyser)
  },
  {
    id: "ap04",
    title: "Ceiling Fan (1200mm, Energy Star Rated)",
    category: "appliances",
    price: 1800,
    isRental: false,
    image: PEXELS(16058393),  // interior industrial building (machinery)
  },
  {
    id: "ap05",
    title: "Wall Fan & Exhaust Fan",
    category: "appliances",
    price: 1200,
    isRental: false,
    image: PEXELS(11905667),  // machinery in factory
  },

  /* ══════════════════════════════════════════════════
     🛠️  TOOLS & EQUIPMENT  (8 products)
  ══════════════════════════════════════════════════ */
  {
    id: "tl01",
    title: "Rotary Drill Machine (For Sale)",
    category: "tools",
    price: 2800,
    isRental: false,
    image: PEXELS(6790105),   // person using a drill
  },
  {
    id: "tl02",
    title: "Rotary Drill Machine (On Rent – per day)",
    category: "tools",
    price: 180,
    isRental: true,
    image: PEXELS(8961401),   // man holding power drill on site
  },
  {
    id: "tl03",
    title: "Angle Grinder 4.5 inch (On Rent – per day)",
    category: "tools",
    price: 120,
    isRental: true,
    image: PEXELS(8973680),   // industrial metal cutting with sparks
  },
  {
    id: "tl04",
    title: "Wire Tester & Multi-Meter",
    category: "tools",
    price: 150,
    isRental: false,
    image: PEXELS(162553),    // set of wrenches/tools
  },
  {
    id: "tl05",
    title: "Wire Stripper & Crimping Plier Set",
    category: "tools",
    price: 280,
    isRental: false,
    image: PEXELS(1029243),   // flat-lay of hand tools
  },
  {
    id: "tl06",
    title: "Hammer, Screwdriver & Wrench Set",
    category: "tools",
    price: 850,
    isRental: false,
    image: PEXELS(909256),    // handheld tools on workbench
  },
  {
    id: "tl07",
    title: "Trowel & Karni Set (Mason's Plastering Tools)",
    category: "tools",
    price: 380,
    isRental: false,
    image: PEXELS(1029243),   // hand tools including chisel/spatula
  },
  {
    id: "tl08",
    title: "Shovel (Phawda) & Iron Pan (Tasla)",
    category: "tools",
    price: 450,
    isRental: false,
    image: PEXELS(18355812),  // construction workers on building site
  },

  /* ══════════════════════════════════════════════════
     🧱  CEMENT & MASONRY  (4 products)
  ══════════════════════════════════════════════════ */
  {
    id: "cm01",
    title: "OPC Cement (50 kg Bag)",
    category: "cement",
    price: 390,
    isRental: false,
    image: PEXELS(11255262),  // concrete surface texture close-up
  },
  {
    id: "cm02",
    title: "PPC Cement (50 kg Bag)",
    category: "cement",
    price: 370,
    isRental: false,
    image: PEXELS(3964604),   // white concrete wall
  },
  {
    id: "cm03",
    title: "Waterproofing Chemical (Dr. Fixit & equivalent)",
    category: "cement",
    price: 850,
    isRental: false,
    image: PEXELS(16001335),  // concrete wall with exposed rebar
  },
  {
    id: "cm04",
    title: "Binding Wire (Tying Wire, per kg)",
    category: "cement",
    price: 62,
    isRental: false,
    image: PEXELS(8581897),   // close-up steel/metal industrial
  },

  /* ══════════════════════════════════════════════════
     🏗️  BUILDING MATERIALS  (5 products)
  ══════════════════════════════════════════════════ */
  {
    id: "cn01",
    title: "Balu & Morang – River Sand (per cubic foot)",
    category: "construction",
    price: 38,
    isRental: false,
    image: PEXELS(32967189),  // close-up rough gravel/stone pile
  },
  {
    id: "cn02",
    title: "Gitti – Crushed Stone Aggregate (per cubic foot)",
    category: "construction",
    price: 45,
    isRental: false,
    image: PEXELS(32967189),  // gravel pile texture
  },
  {
    id: "cn03",
    title: "TMT Sariya / Rebar Steel Bar (per kg)",
    category: "construction",
    price: 72,
    isRental: false,
    image: PEXELS(7931),      // unfinished concrete building with steel rebar
  },
  {
    id: "cn04",
    title: "Red Bricks & AAC Blocks (per piece)",
    category: "construction",
    price: 12,
    isRental: false,
    image: PEXELS(259915),    // red brick wall
  },
  {
    id: "cn05",
    title: "Shuttering Mat & Safety Tarpaulin",
    category: "construction",
    price: 550,
    isRental: false,
    image: PEXELS(194096),    // grey & brown concrete brick wall
  },

  /* ══════════════════════════════════════════════════
     🎨  PAINTS & FINISHES  (9 products)
  ══════════════════════════════════════════════════ */
  {
    id: "pa01",
    title: "Interior Emulsion Paint (1L, 4L, 10L, 20L)",
    category: "paints",
    price: 280,
    isRental: false,
    image: PEXELS(5691680),   // paint bucket
  },
  {
    id: "pa02",
    title: "Exterior Emulsion Paint (1L, 4L, 10L, 20L)",
    category: "paints",
    price: 320,
    isRental: false,
    image: PEXELS(5583123),   // painting tools on floor with buckets
  },
  {
    id: "pa03",
    title: "Enamel Paint – Wood & Metal",
    category: "paints",
    price: 250,
    isRental: false,
    image: PEXELS(4348396),   // art painting tools on table
  },
  {
    id: "pa04",
    title: "Wall Putty (40 kg Bag)",
    category: "paints",
    price: 680,
    isRental: false,
    image: PEXELS(5691680),   // white paint/putty bucket
  },
  {
    id: "pa05",
    title: "Primer – Water-based & Oil-based",
    category: "paints",
    price: 380,
    isRental: false,
    image: PEXELS(5583123),   // painting setup
  },
  {
    id: "pa06",
    title: "Paint Stainers (For custom shade mixing)",
    category: "paints",
    price: 120,
    isRental: false,
    image: PEXELS(5691631),   // green paint roller on floor
  },
  {
    id: "pa07",
    title: "Custom Colour Mixing Service (Paint Machine)",
    category: "paints",
    price: 50,
    isRental: false,
    image: PEXELS(4348396),   // colourful art/paint tools
  },
  {
    id: "pa08",
    title: "Paint Brushes & Rollers (Set)",
    category: "paints",
    price: 180,
    isRental: false,
    image: PEXELS(5691631),   // roller applying green paint
  },
  {
    id: "pa09",
    title: "Sandpaper / Regmal (Per Sheet)",
    category: "paints",
    price: 18,
    isRental: false,
    image: PEXELS(909256),    // tools on workbench
  },

  /* ══════════════════════════════════════════════════
     🔩  HARDWARE & FASTENERS  (6 products)
  ══════════════════════════════════════════════════ */
  {
    id: "hw01",
    title: "Nut Bolts, Screws & Washers (Assorted Set)",
    category: "hardware",
    price: 180,
    isRental: false,
    image: PEXELS(162553),    // set of wrenches and hardware
  },
  {
    id: "hw02",
    title: "Wire Nails & Concrete Nails (per kg)",
    category: "hardware",
    price: 95,
    isRental: false,
    image: PEXELS(1029243),   // flat-lay tools (nails/hardware visible)
  },
  {
    id: "hw03",
    title: "Chain & Wire Rope (per metre)",
    category: "hardware",
    price: 85,
    isRental: false,
    image: PEXELS(8581897),   // close-up steel metal (chain-like)
  },
  {
    id: "hw04",
    title: "Safety Helmet & Protective Gear",
    category: "hardware",
    price: 380,
    isRental: false,
    image: PEXELS(38070),     // collection of construction safety helmets
  },
  {
    id: "hw05",
    title: "Wiper & Cleaning Accessories",
    category: "hardware",
    price: 180,
    isRental: false,
    image: PEXELS(909256),    // tools on workbench
  },
  {
    id: "hw06",
    title: "Engine Oil & Lubricants (per litre)",
    category: "hardware",
    price: 280,
    isRental: false,
    image: PEXELS(8973680),   // industrial machinery/oil
  },
];

/* ── Skeleton card shown while loading ── */
const SkeletonCard = memo(function SkeletonCard() {
  return (
    <div className={styles.skeleton}>
      <div className={`${styles.skeletonImg} ${styles.shimmer}`} />
      <div className={styles.skeletonBody}>
        <div className={`${styles.skeletonLine} ${styles.skeletonLineLg} ${styles.shimmer}`} />
        <div className={`${styles.skeletonLine} ${styles.skeletonLineSm} ${styles.shimmer}`} />
      </div>
    </div>
  );
});

/* ── Collapsible filter accordion section ── */
function FilterSection({ icon, title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className={styles.filterSection}>
      <button
        className={styles.filterSectionHead}
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
      >
        <span className={styles.filterSectionIcon}>{icon}</span>
        <span className={styles.filterSectionTitle}>{title}</span>
        <span className={styles.filterChevron}>
          {open ? <FaChevronUp size={11} /> : <FaChevronDown size={11} />}
        </span>
      </button>
      {open && (
        <div className={styles.filterSectionBody}>{children}</div>
      )}
    </div>
  );
}

/* ══════════════════════════════════════════════════
   PRODUCTS PAGE
   Adapted from Yahora Marketplace:
   ✓ Grid view (swipe removed)
   ✓ Sidebar filters (category, price, rental)
   ✓ Search + sort in top bar
   ✓ Mobile bottom-sheet filter drawer
   ✗ Swipe mode removed
   ✗ List New Item buttons removed
   ✗ University switcher removed
   ✗ Wishlist / My Listings / Conditions / Posting Date removed
   ══════════════════════════════════════════════════ */
export default function Products() {
  const [searchParams] = useSearchParams();
  const [products]  = useState(MOCK_PRODUCTS);
  const [loading, setLoading]       = useState(true);
  const [activeSort, setActiveSort] = useState("featured");
  const [searchQuery, setSearchQuery]   = useState("");
  const [showMobileFilter, setShowMobileFilter] = useState(false);

  /* Filter state — seed category from URL ?cat= param */
  const [selCategories, setSelCategories] = useState(() => {
    const cat = searchParams.get("cat");
    return cat ? [cat] : [];
  });
  const [priceRange, setPriceRange]       = useState([0, 50000]);
  const [showRentalOnly, setShowRentalOnly] = useState(false);

  /* Brief shimmer on mount to show skeleton cards nicely */
  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 700);
    return () => clearTimeout(t);
  }, []);

  /* Close mobile drawer on window resize to desktop */
  useEffect(() => {
    const onResize = () => { if (window.innerWidth > 768) setShowMobileFilter(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  /* Count active filters for badge */
  const activeFilterCount = useMemo(() => {
    let n = 0;
    if (selCategories.length) n++;
    if (priceRange[0] > 0 || priceRange[1] < 50000) n++;
    if (showRentalOnly) n++;
    return n;
  }, [selCategories, priceRange, showRentalOnly]);

  /* Clear all filters at once */
  const clearFilters = useCallback(() => {
    setSelCategories([]);
    setPriceRange([0, 50000]);
    setShowRentalOnly(false);
  }, []);

  /* Toggle a single category on/off */
  const toggleCategory = useCallback(
    (id) =>
      setSelCategories((prev) =>
        prev.includes(id) ? prev.filter((c) => c !== id) : [...prev, id]
      ),
    []
  );

  /* Apply filters + sort */
  const displayProducts = useMemo(() => {
    let list = [...products];

    /* Search */
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      list = list.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q)
      );
    }

    /* Category */
    if (selCategories.length) {
      list = list.filter((p) => selCategories.includes(p.category));
    }

    /* Price range */
    list = list.filter((p) => {
      const meetsMin = p.price >= priceRange[0];
      const meetsMax = priceRange[1] >= 50000 ? true : p.price <= priceRange[1];
      return meetsMin && meetsMax;
    });

    /* Rental only */
    if (showRentalOnly) {
      list = list.filter((p) => p.isRental);
    }

    /* Sort */
    if (activeSort === "az") {
      list = [...list].sort((a, b) => a.title.localeCompare(b.title));
    } else if (activeSort === "price_low") {
      list = [...list].sort((a, b) => a.price - b.price);
    }
    /* "featured" = default mock order */

    return list;
  }, [products, searchQuery, selCategories, priceRange, showRentalOnly, activeSort]);

  /* ── Sidebar content — shared between desktop sidebar & mobile drawer ── */
  const SidebarContent = (
    <aside className={styles.sidebar}>
      {/* Brand header (hidden inside mobile drawer via CSS) */}
      <div className={styles.sidebarBrand}>
        <span className={styles.sidebarBrandName}>Pankaj Traders</span>
        <span className={styles.sidebarBrandSub}>Product Catalog</span>
      </div>

      <div className={styles.filterList}>
        {/* Sort By — only rendered in mobile drawer (hidden on desktop via CSS) */}
        <div className={styles.mobileSortSection}>
          <FilterSection
            icon={<FaSortAmountDown size={13} />}
            title="Sort By"
            defaultOpen={true}
          >
            <div className={styles.sortSidebarGroup}>
              {SORT_OPTIONS.map((s) => (
                <button
                  key={s.key}
                  className={`${styles.sortSidebarBtn} ${
                    activeSort === s.key ? styles.sortSidebarBtnActive : ""
                  }`}
                  onClick={() => {
                    setActiveSort(s.key);
                    setShowMobileFilter(false);
                  }}
                >
                  {s.label}
                </button>
              ))}
            </div>
          </FilterSection>
        </div>

        {/* Category filter */}
        <FilterSection
          icon={<FaTag size={13} />}
          title="Category"
          defaultOpen={true}
        >
          <div className={styles.categoryGrid}>
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                className={`${styles.categoryChip} ${
                  selCategories.includes(cat.id) ? styles.categoryChipActive : ""
                }`}
                onClick={() => toggleCategory(cat.id)}
              >
                <span className={styles.categoryIcon}>{cat.icon}</span>
                <span className={styles.categoryLabel}>{cat.label}</span>
              </button>
            ))}
          </div>
        </FilterSection>

        {/* Price range filter */}
        <FilterSection icon={<FaMoneyBill size={13} />} title="Price Range">
          <div className={styles.priceRangeWrap}>
            <div className={styles.priceRangeLabels}>
              <span>₹{priceRange[0].toLocaleString("en-IN")}</span>
              <span>
                {priceRange[1] >= 50000
                  ? "₹50,000+"
                  : `₹${priceRange[1].toLocaleString("en-IN")}`}
              </span>
            </div>
            <input
              type="range"
              min="0"
              max="50000"
              step="500"
              value={priceRange[0]}
              className={styles.rangeInput}
              onChange={(e) =>
                setPriceRange([+e.target.value, priceRange[1]])
              }
              aria-label="Minimum price"
            />
            <input
              type="range"
              min="0"
              max="50000"
              step="500"
              value={priceRange[1]}
              className={styles.rangeInput}
              onChange={(e) =>
                setPriceRange([priceRange[0], +e.target.value])
              }
              aria-label="Maximum price"
            />
          </div>
        </FilterSection>

        {/* Rental products toggle */}
        <FilterSection icon={<FaWrench size={13} />} title="Rental Products">
          <button
            className={`${styles.toggleFilter} ${
              showRentalOnly ? styles.toggleFilterActive : ""
            }`}
            onClick={() => setShowRentalOnly((v) => !v)}
          >
            {showRentalOnly
              ? "✓ Showing rental items only"
              : "Show rental items only"}
          </button>
        </FilterSection>
      </div>

      {/* Clear all filters button */}
      {activeFilterCount > 0 && (
        <button className={styles.clearBtn} onClick={clearFilters}>
          <FaTimes size={12} /> Clear All Filters{" "}
          <span className={styles.clearBadge}>{activeFilterCount}</span>
        </button>
      )}
    </aside>
  );

  /* ── Render ── */
  return (
    <div className={styles.root}>
      {/* ── Mobile filter bottom-sheet drawer ── */}
      {showMobileFilter && (
        <div
          className={styles.mobileDrawerOverlay}
          onClick={() => setShowMobileFilter(false)}
          role="dialog"
          aria-label="Filter products"
          aria-modal="true"
        >
          <div
            className={styles.mobileDrawer}
            onClick={(e) => e.stopPropagation()}
          >
            <div className={styles.mobileDrawerHandle} />
            <div className={styles.mobileDrawerHeader}>
              <span className={styles.mobileDrawerTitle}>Filters</span>
              <button
                className={styles.mobileDrawerClose}
                onClick={() => setShowMobileFilter(false)}
                aria-label="Close filters"
              >
                <FaTimes size={15} />
              </button>
            </div>
            {SidebarContent}
          </div>
        </div>
      )}

      {/* ── Desktop sidebar ── */}
      <div className={styles.sidebarWrap}>{SidebarContent}</div>

      {/* ── Main content ── */}
      <main className={styles.main}>
        {/* Top bar: search | sort | mobile filter button */}
        <div className={styles.topBar}>
          {/* Search */}
          <div className={styles.searchWrap}>
            <span className={styles.searchIcon}>
              <FaSearch size={14} />
            </span>
            <input
              type="search"
              placeholder="Search products…"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={styles.searchInput}
              aria-label="Search products"
            />
            {searchQuery && (
              <button
                className={styles.searchClear}
                onClick={() => setSearchQuery("")}
                aria-label="Clear search"
              >
                <FaTimes size={13} />
              </button>
            )}
          </div>

          {/* Sort buttons (desktop) */}
          <div className={styles.sortGroup}>
            <span className={styles.sortLabel}>Sort:</span>
            {SORT_OPTIONS.map((s) => (
              <button
                key={s.key}
                className={`${styles.sortBtn} ${
                  activeSort === s.key ? styles.sortBtnActive : ""
                }`}
                onClick={() => setActiveSort(s.key)}
              >
                {s.label}
              </button>
            ))}
          </div>

          {/* Mobile filter toggle */}
          <button
            className={styles.mobileFilterBtn}
            onClick={() => setShowMobileFilter(true)}
            aria-label="Open filters"
          >
            <FaSlidersH size={17} />
            {activeFilterCount > 0 && (
              <span className={styles.mobileFilterBadge}>
                {activeFilterCount}
              </span>
            )}
          </button>
        </div>

        {/* Product count info */}
        {!loading && (
          <div className={styles.resultCount}>
            {displayProducts.length === 0
              ? "No products found"
              : `${displayProducts.length} product${displayProducts.length !== 1 ? "s" : ""} found`}
            {activeFilterCount > 0 && (
              <button className={styles.resultClearLink} onClick={clearFilters}>
                Clear filters
              </button>
            )}
          </div>
        )}

        {/* Product grid */}
        {loading ? (
          /* Skeleton grid */
          <div className={styles.grid}>
            {Array.from({ length: 8 }).map((_, i) => (
              <SkeletonCard key={i} />
            ))}
          </div>
        ) : displayProducts.length === 0 ? (
          /* Empty state */
          <div className={styles.emptyState}>
            <div className={styles.emptyIcon}>
              <FaShoppingBag size={52} color="#ddd" />
            </div>
            <h3 className={styles.emptyTitle}>
              {searchQuery
                ? `No results for "${searchQuery}"`
                : showRentalOnly
                ? "No rental products found"
                : "No products match your filters"}
            </h3>
            <p className={styles.emptyDesc}>
              Try adjusting your search or filters to find what you need.
            </p>
            {activeFilterCount > 0 && (
              <button className={styles.emptyBtnSecondary} onClick={clearFilters}>
                Clear Filters
              </button>
            )}
          </div>
        ) : (
          /* Products grid */
          <div className={styles.grid}>
            {displayProducts.map((product, i) => (
              <div
                key={product.id}
                className={styles.gridItem}
                style={{ animationDelay: `${Math.min(i * 35, 400)}ms` }}
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}