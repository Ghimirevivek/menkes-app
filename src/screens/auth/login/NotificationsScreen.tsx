import React, { useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import * as Notifications from "expo-notifications";
import Bellicon from "@/assets/icons/Bellicon";
import { COLORS, FONTS } from "@/theme";
import { AppDispatch } from "@/redux/store";
import { useDispatch } from "react-redux";
import { setIsChecked } from "@/redux/slices/authSlice";
import Button from "@/components/Button/Button";

const NotificationsScreen: React.FC = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const requestNotificationPermissions = async () => {
      const { status } = await Notifications.requestPermissionsAsync();
      if (status !== "granted") {
        console.log("Notification permissions not granted");
      } else {
        console.log("Notification permissions granted");
      }
    };

    requestNotificationPermissions();
  }, []);

  const handleChecked = () => {
    dispatch(setIsChecked());
  };

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
        <Bellicon />
        <View
          style={{
            paddingHorizontal: 20,
            alignItems: "center",
            marginTop: 40,
            marginBottom: 50,
          }}
        >
          <Text style={styles.title}>Get Important Updates</Text>
          <Text style={styles.description}>
            Allow us to send you push notifications when you have updates,
            messages and alerts.
          </Text>
        </View>
      </View>

      <View style={{ width: "100%", alignItems: "center", gap: 10 }}>
        <Button type="primary" label="Yes, notify me" />

        <Button
          type="secondary"
          label="Skip for now"
          onPress={() => handleChecked()}
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
    fontSize: 24,
    fontWeight: 700,
    lineHeight: 30,
    fontFamily: FONTS.calibri.bold,
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    fontWeight: 400,
    lineHeight: 24,
    fontFamily: FONTS.calibri.regular,
    color: COLORS.gray,
    marginBottom: 16,
    textAlign: "center",
  },
});

export default NotificationsScreen;
