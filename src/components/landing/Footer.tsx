import { Instagram, Facebook, MessageCircle, Phone } from "lucide-react";
import logo from "@/assets/logo.png";
import { Link, useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <footer className="bg-charcoal text-cream/80">
      <div className="container mx-auto py-14 grid md:grid-cols-3 gap-10">
        <div>
          <img src={logo} alt="Espaço Lounge Zen" className="h-32 w-auto opacity-100" />
           <p className="mt-4 text-sm leading-relaxed text-cream/60 max-w-xs">
             Saúde, equilíbrio e bem-estar para mulheres em Balneário Camboriú.
           </p>
        </div>
        <div>
          <p className="font-serif text-lg text-cream">Navegação</p>
          <ul className="mt-4 space-y-2 text-sm">
            {isHomePage ? (
              <>
                 <li><a href="#hero" className="hover:text-gold transition-colors">Início</a></li>
                 <li><a href="#servicos" className="hover:text-gold transition-colors">Saúde e bem estar</a></li>
                 <li><a href="#sobre" className="hover:text-gold transition-colors">Sobre Simone</a></li>
                 <li><a href="#contato" className="hover:text-gold transition-colors">Contato</a></li>
              </>
            ) : (
              <li><Link to="/" className="hover:text-gold transition-colors">Voltar para Início</Link></li>
            )}
          </ul>
        </div>
        <div>
          <p className="font-serif text-lg text-cream">Conecte-se</p>
           <div className="mt-4 flex gap-3">
             <a
               href="https://www.instagram.com/espaco_lounge_zen"
               target="_blank"
               rel="noopener noreferrer"
               aria-label="Instagram"
               className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-cream/20 hover:border-gold hover:text-gold transition-all hover:-translate-y-1"
             >
               <Instagram className="h-4 w-4" />
             </a>
              <a
                href="http://wa.me/5541998561828"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-cream/20 hover:border-gold hover:text-gold transition-all hover:-translate-y-1"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
              </a>
           </div>
           <div className="mt-6 space-y-2">
             <p className="text-xs text-cream/50 flex items-center gap-2">
               <Phone className="h-3 w-3" /> (41) 99856-1828
             </p>
             <p className="text-xs text-cream/50 flex items-center gap-2 text-lowercase">
               <MessageCircle className="h-3 w-3" /> zenloungebc@gmail.com
             </p>
              <p className="text-xs text-cream/50">Confef Cref · Cref/SC-043807 · Balneário Camboriú, SC</p>
           </div>
        </div>
      </div>
      <div className="border-t border-cream/10">
        <div className="container mx-auto py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-cream/50">
          <p>Espaço Lounge Zen – Todos os direitos reservados | Copyright 2026 ©</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;