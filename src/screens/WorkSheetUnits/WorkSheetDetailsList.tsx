import SearchHeader from "@/components/searchandfilter/SearchHeader";
import { closeModal } from "@/redux/slices/modalSlice";
import { COLORS, FONTS } from "@/theme";
import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import WorkList from "@/components/tabs/WorkList";
import WorkSheetFilter from "../../components/Filters/WorkSheetFilter";
import { workSheet } from "@/utils/constant";
import Button from "@/components/Button/Button";
import { StackParamList } from "@/navigator/stack/Stack.typeDefs";
import ModalWrapper from "@/components/modal/ModalWrapper";
import AllocatedRequesCallback from "@/components/callBack/AllocatedRequesCallback";

const WorkSheetDetailsList = () => {
  const navigation = useNavigation<NavigationProp<StackParamList>>();
  const [modalVisible, setModalVisible] = useState(false);

  const dispatch = useDispatch();
  const isModalOpen = useSelector((state: any) => state.modal.isOpen);

  const handleCloseModal = () => {
    dispatch(closeModal());
  };

  return (
    <View style={styles.container}>
      <SearchHeader onFilterPress={() => setModalVisible(true)} />

      <View style={{ paddingHorizontal: 16 }}>
        <Text style={styles.header}>3 WorkSheet</Text>
      </View>

      <FlatList
        data={workSheet}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <WorkList
            item={item}
            onPress={() =>
              navigation.navigate("WorkSheetDetails", {
                status: item?.status,
              })
            }
          />
        )}
      />

      <View
        style={{
          width: "90%",
          margin: "auto",
          position: "relative",
          bottom: 40,
          backgroundColor: COLORS.transparent,
        }}
      >
        <Button type="primary" label="Submit Worksheet" icon="plus" />
      </View>
      <ModalWrapper
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <WorkSheetFilter setModalVisible={(value) => setModalVisible(value)} />
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
  header: {
    fontSize: 16,
    fontWeight: "700",
    color: COLORS.primaryBlue,
    marginBottom: 12,
  },
  modalOverlay: {
    marginTop: 40,
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
});

export default WorkSheetDetailsList;
