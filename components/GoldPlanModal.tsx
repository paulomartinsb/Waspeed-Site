import React, { useState, useEffect } from 'react';
import { X, CheckCircle, ArrowRight, Minus, Plus, CreditCard, ShieldCheck } from 'lucide-react';
import { Button } from './Button';

interface GoldPlanModalProps {
  isOpen: boolean;
  onClose: () => void;
}

// Dados de preços baseados no script fornecido
const PRICING_DATA: Record<number, { regular: string; parcela: string; vista: string }> = {
  1:  { regular: "468", parcela: "78",  vista: "397" },
  2:  { regular: "876", parcela: "146", vista: "744" },
  3:  { regular: "1.284", parcela: "214", vista: "1.091" },
  4:  { regular: "1.692", parcela: "282", vista: "1.438" },
  5:  { regular: "2.106", parcela: "351", vista: "1.785" },
  6:  { regular: "2.514", parcela: "419", vista: "2.132" },
  7:  { regular: "2.922", parcela: "487", vista: "2.479" },
  8:  { regular: "3.330", parcela: "555", vista: "2.826" },
  9:  { regular: "3.744", parcela: "624", vista: "3.173" },
  10: { regular: "4.152", parcela: "692", vista: "3.520" }
};

// Links de checkout baseados na quantidade
const CHECKOUT_LINKS: Record<number, string> = {
  1:  "https://go.waspeed.com.br/subscribe/1-waspeed-oferta-licenca-anual-ouro-site?",
  2:  "https://go.waspeed.com.br/subscribe/2-waspeed-oferta-licenca-anual-ouro-site?",
  3:  "https://go.waspeed.com.br/subscribe/3-waspeed-oferta-licenca-anual-ouro-site?",
  4:  "https://go.waspeed.com.br/subscribe/4-waspeed-oferta-licenca-anual-ouro-site?",
  5:  "https://go.waspeed.com.br/subscribe/5-waspeed-oferta-licenca-anual-ouro-site?",
  6:  "https://go.waspeed.com.br/subscribe/6-waspeed-oferta-licenca-anual-ouro-site?",
  7:  "https://go.waspeed.com.br/subscribe/7-waspeed-oferta-licenca-anual-ouro-site?",
  8:  "https://go.waspeed.com.br/subscribe/8-waspeed-oferta-licenca-anual-ouro-site?",
  9:  "https://go.waspeed.com.br/subscribe/9-waspeed-oferta-licenca-anual-ouro-site?",
  10: "https://go.waspeed.com.br/subscribe/10-waspeed-oferta-licenca-anual-ouro-site?"
};

