import { BaseNavigationContainer } from '@react-navigation/core';
import * as React from "react";
import { stackNavigatorFactory } from "react-nativescript-navigation";
import { HomeScreen } from "./screens/HomeScreen";
import { DevotionalScreen } from "./screens/DevotionalScreen";
import { ChatScreen } from "./screens/ChatScreen";
import { EventsScreen } from "./screens/EventsScreen";
import { GamesScreen } from "./screens/GamesScreen";
import { LoginScreen } from "./screens/LoginScreen";
import { SignUpScreen } from "./screens/SignUpScreen";

const StackNavigator = stackNavigatorFactory();

export const MainStack = () => (
    <BaseNavigationContainer>
        <StackNavigator.Navigator
            initialRouteName="Login"
            screenOptions={{
                headerStyle: {
                    backgroundColor: "#65adf1",
                },
                headerTintColor: "white",
                headerShown: true,
            }}
        >
            <StackNavigator.Screen name="Login" component={LoginScreen} />
            <StackNavigator.Screen name="SignUp" component={SignUpScreen} />
            <StackNavigator.Screen name="Home" component={HomeScreen} />
            <StackNavigator.Screen name="Devotional" component={DevotionalScreen} />
            <StackNavigator.Screen name="Chat" component={ChatScreen} />
            <StackNavigator.Screen name="Events" component={EventsScreen} />
            <StackNavigator.Screen name="Games" component={GamesScreen} />
        </StackNavigator.Navigator>
    </BaseNavigationContainer>
);