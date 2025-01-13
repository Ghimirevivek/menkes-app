import SearchHeader from "@/components/searchandfilter/SearchHeader";
import { closeModal } from "@/redux/slices/modalSlice";
import { FirmUnitData } from "@/utils/constant";
import { COLORS } from "@/theme";
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Modal,
  ScrollView,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import FirmUnitCard from "@/components/tabs/FirmUnitCard";
import FirmFilter from "../../components/Filters/FirmFilter";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import Button from "@/components/Button/Button";
import { StackParamList } from "@/navigator/stack/Stack.typeDefs";
import ModalWrapper from "@/components/modal/ModalWrapper";
import AllocatedRequesCallback from "@/components/callBack/AllocatedRequesCallback";

const FirmUnitsDetail = () => {
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
        <Text style={styles.header}>2 Firm Units</Text>
      </View>
      <ScrollView>
        <FlatList
          data={FirmUnitData}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <FirmUnitCard
              unit={item}
              onPress={() =>
                navigation.navigate("WorkSheetDetails", {
                  status: item?.status,
                })
              }
            />
          )}
        />
      </ScrollView>
      <View style={{ padding: 16 }}>
        <Button type="primary" label="Submit Worksheet" icon="plus" />
      </View>

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
  header: {
    fontSize: 16,
    fontWeight: 700,
    color: COLORS.primaryBlue,
    lineHeight: 24,
    marginBottom: 12,
  },
  modalOverlay: {
    marginTop: 40,
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: COLORS.black,
  },
});

export default FirmUnitsDetail;
