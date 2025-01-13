import Button from "@/components/Button/Button";
import AnimatedTextInput from "@/components/input/InputText";
import { COLORS, FONTS } from "@/theme";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

interface WorkSheetNotesProps {
  handleContinue: () => void;
}

const WorkSheetNotes = ({ handleContinue }: WorkSheetNotesProps) => {
  const [notes, setNotes] = useState("");

  return (
    <View style={styles.container}>
      <View>
        <View style={styles.section}>
          <Text style={styles.title}>Notes (optional)</Text>
        </View>

        <AnimatedTextInput
          label=""
          value={notes}
          onChangeText={(value: string) => setNotes(value)}
        />
      </View>

      <Button type="primary" label="Continue" onPress={handleContinue} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    height: 700,
    backgroundColor: COLORS.formBackground,
    justifyContent: "space-between",
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
    marginVertical: 16,
  },
});

export default WorkSheetNotes;
