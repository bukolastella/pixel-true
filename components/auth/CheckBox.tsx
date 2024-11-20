import FontAwesome from "@expo/vector-icons/FontAwesome";
import { LinearGradient } from "expo-linear-gradient";
import React, { FC } from "react";
import { Pressable, StyleSheet } from "react-native";

interface Props {
  checked: boolean;
  onChange: () => void;
}

const CheckBox: FC<Props> = ({ checked, onChange }) => {
  return (
    <Pressable role="checkbox" aria-checked={checked} onPress={onChange}>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={[checked ? "#53E88B" : "white", checked ? "#15BE77" : "white"]}
        style={[styles.checkboxBase]}
      >
        {checked && <FontAwesome name="check" size={12} color="white" />}
      </LinearGradient>
    </Pressable>
  );
};

export default CheckBox;

const styles = StyleSheet.create({
  checkboxBase: {
    width: 22,
    height: 22,
    borderRadius: 11,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "grey",
    backgroundColor: "transparent",
  },
});
