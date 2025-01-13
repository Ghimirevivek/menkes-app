import React from "react";
import { View, StyleSheet } from "react-native";
import { COLORS } from "@/theme";

interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  currentStep,
  totalSteps,
}) => {
  return (
    <View style={styles.progressBarContainer}>
      <View style={styles.progressBar}>
        {Array.from({ length: totalSteps }, (_, index) => (
          <View
            key={index}
            style={[
              styles.progressStepInactive,
              currentStep >= index + 1 && styles.progressStepActive,
            ]}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  progressBarContainer: {
    width: "100%",
    height: 25,
    backgroundColor: COLORS.primary,
    justifyContent: "center",
    alignItems: "center",
  },
  progressBar: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "90%",
  },
  progressStepActive: {
    flex: 1,
    height: 4,
    backgroundColor: COLORS.IndicatorBar,
    marginRight: 4,
    borderRadius: 20,
  },
  progressStepInactive: {
    flex: 1,
    height: 5,
    backgroundColor: "#FFFFFF",
    marginRight: 4,
    borderRadius: 20,
  },
});

export default ProgressBar;
