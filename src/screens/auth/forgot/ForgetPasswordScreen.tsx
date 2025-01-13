import Button from "@/components/Button/Button";
import AnimatedTextInput from "@/components/input/InputText";
import { COLORS, FONTS } from "@/theme";
import React, { useState } from "react";
import { View, StyleSheet } from "react-native";

const ForgetPasswordScreen = ({ navigation }: any) => {
  const [email, setEmail] = useState<string>("");

  return (
    <View style={styles.container}>
      <AnimatedTextInput
        label="Email"
        value={email}
        onChangeText={(text: string) => setEmail(text)}
      />

      <View style={{ width: "100%", alignItems: "center", gap: 10 }}>
        <Button
          type="primary"
          label="Continue"
          onPress={() => navigation.navigate("VerificationScreen")}
          disabled={!email}
          buttonStyle={{
            backgroundColor: email ? COLORS.primary : COLORS.disablebutton,
          }}
          textStyle={{
            color: email ? COLORS.white : COLORS.gray,
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
});

export default ForgetPasswordScreen;
