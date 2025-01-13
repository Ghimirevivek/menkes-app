import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import SearchHeader from "@/components/searchandfilter/SearchHeader";
import TabsContainer from "@/components/tabs/TabsContainer";

import { COLORS } from "@/theme";
import Button from "../Button/Button";
import ModalWrapper from "../modal/ModalWrapper";
import ProjectFilter from "../Filters/ProjectFilter";
import SubmitWorkSheetList from "../Filters/SubmitWorkSheetList";

interface UnitScreenLayoutProps {
  onFilterPress: () => void;
  tabs: { id: string; label: string; icon: React.ReactNode }[];
  viewMode: string;
  setViewMode: (mode: string) => void;
  renderComponents: { [key: string]: React.ReactNode };
  onButtonPress?: () => void;
  buttonLabel?: string;
}

const UnitScreenLayout: React.FC<UnitScreenLayoutProps> = ({
  onFilterPress,
  tabs,
  viewMode,
  setViewMode,
  renderComponents,
  onButtonPress,
  buttonLabel = "Submit Worksheet",
}) => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.container}>
      <SearchHeader onFilterPress={onFilterPress} />

      <TabsContainer
        tabs={tabs}
        viewMode={viewMode}
        setViewMode={setViewMode}
        renderComponents={renderComponents}
      />

      <View style={styles.buttonContainer}>
        <Button
          type="primary"
          label={buttonLabel}
          icon="plus"
          onPress={() => setModalVisible(true)}
        />
      </View>

      <ModalWrapper
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <SubmitWorkSheetList setModalVisible={setModalVisible} />
      </ModalWrapper>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.formBackground,
  },
  buttonContainer: {
    padding: 16,
  },
});

export default UnitScreenLayout;
