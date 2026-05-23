import { motion } from "framer-motion";
import { BadgeCheck, GraduationCap, MessageCircle, Globe2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <section id="sobre" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 sm:gap-14 lg:gap-20 items-start">
          {/* Sticky Image Column */}
          <div className="w-full lg:w-1/2 lg:sticky lg:top-32 self-start h-auto" style={{ position: 'sticky', top: '8rem' }}>
            <motion.div
              initial={{ opacity: 0, x: -60, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-elegant">
                <div className="h-full w-full bg-cream/30">
                  <img
                    src="https://leonardopages.com/wp-content/uploads/2026/05/d66348f9-f22d-4664-8dca-9932a829cb62.jpg"
                    alt="Simone Santos Parolin, fisioterapeuta especialista em saúde da mulher"
                    loading="lazy"
                    width={1024}
                    height={1280}
                    className="h-full w-full object-contain scale-[1.05]"
                  />
                </div>
              </div>
              <div className="absolute -bottom-6 -right-4 sm:-right-8 rounded-2xl glass border border-border/60 shadow-elegant px-6 py-5 max-w-[260px]">
                <p className="font-serif text-2xl text-gold leading-none">10+</p>
                <p className="mt-1 text-sm text-charcoal/70">anos cuidando da saúde feminina com excelência</p>
              </div>
            </motion.div>
          </div>

          {/* Text Column */}
          <motion.div
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: 60, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div>
              <span className="text-xs uppercase tracking-[0.25em] text-gold font-medium">Sobre a Profissional</span>
              <h2 className="mt-4 font-serif text-3xl md:text-4xl lg:text-5xl text-charcoal">Simone Santos Parolin</h2>
            </div>

            <div className="mt-8 space-y-4 text-charcoal/75 leading-relaxed text-lg">
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
              <div className="flex items-center gap-2">
                <span className="text-gold/80">—</span>
                <span className="font-signature text-3xl text-gold/90">Simone Santos Parolin</span>
              </div>
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
                    "Pós-graduação em Estética – UniBF",
                    "Graduação e Pós Graduação em Estética e Cosmetologia",
                    "Pós Graduada em Massoterapia Ibrat Curitiba/Pr",
                    "Especialização em Estética Finaci São Paulo",
                    "Pós-graduada em Pilates solo, bola e aparelhos Voll Pilates Curitiba/Pr"
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
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 mr-2">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                Falar com a Simone
              </Button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;