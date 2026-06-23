import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import gsap from "gsap";
import { LOGO_ICON } from "@/lib/images";
import { ThemeToggle } from "./ThemeToggle";

const LINKS = [
  { label: "Services", href: "#services" },
  { label: "Energy", href: "#energy" },
  { label: "AI Access", href: "#ai" },
  { label: "Generators", href: "#generators" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function PillNav() {
  const [open, setOpen] = useState(false);
  const bubbleRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const handler = () => setOpen(false);
    window.addEventListener("hashchange", handler);
    return () => window.removeEventListener("hashchange", handler);
  }, []);

  const onEnter = (i: number) => {
    const el = bubbleRefs.current[i];
    if (!el) return;
    gsap.fromTo(
      el,
      { y: 24, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.35, ease: "power2.out" },
    );
  };
  const onLeave = (i: number) => {
    const el = bubbleRefs.current[i];
    if (!el) return;
    gsap.to(el, { y: 24, opacity: 0, duration: 0.25, ease: "power2.in" });
  };

  return (
    <>
      <header className="fixed inset-x-0 top-4 z-50 px-4">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-3">
          <a
            href="#hero"
            className="flex h-12 w-12 items-center justify-center rounded-full bg-background shadow-lg ring-1 ring-border"
            aria-label="Power Plus home"
          >
            <img src={LOGO_ICON} alt="" className="h-7 w-7" />
          </a>

          <nav className="hidden md:flex h-12 items-center gap-1 rounded-full bg-background/90 px-2 shadow-lg ring-1 ring-border backdrop-blur">
            {LINKS.map((l, i) => (
              <a
                key={l.href}
                href={l.href}
                onMouseEnter={() => onEnter(i)}
                onMouseLeave={() => onLeave(i)}
                className="relative overflow-hidden rounded-full px-4 py-2 text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
              >
                <span
                  ref={(el) => {
                    bubbleRefs.current[i] = el;
                  }}
                  aria-hidden
                  className="pointer-events-none absolute inset-0 -z-10 rounded-full bg-brand opacity-0"
                />
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setOpen((v) => !v)}
              className="md:hidden flex h-12 w-12 items-center justify-center rounded-full bg-background shadow-lg ring-1 ring-border"
              aria-label="Toggle menu"
              aria-expanded={open}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {open && (
          <div className="md:hidden mx-auto mt-3 max-w-5xl rounded-3xl bg-background p-2 shadow-2xl ring-1 ring-border">
            <ul className="flex flex-col">
              {LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-2xl px-4 py-3 text-base font-medium text-foreground hover:bg-accent"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </header>
      <div className="h-20" aria-hidden />
    </>
  );
}
