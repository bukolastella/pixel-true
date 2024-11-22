import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from "react-native";
import React from "react";
import { ThemedText } from "../ThemedText";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import { Colors } from "@/constants/Colors";
import Ionicons from "@expo/vector-icons/Ionicons";
import SearchField from "./components/SearchField";
import { MenuList, RestaurantList } from "./components/data";
import RestaurantCard from "./components/RestaurantCard";
import MenuCard from "./components/MenuCard";

const Home = () => {
  const theme = useColorScheme() ?? "light";

  return (
    <View style={styles.wrapper}>
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

      <Image
        source={require("../../assets/images/banner.png")}
        style={styles.bannerWrapper}
        resizeMode="cover"
      />

      <View style={styles.sectionWrapper}>
        <View style={styles.sectionHeader}>
          <ThemedText type="bold" style={styles.sectionTitle}>
            Nearest Restaurant{" "}
          </ThemedText>
          <TouchableOpacity>
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
            <Text style={styles.viewBtn}>View More</Text>
          </TouchableOpacity>
        </View>

        {/* <View style={styles.sectionCardWrapper}></View> */}
        <FlatList
          data={MenuList}
          renderItem={(item) => <MenuCard {...item.item} />}
          contentContainerStyle={styles.sectionCardWrapper}
          scrollEnabled={false}
        />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  wrapper: {
    // flex: 1,
    padding: 25,
    gap: 20,
  },
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
  },
  filterWrapper: {
    width: 50,
    height: 50,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  bannerWrapper: {
    // width: 325,
    width: "100%",
    height: 150,
    borderRadius: 15,
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
  },
});
