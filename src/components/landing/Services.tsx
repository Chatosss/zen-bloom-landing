import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import gestacional from "@/assets/yoga-gestacional.jpg";
import hatha from "@/assets/hatha-yoga.jpg";
import pilates from "@/assets/pilates.jpg";
import yin from "@/assets/yin-yoga.jpg";
import terapeutico from "@/assets/yoga-terapeutico.jpg";
import kinesio from "@/assets/kinesio.jpg";
import drenagem from "@/assets/drenagem.jpg";

const services = [
  { title: "Yoga Gestacional", desc: "Movimento consciente e respiração para acolher a maternidade com leveza.", img: gestacional },
  { title: "Hatha Yoga", desc: "Posturas clássicas que constroem força, equilíbrio e presença.", img: hatha },
  { title: "Pilates", desc: "Fortalecimento profundo, postura e mobilidade com precisão técnica.", img: pilates },
  { title: "Yin Yoga", desc: "Práticas longas e meditativas para soltar tensões físicas e emocionais.", img: yin },
  { title: "Yoga Terapêutico", desc: "Sequências individualizadas para alívio de dores e reabilitação.", img: terapeutico },
  { title: "Kinesio Taping", desc: "Aplicação de bandagens funcionais para suporte muscular e analgesia.", img: kinesio },
  { title: "Drenagem Linfática", desc: "Atendimento pré e pós-operatório com toque preciso e acolhedor.", img: drenagem },
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
          <span className="text-xs uppercase tracking-[0.25em] text-gold font-medium">Práticas</span>
          <h2 className="mt-4 font-serif text-3xl sm:text-4xl lg:text-5xl text-charcoal leading-tight">
            Escolha a prática ideal
            <span className="block italic text-sage-deep">para o seu momento</span>
          </h2>
          <p className="mt-5 text-charcoal/70 max-w-xl mx-auto">
            Cada modalidade é conduzida com olhar técnico, escuta atenta e o cuidado de quem entende o corpo feminino.
          </p>
        </motion.div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((s, i) => (
            <motion.article
              key={s.title}
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
              <div className="p-6">
                <h3 className="font-serif text-xl text-charcoal">{s.title}</h3>
                <p className="mt-2 text-sm text-charcoal/70 leading-relaxed">{s.desc}</p>
                <button className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-gold hover:gap-3 transition-all duration-300 group/btn">
                  Saber mais
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover/btn:rotate-12" />
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;