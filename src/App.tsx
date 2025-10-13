import { useState } from 'react';
import QuizFlow from './components/QuizFlow';
import LoadingAnalysis from './components/LoadingAnalysis';
import PersonalizationPage from './components/PersonalizationPage';
import ResultsPage from './components/ResultsPage';
import CheckoutPage from './components/CheckoutPage';
import { getQuizResult } from './data/quizData';
import { QuizResult } from './types/quiz';

type AppState = 'quiz' | 'loading' | 'personalization' | 'results' | 'checkout';

interface PersonalizationData {
  name: string;
  situation: string;
  timeKnowing: string;
  goal: string;
}

function App() {
  const [currentState, setCurrentState] = useState<AppState>('quiz');
  const [quizScore, setQuizScore] = useState<number>(0);
  const [result, setResult] = useState<QuizResult | null>(null);
  const [personalizationData, setPersonalizationData] = useState<PersonalizationData | null>(null);

  const handleQuizComplete = (score: number) => {
    setQuizScore(score);
    setCurrentState('loading');
  };

  const handleLoadingComplete = () => {
    const quizResult = getQuizResult(quizScore);
    setResult(quizResult);
    setCurrentState('personalization');
  };

  const handlePersonalizationComplete = (data: PersonalizationData) => {
    setPersonalizationData(data);
    setCurrentState('results');
  };

  const handleContinueToCheckout = () => {
    setCurrentState('checkout');
  };

  return (
    <>
      {currentState === 'quiz' && (
        <QuizFlow onComplete={handleQuizComplete} />
      )}

      {currentState === 'loading' && (
        <LoadingAnalysis onComplete={handleLoadingComplete} />
      )}

      {currentState === 'personalization' && (
        <PersonalizationPage onComplete={handlePersonalizationComplete} />
      )}

      {currentState === 'results' && result && (
        <ResultsPage result={result} onContinue={handleContinueToCheckout} />
      )}

      {currentState === 'checkout' && (
        <CheckoutPage />
      )}
    </>
  );
}

export default App;
