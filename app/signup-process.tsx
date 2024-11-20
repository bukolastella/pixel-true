import React from "react";
import SignupProcess from "@/components/signup process";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native";

const SignupProcessScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* <ScrollView style={{ flex: 1, backgroundColor: "yellow" }}> */}
      <SignupProcess />
      {/* </ScrollView> */}
    </SafeAreaView>
  );
};

export default SignupProcessScreen;
