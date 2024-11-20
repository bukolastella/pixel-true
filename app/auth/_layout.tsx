import React from "react";
import { Stack } from "expo-router";
import AuthWrapper from "@/components/auth/AuthWrapper";

const AuthLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
      screenLayout={({ children }) => <AuthWrapper children={children} />}
    >
      <Stack.Screen name="index" />
      <Stack.Screen name="signin" />
      <Stack.Screen name="signup" />
    </Stack>
  );
};

export default AuthLayout;
