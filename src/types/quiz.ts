export interface QuizQuestion {
  id: number;
  question: string;
  options: QuizOption[];
}

export interface QuizOption {
  text: string;
  emoji: string;
  value: number;
}

export interface QuizResult {
  score: number;
  title: string;
  description: string;
  level: 'baixo' | 'medio' | 'alto';
}
