import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { COLORS, FONTS } from "@/theme";

interface ErrorNotificationCardProps {
  message: string;
  actionLabel?: string;
  onShowDetails?: () => void;
}

const ErrorNotificationCard: React.FC<ErrorNotificationCardProps> = ({
  message,
  actionLabel,
  onShowDetails,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Ionicons name={"alert-circle"} size={24} color={COLORS.error} />
      </View>
      <Text style={styles.message}>{message}</Text>
      <TouchableOpacity onPress={onShowDetails}>
        <Text style={styles.showLink}>{actionLabel}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.errorBackground,
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  iconContainer: {
    marginRight: 8,
  },
  message: {
    flex: 1,
    fontSize: 14,
    fontWeight: 400,
    lineHeight: 20,
    fontFamily: FONTS.calibri.regular,
    color: COLORS.error,
  },
  showLink: {
    fontSize: 14,
    color: COLORS.primary,
    fontWeight: 700,
    lineHeight: 20,
    fontFamily: FONTS.calibri.bold,
    marginBottom: 3,
    textDecorationLine: "underline",
  },
});

export default ErrorNotificationCard;
