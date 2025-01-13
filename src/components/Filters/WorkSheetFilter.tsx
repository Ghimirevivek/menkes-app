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
import { workSheetFilter } from "@/utils/constant";
import Button from "../Button/Button";

type WorkSheetFilterProps = {
  setModalVisible: (visible: boolean) => void;
};

const WorkSheetFilter = ({ setModalVisible }: WorkSheetFilterProps) => {
  return (
    <View style={styles.container}>
      <FiltersHeader
        title="Filter Worksheets"
        leftButton="Close"
        setModalVisible={setModalVisible}
      />
      <ScrollView>
        <View style={{ padding: 16 }}>
          <Text style={styles.sectionTitle}>Worksheet Status</Text>
        </View>
        <View style={styles.row}>
          {workSheetFilter.map((status) => (
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
    backgroundColor: COLORS.white,
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

export default WorkSheetFilter;
