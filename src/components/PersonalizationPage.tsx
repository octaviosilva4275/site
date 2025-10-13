import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Heart, Calendar, Target, ArrowRight, Sparkles } from 'lucide-react';

interface PersonalizationData {
  name: string;
  situation: string;
  timeKnowing: string;
  goal: string;
}

interface PersonalizationPageProps {
  onComplete: (data: PersonalizationData) => void;
}

export default function PersonalizationPage({ onComplete }: PersonalizationPageProps) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<PersonalizationData>({
    name: '',
    situation: '',
    timeKnowing: '',
    goal: ''
  });

  const situations = [
    { value: 'conhecendo', label: 'Estamos nos conhecendo', emoji: '👀' },
    { value: 'ficando', label: 'Já ficamos algumas vezes', emoji: '😘' },
    { value: 'relacionamento', label: 'Tivemos um relacionamento', emoji: '💔' },
    { value: 'amigos', label: 'Somos amigos há tempo', emoji: '🤝' }
  ];

  const timeOptions = [
    { value: 'semanas', label: 'Algumas semanas', emoji: '⏳' },
    { value: 'meses', label: 'Alguns meses', emoji: '📅' },
    { value: '6meses', label: 'Mais de 6 meses', emoji: '📆' },
    { value: 'anos', label: 'Mais de um ano', emoji: '🗓️' }
  ];

  const goals = [
    { value: 'interesse', label: 'Fazer ela se interessar por mim', emoji: '✨' },
    { value: 'reconquistar', label: 'Reconquistar ela', emoji: '🔥' },
    { value: 'manter', label: 'Manter o interesse vivo', emoji: '💫' },
    { value: 'avançar', label: 'Avançar para relacionamento', emoji: '💕' }
  ];

  const handleNext = () => {
    if (step === 1 && formData.name) {
      setStep(2);
    } else if (step === 2 && formData.situation) {
      setStep(3);
    } else if (step === 3 && formData.timeKnowing) {
      setStep(4);
    }
  };

  const handleSubmit = (goal: string) => {
    const finalData = { ...formData, goal };
    onComplete(finalData);
  };

  const progress = (step / 4) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-950 via-neutral-950 to-black flex items-center justify-center p-4 overflow-hidden">
      <div className="w-full max-w-2xl">
        {/* Progress Bar */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="flex justify-between text-white/60 text-sm mb-2">
            <span>Personalizando sua experiência</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="h-2 bg-white/10 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-amber-600 to-amber-400"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          {/* Step 1: Name */}
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.4 }}
              className="space-y-8"
            >
              <div className="text-center space-y-4">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring" }}
                  className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-amber-600 to-amber-500 text-white mb-4"
                >
                  <User className="w-10 h-10" />
                </motion.div>

                <h2 className="text-3xl md:text-5xl font-serif text-white leading-tight">
                  Antes de continuar, como posso te chamar?
                </h2>
                <p className="text-lg text-white/70">
                  Vamos personalizar sua experiência
                </p>
              </div>

              <div className="space-y-4">
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  onKeyPress={(e) => e.key === 'Enter' && handleNext()}
                  placeholder="Digite seu nome..."
                  className="w-full px-6 py-5 bg-white/10 border-2 border-white/20 rounded-2xl text-white text-lg placeholder-white/40 focus:border-amber-500 focus:outline-none transition-all"
                  autoFocus
                />

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleNext}
                  disabled={!formData.name}
                  className={`w-full py-5 px-6 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 transition-all ${
                    formData.name
                      ? 'bg-gradient-to-r from-amber-600 to-amber-500 text-white shadow-lg shadow-amber-500/30 hover:shadow-amber-500/50'
                      : 'bg-white/10 text-white/40 cursor-not-allowed'
                  }`}
                >
                  Continuar
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </div>
            </motion.div>
          )}

          {/* Step 2: Situation */}
          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.4 }}
              className="space-y-8"
            >
              <div className="text-center space-y-4">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring" }}
                  className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-amber-600 to-amber-500 text-white mb-4"
                >
                  <Heart className="w-10 h-10" />
                </motion.div>

                <h2 className="text-3xl md:text-5xl font-serif text-white leading-tight">
                  Qual é sua situação com ela, {formData.name}?
                </h2>
              </div>

              <div className="grid gap-4">
                {situations.map((situation, index) => (
                  <motion.button
                    key={situation.value}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    whileHover={{ scale: 1.02, x: 10 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                      setFormData({ ...formData, situation: situation.value });
                      setTimeout(() => setStep(3), 300);
                    }}
                    className="w-full p-6 rounded-2xl border-2 bg-white/5 border-white/20 hover:border-amber-500/50 hover:bg-white/10 transition-all text-left flex items-center gap-4 group"
                  >
                    <span className="text-4xl">{situation.emoji}</span>
                    <span className="text-lg md:text-xl text-white font-medium flex-1">
                      {situation.label}
                    </span>
                    <ArrowRight className="w-5 h-5 text-white/40 group-hover:text-amber-500 transition-colors" />
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}

          {/* Step 3: Time */}
          {step === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.4 }}
              className="space-y-8"
            >
              <div className="text-center space-y-4">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring" }}
                  className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-amber-600 to-amber-500 text-white mb-4"
                >
                  <Calendar className="w-10 h-10" />
                </motion.div>

                <h2 className="text-3xl md:text-5xl font-serif text-white leading-tight">
                  Há quanto tempo você a conhece?
                </h2>
              </div>

              <div className="grid gap-4">
                {timeOptions.map((time, index) => (
                  <motion.button
                    key={time.value}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    whileHover={{ scale: 1.02, x: 10 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                      setFormData({ ...formData, timeKnowing: time.value });
                      setTimeout(() => setStep(4), 300);
                    }}
                    className="w-full p-6 rounded-2xl border-2 bg-white/5 border-white/20 hover:border-amber-500/50 hover:bg-white/10 transition-all text-left flex items-center gap-4 group"
                  >
                    <span className="text-4xl">{time.emoji}</span>
                    <span className="text-lg md:text-xl text-white font-medium flex-1">
                      {time.label}
                    </span>
                    <ArrowRight className="w-5 h-5 text-white/40 group-hover:text-amber-500 transition-colors" />
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}

          {/* Step 4: Goal */}
          {step === 4 && (
            <motion.div
              key="step4"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.4 }}
              className="space-y-8"
            >
              <div className="text-center space-y-4">
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.2, type: "spring" }}
                  className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-amber-600 to-amber-500 text-white mb-4"
                >
                  <Target className="w-10 h-10" />
                </motion.div>

                <h2 className="text-3xl md:text-5xl font-serif text-white leading-tight">
                  Qual é o seu objetivo com ela?
                </h2>
                <p className="text-lg text-white/70">
                  Isso vai me ajudar a personalizar suas recomendações
                </p>
              </div>

              <div className="grid gap-4">
                {goals.map((goal, index) => (
                  <motion.button
                    key={goal.value}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    whileHover={{ scale: 1.02, x: 10 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleSubmit(goal.value)}
                    className="w-full p-6 rounded-2xl border-2 bg-white/5 border-white/20 hover:border-amber-500/50 hover:bg-white/10 transition-all text-left flex items-center gap-4 group relative overflow-hidden"
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-amber-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
                      initial={false}
                    />
                    <span className="text-4xl relative z-10">{goal.emoji}</span>
                    <span className="text-lg md:text-xl text-white font-medium flex-1 relative z-10">
                      {goal.label}
                    </span>
                    <Sparkles className="w-5 h-5 text-amber-500 opacity-0 group-hover:opacity-100 transition-opacity relative z-10" />
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Back Button */}
        {step > 1 && (
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={() => setStep(step - 1)}
            className="mt-6 text-white/60 hover:text-white transition-colors flex items-center gap-2"
          >
            <ArrowRight className="w-4 h-4 rotate-180" />
            Voltar
          </motion.button>
        )}
      </div>
    </div>
  );
}
