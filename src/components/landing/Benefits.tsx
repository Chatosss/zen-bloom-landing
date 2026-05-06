import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

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
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] sm:aspect-square lg:aspect-[4/5] rounded-[2rem] overflow-hidden shadow-elegant border border-border/40">
              <img
                src="https://leonardopages.com/wp-content/uploads/2026/05/65d626f4-5add-4bb3-a8f5-d0c3485eb03b.jpg"
                alt="Espaço Lounge Zen"
                className="h-full w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/20 to-transparent" />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -left-6 h-32 w-32 bg-gold/10 rounded-full blur-3xl -z-10" />
            <div className="absolute -top-6 -right-6 h-32 w-32 bg-sage/10 rounded-full blur-3xl -z-10" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-charcoal leading-tight">
              Espaço Lounge Zen proporciona a você…
            </h2>

            <div className="mt-8 space-y-4">
              {benefits.map((benefit, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-3 p-3 rounded-xl bg-background/50 border border-border/40 shadow-sm"
                >
                  <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-gold/10 text-gold shrink-0">
                    <Check className="h-4 w-4" />
                  </span>
                  <span className="text-sm sm:text-base text-charcoal/80 font-medium">{benefit}</span>
                </motion.div>
              ))}
            </div>

            <a href="http://wa.me/5541998561828" target="_blank" rel="noopener noreferrer" className="contents">
              <Button size="lg" className="mt-10 gradient-gold text-gold-foreground rounded-full px-8 h-14 shadow-gold hover:scale-[1.04] transition-transform w-full sm:w-auto">
                Quero agendar meu atendimento
              </Button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;