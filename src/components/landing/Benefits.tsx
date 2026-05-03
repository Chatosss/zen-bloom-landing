import { motion } from "framer-motion";
import { Check } from "lucide-react";

const benefits = [
  "Ambiente exclusivo e acolhedor para o público feminino.",
  "Equipamentos modernos de Pilates e Yoga.",
  "Atendimento fisioterapêutico especializado.",
  "Foco no equilíbrio entre saúde, beleza e bem-estar.",
  "Privacidade e conforto em cada detalhe.",
  "Profissionais altamente qualificadas.",
];

const Benefits = () => {
  return (
    <section className="py-24 lg:py-32 bg-accent/30">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-xs uppercase tracking-[0.25em] text-gold font-medium">Por que nos escolher</span>
            <h2 className="mt-4 font-serif text-3xl sm:text-4xl lg:text-5xl text-charcoal leading-tight">
              Espaço Lounge Zen proporciona a você...
            </h2>
            <p className="mt-6 text-charcoal/70 leading-relaxed text-lg">
              Um conceito único de cuidado integral, onde cada detalhe foi planejado para oferecer uma experiência de relaxamento e transformação.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="grid sm:grid-cols-2 gap-4"
          >
            {benefits.map((benefit, i) => (
              <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-background border border-border/40 shadow-soft">
                <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-gold/10 text-gold">
                  <Check className="h-4 w-4" />
                </span>
                <span className="text-sm text-charcoal/80 font-medium">{benefit}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;