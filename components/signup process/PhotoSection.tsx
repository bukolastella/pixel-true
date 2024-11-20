import {
  Image,
  Pressable,
  StyleSheet,
  useColorScheme,
  View,
} from "react-native";
import React, { FC, useState } from "react";
import { ThemedText } from "../ThemedText";
import GreenCustomBtn from "../ui/GreenCustomBtn";
import { Colors } from "@/constants/Colors";
import CameraBox from "./CameraBox";
import * as ImagePicker from "expo-image-picker";

interface Props {
  onNext: () => void;
}

const PhotoSection: FC<Props> = ({ onNext }) => {
  const theme = useColorScheme() ?? "light";
  const [openCamera, setOpenCamera] = useState(false);
  const [pictureTaken, setPictureTaken] = useState<string>();

  const onOpenCamera = () => {
    setOpenCamera(true);
  };

  const onCloseCamera = () => {
    setOpenCamera(false);
  };

  const onPictureTaken = (params: string) => {
    setPictureTaken(params);
  };

  const onClearPictureTaken = () => {
    setPictureTaken(undefined);
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setPictureTaken(result.assets[0].uri);
    }
  };

  return openCamera ? (
    <CameraBox onCloseCamera={onCloseCamera} onPictureTaken={onPictureTaken} />
  ) : (
    <>
      {pictureTaken ? (
        <View style={{ gap: 20 }}>
          <Image source={{ uri: pictureTaken }} style={styles.imagePreview} />
          <Pressable
            onPress={onClearPictureTaken}
            style={[styles.btn, { backgroundColor: Colors[theme].inputBg }]}
          >
            <ThemedText type="book">Cancel</ThemedText>
          </Pressable>
        </View>
      ) : (
        [
          {
            imgSource: require("../../assets/images/gallery.png"),
            title: "From Gallery",
            onClick: pickImage,
          },
          {
            imgSource: require("../../assets/images/camera.png"),
            title: "Take Photo",
            onClick: onOpenCamera,
          },
        ].map((ev, index) => (
          <Pressable
            key={index}
            style={[styles.boxxer, { backgroundColor: Colors[theme].inputBg }]}
            onPress={ev.onClick}
          >
            <Image source={ev.imgSource} style={styles.img} />
            <ThemedText type="bold" style={styles.title}>
              {ev.title}
            </ThemedText>
          </Pressable>
        ))
      )}

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
  imagePreview: {
    width: 245,
    height: 238,
    borderRadius: 22,
    margin: "auto",
  },
  btn: {
    minHeight: 57,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
    width: 300,
    marginHorizontal: "auto",
  },
});
