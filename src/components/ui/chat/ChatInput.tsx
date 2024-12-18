import * as React from "react";
import { useState } from "react";

interface ChatInputProps {
  onSendMessage: (message: string) => void;
}

export function ChatInput({ onSendMessage }: ChatInputProps) {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (message.trim()) {
      onSendMessage(message);
      setMessage("");
    }
  };

  return (
    <gridLayout
      columns="*, auto"
      className="bg-white p-2 border-t border-gray-200"
    >
      <textField
        col={0}
        text={message}
        hint="Type a message..."
        onTextChange={(args) => setMessage(args.value)}
        className="input p-2"
        returnKeyType="send"
        onReturnPress={handleSend}
      />
      <button
        col={1}
        text="Send"
        className="bg-blue-600 text-white p-2 rounded-lg ml-2"
        onTap={handleSend}
      />
    </gridLayout>
  );
}