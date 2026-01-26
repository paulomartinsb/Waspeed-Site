import React from 'react';
import { Send, MessageSquare, Users, PieChart, Zap, Bot, Calendar, Workflow, Play } from 'lucide-react';

export const Features: React.FC = () => {
  // Estrutura pronta para receber os vídeos. 
  // Basta colar a URL do vídeo na propriedade 'videoUrl' de cada item.
  const features = [
    {
      icon: <Users className="w-6 h-6 text-violet-600" />,
      title: "CRM Kanban",
      description: "Organize seus leads em um quadro visual. Arraste, solte e nunca mais perca uma venda por falta de organização.",
      videoUrl: "" // Coloque a URL do vídeo aqui
    },
    {
      icon: <Zap className="w-6 h-6 text-amber-500" />,
      title: "Respostas Flash",
      description: "Envie áudios como se fossem gravados na hora. Aumente a conversão com respostas instantâneas em um clique.",
      videoUrl: ""
    },
    {
      icon: <Send className="w-6 h-6 text-blue-600" />,
      title: "Disparos em Massa",
      description: "Alcance milhares de clientes. Tecnologia anti-bloqueio exclusiva com aquecimento de chip e delay inteligente.",
      videoUrl: ""
    },
    {
      icon: <Bot className="w-6 h-6 text-emerald-500" />,
      title: "Agente de IA",
      description: "Atendimento 24/7 humanizado. Nossa IA qualifica leads e tira dúvidas enquanto você dorme.",
      videoUrl: ""
    },
    {
      icon: <Calendar className="w-6 h-6 text-pink-500" />,
      title: "Agendador",
      description: "Sistema automático de lembretes para reuniões e consultas. Reduza o 'no-show' da sua agenda a zero.",
      videoUrl: ""
    },
    {
      icon: <Workflow className="w-6 h-6 text-indigo-600" />,
      title: "Construtor de Fluxos",
      description: "Crie funis de vendas complexos com arrastar e soltar. Sem necessidade de saber programação.",
      videoUrl: ""
    },
    {
      icon: <PieChart className="w-6 h-6 text-orange-500" />,
      title: "Métricas Reais",
      description: "Saiba exatamente qual etapa do funil está convertendo mais com dashboards detalhados em tempo real.",
      videoUrl: ""
    },
    {
      icon: <MessageSquare className="w-6 h-6 text-cyan-500" />,
      title: "Menu Interativo (URA)",
      description: "Direcione seu cliente para o setor certo automaticamente com menus numerados inteligentes.",
      videoUrl: ""
    }
  ];

  return (
    <section id="features" className="py-32 bg-white relative scroll-mt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-24">
          <span className="text-brand-600 font-bold tracking-wider uppercase text-sm bg-brand-50 px-4 py-1.5 rounded-full border border-brand-100">
            Funcionalidades Premium
          </span>
          <h2 className="mt-8 text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Tudo o que você precisa em um só lugar
          </h2>
          <p className="mt-6 text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Veja na prática como o WaSpeed transforma seu WhatsApp em uma máquina de vendas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden rounded-[2.5rem] bg-white border border-slate-200 shadow-xl shadow-slate-200/40 hover:shadow-2xl hover:shadow-brand-900/10 hover:border-brand-200 transition-all duration-500 flex flex-col"
            >
              {/* Área do Vídeo */}
              <div className="relative w-full aspect-[16/10] bg-slate-100 overflow-hidden border-b border-slate-100">
                {feature.videoUrl ? (
                  <video 
                    src={feature.videoUrl} 
                    className="absolute inset-0 w-full h-full object-cover"
                    autoPlay 
                    loop 
                    muted 
                    playsInline
                  />
                ) : (
                  // Placeholder enquanto não tem vídeo
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 group-hover:scale-105 transition-transform duration-700">
                    <div className="flex flex-col items-center gap-3">
                        <div className="w-16 h-16 rounded-full bg-white shadow-lg flex items-center justify-center animate-pulse">
                            <Play className="w-6 h-6 text-slate-300 fill-slate-300 ml-1" />
                        </div>
                        <span className="text-sm font-semibold text-slate-400 uppercase tracking-widest">Vídeo em breve</span>
                    </div>
                  </div>
                )}
                
                {/* Overlay gradiente sutil na base do vídeo */}
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white via-white/50 to-transparent opacity-80"></div>
              </div>

              {/* Conteúdo */}
              <div className="p-8 md:p-10 relative">
                <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-slate-50 rounded-2xl border border-slate-100 shadow-sm group-hover:scale-110 transition-transform duration-300">
                        {feature.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900">{feature.title}</h3>
                </div>
                <p className="text-slate-600 leading-relaxed font-medium text-lg">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};