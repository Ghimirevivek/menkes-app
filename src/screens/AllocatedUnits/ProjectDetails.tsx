import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { View, Text, StyleSheet, FlatList, Modal } from "react-native";
import { COLORS, FONTS } from "@/theme";
import { useNavigation } from "@react-navigation/native";
import ProjectFilter from "../../components/Filters/ProjectFilter";
import { units } from "@/utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "@/redux/slices/modalSlice";
import AllocatedRequesCallback from "../../components/callBack/AllocatedRequesCallback";
import SearchHeader from "@/components/searchandfilter/SearchHeader";
import UnitItem from "@/components/tabs/UnitItems";
import Button from "@/components/Button/Button";
import ModalWrapper from "@/components/modal/ModalWrapper";

const ProjectDetails: React.FC = () => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);

  const dispatch = useDispatch();
  const isModalOpen = useSelector((state: any) => state.modal.isOpen); // Access modal state

  const handleCloseModal = () => {
    dispatch(closeModal()); // Dispatch action to close the modal
  };

  return (
    <View style={styles.container}>
      <SearchHeader onFilterPress={() => setModalVisible(true)} />

      <View style={styles.header}>
        <Text style={styles.headerText}>3 Allocated Units</Text>
      </View>

      <View
        style={{
          paddingHorizontal: 0,
          justifyContent: "space-between",
          height: "75%",
        }}
      >
        <FlatList
          data={units}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <UnitItem item={item} />}
        />
        <View style={{ paddingHorizontal: 16 }}>
          <Button type="primary" label="Submit Worksheet" icon="plus" />
        </View>
      </View>

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
  header: {
    marginBottom: 10,
    paddingHorizontal: 20,
  },
  headerText: {
    fontSize: 16,
    fontWeight: 700,
    lineHeight: 24,
    fontFamily: FONTS.calibri.bold,
    color: COLORS.black,
  },
});

export default ProjectDetails;
