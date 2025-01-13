import React from "react";
import { StyleSheet, View } from "react-native";
import FiltersHeader from "@/components/header/FiltersHeader";
import SelectableOption from "@/components/cards/SelectableOption";
import { COLORS, FONTS } from "@/theme";

type PreferredSuiteTypeProps = {
  suiteTypes: string[];
  onSelectSuiteType: (suiteType: string) => void;
  setModalVisible: (visible: boolean) => void;
};

const PreferredSuiteType = ({
  suiteTypes,
  onSelectSuiteType,
  setModalVisible,
}: PreferredSuiteTypeProps) => {
  return (
    <View style={styles.container}>
      <FiltersHeader
        rightButton=""
        title="Preferred Suite Type"
        leftButton="Close"
        setModalVisible={setModalVisible}
      />
      <View style={{ padding: 18, marginBottom: 20 }}>
        {suiteTypes.map((suiteType) => (
          <SelectableOption
            key={suiteType}
            label={suiteType}
            onPress={() => onSelectSuiteType(suiteType)}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "auto",
    backgroundColor: COLORS.formBackground,
  },
});

export default PreferredSuiteType;
