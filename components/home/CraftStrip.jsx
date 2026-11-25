import { Droplets, ShieldCheck, Sparkles } from "lucide-react";

const pillars = [
  {
    icon: Droplets,
    title: "Notes, not noise",
    text: "We describe how a scent opens, settles and lingers — so you know what you are choosing.",
  },
  {
    icon: Sparkles,
    title: "Considered craft",
    text: "Small-batch blends, careful maceration and slow bottling. Every bottle gets our full attention.",
  },
  {
    icon: ShieldCheck,
    title: "Genuine, sealed, yours",
    text: "Authentic fragrances, sealed before dispatch and packed discreetly for the journey.",
  },
];

export default function CraftStrip() {
  return (
    <section aria-label="Our promises" className="w-full bg-bordeaux text-ivory">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="eyebrow font-bengali">বিশ্বাস</p>
          <h2 className="mt-3 font-serif text-2xl sm:text-3xl">What we promise with every bottle</h2>
        </div>
        <div className="mt-10 grid gap-8 md:grid-cols-3 md:gap-12">
          {pillars.map((pillar) => (
            <div key={pillar.title} className="text-center">
              <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-champagne/50 text-champagne">
                <pillar.icon size={20} strokeWidth={1.5} />
              </span>
              <h3 className="mt-4 font-serif text-xl">{pillar.title}</h3>
              <p className="mx-auto mt-2 max-w-xs text-sm leading-relaxed text-blush/75">{pillar.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
