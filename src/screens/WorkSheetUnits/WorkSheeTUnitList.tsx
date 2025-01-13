import WorkSheetFilter from "@/components/Filters/WorkSheetFilter";
import AllocatedRequesCallback from "@/components/callBack/AllocatedRequesCallback";
import ModalWrapper from "@/components/modal/ModalWrapper";
import WorkList from "@/components/tabs/WorkList";
import { StackParamList } from "@/navigator/stack/Stack.typeDefs";
import { closeModal } from "@/redux/slices/modalSlice";
import { COLORS, FONTS } from "@/theme";
import { workSheet } from "@/utils/constant";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";

const WorkSheeTUnitList = () => {
  const navigation = useNavigation<NavigationProp<StackParamList>>();
  const [modalVisible, setModalVisible] = useState(false);

  const dispatch = useDispatch();
  const isModalOpen = useSelector((state: any) => state.modal.isOpen);

  const handleCloseModal = () => {
    dispatch(closeModal());
  };
  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <View>
          <Text style={styles.sectionTitle}>BRAVO</Text>
          <Text style={styles.desc}>
            Residential <View style={styles.dot} /> Toronto, ON
          </Text>
        </View>
        <View>
          <View style={styles.notification}>
            <Text style={styles.statusButtonText}>3</Text>
          </View>
        </View>
      </View>
      <ScrollView>
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
      </ScrollView>
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
    fontSize: 18,
    fontWeight: "600",
    color: "#1f2937",
    marginBottom: 12,
  },
  section: {
    padding: 16,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "700",
    lineHeight: 24,
    color: COLORS.primary,
    fontFamily: FONTS.calibri.bold,
  },
  desc: {
    fontSize: 14,
    fontWeight: "400",
    lineHeight: 20,
    color: COLORS.gray,
    fontFamily: FONTS.calibri.regular,
  },
  notification: {
    padding: 6,
    height: 40,
    width: 40,
    alignItems: "center",
    borderRadius: 100,
    borderColor: COLORS.disablebutton,
    borderWidth: 1,
    marginRight: 8,
    backgroundColor: COLORS.white,
  },
  dot: {
    height: 2,
    width: 2,
    borderRadius: 50,
    padding: 3,
    backgroundColor: COLORS.gray,
    marginHorizontal: 5,
  },
  statusButtonText: {
    fontSize: 16,
    fontWeight: "400",
    lineHeight: 24,
    color: COLORS.black,
    fontFamily: FONTS.calibri.regular,
    textAlign: "center",
  },
});
export default WorkSheeTUnitList;
