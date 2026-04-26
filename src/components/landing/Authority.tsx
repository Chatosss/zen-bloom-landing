import { motion } from "framer-motion";
import { ShieldCheck, HeartPulse, Award } from "lucide-react";

const items = [
  {
    icon: ShieldCheck,
    title: "Segurança e Exclusividade",
    text: "Um espaço 100% focado no conforto e na privacidade feminina.",
  },
  {
    icon: HeartPulse,
    title: "Metodologia Integrada",
    text: "Unimos a ciência da fisioterapia à filosofia milenar do corpo e mente.",
  },
  {
    icon: Award,
    title: "Autoridade Internacional",
    text: "Protocolos baseados em especializações nacionais e vivência direta na Índia.",
  },
];

const Authority = () => {
  return (
    <section id="autoridade" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="text-xs uppercase tracking-[0.25em] text-gold font-medium">Diferenciais</span>
          <h2 className="mt-4 font-serif text-3xl sm:text-4xl lg:text-5xl text-charcoal leading-tight">
            Muito mais que movimento.
            <span className="block italic text-sage-deep">Uma reabilitação completa.</span>
          </h2>
        </motion.div>

        <div className="mt-16 grid md:grid-cols-3 gap-6 lg:gap-8">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.12, ease: [0.4, 0, 0.2, 1] }}
              className="group relative rounded-2xl bg-card border border-border/60 p-8 shadow-soft hover:shadow-elegant hover:-translate-y-2 transition-all duration-500"
            >
              <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-gold to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-accent text-sage-deep group-hover:gradient-gold group-hover:text-gold-foreground transition-all duration-500">
                <it.icon className="h-7 w-7" />
              </span>
              <h3 className="mt-6 font-serif text-2xl text-charcoal">{it.title}</h3>
              <p className="mt-3 text-charcoal/70 leading-relaxed">{it.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Authority;