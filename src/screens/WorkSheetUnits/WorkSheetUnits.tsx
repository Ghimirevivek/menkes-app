import React, { useState } from "react";
import { View, Modal, StyleSheet } from "react-native";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "@/redux/slices/modalSlice";
import { COLORS } from "@/theme";
import ListIcon from "@/assets/icons/ListIcon";
import UnitList from "@/components/tabs/UnitList";
import WorkSheetFilter from "../../components/Filters/WorkSheetFilter";
import UnitScreenLayout from "@/components/UnitScreen/UnitScreenLayout";
import { StackParamList } from "@/navigator/stack/Stack.typeDefs";
import ModalWrapper from "@/components/modal/ModalWrapper";
import WorkSheeTUnitList from "./WorkSheeTUnitList";
import AllocatedRequesCallback from "@/components/callBack/AllocatedRequesCallback";
import { Homeunits } from "@/utils/constant";
import FillProjectIcon from "@/assets/icons/FillProjectIcon";

const WorkSheetUnits = () => {
  const navigation = useNavigation<NavigationProp<StackParamList>>();
  const dispatch = useDispatch();
  const isModalOpen = useSelector((state: any) => state.modal.isOpen);

  const [viewMode, setViewMode] = useState("project");
  const [modalVisible, setModalVisible] = useState(false);

  const tabs = [
    {
      id: "project",
      label: "Project",
      icon: <FillProjectIcon color={"#000"} />,
    },
    { id: "list", label: "List", icon: <ListIcon /> },
  ];

  const renderComponents = {
    project: (
      <UnitList
        units={Homeunits}
        onUnitPress={() => navigation.navigate("WorkSheetDetailsList")}
      />
    ),
    list: <WorkSheeTUnitList />,
  };

  return (
    <View style={styles.container}>
      <UnitScreenLayout
        onFilterPress={() => setModalVisible(true)}
        tabs={tabs}
        viewMode={viewMode}
        setViewMode={setViewMode}
        renderComponents={renderComponents}
      />

      <ModalWrapper
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <WorkSheetFilter setModalVisible={(value) => setModalVisible(value)} />
      </ModalWrapper>

      <ModalWrapper
        visible={isModalOpen}
        onRequestClose={() => dispatch(closeModal())}
      >
        <AllocatedRequesCallback />
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

export default WorkSheetUnits;
