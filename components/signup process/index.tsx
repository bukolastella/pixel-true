import { Image, Pressable, ScrollView, StyleSheet, View } from "react-native";
import React, { useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { ThemedText } from "../ThemedText";
import CongratSection from "./CongratSection";
import { ProcessSignup } from "./type";
import { router } from "expo-router";
import BioSection from "./BioSection";
import PaymentSection from "./PaymentSection";
import PhotoSection from "./PhotoSection";
import LocationSection from "./LocationSection";

const SignupProcess = () => {
  const [step, setStep] = useState(ProcessSignup.bio);

  const getHeaderText = () => {
    if (step === ProcessSignup.bio) return "Fill in your bio to get started";
    if (step === ProcessSignup.payment) return "Payment Method";
    if (step === ProcessSignup.photo) return "Upload Your Photo Profile";
    if (step === ProcessSignup.location) return "Set Your Location ";
  };

  const onNext = () => {
    if (step === ProcessSignup.congrat) {
      // move to home
      return;
    }

    setStep((prev) => prev + 1);
  };

  const onPrev = () => {
    if (step === ProcessSignup.bio) {
      router.push("/auth/signup");
      return;
    }

    setStep((prev) => prev - 1);
  };

  return (
    <ScrollView style={styles.wrapper} contentContainerStyle={{ flex: 1 }}>
      <Image
        source={require("../../assets/images/pattern.png")}
        style={styles.pattern}
        resizeMode="cover"
      />
      {/*  */}
      {step === ProcessSignup.congrat ? (
        <CongratSection onNext={onNext} />
      ) : (
        <View style={styles.miniWrapper}>
          <Pressable style={styles.backBtn} onPress={onPrev}>
            <Ionicons name="chevron-back" size={16} color="#DA6317" />
          </Pressable>

          <ThemedText type="bold">{getHeaderText()}</ThemedText>
          <ThemedText type="book">
            This data will be displayed in your account profile for security
          </ThemedText>

          {step === ProcessSignup.bio && <BioSection onNext={onNext} />}
          {step === ProcessSignup.payment && <PaymentSection onNext={onNext} />}
          {step === ProcessSignup.photo && <PhotoSection onNext={onNext} />}
          {step === ProcessSignup.location && (
            <LocationSection onNext={onNext} />
          )}
        </View>
      )}
    </ScrollView>
  );
};

export default SignupProcess;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  pattern: {
    width: "100%",
    height: 100,
    position: "absolute",
    top: -40,
    right: 0,
    transform: "rotate(10deg)",
    // backgroundColor: "red",
  },
  miniWrapper: {
    padding: 25,
    flex: 1,
    gap: 20,
    flexDirection: "column",
    paddingBottom: 60,
  },
  backBtn: {
    width: 45,
    height: 45,
    borderRadius: 15,
    backgroundColor: "#F9A84D1A",
    alignItems: "center",
    justifyContent: "center",
  },
});
