import React from 'react';
import { Instagram, Facebook, Youtube } from 'lucide-react';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white pt-20 pb-10 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="mb-6">
              <Logo className="h-14 w-auto" />
            </div>
            <p className="text-slate-500 text-sm leading-relaxed mb-6">
              Ajudamos empresas a venderem mais através da automação inteligente de WhatsApp. Potencialize seu atendimento hoje mesmo.
            </p>
            <div className="flex space-x-4">
              <a href="#" aria-label="Instagram" className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-brand-50 hover:text-brand-600 transition-all"><Instagram size={18} aria-hidden="true" /></a>
              <a href="#" aria-label="Facebook" className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-brand-50 hover:text-brand-600 transition-all"><Facebook size={18} aria-hidden="true" /></a>
              <a href="#" aria-label="Youtube" className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-brand-50 hover:text-brand-600 transition-all"><Youtube size={18} aria-hidden="true" /></a>
            </div>
          </div>

          <div>
            <h4 className="text-slate-900 font-bold mb-6">Produto</h4>
            <ul className="space-y-3 text-sm text-slate-500">
              <li><a href="#" className="hover:text-brand-600 transition-colors">Funcionalidades</a></li>
              <li><a href="#" className="hover:text-brand-600 transition-colors">Preços</a></li>
              <li><a href="#" className="hover:text-brand-600 transition-colors">Integrações</a></li>
              <li><a href="#" className="hover:text-brand-600 transition-colors">Changelog</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-slate-900 font-bold mb-6">Recursos</h4>
            <ul className="space-y-3 text-sm text-slate-500">
              <li><a href="#" className="hover:text-brand-600 transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-brand-600 transition-colors">Central de Ajuda</a></li>
              <li><a href="#" className="hover:text-brand-600 transition-colors">Comunidade</a></li>
              <li><a href="#" className="hover:text-brand-600 transition-colors">API Docs</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-slate-900 font-bold mb-6">Legal</h4>
            <ul className="space-y-3 text-sm text-slate-500">
              <li><a href="#" className="hover:text-brand-600 transition-colors">Termos de Uso</a></li>
              <li><a href="#" className="hover:text-brand-600 transition-colors">Privacidade</a></li>
              <li><a href="#" className="hover:text-brand-600 transition-colors">Política de Cookies</a></li>
              <li><a href="#" className="hover:text-brand-600 transition-colors">Contato</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-400">
          <p>&copy; {new Date().getFullYear()} WaSpeed Tecnologia. Todos os direitos reservados.</p>
          <p className="mt-2 md:mt-0">Feito com 💙 para o Brasil.</p>
        </div>
      </div>
    </footer>
  );
};