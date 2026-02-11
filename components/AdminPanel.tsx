
import React from 'react';
import { Review } from '../types';

interface AdminPanelProps {
  reviews: Review[];
  onApprove: (id: string) => void;
  onDelete: (id: string) => void;
}

const AdminPanel: React.FC<AdminPanelProps> = ({ reviews, onApprove, onDelete }) => {
  const pending = reviews.filter(r => r.status === 'pending');
  const approved = reviews.filter(r => r.status === 'approved');

  return (
    <section className="bg-slate-50 text-navy pt-32 pb-48 px-8 min-h-screen">
      <div className="max-w-4xl mx-auto space-y-12">
        <header className="flex justify-between items-center">
          <div>
            <h2 className="text-4xl font-serif font-bold italic">Panel de Control</h2>
            <p className="text-slate-500 mt-2">Gestiona las opiniones de tus alumnos sobre Novaguitarra.</p>
          </div>
          <div className="bg-navy text-white px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest">
            {pending.length} Pendientes
          </div>
        </header>

        <div className="space-y-6">
          <h3 className="font-bold uppercase tracking-widest text-xs text-slate-400 border-b border-slate-200 pb-2">Pendientes de Validación</h3>
          {pending.length === 0 ? (
            <p className="text-slate-400 italic text-sm">No hay opiniones pendientes por ahora.</p>
          ) : (
            pending.map(r => (
              <div key={r.id} className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 flex flex-col md:flex-row justify-between gap-6">
                <div className="flex-1 space-y-4">
                  <div className="flex items-center gap-4">
                    <img src={r.avatar} className="w-10 h-10 rounded-full border border-gold" alt="" />
                    <div>
                      <h4 className="font-bold text-navy">{r.author}</h4>
                      <p className="text-slate-400 text-[10px] font-bold uppercase">{r.role} • {r.date}</p>
                    </div>
                  </div>
                  <p className="text-slate-600 italic text-sm">"{r.content}"</p>
                </div>
                <div className="flex md:flex-col gap-2 justify-end">
                   <button 
                     onClick={() => onApprove(r.id)}
                     className="bg-green-600 text-white px-6 py-2 rounded-xl font-bold text-xs uppercase flex items-center gap-2 hover:bg-green-700 transition-colors"
                   >
                     <span className="material-icons text-sm">check_circle</span>
                     Validar
                   </button>
                   <button 
                     onClick={() => onDelete(r.id)}
                     className="bg-red-50 text-red-600 px-6 py-2 rounded-xl font-bold text-xs uppercase flex items-center gap-2 hover:bg-red-100 transition-colors"
                   >
                     <span className="material-icons text-sm">delete</span>
                     Rechazar
                   </button>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="space-y-6 pt-12">
          <h3 className="font-bold uppercase tracking-widest text-xs text-slate-400 border-b border-slate-200 pb-2">Ya publicadas</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {approved.map(r => (
              <div key={r.id} className="bg-slate-100/50 p-4 rounded-2xl flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                   <img src={r.avatar} className="w-8 h-8 rounded-full grayscale opacity-50" alt="" />
                   <div>
                     <p className="font-bold text-xs text-navy">{r.author}</p>
                     <p className="text-[9px] text-slate-400 uppercase font-black">{r.date}</p>
                   </div>
                </div>
                <button onClick={() => onDelete(r.id)} className="text-slate-300 hover:text-red-500 transition-colors">
                  <span className="material-icons text-lg">close</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdminPanel;
