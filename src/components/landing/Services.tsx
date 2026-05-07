import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const practices = [
  { slug: "yoga-gestacional", title: "Yoga Gestacional", desc: "Prática de yoga adaptada às transformações físicas e hormonais da gestação, com movimentos suaves, técnicas respiratórias e exercícios que promovem conforto, equilíbrio e preparo para o parto.", img: "https://leonardopages.com/wp-content/uploads/2026/05/Gestacional-02.jpg" },
  { slug: "hatha-yoga", title: "Hatha Yoga", desc: "Prática fundamentada nas raízes do Yoga tradicional, que busca promover equilíbrio entre corpo e mente através da integração de posturas (ásanas), técnicas respiratórias (pranayamas) e momentos de relaxamento e meditação.", img: "https://leonardopages.com/wp-content/uploads/2026/05/Hatha-02.jpg" },
  { slug: "pilates", title: "Pilates", desc: "É um Condicionamento físico e mental focado em fortalecimento, postura, flexibilidade e reabilitação, respeitando os limites e as necessidades individuais de cada pessoa.", img: "https://leonardopages.com/wp-content/uploads/2026/05/Pilates-02.jpg" },
  { slug: "vin-yoga", title: "Yin Yoga", desc: "Prática derivada do Hatha Yoga, com abordagem mais contemplativa e profunda. Os movimentos são realizados com posturas suaves e permanências mais longas, estimulando o relaxamento muscular e a liberação de tensões acumuladas.", img: "https://leonardopages.com/wp-content/uploads/2026/05/WhatsApp-Image-2026-04-21-at-11.29.14.jpeg" },
  { slug: "yoga-terapeutico", title: "Yoga Terapêutico", desc: "Prática adaptada do Yoga clássico com base científica e foco terapêutico, desenvolvida para atender as necessidades do corpo moderno.", img: "https://leonardopages.com/wp-content/uploads/2026/05/WhatsApp-Image-2026-04-20-at-23.33.53.jpeg" },
  { slug: "kinesio-taping", title: "Kinesio Taping", desc: "Bandagem terapêutica que auxilia na estabilização muscular, redução de dores e melhora da circulação.", img: "https://leonardopages.com/wp-content/uploads/2026/05/Kinesio-02.jpeg" },
  { slug: "drenagem-linfatica", title: "Drenagem Linfática Pré e Pós-operatório", desc: "Técnica terapêutica que auxilia na redução de edemas, melhora da circulação e recuperação tecidual. Indicado para: Pacientes em pré e pós-operatório, pessoas com retenção de líquidos e inchaços, redução de edemas e relaxamento.", img: "https://leonardopages.com/wp-content/uploads/2026/05/Linfatica-01.jpg" },
];

const Services = () => {
  return (
    <section id="servicos" className="py-24 lg:py-32 bg-accent/40">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-charcoal leading-tight text-center">
            Nossas Práticas de Bem-Estar
          </h2>
        </motion.div>


        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {practices.map((s, i) => (
            <ServiceCard key={s.title} s={s} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ServiceCard = ({ s, i }: { s: any; i: number }) => (
  <motion.article
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.6, delay: (i % 3) * 0.1, ease: [0.4, 0, 0.2, 1] }}
    className="group overflow-hidden rounded-2xl bg-card border border-border/60 shadow-soft hover:shadow-elegant transition-all duration-500"
  >
    <div className="relative aspect-[4/3] overflow-hidden">
      <img
        src={s.img}
        alt={s.title}
        loading="lazy"
        width={800}
        height={600}
        className="h-full w-full object-cover transition-transform duration-[1.2s] group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 via-transparent to-transparent opacity-60 group-hover:opacity-90 transition-opacity" />
    </div>
    <div className="p-6 flex flex-col h-full">
      <h3 className="font-serif text-xl text-charcoal">{s.title}</h3>
      <p className="mt-2 text-sm text-charcoal/70 leading-relaxed">{s.desc}</p>
      
      {s.indications && (
        <ul className="mt-4 space-y-1.5 border-t border-gold/10 pt-4">
          {s.indications.map((item: string, idx: number) => (
            <li key={idx} className="flex items-start gap-2 text-xs text-charcoal/80">
              <span className="text-gold mt-0.5">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}
      <Link 
        to={`/${s.slug}`}
        className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-gold hover:gap-3 transition-all duration-300 group/btn"
      >
        Entender tratamento
        <ArrowUpRight className="h-4 w-4 transition-transform group-hover/btn:rotate-12" />
      </Link>
    </div>
  </motion.article>
);

export default Services;
