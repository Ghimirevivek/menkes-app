import React from "react";
import { View, Text, StyleSheet } from "react-native";

type TitleWithAdditionalInfoProps = {
  title: string;
  subtitle: string;
  subtitleSecondary?: string; // Optional secondary subtitle
  titleStyle?: object; // Optional custom style for the main title
  subtitleStyle?: object; // Optional custom style for the subtitle
  containerStyle?: object; // Optional custom style for the container
  dotColor?: string; // Optional color for the separator dot
};

const TitleWithAdditionalInfo: React.FC<TitleWithAdditionalInfoProps> = ({
  title,
  subtitle,
  subtitleSecondary = "",
  titleStyle = {},
  subtitleStyle = {},
  containerStyle = {},
  dotColor = "white",
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <Text style={[styles.title, titleStyle]}>{title}</Text>
      <View style={styles.subtitleContainer}>
        <Text style={[styles.subtitle, subtitleStyle]}>{subtitle}</Text>
        {subtitleSecondary ? (
          <>
            <View
              style={[
                styles.separatorDot,
                { backgroundColor: dotColor }, // Customize dot color
              ]}
            />
            <Text style={[styles.subtitle, subtitleStyle]}>
              {subtitleSecondary}
            </Text>
          </>
        ) : null}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  title: {
    fontSize: 16,
    fontWeight: "700",
    lineHeight: 24,
    color: "white",
  },
  subtitleContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
  },
  subtitle: {
    fontSize: 14,
    fontWeight: "400",
    lineHeight: 20,
    color: "white",
  },
  separatorDot: {
    padding: 3,
    height: 4,
    width: 4,
    borderRadius: 100,
  },
});

export default TitleWithAdditionalInfo;
