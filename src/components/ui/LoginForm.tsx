import * as React from "react";
import { useState } from "react";

interface LoginFormProps {
  onSubmit: (email: string, password: string) => void;
}

export function LoginForm({ onSubmit }: LoginFormProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <stackLayout className="w-full">
      <textField
        className="input p-4 mb-4 rounded-lg bg-white"
        hint="Email"
        keyboardType="email"
        autocorrect={false}
        autocapitalizationType="none"
        text={email}
        onTextChange={(args) => setEmail(args.value)}
      />
      
      <textField
        className="input p-4 mb-4 rounded-lg bg-white"
        hint="Password"
        secure={true}
        text={password}
        onTextChange={(args) => setPassword(args.value)}
      />
      
      <button
        className="btn bg-blue-600 text-white p-4 rounded-lg"
        onTap={() => onSubmit(email, password)}
      >
        Login
      </button>
    </stackLayout>
  );
}