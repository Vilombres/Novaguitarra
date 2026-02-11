
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [copied, setCopied] = useState<'phone' | 'email' | null>(null);
  const [expanded, setExpanded] = useState<'phone' | 'email' | null>(null);

  const handleCopy = (text: string, type: 'phone' | 'email') => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(null), 2000);
  };

  const toggleExpand = (type: 'phone' | 'email') => {
    setExpanded(expanded === type ? null : type);
  };

  return (
    <section id="contacto" className="bg-navy py-24 px-8 border-t border-white/5 pb-48">
      <div className="max-w-6xl mx-auto text-center space-y-16">
        <div className="space-y-4">
          <span className="text-gold font-black uppercase tracking-[0.4em] text-[10px]">Contacto Directo</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white italic">¿Hablamos?</h2>
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto">Disponibilidad de modalidades presencial, semi-presencial y on-line, tutorías y colaboraciones profesionales.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* 1. CONTACTO TELEFÓNICO */}
          <div className="bg-white/5 border border-white/10 rounded-[40px] p-8 flex flex-col items-center justify-start gap-4 hover:border-gold/50 transition-all group relative">
            <button 
              onClick={() => toggleExpand('phone')}
              className="flex flex-col items-center gap-4 w-full outline-none"
            >
              <div className="bg-navy text-white w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform border border-white/10">
                <span className="material-icons text-3xl">call</span>
              </div>
              <span className="text-white font-bold text-xs uppercase tracking-widest">Contacto Telefónico</span>
              <span className={`material-icons text-gold text-sm transition-transform ${expanded === 'phone' ? 'rotate-180' : ''}`}>expand_more</span>
            </button>
            
            {expanded === 'phone' && (
              <div className="mt-2 p-6 bg-white/5 rounded-3xl w-full animate-in zoom-in duration-300 flex flex-col items-center gap-4 border border-white/10 shadow-inner">
                <a href="tel:+34633130637" className="text-white font-serif text-2xl font-bold hover:text-gold transition-colors">633 13 06 37</a>
                <button 
                  onClick={() => handleCopy('633130637', 'phone')}
                  className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full text-[10px] font-black uppercase tracking-widest text-gold hover:bg-gold hover:text-navy transition-all border border-gold/30"
                >
                  <span className="material-icons text-xs">{copied === 'phone' ? 'check' : 'content_copy'}</span>
                  {copied === 'phone' ? '¡Copiado!' : 'Copiar número'}
                </button>
              </div>
            )}
          </div>

          {/* 2. CORREO ELECTRÓNICO (MISMO COMPORTAMIENTO) */}
          <div className="bg-white/5 border border-white/10 rounded-[40px] p-8 flex flex-col items-center justify-start gap-4 hover:border-gold/50 transition-all group relative">
            <button 
              onClick={() => toggleExpand('email')}
              className="flex flex-col items-center gap-4 w-full outline-none"
            >
              <div className="bg-gold text-navy w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <span className="material-icons text-3xl">mail</span>
              </div>
              <span className="text-white font-bold text-xs uppercase tracking-widest">Correo Electrónico</span>
              <span className={`material-icons text-gold text-sm transition-transform ${expanded === 'email' ? 'rotate-180' : ''}`}>expand_more</span>
            </button>
            
            {expanded === 'email' && (
              <div className="mt-2 p-6 bg-white/5 rounded-3xl w-full animate-in zoom-in duration-300 flex flex-col items-center gap-4 border border-white/10 shadow-inner">
                <a href="mailto:paco-vila@hotmail.com" className="text-slate-200 font-serif text-sm md:text-base font-bold hover:text-gold transition-colors break-all">paco-vila@hotmail.com</a>
                <button 
                  onClick={() => handleCopy('paco-vila@hotmail.com', 'email')}
                  className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full text-[10px] font-black uppercase tracking-widest text-gold hover:bg-gold hover:text-navy transition-all border border-gold/30"
                >
                  <span className="material-icons text-xs">{copied === 'email' ? 'check' : 'content_copy'}</span>
                  {copied === 'email' ? '¡Copiado!' : 'Copiar Email'}
                </button>
              </div>
            )}
          </div>

          {/* 3. WHATSAPP */}
          <a 
            href="https://wa.me/34633130637"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/5 border border-white/10 rounded-[40px] p-8 flex flex-col items-center justify-center gap-4 hover:border-[#25D366]/50 transition-all group"
          >
            <div className="bg-[#25D366] text-white w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
              <span className="material-icons text-3xl">chat</span>
            </div>
            <span className="text-white font-bold text-xs uppercase tracking-widest">WhatsApp Directo</span>
          </a>

          {/* 4. LINKEDIN */}
          <a 
            href="https://www.linkedin.com/in/franciscovilafalgas/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/5 border border-white/10 rounded-[40px] p-8 flex flex-col items-center justify-center gap-4 hover:border-[#0077b5]/50 transition-all group"
          >
            <div className="bg-[#0077b5] text-white w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
              <span className="material-icons text-3xl">work</span>
            </div>
            <span className="text-white font-bold text-xs uppercase tracking-widest">Perfil Profesional</span>
          </a>

          {/* 5. FACEBOOK */}
          <a 
            href="https://www.facebook.com/NOVAGUITARRA"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/5 border border-white/10 rounded-[40px] p-8 flex flex-col items-center justify-center gap-4 hover:border-[#1877F2]/50 transition-all group lg:col-span-2"
          >
            <div className="flex items-center gap-6">
              <div className="bg-[#1877F2] text-white w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <span className="material-icons text-3xl">facebook</span>
              </div>
              <div className="text-left">
                <span className="text-white font-bold text-xs uppercase tracking-widest block">Comunidad Novaguitarra</span>
                <span className="text-slate-400 text-[10px] uppercase tracking-[0.2em]">Más testimonios y videos</span>
              </div>
            </div>
          </a>
        </div>
        
        <div className="pt-16 text-slate-500 text-sm">
           <div className="inline-flex items-center gap-6 px-8 py-3 bg-white/5 border border-white/10 rounded-full">
             <p className="flex items-center gap-2">
               <span className="material-icons text-xs text-gold">location_on</span>
               Oliva
             </p>
             <div className="w-1 h-1 bg-gold rounded-full"></div>
             <p className="flex items-center gap-2">
               <span className="material-icons text-xs text-gold">location_on</span>
               Rafelbuñol
             </p>
             <div className="w-1 h-1 bg-gold rounded-full"></div>
             <p className="flex items-center gap-2 text-white/80 font-bold">
               <span className="material-icons text-xs text-gold">videocam</span>
               Formación Online
             </p>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
