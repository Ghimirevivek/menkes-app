import React from "react";
import { View, StyleSheet } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useDispatch } from "react-redux";
import { openModal } from "@/redux/slices/modalSlice";

const HeaderWithNotificationsAndSearch = ({ navigation }: any) => {
  const dispatch = useDispatch();

  const handleIconPress = () => {
    dispatch(openModal()); // Dispatch action to open the modal
  };

  return (
    <View style={styles.headerIcons}>
      <Ionicons
        onPress={handleIconPress}
        name="search-outline"
        size={24}
        color="#fff"
        style={styles.icon}
      />
      <Ionicons name="notifications-outline" size={24} color="#fff" />
    </View>
  );
};

const styles = StyleSheet.create({
  headerIcons: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  icon: {
    marginRight: 30,
  },
});

export default HeaderWithNotificationsAndSearch;
