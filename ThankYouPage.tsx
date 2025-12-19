import React from 'react';
import { Button } from './components/Button';
import { 
  CheckCircle, 
  MessageCircle, 
  Shield, 
  Zap, 
  Star, 
  Users,
  Award
} from './components/Icons';

const ThankYouPage: React.FC = () => {
  const WHATSAPP_LINK = "https://wa.me/5511931432736?text=Ol%C3%A1%20adquiri%20o%20curso%20do%20C%C3%ADntia%20Camerin%20e%20preciso%20de%20ajuda%20por%20favor.";
  const UPSELL_LINK = "https://chk.eduzz.com/CFDA3073";

  const handleWhatsApp = () => {
    window.open(WHATSAPP_LINK, '_blank');
  };

  const handleUpsell = () => {
    window.open(UPSELL_LINK, '_blank');
  };

  return (
    <div className="font-sans min-h-screen flex flex-col bg-slate-50">
      
      {/* HEADER SIMPLES */}
      <div className="bg-celestial-blue py-4 text-center">
        <span className="font-serif font-bold text-xl text-white">
          Mesa Quântica Celestial
        </span>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12 flex-grow w-full">
        
        {/* BLOCO DE CONFIRMAÇÃO */}
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 text-center mb-12 border border-emerald-100">
          <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-emerald-600" />
          </div>
          
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Sua inscrição está confirmada!
          </h1>
          
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Parabéns pela decisão de se tornar um Operador da Luz. Basta aguardar o nosso contato próximo à data das aulas. Todas as informações de acesso serão enviadas para o seu e-mail.
          </p>

          <div className="bg-blue-50 border border-blue-100 rounded-xl p-6 max-w-xl mx-auto">
            <p className="text-slate-700 font-medium mb-4">
              Caso precise de ajuda ou tenha alguma dúvida urgente:
            </p>
            <Button 
              onClick={handleWhatsApp} 
              variant="secondary" 
              className="mx-auto bg-[#25D366] hover:bg-[#1da851] text-white border-transparent w-full md:w-auto"
            >
              <MessageCircle className="w-5 h-5" />
              Chamar no WhatsApp
            </Button>
          </div>
        </div>

        {/* ORDER BUMP - DEFESA PSÍQUICA */}
        <div className="relative">
          {/* Faixa de Destaque */}
          <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 z-10">
             <span className="bg-red-600 text-white px-6 py-2 rounded-full font-bold uppercase tracking-wider text-sm shadow-md animate-pulse">
               Oportunidade Única
             </span>
          </div>

          <div className="bg-gradient-to-br from-slate-900 via-celestial-blue to-slate-900 text-white rounded-3xl shadow-2xl overflow-hidden border-4 border-white/20">
            <div className="p-8 md:p-12">
              <div className="text-center mb-10 mt-4">
                <h2 className="font-serif text-2xl md:text-4xl font-bold text-gold-accent mb-2">
                  Enquanto você aguarda...
                </h2>
                <p className="text-blue-100 text-lg">
                  Aproveite para blindar sua mente com o nosso <strong className="text-white">Curso de Defesa Psíquica</strong>.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-10 items-center">
                <div className="space-y-6">
                  <p className="text-blue-50 leading-relaxed">
                    Este curso é projetado para ensinar técnicas comprovadas para proteger sua mente e emoções contra ataques mentais, emocionais, psíquicos e espirituais.
                  </p>
                  
                  <ul className="space-y-3">
                    {[
                      "Defesa energética e limpeza mental",
                      "Proteção contra obsessores espirituais",
                      "Aumento da autoestima e autoconfiança",
                      "Comunicação assertiva e eficaz",
                      "Aumento de concentração e foco",
                      "Conexão com sua intuição e sabedoria"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Shield className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-1" />
                        <span className="text-sm md:text-base">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/10 text-center">
                  <p className="text-sm uppercase tracking-widest text-blue-200 mb-4">Oferta Especial de Novo Aluno</p>
                  
                  <div className="space-y-2 mb-6">
                    <p className="text-slate-400 line-through text-lg">De R$ 997,00</p>
                    <div className="text-4xl md:text-5xl font-bold text-white">
                      R$ 497,00
                    </div>
                    <p className="text-emerald-400 text-sm font-bold">50% DE DESCONTO AGORA</p>
                  </div>

                  <Button onClick={handleUpsell} fullWidth className="bg-emerald-500 hover:bg-emerald-400 text-white shadow-lg shadow-emerald-500/20 py-4 text-lg">
                    ADICIONAR AO MEU PEDIDO
                  </Button>
                  
                  <p className="text-xs text-blue-200 mt-4">
                    Garantia de 7 dias para sua satisfação total.
                  </p>
                </div>
              </div>

              <div className="mt-10 pt-8 border-t border-white/10 text-center md:text-left text-sm text-blue-200 flex flex-col md:flex-row gap-6 justify-center items-center">
                <p className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-gold-accent" />
                  Lições Teóricas e Práticas
                </p>
                <p className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-gold-accent" />
                  Meditações Inclusas
                </p>
                <p className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-gold-accent" />
                  Suporte Contínuo
                </p>
              </div>

            </div>
          </div>
        </div>

      </div>

      <footer className="bg-slate-900 text-slate-500 py-8 text-center text-sm">
        <p>&copy; 2026 Cíntia Camerin. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
};

export default ThankYouPage;