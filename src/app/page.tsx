"use client";

import { useEffect, useState, useId } from "react";
import Image from "next/image";
import {
  faqs,
  footer,
  hero,
  order,
  productDetails,
  reviews,
  site,
} from "@/data/site";

/* ─────────────────────────────────────────────────────────────
   Minimal Artisan Vector Graphics & Icons
   ───────────────────────────────────────────────────────────── */

function BrandLogo({ className = "h-7 w-7" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <polygon
        points="16,2 28,9 28,23 16,30 4,23 4,9"
        className="stroke-[#D99A24] fill-[#FFF9F0]"
        strokeWidth="1.75"
      />
      <polygon
        points="16,7 24,12 24,20 16,25 8,20 8,12"
        className="stroke-[#E8D3AD] fill-[#F8F0E2]"
        strokeWidth="1"
      />
      {/* Central Honey Droplet */}
      <path
        d="M16 10 C 16 10, 11 17, 11 20 C 11 22.8, 13.2 25, 16 25 C 18.8 25, 21 22.8, 21 20 C 21 17, 16 10, 16 10 Z"
        className="fill-[#D99A24]"
      />
      <path
        d="M14 19 C 14 17.5, 15.5 14, 15.5 14 C 15.5 14, 13.5 16.5, 13.5 18.5 C 13.5 19.5, 14.2 20.2, 14.8 20.6 C 14.3 20, 14 19.5, 14 19 Z"
        className="fill-[#FFF9F0]/80"
      />
    </svg>
  );
}

