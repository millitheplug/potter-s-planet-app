import * as React from "react";

interface ErrorMessageProps {
  message: string;
}

export function ErrorMessage({ message }: ErrorMessageProps) {
  return (
    <label className="text-red-600 text-center p-2 mb-4">
      {message}
    </label>
  );
}