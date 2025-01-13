import { StackParamList } from "@/navigator/stack/Stack.typeDefs";
import { COLORS, FONTS } from "@/theme";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  TouchableOpacity,
} from "react-native";

const EmailApprovalScreen: React.FC = () => {
  const navigation = useNavigation<NavigationProp<StackParamList>>();

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require("../../../assets/images/LogoBlue.png")}
          style={styles.logo}
        />
      </View>
      <View style={{ paddingHorizontal: 16 }}>
        <Text style={styles.greeting}>Dear [First Name],</Text>
        <Text style={styles.message}>
          We are excited to inform you that your account has been successfully
          approved! You can now access all the features and benefits of your new
          account with us.
        </Text>
        <Text style={styles.idLabel}>
          To get started, log in using your email or the Menkes ID below:
        </Text>
        <Text style={styles.menkesID}>154000</Text>
        <View style={{ width: "60%" }}>
          <TouchableOpacity
            onPress={() => navigation.navigate("LoginScreen")}
            style={styles.continueButton}
          >
            <Text style={styles.continueButtonText}> Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: "#fff" },

  logoContainer: {
    paddingHorizontal: 30,
    alignItems: "center",
    width: "100%",
    height: "25%",
    position: "relative",
  },

  greeting: {
    fontSize: 18,
    fontWeight: 400,
    lineHeight: 26,
    fontFamily: FONTS.calibri.regular,
    marginBottom: 14,
  },
  message: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: 400,
    lineHeight: 26,
    fontFamily: FONTS.calibri.regular,
    marginBottom: 14,
  },
  idLabel: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: 400,
    lineHeight: 26,
    fontFamily: FONTS.calibri.regular,
    marginBottom: 6,
  },
  menkesID: {
    fontSize: 24,
    fontWeight: 700,
    lineHeight: 26,
    fontFamily: FONTS.calibri.bold,
    marginBottom: 14,
  },
  logo: {
    position: "absolute",
    alignSelf: "flex-start",
    top: "30%",
    left: 10,
    width: 220,
    height: 110,
    resizeMode: "contain",
  },
  continueButton: {
    backgroundColor: COLORS.primary,
    borderRadius: 10,
    paddingVertical: 15,
    alignItems: "center",
    marginTop: 20,
  },
  continueButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
});

export default EmailApprovalScreen;
