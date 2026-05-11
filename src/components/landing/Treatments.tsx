import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const treatments = [
  { 
    slug: "drenagem-linfatica", 
    title: "Drenagem Linfática Pré e Pós-operatório", 
    desc: "Técnica terapêutica que auxilia na redução de edemas, melhora da circulação e recuperação tecidual. Indicado para: Pacientes em pré e pós-operatório, pessoas com retenção de líquidos e inchaços, redução de edemas e relaxamento.", 
    img: "https://leonardopages.com/wp-content/uploads/2026/05/Linfatica-01.jpg" 
  },
  { 
    slug: "kinesio-taping", 
    title: "Kinesio Taping", 
    desc: "Bandagem terapêutica que auxilia na estabilização muscular, redução de dores e melhora da circulação.", 
    img: "https://leonardopages.com/wp-content/uploads/2026/05/Kinesio-02.jpeg" 
  },
  { 
    slug: "estetica-funcional", 
    title: "Estética Funcional", 
    desc: "Estética funcional é a abordagem terapêutica que une recursos estéticos com objetivos clínicos. Isso inclui tratamentos que, além de melhorar a aparência, atuam sobre dores musculares, retenção de líquidos, perda de tônus e desequilíbrios estruturais.", 
    img: "https://leonardopages.com/wp-content/uploads/2026/05/hee.webp" 
  },
];

const Treatments = () => {
  return (
    <section id="tratamentos" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto space-y-4"
        >
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-charcoal leading-tight text-center">
            Tratamentos
          </h2>
          <div className="flex justify-center">
            <div className="h-1 w-24 gradient-gold rounded-full" />
          </div>
        </motion.div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {treatments.map((s, i) => (
            <ServiceCard key={s.slug} s={s} i={i} />
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
      <div className="p-6 flex flex-col flex-1">
        <h3 className="font-serif text-xl text-charcoal">{s.title}</h3>
        <p className="mt-2 mb-6 text-sm text-charcoal/70 leading-relaxed">{s.desc}</p>
        
        <div className="mt-auto flex">
          <Link 
            to={`/${s.slug}`}
            className="inline-flex items-center gap-2 text-sm font-medium text-gold hover:gap-3 transition-all duration-300 group/btn"
          >
            Entender tratamento
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover/btn:rotate-12" />
          </Link>
        </div>
      </div>
  </motion.article>
);

export default Treatments;
