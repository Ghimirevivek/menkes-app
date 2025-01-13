import React from "react";
import { View, StyleSheet } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

const RightHeaderSearch = ({ navigation }: any) => {
  return (
    <View style={styles.headerIcons}>
      <Ionicons name="search-outline" size={24} color="#fff" />
    </View>
  );
};

const styles = StyleSheet.create({
  headerIcons: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
});

export default RightHeaderSearch;
