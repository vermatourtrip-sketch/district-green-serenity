import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BedDouble,
  Car,
  Clock3,
  Coffee,
  Flower2,
  MapPin,
  Mountain,
  PawPrint,
  Sparkles,
  Star,
  UtensilsCrossed,
  Wifi,
  Wind,
} from "lucide-react";
import exterior from "@/assets/property-exterior.png";
import room from "@/assets/mountain-room.png";
import view from "@/assets/mountain-lounge.png";
import verandah from "@/assets/gallery-corridor.png";
import corridor from "@/assets/gallery-corridor.png";
import cozy from "@/assets/cozy-room.png";
import bright from "@/assets/bright-room.png";
import windowView from "@/assets/window-view.png";
import common from "@/assets/common-room.png";
import { Reveal } from "@/components/reveal";
import { WhatsAppIcon } from "@/components/whatsapp-icon";
import { address, directionsHref, makeHead, phoneHref, whatsappHref } from "@/lib/site";

const schema = {
  "@context": "https://schema.org",
  "@type": ["LodgingBusiness", "LocalBusiness"],
  name: "The District Green",
  description: "A cozy Himalayan homestay in Kalpa, Himachal Pradesh.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Vill. Kashmir, Kalpa (15/2)",
    addressLocality: "Kalpa",
    addressRegion: "Himachal Pradesh",
    postalCode: "172107",
    addressCountry: "IN",
  },
  telephone: "+91 89880 90088",
  priceRange: "Around ₹1,200/night",
  aggregateRating: { "@type": "AggregateRating", ratingValue: "4.7", bestRating: "5" },
  amenityFeature: ["Free Wi-Fi", "Free Parking", "Garden", "Room Service", "Pet Friendly"].map(
    (name) => ({ "@type": "LocationFeatureSpecification", name, value: true }),
  ),
};

export const Route = createFileRoute("/")({
  head: () => ({
    ...makeHead(
      "The District Green Kalpa | Himalayan Homestay",
      "Stay at The District Green Kalpa, a peaceful mountain view homestay with authentic local hospitality in Himachal Pradesh.",
      "/",
    ),
    scripts: [{ type: "application/ld+json", children: JSON.stringify(schema) }],
  }),
  component: Home,
});

const highlights = [
  [Mountain, "Mountain views"],
  [Flower2, "Garden"],
  [Wifi, "Free Wi-Fi"],
  [Car, "Free parking"],
  [UtensilsCrossed, "Room service"],
  [PawPrint, "Pet friendly"],
] as const;

const marqueeItems = [
  "Mountain views",
  "Local experience",
  "Free Wi-Fi",
  "Free parking",
  "Garden",
  "Room service",
  "Pet friendly",
  "24-hour check-in",
  "Paid breakfast",
  "Wheelchair accessible",
];

const experiences = [
  {
    icon: Mountain,
    title: "Wake up to the Kinner Kailash range",
    copy: "Each morning opens with the changing light across the Himalayan peaks, right from your window or the garden.",
  },
  {
    icon: Wind,
    title: "Unhurried village days",
    copy: "Stroll through apple orchards, breathe the mountain air and let the quiet rhythm of Kalpa set your pace.",
  },
  {
    icon: Sparkles,
    title: "Warm Kinnauri hospitality",
    copy: "Stay as a guest, not just a visitor. The homestay's warmth comes from genuine local care and attention.",
  },
] as const;

const stats: [string, string][] = [
  ["4.7", "Guest rating"],
  ["₹1,200+", "Starting / night"],
  ["8+", "Amenities"],
  ["Kalpa", "Himachal Pradesh"],
];

const amenityPreview: [typeof Wifi, string][] = [
  [Wifi, "Free Wi-Fi"],
  [Car, "Free Parking"],
  [Flower2, "Garden"],
  [UtensilsCrossed, "Room Service"],
  [Coffee, "Paid Breakfast"],
  [PawPrint, "Pet Friendly"],
  [Clock3, "24-Hour Check-in"],
  [BedDouble, "Comfortable Beds"],
];

