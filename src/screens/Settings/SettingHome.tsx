import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Switch,
  ScrollView,
  Share,
  Alert,
} from "react-native";
import { MaterialIcons, Feather } from "@expo/vector-icons";
import Button from "@/components/Button/Button";
import { COLORS, FONTS } from "@/theme";
import * as Notifications from "expo-notifications";
import LockIcon from "@/assets/icons/LockIcon";
import FaceIcon from "@/assets/icons/FaceIcon";
import CallBackIcon from "@/assets/icons/CallBackIcon";
import PrivacyIcon from "@/assets/icons/PrivacyIcon";
import FileListIcon from "@/assets/icons/FileListIcon";
import TrashIcon from "@/assets/icons/TrashIcon";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { StackParamList } from "@/navigator/stack/Stack.typeDefs";
import ModalWrapper from "@/components/modal/ModalWrapper";
import { closeModal, openModal } from "@/redux/slices/modalSlice";
import AllocatedRequesCallback from "@/components/callBack/AllocatedRequesCallback";
import { useDispatch, useSelector } from "react-redux";
import { setStep } from "@/redux/slices/stepSlice";
import { setUserNull } from "@/redux/slices/authSlice";

interface SettingOptionProps {
  icon: JSX.Element;
  text: string;
  onPress?: () => void;
  isSwitch?: boolean;
  switchValue?: boolean;
  onToggleSwitch?: () => void;
  style?: object;
}

const SettingOption: React.FC<SettingOptionProps> = ({
  icon,
  text,
  onPress,
  isSwitch,
  switchValue,
  onToggleSwitch,
  style,
}) => (
  <TouchableOpacity
    style={[styles.option, style]}
    onPress={onPress}
    disabled={!onPress && !isSwitch}
  >
    {icon}
    <Text style={styles.optionText}>{text}</Text>
    {isSwitch ? (
      <Switch
        value={switchValue}
        onValueChange={onToggleSwitch}
        trackColor={{ false: COLORS.lightgray, true: COLORS.primary }}
        thumbColor={switchValue ? "#fff" : "#f4f3f4"}
      />
    ) : (
      <Feather name="chevron-right" size={24} color="#000" />
    )}
  </TouchableOpacity>
);

const SettingHome = () => {
  const navigation = useNavigation<NavigationProp<StackParamList>>();
  const dispatch = useDispatch();
  const isModalOpen = useSelector((state: any) => state.modal.isOpen);

  const [notificationsEnabled, setNotificationsEnabled] = useState(false);
  const [faceIdEnabled, setFaceIdEnabled] = useState(false);

  const handleToggleNotifications = async () => {
    const newValue = !notificationsEnabled;
    setNotificationsEnabled(newValue);
    if (newValue) {
      const { status } = await Notifications.requestPermissionsAsync();
      if (status !== "granted") setNotificationsEnabled(false);
    }
  };

  const handleShare = async () => {
    try {
      await Share.share({
        title: "Share PDF File",
        message: "Here is the file you requested",
      });
    } catch (error) {
      console.error("Error sharing file:", error);
    }
  };

  const confirmAction = (
    title: string,
    message: string,
    onConfirm: () => void
  ) =>
    Alert.alert(title, message, [
      { text: "Cancel", style: "cancel" },
      { text: title, onPress: onConfirm, style: "destructive" },
    ]);

  const handleLogout = () => {
    dispatch(setStep(1));
    dispatch(setUserNull());
  };

  return (
    <ScrollView style={styles.container}>
      <SettingOption
        icon={<MaterialIcons name="person-outline" size={24} color="#000" />}
        text="Profile"
        onPress={() => navigation.navigate("Profile")}
      />

      <SettingOption
        icon={<LockIcon />}
        onPress={() => navigation.navigate("ChangePassword")}
        text="Change Password"
      />
      <SettingOption
        icon={<CallBackIcon />}
        text="Request a Call Back"
        onPress={() => dispatch(openModal())}
      />
      <SettingOption
        icon={<Feather name="upload" size={24} color="black" />}
        text="Invite a Realtor"
        onPress={handleShare}
      />
      <SettingOption
        icon={
          <MaterialIcons name="notifications-none" size={24} color="#000" />
        }
        text="Notifications"
        isSwitch
        switchValue={notificationsEnabled}
        onToggleSwitch={handleToggleNotifications}
      />
      <SettingOption
        icon={<FaceIcon width={"24"} height={"25"} color={"#000"} />}
        text="Enable Face ID"
        isSwitch
        switchValue={faceIdEnabled}
        onToggleSwitch={() => setFaceIdEnabled(!faceIdEnabled)}
        style={{ borderBottomWidth: 1, borderColor: COLORS.inputBackground }}
      />
      <SettingOption
        icon={<PrivacyIcon />}
        text="Privacy Policy"
        onPress={() => navigation.navigate("PrivacyPolicy")}
      />
      <SettingOption
        icon={<FileListIcon />}
        text="Terms & Conditions"
        onPress={() => navigation.navigate("TermsConditions")}
      />
      <SettingOption
        icon={<TrashIcon />}
        text="Delete Account"
        onPress={() =>
          confirmAction(
            "Delete Account",
            "Are you sure you want to delete your account? This will permanently erase your account.",
            handleLogout
          )
        }
      />
      <View style={styles.buttonContainer}>
        <Button
          type="secondary"
          label="Log Out"
          onPress={() =>
            confirmAction(
              "Log Out",
              "You will be returned to the Log In screen",
              handleLogout
            )
          }
        />
      </View>
      <Text style={styles.versionText}>Version 1.0</Text>
      <ModalWrapper
        visible={isModalOpen}
        onRequestClose={() => dispatch(closeModal())}
      >
        <View style={styles.modalOverlay}>
          <AllocatedRequesCallback />
        </View>
      </ModalWrapper>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  option: { flexDirection: "row", alignItems: "center", paddingVertical: 16 },
  optionText: {
    flex: 1,
    marginLeft: 15,
    fontSize: 16,
    fontWeight: "700",
    lineHeight: 20,
    fontFamily: FONTS.calibri.bold,
    color: COLORS.primaryBlue,
  },
  buttonContainer: { marginTop: 20 },
  versionText: {
    fontSize: 12,
    fontWeight: "400",
    lineHeight: 16,
    fontFamily: FONTS.calibri.regular,
    color: COLORS.gray,
    textAlign: "center",
    marginTop: 14,
  },
  modalOverlay: {
    flex: 1,
    marginTop: 40,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
});

export default SettingHome;
