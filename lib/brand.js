// Single source of truth for storefront identity, contact details and URLs.
// Replace the PLACEHOLDER values below once the real accounts are available.

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000").replace(/\/$/, "");

export const BRAND = {
  name: "Ruh Perfumes",
  shortName: "Ruh",
  tagline: "The soul of scent.",
  taglineBn: "সুগন্ধের আত্মা",
  description:
    "Ruh Perfumes is a Dhaka-based perfume house offering curated attars, oud and modern fragrances with careful packaging and cash on delivery across Bangladesh.",
};

export const CONTACT = {
  // PLACEHOLDER — update here and every page picks it up.
  email: "hello@ruhperfumes.com",
  phoneDisplay: "+880 1XXX-XXXXXX",
  phoneHref: "tel:+8801000000000",
  whatsappHref: "https://wa.me/8801000000000",
  addressLines: ["Dhaka, Bangladesh"],
  mapsHref:
    "https://www.google.com/maps/search/?api=1&query=" +
    encodeURIComponent("Dhaka, Bangladesh"),
};

export const SOCIALS = {
  // PLACEHOLDER profile URLs — replace the handles when the accounts go live.
  instagram: "https://www.instagram.com/",
  facebook: "https://www.facebook.com/",
  whatsapp: CONTACT.whatsappHref,
};

export const SITE_URL = siteUrl;

// Kept here so pricing copy and the checkout form cannot drift apart.
export const DELIVERY_CHARGES = {
  insideDhaka: 70,
  outsideDhaka: 120,
};

export const BRAND_NAME = BRAND.name;
export const BRAND_TAGLINE = BRAND.tagline;
