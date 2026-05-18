import React, { useState, useEffect } from 'react';
import { Section } from './components/Section';
import { Button } from './components/Button';
import {
  Shield,
  Zap,
  CheckCircle,
  PlayCircle,
  MessageCircle,
  ChevronRight,
  ChevronDown,
  Star,
  Globe,
  Heart
} from './components/Icons';

const DefesaEnergetica: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const CHECKOUT_LINK = "https://chk.eduzz.com/1769088";

  const handleCheckout = () => {
    window.open(CHECKOUT_LINK, '_blank');
  };

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Preciso ter experiência prévia para fazer o curso?",
      answer: "Não. O Curso de Defesa Energética foi desenhado para iniciantes e terapeutas. Ensinamos do básico sobre aura e chakras até técnicas avançadas de proteção."
    },
    {
      question: "Como terei acesso ao curso?",
      answer: "Você receberá o acesso imediato à plataforma de alunos por e-mail logo após a confirmação do pagamento, onde todas as mais de 40 aulas estão gravadas e disponíveis."
    },
    {
      question: "Por quanto tempo posso assistir às aulas?",
      answer: "O acesso é válido por 1 ano. Durante este período, você pode assistir às aulas quantas vezes quiser, no seu ritmo."
    }
  ];

  return (
    <div className="font-sans min-h-screen flex flex-col">
      {/* Sticky Top Bar */}
      <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-slate-900/95 backdrop-blur-sm shadow-md py-3' : 'bg-transparent py-4'} hidden md:block`}>
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          <span className="font-serif font-bold text-xl text-white">
            Defesa Energética by Cíntia Camerin
          </span>
          <Button
            onClick={handleCheckout}
            variant="primary"
            className="text-sm py-2 px-4 uppercase"
          >
            Garantir Minha Vaga
          </Button>
        </div>
      </div>

      {/* BLOCO 1: HERO */}
      <div className="relative min-h-[90vh] flex items-center justify-center bg-[url('https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center bg-no-repeat bg-fixed">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/95 via-indigo-900/90 to-slate-900/95"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white space-y-8 pt-20">
          <div className="inline-block bg-white/10 backdrop-blur-sm px-4 py-1 rounded-full border border-white/20 mb-6 animate-fade-in-up">
            <span className="text-emerald-400 font-semibold uppercase tracking-wider text-sm">+40 Aulas de Conteúdo Profundo</span>
          </div>

          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold leading-tight drop-shadow-lg">
            Aprenda a <span className="text-emerald-400">Blindar Sua Energia</span> Contra Ataques e Desgastes Psíquicos
          </h1>

          <p className="text-lg md:text-2xl text-slate-200 font-light max-w-3xl mx-auto leading-relaxed">
            Domine o conhecimento sobre a Aura, os Chakras e aplique Técnicas de Proteção definitivas para manter seu campo energético fechado, blindado e próspero.
          </p>

          <div className="pt-10 pb-24">
            <Button onClick={handleCheckout} className="mx-auto text-xl shadow-emerald-500/20 shadow-2xl animate-pulse bg-emerald-600 hover:bg-emerald-700 text-white border-none">
              QUERO ME BLINDAR AGORA
              <ChevronRight className="w-6 h-6" />
            </Button>
          </div>
        </div>
      </div>

      {/* BLOCO 2: O PROBLEMA */}
      <Section className="bg-white">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-slate-900">
            Você se sente exausto(a) sem motivo aparente?
          </h2>
          <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
            <p>
              Muitas vezes, a sobrecarga emocional, a inveja, o "vampirismo" energético ou ambientes carregados acabam drenando toda a sua vitalidade. Não é normal viver com aquela sensação de cansaço constante.
            </p>
            <div className="bg-indigo-50 border border-indigo-100 p-8 rounded-2xl shadow-sm text-left">
              <div className="flex gap-4 items-start">
                <Shield className="w-8 h-8 text-indigo-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-indigo-900 text-xl mb-2">
                    A Autonomia é a Verdadeira Proteção
                  </h3>
                  <p className="text-indigo-800">
                    O <strong>Curso de Defesa Energética</strong> é um mapa prático com mais de 40 aulas para que você pare de terceirizar sua proteção. Entenda como o seu campo funciona, onde estão as brechas energéticas e feche todas elas com técnicas eficientes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* BLOCO 3: O QUE VOCÊ VAI APRENDER */}
      <Section dark className="bg-slate-900 relative overflow-hidden">
        <div className="relative z-10 text-center mb-16">
          <span className="text-emerald-400 font-bold tracking-widest uppercase mb-2 block">Conteúdo Programático</span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold mb-6 text-white">O Mapa da Blindagem Pessoal</h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Uma jornada de mais de 40 aulas teóricas e práticas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto relative z-10">
          {[
            { title: "Aura", desc: "Compreenda as camadas do seu corpo sutil. Entenda como manter sua Aura brilhante, expandida e sem fissuras.", icon: <Globe className="w-8 h-8 text-blue-400" /> },
            { title: "Chakras", desc: "A anatomia espiritual. Descubra os vórtices de energia do seu corpo e como o desequilíbrio deles impacta sua saúde física e mental.", icon: <Zap className="w-8 h-8 text-amber-400" /> },
            { title: "Ataques Energéticos e Psíquicos", desc: "Identifique quando você está sob ataque. Aprenda a reconhecer as assinaturas energéticas de inveja, obsessão e autossabotagem.", icon: <Shield className="w-8 h-8 text-rose-400" /> },
            { title: "Técnicas Práticas de Proteção", desc: "O passo a passo para criar escudos de luz, limpar seu ambiente, utilizar elementos da natureza e ancorar egrégoras de proteção.", icon: <Star className="w-8 h-8 text-emerald-400" /> }
          ].map((item, idx) => (
            <div key={idx} className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-colors">
              <div className="mb-6 bg-slate-800 w-16 h-16 rounded-full flex items-center justify-center shadow-lg">
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">{item.title}</h3>
              <p className="text-slate-300 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* BLOCO 4: OS BÔNUS */}
      <Section className="bg-emerald-50">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Bônus Exclusivos para Você
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Além de todo o conteúdo principal, você também leva esses materiais complementares.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            {
              title: "A Energia dos Chakras",
              desc: "Uma aula bônus aprofundando como a energia primária alimenta a sua manifestação e a importância da Kundalini.",
              icon: <Zap className="w-10 h-10 text-emerald-600" />
            },
            {
              title: "Mantras para os Chakras",
              desc: "Apostila/Guia de entoação sonora: as vibrações exatas para desbloquear e limpar cada um dos 7 chakras principais.",
              icon: <MessageCircle className="w-10 h-10 text-emerald-600" />
            },
            {
              title: "Música de Harmonização",
              desc: "Frequências sonoras e batidas binaurais específicas para você meditar e manter seus chakras alinhados diariamente.",
              icon: <PlayCircle className="w-10 h-10 text-emerald-600" />
            }
          ].map((bonus, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl shadow-xl border border-emerald-100 flex flex-col items-center text-center hover:-translate-y-2 transition-transform duration-300">
              <div className="bg-emerald-100 p-4 rounded-full mb-6">
                {bonus.icon}
              </div>
              <h3 className="font-bold text-xl text-slate-900 mb-3">{bonus.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{bonus.desc}</p>
              <div className="mt-6 pt-6 border-t border-slate-100 w-full">
                <span className="text-emerald-600 font-bold uppercase text-xs tracking-wider">Presente Incluso</span>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* BLOCO 5: A MENTORA */}
      <Section className="bg-white overflow-hidden">
        <div className="max-w-4xl mx-auto bg-slate-50 rounded-3xl p-8 md:p-12 border border-slate-100 shadow-sm relative">
          <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
            <img
              src="https://cintia.marketsite.com.br/1.jpg"
              alt="Cíntia Camerin"
              className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover border-4 border-white shadow-xl flex-shrink-0"
            />
            <div>
              <h3 className="font-serif text-3xl font-bold text-slate-900 mb-2">Cíntia Camerin</h3>
              <p className="text-emerald-600 font-medium mb-4">Sensitiva, Terapeuta e Canalizadora</p>
              <p className="text-slate-600 text-base leading-relaxed mb-4">
                Com anos de experiência clínica e espiritual, minha missão é ensinar espiritualidade de forma prática e sem misticismos rasos. Acredito que a verdadeira defesa começa na sua própria consciência. Se você quer parar de ser refém das energias externas, eu vou te ensinar exatamente como fazer isso.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* BLOCO 6: OFERTA & GARANTIA */}
      <Section id="pricing" dark className="bg-slate-900 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-emerald-500/10 blur-[100px] pointer-events-none"></div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-white text-center md:text-left">
              <div className="inline-block p-4 rounded-full bg-slate-800 mb-2">
                <Shield className="w-12 h-12 text-emerald-400" />
              </div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold">
                Garantia Incondicional de 7 Dias
              </h2>
              <p className="text-slate-300 text-lg leading-relaxed">
                Você tem 7 dias para testar o curso. Entre na plataforma, assista às primeiras aulas e sinta o conteúdo. Se você achar que não agregou valor à sua vida, basta solicitar o reembolso. O risco é totalmente meu.
              </p>
            </div>

            <div className="bg-white text-slate-800 rounded-3xl shadow-2xl p-8 md:p-10 border-4 border-emerald-500 transform transition-all hover:scale-[1.02]">
              <h3 className="text-2xl font-bold text-center mb-6">Curso Completo + Bônus</h3>
              
              <ul className="space-y-4 mb-8 text-sm">
                {[
                  "+40 Aulas de Defesa Energética",
                  "Módulo Completo de Aura e Chakras",
                  "Técnicas de Proteção",
                  "Bônus: A Energia dos Chakras",
                  "Bônus: Mantras para Chakras",
                  "Bônus: Música de Harmonização"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                    <span className="font-medium text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="text-center mb-8 border-t border-slate-100 pt-6">
                <span className="text-lg text-slate-500 font-medium">Por apenas</span>
                <div className="flex flex-col items-center justify-center text-emerald-600 mt-2">
                  <span className="text-4xl font-bold tracking-tight">R$ 497,00</span>
                </div>
                <p className="text-slate-400 text-xs mt-2">à vista ou parcelado no cartão</p>
              </div>

              <Button onClick={handleCheckout} fullWidth className="bg-emerald-600 hover:bg-emerald-700 text-white text-lg py-4 shadow-emerald-500/20 shadow-xl border-none">
                QUERO ME INSCREVER AGORA
              </Button>
            </div>
          </div>
        </div>
      </Section>

      {/* BLOCO 7: FAQ */}
      <Section className="bg-slate-50">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-slate-900 mb-3">
              Perguntas Frequentes
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-slate-200 rounded-lg overflow-hidden bg-white">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between p-4 text-left focus:outline-none hover:bg-slate-50 transition-colors"
                >
                  <span className="font-medium text-slate-800 pr-4">{faq.question}</span>
                  <ChevronDown className={`w-4 h-4 text-emerald-600 transition-transform duration-300 flex-shrink-0 ${openFaqIndex === index ? 'rotate-180' : ''}`} />
                </button>
                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openFaqIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="p-4 pt-4 text-slate-600 text-sm border-t border-slate-100">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* FOOTER */}
      <footer className="bg-slate-900 text-slate-400 py-8 border-t border-slate-800">
        <div className="max-w-4xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p>Copyright © 2026 Cíntia Camerin. Todos os direitos reservados.</p>
          <a
            href="https://wa.me/5511999086973?text=Olá,%20tenho%20dúvidas%20sobre%20o%20Curso%20de%20Defesa%20Energética"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            Dúvidas? Fale no WhatsApp
          </a>
        </div>
      </footer>

      {/* Mobile Sticky CTA */}
      <div className={`fixed bottom-0 left-0 right-0 p-4 bg-white border-t shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] md:hidden transition-transform duration-300 z-50 ${scrolled ? 'translate-y-0' : 'translate-y-full'}`}>
        <Button onClick={handleCheckout} fullWidth className="bg-emerald-600 text-white text-sm py-3 border-none">
          QUERO ME INSCREVER AGORA
        </Button>
      </div>

    </div>
  );
};

export default DefesaEnergetica;
