import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks"; // Adjust the path
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { loginUser } from "@/redux/slices/authSlice"; // Adjust the path as needed
import { COLORS, FONTS } from "@/theme";
import AnimatedTextInput from "@/components/input/InputText";
import Button from "@/components/Button/Button";

const LoginScreen: React.FC = ({ navigation }: any) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const dispatch = useAppDispatch();

  const { loading } = useAppSelector((state) => state.registration);

  // Hardcoded credentials
  const hardcodedEmail = "example@gmail.com";
  const hardcodedPassword = "123456";

  const handleLogin = () => {
    if (!email || !password) {
      Alert.alert("Validation Error", "Both email and password are required.");
      return;
    }

    if (email !== hardcodedEmail || password !== hardcodedPassword) {
      setErrorMessage("The password you entered is incorrect");
      return;
    }

    setErrorMessage("");
    dispatch(loginUser({ email, password }))
      .unwrap()
      .then(() => {
        navigation.navigate("FaceIdScreen");
      })
      .catch((err: string) => {
        setErrorMessage(err || "Invalid login credentials.");
      });
  };

  return (
    <View style={styles.container}>
      <AnimatedTextInput
        label="Email Address or Menkes ID"
        value={email}
        onChangeText={(text: string) => setEmail(text)}
        keyboardType="email-address"
      />
      <AnimatedTextInput
        label="Password"
        value={password}
        onChangeText={(text: string) => setPassword(text)}
        secureTextEntry
        error={!!errorMessage}
        apiFailed={!!errorMessage}
      />

      {errorMessage && <Text style={styles.errorText}>{errorMessage}</Text>}

      <View style={{ alignItems: "center", marginVertical: 22 }}>
        <TouchableOpacity
          onPress={() => navigation.navigate("ForgetPasswordScreen")}
        >
          <Text
            style={{
              fontSize: 16,
              fontWeight: "700",
              color: COLORS.primary,
              fontFamily: FONTS.calibri.bold,
              lineHeight: 24,
            }}
          >
            Forget password?
          </Text>
        </TouchableOpacity>
      </View>

      <Button
        type="primary"
        label={loading ? "Logging in..." : "Login"}
        onPress={handleLogin}
        disabled={!email || !password}
        buttonStyle={{
          backgroundColor:
            !email || !password ? COLORS.disablebutton : COLORS.primary,
        }}
        textStyle={{
          color: !email || !password ? COLORS.gray : COLORS.white,
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: COLORS.formBackground },
  forgotPassword: {
    color: COLORS.primary,
    textAlign: "center",
    marginBottom: 16,
    fontSize: 16,
    fontWeight: "700",
    fontFamily: FONTS.calibri.bold,
  },
  errorText: {
    color: COLORS.error,
    textAlign: "left",
    marginTop: 0,
    marginLeft: 8,
    fontSize: 16,
    fontWeight: 400,
    lineHeight: 24,
    fontFamily: FONTS.calibri.regular,
  },
});

export default LoginScreen;
