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
    description: "O Yoga Gestacional é uma prática suave e adaptada para acolher as transformações do corpo feminino durante a gravidez. Através de posturas específicas, técnicas de respiração e relaxamento, buscamos preparar a gestante física e emocionalmente para o parto e para a chegada do bebê.",
    extendedDesc: "A prática foca em aliviar desconfortos comuns como dores lombares, inchaço e ansiedade, promovendo uma conexão profunda entre mãe e filho. É um momento de pausa e autocuidado em meio à jornada da maternidade.",
    benefits: [
      "Alívio de dores nas costas e tensões musculares",
      "Melhora da circulação sanguínea e redução de edemas",
      "Aumento da consciência corporal e flexibilidade",
      "Técnicas de respiração que auxiliam no trabalho de parto",
      "Redução do estresse e promoção do equilíbrio emocional",
      "Fortalecimento do assoalho pélvico"
    ],
    whoIsItFor: "Gestantes em todas as fases da gravidez (sob liberação médica), que buscam bem-estar e uma gestação mais consciente."
  },
  "hatha-yoga": {
    category: "Práticas",
    title: "Hatha Yoga",
    heroImg: "https://leonardopages.com/wp-content/uploads/2026/05/Hatha-01.jpg",
    description: "O Hatha Yoga é a base de todas as práticas de yoga, focando no equilíbrio entre corpo e mente através de posturas físicas (asanas), exercícios de respiração (pranayamas) e meditação.",
    extendedDesc: "Nossas aulas são estruturadas para desenvolver força, flexibilidade e concentração. É uma prática completa que trabalha a vitalidade do corpo enquanto acalma o sistema nervoso, proporcionando uma sensação duradoura de paz e equilíbrio.",
    benefits: [
      "Aumento da flexibilidade e força muscular",
      "Melhora da postura e do alinhamento corporal",
      "Redução dos níveis de cortisol e estresse",
      "Melhora da qualidade do sono",
      "Aumento da capacidade respiratória",
      "Desenvolvimento do foco e clareza mental"
    ],
    whoIsItFor: "Mulheres de todas as idades que buscam uma prática física equilibrada e momentos de introspecção e calma."
  },
  "pilates": {
    category: "Práticas",
    title: "Pilates",
    heroImg: "https://leonardopages.com/wp-content/uploads/2026/05/Pilates-01.jpg",
    description: "O Pilates é um método de controle muscular que foca no fortalecimento do 'powerhouse' (centro do corpo), melhora da postura e reabilitação física com precisão técnica.",
    extendedDesc: "As sessões são conduzidas com foco na qualidade do movimento, respiração e controle. Ideal tanto para condicionamento físico quanto para recuperação de lesões, o Pilates promove um corpo firme, flexível e funcional.",
    benefits: [
      "Fortalecimento profundo da musculatura abdominal e dorsal",
      "Correção postural e alívio de dores na coluna",
      "Melhora da coordenação motora e equilíbrio",
      "Aumento da densidade óssea e mobilidade articular",
      "Prevenção de lesões musculares",
      "Tonificação muscular sem impacto agressivo"
    ],
    whoIsItFor: "Mulheres que buscam fortalecer o corpo, melhorar a postura ou que necessitam de reabilitação física assistida."
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
    heroImg: "https://leonardopages.com/wp-content/uploads/2026/05/Terapeutico-01.jpg",
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
    description: "O Kinesio Taping utiliza bandagens elásticas adesivas para dar suporte muscular, reduzir dores e auxiliar na drenagem linfática sem limitar os movimentos do corpo.",
    extendedDesc: "As bandagens atuam estimulando mecanicamente os receptores da pele e melhorando a circulação local. É uma técnica excelente para suporte em pós-operatórios, gestantes com dores lombares ou atletas em recuperação.",
    benefits: [
      "Redução imediata da percepção de dor",
      "Suporte para articulações e músculos instáveis",
      "Auxílio na redução de hematomas e edemas",
      "Melhora da propriocepção (consciência do movimento)",
      "Pode ser usado por vários dias consecutivos",
      "Livre de medicamentos"
    ],
    whoIsItFor: "Indicado para alívio de dores musculares, suporte postural e auxílio em processos inflamatórios ou de recuperação."
  },
  "drenagem-linfatica": {
    category: "Tratamentos",
    title: "Drenagem Linfática Pré e Pós Operatório",
    heroImg: "https://leonardopages.com/wp-content/uploads/2026/05/Linfatica-01.jpg",
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
    heroImg: "https://leonardopages.com/wp-content/uploads/2026/05/Estetica-01.jpg",
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
                
                <h2 className="mt-8 text-2xl md:text-[32px] font-serif text-charcoal leading-tight font-semibold max-w-[90%]">
                  {service.title === "Yoga Gestacional" ? "Uma prática suave para cada fase da gestação" : 
                   service.title === "Hatha Yoga" ? "Equilíbrio entre corpo e mente com tradição" :
                   service.title === "Pilates" ? "Fortalecimento e controle com precisão técnica" :
                   service.title === "Yin Yoga" ? "Quietude profunda e liberação miofascial" :
                   service.title === "Yoga Terapêutico" ? "Reabilitação gentil através das ferramentas do yoga" :
                   service.title === "Kinesio Taping" ? "Suporte muscular funcional para alívio imediato" :
                   service.title === "Drenagem Linfática Pré e Pós Operatório" ? "Recuperação acelerada e toque especializado" :
                   "Abordagem terapêutica para estética e saúde"}
                </h2>
                
                <p className="mt-6 text-charcoal/80 font-serif text-lg md:text-xl leading-[1.7] font-normal">
                  {service.description}
                </p>

                <div className="my-8 w-20 h-px bg-gold/30" />
                
                <p className="text-charcoal/60 leading-relaxed text-base md:text-lg">
                  {service.extendedDesc}
                </p>
                
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
                <h3 className="text-2xl font-serif text-white mb-4 relative inline-block">
                  Principais Benefícios
                  <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-gold/50" />
                </h3>
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
              <div className="bg-gold/10 p-6 rounded-full">
                <Info className="h-12 w-12 text-gold" />
              </div>
              <div>
                <h4 className="text-2xl md:text-3xl font-serif text-charcoal mb-4">Para quem é indicado?</h4>
                <p className="text-charcoal/70 text-xl leading-relaxed">{service.whoIsItFor}</p>
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
              <Button 
                size="lg" 
                className="gradient-gold text-gold-foreground rounded-full px-12 h-18 text-xl shadow-2xl hover:brightness-90 transition-all font-semibold"
                onClick={() => window.open("https://wa.me/5522998980808", "_blank")}
              >
                <MessageCircle className="h-6 w-6 mr-3" />
                Quero agendar meu atendimento
              </Button>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ServiceDetail;