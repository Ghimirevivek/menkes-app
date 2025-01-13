import React from "react";
import { View, Image, StyleSheet } from "react-native";

const HeaderLeftLogo = ({ navigation }: any) => {
  return (
    <View style={{ marginBottom: 20 }}>
      <Image
        source={require("../../../assets/images/Logo.png")}
        style={styles.logo}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  logo: {
    width: 102,
    height: 32,
    resizeMode: "contain",
    marginBottom: 20,
  },
});

export default HeaderLeftLogo;
