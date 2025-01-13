import React, { useState } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import AccountDetails from "../AccountDetails";
import ProfileDetails from "../ProfileDetails";
import BrokerageDetails from "../BrokerageDetails";
import { COLORS } from "@/theme";
import Button from "@/components/Button/Button";

type FormState = {
  email: string;
  password: string;
  confirmPassword: string;
  firstName: string;
  middleName: string;
  lastName: string;
  phone: string;
  birthday: string;
  recoNumber: string;
  brokerageName: string;
  officePhone: string;
  brokerageAddress: string;
  country: string;
  province: string;
  city: string;
  postalCode: string;
};

type ValidityState = {
  emailValid: boolean;
  passwordValid: boolean;
  passwordsMatch: boolean;
};

type RegisterProfileFormProps = {
  handleNext: () => void;
  setFormData: (data: FormState) => void;
};

const RegisterProfileForm: React.FC<RegisterProfileFormProps> = ({
  handleNext,
  setFormData,
}) => {
  const [formState, setFormState] = useState<FormState>({
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    middleName: "",
    lastName: "",
    phone: "",
    birthday: "",
    recoNumber: "",
    brokerageName: "",
    officePhone: "",
    brokerageAddress: "",
    country: "",
    province: "",
    city: "",
    postalCode: "",
  });

  const [validityState, setValidityState] = useState<ValidityState>({
    emailValid: true,
    passwordValid: false,
    passwordsMatch: false,
  });

  const updateFormState = (field: keyof FormState, value: string) => {
    setFormState((prev) => ({ ...prev, [field]: value }));
  };

  const updateValidityState = (
    field: keyof ValidityState,
    isValid: boolean
  ) => {
    setValidityState((prev) => ({ ...prev, [field]: isValid }));
  };

  const isFormComplete =
    Object.values(formState).every((value) => value.trim() !== "") &&
    Object.values(validityState).every((isValid) => isValid);

  const handleNextStep = () => {
    setFormData(formState);
    handleNext();
  };

  return (
    <ScrollView style={styles.container}>
      <AccountDetails
        formState={formState}
        updateFormState={updateFormState}
        validityState={validityState}
        updateValidityState={updateValidityState}
      />
      <ProfileDetails formState={formState} updateFormState={updateFormState} />
      <BrokerageDetails
        formState={formState}
        updateFormState={updateFormState}
      />

      <View
        style={{
          width: "100%",
          margin: "auto",
          position: "relative",
          paddingBottom: 20,
        }}
      >
        <Button
          type="primary"
          label="Continue"
          onPress={handleNextStep}
          disabled={isFormComplete}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.formBackground,
    padding: 16,
  },
});

export default RegisterProfileForm;
