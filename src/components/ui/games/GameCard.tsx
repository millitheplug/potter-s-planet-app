import * as React from "react";

interface GameCardProps {
  title: string;
  description: string;
  icon: string;
  onTap: () => void;
}

export function GameCard({ title, description, icon, onTap }: GameCardProps) {
  return (
    <gridLayout
      className="bg-white m-2 p-4 rounded-lg elevation-2"
      rows="auto, auto"
      columns="auto, *"
      onTap={onTap}
    >
      <image
        src={icon}
        className="w-16 h-16"
        row={0}
        col={0}
        rowSpan={2}
      />
      <label
        className="text-xl font-bold text-blue-600 ml-4"
        row={0}
        col={1}
      >
        {title}
      </label>
      <label
        className="text-gray-600 ml-4"
        row={1}
        col={1}
      >
        {description}
      </label>
    </gridLayout>
  );
}