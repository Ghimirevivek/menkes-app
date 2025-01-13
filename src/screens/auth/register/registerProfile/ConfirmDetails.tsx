import CameraIcon from "@/assets/icons/CameraIcon";
import UserIcon from "@/assets/icons/UserIcon";
import Button from "@/components/Button/Button";
import { setStep } from "@/redux/slices/stepSlice";
import { COLORS, FONTS } from "@/theme";
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { useDispatch } from "react-redux";

type DetailItemProps = {
  label: string;
  detail: string | number | undefined; // Adjust this type based on the expected data
};

const Divider = () => (
  <View style={{ display: "flex", alignItems: "center", marginVertical: 20 }}>
    <View
      style={{
        padding: 0.3,
        backgroundColor: "lightgray",
        width: "100%",
        alignItems: "center",
      }}
    />
  </View>
);

const DetailItem = ({ label, detail }: DetailItemProps) => (
  <View style={styles.details}>
    <Text style={styles.label}>{label}</Text>
    <Text style={styles.detailText}>{detail}</Text>
  </View>
);

const ConfirmDetails = ({ formData, profileImage, handleNext }: any) => {
  const dispatch = useDispatch();

  const handleEditRegistration = () => {
    dispatch(setStep(1));
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>Confirm Your Details</Text>

      <View style={styles.profileSection}>
        {profileImage ? (
          <Image source={{ uri: profileImage }} style={styles.profileImage} />
        ) : (
          <UserIcon />
        )}
        <TouchableOpacity style={styles.cameraButton}>
          <CameraIcon />
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Account Details</Text>
          <TouchableOpacity onPress={handleEditRegistration}>
            <Text style={styles.editText}>Edit</Text>
          </TouchableOpacity>
        </View>
        <DetailItem label="Email" detail={formData?.email} />
        <Divider />
        <DetailItem label="Password" detail={formData?.password} />
      </View>

      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Profile Details</Text>
          <TouchableOpacity onPress={handleEditRegistration}>
            <Text style={styles.editText}>Edit</Text>
          </TouchableOpacity>
        </View>
        <DetailItem label="First Name" detail={formData?.firstName} />
        <Divider />
        <DetailItem label="Middle Name" detail={formData?.middleName} />
        <Divider />
        <DetailItem label="Last Name" detail={formData?.lastName} />
        <Divider />
        <DetailItem label="Phone Number" detail={formData?.phone} />
        <Divider />
        <DetailItem label="Birthday" detail={formData?.birthday} />
      </View>

      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Brokerage Details</Text>
          <TouchableOpacity onPress={handleEditRegistration}>
            <Text style={styles.editText}>Edit</Text>
          </TouchableOpacity>
        </View>
        <DetailItem label="Reco #" detail={formData?.recoNumber} />
        <Divider />
        <DetailItem label="Brokerage Name" detail={formData?.brokerageName} />
        <Divider />
        <DetailItem label="Office Phone #" detail={formData?.officePhone} />
        <Divider />
        <DetailItem label="Address" detail={formData?.address} />
        <Divider />
        <DetailItem label="Country" detail={formData?.country} />
        <Divider />
        <DetailItem label="Province" detail={formData?.province} />
        <Divider />
        <DetailItem label="City" detail={formData?.city} />
        <Divider />
        <DetailItem label="Postal Code" detail={formData?.postalCode} />
      </View>

      <View
        style={{
          width: "100%",
          margin: "auto",
          position: "relative",
          paddingBottom: 30,
          marginTop: 30,
        }}
      >
        <Button type="primary" label="Continue" onPress={handleNext} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.formBackground,
    paddingTop: 8,
    paddingHorizontal: 18,
  },
  heading: {
    fontSize: 24,
    fontWeight: 700,
    fontFamily: FONTS.calibri.bold,
    textAlign: "left",
    marginTop: 16,
    color: COLORS.primaryBlue,
  },
  profileSection: {
    alignItems: "center",
    marginVertical: 40,
  },
  profileImage: {
    width: 110,
    height: 110,
    borderRadius: 55,
    borderWidth: 2,
    borderColor: "#E5E7EB",
  },
  cameraButton: {
    position: "absolute",
    bottom: 10,
    right: "30%",
    backgroundColor: "#002366",
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  section: {
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    padding: 16,
    paddingBottom: 20,
    marginBottom: 16,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 35,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 700,
    fontFamily: FONTS.calibri.bold,
    color: COLORS.primaryBlue,
  },
  editText: {
    fontSize: 14,
    fontWeight: "700",
    lineHeight: 20,
    color: COLORS.primary,
    fontFamily: FONTS.calibri.bold,
    textDecorationLine: "none",
    borderBottomWidth: 2,
    borderBottomColor: COLORS.primary,
    paddingBottom: 0.5,
  },

  details: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  detailText: {
    fontSize: 16,
    color: COLORS.gray,
    fontFamily: FONTS.calibri.regular,
  },
  label: {
    fontSize: 16,
    color: COLORS.gray,
    fontFamily: FONTS.calibri.bold,
  },
});

export default ConfirmDetails;
