// Static scent-family tiles. Products come from the API, but these tiles work
// with an empty catalog so the storefront still reads as a perfume house.
// The slugs deliberately match the category slugs documented in the server's
// database/rebrand-categories.md mapping guide.

export const SCENT_FAMILIES = [
  {
    slug: "floral",
    name: "Floral & Rose",
    nameBn: "ফ্লোরাল",
    note: "Soft petals, rose absolute, a powdery finish.",
  },
  {
    slug: "oud-woody",
    name: "Oud & Woody",
    nameBn: "উদ",
    note: "Deep agarwood, sandalwood and warm resins.",
  },
  {
    slug: "fresh",
    name: "Fresh & Citrus",
    nameBn: "ফ্রেশ",
    note: "Bergamot, green notes and clean musks.",
  },
  {
    slug: "sweet-gourmand",
    name: "Sweet & Gourmand",
    nameBn: "সুইট",
    note: "Vanilla, caramel and edible warmth.",
  },
  {
    slug: "musk-attar",
    name: "Musk & Attar",
    nameBn: "আতর",
    note: "Classic attars, skinscent and soft animalics.",
  },
  {
    slug: "bakhoor",
    name: "Bakhoor & Incense",
    nameBn: "বাখরি",
    note: "Smoky frankincense for home and ceremony.",
  },
];

export const scentFamilyHref = (family) =>
  `/categories/${encodeURIComponent(family?.slug ?? "")}`;

export const findScentFamily = (slug) =>
  SCENT_FAMILIES.find((family) => family.slug === slug) ?? null;
