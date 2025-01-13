import { COLORS, FONTS } from "@/theme";
import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import QRCode from "react-native-qrcode-svg";

const CheckInHome = () => {
  const userName = "David Smith";
  const userId = "Menkes ID 155400";
  const qrValue = "https://example.com/checkin/155400"; // QR code value

  return (
    <View style={styles.container}>
      <View style={styles.qrContainer}>
        <QRCode value={qrValue} size={150} backgroundColor="white" />
      </View>

      <View style={styles.profileContainer}>
        <View style={styles.avatarContainer}>
          <Image
            source={require("../../assets/images/avatar.png")} // Replace with actual URL or local image
            style={styles.profileImage}
          />
        </View>
        <Text style={styles.userName}>{userName}</Text>
        <Text style={styles.userId}>{userId}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.formBackground,
    paddingHorizontal: 20,
  },
  qrContainer: {
    marginBottom: 20,
    backgroundColor: "white",
    padding: 50,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  profileContainer: {
    alignItems: "center",
    marginTop: 20,
  },
  profileImage: {
    width: 55,
    height: 70,
    marginBottom: 10,
  },
  avatarContainer: {
    height: 130,
    width: 130,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.avatarBackgroundColor,
    borderRadius: 100,
    marginBottom: 12,
    borderWidth: 3,
    borderColor: COLORS.inputBackground,
  },
  userName: {
    fontSize: 24,
    fontWeight: 700,
    lineHeight: 30,
    fontFamily: FONTS.calibri.bold,
    color: COLORS.primary,
  },
  userId: {
    fontSize: 18,
    fontWeight: 400,
    lineHeight: 26,
    fontFamily: FONTS.calibri.regular,
    color: COLORS.black,
  },
});

export default CheckInHome;
