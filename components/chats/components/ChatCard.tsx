import { Image, Linking, StyleSheet, useColorScheme, View } from "react-native";
import React from "react";
import { ThemedText } from "@/components/ThemedText";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Colors } from "@/constants/Colors";

const ChatCard = () => {
  const theme = useColorScheme() ?? "light";

  return (
    <View style={[styles.wrapper, { backgroundColor: Colors[theme].dark25 }]}>
      <Image
        source={require("../../../assets/images/chat.png")}
        style={styles.img}
      />
      <View style={styles.miniWrapper}>
        <View style={styles.middleWrapper}>
          <ThemedText type="bold" style={styles.title}>
            Anamwp
          </ThemedText>
          <ThemedText type="book" style={styles.title}>
            Your Order Just Arrived!
          </ThemedText>
        </View>

        <View style={styles.middleWrapper}>
          <ThemedText type="book" style={styles.title}>
            20:00
          </ThemedText>
          <Ionicons
            name="call"
            size={24}
            color={Colors.green53}
            style={{ marginLeft: "auto" }}
            onPress={() => {
              Linking.openURL("tel:119");
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default ChatCard;

const styles = StyleSheet.create({
  wrapper: {
    padding: 10,
    borderRadius: 22,
    alignItems: "center",
    flexDirection: "row",
    gap: 16,
  },
  miniWrapper: {
    alignItems: "center",
    flexDirection: "row",
    gap: 16,
    justifyContent: "space-between",
  },
  img: {
    width: 62,
    height: 62,
    borderRadius: 16,
  },
  middleWrapper: {
    gap: 8,
  },
  title: {
    fontSize: 15,
  },
  subText: {
    fontSize: 14,
  },
});
