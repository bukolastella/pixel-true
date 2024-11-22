import {
  View,
  Text,
  TouchableOpacity,
  useColorScheme,
  StyleSheet,
} from "react-native";
import React from "react";
import { ThemedText } from "@/components/ThemedText";
import { Colors } from "@/constants/Colors";
import SearchField from "./SearchField";
import { EvilIcons, Ionicons } from "@expo/vector-icons";

const HomeHeader = () => {
  const theme = useColorScheme() ?? "light";

  return (
    <>
      <View style={styles.headerWrapper}>
        <ThemedText type="bold" style={styles.title}>
          Find Your Favorite Food
        </ThemedText>

        <TouchableOpacity
          style={[
            styles.notifWrapper,
            { backgroundColor: Colors[theme].dark25 },
          ]}
        >
          <EvilIcons name="bell" size={20} color={Colors.green53} />
        </TouchableOpacity>
      </View>

      <View style={styles.middleWrapper}>
        <SearchField />

        <TouchableOpacity
          style={[
            styles.filterWrapper,
            { backgroundColor: Colors[theme].orangeF9 },
          ]}
        >
          <Ionicons name="filter" size={24} color={Colors[theme].orangeDA} />
        </TouchableOpacity>
      </View>
    </>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  headerWrapper: {
    flexDirection: "row",
    alignItems: "center",
    gap: 24,
    // flexWrap: "wrap",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 31,
  },
  notifWrapper: {
    width: 45,
    height: 45,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  middleWrapper: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    flexWrap: "wrap",
    justifyContent: "space-between",
    height: 50,
  },
  filterWrapper: {
    width: 50,
    height: "100%",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },
});