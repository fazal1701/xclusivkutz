"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Clock, MapPin, Phone, Instagram, ArrowRight, Star } from "lucide-react"
import { MobileBookBar } from "@/components/mobile-book-bar"
import { ReviewsCarousel } from "@/components/reviews-carousel"
import {
  ADDONS,
  ADDRESS,
  BOOKSY_URL,
  FAQS,
  HOURS,
  INSTAGRAM,
  NAV_LINKS,
  PHONE,
  PHONE_HREF,
  PILLARS,
  PORTFOLIO,
  SERVICES,
  TIKTOK,
} from "@/lib/site-data"

const CrownLogo = ({ className = "h-8 w-8" }: { className?: string }) => (
  <div className={`relative ${className}`}>
    <svg viewBox="0 0 100 100" className="h-full w-full">
      <rect x="20" y="75" width="60" height="8" fill="currentColor" className="text-white" />
      <rect x="25" y="83" width="50" height="4" fill="currentColor" className="text-neutral-400" />
      <polygon points="30,75 45,45 60,75" fill="currentColor" className="text-white" />
      <polygon points="15,75 30,55 45,75" fill="currentColor" className="text-neutral-500" />
      <polygon points="55,75 70,55 85,75" fill="currentColor" className="text-neutral-500" />
      <circle cx="50" cy="35" r="6" fill="currentColor" className="text-neutral-400" />
    </svg>
  </div>
)

const bookNow = () => window.open(BOOKSY_URL, "_blank")

