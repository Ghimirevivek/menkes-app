import React, { useState } from "react";
import { View, StyleSheet, Image, Modal } from "react-native";
import { COLORS } from "@/theme";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "@/redux/slices/modalSlice";
import FirmUnitList from "./FirmUnitList";
import ListIcon from "@/assets/icons/ListIcon";
import UnitList from "@/components/tabs/UnitList";
import FirmFilter from "../../components/Filters/FirmFilter";
import UnitScreenLayout from "@/components/UnitScreen/UnitScreenLayout";
import { StackParamList } from "@/navigator/stack/Stack.typeDefs";
import ModalWrapper from "@/components/modal/ModalWrapper";
import AllocatedRequesCallback from "@/components/callBack/AllocatedRequesCallback";
import { Homeunits } from "@/utils/constant";
import FillProjectIcon from "@/assets/icons/FillProjectIcon";

const FirmUnits = () => {
  const navigation = useNavigation<NavigationProp<StackParamList>>();
  const dispatch = useDispatch();
  const isModalOpen = useSelector((state: any) => state.modal.isOpen);

  const handleCloseModal = () => {
    dispatch(closeModal());
  };
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
        onUnitPress={() => navigation.navigate("FirmUnitsDetail")}
      />
    ),
    list: <FirmUnitList />,
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
        <FirmFilter setModalVisible={(value) => setModalVisible(value)} />
      </ModalWrapper>

      <ModalWrapper visible={isModalOpen} onRequestClose={handleCloseModal}>
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
  modalOverlay: {
    marginTop: 40,
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
});

export default FirmUnits;
