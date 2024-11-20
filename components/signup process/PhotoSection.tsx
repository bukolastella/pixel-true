import { Image, StyleSheet, useColorScheme, View } from "react-native";
import React, { FC } from "react";
import { ThemedText } from "../ThemedText";
import GreenCustomBtn from "../ui/GreenCustomBtn";
import { Colors } from "@/constants/Colors";

interface Props {
  onNext: () => void;
}

const PhotoSection: FC<Props> = ({ onNext }) => {
  const theme = useColorScheme() ?? "light";

  return (
    <>
      {[
        {
          imgSource: require("../../assets/images/gallery.png"),
          title: "From Gallery",
        },
        {
          imgSource: require("../../assets/images/camera.png"),
          title: "Take Photo",
        },
      ].map((ev) => (
        <View
          style={[styles.boxxer, { backgroundColor: Colors[theme].inputBg }]}
        >
          <Image source={ev.imgSource} style={styles.img} />
          <ThemedText type="bold" style={styles.title}>
            {ev.title}
          </ThemedText>
        </View>
      ))}

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

export default PhotoSection;

const styles = StyleSheet.create({
  boxxer: {
    borderRadius: 22,
    minHeight: 130,
    gap: 9,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 14,
  },
  img: {
    width: 50,
    height: 50,
  },
});
