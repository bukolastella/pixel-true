import {
  Image,
  ScrollView,
  StyleSheet,
  useColorScheme,
  View,
} from "react-native";
import React, { FC } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

interface Props {
  children: React.ReactElement<any, string | React.JSXElementConstructor<any>>;
}

const AuthWrapper: FC<Props> = ({ children }) => {
  const theme = useColorScheme() ?? "light";

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1 }}>
        <View style={styles.outerWrapper}>
          <Image
            source={require("../../assets/images/pattern.png")}
            style={styles.pattern}
            resizeMode="cover"
          />
          <View style={styles.wrapper}>
            <Image
              source={
                theme === "light"
                  ? require("../../assets/images/logo.png")
                  : require("../../assets/images/logo-dark.png")
              }
              style={styles.img}
            />
            <View style={styles.miniWrapper}>{children}</View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AuthWrapper;

const styles = StyleSheet.create({
  outerWrapper: {
    flex: 1,
  },
  wrapper: {
    flex: 1,
    alignItems: "center",
    gap: 60,
    padding: 25,
  },
  pattern: {
    width: "100%",
    height: 250,
    position: "absolute",
    top: 0,
  },
  img: {
    width: 188,
    height: 200,
  },
  miniWrapper: {
    flex: 1,
    alignItems: "center",
  },
});
