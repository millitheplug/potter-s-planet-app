import * as React from "react";
import { useState } from "react";
import type { QuizQuestion } from "../../../types";

interface BibleQuizProps {
  onBack: () => void;
}

const SAMPLE_QUESTIONS: QuizQuestion[] = [
  {
    id: "1",
    question: "Who built the ark?",
    options: ["Moses", "Noah", "Abraham", "David"],
    correctAnswer: 1
  },
  // Add more questions here
];

export function BibleQuiz({ onBack }: BibleQuizProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const handleAnswer = (selectedIndex: number) => {
    if (selectedIndex === SAMPLE_QUESTIONS[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
    if (currentQuestion < SAMPLE_QUESTIONS.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  return (
    <stackLayout className="p-4">
      <button className="text-blue-600 mb-4" onTap={onBack}>← Back</button>
      
      <label className="text-xl font-bold mb-4">
        Question {currentQuestion + 1} of {SAMPLE_QUESTIONS.length}
      </label>
      
      <label className="text-lg mb-4">
        {SAMPLE_QUESTIONS[currentQuestion].question}
      </label>
      
      {SAMPLE_QUESTIONS[currentQuestion].options.map((option, index) => (
        <button
          key={index}
          className="bg-white p-4 rounded-lg mb-2"
          onTap={() => handleAnswer(index)}
        >
          {option}
        </button>
      ))}
      
      <label className="text-lg mt-4">Score: {score}</label>
    </stackLayout>
  );
}