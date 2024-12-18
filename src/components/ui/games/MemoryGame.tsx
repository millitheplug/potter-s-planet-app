import * as React from "react";
import { useState, useEffect } from "react";

interface MemoryGameProps {
  onBack: () => void;
}

interface Card {
  id: number;
  value: string;
  isFlipped: boolean;
  isMatched: boolean;
}

const BIBLE_PAIRS = [
  "Noah", "Ark",
  "David", "Goliath",
  "Moses", "Red Sea",
  // Add more pairs
];

export function MemoryGame({ onBack }: MemoryGameProps) {
  const [cards, setCards] = useState<Card[]>([]);
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  
  useEffect(() => {
    initializeGame();
  }, []);

  const initializeGame = () => {
    const gameCards: Card[] = [];
    BIBLE_PAIRS.forEach((pair, index) => {
      gameCards.push({
        id: index * 2,
        value: pair,
        isFlipped: false,
        isMatched: false
      });
      gameCards.push({
        id: index * 2 + 1,
        value: pair,
        isFlipped: false,
        isMatched: false
      });
    });
    
    // Shuffle cards
    for (let i = gameCards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [gameCards[i], gameCards[j]] = [gameCards[j], gameCards[i]];
    }
    
    setCards(gameCards);
  };

  const handleCardTap = (cardId: number) => {
    if (flippedCards.length === 2) return;
    
    const newCards = [...cards];
    const card = newCards.find(c => c.id === cardId);
    if (!card || card.isMatched) return;
    
    card.isFlipped = true;
    setCards(newCards);
    
    const newFlippedCards = [...flippedCards, cardId];
    setFlippedCards(newFlippedCards);
    
    if (newFlippedCards.length === 2) {
      const [firstId, secondId] = newFlippedCards;
      const firstCard = cards.find(c => c.id === firstId);
      const secondCard = cards.find(c => c.id === secondId);
      
      if (firstCard?.value === secondCard?.value) {
        // Match found
        firstCard.isMatched = true;
        secondCard.isMatched = true;
        setFlippedCards([]);
      } else {
        // No match
        setTimeout(() => {
          const resetCards = cards.map(c => {
            if (c.id === firstId || c.id === secondId) {
              c.isFlipped = false;
            }
            return c;
          });
          setCards(resetCards);
          setFlippedCards([]);
        }, 1000);
      }
    }
  };

  return (
    <stackLayout className="p-4">
      <button className="text-blue-600 mb-4" onTap={onBack}>← Back</button>
      
      <gridLayout columns="*, *, *" rows="auto" className="mb-4">
        {cards.map(card => (
          <button
            key={card.id}
            className={`m-1 p-4 rounded-lg ${
              card.isFlipped || card.isMatched
                ? "bg-blue-600 text-white"
                : "bg-white"
            }`}
            onTap={() => handleCardTap(card.id)}
          >
            {card.isFlipped || card.isMatched ? card.value : "?"}
          </button>
        ))}
      </gridLayout>
      
      <button
        className="bg-blue-600 text-white p-4 rounded-lg"
        onTap={initializeGame}
      >
        New Game
      </button>
    </stackLayout>
  );
}