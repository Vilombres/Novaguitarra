
import React, { useState } from 'react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [selectedPlan, setSelectedPlan] = useState('');
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });

  if (!isOpen) return null;

  const plans = [
    { id: 'individual', name: 'Bono Individual', desc: 'Modalidad personalizada (4, 6 u 8 horas).', type: 'Mensual' },
    { id: 'grupal', name: 'Bono Grupal', desc: 'Aprendizaje compartido (2-4+ personas).', type: 'Mensual' },
    { id: 'tutorizada', name: 'Bono Tutorizado', desc: 'Para menores con acompañamiento.', type: 'Especial' },
    { id: 'medida', name: 'Bono a Medida', desc: 'Flexibilidad total horaria.', type: 'Personalizado' }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const planName = plans.find(p => p.id === selectedPlan)?.name || selectedPlan;
    const subject = encodeURIComponent(`Nueva solicitud de reserva Novaguitarra - ${planName}`);
    const body = encodeURIComponent(
      `Hola Francisco,\n\nHe recibido una nueva solicitud de reserva a través de la web:\n\n` +
      `Nombre: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Teléfono: ${formData.phone}\n` +
      `Modalidad interesada: ${planName}\n\n` +
      `Por favor, contacta con el alumno para formalizar la reserva.`
    );
    
    // Abrir el gestor de correo predeterminado
    window.location.href = `mailto:paco-vila@hotmail.com?subject=${subject}&body=${body}`;
    
    alert('Se ha generado tu solicitud. Por favor, pulsa "Enviar" en tu gestor de correo para que Francisco Vila reciba tus datos.');
    onClose();
    setStep(1);
    setSelectedPlan('');
    setFormData({ name: '', email: '', phone: '' });
  };

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-8 bg-navy/95 backdrop-blur-xl animate-in fade-in duration-300">
      <div className="bg-white rounded-[40px] w-full max-w-2xl overflow-hidden shadow-[0_0_100px_rgba(212,175,55,0.2)] flex flex-col md:flex-row min-h-[500px]">
        {/* Sidebar Info */}
        <div className="bg-navy p-10 md:w-1/3 text-white flex flex-col justify-between border-r border-gold/10">
          <div>
            <h3 className="text-gold font-black uppercase tracking-[0.3em] text-[10px] mb-2">Novaguitarra</h3>
            <p className="font-serif text-3xl font-bold leading-tight">Tu plaza en buenas manos.</p>
          </div>
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-slate-400 text-xs">
              <span className="material-icons text-gold text-sm">auto_awesome</span>
              Metodología Adaptada
            </div>
            <div className="flex items-center gap-3 text-slate-400 text-xs">
              <span className="material-icons text-gold text-sm">event</span>
              Recuperación Garantizada de 1 clase mensual
            </div>
            <div className="flex items-center gap-3 text-slate-400 text-xs">
              <span className="material-icons text-gold text-sm">laptop_mac</span>
              Apoyo Multi-plataforma
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="p-10 flex-1 relative bg-slate-50">
          <button 
            onClick={onClose}
            className="absolute top-6 right-6 text-slate-400 hover:text-navy transition-colors"
          >
            <span className="material-icons">close</span>
          </button>

          {step === 1 ? (
            <div className="space-y-8 animate-in slide-in-from-right-4 duration-300">
              <header>
                <h2 className="text-navy text-2xl font-serif font-bold">Reserva tu plaza</h2>
                <p className="text-slate-500 text-sm mt-1">Selecciona la modalidad de bono que te interesa.</p>
              </header>

              <div className="space-y-3">
                {plans.map((plan) => (
                  <button
                    key={plan.id}
                    onClick={() => setSelectedPlan(plan.id)}
                    className={`w-full p-4 rounded-2xl border-2 text-left transition-all flex justify-between items-center group ${
                      selectedPlan === plan.id ? 'border-gold bg-white shadow-xl' : 'border-slate-200 hover:border-slate-300 bg-white/50'
                    }`}
                  >
                    <div>
                      <h4 className="font-bold text-navy">{plan.name}</h4>
                      <p className="text-slate-400 text-[10px]">{plan.desc}</p>
                    </div>
                    <div className="text-right">
                      <span className="block font-black text-gold text-[10px] uppercase tracking-tighter">{plan.type}</span>
                    </div>
                  </button>
                ))}
              </div>

              <button 
                disabled={!selectedPlan}
                onClick={() => setStep(2)}
                className="w-full bg-navy text-white py-4 rounded-2xl font-bold uppercase tracking-widest text-xs disabled:opacity-50 hover:bg-gold hover:text-navy transition-all"
              >
                Continuar
              </button>
            </div>
          ) : (
            <div className="space-y-8 animate-in slide-in-from-right-4 duration-300">
              <header>
                <button onClick={() => setStep(1)} className="text-slate-400 flex items-center gap-2 text-xs font-bold mb-4 uppercase tracking-widest hover:text-navy">
                  <span className="material-icons text-sm">arrow_back</span> Atrás
                </button>
                <h2 className="text-navy text-2xl font-serif font-bold">Datos de contacto</h2>
                <p className="text-slate-500 text-sm mt-1">Se enviará una solicitud a Francisco Vila.</p>
              </header>

              <form className="space-y-4" onSubmit={handleSubmit}>
                <input 
                  required 
                  className="w-full bg-white border border-slate-200 p-4 rounded-xl outline-none focus:border-gold" 
                  placeholder="Nombre completo" 
                  value={formData.name}
                  onChange={e => setFormData({...formData, name: e.target.value})}
                />
                <input 
                  required 
                  type="email" 
                  className="w-full bg-white border border-slate-200 p-4 rounded-xl outline-none focus:border-gold" 
                  placeholder="Email" 
                  value={formData.email}
                  onChange={e => setFormData({...formData, email: e.target.value})}
                />
                <input 
                  required 
                  type="tel" 
                  className="w-full bg-white border border-slate-200 p-4 rounded-xl outline-none focus:border-gold" 
                  placeholder="Teléfono" 
                  value={formData.phone}
                  onChange={e => setFormData({...formData, phone: e.target.value})}
                />
                
                <button 
                  type="submit"
                  className="w-full bg-gold text-navy py-4 rounded-2xl font-bold uppercase tracking-widest text-xs shadow-xl hover:scale-[1.02] transition-transform"
                >
                  Enviar solicitud de reserva
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
