import * as React from "react";
import { FrameNavigationProp } from "react-nativescript-navigation";

interface NavigationMenuProps {
  navigation: FrameNavigationProp<any, any>;
}

export function NavigationMenu({ navigation }: NavigationMenuProps) {
  return (
    <flexboxLayout className="bg-white p-4 border-t border-gray-200">
      <button
        className="flex-1 text-blue-600"
        onTap={() => navigation.navigate("Chat")}
      >
        Chat
      </button>
      
      <button
        className="flex-1 text-blue-600"
        onTap={() => navigation.navigate("Events")}
      >
        Events
      </button>
      
      <button
        className="flex-1 text-blue-600"
        onTap={() => navigation.navigate("Games")}
      >
        Games
      </button>
    </flexboxLayout>
  );
}