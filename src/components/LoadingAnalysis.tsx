import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface LoadingAnalysisProps {
  onComplete: () => void;
}

const analysisSteps = [
  "Analisando suas respostas...",
  "Avaliando seu nível de atração...",
  "Calculando seu potencial...",
  "Gerando seu diagnóstico personalizado..."
];

export default function LoadingAnalysis({ onComplete }: LoadingAnalysisProps) {
  const [progress, setProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const stepDuration = 1000;
    const progressInterval = 40;
    const progressIncrement = 100 / ((stepDuration * analysisSteps.length) / progressInterval);

    const progressTimer = setInterval(() => {
      setProgress(prev => {
        const next = prev + progressIncrement;
        if (next >= 100) {
          clearInterval(progressTimer);
          setTimeout(() => onComplete(), 500);
          return 100;
        }
        return next;
      });
    }, progressInterval);

    const stepTimer = setInterval(() => {
      setCurrentStep(prev => {
        if (prev < analysisSteps.length - 1) {
          return prev + 1;
        }
        clearInterval(stepTimer);
        return prev;
      });
    }, stepDuration);

    return () => {
      clearInterval(progressTimer);
      clearInterval(stepTimer);
    };
  }, [onComplete]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-950 via-neutral-950 to-black flex items-center justify-center p-4">
      <div className="w-full max-w-2xl space-y-12">
        {/* Animated Icon */}
        <motion.div
          className="flex justify-center"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="relative"
            animate={{
              rotate: 360
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <div className="w-32 h-32 border-4 border-amber-500/20 border-t-amber-500 rounded-full" />
          </motion.div>
        </motion.div>

        {/* Current Step */}
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="text-center space-y-4"
        >
          <h2 className="text-2xl md:text-3xl font-serif text-white">
            {analysisSteps[currentStep]}
          </h2>

          <motion.div
            className="flex justify-center gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="w-3 h-3 bg-amber-500 rounded-full"
                animate={{
                  y: [0, -15, 0],
                  opacity: [0.3, 1, 0.3]
                }}
                transition={{
                  duration: 0.8,
                  repeat: Infinity,
                  delay: i * 0.2
                }}
              />
            ))}
          </motion.div>
        </motion.div>

        {/* Progress Bar */}
        <div className="space-y-3">
          <div className="h-3 bg-white/10 rounded-full overflow-hidden backdrop-blur-sm">
            <motion.div
              className="h-full bg-gradient-to-r from-amber-600 via-amber-500 to-amber-400 relative overflow-hidden"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ ease: "linear" }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                animate={{
                  x: ['-100%', '200%']
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
            </motion.div>
          </div>

          <div className="flex justify-between text-white/60 text-sm">
            <span>Processando...</span>
            <span className="font-semibold text-amber-400">{Math.round(progress)}%</span>
          </div>
        </div>

        {/* Particles Effect */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-amber-500/30 rounded-full"
              initial={{
                x: Math.random() * window.innerWidth,
                y: window.innerHeight + 20
              }}
              animate={{
                y: -20,
                opacity: [0, 1, 0]
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 2
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
