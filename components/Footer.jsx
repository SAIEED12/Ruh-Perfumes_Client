"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Mail, MapPin, Phone } from "lucide-react";
import Logo from "@/components/Logo";
import { BRAND, CONTACT, SOCIALS } from "@/lib/brand";
import { SCENT_FAMILIES } from "@/lib/scent-families";

const socials = [
  { label: "Instagram", href: SOCIALS.instagram, path: "M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm5 3a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm5-3a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z" },
  { label: "Facebook", href: SOCIALS.facebook, path: "M14 8h2V5h-2a4 4 0 0 0-4 4v2H8v3h2v7h3v-7h2.2l.3-3H13V9a1 1 0 0 1 1-1Z" },
  { label: "WhatsApp", href: SOCIALS.whatsapp, path: "M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.4A10 10 0 1 0 12 2Zm0 18a8 8 0 0 1-4.1-1.1l-.3-.2-3 .8.8-2.9-.2-.3A8 8 0 1 1 12 20Z" },
];

const linkClass = "text-sm text-blush/80 no-underline transition-colors hover:text-champagne";

function FooterColumn({ title, links }) {
  return (
    <div>
      <h3 className="text-[11px] font-semibold tracking-[0.22em] text-champagne uppercase">{title}</h3>
      <ul className="mt-5 space-y-3">
        {links.map((link) => (
          <li key={link.label}>
            <Link href={link.href} className={linkClass}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  const pathname = usePathname();
  if (pathname.includes("dashboard")) return null;

  return (
    <footer className="w-full bg-bordeaux text-ivory">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.1fr]">
          <div>
            <Logo inverse />
            <p className="mt-5 max-w-sm font-serif text-xl leading-relaxed text-blush">
              {BRAND.tagline}
            </p>
            <p className="font-bengali mt-1 text-sm text-champagne">{BRAND.taglineBn}</p>
            <div className="mt-6 flex items-center gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${BRAND.name} on ${social.label}`}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-champagne/40 text-champagne transition-colors hover:bg-champagne hover:text-bordeaux"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d={social.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          <FooterColumn
            title="Shop"
            links={[
              { label: "All fragrances", href: "/products" },
              { label: "Scent families", href: "/categories" },
              ...SCENT_FAMILIES.slice(0, 4).map((family) => ({
                label: family.name,
                href: `/categories/${family.slug}`,
              })),
            ]}
          />

          <FooterColumn
            title="Assistance"
            links={[
              { label: "Contact us", href: "/contact" },
              { label: "Shipping & delivery", href: "/shipping" },
              { label: "Return policy", href: "/return-policy" },
              { label: "About the house", href: "/about" },
              { label: "Privacy", href: "/privacy" },
              { label: "Terms", href: "/terms" },
            ]}
          />

          <div>
            <h3 className="text-[11px] font-semibold tracking-[0.22em] text-champagne uppercase">Visit us</h3>
            <ul className="mt-5 space-y-4 text-sm text-blush/80">
              <li className="flex items-start gap-3">
                <Mail size={16} className="mt-0.5 shrink-0 text-champagne" />
                <a href={`mailto:${CONTACT.email}`} className="no-underline transition-colors hover:text-champagne">{CONTACT.email}</a>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={16} className="mt-0.5 shrink-0 text-champagne" />
                <a href={CONTACT.phoneHref} className="no-underline transition-colors hover:text-champagne">{CONTACT.phoneDisplay}</a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="mt-0.5 shrink-0 text-champagne" />
                <a href={CONTACT.mapsHref} target="_blank" rel="noopener noreferrer" className="no-underline transition-colors hover:text-champagne">
                  {CONTACT.addressLines.join(", ")}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="gold-rule mt-12 opacity-40" />

        <div className="mt-6 flex flex-col gap-4 text-center text-xs text-blush/60 sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <p>© {new Date().getFullYear()} {BRAND.name}. All rights reserved.</p>
          <p className="font-bengali text-champagne/80">সুগন্ধের আত্মা — Dhaka, Bangladesh</p>
        </div>
      </div>
    </footer>
  );
}
