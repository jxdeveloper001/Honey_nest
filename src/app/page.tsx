"use client";

import { useState } from "react";
import Image from "next/image";
import {
  benefits,
  faqs,
  footer,
  hero,
  order,
  productDetails,
  reviews,
  site,
  type BenefitIcon,
} from "@/data/site";

/* ---------- small inline line icons ---------- */

function BenefitIcon({ icon }: { icon: BenefitIcon }) {
  const cls = "h-6 w-6";
  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    className: cls,
    viewBox: "0 0 24 24",
    "aria-hidden": true,
  };
  if (icon === "energy")
    return (
      <svg {...common}>
        <path d="M13 2 4.5 13.5H11L9.5 22 19 9.5h-6.5L13 2Z" />
      </svg>
    );
  if (icon === "immunity")
    return (
      <svg {...common}>
        <path d="M12 2 4 5.5v5.6c0 5 3.4 8.6 8 10.4 4.6-1.8 8-5.4 8-10.4V5.5L12 2Z" />
        <path d="m8.8 12 2.2 2.2 4.2-4.4" />
      </svg>
    );
  if (icon === "sweetener")
    return (
      <svg {...common}>
        <path d="M12 3s6.5 7 6.5 11.5a6.5 6.5 0 1 1-13 0C5.5 10 12 3 12 3Z" />
        <path d="M9.5 14.5a2.5 2.5 0 0 0 2.5 2.5" />
      </svg>
    );
  return (
    <svg {...common}>
      <path d="M5 19C5 9 12 4 20 4c0 8-5 15-15 15Z" />
      <path d="M5 19c3-5 7-9 11-11" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      className="h-5 w-5 shrink-0 text-honey-deep"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="m4.5 12.5 5 5 10-11" />
    </svg>
  );
}

function Stars() {
  return (
    <div className="flex gap-0.5 text-honey" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M12 2.5 14.9 8.6l6.6.9-4.8 4.6 1.2 6.6L12 17.6 6.1 20.7l1.2-6.6L2.5 9.5l6.6-.9L12 2.5Z" />
        </svg>
      ))}
    </div>
  );
}

