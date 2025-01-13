import { COLORS, FONTS } from "@/theme";
import React from "react";
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
import Feather from "@expo/vector-icons/Feather";
type FeatherIconName = keyof typeof Feather.glyphMap;

interface ButtonProps {
  label?: string;
  icon?: FeatherIconName;
  rightIcon?: FeatherIconName;
  onPress?: () => void;
  disabled?: boolean;
  loading?: boolean; // Loading state
  type: "primary" | "secondary"; // Button type
  buttonStyle?: ViewStyle;
  textStyle?: TextStyle;
}

const Button: React.FC<ButtonProps> = ({
  label,
  icon,
  rightIcon,
  onPress,
  disabled = false,
  loading = false,
  type = "primary",
  buttonStyle,
  textStyle,
}) => {
  // Determine styles based on `type`
  const isPrimary = type === "primary";

  const backgroundColor = disabled
    ? COLORS.disablebutton
    : isPrimary
      ? COLORS.primary
      : COLORS.white;

  const textColor = disabled
    ? COLORS.gray
    : isPrimary
      ? COLORS.white
      : COLORS.primaryBlue;

  const borderColor = isPrimary ? "transparent" : COLORS.disablebutton;

  return (
    <View style={styles.footerButtonContainer}>
      <TouchableOpacity
        style={[
          styles.footerButton,
          {
            backgroundColor,
            borderColor,
            borderWidth: type === "secondary" ? 1 : 0,
          },
          buttonStyle,
        ]}
        onPress={onPress}
        disabled={disabled || loading}
      >
        {loading ? (
          <ActivityIndicator size="small" color={textColor} />
        ) : (
          <>
            {icon && (
              <Feather
                name={icon}
                size={30}
                color={textColor}
                style={styles.icon}
              />
            )}
            <Text
              style={[styles.footerButtonText, { color: textColor }, textStyle]}
            >
              {label}
            </Text>
            {rightIcon && (
              <Feather
                name={rightIcon}
                size={20}
                color={textColor}
                style={styles.iconRight}
              />
            )}
          </>
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  footerButtonContainer: {
    width: "100%",
    paddingBottom: 8,
  },
  footerButton: {
    padding: 10,
    height: 50,
    alignItems: "center",
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "center",
  },
  footerButtonText: {
    fontSize: 16,
    fontWeight: "700",
    lineHeight: 24,
    fontFamily: FONTS.calibri.bold,
  },
  icon: {
    marginRight: 8,
  },
  iconRight: {
    marginLeft: 8,
  },
});

export default Button;
