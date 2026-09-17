import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Mountain, Moon, Sparkles } from "lucide-react";
import roomA from "@/assets/mountain-room.png";
import roomB from "@/assets/cozy-room.png";
import roomC from "@/assets/bright-room.png";
import bath from "@/assets/bathroom.png";
import { Reveal } from "@/components/reveal";
import { WhatsAppIcon } from "@/components/whatsapp-icon";
import { makeHead, whatsappHref } from "@/lib/site";

export const Route = createFileRoute("/rooms")({
  head: () =>
    makeHead(
      "Rooms | The District Green Kalpa",
      "Comfortable rooms, peaceful surroundings and scenic mountain views at The District Green homestay in Kalpa.",
      "/rooms",
    ),
  component: Rooms,
});

function Rooms() {
  return (
    <>
      <section className="px-5 pb-20 pt-36 lg:px-10 lg:pb-28 lg:pt-44">
        <div className="mx-auto max-w-7xl">
          <Reveal variant="fade-up">
            <p className="eyebrow text-primary">Rest, framed by the mountains</p>
            <h1 className="page-title mt-6">Rooms</h1>
          </Reveal>
          <div className="mt-10 grid gap-8 lg:grid-cols-[.72fr_1.28fr]">
            <Reveal variant="slide-left" className="max-w-md">
              <p className="editorial-copy">
                Thoughtful, comfortable spaces for a quiet stay in Kalpa — surrounded by mountain
                light and the reassuring calm of a village home.
              </p>
            </Reveal>
            <Reveal variant="slide-right" delay={150} className="overflow-hidden">
              <img
                src={roomA}
                alt="The District Green room with a scenic mountain outlook"
                className="h-[36rem] w-full object-cover image-lift"
              />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-forest px-5 py-24 text-forest-foreground lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2">
          <Reveal variant="slide-right" className="grid grid-cols-2 gap-4">
            <img
              src={roomB}
              alt="Cozy double room at The District Green"
              className="mt-20 h-[28rem] w-full object-cover image-lift"
            />
            <img
              src={roomC}
              alt="Bright comfortable room at The District Green"
              className="h-[28rem] w-full object-cover image-lift"
            />
          </Reveal>
          <div className="flex items-center">
            <Reveal variant="slide-left" delay={150}>
              <p className="eyebrow text-gold">Your stay</p>
              <h2 className="section-title mt-5">Comfort without complication.</h2>
              <p className="mt-8 max-w-lg leading-8 text-forest-muted">
                Warm interiors, comfortable accommodation and the quiet of a Himalayan homestay.
                Rooms are offered from around ₹1,200/night, depending on the season.
              </p>
              <div className="mt-8 flex flex-wrap gap-6 text-sm">
                <span className="flex items-center gap-2">
                  <Moon size={18} />
                  Peaceful surroundings
                </span>
                <span className="flex items-center gap-2">
                  <Mountain size={18} />
                  Scenic outlook
                </span>
                <span className="flex items-center gap-2">
                  <Sparkles size={18} />
                  Homestay warmth
                </span>
              </div>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="button-primary mt-9"
              >
                <WhatsAppIcon className="h-4 w-4" />
                Check availability
                <ArrowRight size={16} />
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="px-5 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[1fr_.85fr]">
          <Reveal variant="slide-left">
            <p className="eyebrow text-primary">Simple essentials</p>
            <h2 className="section-title mt-5">A clean, easy stay.</h2>
            <p className="editorial-copy mt-7 max-w-xl">
              The accommodation keeps the focus where it belongs: on rest, the surroundings and time
              well spent in Kalpa.
            </p>
            <p className="mt-7 text-sm text-muted-foreground">
              Rates are season dependent. Please enquire for current availability and booking
              details.
            </p>
          </Reveal>
          <Reveal variant="slide-right" delay={150} className="overflow-hidden">
            <img
              src={bath}
              alt="Bathroom at The District Green homestay"
              className="h-[38rem] w-full object-cover image-lift"
            />
          </Reveal>
        </div>
      </section>
    </>
  );
}
