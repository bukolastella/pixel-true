import { Text, type TextProps, StyleSheet } from "react-native";

import { useThemeColor } from "@/hooks/useThemeColor";

export type ThemedTextProps = TextProps & {
  lightColor?: string;
  darkColor?: string;
  type: "book" | "bold";
};

export function ThemedText({
  style,
  lightColor,
  darkColor,
  type,
  ...rest
}: ThemedTextProps) {
  const color = useThemeColor(
    { light: lightColor, dark: darkColor },
    type === "bold" ? "Black09" : "Black"
  );

  return (
    <Text
      style={[
        { color },
        type === "book" ? styles.Book : undefined,
        type === "bold" ? styles.Bold : undefined,
        style,
      ]}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  Book: {
    fontSize: 12,
    lineHeight: 24,
    fontFamily: "BentonSansBook",
  },
  Bold: {
    fontSize: 20,
    lineHeight: 24,
    fontFamily: "BentonSansBold",
  },
});
