import DetailsSection, { Header } from "@/components/tabs/DetailsSection";
import TabsContainer from "@/components/tabs/TabsContainer";
import { closeModal } from "@/redux/slices/modalSlice";
import { COLORS, FONTS } from "@/theme";
import {
  addressDetails,
  buildingDetails,
  occupationDetails,
  suiteTypes,
} from "@/utils/constant";
import React, { useState } from "react";
import { StyleSheet, View, Text, ScrollView, Modal } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import Button from "@/components/Button/Button";
import ModalWrapper from "@/components/modal/ModalWrapper";
import AllocatedRequesCallback from "@/components/callBack/AllocatedRequesCallback";

const WorkSheetFormDetails = () => {
  const [viewMode, setViewMode] = useState("products1");

  const dispatch = useDispatch();
  const isModalOpen = useSelector((state: any) => state.modal.isOpen);

  const handleCloseModal = () => {
    dispatch(closeModal());
  };

  const tabs = [
    { id: "products1", label: "Products", icon: 1 },
    { id: "products2", label: "Products", icon: 2 },
  ];
  const renderComponents = {
    project: null,
    list: null,
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <DetailsSection title="Building Details" details={buildingDetails} />
        <DetailsSection title="Preferred Suite Types" details={suiteTypes} />

        <TabsContainer
          tabs={tabs}
          viewMode={viewMode}
          setViewMode={setViewMode}
          renderComponents={renderComponents}
        />
        <DetailsSection
          title="Purchaser Occupation Details"
          details={occupationDetails}
        />
        <DetailsSection title="Purchaser Address" details={addressDetails} />

        <View style={{ padding: 16 }}>
          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>
                Proof of Canadian Residency
              </Text>
            </View>
          </View>
        </View>

        <View style={{ padding: 16 }}>
          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>Primary ID with Address</Text>
            </View>
          </View>
        </View>

        <View style={{ padding: 16 }}>
          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>Primary ID with Address</Text>
            </View>
            <View>
              <Text style={styles.label}>Notes</Text>

              <Text style={[styles.detailText, { paddingTop: 8 }]}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>

      <View style={{ paddingHorizontal: 16, paddingBottom: 30 }}>
        <Button type="primary" label="Submit Worksheet Changes" />
      </View>

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
  section: {
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    padding: 16,
    paddingBottom: 20,
    marginBottom: 16,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 700,
    fontFamily: FONTS.calibri.bold,
    textAlign: "left",
    marginTop: 12,
    marginBottom: 20,
    color: COLORS.primaryBlue,
  },
  detailText: {
    fontSize: 16,
    color: COLORS.gray,
    fontFamily: FONTS.calibri.regular,
    lineHeight: 20,
    fontWeight: "400",
  },
  label: {
    fontSize: 16,
    color: COLORS.gray,
    fontFamily: FONTS.calibri.bold,
    lineHeight: 20,
    fontWeight: "700",
  },
});

export default WorkSheetFormDetails;
