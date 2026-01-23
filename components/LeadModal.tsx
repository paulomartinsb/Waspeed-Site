import React, { useState } from 'react';
import { X, ArrowRight, Lock, CheckCircle } from 'lucide-react';
import { Button } from './Button';

interface LeadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LeadModal: React.FC<LeadModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Aqui você integraria com seu CRM (RD Station, ActiveCampaign, etc)
    // console.log("Lead capturado:", formData);

    // Simula um delay de processamento para UX
    setTimeout(() => {
      window.location.href = "https://chromewebstore.google.com/detail/waspeed-superpoderes-para/balkfdkhbcjjmhndnblgmlmcabnapogp?hl=pt-BR";
      setIsLoading(false);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop com Blur */}
      <div 
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Content */}
      <div 
        className="relative bg-white rounded-3xl shadow-2xl w-full max-w-lg overflow-hidden animate-in fade-in zoom-in-95 duration-300"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        {/* Header Decorativo */}
        <div className="bg-gradient-to-r from-brand-600 to-brand-500 px-8 py-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 -mr-8 -mt-8 w-24 h-24 bg-white opacity-10 rounded-full blur-2xl"></div>
          <div className="absolute bottom-0 left-0 -ml-8 -mb-8 w-24 h-24 bg-black opacity-10 rounded-full blur-2xl"></div>
          
          <div className="flex justify-between items-start relative z-10">
            <div>
              <h3 id="modal-title" className="text-2xl font-bold text-white mb-1">
                Começar Grátis
              </h3>
              <p className="text-brand-100 text-sm">Junte-se a 40.000+ empresas ativas</p>
            </div>
            <button 
              onClick={onClose}
              className="text-white/70 hover:text-white bg-white/10 hover:bg-white/20 transition-all p-2 rounded-full backdrop-blur-sm"
              aria-label="Fechar"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Body */}
        <div className="p-8 bg-white">
          <div className="mb-6 flex items-start gap-4 p-4 bg-blue-50 rounded-xl border border-blue-100">
             <div className="bg-blue-100 p-2 rounded-full shrink-0">
                <CheckCircle size={20} className="text-blue-600" />
             </div>
             <div>
                <h4 className="font-semibold text-blue-900 text-sm">Libere seu acesso agora</h4>
                <p className="text-blue-700 text-xs mt-1">Preencha os dados abaixo para ser redirecionado à Chrome Web Store e instalar a extensão.</p>
             </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-1">
              <label htmlFor="name" className="text-sm font-semibold text-slate-700 ml-1">Nome Completo</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-3.5 rounded-xl border border-slate-200 focus:border-brand-500 focus:ring-4 focus:ring-brand-500/10 outline-none transition-all text-slate-900 placeholder:text-slate-400"
                placeholder="Seu nome ou da sua empresa"
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                <label htmlFor="phone" className="text-sm font-semibold text-slate-700 ml-1">WhatsApp</label>
                <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    className="w-full px-4 py-3.5 rounded-xl border border-slate-200 focus:border-brand-500 focus:ring-4 focus:ring-brand-500/10 outline-none transition-all text-slate-900 placeholder:text-slate-400"
                    placeholder="(DDD) 99999-9999"
                    value={formData.phone}
                    onChange={handleChange}
                />
                </div>

                <div className="space-y-1">
                <label htmlFor="email" className="text-sm font-semibold text-slate-700 ml-1">E-mail</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3.5 rounded-xl border border-slate-200 focus:border-brand-500 focus:ring-4 focus:ring-brand-500/10 outline-none transition-all text-slate-900 placeholder:text-slate-400"
                    placeholder="seu@email.com"
                    value={formData.email}
                    onChange={handleChange}
                />
                </div>
            </div>

            <Button 
              type="submit" 
              fullWidth 
              className="mt-4 py-4 text-base shadow-xl shadow-brand-500/20 hover:shadow-brand-500/30 flex items-center justify-center gap-2 group"
              disabled={isLoading}
            >
              {isLoading ? 'Redirecionando...' : 'Ir para Instalação'}
              {!isLoading && <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />}
            </Button>
          </form>

          <div className="mt-6 flex items-center justify-center gap-2 text-xs text-slate-400">
            <Lock size={12} />
            <span>Seus dados estão seguros e não enviaremos spam.</span>
          </div>
        </div>
      </div>
    </div>
  );
};