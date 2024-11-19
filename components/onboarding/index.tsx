import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from "react-native";
import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import { ThemedView } from "../ThemedView";
import { ThemedText } from "../ThemedText";
import { OnboardingData } from "./data";

const Onboarding = () => {
  const theme = useColorScheme() ?? "light";
  const [step, setStep] = useState(0);

  const onNextStep = () => {
    if (step === 1) {
      // move to auth route
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
          <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            colors={["#53E88B", "#15BE77"]}
            style={styles.buttonWrapper}
          >
            <Pressable onPress={onNextStep}>
              <Text style={styles.buttonText}>Next</Text>
            </Pressable>
          </LinearGradient>
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
    // backgroundColor: "yellow",
  },
  image: {
    flex: 0.4,
    // backgroundColor: "purple",
  },
  miniWrapper: {
    alignItems: "center",
    width: "50%",
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
    width: 157,
    height: 57,
    paddingVertical: 18,
    paddingHorizontal: 60,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
  },
  buttonText: {
    color: "white",
  },
});
