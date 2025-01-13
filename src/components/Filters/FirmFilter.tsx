import { COLORS, FONTS } from "@/theme";
import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import FiltersHeader from "@/components/header/FiltersHeader";
import Button from "../Button/Button";

type ProjectFilterProps = {
  setModalVisible: (visible: boolean) => void;
};

const FirmFilter = ({ setModalVisible }: ProjectFilterProps) => {
  return (
    <View style={styles.container}>
      <FiltersHeader
        title="Filter Firm Units"
        leftButton="Close"
        setModalVisible={setModalVisible}
      />
      <ScrollView>
        <View style={{ padding: 16 }}>
          <Text style={styles.sectionTitle}>Post Dated Cheques</Text>
        </View>
        <View style={styles.row}>
          {["InComplete", "Complete"].map((status) => (
            <TouchableOpacity key={status} style={styles.statusButton}>
              <Text style={styles.statusButtonText}>{status}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={{ paddingVertical: 14, paddingHorizontal: 16 }}>
          <Text style={styles.sectionTitle}>Mortgage Pre-Approval Letter</Text>
        </View>
        <View style={styles.row}>
          {["InComplete", "Complete"].map((status) => (
            <TouchableOpacity key={status} style={styles.statusButton}>
              <Text style={styles.statusButtonText}>{status}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
      <View style={{ padding: 16 }}>
        <Button type="primary" label="Apply" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "50%",
    backgroundColor: COLORS.formBackground,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 700,
    lineHeight: 24,
    color: COLORS.black,
    fontFamily: FONTS.calibri.bold,
  },
  row: {
    flexDirection: "row",
    marginBottom: 8,
    flexWrap: "wrap",
    gap: 8,
    paddingHorizontal: 10,
  },
  statusButton: {
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 100,
    borderColor: COLORS.disablebutton,
    borderWidth: 1,
    marginRight: 8,
    backgroundColor: COLORS.white,
  },

  statusButtonText: {
    fontSize: 16,
    fontWeight: 400,
    lineHeight: 24,
    color: COLORS.black,
    fontFamily: FONTS.calibri.regular,
  },
});

export default FirmFilter;