function StarRating({ count = 5 }: { count?: number }) {
  return (
    <div className="flex items-center gap-1 text-[#D99A24]" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="h-4 w-4 fill-current" viewBox="0 0 20 20" aria-hidden="true">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   Main Application Page Component
   ───────────────────────────────────────────────────────────── */

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [submitted, setSubmitted] = useState(false);

  // Synchronized Product Variant & Order Form State
  const [selectedQtyIndex, setSelectedQtyIndex] = useState(0);
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [orderId, setOrderId] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState("");

  // Preserved exact One Jar, Two Jar, Three Jar options & prices with natural Bengali labels
  const quantitiesData = [
    {
      qty: 1,
      label: "১টি জার (৫০০ গ্রাম)",
      weight: "৫০০ গ্রাম প্রিমিয়াম কাচের জার",
      price: 980,
      regular: 1250,
      save: 270,
      tag: "ট্রায়াল প্যাক",
    },
    {
      qty: 2,
      label: "২টি জার (১ কেজি)",
      weight: "১ কেজি (২টি ৫০০ গ্রাম জার)",
      price: 1960,
      regular: 2500,
      save: 540,
      tag: "সবচেয়ে জনপ্রিয়",
    },
    {
      qty: 3,
      label: "৩টি জার (১.৫ কেজি)",
      weight: "১.৫ কেজি (৩টি ৫০০ গ্রাম জার)",
      price: 2940,
      regular: 3750,
      save: 810,
      tag: "ফ্যামিলি সেভার প্যাক",
    },
  ];

  const currentSelection = quantitiesData[selectedQtyIndex];

  // Intersection observer for delicate scroll reveals
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const handleOrderSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !phone.trim() || !address.trim()) {
      setFormError("অনুগ্রহ করে আপনার নাম, মোবাইল নম্বর ও ঠিকানা দিন।");
      return;
    }
    setFormError("");
    setIsSubmitting(true);
    setTimeout(() => {
      const generatedId = `WN-${Math.floor(100000 + Math.random() * 900000)}`;
      setOrderId(generatedId);
      setSubmitted(true);
      setIsSubmitting(false);
    }, 600);
  };

  const handleResetOrder = () => {
    setSubmitted(false);
    setFullName("");
    setPhone("");
    setAddress("");
    setOrderId("");
    setFormError("");
  };

  const nameInputId = useId();
  const phoneInputId = useId();
  const addressInputId = useId();

  return (
    <div className="relative w-full max-w-full overflow-x-hidden min-h-screen bg-[#F8F0E2] text-[#382719]">
      {/* ─────────────────────────────────────────────────────────
          1. HEADER — Minimalist & Clean (Navigation Links Removed)
          ───────────────────────────────────────────────────────── */}
      <header className="sticky top-0 z-50 w-full border-b border-[#E8D3AD]/80 bg-[#F8F0E2]/92 backdrop-blur-md transition-all">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-2.5 sm:px-8 sm:py-3">
          {/* Brand Logo & Name */}
          <a
            href="#top"
            className="flex shrink-0 items-center gap-2 transition-transform hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D99A24]"
            aria-label="Honey Nest Home"
          >
            <BrandLogo className="h-6 w-6 sm:h-7 sm:w-7" />
            <span className="font-serif text-base sm:text-xl font-bold tracking-wider text-[#382719]">
              {site.brand}
            </span>
          </a>

          {/* Right-side Order Now Button with Recurring Subtle Shine Reflection */}
          <a
            href="#order"
            className="btn-shine-effect relative shrink-0 inline-flex items-center justify-center rounded-full bg-[#D99A24] px-4 py-1.5 sm:px-6 sm:py-2.5 text-xs sm:text-sm font-bold text-white shadow-xs transition hover:bg-[#BF8218] active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D99A24]"
          >
            {hero.primaryCta}
          </a>
        </div>
      </header>

      <main id="top">
        {/* ─────────────────────────────────────────────────────────
            2. HERO SECTION — Natural Bengali & New HD Product Jar
            ───────────────────────────────────────────────────────── */}
        <section className="relative px-3 sm:px-6 lg:px-10 pt-3 pb-12 sm:pt-4 sm:pb-16" aria-label="Hero">
          <div
            className="relative mx-auto max-w-7xl overflow-hidden rounded-xl sm:rounded-2xl border border-[#E8D3AD]/80 shadow-md min-h-[480px] sm:min-h-[540px] lg:min-h-[580px] flex items-center bg-cover bg-center"
            style={{ backgroundImage: "url('/hero-background.jpg')" }}
          >
            {/* Subtle Gradient Overlay for Text Readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#F8F0E2]/85 via-[#F8F0E2]/40 to-transparent md:bg-gradient-to-r md:from-[#F8F0E2]/80 md:via-[#F8F0E2]/40 md:to-transparent md:w-7/12 pointer-events-none" />

            <div className="relative z-10 grid w-full items-center gap-6 px-4 py-8 sm:gap-8 sm:px-12 sm:py-10 md:grid-cols-12 lg:px-16">
              {/* Minimal Text on Left Side in Natural Bengali */}
              <div className="space-y-4 md:col-span-6 lg:col-span-5">
                <div className="inline-flex items-center gap-2 rounded-full border border-[#D99A24]/30 bg-[#FFF9F0]/90 px-3.5 py-1 text-[11px] font-bold tracking-wider text-[#D99A24] backdrop-blur-xs">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#D99A24]" />
                  {hero.eyebrow}
                </div>

                <h1 className="font-serif text-3xl sm:text-4xl lg:text-[50px] font-bold leading-[1.2] tracking-tight text-[#382719]">
                  {hero.title}
                </h1>

                <p className="max-w-md text-sm sm:text-base leading-relaxed text-[#63503F]">
                  {hero.subtext}
                </p>

                {/* Rating Element with flex-wrap */}
                <div className="flex flex-wrap items-center gap-2 pt-2">
                  <StarRating count={5} />
                  <span className="text-xs sm:text-sm font-bold text-[#382719]">৪.৯ / ৫.০ রেটিং</span>
                  <span className="text-[11px] sm:text-xs text-[#917F6F]">· (৩০০+ সন্তুষ্ট ক্রেতা)</span>
                </div>

                <div className="pt-2 text-xs font-medium text-[#63503F] flex items-center gap-1.5">
                  <svg className="h-4 w-4 text-[#4D5D43]" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা
                </div>
              </div>

              {/* Product Foreground on Right Side — New HD Jar Asset */}
              <div className="relative flex items-center justify-center md:col-span-6 lg:col-span-7">
                <div className="relative flex w-full max-w-[300px] sm:max-w-[340px] lg:max-w-[380px] items-center justify-center">
                  {/* Subtle Honey Ambient Glow */}
                  <div className="animate-honey-glow absolute h-60 w-60 rounded-full bg-[#D99A24]/15 blur-3xl -z-10" />

                  {/* Soft Podium Base Contact Shadow */}
                  <div className="absolute -bottom-2 h-7 w-4/5 rounded-[100%] bg-[#382719]/20 blur-md -z-10" />

                  {/* New HD Honey Jar Asset */}
                  <div className="animate-float-gentle relative z-10 w-full">
                    <Image
                      src="/honey-jar-cutout.png"
                      alt={hero.jarAlt}
                      width={404}
                      height={736}
                      priority
                      className="mx-auto h-auto max-h-[400px] sm:max-h-[440px] w-auto object-contain drop-shadow-[0_16px_25px_rgba(56,39,25,0.2)]"
                    />
                  </div>

                  {/* Single Floating Quality Tag */}
                  <div className="animate-float-alt absolute -top-2 right-2 sm:right-4 z-20 flex items-center gap-2 rounded-full border border-[#E8D3AD] bg-[#FFF9F0]/95 px-3.5 py-1.5 shadow-sm backdrop-blur-xs">
                    <span className="h-2 w-2 rounded-full bg-[#D99A24]" />
                    <span className="text-xs font-bold text-[#382719]">১০০% কাঁচা ও খাঁটি</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─────────────────────────────────────────────────────────
            3. ABOUT OUR HONEY — First HD Background Image & Bengali Content
            ───────────────────────────────────────────────────────── */}
        <section
          id="about"
          className="relative scroll-mt-20 py-20 sm:py-28 overflow-hidden bg-cover bg-center"
          style={{ backgroundImage: "url('/about-honey-background.jpg')" }}
        >
          {/* Delicate warm translucency overlay: soft tint for clear visibility & legibility */}
          <div className="absolute inset-0 bg-[#FAF7F2]/25 pointer-events-none" />

          <div className="reveal relative z-10 mx-auto max-w-7xl px-4 sm:px-8 lg:px-12">
            {/* Section Heading & Narrative in Bengali */}
            <div className="mx-auto max-w-2xl text-center mb-12 sm:mb-16">
              <span className="text-xs font-bold uppercase tracking-wider text-[#D99A24]">
                {productDetails.heading}
              </span>
              <h2 className="mt-2 font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#382719]">
                প্রকৃতির খাঁটি উপহার, প্রতিটি ফোঁটায় সতেজতা
              </h2>
              <p className="mt-3 text-sm sm:text-base leading-relaxed text-[#63503F]">
                {productDetails.intro}
              </p>
            </div>

            {/* Core Composition: Modeled Directly on Primary Design Reference */}
            <div className="mx-auto max-w-5xl grid items-center gap-10 md:grid-cols-12 lg:gap-14">
              {/* Left Side: Amber Circle Graphic + Prominent New HD Honey Jar */}
              <div className="relative flex items-center justify-center md:col-span-6 lg:col-span-6 py-6 md:py-0">
                <div className="relative flex w-full max-w-[340px] sm:max-w-[380px] lg:max-w-[420px] items-center justify-center">
                  {/* Large Golden-Yellow Circle Arch */}
                  <div className="relative h-64 w-64 sm:h-76 sm:w-76 lg:h-88 lg:w-88 rounded-full bg-gradient-to-tr from-[#D99A24] via-[#E5A932] to-[#F59E0B] shadow-xl shadow-amber-900/15 overflow-hidden flex items-center justify-center">
                    <svg className="absolute inset-0 h-full w-full opacity-25" viewBox="0 0 100 100" fill="none">
                      <pattern id="circle-pattern" width="16" height="27.7" patternUnits="userSpaceOnUse">
                        <path d="M 8 0 L 16 4.6 L 16 13.8 L 8 18.5 L 0 13.8 L 0 4.6 Z" stroke="#FFFFFF" strokeWidth="0.8" fill="none" />
                        <path d="M 8 27.7 L 16 23.1 L 16 13.8 L 8 9.2 L 0 13.8 L 0 23.1 Z" stroke="#FFFFFF" strokeWidth="0.8" fill="none" />
                      </pattern>
                      <rect width="100%" height="100%" fill="url(#circle-pattern)" />
                    </svg>
                  </div>

                  {/* New HD Honey Nest Jar in Foreground */}
                  <div className="animate-float-gentle absolute z-10 w-full max-w-[210px] sm:max-w-[240px] lg:max-w-[260px]">
                    <Image
                      src="/honey-jar-cutout.png"
                      alt={hero.jarAlt}
                      width={404}
                      height={736}
                      priority={false}
                      className="mx-auto h-auto max-h-[360px] sm:max-h-[400px] lg:max-h-[430px] w-auto object-contain drop-shadow-[0_20px_30px_rgba(56,39,25,0.28)]"
                    />
                  </div>
                </div>
              </div>

              {/* Right Side: Vertical Stack of 5 Feature Items in Natural Bengali */}
              <div className="space-y-4 sm:space-y-5 md:col-span-6 lg:col-span-6 pl-0 md:pl-4">
                {/* Item 1: Raw & Enzymes */}
                <div className="flex items-center gap-4 sm:gap-5">
                  <div className="flex h-11 w-11 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-xl bg-[#1C160E] text-white shadow-sm ring-1 ring-black/10">
                    <svg className="h-5 w-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
                      <path d="M12 9v5" />
                      <path d="M10 11.5h4" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-[#63503F]">
                      ১০০% কাঁচা ও অপরিশোধিত
                    </p>
                    <p className="text-sm sm:text-base font-bold text-[#1C160E]">
                      সক্রিয় প্রাকৃতিক এনজাইম অক্ষুণ্ণ
                    </p>
                  </div>
                </div>

                {/* Item 2: Unfiltered & Bee Pollen */}
                <div className="flex items-center gap-4 sm:gap-5">
                  <div className="flex h-11 w-11 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-xl bg-[#1C160E] text-white shadow-sm ring-1 ring-black/10">
                    <svg className="h-5 w-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="9" />
                      <path d="M3.6 9h16.8M3.6 15h16.8M12 3a14.5 14.5 0 0 0 0 18M12 3a14.5 14.5 0 0 1 0 18" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-[#63503F]">
                      আনহিটেড ও খাঁটি
                    </p>
                    <p className="text-sm sm:text-base font-bold text-[#1C160E]">
                      প্রাকৃতিক মৌচাকের বি-পোলেন যুক্ত
                    </p>
                  </div>
                </div>

                {/* Item 3: Pure Blossom Nectar */}
                <div className="flex items-center gap-4 sm:gap-5">
                  <div className="flex h-11 w-11 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-xl bg-[#1C160E] text-white shadow-sm ring-1 ring-black/10">
                    <svg className="h-5 w-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      <path d="m9 12 2 2 4-4" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-[#63503F]">
                      ফুলের খাঁটি নেকটার
                    </p>
                    <p className="text-sm sm:text-base font-bold text-[#1C160E]">
                      কোনো বাড়তি চিনি বা সিরাপ নেই
                    </p>
                  </div>
                </div>

                {/* Item 4: Ethical Apiary */}
                <div className="flex items-center gap-4 sm:gap-5">
                  <div className="flex h-11 w-11 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-xl bg-[#1C160E] text-white shadow-sm ring-1 ring-black/10">
                    <svg className="h-5 w-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 3 L19 7 L19 15 L12 19 L5 15 L5 7 Z" />
                      <circle cx="12" cy="11" r="2.5" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-[#63503F]">
                      দায়িত্বশীল উৎস
                    </p>
                    <p className="text-sm sm:text-base font-bold text-[#1C160E]">
                      স্থানীয় মৌচাক থেকে সরাসরি সংগ্রহ
                    </p>
                  </div>
                </div>

                {/* Item 5: Antioxidant Vitality */}
                <div className="flex items-center gap-4 sm:gap-5">
                  <div className="flex h-11 w-11 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-xl bg-[#1C160E] text-white shadow-sm ring-1 ring-black/10">
                    <svg className="h-5 w-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M4.93 19.07l14.14-14.14" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-[#63503F]">
                      পুষ্টিগুণে ভরপুর
                    </p>
                    <p className="text-sm sm:text-base font-bold text-[#1C160E]">
                      অ্যান্টিঅক্সিডেন্ট ও খনিজের অনন্য উৎস
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─────────────────────────────────────────────────────────
            4. PRODUCT SHOWCASE & VARIANT SELECTOR (One, Two, Three Jars)
            ───────────────────────────────────────────────────────── */}
        <section id="product" className="scroll-mt-20 py-16 sm:py-24 border-t border-[#E8D3AD]/80">
          <div className="reveal mx-auto max-w-7xl px-4 sm:px-8 lg:px-12">
            <div className="mx-auto max-w-2xl text-center">
              <span className="text-xs font-bold uppercase tracking-wider text-[#D99A24]">
                আমাদের কালেকশন
              </span>
              <h2 className="mt-2 font-serif text-3xl sm:text-4xl font-bold tracking-tight text-[#382719]">
                আপনার পছন্দের প্যাক বেছে নিন
              </h2>
              <p className="mt-3 text-sm text-[#63503F]">
                ইউভি-প্রোটেক্টিভ কাচের জারে সিল করা খাঁটি মধু। নিচের যে কোনো একটি প্যাক নির্বাচন করুন:
              </p>
            </div>

            {/* Vertically taller, horizontally balanced container with new background image strictly clipped inside */}
            <div className="relative mt-12 mx-auto max-w-4xl overflow-hidden rounded-2xl border border-[#E8D3AD] shadow-md py-10 sm:py-14 md:py-16 px-6 sm:px-10 lg:px-12">
              {/* Container Background Image: Clipped strictly inside container */}
              <div className="absolute inset-0 -z-20">
                <Image
                  src="/product-features-bg.jpg"
                  alt="মৌচাকের প্যাটার্ন ব্যাকগ্রাউন্ড"
                  fill
                  sizes="(max-width: 896px) 100vw, 896px"
                  className="object-cover object-center"
                />
              </div>

              {/* Delicate warm translucency overlay to ensure feature cards & text remain effortlessly readable */}
              <div className="absolute inset-0 -z-10 bg-[#FFF9F0]/85 backdrop-blur-[1px]" />

              <div className="grid gap-10 items-center lg:grid-cols-12">
                {/* Visual Showcase Centerpiece — HD Cutout */}
                <div className="relative flex items-center justify-center lg:col-span-5">
                  <div className="absolute h-56 w-56 rounded-full bg-[#D99A24]/15 blur-2xl" />
                  <div className="animate-float-gentle relative z-10 max-w-[220px] sm:max-w-[260px]">
                    <Image
                      src="/honey-jar-cutout.png"
                      alt={hero.jarAlt}
                      width={404}
                      height={736}
                      className="h-auto w-full object-contain drop-shadow-[0_16px_22px_rgba(56,39,25,0.22)]"
                    />
                  </div>
                </div>

                {/* Interactive Variant Selection System & Feature Info in Bengali */}
                <div className="space-y-6 lg:col-span-7">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#D99A24]">
                      {currentSelection.tag}
                    </span>
                    <h3 className="mt-1 font-serif text-2xl sm:text-3xl font-bold text-[#382719]">
                      {currentSelection.label}
                    </h3>
                    <p className="mt-1 text-sm text-[#63503F]">
                      {currentSelection.weight} · ১০০% খাঁটি কাঁচা মধু
                    </p>
                  </div>

                  {/* Quantity Selection Options — Synchronized with Order Form */}
                  <div>
                    <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-[#382719]">
                      প্যাক নির্বাচন করুন:
                    </label>
                    <div className="grid gap-2.5 sm:grid-cols-3">
                      {quantitiesData.map((item, idx) => {
                        const isSelected = selectedQtyIndex === idx;
                        return (
                          <button
                            key={item.qty}
                            type="button"
                            onClick={() => setSelectedQtyIndex(idx)}
                            className={`rounded-xl border p-3.5 text-left transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D99A24] ${
                              isSelected
                                ? "border-[#D99A24] bg-white shadow-xs ring-2 ring-[#D99A24]"
                                : "border-[#E8D3AD] bg-white/85 hover:bg-white backdrop-blur-xs"
                            }`}
                          >
                            <div className="text-xs font-bold text-[#382719]">{item.label}</div>
                            <div className="mt-1 font-serif text-base font-bold text-[#D99A24]">
                              ৳{item.price.toLocaleString("en-IN")}
                            </div>
                            <div className="text-[10px] text-[#917F6F] line-through">
                              ৳{item.regular.toLocaleString("en-IN")}
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Dynamic Pricing Display */}
                  <div className="flex items-baseline gap-3 rounded-xl border border-[#E8D3AD] bg-white/90 p-4 backdrop-blur-xs shadow-xs">
                    <span className="font-serif text-3xl font-bold text-[#382719]">
                      ৳{currentSelection.price.toLocaleString("en-IN")}
                    </span>
                    <span className="text-base text-[#917F6F] line-through">
                      ৳{currentSelection.regular.toLocaleString("en-IN")}
                    </span>
                    <span className="rounded-full bg-[#FFF9F0] px-2.5 py-0.5 text-xs font-bold text-[#D99A24] border border-[#E8D3AD]">
                      সাশ্রয় ৳{currentSelection.save}
                    </span>
                  </div>

                  {/* Feature & Specs Chips */}
                  <div className="grid grid-cols-2 gap-2 text-xs font-medium text-[#4A3B2C] bg-white/70 p-3 rounded-xl border border-[#E8D3AD]/80 backdrop-blur-xs">
                    <div className="flex items-center gap-1.5">
                      <span className="text-[#4D5D43] font-bold">✓</span> ১০০% কাঁচা ও কোল্ড-এক্সট্র্যাক্টেড
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-[#4D5D43] font-bold">✓</span> প্রাকৃতিক মৌচাকের পোলেন অক্ষুণ্ণ
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-[#4D5D43] font-bold">✓</span> কোনো চিনি বা সিরাপ মেশানো নেই
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-[#4D5D43] font-bold">✓</span> হাতে পেয়ে মূল্য পরিশোধ (COD)
                    </div>
                  </div>

                  <div className="pt-2">
                    <a
                      href="#order"
                      className="btn-shine-effect inline-flex items-center justify-center rounded-full bg-[#D99A24] px-8 py-3.5 text-sm font-semibold text-white shadow-md transition hover:bg-[#BF8218] active:scale-95"
                    >
                      অর্ডার করুন — {currentSelection.label} (৳{currentSelection.price.toLocaleString("en-IN")})
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─────────────────────────────────────────────────────────
            5. CUSTOMER REVIEWS — Continuous Right-to-Left Marquee & Shorter Cards
            ───────────────────────────────────────────────────────── */}
        <section id="reviews" className="scroll-mt-20 py-16 sm:py-24 bg-[#FFF9F0] border-t border-[#E8D3AD]/80 overflow-hidden">
          <div className="reveal mx-auto max-w-7xl px-4 sm:px-8 lg:px-12">
            <div className="mx-auto max-w-2xl text-center">
              <span className="text-xs font-bold uppercase tracking-wider text-[#D99A24]">
                গ্রাহকের প্রতিক্রিয়া
              </span>
              <h2 className="mt-2 font-serif text-3xl sm:text-4xl font-bold tracking-tight text-[#382719]">
                {reviews.heading}
              </h2>
              <div className="mt-3 inline-flex items-center gap-2 rounded-full border border-[#E8D3AD] bg-[#F8F0E2] px-4 py-1.5">
                <StarRating count={5} />
                <span className="text-xs font-bold text-[#382719]">৪.৯ / ৫.০</span>
                <span className="text-[11px] text-[#917F6F]">· ভেরিফায়েড কাস্টমার রিভিউ</span>
              </div>
            </div>
          </div>

          {/* Continuous Right-to-Left Infinite Slider Track with Shorter Cards */}
          <div className="relative mt-10 w-full max-w-full overflow-hidden py-3">
            {/* Left & Right gradient edge fades */}
            <div className="pointer-events-none absolute left-0 inset-y-0 w-12 sm:w-28 bg-gradient-to-r from-[#FFF9F0] to-transparent z-10" />
            <div className="pointer-events-none absolute right-0 inset-y-0 w-12 sm:w-28 bg-gradient-to-l from-[#FFF9F0] to-transparent z-10" />

            {/* Seamless Infinite Marquee Track (Right to Left) */}
            <div className="marquee-container">
              {/* Track A */}
              <div className="marquee-content pr-5">
                {reviews.items.map((review, i) => (
                  <div
                    key={`rev-1-${i}`}
                    className="w-[280px] sm:w-[320px] md:w-[340px] shrink-0 rounded-xl border border-[#E8D3AD] bg-white/95 p-4 sm:p-5 shadow-xs hover:shadow-md transition-all flex flex-col justify-between hover:border-[#D99A24]"
                  >
                    <div>
                      <div className="flex items-center justify-between">
                        <StarRating count={5} />
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#D99A24] bg-[#D99A24]/10 px-2 py-0.5 rounded-full">
                          ভেরিফায়েড
                        </span>
                      </div>

                      <p className="mt-2.5 font-serif text-sm leading-relaxed text-[#382719] italic">
                        “{review.quote}”
                      </p>
                    </div>

                    <div className="mt-4 border-t border-[#E8D3AD]/60 pt-3 flex items-center justify-between">
                      <div>
                        <p className="font-serif text-sm font-bold text-[#382719]">
                          {review.name}
                        </p>
                        <p className="text-[11px] font-medium text-[#63503F]">
                          {review.role}
                        </p>
                      </div>
                      <span className="text-[11px] text-[#4D5D43] font-semibold flex items-center gap-1">
                        <svg className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        সন্তুষ্ট ক্রেতা
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Track B (Identical duplicate for seamless continuous infinite loop) */}
              <div className="marquee-content pr-5" aria-hidden="true">
                {reviews.items.map((review, i) => (
                  <div
                    key={`rev-2-${i}`}
                    className="w-[280px] sm:w-[320px] md:w-[340px] shrink-0 rounded-xl border border-[#E8D3AD] bg-white/95 p-4 sm:p-5 shadow-xs hover:shadow-md transition-all flex flex-col justify-between hover:border-[#D99A24]"
                  >
                    <div>
                      <div className="flex items-center justify-between">
                        <StarRating count={5} />
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#D99A24] bg-[#D99A24]/10 px-2 py-0.5 rounded-full">
                          ভেরিফায়েড
                        </span>
                      </div>

                      <p className="mt-2.5 font-serif text-sm leading-relaxed text-[#382719] italic">
                        “{review.quote}”
                      </p>
                    </div>

                    <div className="mt-4 border-t border-[#E8D3AD]/60 pt-3 flex items-center justify-between">
                      <div>
                        <p className="font-serif text-sm font-bold text-[#382719]">
                          {review.name}
                        </p>
                        <p className="text-[11px] font-medium text-[#63503F]">
                          {review.role}
                        </p>
                      </div>
                      <span className="text-[11px] text-[#4D5D43] font-semibold flex items-center gap-1">
                        <svg className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        সন্তুষ্ট ক্রেতা
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ─────────────────────────────────────────────────────────
            6. FAQ SECTION — Bengali Accordion
            ───────────────────────────────────────────────────────── */}
        <section id="faq" className="scroll-mt-20 py-16 sm:py-24">
          <div className="reveal mx-auto max-w-3xl px-4 sm:px-8">
            <div className="text-center">
              <span className="text-xs font-bold uppercase tracking-wider text-[#D99A24]">
                সাধারণ জিজ্ঞাসা
              </span>
              <h2 className="mt-2 font-serif text-3xl sm:text-4xl font-bold tracking-tight text-[#382719]">
                {faqs.heading}
              </h2>
              <p className="mt-2 text-sm text-[#63503F]">
                {faqs.subtext}
              </p>
            </div>

            <div className="mt-10 space-y-3">
              {faqs.items.map((faq, index) => {
                const isOpen = openFaq === index;
                return (
                  <div
                    key={faq.q}
                    className="overflow-hidden rounded-xl border border-[#E8D3AD] bg-[#FFF9F0] transition-colors"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : index)}
                      className="flex w-full items-center justify-between p-4 sm:p-5 text-left text-sm sm:text-base font-bold text-[#382719] transition hover:text-[#D99A24] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D99A24]"
                      aria-expanded={isOpen}
                    >
                      <span>{faq.q}</span>
                      <span className="ml-4 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-[#E8D3AD] bg-white text-xs text-[#D99A24]">
                        {isOpen ? "−" : "+"}
                      </span>
                    </button>

                    {isOpen && (
                      <div className="border-t border-[#E8D3AD]/60 px-4 sm:px-5 py-4 text-xs sm:text-sm leading-relaxed text-[#63503F] bg-[#FAF7F2]/60">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ─────────────────────────────────────────────────────────
            7. ORDER SECTION — Third Background Image & Single Selected Quantity Display
            ───────────────────────────────────────────────────────── */}
        <section id="order" className="scroll-mt-20 px-3 sm:px-6 lg:px-10 py-12 sm:py-16">
          <div
            className="relative mx-auto max-w-7xl overflow-hidden rounded-xl sm:rounded-2xl border border-[#E8D3AD] shadow-xl min-h-[540px] bg-cover bg-center"
            style={{ backgroundImage: "url('/order-background.jpg')" }}
          >
            {/* Subtle Gradient & Tint Overlay for Optimal Readability without hiding the background */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#FAF7F2]/65 via-[#FAF7F2]/45 to-[#FAF7F2]/30 pointer-events-none" />

            <div className="relative z-10 grid gap-10 p-6 sm:p-10 lg:grid-cols-12 lg:p-14 items-center">
              {/* Left Column Narrative & Showcase */}
              <div className="space-y-6 lg:col-span-5">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#D99A24]">
                    নিরাপদ হোম ডেলিভারি
                  </span>
                  <h2 className="mt-2 font-serif text-3xl sm:text-4xl font-bold tracking-tight text-[#382719]">
                    {order.heading}
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-[#63503F]">
                    {order.subtext}
                  </p>
                </div>

                {/* Cash on Delivery Badge */}
                <div className="flex items-center gap-3 rounded-xl border border-[#D99A24]/30 bg-[#FFF9F0]/90 p-4 backdrop-blur-xs">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#D99A24] text-white">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </span>
                  <div>
                    <h3 className="text-sm font-bold text-[#382719]">{order.codBadge}</h3>
                    <p className="text-[11px] text-[#63503F]">{order.codNote}</p>
                  </div>
                </div>

                {/* Honey Jar Showcase — HD Cutout */}
                <div className="relative flex items-center justify-center pt-2">
                  <div className="animate-float-gentle max-w-[190px] sm:max-w-[220px]">
                    <Image
                      src="/honey-jar-cutout.png"
                      alt={hero.jarAlt}
                      width={404}
                      height={736}
                      className="h-auto w-full object-contain drop-shadow-[0_16px_25px_rgba(56,39,25,0.2)]"
                    />
                  </div>
                </div>
              </div>

              {/* Clean Integrated Form Panel on Right */}
              <div className="lg:col-span-7">
                <div className="rounded-xl sm:rounded-2xl border border-[#E8D3AD] bg-[#FFF9F0]/95 p-6 sm:p-8 shadow-md backdrop-blur-sm">
                  {submitted ? (
                    <div className="py-6 text-center" role="alert" aria-live="polite">
                      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#E8D3AD] text-[#D99A24]">
                        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>

                      <span className="mt-3 inline-block rounded-full bg-[#EFF4EB] px-3 py-1 text-xs font-semibold text-[#4D5D43]">
                        অর্ডার ট্র্যাকিং আইডি: {orderId}
                      </span>

                      <h3 className="mt-3 font-serif text-2xl font-bold text-[#382719]">
                        {order.successTitle}
                      </h3>
                      <p className="mx-auto mt-2 max-w-sm text-xs leading-relaxed text-[#63503F]">
                        {order.successText}
                      </p>

                      {/* Receipt Summary */}
                      <div className="mx-auto mt-5 max-w-sm rounded-xl border border-[#E8D3AD] bg-white p-4 text-left text-xs">
                        <div className="flex justify-between border-b border-[#E8D3AD]/60 pb-1.5">
                          <span className="text-[#917F6F]">ক্রেতার নাম</span>
                          <span className="font-semibold text-[#382719]">{fullName}</span>
                        </div>
                        <div className="flex justify-between border-b border-[#E8D3AD]/60 py-1.5">
                          <span className="text-[#917F6F]">মোবাইল নম্বর</span>
                          <span className="font-semibold text-[#382719]">{phone}</span>
                        </div>
                        <div className="flex justify-between border-b border-[#E8D3AD]/60 py-1.5">
                          <span className="text-[#917F6F]">নির্বাচিত প্যাক</span>
                          <span className="font-semibold text-[#382719]">{currentSelection.label}</span>
                        </div>
                        <div className="flex justify-between pt-2 text-sm font-bold text-[#382719]">
                          <span>মোট প্রদেয় টাকা (COD)</span>
                          <span className="text-[#D99A24]">৳{currentSelection.price.toLocaleString("en-IN")}</span>
                        </div>
                      </div>

                      <button
                        type="button"
                        onClick={handleResetOrder}
                        className="mt-6 rounded-full border border-[#E8D3AD] bg-white px-7 py-2.5 text-xs font-semibold text-[#382719] transition hover:bg-[#F8F0E2]"
                      >
                        আরেকটি অর্ডার করুন
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleOrderSubmit} noValidate>
                      <h3 className="font-serif text-2xl font-bold text-[#382719]">
                        ডেলিভারির তথ্য নিশ্চিত করুন
                      </h3>
                      <p className="text-xs text-[#63503F]">
                        নিচের ফর্মটি পূরণ করুন। পণ্য হাতে পেয়ে মূল্য পরিশোধ করুন।
                      </p>

                      {formError && (
                        <div className="mt-3 rounded-lg bg-red-50 border border-red-200 p-2.5 text-xs text-red-700">
                          {formError}
                        </div>
                      )}

                      <div className="mt-5 space-y-4">
                        {/* Selected Quantity Display Only — Synchronized with Product Showcase */}
                        <div className="rounded-xl border border-[#D99A24]/40 bg-white/95 p-3.5 shadow-xs">
                          <div className="flex items-center justify-between">
                            <div>
                              <span className="text-[10px] font-bold uppercase tracking-wider text-[#D99A24]">
                                নির্বাচিত প্যাকেজ
                              </span>
                              <h4 className="font-serif text-base font-bold text-[#382719]">
                                {currentSelection.label}
                              </h4>
                              <p className="text-xs text-[#63503F]">
                                {currentSelection.weight}
                              </p>
                            </div>
                            <div className="text-right">
                              <div className="font-serif text-lg font-bold text-[#D99A24]">
                                ৳{currentSelection.price.toLocaleString("en-IN")}
                              </div>
                              <a
                                href="#product"
                                className="text-[11px] font-semibold text-[#63503F] underline hover:text-[#D99A24]"
                              >
                                পরিবর্তন করুন
                              </a>
                            </div>
                          </div>
                        </div>

                        {/* Full Name */}
                        <div>
                          <label htmlFor={nameInputId} className="mb-1 block text-xs font-bold uppercase tracking-wider text-[#382719]">
                            আপনার পূর্ণ নাম <span className="text-[#D99A24]">*</span>
                          </label>
                          <input
                            id={nameInputId}
                            type="text"
                            required
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            placeholder="যেমন: মো: আরিফুল ইসলাম"
                            className="w-full rounded-xl border border-[#E8D3AD] bg-white px-4 py-2.5 text-sm text-[#382719] placeholder-[#917F6F] transition focus:border-[#D99A24] focus:outline-none focus:ring-2 focus:ring-[#D99A24]/20"
                          />
                        </div>

                        {/* Phone Number */}
                        <div>
                          <label htmlFor={phoneInputId} className="mb-1 block text-xs font-bold uppercase tracking-wider text-[#382719]">
                            মোবাইল নম্বর <span className="text-[#D99A24]">*</span>
                          </label>
                          <input
                            id={phoneInputId}
                            type="tel"
                            required
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            placeholder="যেমন: 017XXXXXXXX"
                            className="w-full rounded-xl border border-[#E8D3AD] bg-white px-4 py-2.5 text-sm text-[#382719] placeholder-[#917F6F] transition focus:border-[#D99A24] focus:outline-none focus:ring-2 focus:ring-[#D99A24]/20"
                          />
                        </div>

                        {/* Address */}
                        <div>
                          <label htmlFor={addressInputId} className="mb-1 block text-xs font-bold uppercase tracking-wider text-[#382719]">
                            সম্পূর্ণ ডেলিভারি ঠিকানা <span className="text-[#D99A24]">*</span>
                          </label>
                          <textarea
                            id={addressInputId}
                            rows={2}
                            required
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            placeholder="বাসা/রোড নম্বর, এলাকা, থানা ও জেলা"
                            className="w-full rounded-xl border border-[#E8D3AD] bg-white px-4 py-2 text-sm text-[#382719] placeholder-[#917F6F] transition focus:border-[#D99A24] focus:outline-none focus:ring-2 focus:ring-[#D99A24]/20 resize-none"
                          />
                        </div>

                        {/* Price Breakdown */}
                        <div className="rounded-xl border border-[#E8D3AD] bg-[#FAF7F2] p-3 text-xs space-y-1.5">
                          <div className="flex justify-between text-[#63503F]">
                            <span>প্যাকেজ মূল্য</span>
                            <span>৳{currentSelection.price.toLocaleString("en-IN")}</span>
                          </div>
                          <div className="flex justify-between text-[#63503F]">
                            <span>ডেলিভারি চার্জ</span>
                            <span className="font-semibold text-[#4D5D43]">ফ্রি (সীমিত সময়ের অফার)</span>
                          </div>
                          <div className="flex justify-between border-t border-[#E8D3AD]/80 pt-1.5 text-sm font-bold text-[#382719]">
                            <span>মোট প্রদেয় টাকা (ক্যাশ অন ডেলিভারি)</span>
                            <span className="text-base text-[#D99A24]">৳{currentSelection.price.toLocaleString("en-IN")}</span>
                          </div>
                        </div>

                        {/* Submit Button with Recurring Subtle Shine Effect */}
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="btn-shine-effect w-full rounded-full bg-[#D99A24] py-3.5 text-sm font-bold text-white shadow-md transition hover:bg-[#BF8218] active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed"
                        >
                          {isSubmitting ? "অর্ডার প্রসেস হচ্ছে..." : "অর্ডার কনফার্ম করুন (ক্যাশ অন ডেলিভারি)"}
                        </button>

                        <div className="flex items-center justify-center gap-1.5 text-[11px] text-[#63503F] pt-1">
                          <svg className="h-3.5 w-3.5 text-[#4D5D43]" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 1a9 9 0 100 18 9 9 0 000-18zm3.707 7.707a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          পণ্য হাতে পাওয়ার পর চেক করে মূল্য পরিশোধ করুন
                        </div>
                      </div>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ─────────────────────────────────────────────────────────
          8. COMPACT CLEAN FOOTER — Phone, Facebook, Address Only
          ───────────────────────────────────────────────────────── */}
      <footer className="border-t border-[#E8D3AD] bg-[#FFF9F0] py-8 sm:py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Brand Logo & Name */}
            <div className="flex items-center gap-2.5">
              <BrandLogo className="h-6 w-6" />
              <span className="font-serif text-lg font-bold tracking-wider text-[#382719]">
                {site.brand}
              </span>
            </div>

            {/* Exactly 3 Types of Contact Information in Natural Bengali */}
            <div className="flex flex-wrap items-center justify-center gap-5 sm:gap-8 text-xs sm:text-sm text-[#63503F]">
              {/* A. Phone Number: 01XXXXXXXXX */}
              <div className="flex items-center gap-2">
                <svg className="h-4 w-4 text-[#D99A24]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>ফোন: <span className="font-semibold text-[#382719]">{site.phone}</span></span>
              </div>

              {/* B. Facebook Icon & Demonstration Link */}
              <a
                href={site.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 transition hover:text-[#D99A24]"
              >
                <svg className="h-4 w-4 fill-current text-[#D99A24]" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                <span>ফেসবুক: <span className="font-semibold text-[#382719]">{site.facebookLabel}</span></span>
              </a>

              {/* C. Address: Short Simple Placeholder */}
              <div className="flex items-center gap-2">
                <svg className="h-4 w-4 text-[#D99A24]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>ঠিকানা: <span className="font-semibold text-[#382719]">{site.address}</span></span>
              </div>
            </div>

            {/* Copyright */}
            <div className="text-xs text-[#917F6F]">
              © ২০২৬ {site.brand}. সর্বস্বত্ব সংরক্ষিত।
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
