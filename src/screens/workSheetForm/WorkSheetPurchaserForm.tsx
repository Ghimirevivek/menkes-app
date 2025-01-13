import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { COLORS, FONTS } from "@/theme";
import Button from "@/components/Button/Button";
import AnimatedTextInput from "@/components/input/InputText";

interface WorkSheetPurchaserFormProps {
  handleContinue: () => void;
}

const WorkSheetPurchaserForm = ({
  handleContinue,
}: WorkSheetPurchaserFormProps) => {
  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    dateOfBirth: "",
    email: "",
    phone: "",
    sin: "",
    occupation: "",
    companyName: "",
    address: "",
    country: "",
    province: "",
    city: "",
    postalCode: "",
  });

  const handleInputChange = (field: keyof typeof formData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const isFormValid = () => {
    const requiredFields = [
      "firstName",
      "lastName",
      "dateOfBirth",
      "email",
      "phone",
      "occupation",
      "companyName",
      "address",
      "country",
      "province",
      "city",
      "postalCode",
    ];

    return requiredFields.every(
      (field) => formData[field as keyof typeof formData].trim() !== ""
    );
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Purchaser Personal Info</Text>
        <AnimatedTextInput
          label="First Name *"
          value={formData.firstName}
          onChangeText={(value: string) =>
            handleInputChange("firstName", value)
          }
        />
        <AnimatedTextInput
          label="Middle Name (optional)"
          value={formData.middleName}
          onChangeText={(value: string) =>
            handleInputChange("middleName", value)
          }
        />
        <AnimatedTextInput
          label="Last Name *"
          value={formData.lastName}
          onChangeText={(value: string) => handleInputChange("lastName", value)}
        />
        <AnimatedTextInput
          label="Date of Birth *"
          value={formData.dateOfBirth}
          onChangeText={(value: string) =>
            handleInputChange("dateOfBirth", value)
          }
        />
        <AnimatedTextInput
          label="Email Address *"
          value={formData.email}
          onChangeText={(value: string) => handleInputChange("email", value)}
          keyboardType="email-address"
        />
        <AnimatedTextInput
          label="Phone Number *"
          value={formData.phone}
          onChangeText={(value: string) => handleInputChange("phone", value)}
          keyboardType="phone-pad"
        />
      </View>
      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { marginBottom: 30 }]}>
          Purchaser Occupation Info
        </Text>
        <AnimatedTextInput
          label="SIN"
          value={formData.sin}
          onChangeText={(value: string) => handleInputChange("sin", value)}
          keyboardType="numeric"
        />
        <AnimatedTextInput
          label="Occupation *"
          value={formData.occupation}
          onChangeText={(value: string) =>
            handleInputChange("occupation", value)
          }
        />
        <AnimatedTextInput
          label="Name of Company *"
          value={formData.companyName}
          onChangeText={(value: string) =>
            handleInputChange("companyName", value)
          }
        />
      </View>

      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { marginBottom: 30 }]}>
          Purchaser Address
        </Text>
        <AnimatedTextInput
          label="Address *"
          value={formData.address}
          onChangeText={(value: string) => handleInputChange("address", value)}
        />
        <View style={styles.row}>
          <View style={styles.inputWrapper}>
            <AnimatedTextInput
              label="Country"
              value={formData.country}
              onChangeText={(value: string) =>
                handleInputChange("country", value)
              }
            />
          </View>
          <View style={styles.inputWrapper}>
            <AnimatedTextInput
              label="Province"
              value={formData.province}
              onChangeText={(value: string) =>
                handleInputChange("province", value)
              }
            />
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.inputWrapper}>
            <AnimatedTextInput
              label="City"
              value={formData.city}
              onChangeText={(value: string) => handleInputChange("city", value)}
            />
          </View>
          <View style={styles.inputWrapper}>
            <AnimatedTextInput
              label="Postal Code"
              value={formData.postalCode}
              onChangeText={(value: string) =>
                handleInputChange("postalCode", value)
              }
            />
          </View>
        </View>
      </View>

      <View style={{ marginBottom: 30 }}>
        <Button
          type="primary"
          label="Continue"
          onPress={handleContinue}
          disabled={isFormValid()}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.formBackground,
    paddingHorizontal: 16,
    paddingVertical: 20,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "700",
    lineHeight: 24,
    fontFamily: FONTS.calibri.bold,
    color: COLORS.primaryBlue,
    marginBottom: 8,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 14,
  },
  inputWrapper: {
    flex: 1,
    marginHorizontal: 4,
  },
});

export default WorkSheetPurchaserForm;
