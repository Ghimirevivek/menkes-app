import AnimatedTextInput from "@/components/input/InputText";
import { COLORS, FONTS } from "@/theme";
import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Entypo from "@expo/vector-icons/Entypo";
import Ionicons from "@expo/vector-icons/Ionicons";
import Button from "@/components/Button/Button";
import PasswordCheckIcon from "@/assets/icons/PasswordCheckIcon";
import PasswordCloseIcon from "@/assets/icons/PasswordCloseIcon";

const NewPasswordScreen = ({ navigation }: any) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const [emailValid, setEmailValid] = useState<boolean>(false);
  const [passwordValidation, setPasswordValidation] = useState({
    length: false,
    symbolOrNumber: false,
    uppercase: false,
  });
  const [passwordValid, setPasswordValid] = useState<boolean>(false);
  const [passwordsMatch, setPasswordsMatch] = useState<boolean>(true);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState<boolean>(false);
  const [passwordStrength, setPasswordStrength] = useState<string>("Weak");

  const validateEmail = (value: string) => {
    setEmail(value);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setEmailValid(emailRegex.test(value));
  };

  const validatePassword = (value: string) => {
    setPassword(value);

    const validation = {
      length: value.length >= 8,
      symbolOrNumber: /[!@#$%^&*(),.?":{}|<>0-9]/.test(value),
      uppercase: /[A-Z]/.test(value),
    };

    setPasswordValidation(validation);

    // Update password strength
    const strength = Object.values(validation).filter(Boolean).length;
    if (strength === 3) setPasswordStrength("Strong");
    else if (strength === 2) setPasswordStrength("Medium");
    else setPasswordStrength("Weak");
  };

  useEffect(() => {
    setPasswordValid(
      Object.values(passwordValidation).every((isValid) => isValid === true)
    );
  }, [passwordValidation]);

  const validateConfirmPassword = (value: string) => {
    setConfirmPassword(value);
    setPasswordsMatch(value === password);
  };

  return (
    <View style={styles.container}>
      <View>
        <View>
          <AnimatedTextInput
            label="Password"
            value={password}
            onChangeText={validatePassword}
            secureTextEntry={!showPassword}
            error={!passwordValid}
          />
        </View>
        <View>
          <AnimatedTextInput
            label="Confirm Password"
            value={confirmPassword}
            onChangeText={validateConfirmPassword}
            secureTextEntry={!showConfirmPassword}
            error={!passwordsMatch}
          />
        </View>

        <View style={styles.validationContainer}>
          {password && passwordStrength === "Weak" && (
            <View style={styles.passwordStrengthContainer}>
              <Ionicons name="alert-circle" size={16} color={COLORS.error} />
              <Text
                style={[
                  styles.errorText,
                  { marginLeft: passwordStrength ? 10 : 20 },
                ]}
              >
                Password strength: {passwordStrength}
              </Text>
            </View>
          )}

          {password &&
            Object.entries(passwordValidation).map(([key, isValid]) => (
              <View
                key={key}
                style={{
                  marginBottom: 8,
                  marginLeft: isValid ? 0 : 8,
                }}
              >
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  {isValid ? <PasswordCheckIcon /> : <PasswordCloseIcon />}
                  <Text
                    style={[styles.errorText, { marginLeft: isValid ? 6 : 12 }]}
                  >
                    {key === "length"
                      ? "Must be at least 8 characters"
                      : key === "symbolOrNumber"
                        ? "Must have at least one symbol or number"
                        : "Must have at least one uppercase letter"}
                  </Text>
                </View>
              </View>
            ))}

          {password && !passwordsMatch && (
            <View style={styles.passwordStrengthContainer}>
              <PasswordCloseIcon />
              <Text
                style={[
                  styles.errorText,
                  { marginLeft: !passwordsMatch ? 12 : 20 },
                ]}
              >
                Passwords must match
              </Text>
            </View>
          )}
        </View>
      </View>
      <View style={{ width: "100%", alignItems: "center", gap: 10 }}>
        <Button
          type="primary"
          label="Continue"
          onPress={() => navigation.navigate("PasswordUpdateSuccess")}
          disabled={!passwordValid || !passwordsMatch}
          buttonStyle={{
            backgroundColor: !password ? COLORS.disablebutton : COLORS.primary,
          }}
          textStyle={{
            color: !password ? COLORS.gray : COLORS.white,
          }}
        />
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

  validationContainer: {
    marginTop: 8,
    marginVertical: 14,
  },
  validationText: {
    fontSize: 14,
    marginVertical: 4,
  },
  valid: {
    color: "black",
  },

  errorText: {
    color: "black",
    fontSize: 12,
    fontWeight: 400,
    lineHeight: 16,
  },
  passwordStrengthContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 0,
    marginLeft: 6,
    marginBottom: 8,
  },
  passwordStrengthText: { marginLeft: 8, fontSize: 14 },
  weakText: { color: COLORS.error },
});

export default NewPasswordScreen;
