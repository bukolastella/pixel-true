import React from "react";
import { Stack } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native";

const AuthLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
      screenLayout={({ children }) => (
        <SafeAreaView style={{ flex: 1 }}>
          <ScrollView style={{ flex: 1 }}>{children}</ScrollView>
        </SafeAreaView>
      )}
    >
      <Stack.Screen name="index" />
      <Stack.Screen name="signup" />
    </Stack>
  );
};

export default AuthLayout;
