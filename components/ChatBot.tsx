
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'model'; text: string }[]>([
    { role: 'model', text: '¡Hola! Soy el asistente de Novaguitarra. Puedo informarte sobre la academia, los planes de estudio y la trayectoria académica del profesor. ¿En qué puedo ayudarte hoy?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: [...messages, { role: 'user', text: userMessage }].map(m => ({
          parts: [{ text: m.text }],
          role: m.role
        })),
        config: {
          systemInstruction: `Eres el asistente informativo EXCLUSIVO de Novaguitarra Academy. 
          TU MISIÓN: Ayudar a los usuarios con información sobre la academia, no enseñar música.

          REGLAS DE IDENTIDAD Y COMUNICACIÓN:
          1. PROHIBIDO usar el nombre propio del titular. Refiérete a él siempre como "el profesor", "el docente", "el formador" o "el director de la academia".
          2. NO des consejos de técnica, no expliques acordes, no des lecciones de teoría ni enseñes a tocar. 
          3. Si te preguntan algo técnico o formativo (ej: "¿Cómo se hace un vibrato?"), responde: "Como asistente informativo, mi labor es orientarte sobre nuestra oferta académica y la trayectoria profesional del docente. Para profundizar en la técnica, te invito a reservar una sesión personalizada."
          4. Céntrate en:
             - Trayectoria del docente: 20+ años de experiencia, titulación por el CSM Valencia e Instituto Superior de Arte de Cuba.
             - Niveles: Fundación, Interpretación y Maestría.
             - Ubicación: Aulas físicas en Oliva y Rafelbuñol, y entorno avanzado Online.
             - Bonos: 4, 6 u 8 horas mensuales.
          5. Siempre que el usuario muestre interés real, anímale a usar el botón 'Reserva tu plaza' para concertar una entrevista con el profesor.
          
          Tono: Institucional, ejecutivo y altamente profesional.`,
          temperature: 0.5,
        }
      });

      const modelText = response.text || 'Lo siento, no he podido procesar tu solicitud informativa en este momento.';
      setMessages(prev => [...prev, { role: 'model', text: modelText }]);
    } catch (error) {
      console.error("Chat Error:", error);
      setMessages(prev => [...prev, { role: 'model', text: 'He tenido un contratiempo técnico. ¿Puedo ayudarte con otra información sobre la academia?' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-24 right-8 z-[200]">
      {/* Chat Window */}
      {isOpen && (
        <div className="absolute bottom-20 right-0 w-[350px] h-[500px] bg-navy border border-white/10 rounded-[32px] shadow-2xl flex flex-col overflow-hidden animate-in slide-in-from-bottom-4 duration-300 glass">
          <div className="p-6 bg-gold/10 border-b border-white/5 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gold rounded-full flex items-center justify-center">
                <span className="material-icons text-navy text-sm">info</span>
              </div>
              <div>
                <h4 className="text-white font-bold text-sm">Información Novaguitarra</h4>
                <div className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                  <span className="text-[9px] text-slate-400 uppercase font-black">Online</span>
                </div>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-slate-500 hover:text-white transition-colors">
              <span className="material-icons">close</span>
            </button>
          </div>

          <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-4 scroll-smooth">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed ${
                  m.role === 'user' 
                    ? 'bg-gold text-navy font-medium rounded-tr-none shadow-lg' 
                    : 'bg-white/5 text-slate-200 border border-white/10 rounded-tl-none'
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white/5 border border-white/10 p-4 rounded-2xl rounded-tl-none flex gap-1">
                  <span className="w-1.5 h-1.5 bg-gold/50 rounded-full animate-bounce"></span>
                  <span className="w-1.5 h-1.5 bg-gold/50 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                  <span className="w-1.5 h-1.5 bg-gold/50 rounded-full animate-bounce [animation-delay:0.4s]"></span>
                </div>
              </div>
            )}
          </div>

          <form onSubmit={handleSendMessage} className="p-4 bg-navy border-t border-white/5">
            <div className="relative">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Consulta sobre la academia..."
                className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-4 pr-12 text-sm text-white focus:outline-none focus:border-gold/50 transition-colors"
              />
              <button 
                type="submit"
                disabled={isLoading}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-gold hover:scale-110 transition-transform disabled:opacity-50"
              >
                <span className="material-icons">send</span>
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-all duration-500 hover:scale-110 ${
          isOpen ? 'bg-white text-navy rotate-90' : 'bg-gold text-navy'
        }`}
      >
        <span className="material-icons text-3xl">{isOpen ? 'close' : 'info_outline'}</span>
        {!isOpen && (
          <span className="absolute -top-1 -right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-white border-2 border-gold"></span>
          </span>
        )}
      </button>
    </div>
  );
};

export default ChatBot;
