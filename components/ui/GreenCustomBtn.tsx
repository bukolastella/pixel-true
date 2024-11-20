import {
  ImageStyle,
  Pressable,
  StyleProp,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from "react-native";
import React, { FC } from "react";
import { LinearGradient } from "expo-linear-gradient";

interface Props {
  onPress: () => void;
  text: string;
  style?: StyleProp<ViewStyle>;
}

const GreenCustomBtn: FC<Props> = ({ onPress, text, style }) => {
  return (
    <Pressable onPress={onPress}>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={["#53E88B", "#15BE77"]}
        style={[styles.buttonWrapper, style]}
      >
        <Text style={styles.buttonText}>{text}</Text>
      </LinearGradient>
    </Pressable>
  );
};

export default GreenCustomBtn;

const styles = StyleSheet.create({
  buttonWrapper: {
    width: 157,
    height: 57,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
  },
  buttonText: {
    color: "white",
    fontFamily: "BentonSansBold",
  },
});
