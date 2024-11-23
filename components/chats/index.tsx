import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { ThemedText } from "../ThemedText";
import ChatCard from "./components/ChatCard";

const Chats = () => {
  return (
    <View style={styles.wrapper}>
      <ThemedText type="bold">Chat</ThemedText>
      <ChatCard />
    </View>
  );
};

export default Chats;

const styles = StyleSheet.create({
  wrapper: {
    gap: 20,
    padding: 25,
  },
});
