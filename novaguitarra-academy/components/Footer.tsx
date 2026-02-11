
import React, { useState } from 'react';

const Footer: React.FC = () => {
  const [modal, setModal] = useState<'legal' | 'privacy' | null>(null);

  const LegalContent = () => (
    <div className="space-y-6 text-slate-300 text-sm leading-relaxed max-h-[60vh] overflow-y-auto pr-4">
      <h4 className="text-gold font-bold uppercase tracking-widest text-xs">Aviso Legal</h4>
      <p>En cumplimiento con el deber de información recogido en artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y del Comercio Electrónico, a continuación se reflejan los siguientes datos:</p>
      <p>Titular: Francisco Vila Falgás. Contacto: paco-vila@hotmail.com. El acceso y/o uso de este portal de Novaguitarra atribuye la condición de USUARIO, que acepta, desde dicho acceso y/o uso, las Condiciones Generales de Uso aquí reflejadas.</p>
      <p>Novaguitarra se reserva el derecho de efectuar sin previo aviso las modificaciones que considere oportunas en su portal, pudiendo cambiar, suprimir o añadir tanto los contenidos y servicios que se presten a través de la misma como la forma en la que éstos aparezcan presentados o localizados.</p>
    </div>
  );

  const PrivacyContent = () => (
    <div className="space-y-6 text-slate-300 text-sm leading-relaxed max-h-[60vh] overflow-y-auto pr-4">
      <h4 className="text-gold font-bold uppercase tracking-widest text-xs">Política de Privacidad</h4>
      <p>Francisco Vila Falgás informa a los usuarios del sitio web sobre su política respecto del tratamiento y protección de los datos de carácter personal de los usuarios y clientes que puedan ser recabados por la navegación o contratación de servicios a través de su sitio web.</p>
      <p>En este sentido, garantiza el cumplimiento de la normativa vigente en materia de protección de datos personales, reflejada en la Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y garantía de los derechos digitales (LOPDGDD). Cumple también con el Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo de 27 de abril de 2016 relativo a la protección de las personas físicas (RGPD).</p>
      <p>Los datos recogidos a través del formulario de reserva solo serán utilizados para la gestión de las clases y comunicación directa con el interesado.</p>
    </div>
  );

  return (
    <footer className="bg-navy-950 border-t border-white/5 py-12 px-8 relative">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-center md:text-left space-y-1">
           <p className="text-slate-400 text-xs font-medium tracking-wide">Novaguitarra · Formación Musical Profesional © 2000</p>
           <h3 className="text-white font-black uppercase tracking-[0.3em] text-sm">Francisco Vila Falgás</h3>
        </div>
        
        <div className="flex gap-8">
          <button onClick={() => setModal('legal')} className="text-slate-400 hover:text-white transition-colors text-[10px] font-bold uppercase tracking-widest">Aviso Legal</button>
          <button onClick={() => setModal('privacy')} className="text-slate-400 hover:text-white transition-colors text-[10px] font-bold uppercase tracking-widest">Privacidad</button>
          <span className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">Valencia, España</span>
        </div>
      </div>

      {modal && (
        <div className="fixed inset-0 z-[300] bg-navy/90 backdrop-blur-md flex items-center justify-center p-6">
          <div className="bg-navy border border-white/10 p-10 rounded-[40px] max-w-2xl w-full shadow-2xl relative">
            <button onClick={() => setModal(null)} className="absolute top-6 right-6 text-slate-500 hover:text-white transition-colors">
              <span className="material-icons">close</span>
            </button>
            {modal === 'legal' ? <LegalContent /> : <PrivacyContent />}
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;
