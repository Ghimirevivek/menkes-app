import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { COLORS } from "@/theme";
import CameraIcon from "@/assets/icons/CameraIcon";
import UserIcon from "@/assets/icons/UserIcon";
import Button from "@/components/Button/Button";

const ProfileUpload: React.FC<{
  handleNext: () => void;
  setImage: (uri: string) => void;
}> = ({ handleNext, setImage }) => {
  const [profileImage, setProfileImage] = useState<string | null>(null);

  const pickImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 1,
      });

      if (!result.canceled) {
        const uri = result.assets[0].uri;
        setProfileImage(uri);
        setImage(uri);
      }
    } catch (error) {
      Alert.alert("Error", "Failed to pick an image. Please try again.");
    }
  };
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.title}>Add Profile Image</Text>
          <Text style={styles.description}>
            This will make it easier for our team to verify your identity in
            person
          </Text>
        </View>
        <View style={styles.uploadImageContainer}>
          <View style={styles.imageContainer}>
            {profileImage ? (
              <Image
                source={{ uri: profileImage }}
                style={styles.profileImage}
              />
            ) : (
              <View style={styles.profileImagePlaceholder}>
                <Text style={styles.profileIcon}>
                  <UserIcon />
                </Text>
              </View>
            )}
            <TouchableOpacity style={styles.cameraButton} onPress={pickImage}>
              <CameraIcon />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={{ padding: 16, position: "relative", bottom: 0 }}>
        <Button
          type="primary"
          label="Continue"
          onPress={profileImage ? handleNext : undefined}
          disabled={!profileImage}
          buttonStyle={{
            backgroundColor: profileImage
              ? COLORS.primary
              : COLORS.disablebutton,
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.formBackground,
    paddingHorizontal: 8,
    paddingTop: 22,
    paddingBottom: 30,
  },
  content: {
    paddingHorizontal: 16,
    alignItems: "flex-start",
  },
  uploadImageContainer: {
    paddingTop: 100,
    paddingBottom: 180,
    height: "100%",
    paddingHorizontal: 16,
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 8,
    color: "#333",
  },
  description: {
    fontSize: 16,
    fontWeight: "400",
    color: "#666",
    marginBottom: 24,
  },

  imageContainer: {
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 24,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: COLORS.white,
    borderWidth: 2,
    borderColor: COLORS.iconbackground,
  },
  profileImagePlaceholder: {
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: COLORS.white,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: COLORS.inputBackground,
  },
  profileIcon: {
    fontSize: 60,
    color: COLORS.gray,
  },
  cameraButton: {
    position: "absolute",
    bottom: 10,
    right: -10,
    backgroundColor: COLORS.primary,
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ProfileUpload;
