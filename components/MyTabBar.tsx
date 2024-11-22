import { View, StyleSheet, useColorScheme } from "react-native";
import { useLinkBuilder } from "@react-navigation/native";
import { Text, PlatformPressable } from "@react-navigation/elements";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { FC } from "react";
import { Colors } from "@/constants/Colors";

const MyTabBar: FC<BottomTabBarProps> = ({
  state,
  descriptors,
  navigation,
}) => {
  const theme = useColorScheme() ?? "light";
  const { buildHref } = useLinkBuilder();

  return (
    <View style={[styles.wrapper, { backgroundColor: Colors[theme].dark25 }]}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const isFocused = state.index === index;

        // Extract the label properly
        const renderLabel = () => {
          if (typeof options.tabBarLabel === "string") {
            return options.tabBarLabel;
          } else if (typeof options.tabBarLabel === "function") {
            return options.tabBarLabel({
              focused: isFocused,
              color: Colors[theme].Black09,
              position: "below-icon",
              children: "", //
            });
          } else if (options.tabBarLabel !== undefined) {
            return options.tabBarLabel; // Handles ReactNode cases
          } else if (options.title !== undefined) {
            return options.title;
          } else {
            return route.name;
          }
        };

        const label = renderLabel();

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <PlatformPressable
            key={index}
            href={buildHref(route.name, route.params)}
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarButtonTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={[
              styles.itemWrapper,
              options.tabBarItemStyle,
              {
                backgroundColor: isFocused ? "#53e88c63" : "transparent",
                paddingVertical: isFocused ? 10 : 0,
                borderRadius: isFocused ? 12 : 0,
                paddingHorizontal: isFocused ? 17 : 0,
              },
            ]}
          >
            {options.tabBarIcon &&
              options?.tabBarIcon({
                focused: isFocused,
                color: Colors.green53,
                size: 24,
              })}
            {isFocused && (
              <Text style={[styles.title, { color: Colors[theme].Black09 }]}>
                {label}
              </Text>
            )}
          </PlatformPressable>
        );
      })}
    </View>
  );
};

export default MyTabBar;

const styles = StyleSheet.create({
  wrapper: {
    // position: "absolute",
    // bottom: 10,
    // left: 10,
    // right: 10,
    marginLeft: 20,
    marginRight: 20,
    marginVertical: 10,
    flexDirection: "row",
    marginHorizontal: "auto",
    borderRadius: 22,
    paddingVertical: 15,
    paddingHorizontal: 20,
    gap: 24,
  },
  itemWrapper: {
    flex: 1,
    flexDirection: "row",
    gap: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 12,
  },
});
