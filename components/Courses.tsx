
import React from 'react';

interface CoursesProps {
  onOpenBooking: () => void;
}

const Courses: React.FC<CoursesProps> = ({ onOpenBooking }) => {
  const courses = [
    {
      title: 'Fundación',
      level: 'Nivel Iniciación',
      features: ['Postura y Biomecánica', 'Lectura Rítmica', 'Acordes Fundamentales'],
      icon: 'music_note',
      img: 'https://images.unsplash.com/photo-1525201548942-d8732f6617a0?auto=format&fit=crop&q=80&w=800'
    },
    {
      title: 'Interpretación',
      level: 'Nivel Intermedio',
      features: ['Modos Griegos', 'Improvisación Blues/Jazz', 'Técnicas de Expresión'],
      icon: 'music_video',
      img: 'https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&q=80&w=800'
    },
    {
      title: 'Maestría',
      level: 'Nivel Profesional',
      features: ['Armonía Contemporánea', 'Composición Avanzada', 'Preparación Exámenes RGT'],
      icon: 'stars',
      img: 'https://images.unsplash.com/photo-1445985337337-41505ae38755?auto=format&fit=crop&q=80&w=800'
    }
  ];

  return (
    <section className="bg-navy py-24 px-8 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-[120px]"></div>
      
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-baseline gap-4 mb-16">
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-white italic">Nuestra Oferta</h2>
          <span className="text-gold font-black uppercase tracking-[0.3em] text-[10px]">Especialización Docente</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {courses.map((course, idx) => (
            <div 
              key={idx}
              className="group bg-white/5 border border-white/10 rounded-[40px] hover:border-gold/30 transition-all duration-500 overflow-hidden flex flex-col"
            >
              <div className="h-56 overflow-hidden relative">
                <img src={course.img} alt={course.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 opacity-60 group-hover:opacity-100" />
                <div className="absolute inset-0 bg-navy/40 group-hover:bg-transparent transition-colors"></div>
                <div className="absolute bottom-4 left-6 bg-gold text-navy p-3 rounded-2xl shadow-xl">
                  <span className="material-icons">{course.icon}</span>
                </div>
              </div>
              
              <div className="p-8 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-serif font-bold text-white mb-1">{course.title}</h3>
                  <p className="text-gold text-[10px] uppercase font-bold tracking-widest mb-6">{course.level}</p>
                  
                  <ul className="space-y-3 mb-8">
                    {course.features.map((f, i) => (
                      <li key={i} className="flex items-center gap-3 text-slate-400 text-sm">
                        <span className="w-1.5 h-1.5 bg-gold rounded-full"></span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>

                <button 
                  onClick={onOpenBooking}
                  className="w-full py-4 border border-white/10 rounded-2xl text-white font-bold text-xs uppercase tracking-widest hover:bg-gold hover:text-navy transition-all"
                >
                  Consultar plazas
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
