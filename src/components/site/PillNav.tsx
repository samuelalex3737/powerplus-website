import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import gsap from "gsap";
import { LOGO_ICON } from "@/lib/images";
import { ThemeToggle } from "./ThemeToggle";

const LINKS = [
  { label: "Home", href: "#home", id: "home" },
  { label: "Services", href: "#services", id: "services" },
  { label: "AI", href: "#ai", id: "ai" },
  { label: "Generators", href: "#generators", id: "generators" },
  { label: "About", href: "#about", id: "about" },
  { label: "Contact", href: "#contact", id: "contact" },
];

export function PillNav() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("home");
  const bubbleRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const tweenRefs = useRef<(gsap.core.Tween | null)[]>([]);

  useEffect(() => {
    const handler = () => setOpen(false);
    window.addEventListener("hashchange", handler);
    return () => window.removeEventListener("hashchange", handler);
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 },
    );
    LINKS.forEach((l) => {
      const el = document.getElementById(l.id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  const onEnter = (i: number) => {
    const el = bubbleRefs.current[i];
    if (!el) return;
    tweenRefs.current[i]?.kill();
    tweenRefs.current[i] = gsap.fromTo(
      el,
      { y: 28, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.3, ease: "power2.out", overwrite: "auto" },
    );
  };
  const onLeave = (i: number) => {
    const el = bubbleRefs.current[i];
    if (!el) return;
    tweenRefs.current[i]?.kill();
    tweenRefs.current[i] = gsap.to(el, {
      y: 28,
      opacity: 0,
      duration: 0.2,
      ease: "power2.in",
      overwrite: "auto",
    });
  };

  return (
    <>
      <header className="fixed inset-x-0 top-4 z-50 px-4">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-3">
          <a
            href="#home"
            className="flex h-12 w-12 items-center justify-center rounded-full bg-background shadow-lg ring-1 ring-border overflow-hidden"
            aria-label="Power Plus home"
          >
            <img src={LOGO_ICON} alt="Power Plus LLC logo" className="h-10 w-10 object-contain" />
          </a>

          <nav className="hidden md:flex h-12 items-center gap-1 rounded-full bg-background/90 px-2 shadow-lg ring-1 ring-border backdrop-blur">
            {LINKS.map((l, i) => (
              <a
                key={l.href}
                href={l.href}
                onMouseEnter={() => onEnter(i)}
                onMouseLeave={() => onLeave(i)}
                className="relative rounded-full px-4 py-2 text-sm font-medium text-foreground/80 transition-colors hover:text-white"
              >
                <span
                  ref={(el) => {
                    bubbleRefs.current[i] = el;
                  }}
                  aria-hidden
                  className="pointer-events-none absolute inset-0 -z-10 rounded-full opacity-0"
                  style={{ background: "#94C120" }}
                />
                <span className="relative">{l.label}</span>
                {active === l.id && (
                  <span
                    aria-hidden
                    className="absolute left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full"
                    style={{ bottom: -8, background: "#94C120" }}
                  />
                )}
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
