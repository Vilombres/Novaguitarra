
import React from 'react';
import { ViewState } from '../types';

interface HeroProps {
  setView: (view: ViewState) => void;
  onOpenBooking: () => void;
}

const Hero: React.FC<HeroProps> = ({ setView, onOpenBooking }) => {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden flex flex-col justify-end">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&q=80&w=2070" 
          alt="Maestro de Guitarra"
          className="w-full h-full object-cover object-center scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/60 to-transparent"></div>
      </div>

      <div className="relative z-10 p-8 md:p-16 mb-20 max-w-4xl mx-auto w-full text-center md:text-left">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold/30 border border-gold/50 backdrop-blur-md rounded-full">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-gold"></span>
            </span>
            <span className="text-white text-[10px] font-black tracking-[0.3em] uppercase">
              Francisco Vila Falgás · Formación Profesional
            </span>
          </div>
          
          <h1 className="text-5xl md:text-8xl font-serif font-bold text-white leading-none tracking-tight">
            Maestría en las <span className="text-gold italic">seis cuerdas</span>.
          </h1>
          
          <p className="text-slate-100 text-lg md:text-2xl max-w-2xl leading-relaxed font-medium drop-shadow-2xl">
            Más de 20 años de trayectoria pedagógica avalan una metodología diseñada para resultados reales. Clásica, Eléctrica y Armonía.
          </p>
          
          <div className="pt-10 flex flex-col md:flex-row gap-6 justify-center md:justify-start">
            <button 
              onClick={onOpenBooking}
              className="bg-gold text-navy px-10 py-5 rounded-full font-bold text-lg hover:bg-white transition-all shadow-2xl flex items-center justify-center gap-4 group"
            >
              Reserva tu plaza
              <span className="material-icons group-hover:translate-x-1 transition-transform">bolt</span>
            </button>
            
            <button 
              onClick={() => setView('experience')}
              className="bg-navy/60 backdrop-blur-md border border-white/30 text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-white/20 transition-all flex items-center justify-center gap-4"
            >
              Ver currículum
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
