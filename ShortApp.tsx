import React from 'react';
import { Section } from './components/Section';
import { Button } from './components/Button';
import { 
  Shield, 
  CheckCircle, 
  Calendar, 
  Video, 
  ChevronRight,
  Star,
  Award
} from './components/Icons';

const ShortApp: React.FC = () => {
  const CHECKOUT_LINK = "https://chk.eduzz.com/E0D654A691";

  const handleCheckout = () => {
    window.open(CHECKOUT_LINK, '_blank');
  };

  return (
    <div className="font-sans min-h-screen flex flex-col bg-slate-50">
      
      {/* HEADER COMPACTO */}
      <header className="bg-white py-4 shadow-sm fixed w-full z-50">
        <div className="max-w-4xl mx-auto px-4 flex justify-between items-center">
          <span className="font-serif font-bold text-celestial-blue">Cíntia Camerin</span>
          <Button onClick={handleCheckout} variant="primary" className="text-xs px-4 py-2">
            Garantir Vaga
          </Button>
        </div>
      </header>

      {/* HERO: PROMESSA DIRETA */}
      <div className="relative pt-32 pb-20 px-4 bg-[url('https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=2094&auto=format&fit=crop')] bg-cover bg-center">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/95 via-celestial-blue/90 to-slate-900/95"></div>
        
        <div className="relative z-10 max-w-3xl mx-auto text-center text-white">
          <div className="inline-block bg-gold-accent/20 border border-gold-accent/40 rounded-full px-4 py-1 mb-6">
            <span className="text-gold-accent text-xs font-bold uppercase tracking-wider">Curso da Mesa Quântica Celestial</span>
          </div>
          
          <h1 className="font-serif text-3xl md:text-5xl font-bold mb-6 leading-tight">
            Diagnostique e Harmonize sua Energia com a <span className="text-gold-accent">Mesa Quântica Celestial</span>
          </h1>
          
          <p className="text-lg text-slate-200 mb-8 max-w-2xl mx-auto">
            Uma formação ao vivo para você aprender a usar a radiestesia e a radiônica para proteção, limpeza e abertura de caminhos.
          </p>

          <Button onClick={handleCheckout} className="mx-auto text-lg w-full md:w-auto shadow-gold-accent/20 shadow-xl">
            QUERO ME TORNAR UM OPERADOR
            <ChevronRight className="w-5 h-5" />
          </Button>
        </div>
      </div>

      {/* O QUE VOCÊ VAI DOMINAR (RESUMO) */}
      <Section className="bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-center font-serif text-2xl font-bold text-celestial-blue mb-10">
            O que você será capaz de fazer:
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: "Diagnóstico Preciso", desc: "Identifique bloqueios nos chakras, na casa e na vida financeira com o pêndulo." },
              { title: "Limpeza Energética", desc: "Remova energias densas e 'obsessores de si mesmo' usando geometria sagrada." },
              { title: "Proteção Espiritual", desc: "Ative escudos (Comando Micaélico) para blindar sua energia no dia a dia." },
              { title: "Atendimento Profissional", desc: "Torne-se apto a atender outras pessoas e gerar renda com a terapia." }
            ].map((item, i) => (
              <div key={i} className="flex gap-4 p-4 rounded-lg bg-slate-50 border border-slate-100">
                <CheckCircle className="w-6 h-6 text-emerald-500 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-slate-800">{item.title}</h3>
                  <p className="text-sm text-slate-600 leading-snug">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ENTREGA E DATAS (ESSENCIAL) */}
      <Section className="bg-emerald-50/50">
        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg border border-emerald-100 overflow-hidden">
          <div className="bg-emerald-600 p-4 text-center text-white">
            <h3 className="font-bold text-lg">Formato do Curso</h3>
          </div>
          <div className="p-6 md:p-8 grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="flex items-center gap-2 font-bold text-slate-800 mb-3">
                <Video className="w-5 h-5 text-emerald-600" /> Aulas Ao Vivo (Zoom)
              </h4>
              <ul className="text-sm text-slate-600 space-y-2">
                <li>Janeiro: Dias 22 e 29</li>
                <li>Fevereiro: Dias 05, 19 e 26</li>
                <li className="italic text-emerald-600 font-medium">19h30 às 22h00</li>
              </ul>
            </div>
            <div>
               <h4 className="flex items-center gap-2 font-bold text-slate-800 mb-3">
                <Award className="w-5 h-5 text-emerald-600" /> O que está incluso
              </h4>
              <ul className="text-sm text-slate-600 space-y-2">
                <li>✓ Gravações Vitalícias</li>
                <li>✓ Arquivo da Mesa para Impressão</li>
                <li>✓ Apostila de Símbolos</li>
                <li>✓ Certificado de Operador</li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* BIO COMPACTA */}
      <Section className="bg-white">
        <div className="flex flex-col md:flex-row items-center gap-6 max-w-3xl mx-auto">
          <img 
            src="https://cintia.marketsite.com.br/1.jpg" 
            alt="Cíntia Camerin"
            className="w-24 h-24 rounded-full object-cover border-2 border-gold-accent"
          />
          <div className="text-center md:text-left">
            <h3 className="font-bold text-slate-900 text-lg">Com Cíntia Camerin</h3>
            <p className="text-sm text-slate-600 italic mb-2">Sensitiva e Canalizadora</p>
            <p className="text-sm text-slate-500">
              "Minha missão é te dar autonomia espiritual. Chega de depender dos outros para limpar sua energia. Vou te ensinar a fazer isso com os pés no chão e sem mistérios."
            </p>
          </div>
        </div>
      </Section>

      {/* OFERTA FINAL */}
      <Section dark className="bg-slate-900">
        <div className="max-w-md mx-auto text-center">
          <h2 className="text-2xl font-bold text-white mb-6">Comece 2026 no Comando</h2>
          
          <div className="bg-white text-slate-900 p-6 rounded-2xl shadow-2xl mb-6">
            <p className="text-slate-500 text-sm line-through mb-1">De R$ 2.997,00</p>
            <div className="text-3xl font-bold text-emerald-600 mb-1">12x de R$ 258,25</div>
            <p className="text-xs text-slate-500 mb-6">ou R$ 2.497,00 à vista</p>
            
            <Button onClick={handleCheckout} fullWidth>
              GARANTIR MINHA VAGA
            </Button>
          </div>

          <div className="flex items-center justify-center gap-2 text-slate-400 text-xs">
            <Shield className="w-4 h-4" />
            <span>Garantia de 7 dias ou seu dinheiro de volta.</span>
          </div>
        </div>
      </Section>

      <footer className="bg-slate-950 text-slate-600 py-8 text-center text-xs">
        <p>© 2026 Cíntia Camerin. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
};

export default ShortApp;