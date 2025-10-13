import { motion } from 'framer-motion';
import { QuizResult } from '../types/quiz';
import { Flame, MessageCircle, Heart, ArrowRight } from 'lucide-react';

interface ResultsPageProps {
  result: QuizResult;
  onContinue: () => void;
}

export default function ResultsPage({ result, onContinue }: ResultsPageProps) {
  const getGradientByLevel = () => {
    switch (result.level) {
      case 'baixo':
        return 'from-red-600 to-orange-600';
      case 'medio':
        return 'from-amber-600 to-yellow-600';
      case 'alto':
        return 'from-green-600 to-emerald-600';
    }
  };

  const getIconByLevel = () => {
    switch (result.level) {
      case 'baixo':
        return <Heart className="w-12 h-12" />;
      case 'medio':
        return <MessageCircle className="w-12 h-12" />;
      case 'alto':
        return <Flame className="w-12 h-12" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-950 via-neutral-950 to-black flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-3xl"
      >
        <div className="bg-white/5 backdrop-blur-lg rounded-3xl border border-white/10 overflow-hidden">
          {/* Header with Icon */}
          <div className="relative p-8 md:p-12 text-center">
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
              className={`inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br ${getGradientByLevel()} text-white mb-6 shadow-2xl`}
            >
              {getIconByLevel()}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="space-y-4"
            >
              <h1 className="text-4xl md:text-5xl font-serif text-white leading-tight">
                {result.title}
              </h1>
              <p className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto leading-relaxed">
                {result.description}
              </p>
            </motion.div>
          </div>

          {/* Score Display */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="px-8 pb-6"
          >
            <div className={`bg-gradient-to-r ${getGradientByLevel()} p-1 rounded-2xl`}>
              <div className="bg-neutral-950 rounded-2xl p-6 text-center">
                <div className="text-white/60 text-sm uppercase tracking-wider mb-2">
                  Sua Pontuação
                </div>
                <div className="text-6xl font-bold text-white">
                  {result.score}
                  <span className="text-2xl text-white/60">/16</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Benefits Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="p-8 md:p-12 space-y-6 bg-black/20"
          >
            <h3 className="text-2xl font-serif text-amber-400 text-center mb-6">
              O Que Você Vai Descobrir
            </h3>

            <div className="grid md:grid-cols-2 gap-4">
              {[
                "As 7 mensagens exatas que ativam o desejo feminino",
                "Como usar o silêncio estratégico a seu favor",
                "Técnicas de comunicação que criam tensão sexual",
                "O método do 'Push & Pull' via texto"
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1 + index * 0.1 }}
                  className="flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/10"
                >
                  <div className="w-6 h-6 rounded-full bg-amber-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-white rounded-full" />
                  </div>
                  <p className="text-white/90 leading-relaxed">{benefit}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3 }}
            className="p-8 md:p-12 pt-0"
          >
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={onContinue}
              className="w-full py-6 px-8 bg-gradient-to-r from-amber-600 to-amber-500 text-white text-xl font-bold rounded-2xl shadow-2xl shadow-amber-500/30 hover:shadow-amber-500/50 transition-all duration-300 flex items-center justify-center gap-3 group"
            >
              <Flame className="w-6 h-6" />
              <span>Descobrir as Mensagens Que Funcionam</span>
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <ArrowRight className="w-6 h-6" />
              </motion.div>
            </motion.button>

            <p className="text-center text-white/50 text-sm mt-4">
              Acesso instantâneo ao método completo
            </p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
