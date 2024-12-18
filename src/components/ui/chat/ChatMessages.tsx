import * as React from "react";
import type { ChatMessage } from "../../../types";

interface ChatMessagesProps {
  messages: ChatMessage[];
}

export function ChatMessages({ messages }: ChatMessagesProps) {
  return (
    <scrollView>
      <stackLayout className="p-4">
        {messages.map((message) => (
          <gridLayout
            key={message.id}
            className={`p-2 m-1 rounded-lg ${
              message.userId === "current-user-id"
                ? "bg-blue-500 text-white ml-12"
                : "bg-white mr-12"
            }`}
          >
            <stackLayout>
              <label className="text-xs opacity-70">
                {message.username}
              </label>
              <label className="text-base">
                {message.message}
              </label>
              <label className="text-xs opacity-70">
                {new Date(message.timestamp).toLocaleTimeString()}
              </label>
            </stackLayout>
          </gridLayout>
        ))}
      </stackLayout>
    </scrollView>
  );
}