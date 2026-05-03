import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Instagram, ArrowRight } from "lucide-react";
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
          <span className="text-xs uppercase tracking-[0.25em] text-gold font-medium">Localização</span>
          <h2 className="mt-4 font-serif text-3xl sm:text-4xl lg:text-5xl text-charcoal leading-tight">
            Um refúgio em <span className="italic text-sage-deep">Rio das Ostras</span>
          </h2>
          <p className="mt-5 text-charcoal/70 leading-relaxed max-w-md">
            Atendimento individual e em pequenos grupos. Agende sua visita e conheça nosso espaço pensado em cada detalhe.
          </p>
           <ul className="mt-8 space-y-4">
             <li className="flex items-start gap-3">
               <MapPin className="h-5 w-5 text-gold mt-0.5" />
               <span className="text-charcoal/85">Edifício La Belle Rua 2000, nº 121 – Sala 10 CEP 88330-414</span>
             </li>
             <li className="flex items-start gap-3">
              <Clock className="h-5 w-5 text-gold mt-0.5" />
              <span className="text-charcoal/85">Seg a Sex · 7h às 20h &nbsp;·&nbsp; Sáb · 8h às 13h</span>
            </li>
            <li className="flex items-start gap-3">
              <Phone className="h-5 w-5 text-gold mt-0.5" />
              <span className="text-charcoal/85">Atendimento via WhatsApp</span>
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
        <div className="absolute inset-0 gradient-sage" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(var(--gold)/0.25),transparent_55%)]" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="relative container mx-auto py-24 lg:py-32 text-center"
        >
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-sage-foreground leading-[1.1] max-w-3xl mx-auto">
            Seu corpo merece cuidado.
            <span className="block italic mt-2">Sua mente merece paz.</span>
          </h2>
          <p className="mt-6 text-sage-foreground/85 max-w-xl mx-auto">
            Comece agora uma jornada de bem-estar com acompanhamento personalizado.
          </p>
          <a href="http://wa.me/5541998561828" target="_blank" rel="noopener noreferrer" className="contents">
            <Button
              size="lg"
              className="mt-10 bg-cream text-charcoal hover:bg-cream/90 rounded-full px-10 h-14 text-base shadow-elegant hover:scale-[1.04] transition-transform animate-soft-pulse"
            >
              Iniciar meu acompanhamento
              <ArrowRight className="h-5 w-5" />
            </Button>
          </a>
           <div className="mt-12">
             <a
               href="https://www.instagram.com/espaco_lounge_zen"
               target="_blank"
               rel="noopener noreferrer"
               className="inline-flex items-center gap-2 text-sage-foreground/90 hover:text-cream transition-colors"
             >
               <Instagram className="h-4 w-4" /> @espaco_lounge_zen
             </a>
           </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LocationCTA;