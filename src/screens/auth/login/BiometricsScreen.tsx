import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import * as LocalAuthentication from "expo-local-authentication";
import { COLORS, FONTS } from "@/theme";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { StackParamList } from "@/navigator/stack/Stack.typeDefs";
import Button from "@/components/Button/Button";

type AlertProps = {
  title: string;
  mess: string;
  btnTxt: string;
  btnFunc: () => void;
};

const BiometricsScreen: React.FC = () => {
  const navigation = useNavigation<NavigationProp<StackParamList>>();
  const [isBiometricSupported, setIsBiometricSupported] =
    useState<boolean>(false);

  const fallBackToDefaultAuth = () => {
    console.log("Fallback to default authentication");
  };

  const alertComponent = ({
    title,
    mess,
    btnTxt,
    btnFunc,
  }: AlertProps): void => {
    Alert.alert(title, mess, [
      {
        text: btnTxt,
        onPress: btnFunc,
      },
    ]);
  };

  const TwoButtonAlert = (): void =>
    Alert.alert("You are logged in", "Subscribe Now @OmatsolaDev", [
      {
        text: "Back",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      {
        text: "PROCEED",
        onPress: () => console.log("OK Pressed"),
      },
    ]);

  const handleBioMetricAuth = async (): Promise<void> => {
    const isBiometricAvailable = await LocalAuthentication.hasHardwareAsync();

    console.log(
      "isBiometricAvailableisBiometricAvailable",
      isBiometricAvailable
    );

    if (!isBiometricAvailable) {
      return alertComponent({
        title: "BioMetric Auth is not supported",
        mess: "Please enter your password",
        btnTxt: "OK",
        btnFunc: fallBackToDefaultAuth,
      });
    }

    const supportedBiometrics =
      await LocalAuthentication.supportedAuthenticationTypesAsync();

    const savedBiometrics = await LocalAuthentication.isEnrolledAsync();
    if (!savedBiometrics) {
      return alertComponent({
        title: "BioMetric record not found",
        mess: "Please login with your password",
        btnTxt: "OK",
        btnFunc: fallBackToDefaultAuth,
      });
    }

    const biometricAuth = await LocalAuthentication.authenticateAsync({
      promptMessage: "Login to Omatsola dev app with biometrics",
      cancelLabel: "Cancel",
      disableDeviceFallback: true,
    });
    console.log("biometricAuthbiometricAuth", biometricAuth);

    if (biometricAuth.success) {
      TwoButtonAlert();
    } else {
      alertComponent({
        title: "Authentication Failed",
        mess: "Unable to authenticate using biometrics.",
        btnTxt: "OK",
        btnFunc: fallBackToDefaultAuth,
      });
    }
  };

  useEffect(() => {
    const checkBiometricSupport = async () => {
      const compatible = await LocalAuthentication.hasHardwareAsync();
      setIsBiometricSupported(compatible);
    };

    checkBiometricSupport();
  }, []);

  return (
    <View style={styles.container}>
      <View
        style={{
          height: "80%",
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <FontAwesome5 name="fingerprint" size={140} color={COLORS.primary} />

        <View
          style={{
            paddingHorizontal: 20,
            alignItems: "center",
            marginVertical: 50,
          }}
        >
          <Text style={styles.title}>Log in instantly with Biometrics</Text>
          <Text style={styles.description}>
            Would you like to use biometrics to sign into the app? You can also
            do this later under account settings.
          </Text>
        </View>
      </View>

      <View style={{ width: "100%", alignItems: "center", gap: 10 }}>
        <Button
          type="primary"
          label="Yes, enable BioMetric"
          onPress={handleBioMetricAuth}
        />

        <Button
          type="secondary"
          label="Skip for now"
          onPress={() => navigation.navigate("NotificationsScreen")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: COLORS.white,
    alignItems: "center",
  },
  title: {
    textAlign: "center",
    fontSize: 24,
    fontWeight: 700,
    lineHeight: 30,
    fontFamily: FONTS.calibri.bold,
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    fontWeight: 400,
    lineHeight: 30,
    fontFamily: FONTS.calibri.regular,
    color: COLORS.gray,
    marginBottom: 16,
    textAlign: "center",
  },
});

export default BiometricsScreen;
