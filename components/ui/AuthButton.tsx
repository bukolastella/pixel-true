import { Colors } from "@/constants/Colors";
import React, { FC } from "react";
import {
  Image,
  ImageSourcePropType,
  Pressable,
  StyleSheet,
  Text,
  useColorScheme,
} from "react-native";

interface Props {
  text: string;
  imgSource: ImageSourcePropType;
}

const AuthButton: FC<Props> = ({ text, imgSource }) => {
  const theme = useColorScheme() ?? "light";

  return (
    <Pressable
      style={[styles.wrapper, { backgroundColor: Colors[theme].inputBg }]}
    >
      <Image source={imgSource} style={styles.icon} />
      <Text style={[styles.text, { color: Colors[theme].Black09 }]}>
        {text}
      </Text>
    </Pressable>
  );
};

export default AuthButton;

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 12,
    height: 57,
    borderRadius: 15,
    padding: 14,
    // borderWidth: 1,
    // borderColor: "#F4F4F4",
    // width: "100%",
    flex: 1,
  },
  text: {
    // color: Colors.light.Black12,
    textTransform: "capitalize",
    fontFamily: "BentonSansRegular",
    fontSize: 14,
  },
  icon: {
    width: 25,
    height: 25,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
