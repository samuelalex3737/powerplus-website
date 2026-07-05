import { ChevronUp } from "lucide-react";
import { WhatsappIcon } from "@/components/ui/whatsapp-icon";
import { useEffect, useState } from "react";
import { COMPANY } from "@/lib/constants";

export function FloatingWhatsapp() {
  const [show, setShow] = useState(false);
  const [top, setTop] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      setShow(window.scrollY > 300);
      setTop(window.scrollY > 600);
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
          className="back-to-top fixed right-6 z-50 flex h-11 w-11 items-center justify-center rounded-full shadow-xl transition hover:scale-105"
          style={{
            bottom: "6rem",
            background: "var(--background)",
            border: "1px solid #94C120",
            color: "#94C120",
            padding: 0,
            aspectRatio: "1 / 1",
            minWidth: "2.75rem",
            minHeight: "2.75rem"
          }}
        >
          <ChevronUp className="h-5 w-5" />
        </button>
      )}
      {show && (
        <a
          href={COMPANY.whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with Joseph on WhatsApp"
          title="Chat with Joseph"
          className="fixed bottom-6 right-6 z-50"
        >
          <span className="relative inline-flex h-14 w-14 items-center justify-center">
            <span
              aria-hidden
              className="absolute inset-0 rounded-full opacity-50 animate-ping"
              style={{ background: "#94C120" }}
            />
            <span className="relative flex h-14 w-14 items-center justify-center rounded-full text-white shadow-2xl" style={{ background: "#94C120" }}>
              <WhatsappIcon className="h-7 w-7" style={{ color: "white" }} />
            </span>
          </span>
        </a>
      )}
    </>
  );
}
