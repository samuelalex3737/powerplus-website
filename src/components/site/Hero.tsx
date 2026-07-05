import { motion, useReducedMotion } from "framer-motion";
import { ChevronDown, ArrowRight, Phone, Zap, Shield, LayoutGrid, MapPin } from "lucide-react";
import { IMG } from "@/lib/images";

const Particles = () => {
  const reduce = useReducedMotion();
  if (reduce) return null;
  const particles = [
    { x: '15%',  delay: 0,   duration: 8,  size: 4,  opacity: 0.4 },
    { x: '35%',  delay: 1.5, duration: 11, size: 3,  opacity: 0.3 },
    { x: '55%',  delay: 0.8, duration: 9,  size: 5,  opacity: 0.25 },
    { x: '70%',  delay: 2.2, duration: 12, size: 3,  opacity: 0.35 },
    { x: '82%',  delay: 0.3, duration: 10, size: 4,  opacity: 0.2 },
    { x: '92%',  delay: 1.8, duration: 8,  size: 3,  opacity: 0.3 },
  ];
  return (
    <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none', zIndex: 1 }}>
      {particles.map((p, i) => (
        <motion.div
          key={i}
          style={{
            position: 'absolute',
            left: p.x,
            bottom: '-10px',
            width: p.size,
            height: p.size,
            borderRadius: '50%',
            background: '#94C120',
            opacity: p.opacity,
          }}
          animate={{ y: [0, -600] }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      ))}
    </div>
  );
};

export function Hero() {
  const reduce = useReducedMotion();
  const stagger = (i: number) =>
    reduce ? {} : { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.7, delay: 0.15 * i, ease: [0.22, 1, 0.36, 1] as const } };

  return (
    <>
    <section id="home" className="relative isolate min-h-[100svh] overflow-hidden">
      <img
        src={IMG.heroSkyline}
        alt="Industrial energy facility UAE"
        className="absolute inset-0 h-full w-full object-cover"
        style={{ objectPosition: 'center' }}
      />
      <div
        aria-hidden
        className="absolute inset-0"
        style={{ backgroundColor: "rgba(17, 26, 5, 0.78)" }}
      />
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(ellipse at 25% 60%, rgba(148,193,32,0.08) 0%, transparent 65%)',
        pointerEvents: 'none',
        zIndex: 1,
      }} />

      <Particles />

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-center px-6 pb-24 pt-[72px] md:pt-[96px] text-white">
        
        <div className="grid grid-cols-1 lg:grid-cols-[60%_40%] gap-10 items-center">
          <div>
            <motion.div
              {...stagger(0)}
              className="hero-badge"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: 'rgba(148,193,32,0.12)',
                border: '1px solid rgba(148,193,32,0.35)',
                backdropFilter: 'blur(8px)',
                WebkitBackdropFilter: 'blur(8px)',
                borderRadius: '9999px',
                padding: '6px 14px',
                marginBottom: '20px',
                color: '#94C120',
                fontSize: '11px',
                fontWeight: 600,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
              }}
            >
              <span style={{
                width: 6, height: 6,
                borderRadius: '50%',
                background: '#94C120',
                display: 'inline-block',
                animation: 'pulse-dot 2s ease-in-out infinite',
              }} />
              UAE Energy & AI Solutions Company
            </motion.div>

            <motion.h1
              {...stagger(1)}
              className="text-[clamp(1.5rem,7vw,4.5rem)] font-bold leading-tight"
            >
              <span className="block text-white">Powering Smart Decisions,</span>
              <span className="block" style={{ color: "#94C120" }}>Fueling Future Solutions</span>
            </motion.h1>

            <motion.p
              {...stagger(2)}
              className="hero-sub text-white/75"
              style={{
                marginTop: '24px',
                lineHeight: 1.65,
                fontSize: 'clamp(0.95rem, 2.5vw, 1.1rem)',
                maxWidth: '520px'
              }}
            >
              Positive Energy Partner offering tailor-made Energy Saving solutions
              for communities, industries, and properties - based in Sharjah, UAE.
            </motion.p>

            <motion.div {...stagger(3)} className="flex flex-col sm:flex-row gap-3 mt-6 w-full sm:w-auto">
              <a
                href="#services"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold text-white shadow-lg transition hover:scale-[1.02]"
                style={{ background: "#94C120" }}
              >
                Explore Our Services <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#contact"
                className="w-full sm:w-auto justify-center"
                style={{
                  background: 'transparent',
                  color: '#FFFFFF',
                  border: '2px solid rgba(255,255,255,0.65)',
                  padding: '13px 26px',
                  borderRadius: '9999px',
                  fontWeight: 600,
                  fontSize: '0.9375rem',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  transition: 'border-color 0.2s, background 0.2s',
                  whiteSpace: 'nowrap',
                  minHeight: 48,
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = '#94C120'; e.currentTarget.style.background = 'rgba(148,193,32,0.1)' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.65)'; e.currentTarget.style.background = 'transparent' }}
              >
                <Phone className="h-4 w-4" /> Contact Us
              </a>
            </motion.div>
          </div>

          <motion.div
            className="hero-stats-card hidden lg:flex"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease: 'easeOut' }}
            style={{
              background: 'rgba(255,255,255,0.06)',
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
              border: '1px solid rgba(148,193,32,0.25)',
              borderRadius: '20px',
              padding: '28px 24px',
              flexDirection: 'column',
              gap: '20px',
            }}
          >
            {[
              { value: '10,000+', label: 'Lights Retrofitted', icon: Zap },
              { value: 'Zero Capex', label: 'Cost to Client', icon: Shield },
              { value: '5', label: 'Service Pillars', icon: LayoutGrid },
              { value: '2020', label: 'Founded in UAE', icon: MapPin },
            ].map((stat) => (
              <div key={stat.label} style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <div style={{
                  width: 44, height: 44, borderRadius: '12px',
                  background: 'rgba(148,193,32,0.15)',
                  border: '1px solid rgba(148,193,32,0.3)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <stat.icon size={20} color="#94C120" />
                </div>
                <div>
                  <div style={{ fontSize: '1.3rem', fontWeight: 700, color: '#FFFFFF', lineHeight: 1.1 }}>
                    {stat.value}
                  </div>
                  <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.6)', marginTop: 2 }}>
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <motion.div
        style={{
          position: 'absolute',
          bottom: '32px',
          left: '50%',
          transform: 'translateX(-50%)',
          color: 'rgba(255,255,255,0.5)',
          cursor: 'pointer',
          zIndex: 10,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '4px',
        }}
        animate={reduce ? {} : { y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
        aria-label="Scroll to services"
      >
        <ChevronDown size={28} />
      </motion.div>

      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: '80px',
        background: 'linear-gradient(to bottom, transparent 0%, #111A05 100%)',
        pointerEvents: 'none',
        zIndex: 5,
      }} />

      <style>{`
        @keyframes pulse-dot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%       { opacity: 0.5; transform: scale(0.8); }
        }
      `}</style>
    </section>

    {/* Stats bar  -  own band below hero */}
    <div style={{ background: "#1C2E0A" }}>
      <div className="mx-auto grid max-w-6xl grid-cols-2 md:grid-cols-4">
        {[
          { n: "2020", label: "Founded" },
          { n: "10,000+", label: "Lights Retrofitted" },
          { n: "25–40%", label: "Avg. Energy Saved" },
          { n: "24/7", label: "Support" },
        ].map((s) => (
          <div key={s.label} className="p-4 md:p-8 text-center border-r border-b border-[rgba(148,193,32,0.2)] md:border-b-0 last:border-r-0 [&:nth-child(2)]:border-r-0 md:[&:nth-child(2)]:border-r-[rgba(148,193,32,0.2)] [&:nth-child(3)]:border-b-0 [&:nth-child(4)]:border-b-0">
            <div className="text-[clamp(1.1rem,4.5vw,2.2rem)] font-bold text-[#94C120]">
              {s.n}
            </div>
            <div className="text-[clamp(0.6rem,2vw,0.875rem)] text-[#A8C870] uppercase tracking-wide mt-1">
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
}
