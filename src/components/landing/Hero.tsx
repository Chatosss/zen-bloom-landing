import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import hero from "@/assets/hero.jpg";

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-24 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <img
          src={hero}
          alt="Estúdio sereno do Espaço Lounge Zen"
          className="h-full w-full object-cover"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-cream/95 via-cream/75 to-cream/30" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
      </div>

      <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.4, 0, 0.2, 1] }}
          className="max-w-xl"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-cream/70 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-gold"
          >
            <Sparkles className="h-3.5 w-3.5" />
            Saúde & Bem-estar Feminino
          </motion.span>

          <h1 className="mt-6 font-serif text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-charcoal">
            Reconecte-se com seu corpo.
            <span className="block italic text-gold mt-2">Recupere seu equilíbrio.</span>
          </h1>

          <p className="mt-6 text-lg text-charcoal/75 leading-relaxed max-w-lg">
            Atendimento fisioterapêutico e práticas de bem-estar com padrão internacional, em um ambiente seguro e exclusivo para mulheres em Rio das Ostras.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="gradient-gold text-gold-foreground rounded-full px-8 h-14 text-base shadow-gold animate-soft-pulse hover:scale-[1.03] transition-transform duration-300"
            >
              Quero Agendar Minha Sessão
              <ArrowRight className="h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full px-8 h-14 text-base border-charcoal/20 bg-cream/60 hover:bg-cream text-charcoal"
            >
              Conhecer Práticas
            </Button>
          </div>
        </motion.div>

        {/* Video with overlapping trust badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.7 }}
          className="hidden lg:block relative"
        >
          <div className="relative rounded-3xl overflow-hidden shadow-elegant border border-border/60 aspect-[4/5] max-w-md ml-auto">
            <video
              src="https://cdn.coverr.co/videos/coverr-a-woman-doing-yoga-on-the-beach-2633/1080p.mp4"
              poster={hero}
              autoPlay
              muted
              loop
              playsInline
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 via-transparent to-transparent" />
          </div>

          {/* Floating trust badge — overlaps bottom-right of the video */}
          <div className="absolute -bottom-6 -right-4 animate-float">
            <div className="rounded-2xl glass border border-border/60 shadow-elegant p-6 max-w-xs">
              <div className="flex items-center gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-full gradient-gold text-gold-foreground">
                  <Sparkles className="h-6 w-6" />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-widest text-charcoal/60">Espaço</p>
                  <p className="font-serif text-lg text-charcoal">Exclusivo para Mulheres</p>
                </div>
              </div>
              <p className="mt-4 text-sm text-charcoal/70">
                Privacidade, conforto e acolhimento em cada detalhe.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;