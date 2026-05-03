import { motion } from "framer-motion";
import { Calendar, ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";
import { Link, useLocation } from "react-router-dom";

const links = [
  { label: "Início", href: "#hero" },
  { label: "Diferenciais", href: "#autoridade" },
  { label: "Práticas", href: "#servicos" },
  { label: "Sobre", href: "#sobre" },
  { label: "Contato", href: "#contato" },
];

const Navbar = ({ isDetail = false }: { isDetail?: boolean }) => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      className="fixed top-0 left-0 right-0 z-50 glass border-b border-border/40"
    >
      <div className="container mx-auto flex items-center justify-between py-3">
        <div className="flex items-center gap-4">
          {(!isHomePage || isDetail) && (
            <Link to="/" className="p-2 hover:bg-gold/10 rounded-full transition-colors group">
              <ChevronLeft className="h-5 w-5 text-gold group-hover:-translate-x-1 transition-transform" />
            </Link>
          )}
          <Link to="/" className="flex items-center gap-3" aria-label="Espaço Lounge Zen — Início">
            <img src={logo} alt="Espaço Lounge Zen" className="h-12 w-auto md:h-14" />
          </Link>
        </div>
        <nav className="hidden lg:flex items-center gap-8">
          {isHomePage && !isDetail ? (
            links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-medium text-charcoal/80 hover:text-gold transition-colors duration-300 relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-gold after:transition-all hover:after:w-full"
              >
                {l.label}
              </a>
            ))
          ) : (
            <Link
              to="/"
              className="text-sm font-medium text-charcoal/80 hover:text-gold transition-colors duration-300 relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-gold after:transition-all hover:after:w-full"
            >
              Voltar para Início
            </Link>
          )}
        </nav>
        <a href="http://wa.me/5541998561828" target="_blank" rel="noopener noreferrer" className="contents">
          <Button variant="default" size="sm" className="gradient-gold text-gold-foreground hover:opacity-90 hover:scale-[1.03] transition-all duration-300 shadow-gold rounded-full px-5">
            <Calendar className="h-4 w-4" />
            <span className="hidden sm:inline">Agendar Sessão</span>
            <span className="sm:hidden">Agendar</span>
          </Button>
        </a>
      </div>
    </motion.header>
  );
};

export default Navbar;