"use client";

import { Suspense, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useSession, authClient } from "@/lib/auth-client";
import { getDashboardPathByRole } from "@/lib/dashboard-nav";
import { CartDrawer } from "@/components/cart/Drawer";
import { ProductSearchInput } from "@/components/products/ProductSearchInput";
import Logo from "@/components/Logo";
import { SCENT_FAMILIES } from "@/lib/scent-families";

const NAV_LINKS = [
  { href: "/products", label: "Shop" },
  { href: "/categories/musk-attar", label: "Attars" },
  { href: "/categories/gift-sets", label: "Gifting" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  const { data: session } = useSession();
  const user = session?.user;
  const dashboardHref = getDashboardPathByRole(user?.role);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSigningOut, setIsSigningOut] = useState(false);
  const [openFamilies, setOpenFamilies] = useState(false);
  const familiesRef = useRef(null);

  const isActive = (href) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);

  const navLink = (href, base) =>
    isActive(href)
      ? `${base} text-bordeaux underline decoration-2 underline-offset-[6px] decoration-champagne`
      : `${base} text-ink no-underline hover:text-rose`;

  useEffect(() => {
    if (!openFamilies) return;
    const onPointerDown = (event) => {
      if (!familiesRef.current?.contains(event.target)) setOpenFamilies(false);
    };
    const onKeyDown = (event) => {
      if (event.key === "Escape") setOpenFamilies(false);
    };
    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [openFamilies]);

  useEffect(() => {
    if (!isMenuOpen) return;
    const onKeyDown = (event) => {
      if (event.key === "Escape") setIsMenuOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previous;
    };
  }, [isMenuOpen]);

  const handleSignOut = async () => {
    if (isSigningOut) return;
    setIsSigningOut(true);
    try {
      await authClient.signOut({
        fetchOptions: {
          onSuccess: () => {
            setIsMenuOpen(false);
            router.push("/");
            router.refresh();
          },
        },
      });
    } finally {
      setIsSigningOut(false);
    }
  };

  if (pathname.includes("dashboard")) return null;

  return (
    <>
      <nav className="sticky top-0 z-40 w-full border-b border-line bg-ivory/95 backdrop-blur-md">
        <header className="relative mx-auto flex h-20 max-w-6xl items-center justify-between px-4 sm:px-6">
          <button
            type="button"
            className="inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-full text-ink transition-colors hover:bg-blush md:hidden"
            onClick={() => setIsMenuOpen(true)}
            aria-label="Open menu"
            aria-expanded={isMenuOpen}
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeWidth={1.7} d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          </button>

          <Link href="/" className="absolute left-1/2 -translate-x-1/2 no-underline md:static md:translate-x-0">
            <Logo />
          </Link>

          <div className="hidden min-w-0 flex-1 px-10 md:block">
            <Suspense>
              <div className="mx-auto w-full max-w-sm">
                <ProductSearchInput className="mb-0" placeholder="Search your scent..." />
              </div>
            </Suspense>
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <Link
              href={user ? dashboardHref : "/login"}
              className={navLink(user ? dashboardHref : "/login", "text-[11px] font-semibold tracking-[0.18em] uppercase")}
            >
              {user ? `Welcome, ${user.name}` : "Account"}
            </Link>
            {user ? (
              <button
                type="button"
                onClick={handleSignOut}
                disabled={isSigningOut}
                className="cursor-pointer rounded-full border border-bordeaux px-4 py-2 text-[11px] font-semibold tracking-[0.18em] text-bordeaux uppercase transition-colors hover:bg-bordeaux hover:text-white disabled:opacity-60"
              >
                {isSigningOut ? "Signing out…" : "Sign out"}
              </button>
            ) : (
              <Link
                href="/signup"
                className="rounded-full bg-bordeaux px-4 py-2 text-[11px] font-semibold tracking-[0.18em] text-ivory uppercase no-underline transition-colors hover:bg-rose"
              >
                Join the house
              </Link>
            )}
            <CartDrawer />
          </div>

          <div className="md:hidden">
            <CartDrawer compact />
          </div>
        </header>

        <div className="hidden border-t border-line/70 md:block">
          <ul className="mx-auto flex max-w-6xl items-center justify-center gap-9 px-6 py-3">
            <li>
              <Link href="/" aria-current={isActive("/") ? "page" : undefined} className={navLink("/", "text-[11px] font-semibold tracking-[0.18em] uppercase")}>
                Home
              </Link>
            </li>
            {NAV_LINKS.slice(0, 1).map((item) => (
              <li key={item.href}>
                <Link href={item.href} aria-current={isActive(item.href) ? "page" : undefined} className={navLink(item.href, "text-[11px] font-semibold tracking-[0.18em] uppercase")}>
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="relative" ref={familiesRef}>
              <button
                type="button"
                onClick={() => setOpenFamilies((open) => !open)}
                aria-expanded={openFamilies}
                aria-haspopup="true"
                className={`flex cursor-pointer items-center gap-1.5 text-[11px] font-semibold tracking-[0.18em] uppercase ${
                  pathname.startsWith("/categories")
                    ? "text-bordeaux underline decoration-2 underline-offset-[6px] decoration-champagne"
                    : "text-ink hover:text-rose"
                }`}
              >
                Scent families
                <svg width="9" height="6" viewBox="0 0 10 6" fill="none" aria-hidden="true" className={`transition-transform ${openFamilies ? "rotate-180" : ""}`}>
                  <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </button>
              {openFamilies ? (
                <div className="absolute left-1/2 top-full z-50 mt-3 grid w-[34rem] grid-cols-2 gap-1 rounded-2xl border border-line bg-paper p-3 shadow-xl shadow-black/10">
                  {SCENT_FAMILIES.map((family) => (
                    <Link
                      key={family.slug}
                      href={`/categories/${family.slug}`}
                      onClick={() => setOpenFamilies(false)}
                      className="rounded-xl px-3 py-2.5 no-underline transition-colors hover:bg-blush"
                    >
                      <span className="block text-xs font-semibold tracking-wide text-bordeaux">{family.name}</span>
                      <span className="font-bengali block text-[11px] text-rose">{family.nameBn}</span>
                    </Link>
                  ))}
                </div>
              ) : null}
            </li>
            {NAV_LINKS.slice(1).map((item) => (
              <li key={item.href}>
                <Link href={item.href} aria-current={isActive(item.href) ? "page" : undefined} className={navLink(item.href, "text-[11px] font-semibold tracking-[0.18em] uppercase")}>
                  {item.label}
                </Link>
              </li>
            ))}
            {user && (
              <li>
                <Link href={dashboardHref} className={navLink(dashboardHref, "text-[11px] font-semibold tracking-[0.18em] uppercase")}>
                  Dashboard
                </Link>
              </li>
            )}
          </ul>
        </div>

        <div className="border-t border-line/70 px-4 py-2 md:hidden">
          <Suspense>
            <ProductSearchInput compact placeholder="Search your scent..." className="mx-auto mb-0 w-full max-w-sm" />
          </Suspense>
        </div>
      </nav>

      {isMenuOpen ? (
        <div role="dialog" aria-modal="true" aria-label="Menu" className="fixed inset-0 z-50 md:hidden">
          <button type="button" tabIndex={-1} aria-label="Close menu" onClick={() => setIsMenuOpen(false)} className="absolute inset-0 cursor-default bg-ink/50 backdrop-blur-sm" />
          <div className="absolute inset-y-0 left-0 flex w-80 max-w-[85vw] flex-col bg-ivory shadow-xl">
            <div className="flex items-center justify-between border-b border-line px-5 py-4">
              <span className="text-[11px] font-semibold tracking-[0.2em] text-bordeaux uppercase">Menu</span>
              <button type="button" onClick={() => setIsMenuOpen(false)} aria-label="Close menu" className="inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-full text-smoke hover:bg-blush">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeWidth={1.8} d="M6 6l12 12M18 6L6 18" />
                </svg>
              </button>
            </div>
            <div className="border-b border-line px-5 py-4">
              {user ? (
                <div className="flex flex-col gap-2">
                  <Link href={dashboardHref} onClick={() => setIsMenuOpen(false)} className="py-2 text-xs font-semibold tracking-widest text-bordeaux uppercase no-underline">
                    Welcome, {user.name}
                  </Link>
                  <button type="button" onClick={handleSignOut} disabled={isSigningOut} className="mt-1 w-full cursor-pointer rounded-full bg-bordeaux px-4 py-2.5 text-[11px] font-semibold tracking-widest text-ivory uppercase">
                    {isSigningOut ? "Signing out…" : "Sign out"}
                  </button>
                </div>
              ) : (
                <div className="flex flex-col gap-2">
                  <Link href="/login" onClick={() => setIsMenuOpen(false)} className="py-2 text-xs font-semibold tracking-widest text-bordeaux uppercase no-underline">Login</Link>
                  <Link href="/signup" onClick={() => setIsMenuOpen(false)} className="rounded-full bg-bordeaux px-4 py-2.5 text-center text-[11px] font-semibold tracking-widest text-ivory uppercase no-underline">Join the house</Link>
                </div>
              )}
            </div>
            <div className="flex-1 overflow-y-auto px-5 py-4">
              <h3 className="pb-3 text-[11px] font-semibold tracking-[0.2em] text-rose uppercase">Explore</h3>
              <ul className="space-y-1">
                <li><Link href="/" onClick={() => setIsMenuOpen(false)} className="block py-2 text-sm text-ink no-underline hover:text-rose">Home</Link></li>
                {NAV_LINKS.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} onClick={() => setIsMenuOpen(false)} className="block py-2 text-sm text-ink no-underline hover:text-rose">{item.label}</Link>
                  </li>
                ))}
              </ul>
              <h3 className="mt-6 pb-3 text-[11px] font-semibold tracking-[0.2em] text-rose uppercase">Scent families</h3>
              <ul className="space-y-1">
                {SCENT_FAMILIES.map((family) => (
                  <li key={family.slug}>
                    <Link href={`/categories/${family.slug}`} onClick={() => setIsMenuOpen(false)} className="flex items-baseline justify-between py-2 text-sm text-ink no-underline hover:text-rose">
                      {family.name}
                      <span className="font-bengali text-[11px] text-rose">{family.nameBn}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
