import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { SocialProof } from './components/SocialProof';
import { Pricing } from './components/Pricing';
import { Footer } from './components/Footer';
import { Testimonials } from './components/Testimonials';
import { MessageCircle, ArrowRight } from 'lucide-react';
import { LeadModal } from './components/LeadModal';

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-brand-200 selection:text-brand-900 font-sans">
      <Navbar onOpenModal={openModal} />
      
      <main>
        <Hero onOpenModal={openModal} />
        <SocialProof />
        <Features />
        <Testimonials />
        <Pricing onOpenModal={openModal} />
        
        {/* FAQ Section */}
        <section id="faq" className="py-24 bg-slate-50 scroll-mt-32">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                   <h2 className="text-3xl font-bold text-slate-900 mb-4">Perguntas Frequentes</h2>
                   <p className="text-slate-500">Tire suas dúvidas antes de começar.</p>
                </div>
                
                <div className="space-y-4">
                    {[
                        { q: "Preciso deixar o computador ligado?", a: "Para a versão Web, sim. Para a versão Cloud, não é necessário." },
                        { q: "Existe risco de bloqueio?", a: "Nossa tecnologia V4 possui um sistema exclusivo de aquecimento e delay que reduz drasticamente os riscos, mas recomendamos seguir nossas boas práticas." },
                        { q: "Posso cancelar quando quiser?", a: "Sim! Não temos fidelidade. Você pode cancelar sua assinatura a qualquer momento diretamente no painel." },
                        { q: "Tem suporte para configuração?", a: "Com certeza. Nossa equipe de suporte está disponível em horário comercial para te ajudar no setup inicial." }
                    ].map((item, i) => (
                        <div key={i} className="bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-md transition-shadow cursor-pointer">
                            <h3 className="text-lg font-bold text-slate-900 mb-2">{item.q}</h3>
                            <p className="text-slate-500">{item.a}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* Final CTA - Modern Blue Gradient */}
        <section className="py-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-600 to-indigo-700"></div>
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
            
            {/* Decorative circles */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-white opacity-10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-indigo-900 opacity-20 rounded-full blur-3xl"></div>

            <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">Pronto para triplicar suas vendas?</h2>
                <p className="text-brand-100 text-xl mb-10 max-w-2xl mx-auto">Junte-se a mais de 40.000 empresas que usam WaSpeed diariamente para automatizar o sucesso.</p>
                
                <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                  <button 
                    onClick={openModal}
                    className="bg-white text-brand-600 hover:bg-slate-50 font-bold py-4 px-10 rounded-full text-lg shadow-xl shadow-brand-900/20 transition-all hover:-translate-y-1 flex items-center gap-2"
                  >
                      Quero Começar Agora
                      <ArrowRight size={20} />
                  </button>
                </div>
            </div>
        </section>
      </main>

      <Footer />
      
      <LeadModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/5511999999999" 
        target="_blank" 
        rel="noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg shadow-green-500/40 z-50 transition-all hover:scale-110 flex items-center justify-center group"
        aria-label="Fale conosco no WhatsApp"
      >
        <MessageCircle size={28} fill="currentColor" />
        <span className="absolute right-full mr-4 bg-white text-slate-800 px-3 py-1 rounded-lg text-sm font-semibold shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Fale Conosco
        </span>
      </a>
    </div>
  );
};

export default App;