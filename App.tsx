import React from 'react';
import { Shield, Zap, Calendar, Heart, MessageCircle, Send, Sparkles, Instagram, Youtube, TikTok } from './components/Icons';

const App: React.FC = () => {
  const links = [
    {
      title: "Formação Mesa Quântica Celestial",
      url: "/mesa-quantica",
      icon: <Sparkles className="w-6 h-6" />,
      featured: true
    },
    {
      title: "Curso Defesa Energética",
      url: "/defesa-energetica",
      icon: <Shield className="w-6 h-6" />
    },
    {
      title: "Agendamentos",
      url: "https://claridad.com.br/#terapeutas",
      icon: <Calendar className="w-6 h-6" />
    },
    {
      title: "Envio de Frequência Gratuito",
      url: "https://claridad.com.br/#frequencia",
      icon: <Heart className="w-6 h-6" />
    },
    {
      title: "O Espaço Claridad",
      url: "https://claridad.com.br/",
      icon: <Zap className="w-6 h-6" />
    },
    {
      title: "Somos Faróis (Grupo Telegram)",
      url: "https://t.me/+HEaNkoO0C2c3NjMx",
      icon: <Send className="w-6 h-6" />
    },
    {
      title: "Fale Com a Equipe",
      url: "https://wa.me/5511999086973?text=Olá,%20gostaria%20de%20tirar%20uma%20dúvida",
      icon: <MessageCircle className="w-6 h-6" />
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900 bg-[url('https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=2094&auto=format&fit=crop')] bg-cover bg-center bg-fixed bg-no-repeat flex flex-col items-center justify-center p-6 relative font-sans">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/90 via-celestial-blue/80 to-slate-900/90 backdrop-blur-sm"></div>
      
      <div className="relative z-10 w-full max-w-md mx-auto space-y-10 py-12 flex-1 flex flex-col justify-center">
        
        {/* Profile Section */}
        <div className="text-center space-y-4 animate-fade-in-up">
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-gold-accent/40 blur-xl rounded-full scale-110"></div>
            <img 
              src="https://cintia.marketsite.com.br/2.jpg" 
              alt="Cíntia Camerin" 
              className="w-32 h-32 md:w-40 md:h-40 mx-auto rounded-full object-cover border-4 border-gold-accent shadow-[0_0_30px_rgba(245,158,11,0.5)] relative z-10"
              style={{ objectPosition: 'center 20%' }}
            />
          </div>
          <div>
            <h1 className="text-3xl md:text-4xl font-serif font-bold text-white tracking-wide drop-shadow-md">Cíntia Camerin</h1>
            <p className="text-blue-100 text-sm md:text-base font-light mt-2 px-4 opacity-90">
              Sensitiva, Terapeuta e Canalizadora.
            </p>
          </div>
        </div>

        {/* Links Section */}
        <div className="space-y-4 w-full flex flex-col items-center pb-8">
          {links.map((link, index) => (
            <a 
              key={index} 
              href={link.url}
              className={`w-full group flex items-center p-4 md:p-5 rounded-2xl backdrop-blur-md border transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl ${
                link.featured 
                  ? 'bg-gold-accent/95 border-gold-accent text-slate-900 hover:bg-gold-accent hover:shadow-gold-accent/30 font-bold' 
                  : 'bg-white/10 border-white/20 text-white hover:bg-white/20 hover:border-white/40'
              }`}
              style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'both' }}
            >
              <div className={`mr-4 p-2.5 rounded-full transition-colors ${link.featured ? 'bg-white/30 text-slate-900' : 'bg-white/10 text-gold-accent group-hover:text-white group-hover:bg-white/20'}`}>
                {link.icon}
              </div>
              <span className={`flex-1 text-center font-medium md:text-lg pr-12 ${link.featured ? 'drop-shadow-sm' : ''}`}>
                {link.title}
              </span>
            </a>
          ))}
        </div>
        
        {/* Social Links Section */}
        <div className="flex items-center justify-center gap-6 pt-4 pb-2 animate-fade-in-up" style={{ animationDelay: '800ms', animationFillMode: 'both' }}>
          <a 
            href="https://www.instagram.com/cintiacamerinclaridad" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white/10 text-white hover:bg-gold-accent hover:text-slate-900 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-gold-accent/30 border border-white/10"
            aria-label="Instagram"
          >
            <Instagram className="w-6 h-6" />
          </a>
          <a 
            href="https://www.tiktok.com/@cintiacamerin" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white/10 text-white hover:bg-gold-accent hover:text-slate-900 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-gold-accent/30 border border-white/10"
            aria-label="TikTok"
          >
            <TikTok className="w-6 h-6" />
          </a>
          <a 
            href="https://www.youtube.com/@cintiacamerin" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white/10 text-white hover:bg-gold-accent hover:text-slate-900 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-gold-accent/30 border border-white/10"
            aria-label="YouTube"
          >
            <Youtube className="w-6 h-6" />
          </a>
        </div>
        
      </div>
      
      {/* Footer */}
      <div className="relative z-10 py-6 text-center w-full mt-auto">
        <p className="text-white/50 text-xs md:text-sm tracking-widest uppercase">
          © 2026 Cíntia Camerin
        </p>
      </div>
    </div>
  );
};

export default App;