/* ---------- page ---------- */

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [submitted, setSubmitted] = useState(false);
  const [quantity, setQuantity] = useState<string>(order.quantities[0]);

  const reviewCards = [...reviews.items, ...reviews.items];

  return (
    <div id="top" className="min-h-screen bg-cream text-ink">
      {/* ── Header: brand only + one Order Now button ── */}
      <header className="sticky top-0 z-50 border-b border-stone-200/70 bg-cream/90 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
          <a href="#top" className="flex items-center gap-2.5">
            <svg className="h-7 w-7 text-honey" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M12 1.8 18.8 5.7v7.6L12 17.2 5.2 13.3V5.7L12 1.8Z" opacity="0.35" />
              <path d="M12 7.2 16.4 9.7v5L12 17.2 7.6 14.7v-5L12 7.2Z" />
            </svg>
            <span className="font-display text-xl font-semibold tracking-wide sm:text-2xl">
              {site.brand}
            </span>
          </a>
          <a
            href="#order"
            className="rounded-full bg-honey px-5 py-2.5 text-sm font-semibold text-ink shadow-sm transition hover:bg-[#d9930f] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-honey-deep"
          >
            Order Now
          </a>
        </div>
      </header>

      <main>
        {/* ── Hero: user's banner design, same to same ── */}
        <section className="relative" aria-label="WAN NANEY Honey — Pure & Natural Local Harvest Honey">
          <div className="relative mx-auto w-full max-w-[1440px]">
            <Image
              src="/hero-banner.jpg"
              alt="WAN NANEY Honey — Pure & Natural Local Harvest Honey. Raw, unfiltered golden honey straight from local hives."
              width={1376}
              height={768}
              priority
              className="h-auto w-full"
            />
            {/* Functional Shop Now: transparent link placed exactly over the Shop Now pill in the banner */}
            <a
              href="#order"
              aria-label="Shop Now — go to order"
              className="absolute focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-honey-deep"
              style={{ left: "7.5%", top: "74%", width: "18%", height: "9.5%" }}
            >
              <span className="sr-only">Shop Now</span>
            </a>
          </div>
        </section>

        {/* ── Product Details ── */}
        <section id="about" className="scroll-mt-20 bg-white py-16 sm:py-20">
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16">
            <div className="order-2 mx-auto w-full max-w-sm lg:order-1">
              <div className="overflow-hidden rounded-[2rem] shadow-lg shadow-amber-900/10 ring-1 ring-stone-200/60">
                <Image
                  src="/honey-jar.jpg"
                  alt={hero.jarAlt}
                  width={736}
                  height={1349}
                  loading="lazy"
                  className="h-auto w-full"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-honey-deep">
                Product Details
              </p>
              <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
                {productDetails.heading}
              </h2>
              <p className="mt-4 leading-relaxed text-stone-600">{productDetails.intro}</p>
              <ul className="mt-8 space-y-6">
                {productDetails.points.map((point) => (
                  <li key={point.title} className="flex gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-amber-100 text-honey-deep">
                      <CheckIcon />
                    </span>
                    <div>
                      <h3 className="font-semibold">{point.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-stone-600">{point.text}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ── Benefits ── */}
        <section id="benefits" className="scroll-mt-20 py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <div className="mx-auto max-w-xl text-center">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-honey-deep">
                Benefits
              </p>
              <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
                {benefits.heading}
              </h2>
              <p className="mt-3 leading-relaxed text-stone-600">{benefits.subtext}</p>
            </div>
            <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {benefits.items.map((item) => (
                <article
                  key={item.title}
                  className="rounded-3xl border border-stone-200/80 bg-white p-6 shadow-sm transition hover:shadow-md"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-100 text-honey-deep">
                    <BenefitIcon icon={item.icon} />
                  </span>
                  <h3 className="mt-5 font-display text-xl font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-stone-600">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── Reviews: ONE single sliding row ── */}
        <section id="reviews" className="scroll-mt-20 overflow-hidden bg-white py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-5 text-center sm:px-8">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-honey-deep">Reviews</p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              {reviews.heading}
            </h2>
            <p className="mx-auto mt-3 max-w-md leading-relaxed text-stone-600">{reviews.subtext}</p>
            <p className="mt-2 text-xs text-stone-400">
              Sample reviews — real customer words coming soon.
            </p>
          </div>
          <div
            className="marquee mt-10 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]"
            aria-label="Customer reviews, sliding"
          >
            <div className="marquee-track flex w-max gap-5 pr-5">
              {reviewCards.map((review, i) => (
                <figure
                  key={`${review.name}-${i}`}
                  aria-hidden={i >= reviews.items.length}
                  className="w-[300px] shrink-0 rounded-3xl border border-stone-200/80 bg-cream p-6 text-left shadow-sm sm:w-[360px]"
                >
                  <Stars />
                  <blockquote className="mt-4 leading-relaxed text-stone-700">
                    “{review.quote}”
                  </blockquote>
                  <figcaption className="mt-5">
                    <p className="font-semibold">{review.name}</p>
                    <p className="text-xs text-stone-500">{review.role}</p>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section id="faq" className="scroll-mt-20 py-16 sm:py-20">
          <div className="mx-auto max-w-3xl px-5 sm:px-8">
            <div className="text-center">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-honey-deep">FAQ</p>
              <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
                {faqs.heading}
              </h2>
              <p className="mt-3 text-stone-600">{faqs.subtext}</p>
            </div>
            <div className="mt-10 space-y-3">
              {faqs.items.map((faq, i) => {
                const open = openFaq === i;
                return (
                  <div
                    key={faq.q}
                    className="overflow-hidden rounded-2xl border border-stone-200/80 bg-white shadow-sm"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaq(open ? null : i)}
                      aria-expanded={open}
                      className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-honey-deep sm:px-6"
                    >
                      {faq.q}
                      <span
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-amber-100 text-xl text-honey-deep transition-transform ${
                          open ? "rotate-45" : ""
                        }`}
                        aria-hidden
                      >
                        +
                      </span>
                    </button>
                    {open && (
                      <p className="border-t border-stone-100 px-5 pb-5 pt-4 leading-relaxed text-stone-600 sm:px-6">
                        {faq.a}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── Order ── */}
        <section id="order" className="scroll-mt-20 bg-white py-16 sm:py-20">
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-honey-deep">
                Order Now
              </p>
              <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
                {order.heading}
              </h2>
              <p className="mt-3 leading-relaxed text-stone-600">{order.subtext}</p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <span className="font-display text-4xl font-semibold">{order.priceLine}</span>
                <span className="text-xl text-stone-400 line-through">
                  {order.regularPriceLine}
                </span>
                <span className="rounded-full bg-amber-100 px-3 py-1 text-sm font-semibold text-honey-deep">
                  {order.saveLine}
                </span>
              </div>
              <div className="mt-6 flex items-center gap-3 rounded-2xl bg-amber-50 px-4 py-3 ring-1 ring-amber-200">
                <svg
                  className="h-7 w-7 shrink-0 text-honey-deep"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.8}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden
                >
                  <path d="M3 7h11v9H3zM14 10h4l3 3v3h-7z" />
                  <circle cx="7" cy="18" r="1.8" />
                  <circle cx="17" cy="18" r="1.8" />
                </svg>
                <div>
                  <p className="text-sm font-semibold">{order.codBadge}</p>
                  <p className="text-sm text-stone-600">{order.codNote}</p>
                </div>
              </div>
              <div className="mx-auto mt-8 w-full max-w-xs overflow-hidden rounded-[2rem] shadow-lg shadow-amber-900/10 ring-1 ring-stone-200/60 lg:mx-0">
                <Image
                  src="/honey-jar.jpg"
                  alt={hero.jarAlt}
                  width={736}
                  height={1349}
                  loading="lazy"
                  className="h-auto w-full"
                />
              </div>
            </div>

            <div className="rounded-[2rem] border border-stone-200/80 bg-cream p-6 shadow-sm sm:p-8">
              {submitted ? (
                <div className="py-8 text-center">
                  <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-amber-100 text-honey-deep">
                    <CheckIcon />
                  </span>
                  <h3 className="mt-5 font-display text-2xl font-semibold">
                    {order.successTitle}
                  </h3>
                  <p className="mx-auto mt-3 max-w-sm leading-relaxed text-stone-600">
                    {order.successText}
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-6 rounded-full border border-stone-300 bg-white px-6 py-3 text-sm font-semibold transition hover:border-stone-400"
                  >
                    Place another order
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSubmitted(true);
                  }}
                >
                  <h3 className="font-display text-2xl font-semibold">Place Your Order</h3>
                  <div className="mt-6 space-y-5">
                    <div>
                      <label htmlFor="name" className="mb-1.5 block text-sm font-semibold">
                        Full Name
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        autoComplete="name"
                        placeholder="Enter your full name"
                        className="w-full rounded-xl border border-stone-300 bg-white px-4 py-3 text-base outline-none transition placeholder:text-stone-400 focus:border-honey focus:ring-2 focus:ring-amber-200"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="mb-1.5 block text-sm font-semibold">
                        Phone Number
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        autoComplete="tel"
                        placeholder="01XXXXXXXXX"
                        className="w-full rounded-xl border border-stone-300 bg-white px-4 py-3 text-base outline-none transition placeholder:text-stone-400 focus:border-honey focus:ring-2 focus:ring-amber-200"
                      />
                    </div>
                    <div>
                      <label htmlFor="address" className="mb-1.5 block text-sm font-semibold">
                        Delivery Address
                      </label>
                      <textarea
                        id="address"
                        name="address"
                        required
                        rows={3}
                        autoComplete="street-address"
                        placeholder="House, street, area, city"
                        className="w-full resize-none rounded-xl border border-stone-300 bg-white px-4 py-3 text-base outline-none transition placeholder:text-stone-400 focus:border-honey focus:ring-2 focus:ring-amber-200"
                      />
                    </div>
                    <div>
                      <label htmlFor="quantity" className="mb-1.5 block text-sm font-semibold">
                        Quantity
                      </label>
                      <select
                        id="quantity"
                        name="quantity"
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                        className="w-full appearance-none rounded-xl border border-stone-300 bg-white px-4 py-3 text-base outline-none transition focus:border-honey focus:ring-2 focus:ring-amber-200"
                      >
                        {order.quantities.map((q) => (
                          <option key={q} value={q}>
                            {q}
                          </option>
                        ))}
                      </select>
                      <p className="mt-2 text-sm text-stone-500">
                        {order.priceLine} per jar ·{" "}
                        <span className="line-through">{order.regularPriceLine}</span> ·{" "}
                        {order.saveLine}
                      </p>
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="mt-7 w-full rounded-full bg-honey py-4 text-base font-semibold text-ink shadow-sm transition hover:bg-[#d9930f] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-honey-deep"
                  >
                    {order.submitLabel} — {order.priceLine}
                  </button>
                  <p className="mt-3 text-center text-xs text-stone-500">
                    {order.codBadge} · No advance payment needed
                  </p>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>

      {/* ── Footer ── */}
      <footer className="bg-ink text-stone-300">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:grid-cols-3 sm:px-8">
          <div>
            <p className="font-display text-2xl font-semibold text-white">{site.brand}</p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-stone-400">{footer.about}</p>
          </div>
          <div>
            <p className="text-sm font-bold uppercase tracking-wider text-amber-400">
              Quick Links
            </p>
            <ul className="mt-4 space-y-2.5 text-sm">
              {footer.quickLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="transition hover:text-white">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-sm font-bold uppercase tracking-wider text-amber-400">Contact</p>
            <p className="mt-4 text-sm leading-relaxed text-stone-400">
              {site.contact.email || site.contact.phone || site.contact.address
                ? [
                    site.contact.email,
                    site.contact.phone,
                    site.contact.address,
                  ]
                    .filter(Boolean)
                    .join(" · ")
                : site.contactNote}
            </p>
          </div>
        </div>
        <div className="border-t border-stone-800">
          <p className="mx-auto max-w-6xl px-5 py-5 text-center text-xs text-stone-500 sm:px-8">
            © 2026 {site.brand}. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
