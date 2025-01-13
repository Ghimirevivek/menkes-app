// FilterOptions.tsx
import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { COLORS, FONTS } from "@/theme";

type FilterOptionsProps = {
  filter: string;
  options: string[];
  selectedOption: string;
  onSelect: (option: string) => void;
};

const FilterOptions = ({
  filter,
  options,
  selectedOption,
  onSelect,
}: FilterOptionsProps) => (
  <View style={styles.filterContainer}>
    <Text style={styles.sectionTitle}>{filter}</Text>
    <View style={styles.row}>
      {options.map((option) => (
        <TouchableOpacity
          key={option}
          style={[
            styles.optionButton,
            selectedOption === option && styles.selectedButton,
          ]}
          onPress={() => onSelect(option)}
        >
          <Text
            style={[
              styles.statusButtonText,
              selectedOption === option && styles.selectedButtonText,
            ]}
          >
            {option}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  </View>
);

const styles = StyleSheet.create({
  filterContainer: {
    paddingVertical: 14,
    paddingHorizontal: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 700,
    color: COLORS.black,
    fontFamily: FONTS.calibri.bold,
    marginBottom: 18,
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  optionButton: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 80,
    borderColor: COLORS.disablebutton,
    borderWidth: 1,
    marginRight: 8,
    backgroundColor: COLORS.white,
  },
  selectedButton: {
    backgroundColor: COLORS.allocted,
  },
  selectedButtonText: {
    color: COLORS.primary,
  },
  statusButtonText: {
    fontSize: 16,
    fontWeight: 400,
    lineHeight: 24,
    color: COLORS.black,
    fontFamily: FONTS.calibri.regular,
  },
});

export default FilterOptions;
