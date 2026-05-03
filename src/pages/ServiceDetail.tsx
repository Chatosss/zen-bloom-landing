import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { CheckCircle2, MessageCircle, ArrowLeft, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { useEffect } from "react";

const serviceData: Record<string, any> = {
  "yoga-gestacional": {
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
    title: "Estética Funcional",
    heroImg: "https://images.unsplash.com/photo-1544161515-436cead10270?q=80&w=2070&auto=format&fit=crop",
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
        <section className="relative h-[60vh] min-h-[400px] w-full overflow-hidden">
          <img 
            src={service.heroImg} 
            alt={service.title}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-serif text-white text-center px-4"
            >
              {service.title}
            </motion.h1>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              
              {/* Text Description */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <span className="text-gold font-medium tracking-[0.2em] uppercase text-xs">Sobre a Prática</span>
                <h2 className="mt-4 text-3xl md:text-4xl font-serif text-charcoal leading-tight">
                  {service.description}
                </h2>
                <p className="mt-6 text-charcoal/70 leading-relaxed text-lg">
                  {service.extendedDesc}
                </p>
                
                <div className="mt-10 p-6 bg-accent/30 rounded-2xl border border-gold/10">
                  <p className="font-serif text-xl text-charcoal">Para quem é indicado?</p>
                  <p className="mt-3 text-charcoal/70">{service.whoIsItFor}</p>
                </div>

                <div className="mt-12">
                  <Link to="/" className="inline-flex items-center gap-2 text-charcoal/60 hover:text-gold transition-colors font-medium">
                    <ArrowLeft className="h-4 w-4" />
                    Voltar para práticas
                  </Link>
                </div>
              </motion.div>

              {/* Benefits List */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-card p-8 md:p-12 rounded-[2rem] shadow-elegant border border-border/40"
              >
                <h3 className="text-2xl font-serif text-charcoal mb-8">Principais Benefícios</h3>
                <ul className="space-y-5">
                  {service.benefits.map((benefit: string, index: number) => (
                    <li key={index} className="flex items-start gap-4">
                      <CheckCircle2 className="h-6 w-6 text-gold shrink-0 mt-0.5" />
                      <span className="text-charcoal/80 text-lg leading-tight">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 bg-accent/40 border-y border-border/40">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl font-serif text-charcoal mb-6">Pronta para começar sua jornada de bem-estar?</h2>
              <p className="text-charcoal/70 mb-10 text-lg">Agende agora sua avaliação ou sessão e sinta a transformação em seu corpo e mente.</p>
              <Button 
                size="lg" 
                className="gradient-gold text-gold-foreground rounded-full px-10 h-16 text-lg shadow-gold hover:scale-[1.05] transition-all"
                onClick={() => window.open("https://wa.me/5522998980808", "_blank")}
              >
                <MessageCircle className="h-5 w-5 mr-2" />
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