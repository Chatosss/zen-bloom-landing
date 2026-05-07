import { motion } from "framer-motion";
import { ArrowRight, Play, Pause, Sparkles } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import hero from "@/assets/hero.jpg";

const VIDEO_URL = "https://espa%C3%A7oloungezen.com/wp-content/uploads/2026/04/Video-da-fonte.mp4";
const COVER_URL = "https://leonardopages.com/wp-content/uploads/2026/04/capa.webp";

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const [hasStarted, setHasStarted] = useState(false);

  const startVideo = () => {
    const v = videoRef.current;
    if (v && !hasStarted) {
      v.muted = false;
      v.play().catch(error => console.log("Playback failed:", error));
      setIsPlaying(true);
      setHasStarted(true);
    }
  };

  useEffect(() => {
    window.addEventListener('click', startVideo, { once: true });
    window.addEventListener('touchstart', startVideo, { once: true });
    return () => {
      window.removeEventListener('click', startVideo);
      window.removeEventListener('touchstart', startVideo);
    };
  }, [hasStarted]);

  const togglePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.play();
      setIsPlaying(true);
    } else {
      v.pause();
      setIsPlaying(false);
    }
  };

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

      <div className="container mx-auto flex flex-col lg:grid lg:grid-cols-2 gap-12 items-center py-16">
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
            Atendimento personalizado na saúde da mulher!
          </motion.span>

          <h1 className="mt-6 font-serif text-3xl sm:text-5xl lg:text-6xl leading-[1.1] text-charcoal break-words">
            Cada respiração é uma chance de se reconectar.
          </h1>
          
          <div className="mt-6 space-y-6">
            <p className="text-base sm:text-lg text-charcoal/75 leading-relaxed">
              O Espaço Lounge Zen foi criado com o intuito de proporcionar um ambiente sereno onde você consiga relaxar, energizar e tratar o corpo e a mente em qualquer momento ou fase da vida.
            </p>
            
            <p className="text-base sm:text-lg text-charcoal/75 font-medium leading-relaxed italic border-l-2 border-gold/30 pl-4">
              Almeja, em especial para a estética da mulher, o trato profissional em drenagem linfática e o tratamento pré e pós-operatório de procedimento estético ou gestacional, com opções de práticas de Yoga e Pilates, sempre em busca do equilíbrio entre saúde-beleza-e bem estar.
            </p>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a href="http://wa.me/5541998561828" target="_blank" rel="noopener noreferrer" className="contents">
              <Button
                size="lg"
                className="gradient-gold text-gold-foreground rounded-full px-8 h-14 text-base shadow-gold animate-soft-pulse hover:scale-[1.03] transition-transform duration-300"
              >
                Agendar atendimento
                <ArrowRight className="h-5 w-5" />
              </Button>
            </a>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full px-8 h-14 text-base border-charcoal/20 bg-cream/60 hover:bg-cream text-charcoal"
            >
              Conhecer Práticas
            </Button>
          </div>
        </motion.div>

        {/* Video with overlapping trust badge - Hidden on Mobile */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.7 }}
          className="relative mt-8 lg:mt-0 hidden lg:block"
        >
          <div className="relative rounded-3xl overflow-hidden shadow-elegant border border-border/60 aspect-video w-full ml-auto group">
            <video
              ref={videoRef}
              src={VIDEO_URL}
              poster={COVER_URL}
              loop
              playsInline
              preload="auto"
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              className="h-full w-full object-cover"
            />
            <div className={`absolute inset-0 bg-gradient-to-t from-charcoal/50 via-charcoal/10 to-transparent pointer-events-none transition-opacity duration-500 ${isPlaying ? "opacity-0 group-hover:opacity-100" : "opacity-100"}`} />

            {/* Play / Pause button */}
            <button
              type="button"
              onClick={togglePlay}
              aria-label={isPlaying ? "Pausar vídeo" : "Reproduzir vídeo"}
              className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${isPlaying ? "opacity-0 group-hover:opacity-100" : "opacity-100"}`}
            >
              <span className="flex h-20 w-20 items-center justify-center rounded-full gradient-gold text-gold-foreground shadow-gold animate-soft-pulse hover:scale-110 transition-transform duration-300">
                {isPlaying ? (
                  <Pause className="h-8 w-8" fill="currentColor" />
                ) : (
                  <Play className="h-8 w-8 ml-1" fill="currentColor" />
                )}
              </span>
            </button>
          </div>

          {/* Floating trust badge — positioned below the video to avoid overlap */}
          <div className="mt-6 flex justify-end">
            <div className="rounded-2xl glass border border-border/60 shadow-elegant p-6 max-w-xs animate-float">
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