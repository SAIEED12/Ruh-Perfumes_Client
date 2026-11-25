"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Autoplay } from "swiper/modules";
import BrandArt from "@/components/BrandArt";

const slides = [
  {
    variant: "hero-1",
    eyebrow: "সুগন্ধের আত্মা",
    title: "The soul of scent.",
    subtitle:
      "Attars, oud and modern fragrances — composed for the way you want to be remembered.",
    cta: "Explore fragrances",
    href: "/products",
  },
  {
    variant: "hero-2",
    eyebrow: "উদ ও আতর",
    title: "Oud, rose & everything between.",
    subtitle:
      "Deep resins, soft petals and warm amber. Find the note that feels like yours.",
    cta: "Shop oud & woody",
    href: "/categories/oud-woody",
  },
  {
    variant: "hero-3",
    eyebrow: "উপহার",
    title: "A gift that lingers.",
    subtitle:
      "Considered sets for the people who matter, wrapped in the language of scent.",
    cta: "Discover gifting",
    href: "/categories/gift-sets",
  },
];

export default function Hero({ autoplayMs = 5600, transitionMs = 800 }) {
  const swiperRef = useRef(null);
  const [active, setActive] = useState(0);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setReduceMotion(mq.matches);
    const onChange = (event) => setReduceMotion(event.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    const swiper = swiperRef.current;
    if (!swiper?.autoplay) return;
    swiper.params.speed = reduceMotion ? 0 : transitionMs;
    if (reduceMotion) swiper.autoplay.stop();
    else swiper.autoplay.start();
  }, [reduceMotion, transitionMs]);

  const goTo = useCallback((index) => {
    swiperRef.current?.slideToLoop(index);
  }, []);

  useEffect(() => {
    const onKey = (event) => {
      const target = event.target;
      if (
        target?.tagName === "INPUT" ||
        target?.tagName === "TEXTAREA" ||
        target?.tagName === "SELECT" ||
        target?.isContentEditable
      ) return;
      if (event.key === "ArrowRight") swiperRef.current?.slideNext();
      if (event.key === "ArrowLeft") swiperRef.current?.slidePrev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const handleFocusCapture = (event) => {
    if (event.target.matches?.(":focus-visible")) swiperRef.current?.autoplay?.stop();
  };
  const handleBlurCapture = (event) => {
    if (event.currentTarget.contains(event.relatedTarget) || reduceMotion) return;
    swiperRef.current?.autoplay?.start();
  };

  return (
    <section
      role="region"
      aria-roledescription="carousel"
      aria-label="Featured collections"
      className="mx-auto w-full max-w-7xl px-3 pt-4 sm:px-6 sm:pt-6 lg:px-8"
      onFocusCapture={handleFocusCapture}
      onBlurCapture={handleBlurCapture}
    >
      <div className="relative overflow-hidden rounded-sm border border-champagne/30 bg-bordeaux shadow-[0_24px_60px_-32px_rgba(74,18,36,0.65)]">
        <Swiper
          modules={[A11y, Autoplay]}
          onSwiper={(swiper) => { swiperRef.current = swiper; }}
          onSlideChange={(swiper) => setActive(swiper.realIndex)}
          slidesPerView={1}
          speed={transitionMs}
          loop
          grabCursor
          autoplay={{
            delay: autoplayMs,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={slide.variant} className="h-auto!">
              <div className="relative aspect-[9/6] w-full sm:aspect-[2/1] lg:aspect-[21/9]">
                <BrandArt
                  variant={slide.variant}
                  className="absolute inset-0 h-full w-full"
                  alt=""
                />
                <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-bordeaux/70 via-bordeaux/25 to-bordeaux/70" />

                <Link
                  href={slide.href}
                  draggable={false}
                  className="group absolute inset-0 z-10 flex select-none flex-col items-center justify-center px-6 text-center no-underline sm:px-14"
                >
                  <div className="flex w-full max-w-2xl flex-col items-center">
                    <p className="font-bengali text-xs tracking-[0.2em] text-champagne sm:text-sm">
                      {slide.eyebrow}
                    </p>
                    {index === 0 ? (
                      <h1 className="mt-3 font-serif text-3xl leading-tight text-ivory sm:text-5xl lg:text-6xl">
                        {slide.title}
                      </h1>
                    ) : (
                      <h2 className="mt-3 font-serif text-3xl leading-tight text-ivory sm:text-5xl lg:text-6xl">
                        {slide.title}
                      </h2>
                    )}
                    <p className="mt-3 hidden max-w-lg text-sm leading-relaxed text-blush/90 sm:block sm:text-base">
                      {slide.subtitle}
                    </p>
                    <span className="btn-gold mt-6">
                      {slide.cta}
                      <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <button
          type="button"
          onClick={() => swiperRef.current?.slidePrev()}
          aria-label="Previous slide"
          className="absolute left-3 top-1/2 z-20 hidden h-11 w-11 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-champagne/40 bg-bordeaux/40 text-champagne backdrop-blur-md transition-colors hover:bg-bordeaux sm:flex md:left-5"
        >
          <ChevronLeft size={19} />
        </button>
        <button
          type="button"
          onClick={() => swiperRef.current?.slideNext()}
          aria-label="Next slide"
          className="absolute right-3 top-1/2 z-20 hidden h-11 w-11 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-champagne/40 bg-bordeaux/40 text-champagne backdrop-blur-md transition-colors hover:bg-bordeaux sm:flex md:right-5"
        >
          <ChevronRight size={19} />
        </button>

        <div className="absolute inset-x-0 bottom-3 z-20 flex items-center justify-center gap-1.5 sm:bottom-5 sm:gap-2">
          {slides.map((slide, index) => (
            <button
              key={slide.variant}
              type="button"
              onClick={() => goTo(index)}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={index === active}
              className="h-1.5 cursor-pointer rounded-full bg-ivory/40 transition-all duration-300 hover:bg-ivory/80"
              style={{
                width: index === active ? 26 : 7,
                backgroundColor: index === active ? "#C9A46A" : undefined,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
