import { Image, StyleSheet, useColorScheme, View } from "react-native";
import React, { FC } from "react";
import { RestaurantListProps } from "./data";
import { ThemedText } from "@/components/ThemedText";
import { Colors } from "@/constants/Colors";

const RestaurantCard: FC<RestaurantListProps> = ({
  imgSource,
  name,
  location,
}) => {
  const theme = useColorScheme() ?? "light";

  return (
    <View style={[styles.wrapper, { backgroundColor: Colors[theme].dark25 }]}>
      <Image source={imgSource} style={styles.img} resizeMode="contain" />

      <ThemedText type="bold" style={styles.title}>
        {name}
      </ThemedText>
      <ThemedText type="book" style={styles.subText}>
        {`${location}km`}
      </ThemedText>
    </View>
  );
};

export default RestaurantCard;

const styles = StyleSheet.create({
  wrapper: {
    padding: 26,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  img: {
    width: 96,
    height: 96,
  },
  title: {
    fontSize: 16,
    marginTop: 17,
    marginBottom: 4,
  },
  subText: {
    fontSize: 14,
  },
});
