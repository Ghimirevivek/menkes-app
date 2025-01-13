import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { FONTS } from "@/theme";

interface WelcomeSectionProps {
  title: string;
  text?: string | number;
}

const WelcomeSection: React.FC<WelcomeSectionProps> = ({ title, text }) => (
  <View style={styles.welcomeSection}>
    <Text style={styles.welcomeText}>{title}</Text>
    <Text style={styles.menkesId}>{text}</Text>
  </View>
);

const styles = StyleSheet.create({
  welcomeSection: {
    padding: 16,
  },
  welcomeText: {
    fontSize: 20,
    fontWeight: "700",
    fontFamily: FONTS.calibri.bold,
  },
  menkesId: {
    fontSize: 14,
    fontFamily: FONTS.calibri.regular,
    marginTop: 4,
  },
});

export default WelcomeSection;
