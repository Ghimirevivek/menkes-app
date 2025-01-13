import React from "react";
import { StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { AppDispatch, RootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";
import { previousStep, previousWorksheetStep } from "@/redux/slices/stepSlice";

const styles = StyleSheet.create({
  logo: {
    width: 32,
    height: 32,
  },
});

export function CloseIcon({ navigation }: any) {
  const dispatch: AppDispatch = useDispatch();

  const worksheetSteps = useSelector(
    (state: RootState) => state.step.worksheetSteps
  );

  const handleBack = () => {
    if (worksheetSteps > 1) {
      dispatch(previousWorksheetStep());
    } else {
      navigation.goBack();
    }
  };
  return (
    <Ionicons
      name="close"
      size={24}
      color="white"
      style={{ marginLeft: 10 }}
      onPress={handleBack}
    />
  );
}
