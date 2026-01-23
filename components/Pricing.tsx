import React from 'react';
import { Check } from 'lucide-react';
import { Button } from './Button';

interface PricingProps {
  onOpenModal?: () => void;
}

export const Pricing: React.FC<PricingProps> = ({ onOpenModal }) => {
  
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
      borderColor: "border-blue-600",
      isHighlight: false,
      footerNote: "* Uso limitado, apenas demonstração.",
      cta: "Começar Grátis",
      ctaVariant: "outline" as const
    },
    {
      id: "gold",
      name: "Licença Ouro",
      price: "297",
      icon: <img src="/gold-medal.png" alt="Medalha de Ouro" className="w-28 h-28 mb-4 object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-300" />,
      headerColor: "bg-blue-600",
      borderColor: "border-blue-600",
      isHighlight: true,
      badge: "Mais Escolhida",
      footerNote: "* Os bônus são liberados automaticamente após o período de garantia de 7 dias, para proteção do conteúdo digital.",
      cta: "Começar Agora",
      ctaVariant: "primary" as const
    },
    {
      id: "silver",
      name: "Licença Prata",
      price: "147",
      icon: <img src="/silver-medal.png" alt="Medalha de Prata" className="w-24 h-24 mb-4 object-contain drop-shadow-xl hover:scale-105 transition-transform duration-300" />,
      headerColor: "bg-white",
      borderColor: "border-blue-600",
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
    let textClass = "text-slate-600 text-[13px] md:text-sm";
    let isStrikethrough = false;

    // Handle Limited/Unlimited tags
    if (planId === 'free') {
       if (!feature.includes("Atendimento") && !isBonus) {
         suffix = "(LIMITADO)";
         suffixClass = "text-red-500 font-bold text-xs ml-1";
       }
       if (isBonus) isStrikethrough = true;
    } else {
       // Gold and Silver
       if (!feature.includes("Atendimento") && !isBonus) {
         suffix = "(ILIMITADO)";
         suffixClass = "text-blue-600 font-bold text-xs ml-1";
       }
       // Bonuses: Strikethrough for Silver, Bold for Gold
       if (isBonus) {
         if (planId === 'silver') isStrikethrough = true;
         if (planId === 'gold') textClass = "text-slate-900 font-bold text-[13px] md:text-sm";
       }
    }

    if (isStrikethrough) {
      return (
        <span className="text-slate-400 line-through decoration-slate-400 text-[13px] md:text-sm">
          {feature}
        </span>
      );
    }

    return (
      <span className={textClass}>
        {feature}
        {suffix && <span className={suffixClass}>{suffix}</span>}
        {isBonus && planId === 'gold' && "*"}
      </span>
    );
  };

  return (
    <section id="pricing" className="py-24 bg-white relative overflow-hidden scroll-mt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
            Escolha o plano ideal para você
          </h2>
          <p className="text-lg text-slate-500">
            Licença anual por usuário:
          </p>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start max-w-7xl mx-auto">
          {plans.map((plan) => (
            <div 
              key={plan.id}
              className={`flex flex-col relative bg-white rounded-3xl transition-all duration-300 ${plan.isHighlight ? 'shadow-2xl shadow-blue-900/10 -mt-8 lg:-mt-12 z-10' : 'shadow-lg hover:shadow-xl mt-0 z-0'} border-2 ${plan.borderColor}`}
            >
              {/* Highlight Header */}
              {plan.isHighlight && (
                <div className="bg-blue-600 text-white text-center py-3 rounded-t-2xl font-bold text-lg uppercase tracking-wide">
                  {plan.badge}
                </div>
              )}

              <div className={`p-6 ${!plan.isHighlight ? 'rounded-3xl' : 'rounded-b-3xl'} flex flex-col h-full`}>
                
                {/* Plan Name & Icon */}
                <div className="flex flex-col items-center justify-center mb-6 text-center min-h-[140px]">
                  {plan.icon}
                  <h3 className="text-2xl font-bold text-slate-900">{plan.name}</h3>
                </div>

                {/* Features List */}
                <div className="space-y-3 mb-8 flex-1">
                  {featuresList.map((feature, idx) => (
                    <div key={idx} className="flex items-start text-left group">
                      <div className="mr-3 mt-0.5 min-w-[18px]">
                        <Check className="w-5 h-5 text-blue-600" strokeWidth={3} />
                      </div>
                      <div className="leading-snug">
                        {getFeatureDisplay(feature, plan.id)}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Footer Content */}
                <div className="mt-auto space-y-4">
                    {plan.footerNote && (
                        <p className="text-[10px] text-slate-400 text-center italic leading-tight min-h-[2.5rem]">
                            {plan.footerNote}
                        </p>
                    )}
                    
                    <Button 
                        variant={plan.isHighlight ? 'primary' : 'outline'}
                        fullWidth
                        className={plan.isHighlight ? 'bg-blue-600 hover:bg-blue-700' : 'border-blue-600 text-blue-600 hover:bg-blue-50'}
                        onClick={onOpenModal}
                    >
                        {plan.cta}
                    </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};