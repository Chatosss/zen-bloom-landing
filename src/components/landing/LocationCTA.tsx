import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Instagram, ArrowRight, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

const LocationCTA = () => {
  return (
    <section id="contato" className="bg-background">
      {/* Location */}
      <div className="container mx-auto py-24 lg:py-28 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
        >
          <span className="text-xs uppercase tracking-[0.25em] text-gold font-medium">Entre em contato conosco e veja nossa localização</span>
          <h2 className="mt-4 font-serif text-3xl sm:text-4xl lg:text-5xl text-charcoal leading-tight">
            Esta com alguma dúvida? Entre em contato conosco, estamos sempre dispostos a lhe atender da melhor forma possivel.
          </h2>
           <ul className="mt-8 space-y-4">
            <li className="flex items-start gap-3">
              <MapPin className="h-5 w-5 text-gold mt-0.5" />
              <span className="text-charcoal/85">Edifício La Belle Rua 2000, nº 121 – Sala 10 CEP 88330-414</span>
            </li>
            <li className="flex items-start gap-3">
              <Clock className="h-5 w-5 text-gold mt-0.5" />
              <span className="text-charcoal/85">Seg a Sex - 7h às 20h | Sáb - 8h às 13h</span>
            </li>
            <li className="flex items-start gap-3">
              <Phone className="h-5 w-5 text-gold mt-0.5" />
              <span className="text-charcoal/85">(41) 99856-1828 | zenloungebc@gmail.com</span>
            </li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="rounded-3xl overflow-hidden shadow-elegant border border-border/60"
        >
           <iframe
             title="Mapa Espaço Lounge Zen — Balneário Camboriú"
             src="https://www.google.com/maps?q=Edifício+La+Belle+Rua+2000+121+Balneário+Camboriú&output=embed"
             className="w-full h-[420px] grayscale-[0.2]"
             loading="lazy"
             referrerPolicy="no-referrer-when-downgrade"
           />
        </motion.div>
      </div>

      {/* Final CTA */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-charcoal" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(var(--gold)/0.25),transparent_55%)]" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="relative container mx-auto py-24 lg:py-32 text-center"
        >
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-cream leading-[1.1] max-w-3xl mx-auto">
            Seu corpo merece cuidado. <span className="block italic mt-2 text-gold">Sua mente merece equilíbrio</span>
          </h2>
          <p className="mt-6 text-cream/85 max-w-xl mx-auto">
            Permita-se viver uma experiência de bem-estar completa em um ambiente acolhedor, seguro e profissional.
          </p>
          <a href="http://wa.me/5541998561828" target="_blank" rel="noopener noreferrer" className="contents">
            <Button
              size="lg"
              className="mt-10 gradient-gold text-gold-foreground rounded-full px-10 h-14 text-base shadow-gold hover:scale-[1.04] transition-transform animate-soft-pulse"
            >
              Falar com a profissional agora
              <ArrowRight className="h-5 w-5" />
            </Button>
          </a>
           <div className="mt-12">
             <a
               href="https://www.instagram.com/espaco_lounge_zen"
               target="_blank"
               rel="noopener noreferrer"
               className="inline-flex items-center gap-2 text-cream/70 hover:text-gold transition-colors"
             >
               <Instagram className="h-4 w-4" /> @espaco_lounge_zen
             </a>
           </div>
        </motion.div>
      </div>
      {/* Professional Credibility Section */}
      <div className="bg-accent/30 py-16 border-y border-border/40">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 text-center md:text-left"
          >
            <div className="flex items-center gap-4">
              <div className="bg-gold/10 p-4 rounded-full">
                <ShieldCheck className="h-8 w-8 text-gold" />
              </div>
              <div>
                <h3 className="font-serif text-2xl text-charcoal leading-tight">
                  Atendimento com base técnica e experiência comprovada
                </h3>
                <p className="text-charcoal/60 mt-1 max-w-md">
                  Segurança e resultados fundamentados em formações acadêmicas e especializações internacionais.
                </p>
              </div>
            </div>
            <div className="h-px w-24 bg-gold/20 md:h-16 md:w-px hidden sm:block" />
            <div className="grid grid-cols-2 gap-8 md:gap-12">
              <div className="text-center">
                <span className="block text-3xl font-serif text-gold">10+</span>
                <span className="text-xs uppercase tracking-widest text-charcoal/60">Anos de Atuação</span>
              </div>
              <div className="text-center">
                <span className="block text-3xl font-serif text-gold">15+</span>
                <span className="text-xs uppercase tracking-widest text-charcoal/60">Certificações</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LocationCTA;