
import React, { useState } from 'react';
import { ViewState } from '../types';

interface NavbarProps {
  setView: (view: ViewState) => void;
  currentView: ViewState;
}

const Navbar: React.FC<NavbarProps> = ({ setView, currentView }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Inicio', view: 'home' as const },
    { label: 'Perfil & Experiencia', view: 'experience' as const },
    { label: 'Administrar Opiniones', view: 'admin' as const },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] p-6 pointer-events-none">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="bg-navy/40 backdrop-blur-md border border-white/10 px-6 py-2 rounded-full pointer-events-auto shadow-xl">
          <button 
            onClick={() => setView('home')}
            className="text-white font-black tracking-[0.2em] uppercase text-xs"
          >
            Novaguitarra
          </button>
        </div>

        <div className="flex gap-4 pointer-events-auto">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="bg-navy/40 backdrop-blur-md border border-white/10 p-2 rounded-full text-white shadow-xl flex items-center justify-center"
          >
            <span className="material-icons">{isOpen ? 'close' : 'menu'}</span>
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="absolute top-24 right-6 w-64 bg-navy border border-white/10 rounded-2xl shadow-2xl p-4 pointer-events-auto animate-in fade-in zoom-in duration-200">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => {
                  setView(item.view);
                  setIsOpen(false);
                }}
                className={`text-left px-4 py-3 rounded-xl transition-colors font-medium ${
                  currentView === item.view ? 'bg-gold text-navy' : 'text-slate-300 hover:bg-white/5'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
