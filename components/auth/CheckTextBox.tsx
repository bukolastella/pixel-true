import { StyleSheet, Text, View } from "react-native";
import React, { FC } from "react";
import { ThemedText } from "../ThemedText";
import CheckBox from "./CheckBox";

interface Props {
  checked: boolean;
  onChange: () => void;
  text: String;
}

const CheckTextBox: FC<Props> = ({ checked, onChange, text }) => {
  return (
    <View style={styles.wrapper}>
      <CheckBox onChange={onChange} checked={checked} />
      <ThemedText type="book">{text}</ThemedText>
    </View>
  );
};

export default CheckTextBox;

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
  },
  text: {},
});
