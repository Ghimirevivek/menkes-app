import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { COLORS, FONTS } from "@/theme";
import Button from "@/components/Button/Button";
import CloseIcon from "@/assets/icons/CloseIcon";

const AccountDeActivate: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <CloseIcon />
      </View>
      <Text style={styles.title}>
        Your account has been deactivated/declined
      </Text>
      <Text style={styles.message}>
        If you believe this is a mistake or need further assistance, please
        contact our support team.
      </Text>
      <View style={{ position: "absolute", bottom: 80, width: "100%" }}>
        <Button type="primary" label="Contact Us" />
        <Button type="secondary" label="Close" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    padding: 20,
  },
  iconContainer: {
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 700,
    fontFamily: FONTS.calibri.regular,
    marginBottom: 20,
    textAlign: "center",
    color: "#000",
  },
  message: {
    fontFamily: FONTS.calibri.regular,
    fontSize: 16,
    fontWeight: 400,
    color: COLORS.gray,
    textAlign: "center",
    lineHeight: 24,
    marginBottom: 30,
    width: "90%",
  },
});

export default AccountDeActivate;
