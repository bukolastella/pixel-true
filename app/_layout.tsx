import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { router, Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/useColorScheme";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    BentonSansBold: require("../assets/fonts/BentonSans Bold.otf"),
    BentonSansBook: require("../assets/fonts/BentonSans Book.otf"),
    BentonSansLight: require("../assets/fonts/BentonSans Light.otf"),
    BentonSansRegular: require("../assets/fonts/BentonSans Regular.otf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
      router.push("/onboarding");
      return;
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="onboarding" options={{ headerShown: false }} />
        <Stack.Screen name="auth" options={{ headerShown: false }} />
        {/* <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" /> */}
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
