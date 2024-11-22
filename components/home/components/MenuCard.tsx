import { Image, StyleSheet, Text, useColorScheme, View } from "react-native";
import React, { FC } from "react";
import { MenuListProps } from "./data";
import { ThemedText } from "@/components/ThemedText";
import { Colors } from "@/constants/Colors";

const MenuCard: FC<MenuListProps> = ({
  imgSource,
  name,
  amount,
  foodCategory,
}) => {
  const theme = useColorScheme() ?? "light";

  return (
    <View style={[styles.wrapper, { backgroundColor: Colors[theme].dark25 }]}>
      <Image source={imgSource} style={styles.img} resizeMode="cover" />

      <View style={styles.miniWrapper}>
        <View style={styles.textWrapper}>
          <ThemedText type="bold" style={styles.title}>
            {name}
          </ThemedText>
          <ThemedText type="book" style={styles.subText}>
            {`${foodCategory}`}
          </ThemedText>
        </View>

        <Text style={styles.amountText}>{`$${amount}`}</Text>
      </View>
    </View>
  );
};

export default MenuCard;

const styles = StyleSheet.create({
  wrapper: {
    padding: 15,
    borderRadius: 15,
    flexDirection: "row",
    gap: 20,
    alignItems: "center",
  },
  miniWrapper: {
    flexDirection: "row",
    gap: 20,
    justifyContent: "space-between",
    alignItems: "center",
    flex: 1,
  },

  img: {
    width: 64,
    height: 64,
  },
  textWrapper: {
    gap: 4,
  },
  title: {
    fontSize: 15,
  },
  subText: {
    fontSize: 14,
  },
  amountText: {
    color: "#FEAD1D",
    fontSize: 22,
    fontFamily: "BentonSansBold",
  },
});
