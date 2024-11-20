import { Pressable, StyleSheet, useColorScheme, View } from "react-native";
import React, { FC } from "react";
import GreenCustomBtn from "../ui/GreenCustomBtn";
import { ThemedText } from "../ThemedText";
import { Colors } from "@/constants/Colors";
import MapView, { Marker } from "react-native-maps";

interface Props {
  onNext: () => void;
}

const LocationSection: FC<Props> = ({ onNext }) => {
  const theme = useColorScheme() ?? "light";
  const region = {
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  return (
    <>
      <MapView style={styles.map} initialRegion={region}>
        <Marker
          draggable
          coordinate={{
            latitude: region.latitude,
            longitude: region.longitude,
          }}
          // onDragEnd={(e) => console.log(e.nativeEvent.coordinate)}
        />
      </MapView>
      <Pressable
        style={[styles.btn, { backgroundColor: Colors[theme].inputBg }]}
        onPress={onNext}
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
  map: {
    width: "100%",
    height: 200,
  },
});
