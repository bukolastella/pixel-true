import { FlatList, StyleSheet, View } from "react-native";
import React from "react";
import HomeHeader from "./HomeHeader";
import { ThemedText } from "@/components/ThemedText";
import { MenuList } from "./data";
import MenuCard from "./MenuCard";

const Menu = () => {
  return (
    <View style={styles.wrapper}>
      <HomeHeader />

      <View style={styles.sectionWrapper}>
        <ThemedText type="bold" style={styles.sectionTitle}>
          Nearest Menu{" "}
        </ThemedText>

        <FlatList
          data={[...MenuList, ...MenuList]}
          renderItem={(item) => <MenuCard {...item.item} />}
          contentContainerStyle={styles.sectionCardWrapper}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export default Menu;

const styles = StyleSheet.create({
  wrapper: {
    gap: 20,
    padding: 25,
    flex: 1,
  },
  sectionWrapper: {
    gap: 20,
    flex: 1,
    marginTop: 10,
  },
  sectionTitle: {
    fontSize: 15,
  },
  sectionCardWrapper: {
    gap: 12,
  },
});
