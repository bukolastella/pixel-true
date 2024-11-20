import { CameraView, useCameraPermissions } from "expo-camera";
import { FC, useRef } from "react";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ThemedText } from "../ThemedText";
import { Colors } from "@/constants/Colors";

interface Props {
  onCloseCamera: () => void;
  onPictureTaken: (uri: string) => void;
}

const CameraBox: FC<Props> = ({ onCloseCamera, onPictureTaken }) => {
  const [permission, requestPermission] = useCameraPermissions();
  const ref = useRef<CameraView>(null);

  if (!permission) {
    // Camera permissions are still loading.
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet.
    return (
      <View style={styles.container}>
        <Text style={styles.message}>
          We need your permission to show the camera
        </Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  //   function toggleCameraFacing() {
  //     setFacing((current) => (current === "back" ? "front" : "back"));
  //   }

  const onTakePicture = async () => {
    if (!ref.current) return;
    const photo = await ref.current.takePictureAsync();
    if (!photo) return;
    onPictureTaken(photo.uri);
    onCloseCamera();
  };

  return (
    <View style={styles.container}>
      <CameraView style={styles.camera} ref={ref}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={onTakePicture}>
            <ThemedText type="bold" style={styles.text}>
              Take Picture
            </ThemedText>
          </TouchableOpacity>
        </View>
      </CameraView>
    </View>
  );
};

export default CameraBox;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  message: {
    textAlign: "center",
    paddingBottom: 10,
  },
  camera: {
    flex: 1,
    borderWidth: 1,
    borderColor: Colors.green53,
    borderRadius: 12,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "transparent",
    margin: 64,
  },
  button: {
    flex: 1,
    alignSelf: "flex-end",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
  },
});
