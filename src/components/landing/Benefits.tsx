import { motion } from "framer-motion";
import { Check } from "lucide-react";

const benefits = [
  "Equilíbrio entre corpo e mente",
  "Alívio de dores na coluna, articulações e tensões musculares",
  "Acompanhamento especializado em processos pré e pós-operatórios",
  "Estética Funcional em uma abordagem terapêutica unindo procedimentos estéticos a saúde integral.",
  "Cuidado seguro e orientado durante o período gestacional",
  "Melhora da postura, mobilidade e qualidade de vida",
  "Um ambiente acolhedor para desacelerar, reduzir a ansiedade e reconectar-se",
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
            <span className="text-xs uppercase tracking-[0.25em] text-gold font-medium">PROPORCIONA A VOCÊ</span>
            <h2 className="mt-4 font-serif text-3xl sm:text-4xl lg:text-5xl text-charcoal leading-tight">
              Espaço Lounge Zen proporciona a você…
            </h2>
            <a href="http://wa.me/5541998561828" target="_blank" rel="noopener noreferrer" className="contents">
              <Button size="lg" className="mt-10 gradient-gold text-gold-foreground rounded-full px-8 h-14 shadow-gold hover:scale-[1.04] transition-transform">
                Quero agendar meu atendimento
              </Button>
            </a>
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