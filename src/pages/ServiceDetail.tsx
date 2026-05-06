import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { CheckCircle2, MessageCircle, ArrowLeft, Calendar, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { useEffect } from "react";

const serviceData: Record<string, any> = {
  "yoga-gestacional": {
    category: "Práticas",
    title: "Yoga Gestacional",
    heroImg: "https://leonardopages.com/wp-content/uploads/2026/05/Gestacional-01.jpg",
    description: "O Yoga Gestacional é uma prática adaptada às mudanças físicas, hormonais e emocionais que acontecem durante a gravidez.",
    extendedDesc: [
      "Através de posturas suaves (ásanas), técnicas respiratórias (pranayamas) e momentos de relaxamento, a prática contribui para maior conforto físico e equilíbrio emocional ao longo da gestação.",
      "Os exercícios são conduzidos de forma segura e respeitando cada fase da gravidez, auxiliando na estabilização da pelve, fortalecimento do assoalho pélvico e melhora da postura, reduzindo sobrecargas na coluna lombar.",
      "As técnicas respiratórias também contribuem para o controle emocional e para o preparo fisiológico do corpo para o momento do parto."
    ],
    benefits: [
      "Alívio de dores lombares e pélvicas",
      "Melhora da postura durante a gestação",
      "Redução de inchaços e melhora da circulação",
      "Fortalecimento do assoalho pélvico",
      "Melhora da respiração e do relaxamento",
      "Preparação física e emocional para o parto"
    ],
    whoIsItFor: [
      "Gestantes em qualquer fase da gravidez (com liberação médica)",
      "Mulheres que apresentam desconfortos posturais durante a gestação",
      "Gestantes que desejam preparar o corpo para o parto",
      "Quem busca viver a gestação com mais equilíbrio e bem-estar"
    ]
  },
  "hatha-yoga": {
    category: "Práticas",
    title: "Hatha Yoga",
    heroImg: "https://leonardopages.com/wp-content/uploads/2026/05/Hatha-01.jpg",
    description: "O Hatha Yoga é uma prática tradicional que integra posturas físicas (ásanas), técnicas respiratórias (pranayamas), mantras, relaxamento e meditação.",
    extendedDesc: [
      "Essa combinação promove relaxamento profundo, serenidade e paz interior, equilíbrio entre o sistema físico e mental, auxiliando no fortalecimento muscular, na melhora da mobilidade e na redução de tensões acumuladas no corpo.",
      "A prática estimula a consciência corporal e o controle respiratório, contribuindo para maior estabilidade emocional e bem-estar geral."
    ],
    benefits: [
      "Melhora da flexibilidade e mobilidade",
      "Fortalecimento muscular equilibrado",
      "Redução do estresse e ansiedade",
      "Melhora da respiração",
      "Maior consciência corporal"
    ],
    whoIsItFor: "A prática é indicada para todos que buscam bem estar, saúde, paz e serenidade"
  },
  "pilates": {
    category: "Práticas",
    title: "Pilates",
    heroImg: "https://leonardopages.com/wp-content/uploads/2026/05/Pilates-01.jpg",
    description: "O método Pilates atua na ativação da musculatura profunda estabilizadora, especialmente do core (transverso abdominal, multífidos, assoalho pélvico e diafragma), promovendo equilíbrio muscular, e alinhamento postural.",
    extendedDesc: "O trabalho é realizado com controle respiratório, foco na qualidade do movimento e progressão individualizada, sendo indicado tanto para reabilitação quanto para condicionamento físico.",
    benefits: [
      "Estabilização da coluna vertebral",
      "Fortalecimento do core",
      "Reequilíbrio muscular",
      "Melhora da flexibilidade",
      "Redução de lombalgias"
    ],
    whoIsItFor: [
      "Hérnia de disco",
      "Desvios posturais",
      "Pós-operatório",
      "Gestantes",
      "Atletas",
      "Pessoas com dores crônicas"
    ]
  },
  "yin-yoga": {
    category: "Práticas",
    title: "Yin Yoga",
    heroImg: "https://leonardopages.com/wp-content/uploads/2026/05/Yin-01.jpg",
    description: "O Yin Yoga é uma prática profunda e meditativa que foca nos tecidos conjuntivos do corpo (fáscias, ligamentos e articulações), através de permanências longas em posturas passivas.",
    extendedDesc: "Diferente de práticas mais dinâmicas, o Yin convida à quietude. É um poderoso antídoto para o ritmo acelerado da vida moderna, permitindo uma liberação profunda de tensões físicas e bloqueios emocionais acumulados.",
    benefits: [
      "Melhora profunda da mobilidade articular",
      "Liberação miofascial e redução de rigidez",
      "Estimula o fluxo de energia vital (Chi/Prana)",
      "Aprofunda a capacidade de meditação e presença",
      "Regula o sistema nervoso parassimpático",
      "Promove paciência e aceitação emocional"
    ],
    whoIsItFor: "Ideal para quem sente o corpo rígido, está sob alto estresse ou busca uma prática complementar a exercícios intensos."
  },
  "yoga-terapeutico": {
    category: "Práticas",
    title: "Yoga Terapêutico",
    heroImg: "https://leonardopages.com/wp-content/uploads/2026/05/WhatsApp-Image-2026-04-20-at-23.33.53.jpeg",
    description: "O Yoga Terapêutico aplica as ferramentas do yoga de forma individualizada para auxiliar no tratamento de condições específicas de saúde, dores crônicas ou recuperação funcional.",
    extendedDesc: "Cada sessão é adaptada às limitações e necessidades da aluna. Utilizamos acessórios (props) para garantir conforto e segurança, focando na reabilitação gentil e no reequilíbrio dos sistemas do corpo.",
    benefits: [
      "Alívio de dores crônicas (fibromialgia, artrite, etc.)",
      "Auxílio na recuperação de lesões ortopédicas",
      "Gestão de sintomas de ansiedade e depressão",
      "Melhora do funcionamento do sistema digestivo e hormonal",
      "Aumento da vitalidade em processos de recuperação",
      "Prática 100% segura e adaptada"
    ],
    whoIsItFor: "Mulheres com necessidades específicas de saúde, dores crônicas ou que preferem uma abordagem mais cuidadosa e terapêutica."
  },
  "kinesio-taping": {
    category: "Tratamentos",
    title: "Kinesio Taping",
    heroImg: "https://leonardopages.com/wp-content/uploads/2026/05/Kinesio-01.png",
    description: "O Kinesio Taping é uma técnica de bandagem elástica aplicada com objetivo terapêutico, promovendo estímulo sensorial contínuo na pele e nos tecidos subjacentes.",
    extendedDesc: [
      "A técnica auxilia na melhora da circulação sanguínea e linfática, estabilização muscular, redução de dor e modulação de processos inflamatórios.",
      "Pode ser aplicado tanto para facilitar quanto para inibir a contração muscular, conforme necessidade clínica."
    ],
    benefits: [
      "Redução de dor",
      "Diminuição de edemas",
      "Estabilização articular",
      "Melhora da função muscular",
      "Auxílio no processo inflamatório"
    ],
    whoIsItFor: [
      "Gestantes",
      "Pós-operatório corporal e facial",
      "Lesões musculares",
      "Entorses",
      "Gestantes (suporte abdominal)",
      "Atletas"
    ]
  },
  "drenagem-linfatica": {
    category: "Tratamentos",
    title: "Drenagem Linfática Pré e Pós Operatório",
    heroImg: "https://leonardopages.com/wp-content/uploads/2026/05/Linfatica-02.jpg",
    description: "A Drenagem Linfática é uma técnica de massagem altamente especializada que estimula o sistema linfático a trabalhar de forma mais acelerada, eliminando toxinas e líquidos retidos.",
    extendedDesc: "Nossa abordagem é focada especialmente no período pré e pós-operatório de cirurgias estéticas ou gestacionais. Com toques suaves e precisos, ajudamos o corpo a se recuperar mais rápido, prevenindo fibroses e reduzindo o inchaço de forma segura.",
    benefits: [
      "Redução significativa de inchaço e retenção de líquidos",
      "Aceleração da cicatrização pós-cirúrgica",
      "Prevenção de fibroses e aderências cicatriciais",
      "Desintoxicação do organismo",
      "Sensação imediata de leveza e bem-estar",
      "Estímulo ao sistema imunológico"
    ],
    whoIsItFor: "Mulheres em período pré ou pós-operatório, gestantes ou quem sofre com inchaço e pernas cansadas."
  },
  "estetica-funcional": {
    category: "Tratamentos",
    title: "Estética Funcional",
    heroImg: "https://leonardopages.com/wp-content/uploads/2026/05/hee.webp",
    description: "A Estética Funcional une recursos estéticos com objetivos clínicos, tratando o corpo de dentro para fora para resultados mais duradouros e saudáveis.",
    extendedDesc: "Tratamos não apenas a queixa estética, mas as causas subjacentes. Seja flacidez, retenção ou gordura localizada, nossa abordagem considera a saúde metabólica e a funcionalidade do tecido, garantindo beleza com saúde.",
    benefits: [
      "Redução de flacidez com foco na firmeza tecidual",
      "Melhora da circulação e oxigenação dos tecidos",
      "Tratamento de celulite e gordura localizada de forma funcional",
      "Auxílio no tônus muscular",
      "Melhora da textura e saúde da pele",
      "Abordagem integrada e personalizada"
    ],
    whoIsItFor: "Mulheres que buscam resultados estéticos reais baseados em saúde e funcionalidade corporal."
  }
};

const ServiceDetail = () => {
  const { slug } = useParams();
  const service = serviceData[slug || ""];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-serif text-charcoal">Serviço não encontrado</h1>
          <Link to="/" className="mt-4 text-gold hover:underline inline-block">Voltar para o início</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar isDetail />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-[50vh] min-h-[400px] w-full overflow-hidden">
          <img 
            src={service.heroImg} 
            alt={service.title}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-center justify-center">
            <div className="container mx-auto px-4 text-center">
              <motion.span 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-gold font-medium tracking-[0.3em] uppercase text-sm mb-4 block"
              >
                {service.category}
              </motion.span>
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="text-4xl md:text-6xl lg:text-7xl font-serif text-white px-4 relative pb-6"
              >
                {service.title}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-gold rounded-full" />
              </motion.h1>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-32">
          <div className="max-w-[1200px] mx-auto px-4">
            <div className="grid lg:grid-cols-[55%_40%] gap-[5%] items-start">
              
              {/* Text Description */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="border-l-4 border-gold pl-6 py-1">
                  <span className="text-gold font-semibold tracking-[0.2em] uppercase text-xs">Sobre a {service.category === "Tratamentos" ? "Técnica" : "Prática"}</span>
                </div>
                
                <h2 className="mt-8 text-2xl md:text-[32px] font-serif text-charcoal leading-tight font-semibold max-w-[95%]">
                  {service.title === "Yoga Gestacional" ? "Cuidado, equilíbrio e preparo para o parto" : 
                   service.title === "Hatha Yoga" ? "Equilíbrio entre corpo e mente" :
                   service.title === "Pilates" ? "Reeducação corporal e estabilização profunda" :
                   service.title === "Kinesio Taping" ? "Suporte neuromuscular funcional" :
                   service.title === "Yin Yoga" ? "Quietude profunda e liberação miofascial" :
                   service.title === "Yoga Terapêutico" ? "Reabilitação gentil através das ferramentas do yoga" :
                   service.title === "Kinesio Taping" ? "Suporte muscular funcional para alívio imediato" :
                   service.title === "Drenagem Linfática Pré e Pós Operatório" ? "Recuperação acelerada e toque especializado" :
                   "Abordagem terapêutica para estética e saúde"}
                </h2>
                
                <div className="mt-6 space-y-6">
                  <p className="text-charcoal/80 font-serif text-lg md:text-xl leading-[1.7] font-normal">
                    {service.description}
                  </p>

                  <div className="my-4 w-20 h-px bg-gold/30" />
                  
                  {Array.isArray(service.extendedDesc) ? (
                    <div className="space-y-4">
                      {service.extendedDesc.map((p: string, i: number) => (
                        <p key={i} className="text-charcoal/60 leading-relaxed text-base md:text-lg">
                          {p}
                        </p>
                      ))}
                    </div>
                  ) : (
                    <p className="text-charcoal/60 leading-relaxed text-base md:text-lg">
                      {service.extendedDesc}
                    </p>
                  )}
                </div>
                
                <div className="mt-16">
                  <Link to="/" className="group inline-flex items-center gap-2 text-gold transition-colors font-semibold uppercase tracking-wider text-sm">
                    <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-2" />
                    Voltar para práticas
                  </Link>
                </div>
              </motion.div>

              {/* Benefits List Card */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-charcoal p-10 rounded-3xl shadow-2xl border-t-4 border-gold lg:sticky lg:top-32"
              >
                <div className="mb-4 relative inline-block">
                  <h3 className="text-2xl font-serif text-white">
                    {["Yoga Gestacional", "Hatha Yoga", "Pilates", "Kinesio Taping"].includes(service.title) ? "Benefícios" : "Principais Benefícios"}
                  </h3>
                  <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-gold/50" />
                </div>
                <ul className="mt-10 space-y-4">
                  {service.benefits.map((benefit: string, index: number) => (
                    <li key={index} className="flex items-start gap-4">
                      <div className="bg-gold/10 p-1 rounded-full mt-1">
                        <CheckCircle2 className="h-4 w-4 text-gold shrink-0" />
                      </div>
                      <span className="text-cream/80 text-lg leading-snug">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Who is it for Section */}
        <section className="py-24 bg-accent/20">
          <div className="max-w-[1100px] mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-white p-10 md:p-16 rounded-[3rem] shadow-soft flex flex-col md:flex-row items-center gap-8 md:gap-12"
            >
              <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 w-full">
                <div className="bg-gold/10 p-6 rounded-full shrink-0">
                  <Info className="h-12 w-12 text-gold" />
                </div>
                <div className="w-full">
                <h4 className="text-2xl md:text-3xl font-serif text-charcoal mb-6">
                  {["Yoga Gestacional", "Hatha Yoga", "Pilates", "Kinesio Taping"].includes(service.title) ? "Indicado para" : "Para quem é indicado?"}
                </h4>
                  {Array.isArray(service.whoIsItFor) ? (
                    <ul className="space-y-3">
                      {service.whoIsItFor.map((item: string, i: number) => (
                        <li key={i} className="flex items-start gap-3 text-charcoal/70 text-lg md:text-xl leading-relaxed">
                          <span className="text-gold mt-2 block w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-charcoal/70 text-xl leading-relaxed">{service.whoIsItFor}</p>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-charcoal to-charcoal/90" />
          <div className="container mx-auto px-4 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto"
            >
              <h2 className="text-4xl md:text-5xl font-serif text-white mb-6 leading-tight">Pronta para começar sua jornada de bem-estar?</h2>
              <p className="text-cream/70 mb-12 text-xl max-w-xl mx-auto">Sinta a transformação em seu corpo e mente com um atendimento exclusivo.</p>
              <a href="http://wa.me/5541998561828" target="_blank" rel="noopener noreferrer" className="contents">
                <Button
                  size="lg"
                  className="gradient-gold text-gold-foreground rounded-full px-6 md:px-12 py-4 md:py-8 h-auto text-base md:text-xl shadow-2xl hover:brightness-90 transition-all font-semibold whitespace-normal max-w-full"
                >
                  <MessageCircle className="hidden md:block h-6 w-6 mr-3 shrink-0" />
                  {service.title === "Yoga Gestacional" 
                    ? "Agendar acompanhamento de Yoga Gestacional pelo WhatsApp" 
                    : service.title === "Hatha Yoga"
                    ? "Agendar aula de Hatha Yoga pelo WhatsApp"
                    : service.title === "Pilates"
                    ? "Agendar avaliação de Pilates"
                    : service.title === "Kinesio Taping"
                    ? "Agendar aplicação de Kinesio Taping"
                    : "Quero agendar meu atendimento"}
                </Button>
              </a>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ServiceDetail;