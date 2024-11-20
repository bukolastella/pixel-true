import { Image, StyleSheet, Text, useColorScheme, View } from "react-native";
import React, { FC } from "react";
import GreenCustomBtn from "../ui/GreenCustomBtn";
import { Colors } from "@/constants/Colors";

interface Props {
  onNext: () => void;
}

const PaymentSection: FC<Props> = ({ onNext }) => {
  const theme = useColorScheme() ?? "light";

  return (
    <>
      {[
        theme === "light"
          ? require("../../assets/images/paypal.png")
          : require("../../assets/images/paypal-dark.png"),
        theme === "light"
          ? require("../../assets/images/visa.png")
          : require("../../assets/images/visa-dark.png"),
        theme === "light"
          ? require("../../assets/images/payoneer.png")
          : require("../../assets/images/payoneer-dark.png"),
      ].map((ev, index) => (
        <View
          key={index}
          style={[styles.boxxer, { backgroundColor: Colors[theme].inputBg }]}
        >
          <Image source={ev} />
        </View>
      ))}

      <View
        style={{
          marginTop: "auto",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <GreenCustomBtn text="Next" onPress={onNext} />
      </View>
    </>
  );
};

export default PaymentSection;

const styles = StyleSheet.create({
  boxxer: {
    minHeight: 73,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
  },
});
