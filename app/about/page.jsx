import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Droplets,
  HeartHandshake,
  MessageCircle,
  PackageCheck,
  Sparkles,
} from "lucide-react";
import BrandArt from "@/components/BrandArt";
import { BRAND, CONTACT } from "@/lib/brand";

export const metadata = {
  title: "About Us",
  description: `The story of ${BRAND.name}: a Dhaka perfume house built around attars, oud and the way a scent stays with you.`,
};

const collections = [
  {
    icon: Droplets,
    title: "Attars & classic blends",
    text: "Traditional attars and modern interpretations — concentrated, intimate and worn close to the skin.",
    examples: ["Musk attars", "Rose attars", "Skin scents"],
    variant: "musk-attar",
  },
  {
    icon: Sparkles,
    title: "Oud & fragrance",
    text: "Deep agarwood, warm resins and polished compositions for evenings, gatherings and everyday ritual.",
    examples: ["Oud & woody", "Floral & rose", "Fresh & citrus"],
    variant: "oud-woody",
  },
  {
    icon: PackageCheck,
    title: "Gifting & home",
    text: "Thoughtful sets, bakhoor and mists — made for sharing, for hosts, and for your own space.",
    examples: ["Gift sets", "Bakhoor", "Body mists"],
    variant: "hero-3",
  },
];

const promises = [
  {
    title: "Genuine fragrances",
    text: "We source carefully and seal every bottle before it leaves us. What you order is what arrives.",
  },
  {
    title: "Guided by notes",
    text: "We talk about how a scent opens, settles and lingers — not just a list of trendy ingredients.",
  },
  {
    title: "Packed with care",
    text: "Discreet packaging, protected bottles and cash on delivery across Bangladesh.",
  },
];

const faqs = [
  {
    q: "What does Ruh Perfumes sell?",
    a: "Attars, oud and modern perfumes, alongside gift sets, bakhoor and body mists. Everything is chosen for the way it wears on skin.",
  },
  {
    q: "How do I choose a fragrance without smelling it?",
    a: "Read the notes and the 'how to wear' guidance on each product, or message us with what you usually like. We will suggest a starting point.",
  },
  {
    q: "Can I order as a gift?",
    a: "Yes. Our gift sets are packed to be given as they are, and we keep invoices discreet. Tell us in the order note if it is a surprise.",
  },
];

export default function AboutPage() {
  return (
    <main className="flex flex-1 flex-col bg-ivory">
      <header className="border-b border-line bg-sand-soft">
        <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <p className="eyebrow font-bengali">আমাদের গল্প</p>
          <h1 className="mt-3 font-serif text-4xl text-bordeaux sm:text-5xl md:text-6xl">
            The house of {BRAND.name}
          </h1>
          <div className="gold-rule mt-6 w-32" />
          <p className="mt-6 max-w-2xl font-serif text-xl leading-relaxed text-smoke">
            {BRAND.tagline} <span className="font-bengali text-rose">{BRAND.taglineBn}</span>
          </p>
        </div>
      </header>

      <section className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-14">
          <div className="relative aspect-4/5 overflow-hidden rounded-sm border border-champagne/30">
            <BrandArt variant="story" className="absolute inset-0 h-full w-full" alt="" />
          </div>
          <div>
            <p className="text-sm font-medium tracking-[0.2em] text-rose uppercase">Who we are</p>
            <h2 className="mt-3 font-serif text-3xl text-bordeaux sm:text-4xl">
              Ruh means soul — and scent is how we remember it.
            </h2>
            <p className="mt-5 text-sm leading-7 text-smoke">
              {BRAND.name} began in Dhaka with a love for the attar trays, the quiet
              ritual of applying a scent before leaving home, and the way a single
              note can take you somewhere else entirely.
            </p>
            <p className="mt-4 text-sm leading-7 text-smoke">
              We are not interested in wearing the same thing as everyone else. We
              choose fragrances with character — some soft and close, some deep and
              unmistakable — and we help you find the one that feels like yours.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full border-y border-line bg-sand-soft">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="eyebrow">What we offer</p>
            <h2 className="mt-3 font-serif text-3xl text-bordeaux sm:text-4xl">
              Three ways into scent
            </h2>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {collections.map((collection) => (
              <article key={collection.title} className="overflow-hidden rounded-sm border border-line bg-paper">
                <div className="relative aspect-5/4">
                  <BrandArt variant={collection.variant} className="absolute inset-0 h-full w-full" alt="" />
                  <span className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-ivory/90 text-bordeaux">
                    <collection.icon size={18} />
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-serif text-xl text-bordeaux">{collection.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-smoke">{collection.text}</p>
                  <p className="mt-3 text-xs tracking-wide text-rose">
                    {collection.examples.join(" · ")}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <p className="eyebrow">Why shop with us</p>
            <h2 className="mt-3 font-serif text-3xl text-bordeaux sm:text-4xl">
              Care you can smell.
            </h2>
            <p className="mt-4 text-sm leading-7 text-smoke">
              We are a small team, and we treat every order as if it were going to a
              friend. That means honest descriptions, careful packing and a real
              person on the other end of your message.
            </p>
            <Link href="/contact" className="group mt-6 inline-flex items-center gap-2 text-xs font-semibold tracking-[0.16em] text-bordeaux uppercase no-underline hover:text-rose">
              Talk to us
              <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
          <ul className="grid gap-4 sm:grid-cols-3">
            {promises.map((promise, index) => (
              <li key={promise.title} className="rounded-sm border border-line bg-paper p-5">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-blush text-rose">
                  {index === 0 ? <BadgeCheck size={18} /> : index === 1 ? <Sparkles size={18} /> : <HeartHandshake size={18} />}
                </span>
                <h3 className="mt-4 font-serif text-lg text-bordeaux">{promise.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-smoke">{promise.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="w-full bg-bordeaux text-ivory">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl">Good questions</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {faqs.map((faq) => (
              <div key={faq.q}>
                <h3 className="font-serif text-lg text-champagne">{faq.q}</h3>
                <p className="mt-2 text-sm leading-relaxed text-blush/80">{faq.a}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-4 text-sm text-blush/80">
            <MessageCircle size={18} className="text-champagne" />
            <span>Still curious? Write to {CONTACT.email}.</span>
          </div>
        </div>
      </section>
    </main>
  );
}
