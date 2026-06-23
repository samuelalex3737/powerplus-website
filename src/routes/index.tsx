import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "sonner";
import { PillNav } from "@/components/site/PillNav";
import { Hero } from "@/components/site/Hero";
import { Services } from "@/components/site/Services";
import { Energy } from "@/components/site/Energy";
import { AI } from "@/components/site/AI";
import { Generators } from "@/components/site/Generators";
import { About } from "@/components/site/About";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { FloatingWhatsapp } from "@/components/site/FloatingWhatsapp";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Power Plus LLC — Energy Solutions & AI Technology in the UAE" },
      {
        name: "description",
        content:
          "Industrial generators, energy efficiency systems, and AI access control across the UAE. Engineered by Power Plus LLC, Shams Free Zone, Sharjah.",
      },
      { property: "og:title", content: "Power Plus LLC — Powering Tomorrow's Future Solutions" },
      {
        property: "og:description",
        content:
          "Cummins & Perkins generators, energy-efficiency retrofits, and AI-powered face-recognition access control. UAE-based, engineer-led.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <PillNav />
      <Hero />
      <Services />
      <Energy />
      <AI />
      <Generators />
      <About />
      <Contact />
      <Footer />
      <FloatingWhatsapp />
      <Toaster position="top-center" richColors closeButton />
    </main>
  );
}
