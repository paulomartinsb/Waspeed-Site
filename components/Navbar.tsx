import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './Button';
import { Logo } from './Logo';

interface NavbarProps {
  onOpenModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    // Performance: Passive listener prevents scroll blocking
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Funcionalidades', href: '#features' },
    { name: 'Depoimentos', href: '#testimonials' },
    { name: 'Planos', href: '#pricing' },
    { name: 'FAQ', href: '#faq' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    
    if (element) {
      setIsMobileMenuOpen(false);
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
      // Opcional: Atualizar URL sem pular a página
      window.history.pushState(null, '', href);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center py-4 px-4">
      <nav 
        className={`w-full max-w-5xl transition-all duration-300 rounded-full px-6 py-3 flex items-center justify-between ${
          isScrolled || isMobileMenuOpen
            ? 'glass-nav shadow-lg border border-white/50' 
            : 'bg-transparent'
        }`}
        role="navigation"
        aria-label="Main Navigation"
      >
        <div className="flex items-center">
          <a 
            href="#" 
            aria-label="WaSpeed Página Inicial"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <Logo className="h-12 w-auto" />
          </a>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={(e) => handleLinkClick(e, link.href)}
              className="text-sm font-medium text-slate-600 hover:text-brand-600 transition-colors cursor-pointer"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center space-x-3">
          <Button 
            variant="primary" 
            className="py-2.5 px-5 text-sm" 
            aria-label="Começar Grátis"
            onClick={onOpenModal}
          >
            Começar Grátis
          </Button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-slate-600 hover:text-brand-600 p-2"
            aria-label={isMobileMenuOpen ? "Fechar Menu" : "Abrir Menu"}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="absolute top-20 left-4 right-4 bg-white rounded-3xl shadow-xl border border-slate-100 p-4 md:hidden flex flex-col space-y-2 animate-in fade-in slide-in-from-top-4">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="block px-4 py-3 rounded-xl text-slate-600 hover:bg-slate-50 hover:text-brand-600 font-medium cursor-pointer"
            >
              {link.name}
            </a>
          ))}
          <div className="h-px bg-slate-100 my-2"></div>
          <Button fullWidth onClick={() => { setIsMobileMenuOpen(false); onOpenModal(); }}>
            Começar Agora
          </Button>
        </div>
      )}
    </header>
  );
};