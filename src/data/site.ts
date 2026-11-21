// ─────────────────────────────────────────────────────────────
// WAN NANEY Honey — all editable site content lives here.
// ─────────────────────────────────────────────────────────────
// PLACEHOLDERS / SAMPLES (user to replace):
// • PRICE (real, supplied by the user): sale ৳980, regular ৳1,250,
//   Save ৳270. Do NOT use any other price.
// • Reviews below are SAMPLE quotes — replace with real ones.
// • Contact details are not yet supplied — email / phone /
//   address are intentionally blank; the footer shows
//   "Contact details coming soon" until they are filled in.
// ─────────────────────────────────────────────────────────────

export const price = {
  sale: 980,
  regular: 1250,
  save: 270,
  currency: "৳",
  format: (n: number) => `৳${n.toLocaleString("en-IN")}`,
} as const;

export const site = {
  brand: "WAN NANEY",
  tagline: "Pure & Natural Honey",
  description:
    "WAN NANEY — Pure & Natural, Local Harvest. Hand-harvested from local hives, bottled at peak freshness.",
  contactNote: "Contact details coming soon",
  contact: {
    email: "",
    phone: "",
    address: "",
  },
} as const;

export const hero = {
  eyebrow: "Local Harvest · Small Batch",
  title: "Pure & Natural Honey",
  highlight: "Natural",
  subtext:
    "Hand-harvested from local hives and bottled at peak freshness. 100% raw, unfiltered honey — nothing added, nothing taken away.",
  primaryCta: "Order Now",
  secondaryCta: "Learn More",
  priceLine: "৳980",
  regularPriceLine: "৳1,250",
  saveLine: "Save ৳270",
  trustChips: ["100% Natural", "Raw & Unfiltered", "Locally Harvested"],
  jarAlt: "WAN NANEY Honey jar — Pure & Natural, Local Harvest",
} as const;

export const productDetails = {
  heading: "About Our Honey",
  intro:
    "Every jar starts in a local hive, not a factory. We harvest in small batches, cold-extract the honey, and bottle it exactly as the bees made it.",
  points: [
    {
      title: "100% Raw",
      text: "Unprocessed, so it keeps its natural enzymes and nutrients.",
    },
    {
      title: "Unfiltered",
      text: "Cold extracted to preserve natural goodness — no filtering.",
    },
    {
      title: "No Added Sugar",
      text: "Just pure, natural honey. Nothing else added.",
    },
    {
      title: "Locally Harvested",
      text: "Sourced from local apiaries — sustainable and ethical.",
    },
  ],
} as const;

export type BenefitIcon = "energy" | "immunity" | "sweetener" | "skin";

export const benefits = {
  heading: "Good for every day",
  subtext: "A spoonful of nature, in your tea, on your toast, or straight from the jar.",
  items: [
    {
      icon: "energy" as BenefitIcon,
      title: "Energy",
      text: "A natural boost to fuel your day and lift stamina.",
    },
    {
      icon: "immunity" as BenefitIcon,
      title: "Immunity",
      text: "Packed with antioxidants to support immune health, naturally.",
    },
    {
      icon: "sweetener" as BenefitIcon,
      title: "Natural Sweetener",
      text: "A pure alternative to sugar for tea, cooking and recipes.",
    },
    {
      icon: "skin" as BenefitIcon,
      title: "Skin & Health",
      text: "Supports skin wellness and overall well-being, naturally.",
    },
  ],
} as const;

// SAMPLE reviews — replace with real customer words.
export const reviews = {
  heading: "Loved by our customers",
  subtext: "Real taste, real honey — what people say after their first jar.",
  sample: true,
  items: [
    {
      name: "Ayesha R.",
      role: "Verified Buyer · SAMPLE",
      quote: "Absolutely pure and delicious. You can truly taste the natural sweetness — no additives, just real honey.",
    },
    {
      name: "Tanvir H.",
      role: "Verified Buyer · SAMPLE",
      quote: "Fresh, rich flavour and so smooth. I love that it is locally harvested. Will reorder again.",
    },
    {
      name: "Nusrat J.",
      role: "Verified Buyer · SAMPLE",
      quote: "The quality is outstanding. Pure and natural — it reminds me of honey from my grandmother's farm.",
    },
    {
      name: "Rafi K.",
      role: "Verified Buyer · SAMPLE",
      quote: "Genuinely the best honey I have tried. Pure taste, clean ingredient, and delivery was quick.",
    },
    {
      name: "Mehjabin S.",
      role: "Verified Buyer · SAMPLE",
      quote: "Perfect in my morning tea. Thick, golden and fragrant — you can tell it is the real thing.",
    },
    {
      name: "Arif M.",
      role: "Verified Buyer · SAMPLE",
      quote: "My whole family switched to this. No sugar, no syrup — just honest, local honey.",
    },
  ],
} as const;

export const faqs = {
  heading: "Frequently Asked Questions",
  subtext: "Everything you need to know about our honey.",
  items: [
    {
      q: "Is your honey pure and raw?",
      a: "Yes — WAN NANEY Honey is 100% pure, raw and unfiltered. We never add preservatives or sugars, and we never heat-process our honey, so all the natural enzymes and flavour stay intact.",
    },
    {
      q: "How fast is delivery?",
      a: "Orders are packed fresh and dispatched promptly. Delivery time depends on your location — we will confirm it when you place your order.",
    },
    {
      q: "How should I store the honey?",
      a: "Keep the jar in a cool, dry place away from direct sunlight, with the lid closed. Honey naturally lasts a very long time when stored this way. If it crystallises, warm the jar gently in warm water.",
    },
    {
      q: "How do I use WAN NANEY honey?",
      a: "Stir it into tea, spread it on toast, drizzle it over breakfast, or use it as a natural sweetener in cooking and recipes. One spoon a day is a great place to start.",
    },
    {
      q: "Do you offer Cash on Delivery?",
      a: "Yes — Cash on Delivery is available. You pay when your order reaches your door.",
    },
  ],
} as const;

export const order = {
  heading: "Order your jar",
  subtext:
    "Fill in the form and we will confirm your order. Pay with Cash on Delivery when it arrives.",
  codBadge: "Cash on Delivery Available",
  codNote: "Pay when you receive your order",
  submitLabel: "Order Now",
  successTitle: "Thank you! Your order is noted.",
  successText:
    "We have received your order details. We will call you shortly to confirm delivery.",
  quantities: ["1 jar — ৳980", "2 jars — ৳1,960", "3 jars — ৳2,940"],
  priceLine: "৳980",
  regularPriceLine: "৳1,250",
  saveLine: "Save ৳270",
} as const;

export const footer = {
  about:
    "Pure & Natural Honey — harvested locally with care, for the bees and for our community.",
  quickLinks: [
    { label: "Home", href: "#top" },
    { label: "About", href: "#about" },
    { label: "Benefits", href: "#benefits" },
    { label: "Reviews", href: "#reviews" },
    { label: "FAQ", href: "#faq" },
    { label: "Order", href: "#order" },
  ],
} as const;