export const GoldPlanModal: React.FC<GoldPlanModalProps> = ({ isOpen, onClose }) => {
  const [quantity, setQuantity] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  // Reset quantity when modal opens
  useEffect(() => {
    if (isOpen) {
      setQuantity(1);
      setIsLoading(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const currentPrice = PRICING_DATA[quantity] || PRICING_DATA[1];

  const handleIncrement = () => {
    if (quantity < 10) setQuantity(prev => prev + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) setQuantity(prev => prev - 1);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const baseUrl = CHECKOUT_LINKS[quantity] || CHECKOUT_LINKS[1];
    const params = new URLSearchParams(window.location.search);

    params.append('name', formData.name);
    params.append('email', formData.email);
    params.append('phone', formData.phone);
    
    let finalUrl = baseUrl;
    if (!finalUrl.endsWith('?')) finalUrl += '?';
    
    const queryArray: string[] = [];
    params.forEach((value, key) => {
        queryArray.push(`${encodeURIComponent(key)}=${encodeURIComponent(value)}`);
    });
    
    finalUrl += queryArray.join('&');

    setTimeout(() => {
        window.location.href = finalUrl;
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Container principal compacto sem rolagem quando possível */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden animate-in fade-in zoom-in-95 duration-300 flex flex-col max-h-[95vh]">
        
        {/* Header Compacto */}
        <div className="bg-gradient-to-r from-brand-700 to-brand-600 px-6 py-4 text-white text-center relative overflow-hidden shrink-0">
             <div className="absolute inset-0 bg-[url('https://waspeed.com.br/wp-content/uploads/2025/12/gold-medal.svg')] bg-no-repeat bg-center opacity-5 bg-[length:120%] blur-sm"></div>
             <div className="relative z-10">
                <h3 className="text-xl font-bold mb-0.5">Configurar Licença Ouro</h3>
                <p className="text-brand-100 text-xs">Personalize sua quantidade de licenças</p>
             </div>
             <button 
                onClick={onClose}
                className="absolute top-3 right-3 text-white/70 hover:text-white bg-black/10 hover:bg-black/20 p-1.5 rounded-full transition-all"
            >
                <X size={18} />
            </button>
        </div>

        {/* Conteúdo com overflow automático apenas se necessário */}
        <div className="p-5 overflow-y-auto">
            
            {/* Seletor de Quantidade e Display de Preço unificados visualmente para economizar espaço */}
            <div className="mb-5 space-y-4">
                {/* Seletor */}
                <div className="flex items-center justify-center gap-4">
                    <button 
                        type="button" 
                        onClick={handleDecrement}
                        disabled={quantity <= 1}
                        className="w-10 h-10 rounded-full bg-brand-600 text-white flex items-center justify-center shadow-md hover:bg-brand-700 hover:scale-105 active:scale-95 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        <Minus size={20} strokeWidth={3} />
                    </button>
                    
                    <div className="w-16 h-12 bg-slate-50 border-2 border-brand-200 rounded-lg flex items-center justify-center text-xl font-bold text-brand-900 shadow-inner">
                        {quantity}
                    </div>

                    <button 
                        type="button" 
                        onClick={handleIncrement}
                        disabled={quantity >= 10}
                        className="w-10 h-10 rounded-full bg-brand-600 text-white flex items-center justify-center shadow-md hover:bg-brand-700 hover:scale-105 active:scale-95 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        <Plus size={20} strokeWidth={3} />
                    </button>
                </div>

                {/* Info Preço Parcelado */}
                <p className="text-center text-slate-500 text-xs">
                    <span className="font-bold text-slate-800">R${currentPrice.regular}</span> em <span className="font-bold text-slate-800">6x de R${currentPrice.parcela}</span>
                </p>

                {/* Card Preço à Vista */}
                <div className="relative group cursor-default mx-auto max-w-sm">
                    <div className="absolute inset-0 bg-gradient-to-r from-brand-600 to-indigo-600 rounded-xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
                    <div className="relative bg-gradient-to-br from-brand-600 to-indigo-700 rounded-xl p-3 text-white shadow-lg transform transition-transform duration-300 group-hover:-translate-y-1 text-center">
                        <div className="absolute top-0 left-0 w-full h-full overflow-hidden rounded-xl opacity-20">
                            <div className="absolute transform -skew-x-12 bg-white/30 w-10 h-[200%] -top-10 -left-20 animate-[shimmer_3s_infinite]"></div>
                        </div>
                        <p className="text-[10px] font-bold text-brand-100 uppercase tracking-wider mb-0.5 flex items-center justify-center gap-1.5">
                            <CreditCard size={12} /> Pagamento à vista
                        </p>
                        <div className="flex items-baseline justify-center gap-1">
                            <span className="text-base opacity-80">R$</span>
                            <span className="text-3xl font-extrabold tracking-tight">{currentPrice.vista}</span>
                            <span className="text-xs font-medium opacity-80">/ano</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Formulário Compacto */}
            <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
                <h4 className="font-semibold text-slate-800 mb-3 text-sm flex items-center gap-1.5">
                    <CheckCircle className="text-green-500" size={16} />
                    Dados para ativação
                </h4>
                <form onSubmit={handleSubmit} className="space-y-3">
                    <div>
                        <input
                            type="text"
                            name="name"
                            required
                            placeholder="Nome completo"
                            className="w-full px-3 py-2.5 rounded-lg border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/10 outline-none transition-all text-sm"
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                         <input
                            type="email"
                            name="email"
                            required
                            placeholder="E-mail"
                            className="w-full px-3 py-2.5 rounded-lg border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/10 outline-none transition-all text-sm"
                            value={formData.email}
                            onChange={handleChange}
                        />
                        <input
                            type="tel"
                            name="phone"
                            required
                            placeholder="WhatsApp"
                            className="w-full px-3 py-2.5 rounded-lg border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/10 outline-none transition-all text-sm"
                            value={formData.phone}
                            onChange={handleChange}
                        />
                    </div>

                    <Button 
                        type="submit" 
                        fullWidth 
                        variant="primary"
                        className="mt-1 py-3 text-sm font-bold shadow-lg shadow-brand-600/20 group rounded-lg"
                        disabled={isLoading}
                    >
                        {isLoading ? 'Processando...' : 'Ir para Pagamento Seguro'}
                        {!isLoading && <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />}
                    </Button>
                </form>
                <div className="mt-3 flex items-center justify-center gap-1.5 text-[10px] text-slate-400 font-medium">
                    <ShieldCheck size={12} />
                    <span>Ambiente criptografado e 100% seguro</span>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};