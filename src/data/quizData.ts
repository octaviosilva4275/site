import { QuizQuestion, QuizResult } from '../types/quiz';

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "Quando ela te manda mensagem, você...",
    options: [
      { text: "Respondo na hora, ansioso", emoji: "😰", value: 1 },
      { text: "Demoro um pouco, mas respondo", emoji: "😊", value: 2 },
      { text: "Deixo no vácuo às vezes", emoji: "😎", value: 3 },
      { text: "Respondo quando quero", emoji: "🔥", value: 4 }
    ]
  },
  {
    id: 2,
    question: "Nos stories, você costuma...",
    options: [
      { text: "Reagir a tudo que ela posta", emoji: "👀", value: 1 },
      { text: "Reagir só quando é interessante", emoji: "💭", value: 2 },
      { text: "Visualizar e não reagir", emoji: "😏", value: 3 },
      { text: "Nem visualizo sempre", emoji: "🎯", value: 4 }
    ]
  },
  {
    id: 3,
    question: "Quando ela some por um dia...",
    options: [
      { text: "Fico preocupado e mando msg", emoji: "😟", value: 1 },
      { text: "Penso nela mas não demonstro", emoji: "🤔", value: 2 },
      { text: "Nem percebo direito", emoji: "🆒", value: 3 },
      { text: "Aproveito pra fazer minhas coisas", emoji: "💪", value: 4 }
    ]
  },
  {
    id: 4,
    question: "Suas mensagens pra ela são...",
    options: [
      { text: "Longas e emotivas", emoji: "💌", value: 1 },
      { text: "Equilibradas, nem muito nem pouco", emoji: "✍️", value: 2 },
      { text: "Curtas e diretas", emoji: "📱", value: 3 },
      { text: "Imprevisíveis e descontraídas", emoji: "⚡", value: 4 }
    ]
  }
];

export const getQuizResult = (totalScore: number): QuizResult => {
  if (totalScore <= 6) {
    return {
      score: totalScore,
      title: "Você Está Dando Atenção Demais",
      description: "Ela sabe que você está sempre disponível. Isso mata a tensão e o desejo. Você precisa aprender a criar distância estratégica.",
      level: 'baixo'
    };
  } else if (totalScore <= 11) {
    return {
      score: totalScore,
      title: "Você Está no Caminho Certo",
      description: "Você já tem noção de como gerar atração, mas ainda falta consistência. Com as técnicas certas, ela vai começar a te procurar mais.",
      level: 'medio'
    };
  } else {
    return {
      score: totalScore,
      title: "Você Domina o Jogo da Atração",
      description: "Você entende que menos é mais. Mas sempre há espaço para refinamento. Descubra as mensagens exatas que fazem ela te desejar ainda mais.",
      level: 'alto'
    };
  }
};
