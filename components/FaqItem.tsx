import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FaqItemProps {
  q: string;
  a: string;
}

export const FaqItem: React.FC<FaqItemProps> = ({ q, a }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`bg-slate-50 border rounded-2xl transition-all duration-300 ${isOpen ? 'border-brand-200 shadow-md bg-white' : 'border-slate-200 hover:border-brand-200'}`}>
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="w-full text-left p-6 md:p-8 flex items-start justify-between gap-4 focus:outline-none"
        aria-expanded={isOpen}
      >
        <h3 className="text-lg md:text-xl font-bold text-slate-900 flex items-start">
          <span className="text-brand-600 mr-3 text-2xl leading-none">•</span>
          {q}
        </h3>
        <ChevronDown 
          className={`w-6 h-6 text-slate-400 transform transition-transform duration-300 flex-shrink-0 mt-1 ${isOpen ? 'rotate-180 text-brand-600' : ''}`} 
        />
      </button>
      
      <div 
        className={`grid transition-[grid-template-rows] duration-300 ease-out ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
      >
        <div className="overflow-hidden">
          <div className="px-6 pb-6 md:px-8 md:pb-8 pt-0">
             <p className="text-slate-600 leading-relaxed pl-6 border-l-2 border-brand-100 ml-2">
               {a}
             </p>
          </div>
        </div>
      </div>
    </div>
  );
};