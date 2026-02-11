
import React, { useState, useRef, useEffect } from 'react';
import { Review } from '../types';

interface ReviewsProps {
  reviews: Review[];
  onAddReview: (review: Review) => void;
}

const Reviews: React.FC<ReviewsProps> = ({ reviews, onAddReview }) => {
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState({ name: '', role: '', content: '', rating: 5 });
  const [hoverRating, setHoverRating] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const featured = reviews.slice(0, 3);
  const remaining = reviews.slice(3);

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      const progress = (scrollLeft / (scrollWidth - clientWidth)) * 100;
      setScrollProgress(progress);
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const { current } = scrollContainerRef;
      const cardWidth = 340 + 32; // card + gap
      const scrollAmount = direction === 'left' ? -cardWidth : cardWidth;
      current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newReview: Review = {
      id: Math.random().toString(36).substr(2, 9),
      author: form.name,
      role: form.role,
      content: form.content,
      rating: form.rating,
      status: 'pending',
      date: new Date().toISOString().split('T')[0],
      avatar: `https://i.pravatar.cc/150?u=${form.name}`
    };
    onAddReview(newReview);
    setShowModal(false);
    setForm({ name: '', role: '', content: '', rating: 5 });
    alert('¡Gracias! Tu opinión ha sido enviada para validación.');
  };

  return (
    <section className="bg-navy py-24 px-8 border-t border-white/5 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/10 to-transparent"></div>
      
      <div className="max-w-6xl mx-auto space-y-24 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div className="space-y-4">
            <span className="text-gold font-black uppercase tracking-[0.4em] text-[10px]">Testimonios Reales</span>
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-white italic">La voz de mis alumnos</h2>
            <p className="text-slate-400 max-w-lg">Conoce las opiniones reales de las experiencias de nuestros alumnos en Novaguitarra</p>
          </div>
          <button 
            onClick={() => setShowModal(true)}
            className="group relative flex items-center gap-3 bg-white/5 border border-gold/30 px-8 py-4 rounded-full text-gold font-bold text-xs uppercase tracking-widest hover:bg-gold hover:text-navy transition-all"
          >
            Dejar mi opinión
            <span className="material-icons text-sm group-hover:rotate-45 transition-transform">add</span>
          </button>
        </div>

        {/* TOP 3 FEATURED */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featured.map((review) => (
            <div key={review.id} className="relative group">
              <div className="absolute inset-0 bg-gold/5 rounded-[40px] blur-2xl group-hover:bg-gold/10 transition-all opacity-0 group-hover:opacity-100"></div>
              <div className="relative h-full bg-white/5 border border-white/10 p-10 rounded-[40px] hover:border-gold/30 transition-all flex flex-col justify-between hover:-translate-y-2 duration-500">
                <div className="space-y-6">
                  <div className="flex justify-between items-start">
                    <div className="relative">
                      <img src={review.avatar} alt={review.author} className="w-16 h-16 rounded-2xl object-cover border-2 border-gold shadow-xl" />
                      <div className="absolute -bottom-2 -right-2 bg-navy border border-gold rounded-full p-1">
                        <span className="material-icons text-[10px] text-gold">verified</span>
                      </div>
                    </div>
                    <div className="flex flex-col items-end">
                      <span className="material-icons text-gold/20 text-5xl leading-none mb-2">format_quote</span>
                      <div className="flex text-gold gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className={`material-icons text-sm ${i < review.rating ? 'text-gold' : 'text-slate-600'}`}>
                            {i < review.rating ? 'star' : 'star_border'}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-white font-serif text-lg leading-relaxed italic">
                    "{review.content}"
                  </p>
                </div>
                <div className="pt-8 mt-8 border-t border-white/5">
                  <h4 className="text-white font-bold text-lg">{review.author}</h4>
                  <p className="text-gold text-[10px] uppercase font-bold tracking-widest mt-1">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* REMAINING REVIEWS - DYNAMIC SMOOTH SCROLL */}
        {remaining.length > 0 && (
          <div className="space-y-12 relative group/section">
            <div className="flex items-center justify-between gap-6 px-4">
              <div className="flex items-center gap-6 flex-grow">
                <h3 className="text-white/40 font-black uppercase tracking-[0.3em] text-[xs] whitespace-nowrap">Otras experiencias</h3>
                <div className="h-[1px] bg-gradient-to-r from-white/20 via-white/5 to-transparent w-full"></div>
              </div>
              
              <div className="hidden md:flex items-center gap-3">
                <button 
                  onClick={() => scroll('left')}
                  className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-gold hover:text-navy hover:scale-110 transition-all active:scale-90 shadow-2xl"
                >
                  <span className="material-icons">west</span>
                </button>
                <button 
                  onClick={() => scroll('right')}
                  className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-gold hover:text-navy hover:scale-110 transition-all active:scale-90 shadow-2xl"
                >
                  <span className="material-icons">east</span>
                </button>
              </div>
            </div>
            
            <div className="relative">
              {/* Fade Effects with improved depth */}
              <div className="absolute top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-navy via-navy/50 to-transparent z-20 pointer-events-none"></div>
              <div className="absolute top-0 bottom-0 right-0 w-32 bg-gradient-to-l from-navy via-navy/50 to-transparent z-20 pointer-events-none"></div>

              <div 
                ref={scrollContainerRef}
                onScroll={handleScroll}
                className="flex overflow-x-auto gap-10 pb-20 snap-x snap-mandatory no-scrollbar scroll-smooth px-12 md:px-32"
                style={{ 
                  scrollbarWidth: 'none',
                  msOverflowStyle: 'none',
                  perspective: '1000px'
                }}
              >
                {remaining.map((review, idx) => (
                  <div 
                    key={review.id} 
                    className="flex-none w-[340px] md:w-[400px] snap-center bg-white/[0.02] border border-white/5 p-10 rounded-[3.5rem] hover:bg-white/[0.08] hover:border-gold/40 transition-all group hover:scale-[1.05] duration-700 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.5)] flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center gap-5 mb-10">
                        <div className="relative flex-shrink-0">
                          <img src={review.avatar} alt={review.author} className="w-16 h-16 rounded-3xl border-2 border-white/5 group-hover:border-gold/60 transition-all duration-700 object-cover shadow-2xl" />
                          <div className="absolute -top-3 -right-3 bg-gold text-navy rounded-full p-1 border-2 border-navy shadow-lg">
                            <span className="material-icons text-[10px] font-bold">star</span>
                          </div>
                        </div>
                        <div className="overflow-hidden">
                          <h5 className="text-white font-bold text-lg truncate group-hover:text-gold transition-colors duration-500">{review.author}</h5>
                          <p className="text-slate-500 text-[9px] uppercase tracking-[0.2em] truncate font-black mt-1">{review.role}</p>
                        </div>
                      </div>
                      <p className="text-slate-300 text-base leading-relaxed italic line-clamp-4 relative z-10">
                        <span className="text-gold/20 text-6xl font-serif absolute -top-8 -left-4 pointer-events-none">“</span>
                        {review.content}
                      </p>
                    </div>
                    
                    <div className="flex items-center justify-between mt-10 pt-8 border-t border-white/5">
                      <div className="flex text-gold gap-1 opacity-20 group-hover:opacity-100 transition-all duration-1000">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className={`material-icons text-xs ${i < review.rating ? 'text-gold' : 'text-slate-700'}`}>
                            {i < review.rating ? 'star' : 'star_border'}
                          </span>
                        ))}
                      </div>
                      <span className="text-[10px] font-black text-white/20 uppercase tracking-widest">{review.date}</span>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Paulatine Progress Bar */}
              <div className="max-w-xs mx-auto h-1 bg-white/5 rounded-full overflow-hidden relative mt-4">
                <div 
                  className="absolute top-0 left-0 h-full bg-gold transition-all duration-500 ease-out"
                  style={{ width: `${scrollProgress}%` }}
                ></div>
              </div>
            </div>
          </div>
        )}
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}} />

      {/* FORM MODAL */}
      {showModal && (
        <div className="fixed inset-0 z-[150] flex items-center justify-center p-6 bg-navy/98 backdrop-blur-xl">
          <div className="bg-navy border border-white/10 w-full max-w-md rounded-[2.5rem] shadow-2xl p-10 animate-in zoom-in duration-500">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-3xl font-serif font-bold text-white italic">Cuéntanos tu viaje</h3>
              <button onClick={() => setShowModal(false)} className="w-10 h-10 rounded-full bg-white/5 text-slate-500 hover:text-white transition-all flex items-center justify-center">
                <span className="material-icons">close</span>
              </button>
            </div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="text-[10px] uppercase text-slate-500 font-black tracking-widest mb-2 block">Nombre Completo</label>
                <input required value={form.name} onChange={e => setForm({...form, name: e.target.value})} className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white focus:border-gold focus:bg-white/10 outline-none transition-all" />
              </div>
              <div>
                <label className="text-[10px] uppercase text-slate-500 font-black tracking-widest mb-2 block">Especialidad de estudio</label>
                <input required value={form.role} onChange={e => setForm({...form, role: e.target.value})} className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white focus:border-gold focus:bg-white/10 outline-none transition-all" />
              </div>
              <div>
                <label className="text-[10px] uppercase text-slate-500 font-black tracking-widest mb-3 block">Tu experiencia (1-5 estrellas)</label>
                <div className="flex gap-3">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onMouseEnter={() => setHoverRating(star)}
                      onMouseLeave={() => setHoverRating(0)}
                      onClick={() => setForm({ ...form, rating: star })}
                      className="focus:outline-none transition-all hover:scale-125"
                    >
                      <span className={`material-icons text-4xl transition-colors ${
                        star <= (hoverRating || form.rating) ? 'text-gold' : 'text-slate-800'
                      }`}>
                        {star <= (hoverRating || form.rating) ? 'star' : 'star_border'}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="text-[10px] uppercase text-slate-500 font-black tracking-widest mb-2 block">Mensaje</label>
                <textarea required rows={4} value={form.content} onChange={e => setForm({...form, content: e.target.value})} className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white focus:border-gold focus:bg-white/10 outline-none resize-none transition-all" />
              </div>
              <button type="submit" className="w-full bg-gold text-navy font-black py-5 rounded-2xl hover:scale-[1.02] active:scale-98 transition-all uppercase text-xs tracking-[0.2em] shadow-[0_20px_40px_-10px_rgba(212,175,55,0.3)]">
                Publicar testimonio
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default Reviews;
