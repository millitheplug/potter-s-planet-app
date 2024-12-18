import * as React from "react";
import { useState } from "react";
import { FrameNavigationProp } from "react-nativescript-navigation";
import { GameCard } from "../ui/games/GameCard";
import { BibleQuiz } from "../ui/games/BibleQuiz";
import { BibleCharades } from "../ui/games/BibleCharades";
import { MemoryGame } from "../ui/games/MemoryGame";

interface GamesScreenProps {
  navigation: FrameNavigationProp<any, "Games">;
}

export function GamesScreen({ navigation }: GamesScreenProps) {
  const [selectedGame, setSelectedGame] = useState<string | null>(null);

  const renderGame = () => {
    switch (selectedGame) {
      case 'quiz':
        return <BibleQuiz onBack={() => setSelectedGame(null)} />;
      case 'charades':
        return <BibleCharades onBack={() => setSelectedGame(null)} />;
      case 'memory':
        return <MemoryGame onBack={() => setSelectedGame(null)} />;
      default:
        return (
          <stackLayout className="p-4">
            <GameCard
              title="Bible Quiz"
              description="Test your Bible knowledge!"
              icon="~/assets/quiz-icon.png"
              onTap={() => setSelectedGame('quiz')}
            />
            <GameCard
              title="Bible Charades"
              description="Act out Bible stories!"
              icon="~/assets/charades-icon.png"
              onTap={() => setSelectedGame('charades')}
            />
            <GameCard
              title="Memory Match"
              description="Match Bible verses!"
              icon="~/assets/memory-icon.png"
              onTap={() => setSelectedGame('memory')}
            />
          </stackLayout>
        );
    }
  };

  return (
    <gridLayout className="bg-blue-50">
      {renderGame()}
    </gridLayout>
  );
}