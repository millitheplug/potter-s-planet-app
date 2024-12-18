import * as React from "react";
import { useState, useEffect } from "react";
import { ProfileService } from "../../../services/profile.service";
import type { Achievement } from "../../../types";

interface AchievementsListProps {
  userId: string;
}

export function AchievementsList({ userId }: AchievementsListProps) {
  const [achievements, setAchievements] = useState<string[]>([]);

  useEffect(() => {
    loadAchievements();
  }, [userId]);

  const loadAchievements = async () => {
    const userAchievements = await ProfileService.getAchievements(userId);
    setAchievements(userAchievements);
  };

  return (
    <scrollView className="bg-blue-50">
      <stackLayout className="p-4">
        <label className="text-2xl font-bold text-blue-600 mb-4">
          Your Achievements
        </label>
        {achievements.map((achievement, index) => (
          <gridLayout
            key={index}
            className="bg-white p-4 rounded-lg mb-2"
            columns="auto, *"
          >
            <image
              col={0}
              src="~/assets/achievement-icon.png"
              className="w-8 h-8"
            />
            <label
              col={1}
              className="text-lg ml-2"
              text={achievement}
            />
          </gridLayout>
        ))}
      </stackLayout>
    </scrollView>
  );
}