
import React, { useState } from 'react';

interface ModalitiesProps {
  onOpenBooking: () => void;
}

const Modalities: React.FC<ModalitiesProps> = ({ onOpenBooking }) => {
  const [activeSubject, setActiveSubject] = useState<number | null>(null);

  const sections = [
    {
      title: 'Clases Individuales',
      subtitle: 'Atención 100% personalizada',
      description: 'La modalidad más efectiva para un avance sólido. Adaptada a tus objetivos específicos.',
      items: ['Bono Mes 4 (1h semanal)', 'Bono Mes 6 (1.5h semanal)', 'Bono Mes 8 (2h semanal)', 'Bono a Medida (clases sueltas)'],
      icon: 'person'
    },
    {
      title: 'Clases Grupales',
      subtitle: 'Aprendizaje colaborativo',
      description: 'Grupos reducidos formados por conocidos o amigos. Una forma amena y social de aprender.',
      items: ['Grupos de 2 personas', 'Grupos de 3 personas', 'Grupos de 4 o más personas', 'Bono Grupo a Medida'],
      icon: 'groups'
    },
    {
      title: 'Modalidad Tutorizada',
      subtitle: 'Especial para menores',
      description: 'Clases diseñadas para niños con el acompañamiento activo de un adulto-tutor.',
      items: ['Bono Mes Tutorizado', 'Bono a Medida Tutorizado', 'Sesiones de 45 min a 1 hora', 'Seguimiento pedagógico'],
      icon: 'family_restroom'
    }
  ];

  const subjects = [
    { name: 'Guitarra', desc: 'Perfeccionamiento de la técnica en sus vertientes clásica y moderna, enfocada a la ergonomía y sonoridad.', icon: 'album' },
    { name: 'Pruebas de Acceso', desc: 'Preparación intensiva para superar con éxito las pruebas de grado elemental, profesional y superior.', icon: 'auto_stories' },
    { name: 'Lenguaje Musical', desc: 'Comprensión del código musical, lectura a vista y desarrollo del oído interno.', icon: 'menu_book' },
    { name: 'Teoría Musical', desc: 'Estudio profundo de las leyes que rigen la música: intervalos, escalas y estructuras tonales.', icon: 'psychology' },
    { name: 'Análisis', desc: 'Desglose formal y estructural de las obras para una interpretación consciente e inteligente.', icon: 'analytics' },
    { name: 'Armonía', desc: 'Tanto clásica como moderna, aplicada al instrumento para el arreglo y la composición.', icon: 'blur_on' },
    { name: 'Diversidad de estilos', desc: 'Exploración de géneros: desde el Renacimiento hasta el Rock, Jazz y Blues contemporáneo.', icon: 'library_music' }
  ];

  return (
    <section className="bg-white text-navy py-24 px-8 border-y border-slate-100">
      <div className="max-w-6xl mx-auto space-y-24">
        <div className="text-center space-y-4">
          <span className="text-gold font-black uppercase tracking-[0.4em] text-[10px]">Estructura Académica</span>
          <h2 className="text-4xl md:text-6xl font-serif font-bold italic">Planes de Formación</h2>
          <p className="text-slate-500 max-w-2xl mx-auto">Novaguitarra ofrece una estructura de bonos flexible diseñada para adaptarse a tu ritmo de vida y metas musicales.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {sections.map((section, idx) => (
            <div key={idx} className="bg-slate-50 p-10 rounded-[40px] border border-slate-100 flex flex-col justify-between hover:shadow-xl transition-shadow group">
              <div className="space-y-6">
                <div className="w-14 h-14 bg-navy text-gold rounded-2xl flex items-center justify-center group-hover:rotate-6 transition-transform">
                  <span className="material-icons text-3xl">{section.icon}</span>
                </div>
                <div>
                  <h3 className="text-2xl font-serif font-bold">{section.title}</h3>
                  <p className="text-gold text-[10px] font-black uppercase tracking-widest mt-1">{section.subtitle}</p>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed">{section.description}</p>
                <ul className="space-y-3 pt-4">
                  {section.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm font-medium text-navy/80">
                      <span className="material-icons text-gold text-sm">check_circle_outline</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* ICONIC SUBJECTS GRID (RESTORED VERSION) */}
        <div className="pt-20 border-t border-slate-100">
          <div className="text-center mb-16 space-y-4">
            <h3 className="text-xs font-black uppercase tracking-[0.5em] text-slate-400">Asignaturas y Especialidades</h3>
            <p className="text-navy font-serif italic text-3xl font-bold">Un enfoque integral del músico</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 md:gap-6">
            {subjects.map((sub, idx) => (
              <button 
                key={idx} 
                onClick={() => setActiveSubject(activeSubject === idx ? null : idx)}
                className={`flex flex-col items-center gap-4 p-8 rounded-[2.5rem] transition-all duration-500 border group ${
                  activeSubject === idx 
                  ? 'bg-navy text-gold border-navy shadow-[0_20px_40px_-10px_rgba(11,17,32,0.3)] scale-110 z-10' 
                  : 'bg-white text-slate-400 border-slate-100 hover:border-gold/30 hover:text-navy hover:-translate-y-2'
                }`}
              >
                <span className={`material-icons text-4xl transition-all duration-500 ${activeSubject === idx ? 'scale-110' : 'group-hover:scale-110'}`}>
                  {sub.icon}
                </span>
                <span className="text-[9px] font-black uppercase tracking-[0.2em] text-center leading-tight">
                  {sub.name}
                </span>
              </button>
            ))}
          </div>

          {/* DYNAMIC DESCRIPTION BOX */}
          <div className="mt-16 min-h-[140px] relative">
            {activeSubject !== null ? (
              <div className="max-w-4xl mx-auto bg-slate-50 border border-slate-100 p-10 rounded-[3rem] text-center animate-in zoom-in slide-in-from-top-4 duration-700 relative overflow-hidden group shadow-inner">
                <div className="absolute top-0 left-0 w-2 h-full bg-gold"></div>
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-gold/5 rounded-full blur-3xl"></div>
                
                <div className="relative space-y-4">
                  <div className="flex items-center justify-center gap-2 text-gold mb-2">
                    <span className="material-icons text-sm">auto_awesome</span>
                    <span className="text-[10px] font-black uppercase tracking-[0.4em]">{subjects[activeSubject].name}</span>
                    <span className="material-icons text-sm">auto_awesome</span>
                  </div>
                  <p className="text-navy font-serif text-xl md:text-2xl italic leading-relaxed px-6">
                    "{subjects[activeSubject].desc}"
                  </p>
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center gap-4 opacity-30 grayscale transition-all hover:opacity-50">
                <div className="w-16 h-16 rounded-full border-2 border-dashed border-navy flex items-center justify-center animate-spin-slow">
                   <span className="material-icons text-navy text-2xl">ads_click</span>
                </div>
                <p className="text-[10px] font-black uppercase tracking-[0.4em] text-navy">Pulsa en una especialidad para ver el programa</p>
              </div>
            )}
          </div>
        </div>

        <div className="bg-navy p-12 rounded-[4rem] text-white flex flex-col md:flex-row items-center justify-between gap-10 relative overflow-hidden group shadow-2xl">
           <div className="absolute inset-0 bg-gradient-to-br from-gold/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
           <div className="space-y-3 text-center md:text-left relative z-10">
             <div className="flex items-center justify-center md:justify-start gap-3">
               <span className="w-2 h-2 bg-gold rounded-full animate-pulse"></span>
               <h4 className="text-2xl font-serif font-bold italic text-gold">Condiciones Flexibles</h4>
             </div>
             <p className="text-slate-400 text-sm md:text-base max-w-md">Nuestra metodología se adapta a ti. Cambios y cancelaciones con 24h. Clases siempre recuperables.</p>
           </div>
           <button 
            onClick={onOpenBooking}
            className="bg-white text-navy px-10 py-5 rounded-full font-black uppercase text-xs tracking-[0.2em] hover:bg-gold transition-all relative z-10 hover:shadow-[0_20px_40px_rgba(212,175,55,0.4)] hover:scale-105 active:scale-95"
           >
             Consultar disponibilidad
           </button>
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}} />
    </section>
  );
};

export default Modalities;
