import { createFileRoute } from "@tanstack/react-router";
import { Coffee, UtensilsCrossed } from "lucide-react";
import lounge from "@/assets/common-room.png";
import corridor from "@/assets/gallery-corridor.png";
import { Reveal } from "@/components/reveal";
import { WhatsAppIcon } from "@/components/whatsapp-icon";
import { makeHead, whatsappHref } from "@/lib/site";

export const Route = createFileRoute("/dining")({
  head: () =>
    makeHead(
      "Homestyle Dining | The District Green Kalpa",
      "Discover homestyle dining and authentic local food, with paid breakfast and room service at The District Green Kalpa.",
      "/dining",
    ),
  component: Dining,
});

function Dining() {
  return (
    <>
      <section className="grid min-h-[80svh] pt-20 lg:grid-cols-[.9fr_1.1fr]">
        <div className="flex items-center px-5 py-20 lg:px-[8vw]">
          <Reveal variant="slide-left">
            <p className="eyebrow text-primary">Homestyle dining</p>
            <h1 className="page-title mt-6">
              Food with
              <br />
              a sense of place.
            </h1>
            <p className="editorial-copy mt-8 max-w-lg">
              Warm, uncomplicated and rooted in the comfort of home — the dining experience
              complements the slow rhythm of a stay in Kalpa.
            </p>
          </Reveal>
        </div>
        <Reveal variant="slide-right" delay={150} className="overflow-hidden">
          <img
            src={lounge}
            alt="Warm shared space for homestyle dining at The District Green"
            className="h-full min-h-[34rem] w-full object-cover image-lift"
          />
        </Reveal>
      </section>

      <section className="bg-secondary px-5 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-3">
          <Reveal variant="slide-left" className="lg:col-span-1">
            <p className="eyebrow text-primary">A warm welcome to the table</p>
            <h2 className="mt-5 font-display text-5xl leading-none">
              Local flavour, served simply.
            </h2>
          </Reveal>
          <div className="grid gap-5 sm:grid-cols-2 lg:col-span-2">
            <Reveal
              as="article"
              variant="fade-up"
              delay={100}
              className="border-t border-primary pt-7"
            >
              <Coffee className="text-primary" />
              <h3 className="mt-5 font-display text-3xl">Paid breakfast</h3>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">
                Start the day with a homestyle breakfast, available at an additional charge.
              </p>
            </Reveal>
            <Reveal
              as="article"
              variant="fade-up"
              delay={200}
              className="border-t border-primary pt-7"
            >
              <UtensilsCrossed className="text-primary" />
              <h3 className="mt-5 font-display text-3xl">Room service</h3>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">
                Room service is available for a relaxed and convenient stay.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="px-5 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.15fr_.85fr]">
          <Reveal variant="slide-left" className="overflow-hidden">
            <img
              src={corridor}
              alt="Sunlit corridor leading through The District Green"
              className="h-[40rem] w-full object-cover image-lift"
            />
          </Reveal>
          <Reveal variant="slide-right" delay={150}>
            <p className="eyebrow text-primary">Enquire before arrival</p>
            <h2 className="section-title mt-5">Ask what's being served.</h2>
            <p className="editorial-copy mt-7">
              For breakfast details and room service enquiries during your visit, simply get in
              touch with the homestay.
            </p>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="button-primary mt-8"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Enquire on WhatsApp
            </a>
          </Reveal>
        </div>
      </section>
    </>
  );
}
