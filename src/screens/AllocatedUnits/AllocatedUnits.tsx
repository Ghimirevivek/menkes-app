import React, { useState } from "react";
import { View, Modal, StyleSheet } from "react-native";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "@/redux/slices/modalSlice";
import ProjectList from "./ProjectList";
import { COLORS } from "@/theme";
import ProjectIcon from "@/assets/icons/ProjectIcon";
import ListIcon from "@/assets/icons/ListIcon";
import UnitList from "@/components/tabs/UnitList";
import ProjectFilter from "../../components/Filters/ProjectFilter";
import UnitScreenLayout from "@/components/UnitScreen/UnitScreenLayout";
import { StackParamList } from "@/navigator/stack/Stack.typeDefs";
import ModalWrapper from "@/components/modal/ModalWrapper";
import AllocatedRequesCallback from "@/components/callBack/AllocatedRequesCallback";
import { Homeunits } from "@/utils/constant";
import FillProjectIcon from "@/assets/icons/FillProjectIcon";

const AllocatedUnits = () => {
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
        onUnitPress={() => navigation.navigate("ProjectDetails")}
      />
    ),
    list: <ProjectList />,
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
        <ProjectFilter setModalVisible={setModalVisible} />
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
  modalOverlay: {
    flex: 1,
    marginTop: 40,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
});

export default AllocatedUnits;
