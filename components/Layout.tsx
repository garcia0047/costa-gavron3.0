import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowUp } from "lucide-react";
import Button from "./Button";
import { AnimatePresence, motion } from "framer-motion";

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Portfólio", path: "/portfolio" },
    { name: "Serviços", path: "/services" },
    { name: "Contato", path: "/contact" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const logoUrl = "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6926f78b98744f7932741b91/fc90954a7_Designsemnome1.png";

  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      <style>{`
        :root {
          --color-black: #0A0A0A;
          --color-white: #FAFAFA;
          --color-gold: #C9A962;
          --color-gold-light: #D4B978;
          --color-gray: #6B7280;
          --color-gray-light: #E5E7EB;
        }
        
        * {
          font-family: 'Inter', system-ui, sans-serif;
        }
        
        .gold-gradient {
          background: linear-gradient(135deg, #C9A962 0%, #D4B978 50%, #C9A962 100%);
        }
        
        .text-gold {
          color: #C9A962;
        }
        
        .bg-gold {
          background-color: #C9A962;
        }
        
        .border-gold {
          border-color: #C9A962;
        }
        
        .hover-gold:hover {
          color: #C9A962;
        }
        
        ::selection {
          background-color: #C9A962;
          color: #0A0A0A;
        }
      `}</style>

      {/* Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-[#0A0A0A]/95 backdrop-blur-md py-4 shadow-2xl"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <Link to="/" className="flex items-center focus:outline-none overflow-visible">
            {/* 
              AJUSTE DE CABEÇALHO:
              Reduzimos a altura física (h-16/h-20) para o header ficar fino.
              Usamos scale-[3.5] para a logo "parecer" gigante como solicitado,
              sem empurrar o layout.
            */}
            <img 
              src={logoUrl}
              alt="Costa & Gavron Creative"
              className={`h-16 md:h-20 w-auto object-contain transition-all duration-300 origin-left scale-[3.5] ml-4 md:ml-6 ${isScrolled ? "brightness-0 invert" : ""}`}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors duration-300 hover:text-[#C9A962] ${
                  location.pathname === link.path
                    ? "text-[#C9A962]"
                    : isScrolled
                    ? "text-white/80"
                    : "text-[#0A0A0A]/80"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <a href="https://wa.me/5541998951738" target="_blank" rel="noopener noreferrer">
              <Button className="gold-gradient !text-[#0A0A0A] font-semibold px-6 hover:opacity-90 transition-opacity rounded-full border-none">
                Solicitar Orçamento
              </Button>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`md:hidden p-2 ${isScrolled ? "text-white" : "text-[#0A0A0A]"}`}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "100vh" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden fixed inset-0 bg-[#0A0A0A] border-t border-white/10 z-40 pt-24"
            >
              <nav className="flex flex-col p-6 gap-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`text-2xl font-medium transition-colors ${
                      location.pathname === link.path ? "text-[#C9A962]" : "text-white/80 hover:text-[#C9A962]"
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
                <a href="https://wa.me/5541998951738" target="_blank" rel="noopener noreferrer" onClick={() => setMobileMenuOpen(false)}>
                  <Button className="w-full gold-gradient !text-[#0A0A0A] font-semibold mt-4 rounded-full border-none">
                    Solicitar Orçamento Gratuito
                  </Button>
                </a>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Main Content */}
      <main className="pt-24">{children}</main>

      {/* Footer */}
      <footer className="bg-[#0A0A0A] text-white pt-20 pb-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 pb-12 border-b border-white/10">
            <div className="md:col-span-2">
              <div className="mb-10 pl-6">
                 {/* Logo Footer - Mantendo lógica de Scale */}
                <img 
                  src={logoUrl}
                  alt="Costa & Gavron Creative"
                  className="h-20 md:h-24 w-auto object-contain brightness-0 invert origin-left scale-[3.5]"
                />
              </div>
              <p className="text-white/60 max-w-md leading-relaxed mt-4">
                Transformamos marcas e construímos presenças digitais que geram vendas reais. 
                Sua visão, nossa expertise criativa.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-6 text-[#C9A962]">Navegação</h4>
              <nav className="flex flex-col gap-3">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="text-white/60 hover:text-[#C9A962] transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
            </div>

            <div>
              <h4 className="font-semibold mb-6 text-[#C9A962]">Serviços</h4>
              <nav className="flex flex-col gap-3">
                <Link to="/services" className="text-white/60 hover:text-[#C9A962] transition-colors">Branding & Identidade</Link>
                <Link to="/services" className="text-white/60 hover:text-[#C9A962] transition-colors">Web Design</Link>
                <Link to="/services" className="text-white/60 hover:text-[#C9A962] transition-colors">Mídias Sociais</Link>
                <Link to="/services" className="text-white/60 hover:text-[#C9A962] transition-colors">Marketing Digital</Link>
              </nav>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center pt-8 gap-4">
            <p className="text-white/40 text-sm">
              © 2024 Costa & Gavron Creative. Todos os direitos reservados.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-white/40 hover:text-[#C9A962] transition-colors text-sm">
                Instagram
              </a>
              <a href="#" className="text-white/40 hover:text-[#C9A962] transition-colors text-sm">
                LinkedIn
              </a>
              <a href="#" className="text-white/40 hover:text-[#C9A962] transition-colors text-sm">
                Behance
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 w-12 h-12 gold-gradient rounded-full flex items-center justify-center shadow-lg hover:opacity-90 transition-opacity z-40"
          >
            <ArrowUp className="text-[#0A0A0A]" size={20} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}