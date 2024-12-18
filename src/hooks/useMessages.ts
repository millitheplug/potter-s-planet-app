import { useState, useEffect } from 'react';
import { ChatService } from '../services/chat.service';
import type { ChatMessage } from '../types';

export function useMessages(groupId: string) {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = ChatService.subscribeToMessages(groupId, (newMessages) => {
      setMessages(newMessages);
      setLoading(false);
    });

    return () => unsubscribe();
  }, [groupId]);

  return { messages, loading };
}