import { Image, StyleSheet, Text, View } from "react-native";
import React, { FC } from "react";
import { Colors } from "@/constants/Colors";
import { ThemedText } from "../ThemedText";
import GreenCustomBtn from "../ui/GreenCustomBtn";

interface Props {
  onNext: () => void;
}

const CongratSection: FC<Props> = ({ onNext }) => {
  return (
    <View style={styles.outerWrapper}>
      <Image
        source={require("../../assets/images/pattern.png")}
        style={styles.pattern}
        resizeMode="cover"
      />
      <View style={styles.wrapper}>
        <Image
          source={require("../../assets/images/congrats.png")}
          style={styles.img}
          resizeMode="contain"
        />
        <Text style={styles.title}>Congrats!</Text>
        <ThemedText type="bold" style={styles.subText}>
          Your Profile Is Ready To Use
        </ThemedText>
      </View>

      <View
        style={{
          marginTop: "auto",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <GreenCustomBtn text="Try Order" onPress={onNext} />
      </View>
    </View>
  );
};

export default CongratSection;

const styles = StyleSheet.create({
  outerWrapper: {
    flex: 1,
    padding: 20,
  },
  wrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 100,
  },
  pattern: {
    width: "100%",
    height: 250,
    position: "absolute",
    top: 0,
  },
  img: {
    width: 172,
    height: 162,
  },
  title: {
    fontFamily: "BentonSansBold",
    color: Colors.green53,
    marginTop: 33,
    marginBottom: 10,
  },
  subText: {
    fontSize: 23,
  },
});
