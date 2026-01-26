import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { SocialProof } from './components/SocialProof';
import { Pricing } from './components/Pricing';
import { Footer } from './components/Footer';
import { Testimonials } from './components/Testimonials';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import { LeadModal } from './components/LeadModal';
import { GoldPlanModal } from './components/GoldPlanModal';
import { FaqItem } from './components/FaqItem';

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isGoldModalOpen, setIsGoldModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const openGoldModal = () => {
    setIsGoldModalOpen(true);
  };

  const faqData = [
    {
      q: "Como faço para ativar minha licença premium?",
      a: "Para ativar sua licença premium, acesse o PAINEL DO GESTOR com o login e senha que te enviaremos no email e no WhatsApp, adicione um usuário e faça login no plugin através do WhatsApp Web."
    },
    {
      q: "Posso usar minha licença em mais de um dispositivo?",
      a: "Cada licença é por usuário e deve ser usada individualmente. Não é possível usar a mesma licença simultaneamente em dois dispositivos. Nesse caso, você precisaria de duas licenças."
    },
    {
      q: "O que acontece com meus dados se eu trocar de máquina?",
      a: "Os dados do WaSpeed ficam salvos localmente. Faça backup na máquina A e restaure na máquina B para transferir abas, respostas rápidas, etc."
    },
    {
      q: "Qual é a duração da licença?",
      a: "A licença do WaSpeed é anual. Você paga uma vez e utiliza o serviço durante um ano, com suporte e atualizações incluídos."
    },
    {
      q: "Como funciona o suporte?",
      a: "O suporte é oferecido via WhatsApp: (31) 2942-4032 e e-mail contato@waspeed.com.br, incluído no valor da licença."
    },
    {
      q: "O que acontece se o WaSpeed parar de funcionar?",
      a: "Estamos constantemente atualizando o WaSpeed para garantir sua funcionalidade. No entanto, em caso de problemas, nosso suporte está disponível para ajudar."
    },
    {
      q: "E se eu não ficar satisfeito com a licença premium do WaSpeed?",
      a: "Caso você compre a licença premium e não fique satisfeito durante os primeiros 7 dias, oferecemos o reembolso integral."
    },
    {
      q: "O WaSpeed possui webhook para integrações?",
      a: "Sim, o WaSpeed possui webhook, permitindo integrações com vários sistemas para emitir relatórios, boletos, notas fiscais, alimentar planilhas, etc."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-brand-200 selection:text-brand-900 font-sans">
      <Navbar onOpenModal={openModal} />
      
      <main>
        <Hero onOpenModal={openModal} />
        <SocialProof />
        <Features />
        <Testimonials />
        <Pricing onOpenModal={openModal} onOpenGoldModal={openGoldModal} />
        
        {/* FAQ Section */}
        <section id="faq" className="py-32 bg-white scroll-mt-32 border-t border-slate-100">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-20">
                   <span className="text-brand-600 font-bold tracking-wider uppercase text-sm mb-2 block">Tira-Dúvidas</span>
                   <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6">Perguntas Frequentes</h2>
                   <p className="text-slate-500 text-xl max-w-2xl mx-auto">Tudo o que você precisa saber sobre a ferramenta que vai escalar suas vendas.</p>
                </div>
                
                <div className="grid gap-8 md:grid-cols-2 items-start">
                    {faqData.map((item, i) => (
                        <FaqItem key={i} q={item.q} a={item.a} />
                    ))}
                </div>
            </div>
        </section>

        {/* Final CTA - Modern Blue Gradient */}
        <section className="py-32 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-700 via-brand-600 to-indigo-700"></div>
            {/* Texture Overlay */}
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#ffffff33_1px,transparent_1px)] [background-size:24px_24px]"></div>
            
            {/* Decorative circles */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-white opacity-10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-indigo-900 opacity-30 rounded-full blur-3xl"></div>

            <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-5 py-2 rounded-full border border-white/20 text-white text-sm font-medium mb-10">
                  <ShieldCheck size={18} />
                  Garantia de 7 dias ou seu dinheiro de volta
                </div>

                <h2 className="text-4xl md:text-7xl font-extrabold text-white mb-10 leading-tight tracking-tight">
                  Pronto para triplicar suas vendas <br className="hidden md:block" /> no automático?
                </h2>
                <p className="text-brand-50 text-xl md:text-2xl mb-14 max-w-3xl mx-auto leading-relaxed font-light">
                  Junte-se a mais de 40.000 empresas que usam WaSpeed diariamente para automatizar o sucesso e ganhar tempo.
                </p>
                
                <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
                  <button 
                    onClick={openModal}
                    className="group bg-white text-brand-700 hover:bg-slate-50 font-extrabold py-6 px-12 rounded-full text-xl shadow-2xl shadow-brand-900/40 transition-all hover:-translate-y-1 hover:shadow-brand-900/50 flex items-center gap-3 w-full sm:w-auto justify-center"
                  >
                      Quero Começar Agora
                      <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                  <p className="text-white/60 text-sm mt-4 sm:mt-0 sm:hidden">
                    Instalação em menos de 2 minutos
                  </p>
                </div>
                <p className="text-brand-200/80 text-base mt-10 hidden sm:block">
                    ✓ Instalação imediata &nbsp; • &nbsp; ✓ Sem fidelidade &nbsp; • &nbsp; ✓ Suporte dedicado
                </p>
            </div>
        </section>
      </main>

      <Footer />
      
      <LeadModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <GoldPlanModal isOpen={isGoldModalOpen} onClose={() => setIsGoldModalOpen(false)} />

      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/553129424032" 
        target="_blank" 
        rel="noreferrer"
        className="fixed bottom-8 right-8 bg-[#25D366] hover:bg-[#20bd5a] p-3 md:p-4 rounded-full shadow-lg shadow-green-900/20 z-50 transition-all hover:scale-110 flex items-center justify-center group"
        aria-label="Fale conosco no WhatsApp"
      >
        <img 
          src="https://waspeed.com.br/wp-content/uploads/2025/10/whatsapp-svgrepo-com.svg" 
          alt="WhatsApp" 
          className="w-8 h-8 md:w-10 md:h-10 text-white brightness-0 invert" 
        />
        <span className="absolute right-full mr-4 bg-white text-slate-800 px-4 py-2 rounded-xl text-sm font-bold shadow-xl opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap pointer-events-none translate-x-2 group-hover:translate-x-0">
          Suporte WaSpeed
        </span>
      </a>
    </div>
  );
};

export default App;