import { StyleSheet, TouchableOpacity, useColorScheme } from "react-native";
import React, { FC } from "react";
import { ThemedText } from "@/components/ThemedText";
import { Colors } from "@/constants/Colors";

interface Props {
  name: string;
  onPress: () => void;
  isActive: boolean;
}

const FilterPill: FC<Props> = ({ name, onPress, isActive }) => {
  const theme = useColorScheme() ?? "light";

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.wrapper,
        {
          backgroundColor: Colors[theme].orangeF9,
          borderColor: isActive
            ? theme === "light"
              ? "#DA6317"
              : "white"
            : "",
          borderWidth: isActive ? 1 : 0,
        },
      ]}
    >
      <ThemedText
        type="book"
        style={[styles.text, { color: Colors[theme].orangeDA }]}
      >
        {name}
      </ThemedText>
    </TouchableOpacity>
  );
};

export default FilterPill;

const styles = StyleSheet.create({
  wrapper: {
    borderRadius: 15,
    paddingVertical: 16,
    paddingHorizontal: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 12,
  },
});
