import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import AnimatedTextInput from "@/components/input/InputText";
import ModalWrapper from "@/components/modal/ModalWrapper";
import SelectableOption from "@/components/cards/SelectableOption";
import Button from "@/components/Button/Button";
import PreferredSuiteType from "@/components/Filters/PreferredSuiteType";
import { COLORS, FONTS } from "@/theme";

interface WorkSheetPreferredProps {
  handleContinue: () => void;
}

const WorkSheetPreferred = ({ handleContinue }: WorkSheetPreferredProps) => {
  const [selectedOptions, setSelectedOptions] = useState<
    Partial<Record<SuiteType, string>>
  >({});
  const [modalVisible, setModalVisible] = useState(false);
  const [inputValues, setInputValues] = useState<InputValues>({
    "Preferred Suite Type 1": "",
    "Preferred Suite Type 2": "",
    "Preferred Suite Type 3": "",
  });
  const [currentSuiteType, setCurrentSuiteType] = useState("");

  const suiteTypes = [
    "Preferred Suite Type 1",
    "Preferred Suite Type 2",
    "Preferred Suite Type 3",
  ];
  const floorLevels = [
    "Lower Floor Level",
    "Mid Floor Level",
    "Higher Floor Level",
  ];

  type SuiteType = (typeof suiteTypes)[number];
  type InputValues = Record<SuiteType, string>;

  const handleOptionSelect = (suiteType: string, option: string) => {
    setSelectedOptions((prev) => ({ ...prev, [suiteType]: option }));
  };

  const handleCardSelect = (value: string) => {
    if (currentSuiteType) {
      setInputValues((prev) => ({ ...prev, [currentSuiteType]: value }));
      setModalVisible(false);
    }
  };

  return (
    <View style={styles.container}>
      {suiteTypes.map((suiteType) => (
        <View key={suiteType} style={styles.suiteContainer}>
          <Text style={styles.suiteTypeLabel}>{suiteType}</Text>
          <TouchableOpacity
            onPress={() => {
              setCurrentSuiteType(suiteType);
              setModalVisible(true);
            }}
          >
            <AnimatedTextInput
              label=""
              onChangeText={(text) =>
                setInputValues((prev) => ({ ...prev, [suiteType]: text }))
              }
              value={inputValues[suiteType]}
              onPress={() => setModalVisible(true)}
            />
          </TouchableOpacity>
          {floorLevels.map((level) => (
            <SelectableOption
              key={level}
              label={level}
              onPress={() => handleOptionSelect(suiteType, level)}
              selected={selectedOptions[suiteType] === level}
            />
          ))}
        </View>
      ))}
      <View style={{ marginBottom: 20 }}>
        <Button
          type="primary"
          label="Continue"
          disabled={Object.keys(selectedOptions).length !== suiteTypes.length}
          onPress={handleContinue}
        />
      </View>
      <ModalWrapper
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <PreferredSuiteType
          suiteTypes={suiteTypes}
          onSelectSuiteType={handleCardSelect}
          setModalVisible={setModalVisible}
        />
      </ModalWrapper>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#F7F9FC",
  },
  suiteContainer: {
    marginBottom: 24,
  },
  suiteTypeLabel: {
    fontSize: 20,
    fontWeight: "700",
    lineHeight: 24,
    fontFamily: FONTS.calibri.bold,
    color: COLORS.primaryBlue,
    marginBottom: 8,
  },
});

export default WorkSheetPreferred;
