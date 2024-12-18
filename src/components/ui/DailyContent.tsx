import * as React from "react";
import type { MemoryVerse, Devotional } from "../../types";

interface DailyContentProps {
  verse: MemoryVerse | null;
  devotional: Devotional | null;
}

export function DailyContent({ verse, devotional }: DailyContentProps) {
  if (!verse || !devotional) {
    return (
      <activityIndicator busy={true} className="m-20" />
    );
  }

  return (
    <stackLayout className="w-full">
      <label className="text-2xl font-bold text-blue-600 mb-4">
        Today's Memory Verse
      </label>
      
      <stackLayout className="bg-white p-4 rounded-lg mb-8">
        <label className="text-lg mb-2">{verse.verse}</label>
        <label className="text-blue-600">{verse.reference}</label>
      </stackLayout>
      
      <label className="text-2xl font-bold text-blue-600 mb-4">
        Daily Devotional
      </label>
      
      <stackLayout className="bg-white p-4 rounded-lg">
        <label className="text-xl font-bold mb-2">{devotional.title}</label>
        <label className="mb-4">{devotional.content}</label>
        <label className="font-bold mb-2">Prayer Focus:</label>
        <label>{devotional.prayer}</label>
      </stackLayout>
    </stackLayout>
  );
}