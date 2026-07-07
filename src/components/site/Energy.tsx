import { useEffect, useState, useRef, useCallback } from "react";
import {
  Calculator,
  Leaf,
  ChevronLeft,
  ChevronRight,
  Lightbulb,
  Sun,
  Cpu,
  Wind,
  Factory,
  ClipboardList,
  Activity,
  AirVent,
} from "lucide-react";
import { motion } from "framer-motion";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Sector,
} from "recharts";
import { Reveal } from "./Reveal";
import { IMG } from "@/lib/images";
import { COMPANY } from "@/lib/constants";

const CARDS = [
  {
    title: 'Lighting',
    shortDesc: '10,000+ conventional lights retrofitted to energy-efficient LEDs using advanced optimization software.',
    fullDescription: 'Power Plus Energy Solutions has retrofitted more than 10,000+ conventional lights to energy efficient LEDs. Lighting efficiency is an art of optimization - we deliver it using advanced software tailored to every space and use case. Our approach ensures the right light level, colour temperature, and control system for each environment.',
    tag: 'LED Retrofit',
    icon: Lightbulb,
    img: IMG.energyLighting,
  },
  {
    title: 'On-site Solar PV',
    shortDesc: 'We build, own and operate the system. You buy cheaper electricity via a Power Purchase Agreement.',
    fullDescription: 'We build, own and operate a solar PV system at your site - typically on the rooftop or adjacent land. The electricity output is sold to you at an agreed price via a Power Purchase Agreement (PPA). You pay nothing upfront. We also provide Solar Battery Diesel Hybrid Solutions for sites requiring combined renewable and backup power.',
    tag: 'Zero Capex',
    icon: Sun,
    img: IMG.energySolar,
  },
  {
    title: 'Controls and automation',
    shortDesc: 'Live heat maps, energy analytics, and policy scheduling across all locations with one click.',
    fullDescription: 'Custom tools that put energy intelligence at your fingertips. Energy analytics provide insight into your usage and savings. A live heat map shows exactly where your building is consuming energy. A policy editor lets you push complex schedules across all your locations with a single click.',
    tag: 'Smart Building',
    icon: Cpu,
    img: IMG.energyControls,
  },
  {
    title: 'HVAC',
    shortDesc: 'Tailor-made engineering for every stage of a building lifecycle - cutting costs, improving asset value.',
    fullDescription: 'Tailor-made engineering solutions for every stage of a building\'s lifecycle. We help building owners, managers, investors, and tenants reduce costs, increase efficiency, and improve asset value - across all building types, sizes, and ages.',
    tag: 'All Building Types',
    icon: Wind,
    img: IMG.energyHvac,
  },
  {
    title: 'Industrial energy solutions',
    shortDesc: 'Innovative products for superior profitability, increased efficiency, and reliable energy supply.',
    fullDescription: 'Innovative products and services that bring superior profitability to clients, increase overall system efficiency, and ensure a reliable, uninterrupted energy supply for industrial and manufacturing operations across the UAE.',
    tag: 'Industrial',
    icon: Factory,
    img: IMG.energyIndustrial,
  },
  {
    title: 'Energy audits',
    shortDesc: 'Reduce consumption per unit of output while lowering your total operational costs.',
    fullDescription: 'Our energy management strategy adjusts and optimizes energy usage using systems and procedures that reduce consumption per unit of output - while lowering your total operational costs. We identify exactly where energy is being wasted and provide a clear roadmap to eliminate it.',
    tag: 'Optimization',
    icon: ClipboardList,
    img: IMG.energyAudit,
  },
  {
    title: 'Condition monitoring (e-MCM)',
    shortDesc: 'Patented ML detects faults in critical AC rotating equipment up to 6 months in advance.',
    fullDescription: 'A new approach to predictive maintenance. The e-MCM is a powerful online condition monitoring tool for critical AC rotating equipment. Its patented machine learning algorithm enables comprehensive fault detection up to 6 months in advance - preventing costly breakdowns before they happen and extending equipment life.',
    tag: 'Predictive AI',
    icon: Activity,
    img: IMG.energyMonitoring,
  },
  {
    title: 'Ventilation systems',
    shortDesc: 'Customized solutions for commercial, industrial, and public buildings - code compliant.',
    fullDescription: 'We design and engineer customized ventilation solutions for commercial, industrial, and public buildings. Code compliant, safe, contaminant free - built specifically for your operations. Our ventilation technology ensures your manufacturing facilities meet all regulatory requirements.',
    tag: 'Custom Design',
    icon: AirVent,
    img: IMG.energyVentilation,
  },
];

