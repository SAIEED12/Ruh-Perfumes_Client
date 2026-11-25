import Link from "next/link";
import { ArrowRight } from "lucide-react";
import BrandArt from "@/components/BrandArt";

export default function HouseOfRuh() {
  return (
    <section aria-label="The house of Ruh" className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="relative order-2 aspect-4/5 overflow-hidden rounded-sm border border-champagne/30 lg:order-1">
          <BrandArt variant="story" className="absolute inset-0 h-full w-full" alt="" />
          <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-bordeaux/85 to-transparent p-6">
            <p className="font-bengali text-xs tracking-[0.2em] text-champagne">আমাদের গল্প</p>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <p className="eyebrow">The house of Ruh</p>
          <h2 className="mt-3 font-serif text-3xl leading-tight text-bordeaux sm:text-4xl md:text-5xl">
            Some things are felt before they are named.
          </h2>
          <div className="gold-rule mt-6 w-32" />
          <p className="mt-6 text-sm leading-7 text-smoke">
            Ruh means soul. We began with a simple idea: a fragrance should feel like
            a memory you have not made yet. From the attar trays of old Dhaka to the
            quiet ritual of applying a scent before you leave the house, we build
            perfumes for the moments that stay with you.
          </p>
          <p className="mt-4 text-sm leading-7 text-smoke">
            Each bottle is chosen for the way it unfolds on skin — the bright first
            impression, the heart that settles, and the trace that remains.
          </p>
          <Link href="/about" className="group mt-8 inline-flex items-center gap-2 text-xs font-semibold tracking-[0.16em] text-bordeaux uppercase no-underline hover:text-rose">
            Read our story
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
