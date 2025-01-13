import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { COLORS, FONTS } from "@/theme";
import { useDispatch } from "react-redux";
import { setIsChecked } from "@/redux/slices/authSlice";
import Button from "@/components/Button/Button";

const RegisterSuccess: React.FC = () => {
  const dispatch = useDispatch();

  const handleContinue = () => {
    dispatch(setIsChecked());
  };
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <View style={styles.circle}>
          <MaterialIcons name="check" size={120} color={COLORS.IndicatorBar} />
        </View>
      </View>
      <Text style={styles.title}>Registration Complete</Text>
      <Text style={styles.message}>
        Your account is under review. You'll be notified once it's approved. If
        there are any issues, we'll contact you directly.
      </Text>
      <View style={{ position: "absolute", bottom: 80, width: "100%" }}>
        <Button type="primary" label="Close" onPress={handleContinue} />
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
  circle: {
    width: 150,
    height: 150,
    backgroundColor: COLORS.success,
    borderRadius: "50%",
    justifyContent: "center",
    alignItems: "center",
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

export default RegisterSuccess;