const energyData = [
  { name: 'Chillers',             value: 57.5, color: '#94C120' },
  { name: 'Other Equipment',      value: 11.8, color: '#6B8F1A' },
  { name: 'Hot Water Boilers',    value: 8.4,  color: '#B0D62E' },
  { name: 'Fan-Coil Units',       value: 8.1,  color: '#4a7010' },
  { name: 'External Lights',      value: 7.4,  color: '#D4E8A0' },
  { name: 'Other Internal',       value: 5.1,  color: '#365c10' },
  { name: 'Exhaust Fans',         value: 1.6,  color: '#2A4210' },
  { name: 'External Consumption', value: 0.1,  color: '#1C2E0A' },
];

const renderActiveShape = (props: any) => {
  const { cx, cy, innerRadius, outerRadius, startAngle, endAngle, fill } = props;
  return (
    <g>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius + 8}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
    </g>
  );
};

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div style={{
        background: 'var(--card)',
        border: '1px solid var(--border)',
        padding: '8px 12px',
        borderRadius: '8px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        display: 'flex',
        alignItems: 'center',
        gap: '8px'
      }}>
        <div style={{ width: 10, height: 10, borderRadius: '2px', background: data.color }} />
        <span style={{ color: 'var(--pp-text)', fontWeight: 600, fontSize: '13px' }}>
          {data.name} {data.value}%
        </span>
      </div>
    );
  }
  return null;
};

