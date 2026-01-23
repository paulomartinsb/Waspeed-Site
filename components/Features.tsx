import React from 'react';
import { Send, MessageSquare, Users, PieChart, Zap, Bot, Calendar, Workflow } from 'lucide-react';

export const Features: React.FC = () => {
  const features = [
    {
      icon: <Users className="w-6 h-6 text-white" />,
      color: "bg-violet-500",
      title: "CRM",
      description: "Organize seus leads em um quadro Kanban (arrasta e solta). Gerencie etapas de negociação e nunca perca uma venda."
    },
    {
      icon: <Zap className="w-6 h-6 text-white" />,
      color: "bg-amber-500",
      title: "Respostas Rápidas",
      description: "Acelere o atendimento enviando áudios (como gravados na hora), textos e mídias com apenas um clique."
    },
    {
      icon: <Send className="w-6 h-6 text-white" />,
      color: "bg-blue-500",
      title: "Envio em Massa",
      description: "Realize disparos ilimitados para sua base de clientes com alta taxa de entrega e segurança antibloqueio."
    },
    {
      icon: <Bot className="w-6 h-6 text-white" />,
      color: "bg-emerald-500",
      title: "Agente de IA",
      description: "Integre Inteligência Artificial para atender, qualificar leads e tirar dúvidas de forma humanizada 24/7."
    },
    {
      icon: <Calendar className="w-6 h-6 text-white" />,
      color: "bg-pink-500",
      title: "Central de Agendamentos",
      description: "Automatize a marcação de reuniões e consultas, enviando lembretes automáticos para evitar faltas."
    },
    {
      icon: <Workflow className="w-6 h-6 text-white" />,
      color: "bg-indigo-500",
      title: "Fluxos",
      description: "Construtor visual de fluxos de conversa. Crie automações complexas de forma simples e intuitiva."
    },
    {
      icon: <PieChart className="w-6 h-6 text-white" />,
      color: "bg-orange-500",
      title: "Dashboard com Funil CRM",
      description: "Visualize métricas em tempo real e acompanhe a conversão de cada etapa do seu funil de vendas."
    },
    {
      icon: <MessageSquare className="w-6 h-6 text-white" />,
      color: "bg-cyan-500",
      title: "Auto Atendimento",
      description: "Crie menus interativos (URA) que direcionam seu cliente automaticamente para o setor correto."
    }
  ];

  return (
    <section id="features" className="py-24 bg-slate-50 relative scroll-mt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-brand-600 font-semibold tracking-wider uppercase text-sm bg-brand-50 px-3 py-1 rounded-full border border-brand-100">
            Funcionalidades
          </span>
          <h2 className="mt-6 text-3xl md:text-5xl font-bold text-slate-900 tracking-tight">
            Ferramentas poderosas para escalar suas vendas
          </h2>
          <p className="mt-4 text-xl text-slate-500">
            Uma suíte completa de automação para transformar seu WhatsApp em uma máquina de resultados.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white rounded-3xl p-6 shadow-sm hover:shadow-xl hover:shadow-brand-900/5 border border-slate-100 transition-all duration-300 group hover:-translate-y-1"
            >
              <div className={`w-12 h-12 ${feature.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-gray-200 group-hover:scale-110 transition-transform duration-300`}>
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">{feature.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};