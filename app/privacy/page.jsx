import Link from "next/link";
import { BRAND, CONTACT } from "@/lib/brand";

export const metadata = {
  title: "Privacy Policy",
  description: `How ${BRAND.name} collects, uses and protects your personal information.`,
};

const sections = [
  {
    title: "What we collect",
    text: "When you create an account or place an order, we collect your name, phone number, email address, delivery address and order details. We ask only for what is needed to confirm and deliver your order.",
  },
  {
    title: "How we use it",
    text: "We use your details to confirm orders, arrange delivery, answer your questions and keep a record of purchases. We do not sell your personal information.",
  },
  {
    title: "Who sees it",
    text: "Only our team and the courier delivering your order see your delivery details. Payment is cash on delivery, so card details are never collected by us.",
  },
  {
    title: "How long we keep it",
    text: "We keep order records for accounting and customer support. You can ask us to correct or remove your details at any time by contacting us.",
  },
  {
    title: "Your choices",
    text: "You can request a copy of the information we hold, ask for corrections, or ask us to delete your account. We will help where we can, subject to legal record-keeping.",
  },
];

export default function PrivacyPage() {
  return (
    <main className="flex flex-1 flex-col bg-ivory">
      <header className="border-b border-line bg-sand-soft">
        <div className="mx-auto w-full max-w-4xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <p className="eyebrow">Privacy</p>
          <h1 className="mt-3 font-serif text-4xl text-bordeaux sm:text-5xl">Privacy policy</h1>
          <div className="gold-rule mt-6 w-32" />
          <p className="mt-6 max-w-2xl text-sm leading-7 text-smoke">
            A short, plain explanation of what {BRAND.name} knows about you and why.
          </p>
        </div>
      </header>

      <div className="mx-auto w-full max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="space-y-8">
          {sections.map((section, index) => (
            <section key={section.title} className="flex gap-5">
              <span className="font-serif text-2xl text-champagne">{String(index + 1).padStart(2, "0")}</span>
              <div>
                <h2 className="font-serif text-xl text-bordeaux">{section.title}</h2>
                <p className="mt-2 text-sm leading-7 text-smoke">{section.text}</p>
              </div>
            </section>
          ))}
        </div>

        <div className="mt-12 rounded-sm border border-line bg-sand-soft p-6">
          <p className="text-sm text-smoke">
            Questions about your data? Email{" "}
            <a href={`mailto:${CONTACT.email}`} className="text-bordeaux underline decoration-champagne underline-offset-4">{CONTACT.email}</a>
            . See also our <Link href="/terms" className="text-bordeaux underline decoration-champagne underline-offset-4">terms of service</Link>.
          </p>
        </div>
      </div>
    </main>
  );
}
