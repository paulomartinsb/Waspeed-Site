import React, { useState } from 'react';
import { Button } from './Button';
import { Check, PlayCircle, X, AlertCircle } from 'lucide-react';

interface HeroProps {
  onOpenModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenModal }) => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <>
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-50">
        {/* Abstract Background Shapes */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <div className="grid-pattern absolute inset-0 opacity-60 h-full w-full"></div>
          <div className="absolute top-[-10%] left-[50%] -translate-x-1/2 w-[60rem] h-[60rem] bg-brand-400/20 rounded-full blur-[120px] mix-blend-multiply animate-blob will-change-transform"></div>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center">
            
            {/* Alert Badge */}
            <div className="inline-flex items-center gap-2 bg-red-50 border border-red-100 rounded-full px-5 py-2 mb-10 shadow-sm transition-colors cursor-default animate-in fade-in slide-in-from-bottom-4 duration-700">
                <AlertCircle size={14} className="text-red-600" />
                <span className="text-xs font-bold text-red-800 uppercase tracking-wide">Pare de perder dinheiro</span>
            </div>
            
            {/* Headline */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 tracking-tight mb-8 leading-[1.1] max-w-4xl">
                Seus leads estão fugindo <br className="hidden md:block"/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-indigo-600">pelo seu WhatsApp.</span>
            </h1>
            
            {/* Subheadline */}
            <p className="text-lg md:text-xl text-slate-500 mb-12 max-w-2xl mx-auto leading-relaxed">
                WaSpeed organiza, automatiza e fecha vendas enquanto você cuida do que importa.
            </p>
            
            {/* CTA Buttons - Centered and Side-by-Side */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-12 w-full">
                <Button 
                    className="h-16 px-10 text-lg w-full sm:w-auto shadow-xl shadow-brand-600/20 hover:shadow-brand-600/30 transition-all hover:-translate-y-1 font-bold" 
                    aria-label="Começar Teste Grátis"
                    onClick={onOpenModal}
                >
                    Começar Grátis Agora
                </Button>
                <Button 
                    variant="outline" 
                    className="h-16 px-8 text-lg w-full sm:w-auto gap-2 border-2 bg-white/50 backdrop-blur-sm" 
                    aria-label="Ver Vídeo de Demonstração"
                    onClick={() => setIsVideoOpen(true)}
                >
                    <PlayCircle size={22} className="text-brand-600" />
                    Assistir Vídeo
                </Button>
            </div>

            {/* Social Proof Text - Centered */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-sm font-semibold text-slate-600">
                <div className="flex items-center gap-2">
                  <div className="bg-green-100 rounded-full p-1.5"><Check size={14} className="text-green-700" strokeWidth={4} /></div>
                  <span>Instalação com 2 cliques</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="bg-green-100 rounded-full p-1.5"><Check size={14} className="text-green-700" strokeWidth={4} /></div>
                  <span>Sem cartão de crédito</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="bg-green-100 rounded-full p-1.5"><Check size={14} className="text-green-700" strokeWidth={4} /></div>
                  <span>+ 40.000 Instalações</span>
                </div>
            </div>

        </div>
      </section>

      {/* Video Modal Overlay */}
      {isVideoOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
          <div 
            className="absolute inset-0 bg-slate-900/90 backdrop-blur-sm transition-opacity"
            onClick={() => setIsVideoOpen(false)}
            aria-hidden="true"
          />
          
          <div className="relative w-full max-w-5xl bg-black rounded-2xl overflow-hidden shadow-2xl shadow-black/50 border border-white/10 animate-in fade-in zoom-in-95 duration-300">
            {/* Close Button */}
            <button 
              onClick={() => setIsVideoOpen(false)}
              className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full backdrop-blur-md transition-all border border-white/10 group"
              aria-label="Fechar vídeo"
            >
              <X size={24} className="group-hover:rotate-90 transition-transform" />
            </button>

            {/* Video Player Container - PLACEHOLDER */}
            <div className="aspect-video w-full bg-slate-900 flex items-center justify-center">
                {/* 
                   FUTURO: Substitua o conteúdo abaixo pelo iframe do novo vídeo.
                   Exemplo: <iframe src="URL_DO_NOVO_VIDEO" ... className="w-full h-full" />
                */}
                <div className="text-center">
                    <PlayCircle size={48} className="text-slate-700 mx-auto mb-4" />
                    <p className="text-slate-500 font-medium">Vídeo em breve...</p>
                </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};