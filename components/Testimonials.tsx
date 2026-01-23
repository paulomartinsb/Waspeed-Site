import React from 'react';
import { Star } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Ricardo Silva",
      role: "Dono de E-commerce",
      text: "A WaSpeed mudou o jogo da minha loja. Recuperei mais de R$ 50 mil em carrinhos abandonados só no primeiro mês usando o chatbot automático.",
      avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d"
    },
    {
      name: "Amanda Oliveira",
      role: "Clínica de Estética",
      text: "Antes perdíamos muito tempo confirmando agendamentos. Agora o robô faz tudo sozinho e minha secretária foca em atender os clientes na recepção.",
      avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d"
    },
    {
      name: "Carlos Mendes",
      role: "Agência de Marketing",
      text: "A estabilidade da plataforma é impressionante. Já testei várias outras ferramentas de disparo em massa, mas a WaSpeed é a única que realmente entrega sem banir o chip.",
      avatar: "https://i.pravatar.cc/150?u=a04258114e29026302d"
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-slate-50 relative overflow-hidden">
       {/* Background Decoration */}
       <div className="absolute top-1/2 left-0 w-64 h-64 bg-brand-100 rounded-full blur-[80px] -translate-y-1/2 -translate-x-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">O que dizem nossos clientes</h2>
          <p className="text-slate-500 text-lg">Histórias reais de quem automatizou resultados.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white p-8 rounded-3xl shadow-soft border border-slate-100 flex flex-col hover:-translate-y-2 transition-transform duration-300">
              <div className="flex gap-1 mb-6 text-yellow-400">
                {[1,2,3,4,5].map(star => <Star key={star} size={18} fill="currentColor" aria-hidden="true" />)}
              </div>
              <p className="text-slate-600 leading-relaxed mb-6 flex-1">"{t.text}"</p>
              <div className="flex items-center gap-4 pt-6 border-t border-slate-50">
                <img 
                    src={t.avatar} 
                    alt={`Foto de ${t.name}`} 
                    className="w-12 h-12 rounded-full object-cover ring-2 ring-brand-100" 
                    width="48"
                    height="48"
                    loading="lazy"
                />
                <div>
                  <h4 className="font-bold text-slate-900">{t.name}</h4>
                  <p className="text-xs text-brand-600 font-medium uppercase tracking-wide">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};