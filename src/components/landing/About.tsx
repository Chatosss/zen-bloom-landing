import { motion } from "framer-motion";
import { BadgeCheck, GraduationCap, MessageCircle, Globe2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <section id="sobre" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto grid lg:grid-cols-2 gap-8 sm:gap-14 lg:gap-20 items-center">
        <div className="lg:hidden">
          <span className="text-xs uppercase tracking-[0.25em] text-gold font-medium">Sobre a Profissional</span>
          <h2 className="mt-4">
              <span className="font-signature text-6xl sm:text-7xl text-gold/90 block -mb-2">Simone Parolin</span>
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
              src="https://leonardopages.com/wp-content/uploads/2026/05/09-scaled.jpg"
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
          <div className="absolute -top-6 -left-4 hidden sm:block rounded-full gradient-gold text-gold-foreground px-5 py-2 shadow-gold">
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
            <span className="text-xs uppercase tracking-[0.25em] text-gold font-medium">Sobre a Profissional</span>
            <h2 className="mt-4">
              <span className="font-signature text-6xl md:text-7xl lg:text-8xl text-gold/90 block -mb-2 leading-[0.8]">Simone Parolin</span>
            </h2>
          </div>
          <div className="mt-6 space-y-4 text-charcoal/75 leading-relaxed text-lg">
            <p>
              Bacharel em educação Física com pós graduações em Estética e Fisioterapia esportiva e terapias manuais.
            </p>
            <p>
              Teve uma trajetória saudável sempre em busca da saúde e bem estar, além de praticante assídua de yoga e Pilates.
            </p>
            <p>
              Fez formações nas áreas específicas no Brasil e exterior.
            </p>
            <p>
              Sempre tendo consciência de que o corpo é um reflexo do interno e de que não se pode trabalhar de maneira isolada.
            </p>
          </div>

          <div className="mt-8 space-y-1">
            <p className="font-serif italic text-xl text-charcoal/90">
              "A verdadeira descoberta está em perceber que a beleza não tem forma, mas todas as formas nascem dela!"
            </p>
            <p className="font-serif text-lg text-gold/80 italic">
              — Simone Santos Parolin
            </p>
          </div>

          <div className="mt-12 space-y-8 border-l-2 border-gold/10 pl-6">
            <div>
              <h3 className="font-serif text-xl text-charcoal flex items-center gap-2">
                <GraduationCap className="h-5 w-5 text-gold" />
                Formação Acadêmica
              </h3>
              <ul className="mt-4 space-y-3">
                {[
                  "Bacharel em Educação Física – Universidade Positivo (Curitiba/PR)",
                  "Pós-graduação em Estética – Faculdade Finaci (São Paulo)",
                  "Pós-graduação em Pré e Pós-operatório – Faculdade Finaci (São Paulo)",
                  "Pós-graduação em Pilates – PhysicalMind Institute (Nova York)",
                  "Pós-graduação em Estética – UniBF"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-2 inline-flex h-1.5 w-1.5 rounded-full bg-gold shrink-0" />
                    <span className="text-charcoal/85 text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-serif text-xl text-charcoal flex items-center gap-2">
                <BadgeCheck className="h-5 w-5 text-gold" />
                Especializações
              </h3>
              <ul className="mt-4 space-y-3">
                {[
                  "Drenagem Linfática Corporal Tui-Na System – China Beijing International Acupuncture Training Centre",
                  "Especialização em Kinesio Taping – Finaci São Paulo",
                  "Especialização em Aparelhos aliados ao Pós-cirúrgico – Finaci São Paulo",
                  "Especialização em Reabilitação de Quadris – Instituto Thiago Fukuda",
                  "Especialização em Mat Pilates – Balness Jopef (Curitiba/PR)",
                  "Pilates aplicado à Hérnia Discal, Desvios Posturais e Reabilitação da Coluna – Voll Pilates Group"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-2 inline-flex h-1.5 w-1.5 rounded-full bg-gold shrink-0" />
                    <span className="text-charcoal/85 text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-serif text-xl text-charcoal flex items-center gap-2">
                <Globe2 className="h-5 w-5 text-gold" />
                Formação em Yoga
              </h3>
              <ul className="mt-4 space-y-3">
                {[
                  "Graduada em Yoga – Faculdade Vicentina (Curitiba/PR)",
                  "Formação Método Kaiut Yoga – Escola Kaiut Yoga (Curitiba/PR)",
                  "Formação em Yoga – Aliança de Yoga (Curitiba/PR)",
                  "Formação Método De Rose (Curitiba/PR)",
                  "Especialização em Yoga Hari Om Vidya School (Rishikesh, Índia)",
                  "Extensão Universitária em Yoga – Faculdade de Artes do Paraná"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-2 inline-flex h-1.5 w-1.5 rounded-full bg-gold shrink-0" />
                    <span className="text-charcoal/85 text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

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
