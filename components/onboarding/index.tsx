import { Image, StyleSheet, useColorScheme, View } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ThemedView } from "../ThemedView";
import { ThemedText } from "../ThemedText";
import { OnboardingData } from "./data";
import { router } from "expo-router";
import GreenCustomBtn from "../ui/GreenCustomBtn";

const Onboarding = () => {
  const theme = useColorScheme() ?? "light";
  const [step, setStep] = useState(0);

  const onNextStep = () => {
    if (step === 1) {
      // move to auth route
      router.push("/auth/signin");
      return;
    }

    setStep((prev) => prev + 1);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ThemedView style={styles.wrapper}>
        <Image
          style={[styles.image]}
          source={OnboardingData[step][theme === "light" ? "img" : "darkImg"]}
          resizeMode="contain"
        />
        <View style={[styles.miniWrapper]}>
          <ThemedText type="bold" style={styles.title}>
            {OnboardingData[step].title}
          </ThemedText>
          <ThemedText type="book" style={styles.subText}>
            {OnboardingData[step].subText}
          </ThemedText>

          <GreenCustomBtn
            text="Next"
            onPress={onNextStep}
            style={styles.buttonWrapper}
          />
        </View>
      </ThemedView>
    </SafeAreaView>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  wrapper: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    gap: 20,
    // backgroundColor: "yellow",
  },
  image: {
    flex: 0.4,
    // backgroundColor: "purple",
  },
  miniWrapper: {
    alignItems: "center",
    width: "70%",
    flex: 0.4,
    // backgroundColor: "brown",
  },
  title: {
    // color: Colors.light.Black09,
    fontSize: 22,
    textAlign: "center",
    // fontFamily: "BentonSansBold",
    // lineHeight: 35,
  },
  subText: {
    // color: Colors.light.Black,
    fontSize: 12,
    marginTop: 20,
    marginBottom: 40,
    // fontFamily: "BentonSansBook",
    textAlign: "center",
    // lineHeight: 20,
  },
  buttonWrapper: {
    paddingVertical: 18,
    paddingHorizontal: 60,
  },
});
