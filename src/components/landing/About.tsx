import { motion } from "framer-motion";
import { BadgeCheck, GraduationCap, MessageCircle, Globe2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const credentials = [
  { icon: BadgeCheck, label: "CREFITO 2 - Fisioterapeuta registrada" },
  { icon: GraduationCap, label: "Especialista em Saúde da Mulher" },
  { icon: Globe2, label: "Mestrado em Yoga - Índia" },
];

const About = () => {
  return (
    <section id="sobre" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto grid lg:grid-cols-2 gap-8 sm:gap-14 lg:gap-20 items-center">
        <div className="lg:hidden">
          <span className="text-xs uppercase tracking-[0.25em] text-gold font-medium">QUEM CUIDARÁ DE VOCÊ</span>
          <h2 className="mt-4 font-serif text-3xl sm:text-4xl text-charcoal leading-tight">
            Prazer, sou <span className="italic text-gold">Simone Santos Parolin</span>.
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          className="relative"
        >
          <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-elegant">
            <img
              src="https://leonardopages.com/wp-content/uploads/2026/05/Kissila-Santos.jpg"
              alt="Simone Santos Parolin, fisioterapeuta especialista em saúde da mulher"
              loading="lazy"
              width={1024}
              height={1280}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-4 sm:-right-8 rounded-2xl glass border border-border/60 shadow-elegant px-6 py-5 max-w-[260px]">
            <p className="font-serif text-2xl text-gold leading-none">10+</p>
            <p className="mt-1 text-sm text-charcoal/70">anos cuidando da saúde feminina com excelência</p>
          </div>
          <div className="absolute -top-6 -left-4 hidden sm:block rounded-full gradient-sage text-sage-foreground px-5 py-2 shadow-soft">
            <span className="text-xs uppercase tracking-[0.2em]">Simone Santos Parolin</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
        >
          <div className="hidden lg:block">
            <span className="text-xs uppercase tracking-[0.25em] text-gold font-medium">QUEM CUIDARÁ DE VOCÊ</span>
            <h2 className="mt-4 font-serif text-3xl sm:text-4xl lg:text-5xl text-charcoal leading-tight">
              Prazer, sou <span className="italic text-gold">Simone Santos Parolin</span>.
            </h2>
          </div>
          <p className="mt-6 text-charcoal/75 leading-relaxed text-lg">
            Fisioterapeuta especialista na saúde da mulher. Minha missão é guiar você em uma jornada de autocuidado com segurança técnica e acolhimento. Trago na bagagem especializações em reabilitação e um Mestrado em Yoga realizado na Índia, garantindo um olhar completo sobre suas necessidades - do corpo à mente.
          </p>

          <ul className="mt-8 space-y-3">
            {credentials.map((c) => (
              <li key={c.label} className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex h-8 w-8 items-center justify-center rounded-full bg-accent text-sage-deep">
                  <c.icon className="h-4 w-4" />
                </span>
                <span className="text-charcoal/85">{c.label}</span>
              </li>
            ))}
          </ul>

          <a href="http://wa.me/5541998561828" target="_blank" rel="noopener noreferrer" className="contents">
            <Button size="lg" className="mt-10 gradient-gold text-gold-foreground rounded-full px-8 h-14 shadow-gold hover:scale-[1.04] transition-transform">
              <MessageCircle className="h-5 w-5" />
              Falar com a Simone
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
