import { Pressable, StyleSheet, useColorScheme, View } from "react-native";
import React, { FC } from "react";
import GreenCustomBtn from "../ui/GreenCustomBtn";
import { ThemedText } from "../ThemedText";
import { Colors } from "@/constants/Colors";

interface Props {
  onNext: () => void;
}

const LocationSection: FC<Props> = ({ onNext }) => {
  const theme = useColorScheme() ?? "light";

  return (
    <>
      <Pressable
        style={[styles.btn, { backgroundColor: Colors[theme].inputBg }]}
      >
        <ThemedText type="book">Set Location</ThemedText>
      </Pressable>

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

export default LocationSection;

const styles = StyleSheet.create({
  btn: {
    minHeight: 57,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
  },
});
