import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { COLORS, FONTS } from "@/theme";

interface SelectableOptionProps {
  label?: string;
  onPress?: () => void;
  selected?: boolean;
}

const SelectableOption: React.FC<SelectableOptionProps> = ({
  label,
  onPress,
  selected = false,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.optionContainer,
        selected && styles.selectedOptionContainer, // Apply selected styles if selected
      ]}
    >
      <Text style={[styles.optionText]}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  optionContainer: {
    borderWidth: 1,
    borderColor: COLORS.disablebutton,
    borderRadius: 8,
    paddingVertical: 20,
    paddingHorizontal: 16,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 8,
    backgroundColor: COLORS.white,
  },
  selectedOptionContainer: {
    borderWidth: 2, // Increased border width
    borderColor: COLORS.primary, // Changed border color
    backgroundColor: COLORS.selectedCard, // Changed background color
  },
  optionText: {
    fontSize: 16,
    fontWeight: 700,
    lineHeight: 24,
    fontFamily: FONTS.calibri.regular,
    color: COLORS.primaryBlue,
  },
});

export default SelectableOption;
