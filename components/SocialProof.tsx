import React from 'react';

export const SocialProof: React.FC = () => {
  const partners = [
    "https://waspeed.com.br/wp-content/uploads/2024/11/logo-1615887913-1702412347-ecf7963ac36cfcec82e678094ff87c3f1702412348-320-0-1.png",
    "https://waspeed.com.br/wp-content/uploads/2024/11/logo-4.png",
    "https://waspeed.com.br/wp-content/uploads/2024/11/logo-2.png",
    "https://waspeed.com.br/wp-content/uploads/2024/11/logo-5-1-150x55.png",
    "https://waspeed.com.br/wp-content/uploads/2024/11/logo-white-1.png",
    "https://waspeed.com.br/wp-content/uploads/2024/11/logo-6-1.png",
    "https://waspeed.com.br/wp-content/uploads/2024/11/6eff0eb9-a686-434b-af08-b30ee09554c41729540731wjbE-1.png"
  ];

  return (
    <section className="py-24 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-50 rounded-[3rem] p-12 md:p-16 shadow-sm border border-slate-100">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center divide-y md:divide-y-0 md:divide-x divide-slate-200">
            <div className="p-6">
                <div className="text-5xl md:text-6xl font-extrabold text-brand-600 mb-3">+10 Mi</div>
                <div className="text-slate-500 font-medium text-lg">Mensagens Enviadas/Dia</div>
            </div>
            <div className="p-6">
                <div className="text-5xl md:text-6xl font-extrabold text-brand-600 mb-3">+40k</div>
                <div className="text-slate-500 font-medium text-lg">Extensões Instaladas</div>
            </div>
            <div className="p-6">
                <div className="text-5xl md:text-6xl font-extrabold text-brand-600 mb-3">4.9/5</div>
                <div className="text-slate-500 font-medium text-lg">Satisfação dos Clientes</div>
            </div>
            </div>

            <div className="mt-16 text-center">
                <p className="text-sm font-bold text-slate-400 uppercase tracking-[0.2em] mb-12">Empresas que confiam na WaSpeed</p>
                <div className="flex flex-wrap justify-center items-center gap-8 md:gap-14">
                    {partners.map((logo, index) => (
                      <div key={index} className="h-12 w-auto flex items-center justify-center grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300 filter">
                        <img 
                          src={logo} 
                          alt={`Parceiro WaSpeed ${index + 1}`} 
                          className="max-h-full max-w-[140px] object-contain mix-blend-multiply" 
                        />
                      </div>
                    ))}
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};