export function Energy() {
  const [bill, setBill] = useState<number | "">("");
  const billNum = typeof bill === "number" ? bill : 0;
  const annual = billNum * 12;
  const low = Math.round(annual * 0.25);
  const high = Math.round(annual * 0.4);
  const [chartH, setChartH] = useState(380);
  const [pieActiveIndex, setPieActiveIndex] = useState(-1);
  const [physicalIndex, setPhysicalIndex] = useState(CARDS.length);
  const logicalIndex = ((physicalIndex % CARDS.length) + CARDS.length) % CARDS.length;

  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const resumeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const isProgrammaticScroll = useRef(false);

  const scrollToPhysicalIndex = useCallback((index: number, smooth = true) => {
    const track = trackRef.current;
    if (!track) return;
    const cards = track.querySelectorAll('.carousel-card-item');
    const card = cards[index] as HTMLElement;
    if (card) {
      if (smooth) isProgrammaticScroll.current = true;
      const scrollLeft = card.offsetLeft - track.offsetLeft - (track.clientWidth - card.offsetWidth) / 2;
      track.scrollTo({ left: scrollLeft, behavior: smooth ? 'smooth' : 'auto' });
      if (smooth) setTimeout(() => { isProgrammaticScroll.current = false; }, 500);
    }
  }, []);

  // Center immediately on mount
  useEffect(() => {
    scrollToPhysicalIndex(CARDS.length, false);
  }, [scrollToPhysicalIndex]);

  // Seamless loop reset
  useEffect(() => {
    const delay = isProgrammaticScroll.current ? 500 : 200;
    const timer = setTimeout(() => {
      if (physicalIndex < CARDS.length || physicalIndex >= CARDS.length * 2) {
        const newPhysical = CARDS.length + (physicalIndex % CARDS.length);
        setPhysicalIndex(newPhysical);
        scrollToPhysicalIndex(newPhysical, false);
      }
    }, delay);
    return () => clearTimeout(timer);
  }, [physicalIndex, scrollToPhysicalIndex]);

  const startTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setPhysicalIndex(prev => {
        const next = prev + 1;
        scrollToPhysicalIndex(next, true);
        return next;
      });
    }, 2000);
  }, [scrollToPhysicalIndex]);

  const stopTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
  }, []);

  const pauseAndResume = useCallback(() => {
    stopTimer();
    resumeTimeoutRef.current = setTimeout(startTimer, 5000);
  }, [stopTimer, startTimer]);

  useEffect(() => {
    startTimer();
    return () => {
      stopTimer();
    };
  }, [startTimer, stopTimer]);

  const selectPrevNext = (dir: 'prev' | 'next') => {
    const nextPhysical = physicalIndex + (dir === 'next' ? 1 : -1);
    setPhysicalIndex(nextPhysical);
    scrollToPhysicalIndex(nextPhysical, true);
    pauseAndResume();
  };

  const selectLogical = (logical: number) => {
    const base = Math.floor(physicalIndex / CARDS.length) * CARDS.length;
    const nextPhysical = base + logical;
    setPhysicalIndex(nextPhysical);
    scrollToPhysicalIndex(nextPhysical, true);
    pauseAndResume();
  };

  const selectPhysical = (physical: number) => {
    setPhysicalIndex(physical);
    scrollToPhysicalIndex(physical, true);
    pauseAndResume();
  };

  const handleScroll = useCallback(() => {
    if (isProgrammaticScroll.current) return;
    const track = trackRef.current;
    if (!track) return;
    const trackCenter = track.scrollLeft + track.clientWidth / 2;
    
    const cards = track.querySelectorAll('.carousel-card-item');
    let closestIndex = 0;
    let minDistance = Infinity;

    cards.forEach((card, index) => {
      const el = card as HTMLElement;
      const cardCenter = el.offsetLeft - track.offsetLeft + el.offsetWidth / 2;
      const distance = Math.abs(cardCenter - trackCenter);
      if (distance < minDistance) {
        minDistance = distance;
        closestIndex = index;
      }
    });

    setPhysicalIndex(prev => {
      if (prev !== closestIndex) {
        pauseAndResume();
        return closestIndex;
      }
      return prev;
    });
  }, [pauseAndResume]);

  const onPieEnter = (_: any, index: number) => {
    setPieActiveIndex(index);
  };
  const onPieLeave = () => {
    setPieActiveIndex(-1);
  };

  useEffect(() => {
    const calc = () => {
      const w = window.innerWidth;
      setChartH(w < 640 ? 260 : w < 1024 ? 320 : 380);
    };
    calc();
    window.addEventListener("resize", calc);
    return () => window.removeEventListener("resize", calc);
  }, []);

  return (
    <section id="energy" className="energy-section relative px-6 py-24" style={{ background: "var(--pp-section-alt)" }}>
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="max-w-3xl text-center md:text-left mx-auto md:mx-0">
            <p className="section-subhead text-sm font-semibold uppercase tracking-wider" style={{ color: "#94C120" }}>Energy Efficiency</p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl md:text-5xl">
              Comprehensive Energy & Water Excellence
            </h2>
            <p className="mt-4 text-base" style={{ color: "var(--pp-text-muted)" }}>
              Our paid-from-savings model means you get a fully upgraded building with no capital investment. We engineer the solution. You keep the savings.
            </p>
          </div>
        </Reveal>

        <div className="w-full box-border overflow-hidden mt-12">
          {/* Progress bar */}
          <div style={{
            height: 2,
            background: 'var(--border)',
            borderRadius: 1,
            marginBottom: 16,
            overflow: 'hidden',
          }}>
            <motion.div
              style={{
                height: '100%',
                background: '#94C120',
                borderRadius: 1,
              }}
              animate={{ width: `${((logicalIndex + 1) / CARDS.length) * 100}%` }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
            />
          </div>

          {/* Track and Arrows */}
          <div className="relative mt-2">
              <button
                onClick={() => selectPrevNext('prev')}
                aria-label="Previous service"
                className="flex carousel-arrow absolute left-2 md:-left-4 top-1/2 -translate-y-1/2 z-20 w-8 h-8 md:w-9 md:h-9 rounded-full items-center justify-center bg-white dark:bg-[#1C2E0A] border border-[#94C120]/40 shadow-md hover:border-[#94C120] hover:text-[#94C120] transition-all duration-150 text-[var(--pp-text-subtle)]"
                style={{ top: '40%' }}
              >
              <ChevronLeft className="w-3.5 h-3.5 md:w-4 md:h-4" />
            </button>

            <div 
              ref={trackRef}
              onScroll={handleScroll}
              className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-2 px-[11vw] md:px-0 scroll-px-[11vw] md:scroll-px-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
            >
              {/* Spacer for desktop to center first card */}
              <div className="hidden md:block flex-none w-[calc(33.333%-10px)]" aria-hidden />
            {[...CARDS, ...CARDS, ...CARDS].map((card, i) => (
              <div
                key={`${card.title}-${i}`}
                onClick={() => selectPhysical(i)}
                className={`carousel-card-item flex-none w-[78vw] md:w-[calc(33.333%-12px)] snap-center rounded-xl overflow-hidden border cursor-pointer transition-all ${logicalIndex === (i % CARDS.length) ? 'border-[#94C120] -translate-y-1 shadow-[0_8px_24px_rgba(148,193,32,0.18)]' : 'border-white/10 hover:border-white/20'}`}
              >
                <div>
                  <img src={card.img} alt={card.title} className="w-full h-[110px] md:h-[160px] object-cover" />
                </div>
                <div className="p-3 md:p-4" style={{ background: 'var(--card)' }}>
                  <div className="card-icon-badge" style={{
                    width: 36, height: 36, borderRadius: '50%',
                    background: 'rgba(148,193,32,0.12)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    marginBottom: 12
                  }}>
                    <card.icon size={18} color="#94C120" />
                  </div>
                  <h3 className="text-[0.8rem] md:text-[0.8125rem] font-semibold mb-1" style={{ color: 'var(--pp-text)' }}>{card.title}</h3>
                  <p className="text-[0.7rem] md:text-[0.75rem] leading-snug line-clamp-3 mb-3" style={{ color: 'var(--pp-text-muted)', display: '-webkit-box', WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                    {card.shortDesc}
                  </p>
                  <span className="text-[0.6rem] md:text-[0.65rem] px-2 py-0.5 rounded-full mt-2 inline-block" style={{ background: 'rgba(148,193,32,0.1)', color: '#6B8F1A', border: '1px solid rgba(148,193,32,0.2)' }}>
                    {card.tag}
                  </span>
                </div>
              </div>
            ))}
              {/* Spacer for desktop to center last card */}
              <div className="hidden md:block flex-none w-[calc(33.333%-10px)]" aria-hidden />
            </div>

              <button
                onClick={() => selectPrevNext('next')}
                aria-label="Next service"
                className="flex carousel-arrow absolute right-2 md:-right-4 top-1/2 -translate-y-1/2 z-20 w-8 h-8 md:w-9 md:h-9 rounded-full items-center justify-center bg-white dark:bg-[#1C2E0A] border border-[#94C120]/40 shadow-md hover:border-[#94C120] hover:text-[#94C120] transition-all duration-150 text-[var(--pp-text-subtle)]"
                style={{ top: '40%' }}
              >
              <ChevronRight className="w-3.5 h-3.5 md:w-4 md:h-4" />
            </button>
          </div>

          {/* Detail panel */}
          <motion.div
            className="detail-panel"
            key={logicalIndex}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            style={{
              marginTop: '16px',
              marginBottom: '16px',
              background: 'var(--card)',
              border: '1px solid var(--pp-card-border)',
              borderLeft: '4px solid #94C120',
              borderRadius: '12px',
              padding: '20px 24px',
            }}
          >
            <h4 className="detail-title" style={{
              fontSize: '1rem',
              fontWeight: 600,
              color: 'var(--pp-text)',
              marginBottom: '8px',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
            }}>
              <span className="dot" style={{
                width: 8, height: 8,
                borderRadius: '50%',
                background: '#94C120',
                display: 'inline-block',
                flexShrink: 0,
              }} />
              {CARDS[logicalIndex].title}
            </h4>
            <p className="detail-desc" style={{
              fontSize: '0.875rem',
              color: 'var(--pp-text-muted)',
              lineHeight: 1.65,
            }}>
              {CARDS[logicalIndex].fullDescription}
            </p>
          </motion.div>

          <div className="flex items-center justify-center gap-5 mt-2">
            {/* Mobile Left Arrow */}
            <button
              onClick={() => selectPrevNext('prev')}
              aria-label="Previous service"
              className="md:hidden flex items-center justify-center w-8 h-8 rounded-full bg-white dark:bg-[#1C2E0A] border border-[#94C120]/40 shadow-sm text-[var(--pp-text-subtle)] hover:border-[#94C120] hover:text-[#94C120] transition-all"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <div className="flex items-center justify-center gap-1.5">
              {/* Dots */}
              {CARDS.map((_, i) => (
                <motion.button
                  key={i}
                  onClick={() => selectLogical(i)}
                  animate={{
                    width: i === logicalIndex ? 20 : 6,
                    background: i === logicalIndex ? '#94C120' : 'var(--border)',
                  }}
                  transition={{ duration: 0.2 }}
                  style={{ height: 6, borderRadius: 3, border: 'none', cursor: 'pointer', padding: 0 }}
                  aria-label={`Go to ${CARDS[i].title}`}
                />
              ))}
            </div>

            {/* Mobile Right Arrow */}
            <button
              onClick={() => selectPrevNext('next')}
              aria-label="Next service"
              className="md:hidden flex items-center justify-center w-8 h-8 rounded-full bg-white dark:bg-[#1C2E0A] border border-[#94C120]/40 shadow-sm text-[var(--pp-text-subtle)] hover:border-[#94C120] hover:text-[#94C120] transition-all"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
          
          <style>{`
            .carousel-track {
              display: flex;
              gap: 16px;
              overflow-x: auto;
              scroll-snap-type: x mandatory;
              scroll-behavior: smooth;
              padding-bottom: 8px;
              -ms-overflow-style: none;
              scrollbar-width: none;
              cursor: grab;
            }
            .carousel-track::-webkit-scrollbar { display: none; }
            .carousel-track:active { cursor: grabbing; }

            .carousel-card {
              flex: 0 0 220px;
              scroll-snap-align: start;
              border-radius: 12px;
              overflow: hidden;
              background: var(--card);
              border: 1px solid var(--pp-card-border);
              cursor: pointer;
              transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s;
            }
            .carousel-card:hover {
              transform: translateY(-3px);
              box-shadow: 0 8px 20px rgba(148,193,32,0.12);
            }
            .carousel-card.active {
              border: 1.5px solid #94C120;
              transform: translateY(-4px);
              box-shadow: 0 8px 24px rgba(148,193,32,0.18);
            }
          `}</style>
        </div>

        {/* Solar PPA Featured Card */}
        <Reveal>
          <div className="solar-ppa-card mt-16 overflow-hidden rounded-3xl" style={{ background: "var(--card)", border: "1px solid var(--pp-card-border)" }}>
            <div className="grid md:grid-cols-2">
              <div className="h-64 md:h-auto overflow-hidden">
                <img src={IMG.energySolar} alt="On-site Solar PV installation" className="h-full w-full object-cover" />
              </div>
              <div className="p-8 lg:p-12">
                <p className="text-sm font-semibold uppercase tracking-wider" style={{ color: "#94C120" }}>On-site Solar PV</p>
                <h3 className="mt-2 text-2xl font-bold sm:text-3xl">Solar Power With Zero Investment</h3>
                <p className="mt-3 text-lg" style={{ color: "var(--pp-text-muted)" }}>
                  Power Plus installs, owns, and operates solar on your rooftop. You just pay a lower electricity bill.
                </p>
                
                <h4 className="mt-8 font-bold uppercase tracking-wider text-sm" style={{ color: "var(--pp-text)" }}>How the PPA Works</h4>
                <div className="ppa-steps mt-4 space-y-4">
                  <div className="solar-ppa-step flex gap-3">
                    <div className="solar-ppa-step-num flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-bold text-white" style={{ background: "#94C120" }}>1</div>
                    <p className="text-sm" style={{ color: "var(--pp-text-muted)" }}>We survey your roof and design the optimal solar system.</p>
                  </div>
                  <div className="solar-ppa-step flex gap-3">
                    <div className="solar-ppa-step-num flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-bold text-white" style={{ background: "#94C120" }}>2</div>
                    <p className="text-sm" style={{ color: "var(--pp-text-muted)" }}>We fund and install everything - you pay nothing upfront.</p>
                  </div>
                  <div className="solar-ppa-step flex gap-3">
                    <div className="solar-ppa-step-num flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-bold text-white" style={{ background: "#94C120" }}>3</div>
                    <p className="text-sm" style={{ color: "var(--pp-text-muted)" }}>You buy the electricity output at a rate lower than DEWA/SEWA.</p>
                  </div>
                </div>

                <h4 className="mt-8 font-bold uppercase tracking-wider text-sm" style={{ color: "var(--pp-text)" }}>Key Benefits</h4>
                <ul className="solar-ppa-benefits mt-3 grid gap-2 sm:grid-cols-2">
                  {[
                    "Immediate cost saving from day one",
                    "No capital investment",
                    "No maintenance responsibility",
                    "No ownership risk",
                    "Locked-in lower electricity rates",
                  ].map((benefit) => (
                    <li key={benefit} className="solar-ppa-benefit flex items-start gap-2 text-sm" style={{ color: "var(--pp-text-muted)" }}>
                      <span className="mt-1 font-bold leading-none" style={{ color: "#94C120" }}>✓</span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Reveal>

        <div
          className="chart-calculator-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '24px',
            alignItems: 'stretch',
            margin: '32px 0',
          }}
        >
          {/* Left column — pie chart */}
          <div style={{ height: '100%' }}>
            {/* Pie chart  -  full width, standalone */}
            <Reveal className="h-full flex flex-col">
              <div className="mt-16 lg:mt-0 h-full flex flex-col">
                <h3 className="text-center text-2xl font-bold sm:text-3xl">Where Does Your Energy Go?</h3>
            <div
              className="chart-wrapper mt-8 rounded-[12px] p-6 h-full flex flex-col justify-center"
              style={{
                background: "var(--card-bg, var(--card))",
                border: "1px solid var(--card-border, var(--pp-card-border))",
                borderRadius: "12px",
                padding: "24px"
              }}
            >
              <div className="dark:bg-white/[0.03] rounded-2xl p-4">
                <div className="flex justify-center w-full">
                  <PieChart width={280} height={280} margin={{ top: 0, right: 0, bottom: 0, left: 0 }}>
                    <Pie
                      data={energyData}
                      cx={140}
                      cy={140}
                      innerRadius={80}
                      outerRadius={110}
                      paddingAngle={2}
                      dataKey="value"
                      label={false}
                      labelLine={false}
                      activeIndex={pieActiveIndex}
                      activeShape={renderActiveShape}
                      onMouseEnter={onPieEnter}
                      onMouseLeave={onPieLeave}
                    >
                      {energyData.map((entry, index) => (
                        <Cell
                          key={index}
                          fill={entry.color}
                        />
                      ))}
                    </Pie>
                    <Tooltip content={<CustomTooltip />} />
                  </PieChart>
                </div>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '8px 16px',
                  marginTop: '16px',
                }}>
                  {energyData.map((item, i) => (
                    <div
                      key={i}
                      onMouseEnter={() => setPieActiveIndex(i)}
                      onMouseLeave={() => setPieActiveIndex(-1)}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        fontSize: '12px',
                        color: 'var(--text-muted)',
                        opacity: pieActiveIndex === -1 || pieActiveIndex === i ? 1 : 0.4,
                        transition: 'opacity 0.2s',
                        cursor: 'default'
                      }}
                    >
                      <div style={{
                        width: 10, height: 10,
                        borderRadius: '2px',
                        background: item.color,
                        flexShrink: 0
                      }} />
                      <span>{item.name} {item.value}%</span>
                    </div>
                  ))}
                </div>
              </div>
              <p className="chart-caption mt-4 text-center text-sm" style={{ color: "var(--pp-text-subtle)" }}>
                Typical energy usage breakdown for a commercial building in UAE. Chillers alone account for 57.5% of total consumption  -  the single biggest opportunity for energy savings.
              </p>
            </div>
          </div>
        </Reveal>
          </div>
          {/* Right column — savings calculator */}
          <div style={{ height: '100%' }}>
            {/* Calculator  -  centered, max-width 600px */}
            <div className="mt-14 lg:mt-0 flex justify-center h-full w-full">
              <Reveal className="h-full w-full max-w-[600px] flex flex-col">
                <div className="h-full flex flex-col">
                  <div className="flex items-center justify-center gap-3 mb-8">
                    <Calculator className="h-8 w-8" style={{ color: "#94C120" }} />
                    <h3 className="text-center text-2xl font-bold sm:text-3xl">Estimate Your Energy Savings</h3>
                  </div>
                  <div 
                    className="calculator-card w-full h-full flex flex-col justify-center rounded-[12px] p-6" 
                    style={{ 
                      background: "var(--card-bg, var(--card))", 
                      border: "1px solid var(--card-border, var(--pp-card-border))" 
                    }}
                  >
                    <label className="calculator-label block text-sm font-medium" style={{ color: "var(--pp-text)" }}>
                      What is your average monthly electricity bill?
                    </label>
                    <div
                      className="calculator-input-wrapper mt-2 flex items-center gap-2 rounded-xl px-4 py-3"
                      style={{ background: "var(--pp-input-bg)", border: "1px solid var(--pp-card-border)" }}
                    >
                      <span className="text-sm font-semibold" style={{ color: "#94C120" }}>AED</span>
                      <input
                        type="number"
                        inputMode="numeric"
                        min={0}
                        placeholder="15000"
                        value={bill}
                        onChange={(e) => setBill(e.target.value === "" ? "" : Number(e.target.value))}
                        className="flex-1 min-w-0 w-full bg-transparent text-lg font-medium outline-none"
                        style={{ color: "var(--pp-text)" }}
                      />
                      <span className="text-sm" style={{ color: "var(--pp-text-subtle)" }}>/month</span>
                    </div>
                    <div className="calculator-result mt-6 rounded-2xl p-5 text-center" style={{ background: "var(--accent)" }}>
                      <div className="calculator-result-label text-xs uppercase tracking-wider" style={{ color: "var(--pp-text-subtle)" }}>
                        Estimated annual saving
                      </div>
                      {billNum > 0 ? (
                        <>
                          <div className="calculator-result-number mt-1 text-3xl font-bold" style={{ color: "#94C120" }}>
                            AED {low.toLocaleString()} – AED {high.toLocaleString()}
                          </div>
                          <div className="calculator-result-sublabel mt-1 text-xs" style={{ color: "var(--pp-text-subtle)" }}>
                            Based on 25–40% average energy reduction
                          </div>
                        </>
                      ) : (
                        <div className="mt-2 text-sm" style={{ color: "var(--pp-text-subtle)" }}>
                          Enter your monthly bill to see your savings
                        </div>
                      )}
                    </div>
                    <a
                      href="#contact"
                      className="calculator-cta-btn mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-bold text-white"
                      style={{ background: "#94C120" }}
                    >
                      Get My Free Energy Audit
                    </a>
                    <a
                      href={COMPANY.whatsappEnergy}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="calculator-whatsapp-link mt-2 block text-center text-xs underline"
                      style={{ color: "var(--pp-text-subtle)" }}
                    >
                      Or message Joseph on WhatsApp
                    </a>

                    {/* Value bullets */}
                    <ul className="mt-8 space-y-3 text-sm" style={{ color: "var(--pp-text)" }}>
                      <li className="flex items-start gap-2">
                        <span className="text-xl leading-none" style={{ color: "#94C120" }}>✓</span>
                        <span>Zero upfront cost options available</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-xl leading-none" style={{ color: "#94C120" }}>✓</span>
                        <span>Average ROI in under 18 months</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-xl leading-none" style={{ color: "#94C120" }}>✓</span>
                        <span>Free comprehensive facility audit</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>

        <Reveal>
          <div
            className="ceep-callout mt-12 rounded-3xl p-8 text-white"
            style={{ backgroundColor: "#94C120" }}
          >
            <div className="flex flex-wrap items-start gap-4">
              <Leaf className="h-8 w-8 flex-none" />
              <div>
                <div className="ceep-label text-xs font-bold uppercase tracking-wider">
                  Comprehensive Energy Excellence Program
                </div>
                <p className="mt-2 text-base leading-relaxed sm:text-lg">
                  Power Plus developed the Comprehensive Energy Excellence Program (CEEP)  -  a complete, integrated energy programme aligned with the UAE Energy Strategy 2050. It combines lighting, solar, HVAC, water efficiency, monitoring, and predictive maintenance into one managed package with a single point of contact.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
