import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Check,
  Star,
  Clock,
  Users,
  Shield,
  Zap,
  Gift,
  Lock,
  TrendingUp,
  MessageSquare
} from 'lucide-react';

export default function CheckoutPage() {
  const [showBonus, setShowBonus] = useState(false);

  const handleAddToCart = () => {
    alert('Sistema de pagamento em desenvolvimento. Entre em contato para adquirir!');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-950 via-neutral-950 to-black">
      <div className="max-w-6xl mx-auto px-4 py-12 md:py-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12 space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/20 border border-amber-500/50 rounded-full text-amber-400 text-sm font-semibold mb-4">
            <Clock className="w-4 h-4" />
            <span>Oferta por Tempo Limitado</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-serif text-white leading-tight">
            Mensagens Que Fazem Ela <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">
              Correr Atrás de Você
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto">
            O método completo para dominar a comunicação masculina e fazer ela te desejar intensamente
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Video Placeholder */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="aspect-video bg-gradient-to-br from-amber-950/30 to-neutral-950/30 rounded-2xl border border-white/10 flex items-center justify-center overflow-hidden relative group"
            >
              <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/6896164/pexels-photo-6896164.jpeg?auto=compress&cs=tinysrgb&w=1200')] bg-cover bg-center opacity-30" />
              <div className="relative z-10 text-center space-y-4">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="w-20 h-20 rounded-full bg-amber-500 flex items-center justify-center cursor-pointer shadow-2xl shadow-amber-500/50"
                >
                  <div className="w-0 h-0 border-l-[20px] border-l-white border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent ml-1" />
                </motion.div>
                <p className="text-white text-lg font-semibold">Assista à Apresentação Completa</p>
              </div>
            </motion.div>

            {/* What You Get */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 p-8"
            >
              <h2 className="text-3xl font-serif text-white mb-6 flex items-center gap-3">
                <Gift className="w-8 h-8 text-amber-500" />
                O Que Você Vai Receber
              </h2>

              <div className="space-y-4">
                {[
                  {
                    title: "Módulo 1: As 7 Mensagens Magnéticas",
                    description: "Templates exatos de mensagens que ativam o instinto de perseguição feminino"
                  },
                  {
                    title: "Módulo 2: O Poder do Silêncio Estratégico",
                    description: "Quando e como usar o 'vácuo' para aumentar o desejo dela por você"
                  },
                  {
                    title: "Módulo 3: Push & Pull via Texto",
                    description: "A técnica avançada de aproximação e distanciamento que cria tensão sexual"
                  },
                  {
                    title: "Módulo 4: Respostas Imprevisíveis",
                    description: "Como manter ela sempre curiosa e pensando em você"
                  },
                  {
                    title: "Módulo 5: Stories e Redes Sociais",
                    description: "Use suas redes para criar atração passiva e fazer ela te procurar"
                  }
                ].map((module, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="flex gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-amber-500/30 transition-all"
                  >
                    <div className="w-8 h-8 rounded-full bg-amber-500 flex items-center justify-center flex-shrink-0">
                      <Check className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold text-lg mb-1">{module.title}</h3>
                      <p className="text-white/70">{module.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Bonus Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="bg-gradient-to-r from-amber-950/50 to-amber-900/30 backdrop-blur-lg rounded-2xl border-2 border-amber-500/50 p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-amber-500 flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-serif text-white">Bônus Exclusivos</h2>
              </div>

              <div className="space-y-4">
                {[
                  {
                    title: "E-book: 50 Exemplos Reais de Conversas",
                    value: "R$ 97",
                    description: "Conversas reais que geraram encontros e relacionamentos"
                  },
                  {
                    title: "Guia: Como Lidar com Testes Femininos",
                    value: "R$ 67",
                    description: "Responda aos testes de forma que ela te respeite mais"
                  },
                  {
                    title: "Checklist: Sinais de Que Ela Está Interessada",
                    value: "R$ 47",
                    description: "Nunca mais perca o timing certo para avançar"
                  }
                ].map((bonus, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.9 + index * 0.1 }}
                    className="flex items-center gap-4 p-4 rounded-xl bg-black/30 border border-amber-500/30"
                  >
                    <div className="flex-1">
                      <h3 className="text-white font-semibold text-lg">{bonus.title}</h3>
                      <p className="text-white/70 text-sm">{bonus.description}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-amber-400 font-bold text-lg">{bonus.value}</div>
                      <div className="text-white/50 text-sm line-through">De: R$ {parseInt(bonus.value.replace('R$ ', '')) + 50}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Social Proof */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 p-8"
            >
              <h2 className="text-2xl font-serif text-white mb-6 flex items-center gap-3">
                <Star className="w-7 h-7 text-amber-500" />
                O Que Dizem Nossos Alunos
              </h2>

              <div className="grid md:grid-cols-2 gap-4">
                {[
                  {
                    name: "Carlos, 28 anos",
                    text: "Em 2 semanas aplicando o método, ela começou a me procurar todo dia. Funciona mesmo!",
                    stars: 5
                  },
                  {
                    name: "Ricardo, 32 anos",
                    text: "Eu sempre dava atenção demais. Depois que aprendi a dosar, tudo mudou na minha vida amorosa.",
                    stars: 5
                  },
                  {
                    name: "Felipe, 25 anos",
                    text: "As mensagens exatas do módulo 1 são ouro puro. Testei e recebi resposta em minutos.",
                    stars: 5
                  },
                  {
                    name: "André, 30 anos",
                    text: "Finalmente entendi o jogo da atração. Agora eu que escolho, não o contrário.",
                    stars: 5
                  }
                ].map((testimonial, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.3 + index * 0.1 }}
                    className="p-6 rounded-xl bg-white/5 border border-white/10"
                  >
                    <div className="flex gap-1 mb-3">
                      {[...Array(testimonial.stars)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
                      ))}
                    </div>
                    <p className="text-white/90 mb-3 italic">"{testimonial.text}"</p>
                    <p className="text-amber-400 font-semibold text-sm">{testimonial.name}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Sidebar - Pricing */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="sticky top-8 bg-white/5 backdrop-blur-lg rounded-2xl border-2 border-amber-500/50 p-8 space-y-6"
            >
              <div className="text-center space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-500/20 border border-red-500 rounded-full text-red-400 text-xs font-bold">
                  <Clock className="w-3 h-3" />
                  PROMOÇÃO TERMINA EM BREVE
                </div>

                <div>
                  <div className="text-white/60 text-sm mb-2">De: R$ 497</div>
                  <div className="text-white/50 text-3xl line-through mb-2">R$ 297</div>
                  <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">
                    R$ 147
                  </div>
                  <div className="text-white/70 text-sm mt-2">ou 12x de R$ 14,50</div>
                </div>

                <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/20 border border-green-500 rounded-full text-green-400 text-sm font-semibold">
                  <TrendingUp className="w-4 h-4" />
                  70% OFF
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleAddToCart}
                className="w-full py-5 px-6 bg-gradient-to-r from-amber-600 to-amber-500 text-white text-xl font-bold rounded-xl shadow-2xl shadow-amber-500/30 hover:shadow-amber-500/50 transition-all duration-300"
              >
                Garantir Meu Acesso Agora
              </motion.button>

              <div className="space-y-3">
                {[
                  { icon: Shield, text: "Garantia de 7 dias" },
                  { icon: Lock, text: "Pagamento 100% seguro" },
                  { icon: Zap, text: "Acesso imediato" },
                  { icon: Users, text: "+2.847 alunos" },
                  { icon: MessageSquare, text: "Suporte via WhatsApp" }
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3 text-white/80">
                    <item.icon className="w-5 h-5 text-amber-500" />
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>

              <div className="pt-6 border-t border-white/10">
                <p className="text-white/60 text-sm text-center leading-relaxed">
                  Investimento único. Sem mensalidades. Acesso vitalício a todas as atualizações.
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
          className="mt-16 max-w-3xl mx-auto bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 p-8"
        >
          <h2 className="text-3xl font-serif text-white mb-8 text-center">Perguntas Frequentes</h2>

          <div className="space-y-4">
            {[
              {
                q: "Isso funciona para qualquer tipo de mulher?",
                a: "Sim! Os princípios de atração são universais. O método se adapta a diferentes perfis e situações."
              },
              {
                q: "Quanto tempo leva para ver resultados?",
                a: "A maioria dos alunos relata mudanças perceptíveis nas primeiras 2 semanas de aplicação."
              },
              {
                q: "E se eu não souber como começar?",
                a: "O método é passo a passo, com exemplos práticos e templates prontos para usar."
              },
              {
                q: "Tenho garantia?",
                a: "Sim! 7 dias de garantia incondicional. Se não gostar, devolvemos 100% do seu dinheiro."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.6 + index * 0.1 }}
                className="p-6 rounded-xl bg-white/5 border border-white/10"
              >
                <h3 className="text-white font-semibold text-lg mb-2">{faq.q}</h3>
                <p className="text-white/70">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
