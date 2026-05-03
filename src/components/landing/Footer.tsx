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
          <img src={logo} alt="Espaço Lounge Zen" className="h-16 w-auto brightness-0 invert opacity-90" />
          <p className="mt-4 text-sm leading-relaxed text-cream/60 max-w-xs">
            Saúde, equilíbrio e bem-estar para mulheres em Rio das Ostras.
          </p>
        </div>
        <div>
          <p className="font-serif text-lg text-cream">Navegação</p>
          <ul className="mt-4 space-y-2 text-sm">
            {isHomePage ? (
              <>
                 <li><a href="#hero" className="hover:text-gold transition-colors">Início</a></li>
                 <li><a href="#servicos" className="hover:text-gold transition-colors">Práticas</a></li>
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
               <MessageCircle className="h-4 w-4" />
             </a>
           </div>
           <div className="mt-6 space-y-2">
             <p className="text-xs text-cream/50 flex items-center gap-2">
               <Phone className="h-3 w-3" /> (41) 99856-1828
             </p>
             <p className="text-xs text-cream/50 flex items-center gap-2 text-lowercase">
               <MessageCircle className="h-3 w-3" /> zenloungebc@gmail.com
             </p>
             <p className="text-xs text-cream/50">CREFITO 2 · Balneário Camboriú, SC</p>
           </div>
        </div>
      </div>
      <div className="border-t border-cream/10">
        <div className="container mx-auto py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-cream/50">
          <p>© {new Date().getFullYear()} Espaço Lounge Zen. Todos os direitos reservados.</p>
          <p>Feito com cuidado · Saúde e bem-estar feminino</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;