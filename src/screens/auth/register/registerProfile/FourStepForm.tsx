import React, { useState } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import RegisterProfileForm from "./RegisterProfileForm";
import { COLORS } from "@/theme";
import ProfileUpload from "./ProfileUpload";
import ConfirmDetails from "./ConfirmDetails";
import TermsConditions from "./TermConditons";
import { AppDispatch, RootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";
import { nextStep, previousStep } from "@/redux/slices/stepSlice";
import ProgressBar from "@/components/progressbar/ProgressBar";

const FourStepForm = ({ navigation }: any) => {
  const dispatch: AppDispatch = useDispatch();
  const currentStep = useSelector((state: RootState) => state.step.currentStep);

  const handleNext = () => dispatch(nextStep());

  const [formData, setFormData] = useState({});
  const [profileImage, setProfileImage] = useState<string | null>(null);

  return (
    <View style={styles.container}>
      <ProgressBar currentStep={currentStep} totalSteps={4} />

      <ScrollView style={{ backgroundColor: COLORS.formBackground }}>
        {currentStep === 1 && (
          <RegisterProfileForm
            handleNext={handleNext}
            setFormData={setFormData}
          />
        )}
        {currentStep === 2 && (
          <ProfileUpload handleNext={handleNext} setImage={setProfileImage} />
        )}
        {currentStep === 3 && (
          <ConfirmDetails
            handleNext={handleNext}
            formData={formData}
            profileImage={profileImage}
          />
        )}
        {currentStep === 4 && (
          <TermsConditions
            handleNext={handleNext}
            formData={formData}
            profileImage={profileImage}
          />
        )}
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default FourStepForm;
