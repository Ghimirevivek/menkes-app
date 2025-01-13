import { COLORS, FONTS } from "@/theme";
import React from "react";
import { View, Image, StyleSheet, Text } from "react-native";

const HeaderLeftCheckLogo = ({ navigation }: any) => {
  return (
    <View style={{ marginBottom: 20 }}>
      <Text style={styles.logotext}>Check In</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  logotext: {
    fontSize: 28,
    fontWeight: 700,
    fontFamily: FONTS.calibri.bold,
    lineHeight: 36,
    color: COLORS.white,
  },
});

export default HeaderLeftCheckLogo;
