import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { LOGO_ICON } from "@/lib/images";
import { ThemeToggle } from "./ThemeToggle";
import { TopBar } from "./TopBar";

const LINKS = [
  { label: "Home", href: "#home", id: "home" },
  { label: "Services", href: "#services", id: "services" },
  { label: "AI", href: "#ai", id: "ai" },
  { label: "Vision AI", href: "#vision-ai", id: "vision-ai" },
  { label: "Generators", href: "#generators", id: "generators" },
  { label: "About", href: "#about", id: "about" },
  { label: "Contact", href: "#contact", id: "contact" },
];

export function PillNav() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("home");

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


  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 w-full">
        <TopBar />
        <div className="px-4 pt-4">
          <div className="mx-auto flex max-w-5xl items-center justify-between gap-3">
          <a
            href="#home"
            className="flex h-12 w-12 items-center justify-center rounded-full bg-background shadow-lg ring-1 ring-border overflow-hidden"
            aria-label="Power Plus home"
          >
            <img src={LOGO_ICON} alt="Power Plus LLC logo" className="h-10 w-10 object-contain" />
          </a>

          <nav className="hidden md:flex h-12 items-center gap-1 rounded-full bg-background/90 px-2 shadow-lg ring-1 ring-border backdrop-blur">
            {LINKS.map((l) => {
              const isActive = active === l.id;
              return (
                <a
                  key={l.href}
                  href={l.href}
                  className={`flex h-[38px] items-center justify-center rounded-full px-4 text-[15px] font-medium transition-all duration-200 ${
                    isActive
                      ? "bg-[#94C120] text-white shadow-sm"
                      : "text-foreground/70 hover:bg-[#94C120]/10 hover:text-[#94C120] dark:hover:bg-[#94C120]/20"
                  }`}
                >
                  <span className="relative translate-y-[1px]">{l.label}</span>
                </a>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setOpen((v) => !v)}
              className="md:hidden flex h-12 w-12 items-center justify-center rounded-full shadow-lg"
              style={{ background: "#94C120", color: "#FFFFFF" }}
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
                    className="flex min-h-[52px] items-center rounded-2xl px-4 py-3 text-base font-medium transition-colors"
                    style={
                      active === l.id 
                        ? { background: "#94C120", color: "#FFFFFF" } 
                        : { color: "var(--foreground)" }
                    }
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
        </div>
      </header>
      <div className="h-[96px] md:h-[120px]" aria-hidden />
    </>
  );
}
