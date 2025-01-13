import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from "react-native";
import { COLORS, FONTS } from "@/theme";
import ProjectInformation from "./ProjectInformation";
import ProjectDocument from "./ProjectDocument";
import Button from "@/components/Button/Button";
import ProjectDetails from "../AllocatedUnits/ProjectDetails";
import ProjectsAllocatedUnits from "./ProjectsAllocatedUnits";
import ProjectHotlist from "./ProjectHotlist";
import ModalWrapper from "@/components/modal/ModalWrapper";
import { closeModal } from "@/redux/slices/modalSlice";
import AllocatedRequesCallback from "@/components/callBack/AllocatedRequesCallback";
import { useDispatch, useSelector } from "react-redux";
import { TABS } from "@/utils/constant";

const ProjectInformationTab = () => {
  const dispatch = useDispatch();
  const isModalOpen = useSelector((state: any) => state.modal.isOpen);
  const [activeTab, setActiveTab] = useState("info");

  const renderContent = () => {
    switch (activeTab) {
      case "info":
        return (
          <ScrollView style={styles.scene}>
            <ProjectInformation />
          </ScrollView>
        );
      case "docum":
        return (
          <View style={styles.scene}>
            <ProjectDocument />
          </View>
        );
      case "alloc":
        return (
          <View style={styles.scene}>
            <ProjectsAllocatedUnits />
          </View>
        );
      case "hotl":
        return (
          <View style={styles.scene}>
            <ProjectHotlist />
          </View>
        );
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Image
          source={require("../../assets/images/hotel1.png")} // Replace with actual image URI
          style={styles.headerImage}
        />
        <View style={styles.detailsContainer}>
          <View style={styles.detailsRow}>
            <View
              style={{
                borderWidth: 1,
                borderColor: COLORS.inputBackground,
                display: "flex",
                justifyContent: "center",
                borderRadius: 20,
                padding: 3,
                alignItems: "center",
              }}
            >
              <Image
                source={require("../../assets/images/Frame.png")} // Replace with logo URL
                style={styles.logo}
              />
            </View>
            <View style={{ marginLeft: 20 }}>
              <Text style={styles.title}>Bravo at Festival</Text>
              <Text style={styles.subtitle}>Residential • Vaughan, ON</Text>
            </View>
          </View>
        </View>

        <View style={styles.tabBar}>
          {TABS.map((tab) => (
            <TouchableOpacity
              key={tab.key}
              style={[
                styles.tabItem,
                activeTab === tab.key && styles.activeTab,
              ]}
              onPress={() => setActiveTab(tab.key)}
            >
              <Text
                style={[
                  styles.tabLabel,
                  activeTab === tab.key
                    ? { color: COLORS.primary }
                    : { color: COLORS.lightgray },
                ]}
              >
                {tab.title}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {renderContent()}
      </ScrollView>
      <View
        style={{
          position: "relative",
          bottom: 30,
          width: "90%",
          margin: "auto",
        }}
      >
        <Button type="primary" label="Submit WorkSheet" icon="plus" />
      </View>
      <ModalWrapper
        visible={isModalOpen}
        onRequestClose={() => dispatch(closeModal())}
      >
        <View style={styles.modalOverlay}>
          <AllocatedRequesCallback />
        </View>
      </ModalWrapper>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.formBackground },
  headerImage: { width: "100%", height: 250 },
  detailsContainer: {
    paddingHorizontal: 20,
    paddingVertical: 18,
    backgroundColor: COLORS.white,
  },
  detailsRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  logo: { width: 80, height: 80, borderRadius: 8 },
  title: {
    fontSize: 20,
    fontWeight: "700",
    color: COLORS.primaryBlue,
    fontFamily: FONTS.calibri.bold,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: "400",
    color: COLORS.gray,
    fontFamily: FONTS.calibri.regular,
  },
  tabBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: COLORS.white,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.inputBackground,
  },
  tabItem: {
    paddingBottom: 8,
    paddingHorizontal: 12,
  },
  activeTab: {
    borderBottomWidth: 3,
    borderBottomColor: COLORS.primary,
  },
  tabLabel: {
    fontSize: 16,
    fontWeight: "700",
  },
  scene: { flex: 1, paddingTop: 16 },
  modalOverlay: {
    flex: 1,
    marginTop: 40,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
});

export default ProjectInformationTab;
