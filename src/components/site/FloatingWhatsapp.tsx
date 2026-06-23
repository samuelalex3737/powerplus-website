import { MessageCircle, ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";
import { COMPANY } from "@/lib/constants";

export function FloatingWhatsapp() {
  const [show, setShow] = useState(false);
  const [top, setTop] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      setShow(window.scrollY > 300);
      setTop(window.scrollY > 500);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <>
      {top && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
          className="fixed bottom-6 left-6 z-40 flex h-11 w-11 items-center justify-center rounded-full bg-ink text-brand ring-2 ring-brand shadow-xl hover:scale-105 transition"
          style={{ backgroundColor: "var(--color-ink)" }}
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      )}
      {show && (
        <a
          href={COMPANY.whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="fixed bottom-6 right-6 z-40"
        >
          <span className="relative inline-flex h-14 w-14 items-center justify-center">
            <span
              aria-hidden
              className="absolute inset-0 rounded-full bg-brand opacity-60 animate-ping"
            />
            <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-brand text-ink shadow-2xl">
              <MessageCircle className="h-7 w-7" />
            </span>
          </span>
        </a>
      )}
    </>
  );
}
