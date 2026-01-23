import React from 'react';
import { Button } from './Button';
import { Check, PlayCircle } from 'lucide-react';

interface HeroProps {
  onOpenModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenModal }) => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Abstract Background Shapes */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="grid-pattern absolute inset-0 opacity-40 h-[80%]"></div>
        <div className="absolute top-[-10%] left-[-10%] w-[40rem] h-[40rem] bg-brand-200/40 rounded-full blur-[100px] mix-blend-multiply animate-blob will-change-transform"></div>
        <div className="absolute top-[-10%] right-[-10%] w-[40rem] h-[40rem] bg-blue-200/40 rounded-full blur-[100px] mix-blend-multiply animate-blob animation-delay-2000 will-change-transform"></div>
        <div className="absolute bottom-[-20%] left-[20%] w-[50rem] h-[50rem] bg-indigo-100/40 rounded-full blur-[100px] mix-blend-multiply animate-blob animation-delay-4000 will-change-transform"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto flex flex-col items-center">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white border border-slate-200 rounded-full px-4 py-1.5 mb-8 shadow-sm hover:border-brand-300 transition-colors cursor-default">
            <span className="flex h-2 w-2 rounded-full bg-brand-500 animate-pulse"></span>
            <span className="text-xs font-semibold text-slate-600 uppercase tracking-wide">Nova Versão 4.0 Disponível</span>
          </div>
          
          {/* Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 tracking-tight mb-6 leading-[1.1]">
            Transforme seu WhatsApp em uma
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-indigo-600"> Máquina de Vendas</span>
          </h1>
          
          {/* Subheadline */}
          <p className="text-lg md:text-xl text-slate-500 mb-10 max-w-2xl mx-auto leading-relaxed">
            Automatize seu atendimento, recupere carrinhos abandonados e faça disparos em massa com segurança. A ferramenta favorita de 40.000+ empresas.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 w-full sm:w-auto">
            <Button 
              className="h-14 px-8 text-lg w-full sm:w-auto shadow-xl shadow-brand-500/20" 
              aria-label="Começar Teste Grátis"
              onClick={onOpenModal}
            >
              Começar Teste Grátis
            </Button>
            <Button variant="outline" className="h-14 px-8 text-lg w-full sm:w-auto gap-2" aria-label="Ver Vídeo de Demonstração">
              <PlayCircle size={20} aria-hidden="true" />
              Ver Vídeo Demo
            </Button>
          </div>

          {/* Social Proof Text */}
          <div className="flex items-center gap-6 text-sm font-medium text-slate-500">
            <div className="flex items-center gap-1">
              <Check size={16} className="text-brand-600" aria-hidden="true" />
              <span>Sem cartão de crédito</span>
            </div>
            <div className="flex items-center gap-1">
              <Check size={16} className="text-brand-600" aria-hidden="true" />
              <span>Instalação imediata</span>
            </div>
          </div>
        </div>

        {/* Dashboard Mockup */}
        <div className="mt-20 relative mx-auto max-w-6xl perspective-1000">
          <div className="relative bg-white rounded-2xl border border-slate-200/60 shadow-soft p-2 md:p-3 transform rotate-x-12 hover:rotate-0 transition-transform duration-700 ease-out">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 bg-brand-600 text-white px-6 py-2 rounded-full shadow-lg font-bold text-sm">
              Dashboard WaSpeed
            </div>
            
            <div className="rounded-xl overflow-hidden bg-slate-50 aspect-[16/9] relative group border border-slate-100">
                {/* LCP Optimization: fetchPriority='high' */}
                <img 
                    src="https://picsum.photos/1200/675?blur=2" 
                    alt="WaSpeed Dashboard Interface" 
                    width="1200"
                    height="675"
                    className="absolute inset-0 w-full h-full object-cover"
                    // @ts-ignore
                    fetchpriority="high"
                />
            </div>
          </div>
          
          {/* Floating UI Badges */}
          <div className="absolute -right-8 top-1/4 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 animate-bounce hidden lg:block">
            <div className="flex items-center gap-3">
              <div className="bg-green-100 p-2 rounded-lg">
                <Check className="text-green-600" size={20} aria-hidden="true" />
              </div>
              <div>
                <p className="text-xs text-slate-500">Campanha Finalizada</p>
                <p className="font-bold text-slate-900">98% de Abertura</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};