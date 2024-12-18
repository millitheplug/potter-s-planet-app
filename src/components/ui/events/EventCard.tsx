import * as React from "react";
import type { ChurchEvent } from "../../../types";

interface EventCardProps {
  event: ChurchEvent;
}

export function EventCard({ event }: EventCardProps) {
  return (
    <gridLayout
      className="bg-white m-2 p-4 rounded-lg elevation-2"
      rows="auto, auto, auto"
    >
      {event.image && (
        <image
          src={event.image}
          className="w-full h-40 rounded-t-lg"
          stretch="aspectFill"
          row={0}
        />
      )}
      <stackLayout row={1} className="p-4">
        <label className="text-xl font-bold text-blue-600">
          {event.title}
        </label>
        <label className="text-gray-600 mt-2">
          {new Date(event.date).toLocaleDateString()}
        </label>
      </stackLayout>
      <label row={2} className="text-gray-700 px-4 pb-4">
        {event.description}
      </label>
    </gridLayout>
  );
}