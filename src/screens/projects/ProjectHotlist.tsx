import FilterIcon from "@/assets/icons/FilterIcon";
import LeftRightIcon from "@/assets/icons/LeftRightIcon";
import { COLORS, FONTS } from "@/theme";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const ProjectHotlist = () => {
  const repeatCount = 3; // Number of times to repeat the block
  const units = Array.from({ length: repeatCount });
  return (
    <View style={styles.container}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingHorizontal: 16,
          marginBottom: 8,
        }}
      >
        <Text style={styles.title}>Location</Text>
        <TouchableOpacity style={styles.addButton}>
          <FilterIcon />
        </TouchableOpacity>
      </View>

      {units.map((_, index) => (
        <View key={index} style={styles.unitContainer}>
          <View>
            <View style={styles.unitInfo}>
              <Text style={styles.price}>$550,000</Text>
              <Text style={styles.suite}>Suite 23</Text>
            </View>
            <View style={styles.detailsRow}>
              <Text style={styles.details}>2 Bed</Text>
              <View style={styles.dot} />
              <Text style={styles.details}>2 Bath</Text>
              <View style={styles.dot} />
              <Text style={styles.details}>1,500 sqft</Text>
            </View>
            <View style={styles.detailsRow}>
              <Text style={styles.details}>Exposure</Text>
              <View style={styles.dot} />
              <Text style={styles.details}>Unit Type</Text>
            </View>
          </View>
          <View>
            <TouchableOpacity style={styles.worksheetButton}>
              <Text style={styles.worksheetButtonText}>+ Worksheet</Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.formBackground,
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    lineHeight: 28,
    fontFamily: FONTS.calibri.bold,
    color: COLORS.primaryBlue,
    marginBottom: 20,
  },
  addButton: {
    backgroundColor: COLORS.white,
    borderWidth: 1,
    borderColor: COLORS.inputBackground,
    borderRadius: 8,
    marginLeft: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  unitContainer: {
    backgroundColor: COLORS.white,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 16,
    borderBottomColor: COLORS.disablebutton,
    borderBottomWidth: 1,
  },
  unitInfo: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 4,
  },
  price: {
    fontSize: 16,
    fontWeight: "700",
    lineHeight: 24,
    fontFamily: FONTS.calibri.bold,
    color: COLORS.black,
  },
  suite: {
    fontSize: 16,
    fontWeight: "400",
    lineHeight: 24,
    fontFamily: FONTS.calibri.regular,
    color: COLORS.gray,
    marginLeft: 6,
  },
  detailsRow: {
    flexDirection: "row",
    alignItems: "center",
    width: 150,
    marginVertical: 4,
  },
  details: {
    fontSize: 14,
    fontWeight: "400",
    lineHeight: 20,
    fontFamily: FONTS.calibri.regular,
    color: COLORS.gray,
  },
  dot: {
    height: 2,
    width: 2,
    borderRadius: 50,
    padding: 3,
    backgroundColor: COLORS.gray,
    marginHorizontal: 5,
  },

  worksheetButton: {
    marginTop: 8,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
    backgroundColor: COLORS.white,
    borderWidth: 1,
    borderColor: COLORS.disablebutton,
    alignItems: "center",
  },
  worksheetButtonText: {
    fontSize: 14,
    fontWeight: "700",
    lineHeight: 20,
    color: COLORS.primaryBlue,
    fontFamily: FONTS.calibri.bold,
  },
});

export default ProjectHotlist;