function Home() {
  return (
    <>
      {/* Cinematic hero with ken-burns zoom */}
      <section className="relative flex min-h-[92svh] items-end overflow-hidden pt-20 text-forest-foreground">
        <img
          src={exterior}
          alt="The District Green homestay illuminated at night in Kalpa"
          className="absolute inset-0 h-full w-full object-cover ken-burns"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-forest/90 via-forest/50 to-forest/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-forest/70 via-transparent to-transparent" />
        <div className="relative mx-auto flex min-h-[calc(92svh-5rem)] w-full max-w-7xl items-end px-5 pb-14 lg:px-10 lg:pb-20">
          <div className="max-w-4xl reveal">
            <p className="eyebrow mb-5 text-gold">A cozy Himalayan homestay · Kalpa</p>
            <h1 className="page-title max-w-4xl">
              The District
              <br />
              Green
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-forest-foreground/85">
              A peaceful Himalayan stay shaped by mountain views, quiet village rhythms and warm
              local hospitality.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={whatsappHref} target="_blank" rel="noreferrer" className="button-primary">
                <WhatsAppIcon className="h-4 w-4" />
                Book on WhatsApp
              </a>
              <a href={phoneHref} className="button-ghost-light">
                Call now
              </a>
              <a
                href={directionsHref}
                target="_blank"
                rel="noreferrer"
                className="button-ghost-light"
              >
                Get directions
              </a>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 right-0 hidden bg-background px-8 py-5 text-foreground lg:block">
          <span className="flex items-center gap-2 text-sm font-bold">
            <Star className="fill-gold text-gold" size={17} />
            4.7 / 5 guest rating
          </span>
        </div>
      </section>

      {/* Marquee highlight strip */}
      <section className="overflow-hidden border-y border-border bg-forest py-4 text-forest-foreground">
        <div className="marquee-track flex whitespace-nowrap">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span
              key={i}
              className="flex items-center gap-4 px-6 text-sm font-bold uppercase tracking-[.1em]"
            >
              <Sparkles className="h-3.5 w-3.5 text-gold" />
              {item}
            </span>
          ))}
        </div>
      </section>

      {/* Quick highlights grid */}
      <section className="border-b border-border">
        <div className="mx-auto grid max-w-7xl grid-cols-2 px-5 py-7 sm:grid-cols-3 lg:grid-cols-6 lg:px-10">
          {highlights.map(([Icon, label], i) => (
            <Reveal
              key={label}
              variant="fade-up"
              delay={i * 80}
              className="flex items-center gap-3 border-border px-2 py-3 lg:border-r"
            >
              <Icon size={19} className="text-primary" />
              <span className="text-xs font-bold uppercase tracking-[.08em]">{label}</span>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Intro — editorial split */}
      <section className="px-5 py-24 lg:px-10 lg:py-36">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[.82fr_1.18fr]">
          <Reveal variant="slide-left">
            <p className="eyebrow text-primary">At home in the high Himalayas</p>
            <h2 className="section-title mt-5">
              Slow mornings.
              <br />
              <em>Clearer skies.</em>
            </h2>
            <p className="editorial-copy mt-8 max-w-lg">
              Set in Vill. Kashmir, Kalpa, The District Green offers a calm base for experiencing
              the landscape and everyday warmth of this remarkable Himalayan village. Here, the
              mountains are not a backdrop — they are part of every moment of your stay.
            </p>
            <p className="mt-5 max-w-lg text-sm leading-7 text-muted-foreground">
              Whether you come to unwind, to explore, or simply to breathe, you'll find a place that
              moves at the right pace.
            </p>
            <Link to="/about" className="button-secondary mt-8">
              Our story
              <ArrowRight size={16} />
            </Link>
          </Reveal>
          <Reveal variant="slide-right" delay={150} className="relative pb-12 pl-0 sm:pl-20">
            <img
              src={view}
              alt="Panoramic mountain views from The District Green"
              className="h-[34rem] w-full object-cover image-lift"
            />
            <div className="absolute bottom-0 left-0 bg-forest px-7 py-6 text-forest-foreground float-anim">
              <p className="font-display text-3xl">Kalpa, 172107</p>
              <p className="mt-1 text-xs uppercase tracking-[.16em] text-forest-muted">{address}</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Stats band */}
      <section className="bg-forest py-16 text-forest-foreground">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-5 lg:grid-cols-4 lg:px-10">
          {stats.map(([number, label], i) => (
            <Reveal
              key={label}
              variant="scale-up"
              delay={i * 100}
              className="border-t border-forest-foreground/20 pt-6 text-center"
            >
              <p className="font-display text-5xl leading-none text-gold">{number}</p>
              <p className="mt-3 text-xs font-bold uppercase tracking-[.16em] text-forest-muted">
                {label}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Rooms preview */}
      <section className="bg-muted px-5 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <Reveal
            variant="fade-up"
            className="flex flex-col justify-between gap-6 md:flex-row md:items-end"
          >
            <div>
              <p className="eyebrow text-primary">Rest well</p>
              <h2 className="section-title mt-4">Rooms with a view</h2>
            </div>
            <p className="max-w-md editorial-copy">
              Comfortable accommodation, warm interiors and scenic surroundings for a peaceful
              homestay experience.
            </p>
          </Reveal>
          <div className="mt-14 grid gap-7 lg:grid-cols-[1.35fr_.65fr]">
            <Reveal variant="slide-left" className="overflow-hidden">
              <img
                src={room}
                alt="Comfortable room overlooking the mountains"
                className="h-[36rem] w-full object-cover image-lift"
              />
            </Reveal>
            <Reveal
              variant="slide-right"
              delay={150}
              className="flex flex-col justify-between bg-forest p-8 text-forest-foreground lg:p-10"
            >
              <div>
                <p className="eyebrow text-gold">Stay simply, stay well</p>
                <h3 className="mt-5 font-display text-5xl leading-none">
                  A quiet room above the valley.
                </h3>
              </div>
              <div>
                <p className="text-sm leading-7 text-forest-muted">
                  Starting around{" "}
                  <strong className="text-forest-foreground">₹1,200/night</strong>, depending on
                  season.
                </p>
                <Link to="/rooms" className="button-ghost-light mt-6">
                  Explore rooms
                  <ArrowRight size={16} />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Experience trio */}
      <section className="px-5 py-24 lg:px-10 lg:py-36">
        <div className="mx-auto max-w-7xl">
          <Reveal variant="fade-up" className="max-w-2xl">
            <p className="eyebrow text-primary">The experience</p>
            <h2 className="section-title mt-5">More than a place to sleep.</h2>
            <p className="editorial-copy mt-7">
              The District Green is a homestay in the truest sense — a place that brings you closer
              to the setting, the people and the feeling of being in Kalpa.
            </p>
          </Reveal>
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {experiences.map((exp, i) => (
              <Reveal
                key={exp.title}
                as="article"
                variant="fade-up"
                delay={i * 120}
                className="border-t-2 border-primary/30 pt-7"
              >
                <exp.icon className="text-primary" size={32} />
                <h3 className="mt-6 font-display text-3xl leading-tight">{exp.title}</h3>
                <p className="mt-4 text-sm leading-7 text-muted-foreground">{exp.copy}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Parallax banner section */}
      <section
        className="relative flex min-h-[60vh] items-center justify-center overflow-hidden bg-forest text-forest-foreground"
        style={{
          backgroundImage: `url(${corridor})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-forest/70" />
        <Reveal variant="blur-in" className="relative px-5 text-center lg:px-10">
          <p className="eyebrow text-gold">A different kind of quiet</p>
          <h2 className="mx-auto mt-5 max-w-4xl font-display text-4xl leading-[1] sm:text-6xl lg:text-7xl">
            The mountains don't rush.
            <br />
            <em className="text-gold">Neither should you.</em>
          </h2>
          <p className="mx-auto mt-7 max-w-xl leading-8 text-forest-muted">
            Time slows down in Kalpa. The air is cleaner, the light is softer, and the days belong
            to you.
          </p>
        </Reveal>
      </section>

      {/* Gallery teaser */}
      <section className="px-5 py-24 lg:px-10 lg:py-36">
        <div className="mx-auto max-w-7xl">
          <Reveal
            variant="fade-up"
            className="flex flex-col justify-between gap-6 md:flex-row md:items-end"
          >
            <div>
              <p className="eyebrow text-primary">A glimpse inside</p>
              <h2 className="section-title mt-4">Every corner tells a story.</h2>
            </div>
            <Link to="/gallery" className="button-secondary">
              View full gallery
              <ArrowRight size={16} />
            </Link>
          </Reveal>
          <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-4">
            <Reveal variant="fade-up" delay={0} className="col-span-2 row-span-2 overflow-hidden">
              <img
                src={windowView}
                alt="Mountain view from a guest room"
                className="h-full min-h-[24rem] w-full object-cover image-lift"
              />
            </Reveal>
            <Reveal variant="slide-right" delay={100} className="overflow-hidden">
              <img
                src={cozy}
                alt="Cozy guest room at The District Green"
                className="h-48 w-full object-cover image-lift md:h-full"
              />
            </Reveal>
            <Reveal variant="slide-right" delay={200} className="overflow-hidden">
              <img
                src={bright}
                alt="Bright guest room at The District Green"
                className="h-48 w-full object-cover image-lift md:h-full"
              />
            </Reveal>
            <Reveal variant="slide-left" delay={150} className="col-span-2 overflow-hidden">
              <img
                src={common}
                alt="Spacious common area at The District Green"
                className="h-48 w-full object-cover image-lift md:h-full"
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Life in Kalpa — editorial split */}
      <section className="grid min-h-[42rem] lg:grid-cols-2">
        <div className="order-2 flex items-center bg-background px-5 py-20 lg:order-1 lg:px-[10vw]">
          <Reveal variant="slide-left">
            <p className="eyebrow text-primary">Life in Kalpa</p>
            <h2 className="section-title mt-5">Closer to the place.</h2>
            <p className="editorial-copy mt-7 max-w-lg">
              The village setting invites a gentler pace: mountain air through the windows, changing
              light across the slopes and a genuine local experience that you won't find in a hotel.
            </p>
            <p className="mt-5 max-w-lg text-sm leading-7 text-muted-foreground">
              From the apple orchards surrounding the village to the ancient monasteries nearby,
              Kalpa rewards those who linger.
            </p>
            <Link to="/location" className="button-secondary mt-8">
              Discover the location
              <ArrowRight size={16} />
            </Link>
          </Reveal>
        </div>
        <div className="order-1 overflow-hidden lg:order-2">
          <Reveal variant="slide-right" className="h-full">
            <img
              src={verandah}
              alt="Sunlit corridor at The District Green"
              className="h-full min-h-[30rem] w-full object-cover image-lift"
            />
          </Reveal>
        </div>
      </section>

      {/* Amenities quick preview */}
      <section className="bg-secondary px-5 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <Reveal variant="fade-up" className="text-center">
            <p className="eyebrow text-primary">Thoughtfully included</p>
            <h2 className="section-title mx-auto mt-4 max-w-3xl">
              Everything you need, nothing you don't.
            </h2>
          </Reveal>
          <div className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-4">
            {amenityPreview.map(([Icon, label], i) => (
              <Reveal
                key={label}
                variant="scale-up"
                delay={i * 70}
                className="flex flex-col items-center gap-4 border border-border bg-background p-8 text-center"
              >
                <Icon className="text-primary" size={28} />
                <span className="text-sm font-bold uppercase tracking-[.08em]">{label}</span>
              </Reveal>
            ))}
          </div>
          <Reveal variant="fade-up" className="mt-14 text-center">
            <Link to="/amenities" className="button-secondary">
              See all amenities
              <ArrowRight size={16} />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Testimonial / quote */}
      <section className="px-5 py-24 lg:px-10 lg:py-36">
        <Reveal variant="fade-up" className="mx-auto max-w-4xl text-center">
          <div className="mb-6 flex justify-center gap-1">
            {[0, 1, 2, 3, 4].map((i) => (
              <Star key={i} className="fill-gold text-gold" size={20} />
            ))}
          </div>
          <blockquote className="font-display text-3xl leading-snug sm:text-5xl">
            "A truly peaceful stay. The mountain views from the room were breathtaking, and the
            hospitality made us feel right at home."
          </blockquote>
          <p className="mt-8 text-sm font-bold uppercase tracking-[.14em] text-muted-foreground">
            4.7 / 5 · Verified guest rating
          </p>
        </Reveal>
      </section>

      {/* Final CTA — parallax */}
      <section
        className="relative flex min-h-[55vh] items-center justify-center overflow-hidden bg-forest text-forest-foreground"
        style={{
          backgroundImage: `url(${exterior})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-forest/80" />
        <Reveal variant="blur-in" className="relative px-5 text-center lg:px-10">
          <p className="eyebrow text-gold">Your Himalayan pause awaits</p>
          <h2 className="mx-auto mt-5 max-w-4xl font-display text-5xl leading-[.95] sm:text-7xl">
            Make Kalpa more than a stop along the way.
          </h2>
          <p className="mx-auto mt-7 max-w-xl leading-8 text-forest-muted">
            Share your dates and we'll help with availability, room rates and booking details.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href={whatsappHref} target="_blank" rel="noreferrer" className="button-primary">
              <WhatsAppIcon className="h-4 w-4" />
              Check availability
            </a>
            <a href={phoneHref} className="button-ghost-light">
              Call now
            </a>
            <a
              href={directionsHref}
              target="_blank"
              rel="noreferrer"
              className="button-ghost-light"
            >
              <MapPin size={16} />
              Get directions
            </a>
          </div>
        </Reveal>
      </section>
    </>
  );
}
