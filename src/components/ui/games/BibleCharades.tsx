import * as React from "react";
import { useState } from "react";

interface BibleCharadesProps {
  onBack: () => void;
}

const CHARADES_ITEMS = [
  "Noah building the ark",
  "David fighting Goliath",
  "Moses parting the Red Sea",
  // Add more items
];

export function BibleCharades({ onBack }: BibleCharadesProps) {
  const [currentItem, setCurrentItem] = useState("");
  
  const getRandomItem = () => {
    const randomIndex = Math.floor(Math.random() * CHARADES_ITEMS.length);
    setCurrentItem(CHARADES_ITEMS[randomIndex]);
  };

  return (
    <stackLayout className="p-4">
      <button className="text-blue-600 mb-4" onTap={onBack}>← Back</button>
      
      <label className="text-2xl font-bold text-center mb-8">
        Bible Charades
      </label>
      
      {currentItem ? (
        <stackLayout className="bg-white p-8 rounded-lg">
          <label className="text-xl text-center mb-4">{currentItem}</label>
          <button
            className="bg-blue-600 text-white p-4 rounded-lg"
            onTap={getRandomItem}
          >
            Next Item
          </button>
        </stackLayout>
      ) : (
        <button
          className="bg-blue-600 text-white p-4 rounded-lg"
          onTap={getRandomItem}
        >
          Start Game
        </button>
      )}
    </stackLayout>
  );
}