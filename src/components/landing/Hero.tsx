import { motion } from "framer-motion";
import { ArrowRight, Play, Pause, Sparkles } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import hero from "@/assets/hero.jpg";

const VIDEO_URL = "https://espa%C3%A7oloungezen.com/wp-content/uploads/2026/04/Video-da-fonte.mp4";
const COVER_URL = "https://leonardopages.com/wp-content/uploads/2026/04/capa.webp";

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target as HTMLVideoElement;
          if (!entry.isIntersecting && !video.paused) {
            video.pause();
            setIsPlaying(false);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (videoRef.current) observer.observe(videoRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  const togglePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    
    if (v.paused) {
      v.muted = false;
      setIsMuted(false);
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

      <div className="container mx-auto py-16">
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
          {/* Video positioned above everything */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="w-full mb-12 relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-border/60 aspect-video w-full max-w-5xl mx-auto group">
              <div className="h-full w-full">
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
              </div>
              <div className={`absolute inset-0 bg-gradient-to-t from-charcoal/50 via-charcoal/10 to-transparent pointer-events-none transition-opacity duration-500 ${isPlaying ? "opacity-0 group-hover:opacity-100" : "opacity-100"}`} />

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
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.4, 0, 0.2, 1] }}
            className="flex flex-col items-center"
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

            <h1 className="mt-8 font-serif text-4xl sm:text-5xl lg:text-6xl leading-[1.1] text-charcoal break-words">
              Cada respiração é uma chance de se reconectar.
            </h1>
            
            <div className="mt-8 space-y-6 max-w-2xl">
              <p className="text-lg sm:text-xl text-charcoal/75 leading-relaxed">
                O Espaço Lounge Zen foi criado com o intuito de proporcionar um ambiente sereno onde você consiga relaxar, energizar e tratar o corpo e a mente em qualquer momento ou fase da vida.
              </p>
              
              <p className="text-lg text-charcoal/75 font-medium leading-relaxed italic border-gold/30">
                Almeja, em especial para a estética da mulher, o trato profissional em drenagem linfática e o tratamento pré e pós-operatório de procedimento estético ou gestacional, com opções de práticas de Yoga e Pilates, sempre em busca do equilíbrio entre saúde-beleza-e bem estar.
              </p>
            </div>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a href="http://wa.me/5541998561828" target="_blank" rel="noopener noreferrer" className="contents">
                <Button
                  size="lg"
                  className="gradient-gold text-gold-foreground rounded-full px-10 h-14 text-base shadow-gold animate-soft-pulse hover:scale-[1.03] transition-transform duration-300"
                >
                  Agendar atendimento
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </a>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full px-10 h-14 text-base border-charcoal/20 bg-cream/60 hover:bg-cream text-charcoal"
              >
                Conhecer Práticas
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;