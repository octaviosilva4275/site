import { useState, useEffect } from 'react';
import { MessageCircle, Heart, Zap, Shield, Check, ChevronLeft, ChevronRight } from 'lucide-react';

function App() {
  const [scrollY, setScrollY] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const testimonials = [
    {
      name: "Thiago",
      message: "Ela tava me ignorando há dias. Mandei uma das mensagens e em menos de 2 horas ela respondeu tipo: 'onde tu tava escondido isso tudo?' 😂🔥",
      stars: 5
    },
    {
      name: "Felipe Anvino",
      message: "Não acreditei quando vi: usei a primeira mensagem do módulo 1 e ela respondeu como se tivesse esperando eu mandar algo assim. Nunca mais fico no vácuo.",
      stars: 4
    },
    {
      name: "Murilo",
      message: "Essas mensagens têm alguma bruxaria, não é possível. Usei numa ex que disse que 'não queria mais papo'... ela respondeu rindo e já puxou assunto.",
      stars: 5
    },
    {
      name: "Eduardo",
      message: "Funciona até com mulher difícil. Usei com uma que tava me testando e virei o jogo em 2 dias.",
      stars: 5
    },
    {
      name: "Rafael Cardoso",
      message: "Pra quem acha que tá sem chance: eu tava na pior, ela me bloqueou. Desbloqueou depois que viu o que postei no status (dica do bônus). Inacreditável.",
      stars: 5
    },
    {
      name: "Daniel Marciel",
      message: "Já tinha tentado de tudo. Só aqui vi resultado real. Essas mensagens fazem ela pensar em ti mesmo quando não quer.",
      stars: 5
    },
    {
      name: "Igor Trassi",
      message: "Valeu demais o investimento. As mensagens são tipo chave-mestra tu usa e parece que ativa um botão na mente delas.",
      stars: 4
    },
    {
      name: "André",
      message: "Apliquei sem mudar uma palavra. Hoje ela me chama primeiro e vive querendo me ver. A virada foi surreal.",
      stars: 5
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <div
        className="fixed inset-0 bg-gradient-to-br from-red-950 via-black to-stone-950 opacity-90 z-0"
      />

      <div className="relative z-10">
        <section className="min-h-screen flex items-center justify-center px-4 py-20 relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(220,38,38,0.15)_0%,transparent_70%)]" />

          <div className="max-w-6xl mx-auto text-center space-y-8 animate-slide-up">
            <div className="inline-block">
              <MessageCircle className="w-16 h-16 text-red-600 mx-auto mb-6 animate-float" />
            </div>

            <h1 className="text-5xl md:text-7xl font-black leading-tight">
              Transforma um <span className="text-red-600">"visualizou e sumiu"</span> em encontro marcado em até <span className="text-red-600">7 dias</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Aprende as mensagens testadas que despertam <span className="text-red-500 font-bold">curiosidade, desejo</span> e fazem ela correr atrás — mesmo que tu ache que o jogo acabou.
            </p>

            <button
              onClick={() => window.location.href = "https://go.paradisepagbr.com/okvj7wbhiz"}
              className="bg-red-600 hover:bg-red-700 text-white font-black text-xl px-12 py-6 rounded-full transition-all transform hover:scale-105 animate-pulse-glow mt-8"
            >
              Quero Aprender Agora
            </button>

            <p className="text-sm text-gray-400 mt-4">
              ⚡ Acesso imediato após o pagamento
            </p>
          </div>
        </section>

        <section className="py-20 px-4 bg-gradient-to-b from-transparent via-red-950/10 to-transparent">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-stone-900/50 backdrop-blur-sm p-8 rounded-2xl border border-red-900/30 hover:border-red-600/50 transition-all hover:transform hover:scale-105">
                <MessageCircle className="w-12 h-12 text-red-600 mb-4" />
                <h3 className="text-2xl font-bold mb-3">Pare de ser ignorado no WhatsApp</h3>
                <p className="text-gray-400">Mensagens que geram resposta instantânea e mantêm a conversa viva</p>
              </div>

              <div className="bg-stone-900/50 backdrop-blur-sm p-8 rounded-2xl border border-red-900/30 hover:border-red-600/50 transition-all hover:transform hover:scale-105">
                <Heart className="w-12 h-12 text-red-600 mb-4" />
                <h3 className="text-2xl font-bold mb-3">Desperte o desejo e o interesse de volta</h3>
                <p className="text-gray-400">Técnicas psicológicas para reacender a chama e fazer ela pensar em ti</p>
              </div>

              <div className="bg-stone-900/50 backdrop-blur-sm p-8 rounded-2xl border border-red-900/30 hover:border-red-600/50 transition-all hover:transform hover:scale-105">
                <Zap className="w-12 h-12 text-red-600 mb-4" />
                <h3 className="text-2xl font-bold mb-3">Mensagens testadas que funcionam de verdade</h3>
                <p className="text-gray-400">Estratégias comprovadas por mais de 300 homens que viraram o jogo</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-4">
          <div className="max-w-2xl mx-auto">
            <div className="bg-gradient-to-br from-red-950 via-stone-900 to-black p-1 rounded-3xl border-2 border-yellow-600/40 hover:border-yellow-600/70 transition-all hover:shadow-2xl hover:shadow-red-600/20">
              <div className="bg-gradient-to-br from-stone-900 to-black p-10 rounded-3xl">
                <div className="text-center mb-8">
                  <h2 className="text-4xl md:text-5xl font-black mb-4 text-red-600">
                    Mensagens que Fazem Ela Correr Atrás
                  </h2>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    Aprende as mensagens certas pra virar o jogo e fazer qualquer mulher correr atrás de ti — mesmo que tu ache que ela perdeu o interesse.
                  </p>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <Check className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                    <span className="text-lg">Acesso imediato ao material completo</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                    <span className="text-lg">Bônus: templates de mensagens prontos para copiar e colar</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                    <span className="text-lg">Garantia incondicional de 7 dias</span>
                  </div>
                </div>

                <div className="bg-black/50 p-6 rounded-2xl mb-8 border border-red-900/30">
                  <div className="flex items-center justify-center gap-4 mb-2">
                    <span className="text-2xl text-gray-400 line-through">R$ 59,90</span>
                    <span className="text-5xl font-black text-red-600 animate-pulse-glow rounded-2xl p-3">R$ 19,99</span>
                  </div>
                  <p className="text-center text-gray-400 text-sm">Oferta por tempo limitado</p>
                </div>

                <button className="w-full bg-red-600 hover:bg-red-700 text-white font-black text-2xl px-8 py-6 rounded-full transition-all transform hover:scale-105 animate-pulse-glow">
                  Quero Acessar Agora
                </button>

                <p className="text-center text-xs text-gray-500 mt-4">
                  🔒 Pagamento 100% seguro • Pix ou Cartão
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-4 bg-gradient-to-b from-transparent via-stone-950/30 to-transparent">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black text-center mb-4">
              O Que Dizem <span className="text-red-600">Quem Já Aplicou</span>
            </h2>
            <p className="text-center text-gray-400 mb-12 text-lg">
              Mais de 300 caras já aplicaram e viram resultado em 7 dias
            </p>

            <div className="relative max-w-4xl mx-auto">
              <div className="bg-stone-900/50 backdrop-blur-sm p-8 rounded-2xl border border-red-900/30">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonials[currentTestimonial].stars)].map((_, i) => (
                    <span key={i} className="text-yellow-500 text-xl">⭐</span>
                  ))}
                </div>
                <p className="text-gray-200 text-lg leading-relaxed mb-4">
                  "{testimonials[currentTestimonial].message}"
                </p>
                <p className="font-bold text-white">
                  {testimonials[currentTestimonial].name}
                </p>
              </div>

              <div className="flex justify-center gap-4 mt-6">
                <button
                  onClick={prevTestimonial}
                  className="bg-stone-800 hover:bg-stone-700 p-3 rounded-full transition-all"
                  aria-label="Depoimento anterior"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <div className="flex items-center gap-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentTestimonial(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === currentTestimonial
                          ? 'bg-red-600 w-8'
                          : 'bg-stone-700 hover:bg-stone-600'
                      }`}
                      aria-label={`Ir para depoimento ${index + 1}`}
                    />
                  ))}
                </div>
                <button
                  onClick={nextTestimonial}
                  className="bg-stone-800 hover:bg-stone-700 p-3 rounded-full transition-all"
                  aria-label="Próximo depoimento"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black text-center mb-4">
              Por Que <span className="text-red-600">Funciona?</span>
            </h2>
            <p className="text-center text-gray-400 mb-12 text-lg">
              Baseado em psicologia comprovada e experiência real
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-stone-900/50 backdrop-blur-sm p-8 rounded-2xl border border-red-900/30">
                <div className="text-5xl font-black text-red-600 mb-4">1</div>
                <h3 className="text-2xl font-bold mb-3">Cria Curiosidade</h3>
                <p className="text-gray-400 leading-relaxed">
                  Mensagens estratégicas que ativam o gatilho psicológico da curiosidade, fazendo ela querer te responder.
                </p>
              </div>

              <div className="bg-stone-900/50 backdrop-blur-sm p-8 rounded-2xl border border-red-900/30">
                <div className="text-5xl font-black text-red-600 mb-4">2</div>
                <h3 className="text-2xl font-bold mb-3">Desperta Desejo</h3>
                <p className="text-gray-400 leading-relaxed">
                  Técnicas de comunicação que reativam a atração e fazem ela se lembrar do que tinha contigo.
                </p>
              </div>

              <div className="bg-stone-900/50 backdrop-blur-sm p-8 rounded-2xl border border-red-900/30">
                <div className="text-5xl font-black text-red-600 mb-4">3</div>
                <h3 className="text-2xl font-bold mb-3">Gera Ação</h3>
                <p className="text-gray-400 leading-relaxed">
                  Estratégias que transformam interesse em ação concreta — ela vai querer te ver pessoalmente.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Shield className="w-20 h-20 text-green-500 mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Garantia <span className="text-green-500">Total</span> de 7 Dias
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Se não sentir diferença nas tuas conversas em 7 dias, devolvemos teu dinheiro. Sem perguntas, sem burocracia.
            </p>
            <div className="flex justify-center gap-8 text-gray-400">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5" />
                <span>Pagamento Seguro</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5" />
                <span>Pix & Cartão</span>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-4 bg-gradient-to-t from-red-950/20 to-transparent">
          <div className="max-w-2xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-black">
              Pronto pra <span className="text-red-600">virar o jogo?</span>
            </h2>
            <p className="text-xl text-gray-300">
              Não deixa mais nenhuma conversa morrer. Aprende agora as mensagens que fazem ela correr atrás.
            </p>
            <button className="bg-red-600 hover:bg-red-700 text-white font-black text-2xl px-12 py-6 rounded-full transition-all transform hover:scale-105 animate-pulse-glow">
              Garantir Meu Acesso Agora
            </button>
          </div>
        </section>

        <footer className="bg-black border-t border-stone-900 py-8 px-4">
          <div className="max-w-6xl mx-auto text-center space-y-4">
            <p className="text-gray-500 text-sm">
              © 2025 Mensagens que Fazem Ela Correr Atrás. Todos os direitos reservados.
            </p>
            <div className="flex justify-center gap-6 text-sm text-gray-500">
              <a href="#" className="hover:text-red-500 transition-colors">Política de Privacidade</a>
              <a href="#" className="hover:text-red-500 transition-colors">Termos de Uso</a>
              <a href="#" className="hover:text-red-500 transition-colors">Suporte</a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
