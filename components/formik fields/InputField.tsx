import { Colors } from "@/constants/Colors";
import { AntDesign } from "@expo/vector-icons";
import { useField } from "formik";
import React, { FC, useState } from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  useColorScheme,
  View,
} from "react-native";

interface Props {
  leftIconName?: keyof typeof AntDesign.glyphMap;
  rightIconName?: keyof typeof AntDesign.glyphMap;
  inputProps?: TextInputProps;
  name: string;
  onChange?: (value: string) => void;
  isPassword?: boolean;
  placeholder?: string;
}

const InputField: FC<Props> = ({
  leftIconName,
  rightIconName,
  inputProps,
  onChange,
  isPassword,
  placeholder,
  name,
}) => {
  const theme = useColorScheme() ?? "light";
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const [field, meta, helpers] = useField(name);
  const isError = !!(meta.touched && meta.error);

  return (
    <View style={{ width: "100%" }}>
      <View
        style={[styles.wrapper, { backgroundColor: Colors[theme].inputBg }]}
      >
        {leftIconName && (
          <AntDesign name={leftIconName} size={24} color={"#53E88B"} />
        )}
        <TextInput
          value={field.value}
          {...inputProps}
          style={styles.input}
          onChangeText={(value: string) => {
            helpers.setValue(value);
            onChange && onChange(value);
          }}
          secureTextEntry={isPassword ? !show : false}
          placeholder={placeholder}
          placeholderTextColor={theme == "light" ? "#000000bd" : "#FFFFFF4D"}
        />
        {rightIconName && (
          <Pressable
            // style={styles.IconWrapper}
            onPress={isPassword ? handleClick : () => {}}
          >
            <AntDesign name={rightIconName} size={24} color={"#53E88B"} />
          </Pressable>
        )}
      </View>

      {isError ? <Text>{meta.error}</Text> : null}
    </View>
  );
};

export default InputField;

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    gap: 6,
    borderRadius: 15,
    // borderWidth: 1,
    // borderColor: "F4F4F4",
    padding: 15,
    width: "100%",
  },
  // IconWrapper: {
  //   width: 24,
  //   height: 24,
  //   flexDirection: "row",
  //   alignItems: "center",
  //   justifyContent: "center",
  // },
  input: {
    flex: 1,
  },
});
