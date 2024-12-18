import * as React from "react";
import { useState, useEffect } from "react";
import { ContentService } from "../../services/content.service";
import { EventCard } from "../ui/events/EventCard";
import type { ChurchEvent } from "../../types";

export function EventsScreen() {
  const [events, setEvents] = useState<ChurchEvent[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadEvents();
  }, []);

  const loadEvents = async () => {
    try {
      const eventsList = await ContentService.getChurchEvents();
      setEvents(eventsList);
    } catch (error) {
      console.error("Error loading events:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <activityIndicator busy={true} className="m-20" />;
  }

  return (
    <scrollView className="bg-blue-50">
      <stackLayout className="p-4">
        <label className="text-2xl font-bold text-blue-600 mb-4">
          Upcoming Events
        </label>
        {events.map(event => (
          <EventCard key={event.id} event={event} />
        ))}
      </stackLayout>
    </scrollView>
  );
}