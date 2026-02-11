
import React, { useState, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";

const Methodology: React.FC = () => {
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');

  const loadingMessages = [
    "Armonizando la visión pedagógica...",
    "Sincronizando acordes y tecnología...",
    "Renderizando maestría musical...",
    "Preparando el ecosistema Novaguitarra...",
    "Finalizando vídeo de presentación..."
  ];

  const generateVideo = async () => {
    if (window.aistudio && !(await window.aistudio.hasSelectedApiKey())) {
      await window.aistudio.openSelectKey();
    }

    setIsGenerating(true);
    let messageIndex = 0;
    const interval = setInterval(() => {
      setStatusMessage(loadingMessages[messageIndex % loadingMessages.length]);
      messageIndex++;
    }, 4000);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      let operation = await ai.models.generateVideos({
        model: 'veo-3.1-fast-generate-preview',
        prompt: 'A fast-paced, high-energy, and professional cinematic teaser for a guitar academy. Montage showing expert hands shredding on a Fender Stratocaster followed by elegant classical guitar fingerpicking. Gold sparks and lens flares in a luxury dark studio. Dynamic overlays of Sibelius music notation and professional recording gear. The video should be motivating, high-end, and showcase academic mastery and modern technology. 1080p, ultra-sharp focus.',
        config: {
          numberOfVideos: 1,
          resolution: '1080p',
          aspectRatio: '16:9'
        }
      });

      while (!operation.done) {
        await new Promise(resolve => setTimeout(resolve, 10000));
        operation = await ai.operations.getVideosOperation({ operation: operation });
      }

      const downloadLink = operation.response?.generatedVideos?.[0]?.video?.uri;
      if (downloadLink) {
        const response = await fetch(`${downloadLink}&key=${process.env.API_KEY}`);
        const blob = await response.blob();
        setVideoUrl(URL.createObjectURL(blob));
      }
    } catch (error) {
      console.error("Video Generation Error:", error);
      setVideoUrl("https://player.vimeo.com/external/494252666.sd.mp4?s=9dcc883b63290b206466f272a806954a242c75a7&profile_id=165");
    } finally {
      clearInterval(interval);
      setIsGenerating(false);
    }
  };

  return (
    <section className="bg-navy py-24 px-8">
      <div className="max-w-4xl mx-auto space-y-16">
        <div className="flex flex-col md:flex-row items-end justify-between gap-6">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white">Metodología <br/>Profesional</h2>
          <span className="px-4 py-1.5 bg-slate-900 border border-gold/20 text-gold text-[10px] font-bold rounded-full uppercase tracking-widest">Docencia de Guitarra</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Cuadro grande: Vídeo de Presentación */}
          <div className="bg-black/20 border border-white/10 rounded-[40px] overflow-hidden group relative min-h-[450px] flex items-center justify-center">
            {isGenerating ? (
              <div className="text-center space-y-6 p-12">
                <div className="w-20 h-20 border-4 border-gold/20 border-t-gold rounded-full animate-spin mx-auto"></div>
                <div className="space-y-2">
                  <p className="text-gold font-black uppercase tracking-[0.2em] text-[10px] animate-pulse">IA Generativa en proceso</p>
                  <p className="text-white font-serif italic text-lg">{statusMessage}</p>
                </div>
              </div>
            ) : videoUrl ? (
              <video 
                src={videoUrl}
                className="w-full h-full object-cover"
                controls
                autoPlay
                muted
                loop
              />
            ) : (
              <div className="relative w-full h-full bg-black/40 flex flex-col items-center justify-center p-12 text-center space-y-8">
                <div className="absolute inset-0">
                  <img src="https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&q=80&w=1000" className="w-full h-full object-cover opacity-20" alt="Background" />
                </div>
                <div className="relative z-10 space-y-6">
                  <div className="w-20 h-20 bg-gold/10 rounded-full flex items-center justify-center mx-auto border border-gold/30">
                    <span className="material-icons text-gold text-4xl animate-pulse">auto_videocam</span>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-white font-serif text-2xl font-bold italic">Presentación Novaguitarra</h3>
                    <p className="text-slate-400 text-sm max-w-[280px] mx-auto">Pulsa para generar un vídeo dinámico de presentación con Inteligencia Artificial.</p>
                  </div>
                  <button 
                    onClick={generateVideo}
                    className="bg-gold text-navy px-8 py-4 rounded-full font-bold text-xs uppercase tracking-widest hover:scale-105 transition-transform shadow-2xl"
                  >
                    Generar Vídeo con IA
                  </button>
                </div>
              </div>
            )}
          </div>

          <div className="flex flex-col gap-8">
            {/* Cuadro: Entorno de Enseñanza (CENTRADOS) */}
            <div className="flex-grow bg-white/5 border border-white/10 rounded-3xl overflow-hidden relative group p-12 flex flex-col items-center justify-center text-center">
               <img 
                 src="https://images.unsplash.com/photo-1550291652-6ea9114a47b1?auto=format&fit=crop&q=80&w=1000" 
                 className="absolute inset-0 w-full h-full object-cover opacity-10 group-hover:opacity-20 transition-opacity" 
                 alt="Aula de guitarra profesional" 
               />
               <div className="relative space-y-6">
                 <div className="bg-gold/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-2 border border-gold/20 shadow-[0_0_30px_rgba(212,175,55,0.1)]">
                   <span className="material-icons text-gold text-4xl">account_balance</span>
                 </div>
                 <div className="space-y-3">
                   <h3 className="font-bold text-white text-xl uppercase tracking-wider">Entorno de Enseñanza</h3>
                   <p className="text-slate-400 text-sm leading-relaxed max-w-[340px] mx-auto">
                     Aulas equipadas para la formación profesional en guitarra clásica y eléctrica. Ecosistema multiplataforma para los itinerarios Online.
                   </p>
                 </div>
               </div>
            </div>

            {/* Cuadro: Análisis Digital & Software */}
            <div className="p-8 bg-white/5 border border-white/10 rounded-3xl group hover:border-gold/30 transition-colors">
              <div className="flex gap-4">
                <div className="bg-gold/10 p-3 rounded-2xl">
                  <span className="material-icons text-gold">computer</span>
                </div>
                <div>
                  <h3 className="font-bold text-white uppercase tracking-wider text-sm">Análisis Digital & Software</h3>
                  <p className="text-slate-400 text-sm mt-2 leading-relaxed italic">
                    Uso avanzado de Sibelius y Finale para el análisis armónico y la edición de partituras personalizadas para el alumno.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Methodology;
