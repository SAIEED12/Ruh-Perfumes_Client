import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import BrandArt from "@/components/BrandArt";
import { SCENT_FAMILIES, scentFamilyHref } from "@/lib/scent-families";

export default function ScentFamilies() {
  return (
    <section aria-label="Scent families" className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
      <div className="text-center">
        <p className="eyebrow font-bengali">সুগন্ধের পরিবার</p>
        <h2 className="mt-3 font-serif text-3xl text-bordeaux sm:text-4xl md:text-5xl">
          Find your family of scent
        </h2>
        <div className="gold-rule mx-auto mt-5 w-32" />
        <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-smoke">
          Every perfume begins with a note. Explore the families we return to —
          from soft rose to deep, resinous oud.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-3">
        {SCENT_FAMILIES.map((family) => (
          <Link
            key={family.slug}
            href={scentFamilyHref(family)}
            className="group relative aspect-4/5 overflow-hidden rounded-sm border border-line bg-bordeaux no-underline sm:aspect-4/3 lg:aspect-4/5"
          >
            <BrandArt
              variant={family.slug}
              className="absolute inset-0 h-full w-full transition-transform duration-700 group-hover:scale-105"
              alt=""
            />
            <div className="absolute inset-0 bg-linear-to-t from-bordeaux/90 via-bordeaux/15 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-2 p-4 sm:p-6">
              <div>
                <p className="font-bengali text-[11px] tracking-widest text-champagne">{family.nameBn}</p>
                <h3 className="mt-1 font-serif text-xl text-ivory sm:text-2xl">{family.name}</h3>
                <p className="mt-1 hidden text-xs text-blush/80 sm:block">{family.note}</p>
              </div>
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-champagne/60 text-champagne transition-colors group-hover:bg-champagne group-hover:text-bordeaux">
                <ArrowUpRight size={16} />
              </span>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-8 text-center">
        <Link href="/categories" className="btn-gold">
          View all families
        </Link>
      </div>
    </section>
  );
}
