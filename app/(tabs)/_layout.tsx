import { Tabs } from "expo-router";
import React from "react";
import MyTabBar from "@/components/MyTabBar";
import Entypo from "@expo/vector-icons/Entypo";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Ionicons from "@expo/vector-icons/Ionicons";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native";

export default function TabLayout() {
  return (
    <Tabs
      tabBar={(props) => <MyTabBar {...props} />}
      screenLayout={({ children }) => (
        <SafeAreaView style={{ flex: 1 }}>
          {/* <ScrollView
            style={{ flex: 1 }}
            contentContainerStyle={{ flex: 1, padding: 25 }}
            nestedScrollEnabled
          > */}
          {children}
          {/* </ScrollView> */}
        </SafeAreaView>
      )}
      screenOptions={{
        // tabBarHideOnKeyboard: true,
        // tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
        // tabBarButton: HapticTab,
        // tabBarBackground: TabBarBackground,
        // tabBarStyle: Platform.select({
        //   ios: {
        //     // Use a transparent background on iOS to show the blur effect
        //     position: "absolute",
        //   },
        //   default: {},
        // }),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => (
            <Entypo size={size} name="home" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome size={size} name="user" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="cart"
        options={{
          title: "Explore",
          tabBarIcon: ({ color, size }) => (
            <Entypo name="shopping-cart" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="chat"
        options={{
          title: "Explore",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="chatbox-ellipses" size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="resturants"
        options={{
          tabBarItemStyle: { display: "none" },
        }}
      />
      <Tabs.Screen
        name="menu"
        options={{
          tabBarItemStyle: { display: "none" },
        }}
      />
    </Tabs>
  );
}
