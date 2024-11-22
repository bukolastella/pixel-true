import {
  Dimensions,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { ThemedText } from "../ThemedText";
import { MenuList, RestaurantList } from "./components/data";
import RestaurantCard from "./components/RestaurantCard";
import MenuCard from "./components/MenuCard";
import { router } from "expo-router";
import HomeHeader from "./components/HomeHeader";

// Get the screen width
const { width: SCREEN_WIDTH } = Dimensions.get("window");

// Set the original width and height of the image
const IMAGE_WIDTH = 325;
const IMAGE_HEIGHT = 150;

// Calculate the aspect ratio
const ASPECT_RATIO = IMAGE_HEIGHT / IMAGE_WIDTH;

const Home = () => {
  const onResturants = () => {
    router.push("/resturants");
  };

  const onMenus = () => {
    router.push("/menu");
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.wrapper}>
        <HomeHeader />

        <Image
          source={require("../../assets/images/banner.png")}
          // style={styles.bannerWrapper}
          // resizeMode="cover"
          style={[
            styles.bannerWrapper,
            {
              width: SCREEN_WIDTH * 0.9, // Adjust to 90% of screen width
              height: SCREEN_WIDTH * 0.9 * ASPECT_RATIO, // Maintain aspect ratio
            },
          ]}
        />

        <View style={styles.sectionWrapper}>
          <View style={styles.sectionHeader}>
            <ThemedText type="bold" style={styles.sectionTitle}>
              Nearest Restaurant{" "}
            </ThemedText>
            <TouchableOpacity onPress={onResturants}>
              <Text style={styles.viewBtn}>View More</Text>
            </TouchableOpacity>
          </View>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.sectionCardWrapper}
          >
            {RestaurantList.map((ev, index) => (
              <RestaurantCard {...ev} key={index} />
            ))}
          </ScrollView>
        </View>

        <View style={styles.sectionWrapper}>
          <View style={styles.sectionHeader}>
            <ThemedText type="bold" style={styles.sectionTitle}>
              Nearest Menu{" "}
            </ThemedText>
            <TouchableOpacity>
              <Text style={styles.viewBtn} onPress={onMenus}>
                View More
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.sectionCardWrapper}>
            {MenuList.map((ev, index) => (
              <MenuCard key={index} {...ev} />
            ))}
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    padding: 25,
    gap: 20,
  },
  bannerWrapper: {
    // width: 325,
    width: "100%",
    height: "auto",
    borderRadius: 15,
    marginTop: 10,
  },
  sectionWrapper: {
    gap: 20,
    marginTop: 10,
  },
  sectionTitle: {
    fontSize: 15,
  },
  sectionHeader: {
    flexDirection: "row",
    gap: 24,
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "space-between",
  },
  viewBtn: {
    fontSize: 12,
    color: "#FF7C32",
  },
  sectionCardWrapper: {
    gap: 12,
    flex: 1,
  },
});
