import { createFileRoute } from "@tanstack/react-router";
import {
  Accessibility,
  Car,
  Clock3,
  Coffee,
  Flower2,
  PawPrint,
  UtensilsCrossed,
  Wifi,
} from "lucide-react";
import lounge from "@/assets/common-room.png";
import corridor from "@/assets/verandah.png";
import { Reveal } from "@/components/reveal";
import { WhatsAppIcon } from "@/components/whatsapp-icon";
import { makeHead, whatsappHref } from "@/lib/site";

export const Route = createFileRoute("/amenities")({
  head: () =>
    makeHead(
      "Amenities | The District Green Kalpa",
      "Free Wi-Fi, free parking, garden, room service and more at The District Green homestay in Kalpa.",
      "/amenities",
    ),
  component: Amenities,
});

const amenities = [
  [Wifi, "Free Wi-Fi", "Stay connected during your time in Kalpa."],
  [Car, "Free Parking", "Parking is available for guests."],
  [Flower2, "Garden", "A green space to enjoy the mountain atmosphere."],
  [UtensilsCrossed, "Room Service", "Enjoy added ease during your stay."],
  [Coffee, "Paid Breakfast", "Breakfast is available at an additional charge."],
  [Accessibility, "Wheelchair Accessible", "Accessibility is part of the welcome."],
  [PawPrint, "Pet Friendly", "Your pet can be part of the journey."],
  [Clock3, "24-Hour Check-in", "Arrival is possible around the clock."],
] as const;

function Amenities() {
  return (
    <>
      <section className="px-5 pb-20 pt-36 lg:px-10 lg:pb-28 lg:pt-44">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[.75fr_1.25fr]">
          <Reveal variant="slide-left">
            <p className="eyebrow text-primary">Everything you need</p>
            <h1 className="page-title mt-6">Amenities</h1>
            <p className="editorial-copy mt-8 max-w-md">
              Simple comforts and thoughtful conveniences make it easier to settle in and enjoy the
              quiet of Kalpa.
            </p>
          </Reveal>
          <Reveal variant="slide-right" delay={150} className="overflow-hidden">
            <img
              src={lounge}
              alt="Spacious common room at The District Green"
              className="h-[40rem] w-full object-cover image-lift"
            />
          </Reveal>
        </div>
      </section>

      <section className="bg-muted px-5 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <Reveal variant="fade-up">
            <p className="eyebrow text-primary">Included in the experience</p>
            <h2 className="section-title mt-5 max-w-3xl">Comfort, without the clutter.</h2>
          </Reveal>
          <div className="mt-16 grid border-l border-t border-border sm:grid-cols-2 lg:grid-cols-4">
            {amenities.map(([Icon, title, copy], i) => (
              <Reveal
                key={title}
                as="article"
                variant="fade-up"
                delay={i * 80}
                className="min-h-64 border-b border-r border-border p-7 lg:p-9"
              >
                <span className="font-display text-2xl text-muted-foreground">0{i + 1}</span>
                <Icon className="mt-10 text-primary" size={27} />
                <h3 className="mt-5 font-display text-3xl">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{copy}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="grid lg:grid-cols-2">
        <Reveal variant="slide-right" className="overflow-hidden">
          <img
            src={corridor}
            alt="Sheltered garden-facing corridor at The District Green"
            className="h-[38rem] w-full object-cover image-lift"
          />
        </Reveal>
        <div className="flex items-center bg-forest p-10 text-forest-foreground lg:p-20">
          <Reveal variant="slide-left">
            <p className="eyebrow text-gold">Plan your stay</p>
            <h2 className="section-title mt-5">Questions before you arrive?</h2>
            <p className="mt-7 max-w-lg leading-8 text-forest-muted">
              Message us for current availability, seasonal rates and booking details.
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
