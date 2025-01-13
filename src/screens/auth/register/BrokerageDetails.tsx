import React from "react";
import { Text, StyleSheet, View } from "react-native";
import { FONTS } from "@/theme";
import Entypo from "@expo/vector-icons/Entypo";
import AnimatedTextInput from "@/components/input/InputText";
import PasswordCloseIcon from "@/assets/icons/PasswordCloseIcon";

type BrokerageDetailsProps = {
  formState: {
    recoNumber: string;
    brokerageName: string;
    officePhone: string;
    brokerageAddress: string;
    country: string;
    province: string;
    city: string;
    postalCode: string;
  };
  updateFormState: (
    field: keyof BrokerageDetailsProps["formState"],
    value: string
  ) => void;
};

const BrokerageDetails: React.FC<BrokerageDetailsProps> = ({
  formState,
  updateFormState,
}) => {
  return (
    <View>
      <Text style={styles.sectionTitle}>Brokerage Details</Text>

      <AnimatedTextInput
        label={"Reco #"}
        value={formState.recoNumber}
        onChangeText={(value: string) => updateFormState("recoNumber", value)}
      />

      <AnimatedTextInput
        label={"Brokerage Name"}
        value={formState.brokerageName}
        onChangeText={(value: string) => {
          const alphabeticText = value.replace(/[^a-zA-Z\s]/g, ""); // Allow only letters and spaces
          updateFormState("brokerageName", alphabeticText);
        }}
      />

      <AnimatedTextInput
        label={"Office Phone"}
        value={formState.officePhone}
        onChangeText={(text: string) => {
          const numericText = text.replace(/[^0-9]/g, "");
          updateFormState("officePhone", numericText);
        }}
        keyboardType="numeric"
      />

      {formState.officePhone.length !== 10 && (
        <View
          style={{
            marginBottom: 14,
            marginLeft: 8,
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <PasswordCloseIcon />
            <Text
              style={[
                styles.errorText,
                { marginLeft: formState.officePhone.length ? 12 : 8 },
              ]}
            >
              Enter a valid Phone
            </Text>
          </View>
        </View>
      )}

      <AnimatedTextInput
        label={"Brokerage Address"}
        value={formState.brokerageAddress}
        onChangeText={(value: string) => {
          const alphabeticText = value.replace(/[^a-zA-Z\s]/g, ""); // Allow only letters and spaces
          updateFormState("brokerageAddress", alphabeticText);
        }}
      />

      <View style={styles.row}>
        <View style={styles.inputGroupHalf}>
          <AnimatedTextInput
            label={"Country"}
            value={formState.country}
            onChangeText={(value: string) => {
              const alphabeticText = value.replace(/[^a-zA-Z\s]/g, ""); // Allow only letters and spaces
              updateFormState("country", alphabeticText);
            }}
          />
        </View>

        <View style={styles.inputGroupHalf}>
          <AnimatedTextInput
            label={"Province"}
            value={formState.province}
            onChangeText={(value: string) => {
              const alphabeticText = value.replace(/[^a-zA-Z\s]/g, ""); // Allow only letters and spaces
              updateFormState("province", alphabeticText);
            }}
          />
        </View>
      </View>

      <View style={styles.row}>
        <View style={styles.inputGroupHalf}>
          <AnimatedTextInput
            label={"City"}
            value={formState.city}
            onChangeText={(value: string) => {
              const alphabeticText = value.replace(/[^a-zA-Z\s]/g, ""); // Allow only letters and spaces
              updateFormState("city", alphabeticText);
            }}
          />
        </View>

        <View style={styles.inputGroupHalf}>
          <AnimatedTextInput
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
      {formState.postalCode.length !== 6 && formState.postalCode.length > 0 && (
        <View
          style={{
            marginBottom: 14,
            marginLeft: 8,
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <PasswordCloseIcon />
            <Text
              style={[
                styles.errorText,
                { marginLeft: formState.officePhone.length ? 12 : 8 },
              ]}
            >
              Postal code must be 6 digits long
            </Text>
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  sectionTitle: {
    marginTop: 20,
    fontSize: 24,
    fontWeight: "700",
    lineHeight: 30,
    fontFamily: FONTS.calibri.bold,
    marginBottom: 16,
    color: "#333",
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
  errorText: {
    color: "black",
    fontSize: 12,
    fontWeight: 400,
    lineHeight: 16,
  },
});

export default BrokerageDetails;
