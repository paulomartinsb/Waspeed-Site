import React from 'react';
import { Check, Star } from 'lucide-react';
import { Button } from './Button';

interface PricingProps {
  onOpenModal?: () => void;
  onOpenGoldModal?: () => void;
}

export const Pricing: React.FC<PricingProps> = ({ onOpenModal, onOpenGoldModal }) => {
  
  const featuresList = [
    "Envios em massa",
    "Envio de mensagens em texto, áudio, imagem, vídeo e documentos",
    "Criação de funis automáticos em um clique",
    "Fluxo de chatbot",
    "Respostas automáticas simples e intuitivas",
    "Publicação automática de status",
    "Organização por etiquetas e marcações",
    "Agendamento de mensagens",
    "Atendimento de segunda a sábado",
    "Bônus 19 Scripts Prontos e Validados",
    "Bônus 19 Fluxos de Bot Prontos",
    "Bônus 4 E-books Exclusivos de Atendimento e Vendas"
  ];

  const plans = [
    {
      id: "free",
      name: "Licença gratuita",
      price: "0",
      icon: null,
      headerColor: "bg-white",
      borderColor: "border-slate-200",
      isHighlight: false,
      footerNote: "* Uso limitado, apenas demonstração.",
      cta: "Testar Grátis",
      ctaVariant: "outline" as const
    },
    {
      id: "gold",
      name: "Licença Ouro",
      price: "297",
      icon: <img src="https://waspeed.com.br/wp-content/uploads/2025/12/gold-medal.svg" alt="Medalha de Ouro" className="w-32 h-32 mb-4 object-contain drop-shadow-2xl hover:scale-110 transition-transform duration-500 filter brightness-110" />,
      headerColor: "bg-gradient-to-r from-brand-600 to-brand-500",
      borderColor: "border-brand-500",
      isHighlight: true,
      badge: "Recomendado por Especialistas",
      footerNote: "* Os bônus são liberados automaticamente após o período de garantia de 7 dias.",
      cta: "QUERO VENDER MAIS",
      ctaVariant: "primary" as const
    },
    {
      id: "silver",
      name: "Licença Prata",
      price: "147",
      icon: <img src="https://waspeed.com.br/wp-content/uploads/2025/12/silver-medal.svg" alt="Medalha de Prata" className="w-24 h-24 mb-4 object-contain drop-shadow-xl hover:scale-105 transition-transform duration-300 opacity-90" />,
      headerColor: "bg-white",
      borderColor: "border-slate-200",
      isHighlight: false,
      footerNote: "",
      cta: "Começar Agora",
      ctaVariant: "outline" as const
    }
  ];

  // Helper function to determine text styling based on plan and content
  const getFeatureDisplay = (feature: string, planId: string) => {
    const isBonus = feature.startsWith("Bônus");
    
    // Logic for styling specific text parts
    let suffix = "";
    let suffixClass = "";
    let textClass = "text-slate-600 text-[13px] md:text-sm font-medium";
    let isStrikethrough = false;
    let checkColor = "text-brand-600";

    // Handle Limited/Unlimited tags
    if (planId === 'free') {
       if (!feature.includes("Atendimento") && !isBonus) {
         suffix = "(LIMITADO)";
         suffixClass = "text-red-500 font-bold text-[10px] ml-1 uppercase tracking-wider";
       }
       if (isBonus) {
           isStrikethrough = true;
           checkColor = "text-slate-300";
       }
    } else {
       // Gold and Silver
       if (!feature.includes("Atendimento") && !isBonus) {
         suffix = "(ILIMITADO)";
         suffixClass = "text-green-600 font-bold text-[10px] ml-1 uppercase tracking-wider";
       }
       // Bonuses: Strikethrough for Silver, Bold for Gold
       if (isBonus) {
         if (planId === 'silver') {
             isStrikethrough = true;
             checkColor = "text-slate-300";
         }
         if (planId === 'gold') {
             textClass = "text-brand-900 font-bold text-[13px] md:text-sm";
             checkColor = "text-yellow-500";
         }
       }
    }

    if (isStrikethrough) {
      return {
        content: <span className="text-slate-300 line-through decoration-slate-300 text-[13px] md:text-sm">{feature}</span>,
        checkColor
      };
    }

    return {
      content: (
        <span className={textClass}>
          {feature}
          {suffix && <span className={suffixClass}>{suffix}</span>}
        </span>
      ),
      checkColor
    };
  };

  const handlePlanClick = (planId: string) => {
    if (planId === 'gold' && onOpenGoldModal) {
      onOpenGoldModal();
    } else if (onOpenModal) {
      onOpenModal();
    }
  };

  return (
    <section id="pricing" className="py-32 bg-slate-50 relative overflow-hidden scroll-mt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-brand-600 font-bold tracking-wider uppercase text-sm mb-2 block">Investimento Inteligente</span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
            Escolha o plano ideal para você
          </h2>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-end max-w-7xl mx-auto">
          {plans.map((plan) => (
            <div 
              key={plan.id}
              className={`flex flex-col relative bg-white rounded-[2rem] transition-all duration-300 ${plan.isHighlight ? 'shadow-2xl shadow-brand-900/20 lg:-mt-12 z-10 ring-4 ring-brand-500/10' : 'shadow-lg hover:shadow-xl mt-0 z-0 border'} ${plan.borderColor}`}
            >
              {/* Highlight Header */}
              {plan.isHighlight && (
                <div className="bg-gradient-to-r from-brand-600 to-indigo-600 text-white text-center py-5 rounded-t-[1.8rem] font-bold text-sm uppercase tracking-widest flex items-center justify-center gap-2">
                  <Star size={16} fill="white" /> {plan.badge} <Star size={16} fill="white" />
                </div>
              )}

              <div className={`p-8 md:p-10 ${!plan.isHighlight ? 'rounded-[2rem]' : 'rounded-b-[2rem]'} flex flex-col h-full`}>
                
                {/* Plan Name & Icon */}
                <div className="flex flex-col items-center justify-center mb-10 text-center min-h-[160px]">
                  {plan.icon}
                  <h3 className="text-2xl font-bold text-slate-900 mb-1">{plan.name}</h3>
                  <div className="flex items-baseline justify-center gap-1">
                      <span className="text-sm text-slate-400 font-medium">R$</span>
                      <span className="text-5xl font-extrabold text-slate-900 tracking-tight">{plan.price}</span>
                      <span className="text-sm text-slate-400 font-medium">/ano</span>
                  </div>
                </div>

                {/* Features List */}
                <div className="space-y-5 mb-12 flex-1">
                  {featuresList.map((feature, idx) => {
                    const { content, checkColor } = getFeatureDisplay(feature, plan.id);
                    return (
                        <div key={idx} className="flex items-start text-left group">
                        <div className="mr-4 mt-0.5 min-w-[18px]">
                            <Check className={`w-5 h-5 ${checkColor}`} strokeWidth={3} />
                        </div>
                        <div className="leading-snug">
                            {content}
                        </div>
                        </div>
                    );
                  })}
                </div>

                {/* Footer Content */}
                <div className="mt-auto space-y-4">
                    <Button 
                        variant={plan.isHighlight ? 'primary' : 'outline'}
                        fullWidth
                        className={`h-16 text-lg font-bold ${plan.isHighlight ? 'bg-brand-600 hover:bg-brand-700 shadow-xl shadow-brand-500/30' : 'border-slate-300 text-slate-600 hover:border-brand-600 hover:text-brand-600'}`}
                        onClick={() => handlePlanClick(plan.id)}
                    >
                        {plan.cta}
                    </Button>
                    {plan.footerNote && (
                        <p className="text-[11px] text-slate-400 text-center leading-tight min-h-[2.5rem] px-2">
                            {plan.footerNote}
                        </p>
                    )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};