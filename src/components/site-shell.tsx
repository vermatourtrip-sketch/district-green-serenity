import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, Phone, X } from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";
import { WhatsAppIcon } from "@/components/whatsapp-icon";
import { address, navItems, phoneDisplay, phoneHref, whatsappHref } from "@/lib/site";

export function SiteShell({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  useEffect(() => setOpen(false), [pathname]);

  return (
    <div className="min-h-screen overflow-x-clip bg-background">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-xl">
        <div className="mx-auto grid h-20 max-w-[92rem] grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 lg:px-10">
          <Link to="/" className="min-w-0 leading-none" aria-label="The District Green home">
            <span className="block truncate font-display text-xl font-semibold text-foreground sm:text-2xl">
              The District Green
            </span>
            <span className="mt-1 block text-[10px] font-semibold uppercase tracking-[0.24em] text-primary">
              Kalpa · Himachal Pradesh
            </span>
          </Link>
          <nav className="hidden items-center gap-6 xl:flex" aria-label="Main navigation">
            {navItems.map(([label, to]) => (
              <Link
                key={to}
                to={to}
                className="nav-link"
                activeProps={{ className: "nav-link nav-link-active" }}
                activeOptions={{ exact: to === "/" }}
              >
                {label}
              </Link>
            ))}
            <a
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="button-primary"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Book your stay
            </a>
          </nav>
          <button
            type="button"
            className="icon-button xl:hidden"
            onClick={() => setOpen((value) => !value)}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
        {open && (
          <nav
            className="border-t border-border bg-background px-5 py-5 xl:hidden"
            aria-label="Mobile navigation"
          >
            <div className="grid grid-cols-2 gap-x-4 gap-y-1">
              {navItems.map(([label, to]) => (
                <Link
                  key={to}
                  to={to}
                  className="border-b border-border py-3 text-sm font-semibold text-foreground"
                >
                  {label}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </header>
      <main>{children}</main>
      <footer className="bg-forest px-5 pb-28 pt-16 text-forest-foreground md:pb-12 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <p className="eyebrow text-gold">A quiet place above the ordinary</p>
            <h2 className="mt-4 max-w-xl font-display text-4xl leading-tight">
              Come for the mountains.
              <br />
              Stay for the warmth.
            </h2>
          </div>
          <div>
            <p className="footer-heading">Find us</p>
            <p className="mt-4 max-w-xs text-sm leading-7 text-forest-muted">{address}</p>
          </div>
          <div>
            <p className="footer-heading">Reservations</p>
            <a
              href={phoneHref}
              className="mt-4 inline-flex items-center gap-2 text-lg"
            >
              <Phone size={18} />
              {phoneDisplay}
            </a>
            <br />
            <a
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.14em] text-gold"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Enquire on WhatsApp
            </a>
          </div>
        </div>
        <div className="mx-auto mt-14 flex max-w-7xl flex-col gap-2 border-t border-forest-foreground/15 pt-6 text-xs text-forest-muted sm:flex-row sm:justify-between">
          <span>© 2026 The District Green</span>
          <span>Homestay in Kalpa, Himachal Pradesh</span>
        </div>
      </footer>
      <a
        href={whatsappHref}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-24 right-5 z-40 grid h-14 w-14 place-items-center rounded-full bg-whatsapp text-whatsapp-foreground shadow-lift transition-transform hover:scale-105 md:bottom-6"
        aria-label="Enquire on WhatsApp"
      >
        <WhatsAppIcon className="h-6 w-6" />
      </a>
      <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 border-t border-border bg-background p-3 md:hidden">
        <a href={phoneHref} className="button-secondary justify-center">
          <Phone size={17} />
          Call now
        </a>
        <a
          href={whatsappHref}
          target="_blank"
          rel="noreferrer"
          className="button-primary justify-center"
        >
          <WhatsAppIcon className="h-4 w-4" />
          Book now
        </a>
      </div>
    </div>
  );
}
