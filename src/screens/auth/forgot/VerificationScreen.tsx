import Button from "@/components/Button/Button";
import { COLORS, FONTS } from "@/theme";
import React, { useRef, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const VerificationScreen = ({ navigation }: any) => {
  const [otp, setOtp] = useState<string[]>(Array(5).fill(""));
  const inputRefs = Array(5)
    .fill(null)
    .map(() => useRef<TextInput>(null));

  const handleInputChange = (text: string, index: number) => {
    // Only allow numeric input (0-9)
    if (/^\d*$/.test(text)) {
      const updatedOtp = [...otp];
      updatedOtp[index] = text;
      setOtp(updatedOtp);

      // Move focus to the next input if the current field is filled
      if (text && index < inputRefs.length - 1) {
        inputRefs[index + 1].current?.focus();
      }
    }
  };

  const handleBackspace = (text: string, index: number) => {
    if (!text && index > 0) {
      inputRefs[index - 1].current?.focus();
    }
    const updatedOtp = [...otp];
    updatedOtp[index] = "";
    setOtp(updatedOtp);
  };

  const handleVerify = () => {
    const otpCode = otp.join("");
    navigation.navigate("NewPasswordScreen");
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>
          Check your email to update your password
        </Text>
        <View style={{ marginBottom: 20 }}>
          <Text style={styles.subtitle}>
            Enter the 5-digit pin code we sent to:
          </Text>
          <Text style={styles.email}>john.doe@email.com</Text>
        </View>
        <View style={styles.otpContainer}>
          {Array(5)
            .fill("")
            .map((_, index) => (
              <TextInput
                key={index}
                ref={inputRefs[index]}
                style={styles.otpInput}
                keyboardType="number-pad"
                maxLength={1}
                onChangeText={(text) => handleInputChange(text, index)}
                onKeyPress={({ nativeEvent }) => {
                  if (nativeEvent.key === "Backspace") {
                    handleBackspace("", index);
                  }
                }}
              />
            ))}
        </View>
        <TouchableOpacity onPress={() => navigation.navigate("EmailScreen")}>
          <Text
            style={{
              fontSize: 14,
              fontWeight: 400,
              lineHeight: 20,
              textAlign: "center",
              color: COLORS.gray,
            }}
          >
            Didn't Receive the Code?{" "}
            <Text style={styles.resendText}> Resend </Text>{" "}
          </Text>
        </TouchableOpacity>
      </View>

      <View style={{ width: "100%", alignItems: "center", gap: 10 }}>
        <Button type="primary" label="Verify Pin" onPress={handleVerify} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 40,
    justifyContent: "space-between",
    backgroundColor: COLORS.white,
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    lineHeight: 32,
    textAlign: "center",
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 14,
    fontWeight: "400",
    lineHeight: 20,
    textAlign: "center",
    color: COLORS.gray,
    marginBottom: 5,
  },
  email: {
    fontSize: 14,
    fontWeight: "400",
    lineHeight: 20,
    textAlign: "center",
    color: COLORS.gray,
    marginBottom: 20,
  },
  otpContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 40,
    paddingHorizontal: 20,
  },
  otpInput: {
    borderWidth: 1,
    borderColor: COLORS.disablebutton,
    borderRadius: 8,
    padding: 10,
    textAlign: "center",
    fontSize: 20,
    fontWeight: 700,
    // lineHeight: 32,
    fontFamily: FONTS.calibri.bold,
    width: 50,
    height: 50,
  },
  resendText: {
    fontSize: 14,
    fontWeight: 600,
    lineHeight: 20,
    textAlign: "center",
    color: COLORS.primary,
  },

  enableButton: {
    backgroundColor: COLORS.primary,
    padding: 14,
    borderRadius: 8,
    alignItems: "center",
    width: "100%",
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 700,
    lineHeight: 30,
    fontFamily: FONTS.calibri.bold,
    color: COLORS.white,
    textAlign: "center",
  },
});

export default VerificationScreen;
