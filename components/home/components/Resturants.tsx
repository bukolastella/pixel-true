import { FlatList, StyleSheet, View } from "react-native";
import React from "react";
import HomeHeader from "./HomeHeader";
import { ThemedText } from "@/components/ThemedText";
import { RestaurantList } from "./data";
import RestaurantCard from "./RestaurantCard";

const Resturants = () => {
  return (
    <View style={styles.wrapper}>
      <HomeHeader />

      <View style={styles.sectionWrapper}>
        <ThemedText type="bold" style={styles.sectionTitle}>
          Nearest Restaurant{" "}
        </ThemedText>
        <FlatList
          data={RestaurantList}
          renderItem={(item) => <RestaurantCard {...item.item} />}
          contentContainerStyle={styles.sectionCardWrapper}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export default Resturants;

const styles = StyleSheet.create({
  wrapper: {
    gap: 20,
    flex: 1,
    padding: 25,
  },
  sectionWrapper: {
    gap: 20,
    marginTop: 10,
    flex: 1,
  },
  sectionTitle: {
    fontSize: 15,
  },
  sectionCardWrapper: {
    gap: 12,
  },
});
