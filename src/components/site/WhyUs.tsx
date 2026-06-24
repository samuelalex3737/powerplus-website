import { Award, CheckCircle, Shield, Users } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { IMG } from "@/lib/images";

const ITEMS = [
  { icon: Award, title: "Leading in Industry", body: "We have the best experience of the industry, serving commercial and industrial clients across the Middle East with proven results." },
  { icon: CheckCircle, title: "Quality Guaranteed", body: "Power Plus LLC is committed to delivering the best quality energy solutions — engineered precisely, installed reliably, monitored continuously." },
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
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {ITEMS.map((it, i) => (
            <motion.div
              key={it.title}
              initial={reduce ? false : { opacity: 0, y: 30 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.15, ease: "easeOut" }}
              className="text-center sm:text-left"
            >
              <it.icon className="mx-auto h-9 w-9 sm:mx-0" style={{ color: "#94C120" }} />
              <h3 className="mt-4 text-lg font-bold">{it.title}</h3>
              <p className="mt-2 text-sm text-white/70 leading-relaxed">{it.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}