import React from "react";
import FiltersHeader from "../header/FiltersHeader";
import { StyleSheet, View } from "react-native";
import { COLORS } from "@/theme";
import { SubmitWorkSheet } from "@/utils/constant";
import UnitList from "../tabs/UnitList";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { StackParamList } from "@/navigator/stack/Stack.typeDefs";

type SubmitWorkSheetListProps = {
  setModalVisible: (visible: boolean) => void;
};

const SubmitWorkSheetList = ({ setModalVisible }: SubmitWorkSheetListProps) => {
  const navigation = useNavigation<NavigationProp<StackParamList>>();

  const handleModal = () => {
    navigation.navigate("WorkSheetStepFrom");
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <FiltersHeader
        title="Submit Worksheet"
        subtitle="Select Project"
        leftButton="Close"
        rightButton="Confirm"
        setModalVisible={setModalVisible}
        onRightButtonPress={handleModal}
      />

      <UnitList
        backgroundColor={COLORS.selectedCard}
        units={SubmitWorkSheet}
        borderColor={COLORS.disablebutton}
        textColor={COLORS.primaryBlue}
        selectedBorderColor={COLORS.primaryBlue}
        //   onUnitPress={(unit) => Alert.alert("Selected Unit", unit.name)}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    height: "auto",
    backgroundColor: COLORS.white,
  },
});

export default SubmitWorkSheetList;
