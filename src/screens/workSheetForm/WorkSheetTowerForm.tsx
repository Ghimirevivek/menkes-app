import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { COLORS, FONTS } from "@/theme";
import SelectableOption from "@/components/cards/SelectableOption";
import Button from "@/components/Button/Button";

interface WorkSheetTowerFormProps {
  handleContinue: () => void;
}
const WorkSheetTowerForm = ({ handleContinue }: WorkSheetTowerFormProps) => {
  const [selectedTower, setSelectedTower] = useState<string | null>(null);
  const [selectedParking, setSelectedParking] = useState<string | null>(null);
  const [selectedLocker, setSelectedLocker] = useState<string | null>(null);

  const handleTowerSelect = (tower: string) => {
    setSelectedTower(tower);
    if (tower === "East" || tower === "South (Encore)") {
      setSelectedParking("Standard");
      setSelectedLocker("Waitlist");
    } else {
      setSelectedParking(null);
      setSelectedLocker(null);
    }
  };

  return (
    <View style={styles.container}>
      <View>
        <View style={{ padding: 4 }}>
          <Text style={styles.sectionTitle}>Select Tower</Text>
        </View>
        <View>
          {["East", "West", "South (Encore)"].map((tower) => (
            <SelectableOption
              key={tower}
              label={tower}
              onPress={() => handleTowerSelect(tower)}
              selected={selectedTower === tower}
            />
          ))}
        </View>

        <View style={{ flexDirection: "row", gap: 20, marginTop: 22 }}>
          <View style={{ paddingVertical: 16 }}>
            <Text style={styles.sectionTitle}>Unit Number</Text>
          </View>
          <View style={{ width: "60%" }}>
            {[""].map((unit) => (
              <SelectableOption
                key={unit}
                label={unit}
                onPress={() => setSelectedLocker(unit)}
                selected={selectedLocker === unit}
              />
            ))}
          </View>
        </View>

        <View style={{ paddingVertical: 16 }}>
          <Text style={styles.sectionTitle}>Parking (2 Bed or larger)*</Text>
        </View>
        <View style={styles.parkingOptionsContainer}>
          {["Standard", "None"].map((parking) => (
            <View key={parking} style={styles.parkingOptionItem}>
              <SelectableOption
                label={parking}
                onPress={() => setSelectedParking(parking)}
                selected={selectedParking === parking}
              />
            </View>
          ))}
        </View>

        <Text style={styles.sectionTitle}>Locker*</Text>
        <View style={styles.parkingOptionsContainer}>
          {["Waitlist", "None"].map((locker) => (
            <View key={locker} style={styles.parkingOptionItem}>
              <SelectableOption
                label={locker}
                onPress={() => setSelectedLocker(locker)}
                selected={selectedLocker === locker}
              />
            </View>
          ))}
        </View>
      </View>

      <View>
        <Button
          type="primary"
          disabled={!selectedTower || !selectedParking || !selectedLocker}
          onPress={handleContinue}
          label="Continue"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: COLORS.formBackground,
    justifyContent: "space-between",
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "700",
    lineHeight: 24,
    fontFamily: FONTS.calibri.bold,
    color: COLORS.primaryBlue,
    marginBottom: 8,
  },
  parkingOptionsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 15,
    justifyContent: "space-between",
    marginBottom: 16,
  },
  parkingOptionItem: {
    flex: 1,
    marginHorizontal: 8,
  },
});

export default WorkSheetTowerForm;
