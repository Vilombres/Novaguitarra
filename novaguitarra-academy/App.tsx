
import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import Methodology from './components/Methodology';
import Courses from './components/Courses';
import Modalities from './components/Modalities';
import Experience from './components/Experience';
import Reviews from './components/Reviews';
import AdminPanel from './components/AdminPanel';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';
import ChatBot from './components/ChatBot';
import { Review, ViewState } from './types';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>('home');
  const [reviews, setReviews] = useState<Review[]>([]);
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('novaguitarra_reviews');
    if (saved) {
      setReviews(JSON.parse(saved));
    } else {
      const initial: Review[] = [
        {
          id: 'real_1',
          author: 'Juan Manuel G.',
          role: 'Alumno de Aula de Adultos (FPA)',
          content: 'Francisco es el mejor profesor que he tenido. Su etapa como director en la FPA dejó huella; aprendí más en un trimestre con su metodología que en años por mi cuenta.',
          rating: 5,
          status: 'approved',
          date: '2024-12-01',
          avatar: 'https://i.pravatar.cc/150?u=juanmanuel'
        },
        {
          id: 'real_2',
          author: 'Silvia M. P.',
          role: 'Preparación Grado Superior',
          content: 'Preparé mi acceso al Conservatorio Superior con él y su visión analítica es impecable. Te dota de una técnica y una comprensión de la armonía que te pone a otro nivel profesional.',
          rating: 5,
          status: 'approved',
          date: '2024-11-15',
          avatar: 'https://i.pravatar.cc/150?u=silviam'
        },
        {
          id: 'real_3',
          author: 'Ricardo P.',
          role: 'Guitarrista Eléctrico',
          content: 'Su formación en el ISA de Cuba se nota en cada clase de ritmo. Es increíble cómo aplica la teoría moderna a la guitarra eléctrica. Novaguitarra es garantía de calidad.',
          rating: 5,
          status: 'approved',
          date: '2024-10-20',
          avatar: 'https://i.pravatar.cc/150?u=ricardop'
        },
        {
          id: 'extra_1',
          author: 'Elena R.',
          role: 'Iniciación Clásica',
          content: 'La metodología es súper clara. Empecé de cero y en dos meses ya toco mis primeras piezas con soltura.',
          rating: 5,
          status: 'approved',
          date: '2024-09-05',
          avatar: 'https://i.pravatar.cc/150?u=elena'
        },
        {
          id: 'extra_2',
          author: 'Marc B.',
          role: 'Blues & Improvisación',
          content: 'Entender el lenguaje del blues ha sido un viaje alucinante. El profesor sabe transmitir el sentimiento y la técnica.',
          rating: 5,
          status: 'approved',
          date: '2024-08-22',
          avatar: 'https://i.pravatar.cc/150?u=marc'
        },
        {
          id: 'extra_3',
          author: 'Sofía L.',
          role: 'Bono Tutorizado',
          content: 'A mi hijo de 8 años le encantan las clases. El enfoque pedagógico es excelente para niños.',
          rating: 5,
          status: 'approved',
          date: '2024-08-10',
          avatar: 'https://i.pravatar.cc/150?u=sofia'
        },
        {
          id: 'extra_4',
          author: 'Pablo V.',
          role: 'Teoría y Armonía',
          content: 'Por fin entiendo qué estoy tocando. Las clases de armonía son el complemento perfecto a la práctica.',
          rating: 5,
          status: 'approved',
          date: '2024-07-30',
          avatar: 'https://i.pravatar.cc/150?u=pablo'
        },
        {
          id: 'extra_5',
          author: 'Carmen T.',
          role: 'Guitarra Eléctrica Online',
          content: 'Incluso a distancia, la calidad de la enseñanza es altísima. Las herramientas digitales ayudan muchísimo.',
          rating: 5,
          status: 'approved',
          date: '2024-07-15',
          avatar: 'https://i.pravatar.cc/150?u=carmen'
        },
        {
          id: 'extra_6',
          author: 'Jorge M.',
          role: 'Preparación Exámenes RGT',
          content: 'Preparé las pruebas internacionales con éxito gracias a la guía experta del docente.',
          rating: 5,
          status: 'approved',
          date: '2024-06-28',
          avatar: 'https://i.pravatar.cc/150?u=jorge'
        },
        {
          id: 'extra_7',
          author: 'Ana S.',
          role: 'Fundación Adultos',
          content: 'Nunca es tarde para aprender. El ambiente en las clases es motivador y muy profesional.',
          rating: 5,
          status: 'approved',
          date: '2024-06-10',
          avatar: 'https://i.pravatar.cc/150?u=ana'
        },
        {
          id: 'extra_8',
          author: 'Luis K.',
          role: 'Composición',
          content: 'Me ha ayudado a dar forma a mis propias ideas musicales. Un mentor increíble.',
          rating: 5,
          status: 'approved',
          date: '2024-05-20',
          avatar: 'https://i.pravatar.cc/150?u=luis'
        },
        {
          id: 'extra_9',
          author: 'Miguel A.',
          role: 'Alumno Rock Pro',
          content: 'Increíble el nivel de detalle técnico. He mejorado mi velocidad y precisión en solo tres meses.',
          rating: 5,
          status: 'approved',
          date: '2024-05-10',
          avatar: 'https://i.pravatar.cc/150?u=miguel'
        },
        {
          id: 'extra_10',
          author: 'Sonia F.',
          role: 'Clases Presenciales Oliva',
          content: 'El trato es exquisito y la pasión del profesor por la música es contagiosa.',
          rating: 5,
          status: 'approved',
          date: '2024-04-25',
          avatar: 'https://i.pravatar.cc/150?u=sonia'
        },
        {
          id: 'extra_11',
          author: 'Raúl J.',
          role: 'Bono Grupal',
          content: 'Venimos tres amigos y las clases son dinámicas, divertidas y sobre todo muy productivas.',
          rating: 5,
          status: 'approved',
          date: '2024-04-12',
          avatar: 'https://i.pravatar.cc/150?u=raul'
        },
        {
          id: 'extra_12',
          author: 'Isabel V.',
          role: 'Preparación Conservatorio',
          content: 'Gracias a su guía pude superar las pruebas de acceso. Su método es infalible.',
          rating: 5,
          status: 'approved',
          date: '2024-03-30',
          avatar: 'https://i.pravatar.cc/150?u=isabel'
        },
        {
          id: 'extra_13',
          author: 'Dani T.',
          role: 'Guitarra Eléctrica',
          content: 'Control total de la armonía moderna aplicada al instrumento. Un antes y un después en mi forma de tocar.',
          rating: 5,
          status: 'approved',
          date: '2024-03-15',
          avatar: 'https://i.pravatar.cc/150?u=dani'
        },
        {
          id: 'extra_14',
          author: 'Patricia L.',
          role: 'Iniciación Adultos',
          content: 'Pensaba que a mi edad no podría, pero con su paciencia ya estoy tocando mis temas favoritos.',
          rating: 5,
          status: 'approved',
          date: '2024-02-28',
          avatar: 'https://i.pravatar.cc/150?u=patricia'
        },
        {
          id: 'extra_15',
          author: 'Oscar M.',
          role: 'Técnica Avanzada',
          content: 'El análisis de la biomecánica me ha ayudado a evitar tensiones innecesarias. Muy recomendable.',
          rating: 5,
          status: 'approved',
          date: '2024-02-10',
          avatar: 'https://i.pravatar.cc/150?u=oscar'
        },
        {
          id: 'extra_16',
          author: 'Laura G.',
          role: 'Lenguaje Musical',
          content: 'Las clases de solfeo se hacen amenas. Por fin entiendo la lógica detrás de la música.',
          rating: 5,
          status: 'approved',
          date: '2024-01-20',
          avatar: 'https://i.pravatar.cc/150?u=laura'
        }
      ];
      setReviews(initial);
      localStorage.setItem('novaguitarra_reviews', JSON.stringify(initial));
    }
  }, []);

  const handleAddReview = (newReview: Review) => {
    const updated = [newReview, ...reviews];
    setReviews(updated);
    localStorage.setItem('novaguitarra_reviews', JSON.stringify(updated));
  };

  const handleApproveReview = (id: string) => {
    const updated = reviews.map(r => r.id === id ? { ...r, status: 'approved' as const } : r);
    setReviews(updated);
    localStorage.setItem('novaguitarra_reviews', JSON.stringify(updated));
  };

  const handleDeleteReview = (id: string) => {
    const updated = reviews.filter(r => r.id !== id);
    setReviews(updated);
    localStorage.setItem('novaguitarra_reviews', JSON.stringify(updated));
  };

  return (
    <div className="min-h-screen flex flex-col selection:bg-gold selection:text-navy bg-navy text-slate-200">
      <Navbar setView={setCurrentView} currentView={currentView} />
      
      <main className="flex-grow pt-0">
        {currentView === 'home' && (
          <div className="animate-in fade-in duration-700">
            <Hero setView={setCurrentView} onOpenBooking={() => setIsBookingOpen(true)} />
            <Methodology />
            <Courses onOpenBooking={() => setIsBookingOpen(true)} />
            <Modalities onOpenBooking={() => setIsBookingOpen(true)} />
            <Reviews 
              reviews={reviews.filter(r => r.status === 'approved')} 
              onAddReview={handleAddReview} 
            />
            <Contact />
          </div>
        )}

        {currentView === 'experience' && (
          <div className="animate-in slide-in-from-bottom-4 duration-500">
            <Experience />
          </div>
        )}

        {currentView === 'admin' && (
          <div className="animate-in fade-in duration-300">
            <AdminPanel 
              reviews={reviews} 
              onApprove={handleApproveReview} 
              onDelete={handleDeleteReview}
            />
          </div>
        )}
      </main>

      <Footer />
      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
      <ChatBot />
      
      {!isBookingOpen && (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 w-[90%] max-w-md z-50">
          <button 
            onClick={() => setIsBookingOpen(true)}
            className="w-full flex items-center justify-between bg-white text-navy px-8 py-5 rounded-full shadow-2xl hover:scale-[1.03] transition-all group border border-gold/20"
          >
            <div className="flex flex-col text-left">
              <span className="text-[10px] uppercase tracking-[0.2em] text-slate-400 font-black">Próxima convocatoria</span>
              <span className="text-xl font-serif italic font-bold">Reserva tu plaza ahora</span>
            </div>
            <div className="bg-navy text-white p-3 rounded-full group-hover:bg-gold group-hover:text-navy transition-all">
              <span className="material-icons">event_available</span>
            </div>
          </button>
        </div>
      )}
    </div>
  );
};

export default App;
