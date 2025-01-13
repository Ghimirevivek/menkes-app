import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import AnimatedTextInput from "@/components/input/InputText";
import { COLORS } from "@/theme";
import Button from "@/components/Button/Button";

const ChangePassword = () => {
  const [formState, setFormState] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const updateFormState = (field: keyof typeof formState, value: string) => {
    setFormState((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };

  const isFormComplete =
    formState.currentPassword.trim() &&
    formState.newPassword.trim() &&
    formState.confirmPassword.trim();

  const handleChangePassword = () => {
    if (formState.newPassword !== formState.confirmPassword) {
      alert("New Password and Confirm Password must match.");
      return;
    }
    console.log("Password Changed Successfully!");
  };

  return (
    <View style={styles.container}>
      <AnimatedTextInput
        label="Current Password"
        value={formState.currentPassword}
        onChangeText={(text: string) =>
          updateFormState("currentPassword", text)
        }
        secureTextEntry
      />

      <AnimatedTextInput
        label="New Password"
        value={formState.newPassword}
        onChangeText={(text: string) => updateFormState("newPassword", text)}
        secureTextEntry
      />

      <AnimatedTextInput
        label="Confirm New Password"
        value={formState.confirmPassword}
        onChangeText={(text: string) =>
          updateFormState("confirmPassword", text)
        }
        secureTextEntry
      />

      <View style={styles.buttonContainer}>
        <Button
          type="primary"
          label="Change Password"
          onPress={handleChangePassword}
          disabled={!isFormComplete}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.formBackground,
    padding: 22,
  },
  buttonContainer: {
    marginTop: 20,
  },
});

export default ChangePassword;
