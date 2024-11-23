import { Image, StyleSheet, View } from "react-native";
import React from "react";
import ParallaxScrollView from "../ParallaxScrollView";
import { ThemedText } from "../ThemedText";
import { MenuList } from "../home/components/data";
import MenuCard from "../home/components/MenuCard";

const Profile = () => {
  return (
    <ParallaxScrollView
      headerImage={
        <Image
          source={require("../../assets/images/profile.png")}
          style={{ height: 320 }}
        />
      }
    >
      <View style={styles.wrapper}>
        <View style={styles.headerWrapper}>
          <ThemedText type="bold">Anam Wusono</ThemedText>
          <ThemedText type="book">anamwp66@gmail.com</ThemedText>
        </View>
        <ThemedText type="bold">Favorite</ThemedText>
        <View style={styles.favWrapper}>
          {MenuList.map((ev, index) => (
            <MenuCard key={index} {...ev} />
          ))}
        </View>
      </View>
    </ParallaxScrollView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  wrapper: {
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    // paddingTop: 44,
    // paddingHorizontal: 21,
    gap: 20,
  },
  headerWrapper: {
    gap: 4,
  },
  title: {
    fontSize: 27,
  },
  subText: {
    fontSize: 14,
  },
  favText: {
    fontSize: 15,
  },
  favWrapper: {
    gap: 20,
  },
});
