import {
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
} from "react-native";
import React, { useState } from "react";
import Feather from "@expo/vector-icons/Feather";
import { Colors } from "@/constants/Colors";

const SearchField = () => {
  const theme = useColorScheme() ?? "light";
  const [value, setValue] = useState("");

  const onSearch = () => {
    console.log(value, "value");
  };

  return (
    <View style={[styles.wrapper, { backgroundColor: Colors[theme].orangeF9 }]}>
      <Feather
        name="search"
        size={24}
        color={Colors[theme].orangeDA}
        onPress={onSearch}
      />
      <TextInput
        value={value}
        onChangeText={setValue}
        placeholder="What do you want to order?"
        placeholderTextColor={Colors[theme].orangeDA}
      />
    </View>
  );
};

export default SearchField;

const styles = StyleSheet.create({
  wrapper: {
    gap: 24,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 15,
    paddingVertical: 13,
    paddingHorizontal: 18,
    flex: 1,
  },
});
