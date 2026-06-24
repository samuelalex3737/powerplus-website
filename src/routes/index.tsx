import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "sonner";
import { TopBar } from "@/components/site/TopBar";
import { PillNav } from "@/components/site/PillNav";
import { Hero } from "@/components/site/Hero";
import { Services } from "@/components/site/Services";
import { WhyUs } from "@/components/site/WhyUs";
import { Energy } from "@/components/site/Energy";
import { AI } from "@/components/site/AI";
import { Generators } from "@/components/site/Generators";
import { About } from "@/components/site/About";
import { CTABanner } from "@/components/site/CTABanner";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { FloatingWhatsapp } from "@/components/site/FloatingWhatsapp";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [] }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <TopBar />
      <PillNav />
      <Hero />
      <Services />
      <WhyUs />
      <Energy />
      <AI />
      <Generators />
      <About />
      <CTABanner />
      <Contact />
      <Footer />
      <FloatingWhatsapp />
      <Toaster position="top-center" richColors closeButton />
    </main>
  );
}
