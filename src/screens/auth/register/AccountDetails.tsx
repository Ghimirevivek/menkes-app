import React, { useEffect, useState } from "react";
import { Text, StyleSheet, View } from "react-native";
import Entypo from "@expo/vector-icons/Entypo";
import Ionicons from "@expo/vector-icons/Ionicons";
import { COLORS } from "@/theme";
import AnimatedTextInput from "@/components/input/InputText";
import PasswordCloseIcon from "@/assets/icons/PasswordCloseIcon";
import PasswordCheckIcon from "@/assets/icons/PasswordCheckIcon";

type PasswordValidationState = {
  length: boolean;
  noEmailOrName: boolean;
  symbolOrNumber: boolean;
  uppercase: boolean;
};

const AccountDetails: React.FC<{
  formState: {
    email: string;
    password: string;
    confirmPassword: string;
  };
  updateFormState: (
    field: "email" | "password" | "confirmPassword",
    value: string
  ) => void;
  validityState: {
    emailValid: boolean;
    passwordValid: boolean;
    passwordsMatch: boolean;
  };
  updateValidityState: (
    field: "emailValid" | "passwordsMatch" | "passwordValid",
    isValid: boolean
  ) => void;
}> = ({ formState, updateFormState, validityState, updateValidityState }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [passwordValidation, setPasswordValidation] =
    useState<PasswordValidationState>({
      length: false,
      noEmailOrName: false,
      symbolOrNumber: false,
      uppercase: false,
    });

  const validateEmail = (value: string) => {
    updateFormState("email", value);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    updateValidityState("emailValid", emailRegex.test(value));
  };

  const validatePassword = (value: string) => {
    updateFormState("password", value);

    setPasswordValidation({
      length: value.length >= 8,
      noEmailOrName: !value.includes(formState.email),
      symbolOrNumber: /[!@#$%^&*(),.?":{}|<>0-9]/.test(value),
      uppercase: /[A-Z]/.test(value),
    });
  };

  useEffect(() => {
    updateValidityState(
      "passwordValid",
      Object.values(passwordValidation).every((value) => value === true)
    );
  }, [passwordValidation]);

  const validateConfirmPassword = (value: string) => {
    updateFormState("confirmPassword", value);
    updateValidityState("passwordsMatch", value === formState.password);
  };

  const calculatePasswordStrength = () => {
    const validCount = Object.values(passwordValidation).filter(Boolean).length;
    if (validCount === 0 || validCount === 1) return "Weak";
    if (validCount === 2 || validCount === 3) return "Moderate";
    return "Strong";
  };

  const passwordStrength = calculatePasswordStrength();

  const togglePasswordVisibility = () => setShowPassword((prev) => !prev);
  const toggleConfirmPasswordVisibility = () =>
    setShowConfirmPassword((prev) => !prev);
  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Account Details</Text>
      <AnimatedTextInput
        label={"Email Address"}
        value={formState.email}
        onChangeText={validateEmail}
      />

      {!validityState.emailValid && (
        <View
          style={{
            marginBottom: 14,
            marginLeft: 8,
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <PasswordCloseIcon />
            <Text style={[styles.errorText, { marginLeft: 10 }]}>
              Enter a valid email address
            </Text>
          </View>
        </View>
      )}

      <View>
        <AnimatedTextInput
          label="Password"
          value={formState.password}
          onChangeText={validatePassword}
          secureTextEntry={!showPassword}
          error={!validityState.passwordValid && formState.password !== ""}
        />
      </View>
      <View>
        <AnimatedTextInput
          label="Confirm Password"
          value={formState.confirmPassword}
          onChangeText={validateConfirmPassword}
          secureTextEntry={!showConfirmPassword}
          error={
            !validityState.passwordsMatch && formState.confirmPassword !== ""
          }
        />
      </View>
      {formState.password !== "" && (
        <View style={styles.validationContainer}>
          {passwordStrength === "Weak" && (
            <View style={styles.passwordStrengthContainer}>
              <Ionicons name="alert-circle" size={16} color={COLORS.error} />
              <Text
                style={[
                  styles.errorText,
                  { marginLeft: passwordStrength ? 6 : 16 },
                ]}
              >
                Password strength: {passwordStrength}
              </Text>
            </View>
          )}

          {Object.entries(passwordValidation).map(([key, isValid]) => (
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
                    : key === "noEmailOrName"
                      ? "Cannot include your email address"
                      : key === "symbolOrNumber"
                        ? "Must have at least one symbol or number"
                        : "Must have at least one uppercase letter"}
                </Text>
              </View>
            </View>
          ))}

          {!validityState.passwordsMatch &&
            formState.confirmPassword !== "" && (
              <View
                style={{
                  marginBottom: 14,
                  marginLeft: 8,
                }}
              >
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <PasswordCloseIcon />
                  <Text
                    style={[
                      styles.errorText,
                      { marginLeft: !validityState.passwordsMatch ? 12 : 8 },
                    ]}
                  >
                    Passwords must match
                  </Text>
                </View>
              </View>
            )}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 16,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 24,
    color: "#333",
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

export default AccountDetails;
