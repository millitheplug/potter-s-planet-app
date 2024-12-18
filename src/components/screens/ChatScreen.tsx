import * as React from "react";
import { useState, useEffect } from "react";
import { ChatService } from "../../services/chat.service";
import { ChatMessage as Message } from "../../types";
import { ChatMessages } from "../ui/chat/ChatMessages";
import { ChatInput } from "../ui/chat/ChatInput";

export function ChatScreen() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [groupId] = useState("default-group"); // In a real app, this would be dynamic

  useEffect(() => {
    const unsubscribe = ChatService.subscribeToMessages(groupId, (newMessages) => {
      setMessages(newMessages);
    });

    return () => unsubscribe();
  }, [groupId]);

  const handleSendMessage = async (text: string) => {
    const message: Message = {
      id: Date.now().toString(),
      userId: "current-user-id", // Replace with actual user ID
      username: "current-user", // Replace with actual username
      message: text,
      timestamp: Date.now()
    };

    await ChatService.sendMessage(groupId, message);
  };

  return (
    <gridLayout rows="*, auto" className="bg-blue-50">
      <ChatMessages messages={messages} row={0} />
      <ChatInput onSendMessage={handleSendMessage} row={1} />
    </gridLayout>
  );
}