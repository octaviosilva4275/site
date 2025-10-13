import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { quizQuestions } from '../data/quizData';
import { QuizOption } from '../types/quiz';

interface QuizFlowProps {
  onComplete: (score: number) => void;
}

export default function QuizFlow({ onComplete }: QuizFlowProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [totalScore, setTotalScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  const handleOptionSelect = (option: QuizOption) => {
    setSelectedOption(option.value);

    setTimeout(() => {
      const newScore = totalScore + option.value;
      setTotalScore(newScore);

      if (currentQuestion < quizQuestions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedOption(null);
      } else {
        onComplete(newScore);
      }
    }, 600);
  };

  const question = quizQuestions[currentQuestion];
  const progress = ((currentQuestion + 1) / quizQuestions.length) * 100;

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
            <span>Pergunta {currentQuestion + 1} de {quizQuestions.length}</span>
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

        {/* Question */}
        <AnimatePresence mode="wait">
          <motion.div
            key={question.id}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.4 }}
            className="space-y-8"
          >
            <motion.h2
              className="text-3xl md:text-5xl font-serif text-white text-center leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              {question.question}
            </motion.h2>

            <div className="space-y-4">
              {question.options.map((option, index) => (
                <motion.button
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  whileHover={{ scale: 1.02, x: 10 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleOptionSelect(option)}
                  disabled={selectedOption !== null}
                  className={`w-full p-6 rounded-2xl border-2 transition-all duration-300 text-left flex items-center gap-4 group ${
                    selectedOption === option.value
                      ? 'bg-amber-600/20 border-amber-500 shadow-lg shadow-amber-500/20'
                      : 'bg-white/5 border-white/20 hover:border-amber-500/50 hover:bg-white/10'
                  }`}
                >
                  <motion.span
                    className="text-4xl"
                    animate={selectedOption === option.value ? {
                      scale: [1, 1.3, 1],
                      rotate: [0, 10, -10, 0]
                    } : {}}
                    transition={{ duration: 0.5 }}
                  >
                    {option.emoji}
                  </motion.span>
                  <span className="text-lg md:text-xl text-white font-medium flex-1">
                    {option.text}
                  </span>
                  <motion.div
                    className="w-6 h-6 rounded-full border-2 border-white/40 flex items-center justify-center"
                    animate={selectedOption === option.value ? {
                      borderColor: '#f59e0b',
                      backgroundColor: '#f59e0b'
                    } : {}}
                  >
                    {selectedOption === option.value && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="w-3 h-3 bg-white rounded-full"
                      />
                    )}
                  </motion.div>
                </motion.button>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
