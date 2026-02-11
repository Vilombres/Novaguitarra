
import React from 'react';
import { EducationItem } from '../types';

const Experience: React.FC = () => {
  const trajectory: EducationItem[] = [
    {
      institution: 'UCV - Fundación Edetania',
      degree: 'Diplomado en Educación Musical',
      period: '2000 - 2004',
      description: 'Formación pedagógica específica para la enseñanza reglada, didáctica musical y psicología del aprendizaje.',
      icon: 'history_edu'
    },
    {
      institution: 'CSM Joaquín Rodrigo (Valencia)',
      degree: 'Grado Superior en Interpretación (Clásica)',
      period: '2013 - 2020',
      description: '240 ECTS. Alta especialización técnica aplicada a la docencia de nivel profesional y superior.',
      icon: 'school'
    },
    {
      institution: 'Instituto Superior de Arte (La Habana)',
      degree: 'Perfeccionamiento Musical',
      period: '2006 - 2007',
      description: 'Especialización rítmica y técnica en Cuba, integrando pedagogías alternativas y folclore.',
      icon: 'public'
    },
    {
      institution: 'Consv. Profesional de Valencia',
      degree: 'Grado Profesional (Eléctrica)',
      period: '2024 - Act.',
      description: 'Ampliación metodológica para la enseñanza de estilos modernos (Jazz/Rock/Blues).',
      icon: 'electric_guitar'
    }
  ];

  const teachingExp = [
    { 
      role: 'Director y Maestro de Música', 
      org: 'Escuela de Adultos (FPA La Pobla de Farnals)', 
      years: '2015 - 2023',
      desc: 'Liderazgo pedagógico y gestión de aula para adultos, adaptando la metodología a diferentes ritmos de aprendizaje.'
    },
    { 
      role: 'Profesor de ESO y Primaria', 
      org: 'Generalitat Valenciana (Centros Públicos)', 
      years: '2023 - 2024',
      desc: 'Docencia en el sistema reglado, aplicación de programaciones didácticas oficiales y gestión de grupos heterogéneos.'
    },
    { 
      role: 'Fundador y Docente Principal', 
      org: 'Novaguitarra Academy', 
      years: '2001 - Presente',
      desc: 'Desarrollo de una metodología propia de alto rendimiento aplicada a clases individuales y grupales.'
    }
  ];

  const skills = [
    { name: 'Pedagogía & Didáctica Musical', value: 99 },
    { name: 'Metodología Adaptativa (Adultos/Niños)', value: 97 },
    { name: 'Análisis y Teoría Musical', value: 95 },
    { name: 'Software de Edición (Sibelius/Finale)', value: 92 }
  ];

  return (
    <section className="bg-white text-navy pt-32 pb-48 px-8 min-h-screen">
      <div className="max-w-6xl mx-auto space-y-24">
        {/* Foto de perfil con la imagen proporcionada (playa) */}
        <div className="flex flex-col items-center text-center space-y-8">
          <div className="relative">
             <div className="absolute inset-0 bg-gold rounded-full blur-3xl opacity-20 scale-125"></div>
             <img 
               src="input_file_0.png" 
               alt="Francisco Vila Falgás - Maestro de Guitarra"
               className="w-64 h-64 rounded-[40px] border-[8px] border-white shadow-2xl object-cover relative z-10"
             />
             <div className="absolute -bottom-4 -right-4 bg-navy text-gold p-4 rounded-2xl border-4 border-white shadow-2xl z-20">
                <span className="material-icons text-2xl">verified</span>
             </div>
          </div>
          <div className="space-y-4 max-w-2xl">
            <h2 className="text-5xl font-serif font-bold italic tracking-tight">Francisco Vila Falgás</h2>
            <p className="text-gold font-black tracking-[0.4em] uppercase text-xs">Especialista en Docencia Musical · Trayectoria Académica</p>
            <p className="text-slate-500 text-sm leading-relaxed font-medium italic">
              "Mi enfoque prioritario es la pedagogía: transformar la complejidad de la técnica musical en un lenguaje accesible y motivador para cada alumno."
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-16">
            <div className="space-y-8">
              <h3 className="font-serif font-bold text-3xl flex items-center gap-4">
                <span className="w-1.5 h-10 bg-gold rounded-full"></span>
                Trayectoria Pedagógica
              </h3>
              <div className="space-y-6">
                {teachingExp.map((exp, i) => (
                  <div key={i} className="bg-slate-50 p-8 rounded-[32px] border border-slate-100 group hover:border-gold/30 transition-all">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h4 className="font-bold text-xl text-navy group-hover:text-gold transition-colors">{exp.role}</h4>
                        <p className="text-navy/60 font-medium text-sm">{exp.org}</p>
                      </div>
                      <span className="text-[10px] font-black bg-navy text-white px-4 py-1.5 rounded-full">{exp.years}</span>
                    </div>
                    <p className="text-slate-500 text-sm leading-relaxed border-t border-slate-200 pt-4">
                      {exp.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-8">
              <h3 className="font-serif font-bold text-3xl flex items-center gap-4">
                <span className="w-1.5 h-10 bg-gold rounded-full"></span>
                Competencias Docentes
              </h3>
              <div className="space-y-6">
                {skills.map((skill, idx) => (
                  <div key={idx} className="space-y-2">
                    <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest">
                      <span>{skill.name}</span>
                      <span className="text-gold">{skill.value}%</span>
                    </div>
                    <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                      <div className="h-full bg-gold rounded-full" style={{ width: `${skill.value}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-12">
            <h3 className="font-serif font-bold text-3xl flex items-center gap-4">
              <span className="w-1.5 h-10 bg-gold/30 rounded-full"></span>
              Formación Académica
            </h3>
            <div className="relative pl-8 border-l border-slate-100 space-y-10">
              {trajectory.map((item, idx) => (
                <div key={idx} className="relative">
                  <div className="absolute -left-[41px] top-1 w-6 h-6 rounded-full bg-white border-2 border-gold flex items-center justify-center">
                     <span className="material-icons text-[10px] text-gold">{item.icon}</span>
                  </div>
                  <div className="space-y-1">
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{item.period}</span>
                    <h4 className="font-bold text-xl text-navy">{item.institution}</h4>
                    <p className="text-gold font-bold text-sm">{item.degree}</p>
                    <p className="text-sm text-slate-500 mt-2 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
