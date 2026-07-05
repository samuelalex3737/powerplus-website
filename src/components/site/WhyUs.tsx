import { Award, CheckCircle, Shield, Users } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { IMG } from "@/lib/images";

const ITEMS = [
  { icon: Award, title: "Leading in Industry", body: "We have the best experience of the industry, serving commercial and industrial clients across the Middle East with proven results." },
  { icon: CheckCircle, title: "Quality Guaranteed", body: "Power Plus LLC is committed to delivering the best quality energy solutions  -  engineered precisely, installed reliably, monitored continuously." },
  { icon: Shield, title: "Reliable Services", body: "Our products and services meet the highest industry standards. Every project is backed by technical expertise and full post-installation support." },
  { icon: Users, title: "Experienced Team", body: "Our professional engineers and technicians have the hands-on expertise to deliver every project on specification and on time." },
];

export function WhyUs() {
  const reduce = useReducedMotion();
  return (
    <section id="why-us" className="relative isolate overflow-hidden px-6 py-24 text-white">
      <img src={IMG.whyUsBg} alt="" aria-hidden className="absolute inset-0 h-full w-full object-cover" />
      <div aria-hidden className="absolute inset-0" style={{ backgroundColor: "rgba(15,26,10,0.86)" }} />
      <div className="relative mx-auto max-w-6xl">
        <motion.h2
          initial={reduce ? false : { opacity: 0, y: 30 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center text-3xl font-bold sm:text-4xl md:text-5xl"
        >
          Why Choose Power Plus LLC?
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-8 mt-14">
          {ITEMS.map((it, i) => (
            <motion.div
              key={it.title}
              initial={reduce ? false : { opacity: 0, y: 30 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.15, ease: "easeOut" }}
              className="flex flex-row md:flex-col items-start gap-3 md:gap-0 p-4 md:p-6 rounded-xl"
            >
              <div className="w-10 h-10 md:w-12 md:h-12 min-w-[40px] md:min-w-[48px] rounded-xl flex items-center justify-center mb-0 md:mb-4 flex-shrink-0">
                <it.icon className="w-[18px] h-[18px] md:w-6 md:h-6" style={{ color: "#94C120" }} />
              </div>
              <div>
                <h3 className="text-[0.875rem] md:text-base font-semibold mb-1 md:mb-2 text-left">{it.title}</h3>
                <p className="text-[0.75rem] md:text-sm leading-relaxed text-left opacity-80">{it.body}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}