import React, { useState, useEffect } from 'react';
import { Section } from './components/Section';
import { Button } from './components/Button';
import {
  Shield,
  Zap,
  Users,
  Globe,
  CheckCircle,
  Calendar,
  Clock,
  Video,
  BookOpen,
  Award,
  ChevronRight,
  ChevronDown,
  Star,
  MessageCircle,
  PlayCircle
} from './components/Icons';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const CHECKOUT_LINK = "https://chk.eduzz.com/E0D654A691";

  const handleCheckout = () => {
    window.open(CHECKOUT_LINK, '_blank');
  };

  const scrollToPricing = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Preciso ter experiência ou ser terapeuta para fazer o curso?",
      answer: "Absolutamente não. O curso foi desenhado para ir do zero ao avançado. Se você nunca segurou um pêndulo na vida, eu vou te ensinar desde como escolher um até como consagrá-lo e usá-lo com segurança."
    },
    {
      question: "Preciso ser médium ou sensitivo para fazer o curso?",
      answer: "Não. A Mesa Quântica Celestial é uma ferramenta que pode ser aprendida por qualquer pessoa. Você não precisa ver espíritos ou ter dons desenvolvidos previamente. A técnica da radiestesia, aliada à egrégora da mesa, vai te ensinar a fazer a leitura e o tratamento energético, independentemente do seu nível atual de percepção."
    },
    {
      question: "O curso é vinculado a alguma religião?",
      answer: "Não. A espiritualidade é livre e luz é luz. Trabalhamos com egrégoras de alta vibração, como Arcanjos, Mestres da Fraternidade Branca e Seres Multidimensionais, mas isso não exige vínculo com nenhum dogma religioso. O foco é a conexão com a Fonte e a expansão da consciência."
    },
    {
      question: "Vou receber a Mesa Física em casa?",
      answer: "Para garantir que o curso seja acessível e imediato, você recebe o arquivo digital em alta resolução da Mesa Quântica Celestial. Você poderá imprimir em qualquer gráfica (ou em casa) e plastificar. Isso agiliza o seu processo de aprendizado e evita custos altos de frete."
    },
    {
      question: "E se eu perder as aulas ao vivo?",
      answer: "Fique tranquilo(a). Todas as aulas são gravadas e disponibilizadas na nossa plataforma exclusiva de alunos. Você tem acesso vitalício para rever quantas vezes quiser, no seu próprio ritmo."
    },
    {
      question: "Preciso comprar materiais caros?",
      answer: "Não. A única ferramenta essencial é um pêndulo, que você encontra facilmente em lojas esotéricas ou na internet por valores muito acessíveis. O restante (gráficos e a própria mesa) nós fornecemos os arquivos para impressão."
    },
    {
      question: "Serve para eu me autoaplicar?",
      answer: "Sim! Este é o primeiro passo. Antes de cuidar do outro, você aprenderá a diagnosticar e limpar a sua própria energia, a da sua casa e a dos seus familiares. É uma ferramenta de autonomia."
    },
    {
      question: "Posso trabalhar profissionalmente com a Mesa?",
      answer: "Sim. Ao concluir a formação, você estará apto a ser um operador da Mesa Quântica Celestial, podendo realizar atendimentos terapêuticos, limpezas de ambientes e harmonizações para clientes, além de cuidar da sua própria energia e da sua família."
    },
    {
      question: "O curso tem certificado?",
      answer: "Sim. Ao concluir a formação, você receberá um Certificado de Operador(a) da Mesa Quântica Celestial, habilitando você a trabalhar com a ferramenta se assim desejar."
    }
  ];

  return (
    <div className="font-sans min-h-screen flex flex-col">

      {/* Sticky Top Bar (Desktop) / Bottom Bar (Mobile) handled via fixed positioning */}
      <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-sm shadow-md py-3' : 'bg-transparent py-4'} hidden md:block`}>
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          <span className={`font-serif font-bold text-xl ${scrolled ? 'text-celestial-blue' : 'text-white'}`}>
            Mesa Quântica Celestial by Cíntia Camerin
          </span>
          <Button
            onClick={handleCheckout}
            variant={scrolled ? 'primary' : 'outline'}
            className="text-sm py-2 px-4"
          >
            Garantir Minha Vaga
          </Button>
        </div>
      </div>

      {/* BLOCO 1: HEADLINE E PROMESSA */}
      <div className="relative min-h-[90vh] flex items-center justify-center bg-[url('https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=2094&auto=format&fit=crop')] bg-cover bg-center bg-no-repeat bg-fixed">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/90 via-celestial-blue/80 to-slate-900/90"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white space-y-8 pt-20">

          {/* Badge */}
          <div className="inline-block bg-white/10 backdrop-blur-sm px-4 py-1 rounded-full border border-white/20 mb-6 animate-fade-in-up">
            <span className="text-gold-accent font-semibold uppercase tracking-wider text-sm">Curso da Mesa Quântica Celestial</span>
          </div>

          {/* Foto Cintia Camerin (Hero) - Aumentada e com efeito de fusão */}
          <div className="mb-8 flex justify-center relative">
            <div className="relative group">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-celestial-blue/50 blur-[50px] rounded-full scale-110"></div>

              <img
                src="https://cintia.marketsite.com.br/2.jpg"
                alt="Cíntia Camerin"
                className="w-48 h-48 md:w-72 md:h-72 rounded-full object-cover shadow-2xl relative z-10"
                style={{
                  maskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)',
                  WebkitMaskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)'
                }}
              />
            </div>
          </div>

          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold leading-tight drop-shadow-lg">
            Torne-se um <span className="text-gold-accent">Operador da Luz</span> e Assuma o Comando da Sua Realidade
          </h1>

          <p className="text-lg md:text-2xl text-slate-200 font-light max-w-2xl mx-auto leading-relaxed">
            Uma formação inédita e ao vivo com <strong className="text-white">Cíntia Camerin</strong> para você aprender a diagnosticar, limpar e harmonizar sua energia com a ferramenta canalizada diretamente das Egrégoras de Luz.
          </p>

          {/* Botão com maior espaçamento inferior */}
          <div className="pt-10 pb-24">
            <Button onClick={handleCheckout} className="mx-auto text-xl shadow-gold-accent/20 shadow-2xl animate-pulse">
              QUERO GARANTIR MINHA VAGA NA MESA CELESTIAL
              <ChevronRight className="w-6 h-6" />
            </Button>
          </div>
        </div>
      </div>

      {/* BLOCO 2: CONTEXTO E PROBLEMA (Reduzido e sem imagem) */}
      <Section className="bg-white">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-celestial-blue">
            2026: O Mundo Está Sacudindo?
          </h2>
          <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
            <p>
              Estamos vivendo um momento único na Transição Planetária. A luz está chegando com força total, trazendo à tona tudo o que estava escondido. A verdade é que muitas vezes culpamos o externo, mas <strong>você é o responsável pela porta que abre.</strong>
            </p>

            <div className="bg-red-50 border border-red-100 p-8 rounded-2xl shadow-sm">
              <p className="font-bold text-red-900 text-xl mb-2">
                Cuidado com o "Obsessor de Si Mesmo"
              </p>
              <p className="text-red-800">
                Se você não sabe blindar o seu campo e equilibrar suas emoções, você acaba se sabotando. Chega de terceirizar sua proteção. É hora de ter uma ferramenta cirúrgica para navegar esses tempos com autonomia.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* BLOCO 3: A SOLUÇÃO */}
      <Section dark className="bg-celestial-blue relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>

        <div className="relative z-10 text-center mb-16">
          <span className="text-gold-accent font-bold tracking-widest uppercase mb-2 block">A Solução</span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold mb-6">A Mesa Quântica Celestial</h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Radiestesia (Diagnóstico) + Radiônica (Tratamento)
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <img
              src="https://cintia.marketsite.com.br/3.jpeg"
              alt="Mesa Quântica Celestial Representação"
              className="rounded-xl shadow-2xl border-4 border-gold-accent/30 w-full hover:scale-[1.02] transition-transform duration-500"
            />
            <p className="text-center text-sm text-blue-200 mt-2 italic">*Imagem ilustrativa. A Mesa oficial será entregue no curso.</p>
          </div>

          <div className="space-y-8 order-1 md:order-2">
            <p className="text-lg text-blue-50">
              Esta não é apenas uma mesa radiônica comum. É uma <strong>tecnologia espiritual</strong> que eu canalizei diretamente através do contato com seres multidimensionais e egrégoras de alta vibração.
            </p>

            <div className="space-y-4">
              {[
                { title: "Diagnosticar", desc: "Entenda exatamente onde está o desequilíbrio (chakras, ambiente, saúde, prosperidade).", icon: <Star className="w-6 h-6 text-gold-accent" /> },
                { title: "Tratar e Harmonizar", desc: "Envie frequências de cura para 'resetar' a saúde perfeita e abrir caminhos.", icon: <Zap className="w-6 h-6 text-emerald-400" /> },
                { title: "Proteger", desc: "Ative escudos de proteção legítimos (como o Pentáculo Hebraico) para sua casa, carro e família.", icon: <Shield className="w-6 h-6 text-blue-300" /> },
                { title: "Expandir", desc: "Conecte-se com egrégoras de luz sem medo e com segurança.", icon: <Globe className="w-6 h-6 text-purple-300" /> }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4 items-start bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                  <div className="mt-1">{item.icon}</div>
                  <div>
                    <h4 className="font-bold text-white text-lg">{item.title}</h4>
                    <p className="text-blue-100">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* BLOCO 4: AS EGRÉGORAS */}
      <Section className="bg-white">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Você nunca estará trabalhando sozinho(a)
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            A Mesa Quântica Celestial foi desenhada para ancorar frequências de quatro grandes forças do universo.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "Arcanjo Miguel",
              sub: "Comando Micaélico",
              desc: "Para proteção absoluta, corte de laços negativos e a força da fé.",
              color: "border-blue-700",
              bg: "bg-gradient-to-br from-blue-100 via-blue-50 to-white",
              icon: <Shield className="w-8 h-8 text-blue-700" />,
              featured: true
            },
            {
              title: "Hierarquias Angelicais",
              sub: "Anjos e Arcangelinas",
              desc: "A doçura e a força das legiões celestiais para amparo e elevação espiritual.",
              color: "border-rose-400",
              bg: "bg-rose-50",
              icon: <Users className="w-8 h-8 text-rose-400" />
            },
            {
              title: "Fraternidade Branca",
              sub: "Mestres Ascensos",
              desc: "A conexão com os Mestres e a sabedoria dos 12 Raios.",
              color: "border-gold-accent",
              bg: "bg-amber-50",
              icon: <Star className="w-8 h-8 text-gold-accent" />
            },
            {
              title: "Federação Galáctica da Luz",
              sub: "Suporte Benevolente",
              desc: "O suporte de seres que auxiliam na transição da Terra.",
              color: "border-purple-500",
              bg: "bg-purple-50",
              icon: <Globe className="w-8 h-8 text-purple-500" />
            },
          ].map((card, idx) => (
            <div key={idx} className={`${card.bg} p-6 rounded-xl shadow-lg border-t-4 ${card.color} hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden group ${card.featured ? 'shadow-blue-900/10 ring-1 ring-blue-200 md:-translate-y-2' : ''}`}>

              {/* Background Icon for Featured Cards */}
              {card.featured && (
                <div className="absolute -right-8 -bottom-8 opacity-5 transition-transform duration-500 group-hover:scale-110 group-hover:opacity-10 pointer-events-none">
                  <Shield className="w-48 h-48 text-blue-900" />
                </div>
              )}

              <div className="flex flex-row items-center md:flex-col md:items-start gap-4 md:gap-0 mb-3 md:mb-0 relative z-10">
                <div className={`w-14 h-14 bg-white rounded-full flex items-center justify-center mb-0 md:mb-4 flex-shrink-0 shadow-sm ${card.featured ? 'ring-2 ring-blue-100' : ''}`}>
                  {card.icon}
                </div>
                <div>
                  <h3 className={`font-bold text-xl mb-1 ${card.featured ? 'text-blue-900' : 'text-slate-900'}`}>{card.title}</h3>
                  <p className="text-xs uppercase tracking-wider font-semibold text-slate-600 mb-1 md:mb-3">{card.sub}</p>
                </div>
              </div>
              <p className="text-slate-700 text-sm leading-relaxed mt-1 md:mt-0 relative z-10">{card.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* BLOCO 5 & 7: PARA QUEM É + MENTORA */}
      <Section className="bg-white overflow-hidden">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Para Quem É */}
          <div className="space-y-8">
            <h2 className="font-serif text-3xl font-bold text-celestial-blue">Para quem é este curso?</h2>
            <div className="space-y-4">
              {[
                { label: "Para quem busca Autonomia Espiritual", text: "Pare de depender de terceiros para entender o que está acontecendo na sua vida." },
                { label: "Para Terapeutas Holísticos", text: "Agregue uma ferramenta poderosa e canalizada aos seus atendimentos." },
                { label: "Para Iniciantes", text: "'Cíntia, nunca peguei num pêndulo!' Não tem problema. O curso vai do zero à prática avançada." },
                { label: "Para quem quer 'Vestir a Skin Humana'", text: "Viver bem, com prosperidade e saúde, honrando a experiência aqui na Terra." }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  <CheckCircle className="w-6 h-6 text-emerald-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-slate-800">{item.label}</h4>
                    <p className="text-slate-600 text-sm">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mentora Bio */}
          <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 relative">
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-gold-accent/20 rounded-full blur-xl"></div>
            <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
              {/* Foto da Bio Aumentada - AJUSTADA AQUI */}
              <img
                src="https://cintia.marketsite.com.br/1.jpg"
                alt="Cíntia Camerin"
                className="w-56 h-56 md:w-80 md:h-80 rounded-full object-cover border-4 border-white shadow-xl flex-shrink-0"
              />
              <div>
                <h3 className="font-serif text-2xl font-bold text-slate-900">Cíntia Camerin</h3>
                <p className="text-emerald-600 font-medium mb-3">Sensitiva, Terapeuta e Canalizadora</p>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  Minha missão é desmistificar a espiritualidade. Eu converso com seres multidimensionais, mas acredito que a espiritualidade verdadeira se prova no boleto pago, na paciência com a família e na ética.
                </p>
                <p className="text-slate-700 text-sm font-semibold italic">
                  "Não sou guru, sou apenas alguém que decidiu parar de fingir ser outra coisa."
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* BLOCO 6: LOGÍSTICA */}
      <Section className="bg-emerald-50/50">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-emerald-600 p-6 text-center text-white">
            <h2 className="font-serif text-2xl md:text-3xl font-bold">Como vai funcionar?</h2>
            <p className="opacity-90 mt-2">Formação 100% Online e Ao Vivo pelo Zoom</p>
          </div>
          <div className="p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="space-y-4">
                <h3 className="flex items-center gap-2 font-bold text-slate-800 text-xl">
                  <Calendar className="text-emerald-600" /> Datas dos Encontros
                </h3>
                <ul className="space-y-3 text-slate-600">
                  <li className="flex justify-between border-b pb-2">
                    <span>Janeiro 2026</span>
                    <span className="font-bold text-slate-900">Dias 22 e 29</span>
                  </li>
                  <li className="flex justify-between border-b pb-2">
                    <span>Fevereiro 2026</span>
                    <span className="font-bold text-slate-900">Dias 05, 19 e 26</span>
                  </li>
                  <li className="text-sm italic text-slate-500 pt-2">Sempre às quintas-feiras</li>
                </ul>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="flex items-center gap-2 font-bold text-slate-800 text-xl mb-2">
                    <Clock className="text-emerald-600" /> Horário
                  </h3>
                  <p className="text-slate-600">19h30 às 22h00 (Horário de Brasília)</p>
                </div>
                <div>
                  <h3 className="flex items-center gap-2 font-bold text-slate-800 text-xl mb-2">
                    <Video className="text-emerald-600" /> Acesso
                  </h3>
                  <p className="text-slate-600">Link exclusivo no Zoom + Gravações na plataforma</p>
                </div>
              </div>
            </div>

            <div className="bg-amber-50 border border-amber-200 p-4 rounded-lg flex gap-4 items-start">
              <div className="bg-amber-100 p-2 rounded-full">
                <PlayCircle className="w-5 h-5 text-amber-600" />
              </div>
              <div>
                <h4 className="font-bold text-amber-900">Perdeu uma aula?</h4>
                <p className="text-sm text-amber-800">Fique tranquilo(a). Todo o conteúdo ficará gravado. Você poderá rever quantas vezes quiser.</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* BLOCO 8: OFERTA */}
      <Section id="pricing" dark className="bg-slate-900 relative">
        {/* Decorative Light Rays */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-blue-500/20 blur-[100px] pointer-events-none"></div>

        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-5xl font-bold mb-6 text-white">
            Oportunidade de Lançamento
          </h2>
          <p className="text-slate-300 text-lg mb-12">
            Minha missão é espalhar luz e ferramentas de autonomia para o maior número de pessoas possível neste ano decisivo de 2026.
          </p>

          <div className="bg-white text-slate-800 rounded-3xl shadow-2xl overflow-hidden border-4 border-gold-accent transform transition-all hover:scale-[1.01]">
            <div className="bg-gold-accent p-3 text-center">
              <span className="font-bold text-slate-900 uppercase tracking-widest text-sm">Vagas Limitadas</span>
            </div>

            <div className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row gap-8 justify-center mb-8 text-left max-w-lg mx-auto">
                <ul className="space-y-4">
                  {[
                    "5 Aulas Ao Vivo com Cíntia Camerin",
                    "Acesso vitalício às gravações",
                    "Arquivo da Mesa Quântica Celestial (Print)",
                    "Apostila com Símbolos e Comandos",
                    "Certificado de Operador(a)"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                      <span className="font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-2 mb-8 border-t border-slate-100 pt-8">
                <p className="text-slate-400 line-through text-lg">De R$ 2.997,00</p>
                <div className="flex flex-col items-center">
                  <span className="text-lg text-slate-600 font-medium">Por apenas</span>
                  <div className="flex flex-col md:flex-row items-center justify-center gap-2 text-emerald-600">
                    <span className="text-2xl md:text-3xl font-bold">12x de</span>
                    <span className="text-4xl md:text-6xl font-bold tracking-tight">R$ 206,54</span>
                  </div>
                  <p className="text-slate-500 text-sm mt-2">ou R$ 1.997,00 à vista</p>
                </div>
              </div>

              <Button onClick={handleCheckout} fullWidth variant="primary" className="text-lg md:text-xl py-5 shadow-emerald-500/20 shadow-xl">
                SIM! QUERO SER UM OPERADOR
              </Button>

              <div className="mt-6 flex items-center justify-center gap-2 text-sm text-slate-500">
                <Shield className="w-4 h-4" />
                <span>Pagamento 100% Seguro</span>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* BLOCO: FAQ (Perguntas Frequentes) */}
      <Section className="bg-white">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-slate-900 mb-3">
              Perguntas Frequentes
            </h2>
            <p className="text-slate-500 text-sm">
              Tire suas dúvidas sobre a formação e a metodologia.
            </p>
          </div>

          <div className="space-y-3 mb-12">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-slate-200 rounded-lg overflow-hidden transition-all duration-300 hover:border-slate-400 bg-white"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between p-4 text-left focus:outline-none bg-slate-100 hover:bg-slate-200 transition-colors"
                >
                  <span className="font-medium text-slate-800 text-base pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-emerald-600 transition-transform duration-300 flex-shrink-0 opacity-70 ${openFaqIndex === index ? 'rotate-180' : ''}`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${openFaqIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <div className="p-4 pt-4 text-slate-600 text-sm leading-relaxed border-t border-slate-200 bg-white">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-celestial-blue/5 border border-celestial-blue/10 rounded-xl p-8 text-center max-w-2xl mx-auto">
            <p className="text-lg md:text-xl font-serif text-slate-700 italic leading-relaxed">
              "Lembre-se: sempre vai existir uma versão sua melhor pronta para aparecer, desde que você pare de fingir ser outra coisa. A Mesa Quântica Celestial é a ferramenta para revelar essa versão. Te espero do lado de cá para darmos esse salto juntos."
            </p>
          </div>
        </div>
      </Section>

      {/* BLOCO 9: GARANTIA & FOOTER */}
      <footer className="bg-slate-900 text-slate-400 pt-16 pb-32 md:pb-8 border-t border-slate-800">
        <div className="max-w-4xl mx-auto px-6 text-center">

          <div className="mb-16">
            <div className="inline-block p-4 rounded-full bg-slate-800 mb-6">
              <Shield className="w-12 h-12 text-gold-accent" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Garantia Incondicional de 7 Dias</h3>
            <p className="max-w-xl mx-auto">
              Entre, assista à primeira aula, sinta a energia. Se você achar que isso não é para você, peça seu reembolso total. O risco é todo meu.
            </p>
          </div>

          <div className="border-t border-slate-800 pt-8 space-y-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
              <p>Copyright © 2026 Cíntia Camerin. Todos os direitos reservados.</p>
              <a
                href="https://wa.me/5511931432736?text=Estou%20com%20d%C3%BAvidas%20sobre%20a%20forma%C3%A7%C3%A3o%20da%20C%C3%ADntia%20Camerin"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                Dúvidas? Fale no WhatsApp
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Mobile Sticky CTA */}
      <div className={`fixed bottom-0 left-0 right-0 p-4 bg-white border-t shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] md:hidden transition-transform duration-300 z-50 ${scrolled ? 'translate-y-0' : 'translate-y-full'}`}>
        <Button onClick={handleCheckout} fullWidth variant="primary" className="text-sm py-3">
          QUERO MINHA VAGA AGORA
        </Button>
      </div>

    </div>
  );
};

export default App;