import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Colors } from "@/constants/Colors";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";

const Onboarding = () => {
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
      <View style={styles.wrapper}>
        <Image
          style={[styles.image]}
          source={require("../../assets/images/onboard-image-1.png")}
          resizeMode="contain"
        />
        <View style={[styles.miniWrapper]}>
          <Text style={styles.title}>Find your Comfort Food here</Text>
          <Text style={styles.subText}>
            Here You Can find a chef or dish for every taste and color. Enjoy!
          </Text>
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
      </View>
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
    color: Colors.light.Black09,
    fontSize: 22,
    textAlign: "center",
    fontFamily: "BentonSansBold",
    lineHeight: 35,
  },
  subText: {
    color: Colors.light.Black,
    fontSize: 12,
    marginTop: 20,
    marginBottom: 40,
    fontFamily: "BentonSansBook",
    textAlign: "center",
    lineHeight: 20,
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
