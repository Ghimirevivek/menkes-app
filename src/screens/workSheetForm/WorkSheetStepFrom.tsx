import ProgressBar from "@/components/progressbar/ProgressBar";
import { nextWorksheetStep } from "@/redux/slices/stepSlice";
import { COLORS } from "@/theme";
import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import WorkSheetTowerForm from "./WorkSheetTowerForm";
import WorkSheetPreferred from "./WorkSheetPreferred";
import WorkSheetPurchaserForm from "./WorkSheetPurchaserForm";
import WorkSheetAttaachementForm from "./WorkSheetAttaachementForm";
import WorkSheetAdditionalOptions from "./WorkSheetAdditionalOptions";
import WorkSheetNotes from "./WorkSheetNotes";
import WorkSheetFormDetails from "./WorkSheetFormDetails";

const WorkSheetStepFrom = () => {
  const dispatch = useDispatch();
  const worksheetSteps = useSelector((state: any) => state.step.worksheetSteps);

  const [totalSteps, setTotalSteps] = useState(8);
  const [selectedLocker, setSelectedLocker] = useState<boolean | null>(null);

  const handleContinue = () => {
    dispatch(nextWorksheetStep());
  };

  const handleLockerSelection = (locker: boolean) => {
    setSelectedLocker(locker);
    if (locker) {
      setTotalSteps(10);
    } else {
      setTotalSteps(8);
    }
  };

  return (
    <View style={styles.container}>
      <ProgressBar currentStep={worksheetSteps} totalSteps={totalSteps} />

      <ScrollView style={{ backgroundColor: COLORS.formBackground }}>
        {worksheetSteps === 1 && (
          <WorkSheetTowerForm handleContinue={handleContinue} />
        )}

        {worksheetSteps === 2 && (
          <WorkSheetPreferred handleContinue={handleContinue} />
        )}

        {worksheetSteps === 3 && (
          <WorkSheetPurchaserForm handleContinue={handleContinue} />
        )}

        {worksheetSteps === 4 && (
          <WorkSheetAttaachementForm handleContinue={handleContinue} />
        )}

        {worksheetSteps === 5 && (
          <WorkSheetAdditionalOptions
            selectedLocker={selectedLocker}
            setSelectedLocker={handleLockerSelection}
            handleContinue={handleContinue}
          />
        )}

        {selectedLocker && worksheetSteps === 6 && (
          <WorkSheetPurchaserForm handleContinue={handleContinue} />
        )}

        {selectedLocker && worksheetSteps === 7 && (
          <WorkSheetAttaachementForm handleContinue={handleContinue} />
        )}

        {selectedLocker && worksheetSteps === 8 && (
          <WorkSheetAdditionalOptions
            selectedLocker={selectedLocker}
            setSelectedLocker={handleLockerSelection}
            handleContinue={handleContinue}
          />
        )}

        {!selectedLocker && worksheetSteps === 6 && (
          <WorkSheetNotes handleContinue={handleContinue} />
        )}
        {worksheetSteps === 9 && selectedLocker && (
          <WorkSheetNotes handleContinue={handleContinue} />
        )}

        {worksheetSteps === 7 && !selectedLocker && <WorkSheetFormDetails />}
        {worksheetSteps === 10 && selectedLocker && <WorkSheetFormDetails />}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.formBackground,
  },
});

export default WorkSheetStepFrom;
