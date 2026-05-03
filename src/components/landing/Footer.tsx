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
                <li><a href="#sobre" className="hover:text-gold transition-colors">Sobre Kíssila</a></li>
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
            {[Instagram, Facebook, MessageCircle].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Rede social"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-cream/20 hover:border-gold hover:text-gold transition-all hover:-translate-y-1"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
          <p className="mt-6 text-xs text-cream/50">CREFITO 2 · Rio das Ostras, RJ</p>
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