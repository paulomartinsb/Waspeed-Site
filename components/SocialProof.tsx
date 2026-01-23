import React from 'react';

export const SocialProof: React.FC = () => {
  return (
    <section className="py-16 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-50 rounded-[2.5rem] p-12 shadow-sm border border-slate-100">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-slate-200">
            <div className="p-4">
                <div className="text-4xl md:text-5xl font-extrabold text-brand-600 mb-2">+10 Mi</div>
                <div className="text-slate-500 font-medium">Mensagens Enviadas/Dia</div>
            </div>
            <div className="p-4">
                <div className="text-4xl md:text-5xl font-extrabold text-brand-600 mb-2">40k+</div>
                <div className="text-slate-500 font-medium">Empresas Ativas</div>
            </div>
            <div className="p-4">
                <div className="text-4xl md:text-5xl font-extrabold text-brand-600 mb-2">4.9/5</div>
                <div className="text-slate-500 font-medium">Satisfação dos Clientes</div>
            </div>
            </div>

            <div className="mt-12 text-center">
                <p className="text-sm font-semibold text-slate-400 uppercase tracking-widest mb-8">Empresas que confiam na WaSpeed</p>
                <div className="flex flex-wrap justify-center items-center gap-12 opacity-30 grayscale hover:grayscale-0 transition-all duration-500">
                    {/* Abstract shapes representing partner logos */}
                    <div className="h-8 bg-slate-800 w-24 rounded-full"></div>
                    <div className="h-8 bg-slate-800 w-8 rounded-full"></div>
                    <div className="h-8 bg-slate-800 w-32 rounded-lg"></div>
                    <div className="h-8 bg-slate-800 w-20 rounded-md"></div>
                    <div className="h-8 bg-slate-800 w-28 rounded-full"></div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};