export default function Home() {
  return (
    <div className="min-h-screen bg-white pb-20 text-black md:pb-0">
      {/* Header */}
      <header className="fixed top-0 z-50 w-full border-b border-neutral-800 bg-black">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <a href="#home" className="flex items-center gap-3">
            <CrownLogo className="h-9 w-9" />
            <div className="font-bold leading-tight tracking-wide text-white">
              <span className="text-lg">XCLUSIV</span>
              <span className="block text-xs text-neutral-400">KUTZ</span>
            </div>
          </a>

          <nav className="hidden items-center gap-6 lg:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-neutral-300 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <Button
            className="rounded-none bg-white px-5 font-semibold text-black hover:bg-neutral-200"
            onClick={bookNow}
          >
            Book Now
          </Button>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="flex min-h-screen items-center bg-white pt-16">
        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-16 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="space-y-8">
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-neutral-500">
              Brampton · GTA Finest Barber
            </p>
            <h1 className="text-5xl font-black leading-[0.95] tracking-tight md:text-7xl lg:text-8xl">
              Precision grooming,
              <br />
              done properly.
            </h1>
            <p className="max-w-lg text-lg leading-relaxed text-neutral-600">
              Master barber Waleed Adnan delivers tailored fades, sharp lineups, and detailed beard work —
              never rushed, always consistent.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="rounded-none bg-black px-8 font-semibold text-white hover:bg-neutral-800"
                onClick={bookNow}
              >
                Book Appointment
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-none border-black px-8 font-semibold text-black hover:bg-black hover:text-white"
                onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
              >
                View Services
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 border border-neutral-200" />
            <img
              src="/portfolio/barber-portrait.png"
              alt="Waleed Adnan - Master Barber at XclusivKutz"
              className="relative z-10 w-full max-w-md grayscale"
            />
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="border-y border-neutral-200 bg-neutral-950 py-10 text-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 sm:px-6 md:grid-cols-4 lg:px-8">
          {[
            { label: "Google Rating", value: "5.0", icon: Star },
            { label: "Years Experience", value: "10+", icon: null },
            { label: "Tailored Cuts", value: "100%", icon: null },
            { label: "Open Daily", value: "9–9", icon: Clock },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="mb-1 flex items-center justify-center gap-1 text-3xl font-bold md:text-4xl">
                {stat.value}
                {stat.icon && <Star className="h-5 w-5 fill-amber-400 text-amber-400" />}
              </p>
              <p className="text-xs uppercase tracking-widest text-neutral-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why choose us */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <blockquote className="mx-auto mb-20 max-w-3xl text-center text-xl font-medium leading-relaxed text-neutral-700 md:text-2xl">
            &ldquo;A great cut is more than a service. It&apos;s attention, trust, and the confidence you carry out the door.&rdquo;
          </blockquote>
          <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
            {PILLARS.map((pillar) => (
              <div key={pillar.number} className="border-t border-black pt-6">
                <p className="mb-3 text-xs font-medium uppercase tracking-widest text-neutral-400">
                  {pillar.number}
                </p>
                <h3 className="mb-4 text-2xl font-bold">{pillar.title}</h3>
                <p className="text-neutral-600 leading-relaxed">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="border-t border-neutral-200 bg-neutral-50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-2 text-xs font-medium uppercase tracking-[0.25em] text-neutral-500">
                What We Do
              </p>
              <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
                Transparent pricing, premium quality.
              </h2>
            </div>
            <p className="max-w-sm text-neutral-600">
              Every service includes a consultation, expert execution, and a finish built around your look.
            </p>
          </div>

          <div className="space-y-4">
            {SERVICES.map((service, index) => (
              <div
                key={service.name}
                className="group grid grid-cols-1 items-center gap-6 border border-neutral-200 bg-white p-6 transition-colors hover:border-black md:grid-cols-[auto_1fr_auto_auto_auto]"
              >
                <span className="hidden text-sm font-medium text-neutral-400 md:block">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-xl font-bold">{service.name}</h3>
                  <p className="mt-1 text-sm text-neutral-600">{service.description}</p>
                </div>
                <span className="text-sm font-medium uppercase tracking-wider text-neutral-500">
                  {service.duration}
                </span>
                <span className="text-2xl font-bold">{service.price}</span>
                <Button
                  className="rounded-none bg-black text-white hover:bg-neutral-800"
                  onClick={bookNow}
                >
                  Book
                </Button>
              </div>
            ))}
          </div>

          <div className="mt-16">
            <h3 className="mb-6 text-2xl font-bold">Add-ons</h3>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              {ADDONS.map((addon) => (
                <div
                  key={addon.name}
                  className="flex flex-col border border-neutral-200 bg-white p-6 transition-colors hover:border-black"
                >
                  <div className="mb-2 flex items-center justify-between">
                    <h4 className="font-semibold">{addon.name}</h4>
                    <span className="font-bold">{addon.price}</span>
                  </div>
                  <p className="mb-6 flex-1 text-sm text-neutral-600">{addon.description}</p>
                  <Button
                    variant="outline"
                    className="rounded-none border-black text-black hover:bg-black hover:text-white"
                    onClick={bookNow}
                  >
                    Book Add-on
                  </Button>
                </div>
              ))}
            </div>
          </div>

          {/* Service cards with images - mobile visual */}
          <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3 lg:hidden">
            {SERVICES.map((service) => (
              <Card key={service.name} className="overflow-hidden rounded-none border-neutral-200 shadow-none">
                <div className="h-48 overflow-hidden">
                  <img src={service.image} alt={service.name} className="h-full w-full object-cover grayscale" />
                </div>
                <CardContent className="p-4">
                  <h4 className="font-bold">{service.name}</h4>
                  <p className="text-sm text-neutral-600">{service.price}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="bg-black py-24 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-2 text-xs font-medium uppercase tracking-[0.25em] text-neutral-500">
                Portfolio
              </p>
              <h2 className="text-4xl font-bold tracking-tight md:text-5xl">The craft, up close.</h2>
            </div>
            <p className="max-w-sm text-neutral-400">
              Fades, tapers, lineups, and beard work — every cut finished with intention.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-4">
            {PORTFOLIO.map((src, idx) => (
              <div key={idx} className="group relative aspect-[4/5] overflow-hidden">
                <img
                  src={src}
                  alt={`XclusivKutz haircut ${idx + 1}`}
                  className="h-full w-full object-cover grayscale transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team / About */}
      <section id="about" className="border-t border-neutral-200 bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <p className="mb-2 text-xs font-medium uppercase tracking-[0.25em] text-neutral-500">
              The Hands Behind the Craft
            </p>
            <h2 className="text-4xl font-bold tracking-tight md:text-5xl">Meet Waleed.</h2>
          </div>
          <div className="mx-auto grid max-w-4xl grid-cols-1 items-center gap-12 md:grid-cols-2">
            <div className="relative">
              <div className="absolute -inset-3 border border-neutral-200" />
              <img
                src="/portfolio/barber-portrait.png"
                alt="Waleed Adnan"
                className="relative w-full grayscale"
              />
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold">Waleed Adnan</h3>
                <p className="text-sm uppercase tracking-widest text-neutral-500">Founder · Master Barber</p>
              </div>
              <p className="leading-relaxed text-neutral-600">
                With over a decade behind the chair, Waleed built XclusivKutz on one principle: every client
                deserves more than a quick cut. Consultation first, precision throughout, confidence when you
                leave.
              </p>
              <p className="leading-relaxed text-neutral-600">
                Known across the GTA for clean fades, sharp scissor work, and detailed beard sculpting — Waleed
                treats every head of hair as its own brief.
              </p>
              <Button
                className="rounded-none bg-black px-8 font-semibold text-white hover:bg-neutral-800"
                onClick={bookNow}
              >
                Book with Waleed
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <ReviewsCarousel />

      {/* FAQ */}
      <section id="faq" className="border-t border-neutral-200 bg-neutral-50 py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <p className="mb-2 text-xs font-medium uppercase tracking-[0.25em] text-neutral-500">FAQ</p>
            <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
              Straight answers before you book.
            </h2>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {FAQS.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-neutral-300">
                <AccordionTrigger className="text-left font-semibold hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-neutral-600">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
            <div>
              <p className="mb-2 text-xs font-medium uppercase tracking-[0.25em] text-neutral-500">
                Visit Us
              </p>
              <h2 className="mb-8 text-4xl font-bold tracking-tight md:text-5xl">Your chair is waiting.</h2>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <MapPin className="mt-1 h-5 w-5 shrink-0" />
                  <div>
                    <h3 className="font-semibold">Location</h3>
                    <p className="text-neutral-600">{ADDRESS}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="mt-1 h-5 w-5 shrink-0" />
                  <div>
                    <h3 className="font-semibold">Phone</h3>
                    <a href={PHONE_HREF} className="text-neutral-600 transition-colors hover:text-black">
                      {PHONE}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="mt-1 h-5 w-5 shrink-0" />
                  <div>
                    <h3 className="font-semibold">Hours</h3>
                    <p className="text-neutral-600">{HOURS}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="border border-neutral-200 bg-neutral-50 p-8">
              <h3 className="mb-6 text-xl font-bold">Book Your Appointment</h3>
              <div className="space-y-3">
                <Button
                  className="w-full rounded-none bg-black py-6 text-base font-semibold text-white hover:bg-neutral-800"
                  onClick={bookNow}
                >
                  Book on Booksy
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  className="w-full rounded-none border-black py-6 text-base text-black hover:bg-black hover:text-white"
                  onClick={() => (window.location.href = PHONE_HREF)}
                >
                  Call {PHONE}
                </Button>
                <Button
                  variant="outline"
                  className="w-full rounded-none border-neutral-300 py-6 text-base text-black hover:border-black hover:bg-black hover:text-white"
                  onClick={() => window.open(INSTAGRAM, "_blank")}
                >
                  <Instagram className="mr-2 h-4 w-4" />
                  Instagram @_xclusivkutz
                </Button>
                <Button
                  variant="outline"
                  className="w-full rounded-none border-neutral-300 py-6 text-base text-black hover:border-black hover:bg-black hover:text-white"
                  onClick={() => window.open(TIKTOK, "_blank")}
                >
                  TikTok @_xclusivkutz
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-black py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight md:text-5xl">Ready for your best cut yet?</h2>
          <p className="mx-auto mt-4 max-w-lg text-neutral-400">
            Book online in seconds. No rushed cuts — just proper work, done right.
          </p>
          <Button
            size="lg"
            className="mt-8 rounded-none bg-white px-10 py-6 text-base font-semibold text-black hover:bg-neutral-200"
            onClick={bookNow}
          >
            Book Appointment
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-neutral-800 bg-black py-12 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
            <div className="flex items-center gap-3">
              <CrownLogo className="h-7 w-7" />
              <span className="font-bold tracking-wide">XCLUSIV KUTZ</span>
            </div>
            <nav className="flex flex-wrap justify-center gap-6">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-neutral-400 transition-colors hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <p className="text-sm text-neutral-500">© 2025 XclusivKutz — Waleed Adnan</p>
          </div>
        </div>
      </footer>

      <MobileBookBar />
    </div>
  )
}
