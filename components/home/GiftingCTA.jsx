import Link from "next/link";
import BrandArt from "@/components/BrandArt";

export default function GiftingCTA() {
  return (
    <section aria-label="Gifting" className="mx-auto w-full max-w-7xl px-4 pb-16 sm:px-6 md:pb-24 lg:px-8">
      <div className="relative overflow-hidden rounded-sm border border-champagne/30">
        <BrandArt variant="hero-3" className="absolute inset-0 h-full w-full" alt="" />
        <div className="absolute inset-0 bg-bordeaux/55" />
        <div className="relative mx-auto max-w-2xl px-6 py-16 text-center sm:py-20">
          <p className="eyebrow font-bengali">উপহারের জন্য</p>
          <h2 className="mt-3 font-serif text-3xl text-ivory sm:text-4xl">
            Give something they will remember
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-blush/85">
            Discovery sets and considered pairs for birthdays, Eid, weddings and
            the quiet moments in between.
          </p>
          <Link href="/categories/gift-sets" className="btn-gold mt-7">
            Explore gift sets
          </Link>
        </div>
      </div>
    </section>
  );
}
