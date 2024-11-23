import {
  Pressable,
  StyleProp,
  StyleSheet,
  Text,
  ViewStyle,
} from "react-native";
import React, { FC } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Colors } from "@/constants/Colors";

interface Props {
  onPress: () => void;
  text: string;
  style?: StyleProp<ViewStyle>;
  wrapperStyle?: StyleProp<ViewStyle>;
  isDisabled?: boolean;
}

const GreenCustomBtn: FC<Props> = ({
  onPress,
  text,
  style,
  wrapperStyle,
  isDisabled,
}) => {
  return (
    <Pressable onPress={isDisabled ? () => {} : onPress} style={wrapperStyle}>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={[
          isDisabled ? "#797878" : Colors.green53,
          isDisabled ? "#686868" : "#15BE77",
        ]}
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
