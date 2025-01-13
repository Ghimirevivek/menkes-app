import { COLORS, FONTS } from "@/theme";
import React, { useState } from "react";
import { Image, StyleSheet, Text, View, ScrollView } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import AnimatedTextInput from "@/components/input/InputText";
import Button from "@/components/Button/Button";

const Profile = () => {
  const [formState, setFormState] = useState({
    firstName: "First Name",
    middleName: "Middle Name",
    lastName: "Last Name",
    phone: "416-123-4567",
    email: "email@emailaddress.com",
    birthday: "November 11",
    recoNumber: "122131",
    brokerageName: "Brokerage Name",
    officePhone: "416-123-4567",
    brokerageAddress: "Brokerage Address",
    country: "Canada",
    province: "Alberta",
    city: "Calgary",
    postalCode: "T1X0L5",
  });

  const updateFormState = (key: string, value: string) => {
    setFormState((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.profileContainer}>
        <View style={styles.avatarContainer}>
          <Image
            source={require("../../assets/images/avatar.png")}
            style={styles.profileImage}
          />
        </View>
        <Text style={styles.userId}>Menkes ID 155400</Text>
      </View>

      <View style={styles.infoBanner}>
        <Ionicons name={"alert-circle"} size={24} color={COLORS.primary} />
        <View style={{ marginLeft: 8, maxWidth: "90%" }}>
          <Text style={styles.infoBannerText}>Update Profile Information</Text>
          <Text style={styles.infoBannerSubText}>
            If you’d like to update any information, feel free to{" "}
            <Text style={styles.linkText}>reach out to us</Text>, and we’ll be
            happy to assist!
          </Text>
        </View>
      </View>

      <View style={styles.formContainer}>
        <AnimatedTextInput
          borderless={true}
          editable={false}
          label="First Name"
          value={formState.firstName}
          onChangeText={(value) => updateFormState("firstName", value)}
        />
        <AnimatedTextInput
          borderless={true}
          editable={false}
          label="Middle Name (optional)"
          value={formState.middleName}
          onChangeText={(value) => updateFormState("middleName", value)}
        />
        <AnimatedTextInput
          borderless={true}
          editable={false}
          label="Last Name"
          value={formState.lastName}
          onChangeText={(value) => updateFormState("lastName", value)}
        />
        <AnimatedTextInput
          borderless={true}
          editable={false}
          label="Phone"
          value={formState.phone}
          onChangeText={(value) => updateFormState("phone", value)}
        />
        <AnimatedTextInput
          borderless={true}
          editable={false}
          label="Email Address"
          value={formState.email}
          onChangeText={(value) => updateFormState("email", value)}
        />
        <AnimatedTextInput
          borderless={true}
          editable={false}
          label="Birthday"
          value={formState.birthday}
          onChangeText={(value) => updateFormState("birthday", value)}
        />
      </View>

      <Text style={styles.sectionTitle}>Brokerage Details</Text>
      <View style={styles.formContainer}>
        <AnimatedTextInput
          borderless={true}
          editable={false}
          label="Reco #"
          value={formState.recoNumber}
          onChangeText={(value) => updateFormState("recoNumber", value)}
        />
        <AnimatedTextInput
          borderless={true}
          editable={false}
          label="Brokerage Name"
          value={formState.brokerageName}
          onChangeText={(value) => updateFormState("brokerageName", value)}
        />
        <AnimatedTextInput
          borderless={true}
          editable={false}
          label="Office Phone #"
          value={formState.officePhone}
          onChangeText={(value) => updateFormState("officePhone", value)}
        />
        <AnimatedTextInput
          borderless={true}
          editable={false}
          label="Brokerage Address"
          value={formState.brokerageAddress}
          onChangeText={(value) => updateFormState("brokerageAddress", value)}
        />
        <View style={styles.row}>
          <View style={styles.inputGroupHalf}>
            <AnimatedTextInput
              borderless={true}
              editable={false}
              label={"Country"}
              value={formState.country}
              onChangeText={(value: string) =>
                updateFormState("country", value)
              }
            />
          </View>

          <View style={styles.inputGroupHalf}>
            <AnimatedTextInput
              borderless={true}
              editable={false}
              label={"Province"}
              value={formState.province}
              onChangeText={(value: string) =>
                updateFormState("province", value)
              }
            />
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.inputGroupHalf}>
            <AnimatedTextInput
              borderless={true}
              editable={false}
              label={"City"}
              value={formState.city}
              onChangeText={(value: string) => updateFormState("city", value)}
            />
          </View>

          <View style={styles.inputGroupHalf}>
            <AnimatedTextInput
              borderless={true}
              editable={false}
              label={"Postal Code"}
              value={formState.postalCode}
              onChangeText={(text: string) => {
                const numericText = text.replace(/[^0-9]/g, "");
                updateFormState("postalCode", numericText);
              }}
              keyboardType="numeric"
            />
          </View>
        </View>
      </View>

      <Button
        type="primary"
        label="Update"
        onPress={() => {
          console.log("Updated form data:", formState);
        }}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.formBackground,
    paddingHorizontal: 20,
  },
  profileContainer: {
    alignItems: "center",
    marginTop: 20,
  },
  profileImage: {
    width: 55,
    height: 70,
    marginBottom: 10,
  },
  avatarContainer: {
    height: 130,
    width: 130,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.avatarBackgroundColor,
    borderRadius: 100,
    marginBottom: 12,
    borderWidth: 3,
    borderColor: COLORS.inputBackground,
  },
  userId: {
    fontSize: 18,
    fontWeight: 400,
    lineHeight: 26,
    fontFamily: FONTS.calibri.regular,
    color: COLORS.black,
  },
  infoBanner: {
    backgroundColor: COLORS.white,
    padding: 20,
    borderRadius: 10,
    marginVertical: 20,
    flexDirection: "row",
  },
  infoBannerText: {
    fontSize: 16,
    fontWeight: 700,
    lineHeight: 24,
    color: COLORS.primaryBlue,
    fontFamily: FONTS.calibri.bold,
    marginBottom: 5,
  },
  infoBannerSubText: {
    fontSize: 14,
    fontWeight: 400,
    lineHeight: 24,
    color: COLORS.gray,
    fontFamily: FONTS.calibri.regular,
  },
  linkText: {
    fontWeight: 700,
    color: COLORS.primary,
    fontFamily: FONTS.calibri.bold,
    textDecorationLine: "underline",
  },
  formContainer: {
    marginBottom: 20,
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: "700",
    lineHeight: 24,
    fontFamily: FONTS.calibri.bold,
    color: COLORS.primaryBlue,
    marginBottom: 16,
  },
  inputGroupHalf: {
    position: "relative",
    flex: 1,
    marginHorizontal: 5,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default Profile;
