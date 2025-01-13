import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { COLORS, FONTS } from "@/theme";

const OptionCard = ({
  icon,
  label,
  onPress,
  badge,
}: {
  icon: React.ReactNode;
  label: string;
  onPress?: () => void;
  badge?: string;
}) => (
  <TouchableOpacity onPress={onPress} style={styles.optionCard}>
    <View style={styles.iconContainer}>{icon}</View>
    <Text style={styles.optionText}>{label}</Text>
    {badge && (
      <View style={styles.notificationBadge}>
        <Text style={styles.badgeText}>{badge}</Text>
      </View>
    )}
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  optionCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.white,
    borderRadius: 10,
    padding: 12,
    marginBottom: 18,
    position: "relative",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  iconContainer: {
    alignItems: "center",
    backgroundColor: COLORS.iconbackground,
    borderRadius: 10,
    padding: 12,
  },
  optionText: {
    marginLeft: 12,
    fontSize: 18,
    fontWeight: "700",
    fontFamily: FONTS.calibri.bold,
  },
  notificationBadge: {
    position: "absolute",
    right: -5,
    top: -5,
    backgroundColor: COLORS.error,
    borderRadius: 12,
    width: 22,
    height: 22,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: COLORS.white,
  },
  badgeText: {
    color: COLORS.white,
    fontSize: 12,
    fontWeight: "700",
    fontFamily: FONTS.calibri.bold,
  },
});

export default OptionCard;
