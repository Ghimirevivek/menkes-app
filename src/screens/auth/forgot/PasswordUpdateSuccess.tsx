import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { COLORS, FONTS } from "@/theme";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { setStep } from "@/redux/slices/stepSlice";
import { setIsChecked } from "@/redux/slices/authSlice";
import { StackParamList } from "@/navigator/stack/Stack.typeDefs";
import Button from "@/components/Button/Button";

const PasswordUpdateSuccess: React.FC = () => {
  const navigation = useNavigation<NavigationProp<StackParamList>>();
  const dispatch = useDispatch();

  const handleContinue = () => {
    dispatch(setStep(1));
    navigation.navigate("RegisterScreen");
  };
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <View style={styles.circle}>
          <MaterialIcons name="check" size={120} color={COLORS.IndicatorBar} />
        </View>
      </View>
      <Text style={styles.title}>Password Updated</Text>
      <Text style={styles.message}>
        Your password has been updated successfully Use your new password to log
        in.
      </Text>
      <View style={{ position: "absolute", bottom: 30, width: "100%" }}>
        <Button type="primary" label="Back to login" onPress={handleContinue} />
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
    marginBottom: 24,
  },
});

export default PasswordUpdateSuccess;
