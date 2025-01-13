import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Button from "@/components/Button/Button";
import SelectableOption from "@/components/cards/SelectableOption";
import { COLORS, FONTS } from "@/theme";

interface WorkSheetAdditionalOptionsProps {
  handleContinue: () => void;
  setSelectedLocker: (locker: boolean) => void; // Updated to accept a boolean
  selectedLocker: boolean | null;
}

const WorkSheetAdditionalOptions = ({
  handleContinue,
  setSelectedLocker,
  selectedLocker,
}: WorkSheetAdditionalOptionsProps) => {
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.section}>
          <Text style={styles.title}>Are there additional purchasers?</Text>
        </View>

        <View style={styles.optionsContainer}>
          <SelectableOption
            key="Yes"
            label="Yes"
            onPress={() => setSelectedLocker(true)} // Set state to true for "Yes"
            selected={selectedLocker === true}
          />

          <SelectableOption
            key="No"
            label="No"
            onPress={() => setSelectedLocker(false)} // Set state to false for "No"
            selected={selectedLocker === false}
          />
        </View>
      </View>

      <Button
        type="primary"
        label="Continue"
        onPress={handleContinue}
        disabled={selectedLocker === null}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: COLORS.formBackground,
    justifyContent: "space-between",
    height: 700,
  },
  section: {
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    lineHeight: 24,
    fontFamily: FONTS.calibri.bold,
    color: COLORS.primaryBlue,
    marginBottom: 8,
  },
  optionsContainer: {
    marginBottom: 16,
  },
});

export default WorkSheetAdditionalOptions;
