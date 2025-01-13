import React from "react";
import { View, TouchableOpacity, StyleSheet, TextInput } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import FilterIcon from "@/assets/icons/FilterIcon";
import { COLORS } from "@/theme";

interface SearchHeaderProps {
  onFilterPress: () => void;
}

const SearchHeader: React.FC<SearchHeaderProps> = ({ onFilterPress }) => {
  return (
    <View style={styles.searchContainer}>
      <View style={styles.inputContainer}>
        <Ionicons
          name="search"
          size={20}
          color={COLORS.gray}
          style={styles.icon}
        />
        <TextInput
          placeholder="Search"
          placeholderTextColor={COLORS.gray}
          style={styles.input}
        />
      </View>
      <TouchableOpacity onPress={onFilterPress} style={styles.addButton}>
        <FilterIcon />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    backgroundColor: COLORS.primary,
    width: "100%",
    height: 75,
    marginBottom: 20,
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.white,
    borderRadius: 8,
    paddingHorizontal: 10,
    height: 50,
    width: "80%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  icon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    fontSize: 16,
    fontWeight: "400",
    lineHeight: 24,
    color: COLORS.gray,
  },
  addButton: {
    backgroundColor: COLORS.iconbackground,
    borderRadius: 8,
    marginLeft: 12,
    paddingHorizontal: 22,
    paddingVertical: 14,
  },
});

export default SearchHeader;
