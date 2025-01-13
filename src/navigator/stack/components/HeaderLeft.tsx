import React from "react";
import { StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const styles = StyleSheet.create({
  logo: {
    width: 32,
    height: 32,
  },
});

export function HeaderLeft({ navigation }: any) {
  return (
    <Ionicons
      name="arrow-back"
      size={24}
      color="white"
      style={{ marginLeft: 10 }}
      onPress={() => navigation.goBack()}
    />
  );
}
