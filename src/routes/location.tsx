import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Navigation } from "lucide-react";
import view from "@/assets/mountain-lounge.png";
import windowView from "@/assets/window-view.png";
import { Reveal } from "@/components/reveal";
import { address, directionsHref, makeHead, mapEmbed } from "@/lib/site";

export const Route = createFileRoute("/location")({
  head: () =>
    makeHead(
      "Location | The District Green Kalpa",
      "Find The District Green at Vill. Kashmir, Kalpa, Himachal Pradesh 172107, surrounded by Himalayan mountain views.",
      "/location",
    ),
  component: Location,
});

function Location() {
  return (
    <>
      <section className="relative min-h-[72svh] pt-20 text-forest-foreground">
        <img
          src={view}
          alt="Mountain panorama surrounding The District Green in Kalpa"
          className="absolute inset-0 h-full w-full object-cover ken-burns"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest/85 via-forest/20 to-transparent" />
        <div className="relative mx-auto flex min-h-[calc(72svh-5rem)] max-w-7xl items-end px-5 pb-14 lg:px-10">
          <div className="reveal">
            <p className="eyebrow text-gold">In the heart of Kalpa</p>
            <h1 className="page-title mt-5">Location</h1>
          </div>
        </div>
      </section>

      <section className="px-5 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[.75fr_1.25fr]">
          <Reveal variant="slide-left">
            <MapPin className="text-primary" size={30} />
            <h2 className="mt-7 font-display text-5xl leading-none">The District Green</h2>
            <address className="mt-6 not-italic editorial-copy">
              Vill. Kashmir, Kalpa (15/2),
              <br />
              Kalpa, Himachal Pradesh 172107
            </address>
            <a
              href={directionsHref}
              target="_blank"
              rel="noreferrer"
              className="button-primary mt-8"
            >
              Get directions
              <Navigation size={16} />
            </a>
          </Reveal>
          <Reveal variant="slide-right" delay={150}>
            <p className="eyebrow text-primary">Mountain and village atmosphere</p>
            <p className="mt-5 font-display text-4xl leading-snug">
              A stay set among the high slopes, changing clouds and quiet rhythms of Kalpa.
            </p>
            <p className="editorial-copy mt-7 max-w-xl">
              The location places the mountain landscape at the centre of the experience, while the
              village setting keeps the stay grounded and personal.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="grid lg:grid-cols-[.7fr_1.3fr]">
        <Reveal variant="slide-left" className="overflow-hidden">
          <img
            src={windowView}
            alt="Mountains visible from The District Green in Kalpa"
            className="h-[34rem] w-full object-cover image-lift"
          />
        </Reveal>
        <Reveal variant="slide-right" delay={150}>
          <iframe
            src={mapEmbed}
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            title={`Map showing ${address}`}
            className="h-[34rem] w-full"
          />
        </Reveal>
      </section>
    </>
  );
}
