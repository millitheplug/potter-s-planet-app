import * as React from "react";
import { useState } from "react";
import { RouteProp } from "@react-navigation/core";
import { FrameNavigationProp } from "react-nativescript-navigation";
import { AuthService } from "../../services/auth.service";
import { LoginForm } from "../ui/LoginForm";
import { ErrorMessage } from "../ui/ErrorMessage";

interface LoginScreenProps {
  navigation: FrameNavigationProp<any, "Login">;
  route: RouteProp<any, "Login">;
}

export function LoginScreen({ navigation }: LoginScreenProps) {
  const [error, setError] = useState<string>("");

  const handleLogin = async (email: string, password: string) => {
    try {
      await AuthService.signIn(email, password);
      navigation.navigate("Home");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <flexboxLayout className="p-4 h-full bg-blue-50">
      <stackLayout className="w-full">
        <image
          src="~/assets/logo.png"
          className="h-32 w-32 self-center mb-8"
        />
        <label className="text-2xl font-bold text-center text-blue-600 mb-8">
          Welcome to Bible Buddies!
        </label>
        
        <LoginForm onSubmit={handleLogin} />
        
        {error && <ErrorMessage message={error} />}
        
        <button
          className="text-blue-600 text-lg mt-4"
          onTap={() => navigation.navigate("SignUp")}
        >
          Create New Account
        </button>
      </stackLayout>
    </flexboxLayout>
  );
}