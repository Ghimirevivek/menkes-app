import { COLORS, FONTS } from "@/theme";
import { getStatusStyles } from "@/utils/utils";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const WorkList = ({ unit, onPress, item }: any) => {
  const { backgroundColor, textColor } = getStatusStyles({ item });
  return (
    <TouchableOpacity onPress={() => onPress(unit)}>
      <View style={styles.unitContainer}>
        <View>
          <View style={styles.unitInfo}>
            <Text style={styles.price}>{item.name}</Text>
          </View>

          <Text style={styles.details}>{item.details1}</Text>

          <Text style={styles.details}>{item.details2}</Text>
        </View>
        <View>
          <View style={[styles.statusButton, { backgroundColor }]}>
            <Text style={[styles.statusText, { color: textColor }]}>
              {item.status}
            </Text>
          </View>
          {item.status === "Draft" ? null : (
            <Text style={styles.codes}>{item.code}</Text>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
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
  unitContainer: {
    backgroundColor: COLORS.white,
    flexDirection: "row",
    alignItems: "center",
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
  statusButton: {
    paddingVertical: 4,
    height: 30,
    paddingHorizontal: 7,
    borderRadius: 100,
    alignItems: "center",
  },
  statusText: {
    fontSize: 14,
    fontWeight: "700",
    lineHeight: 24,
    fontFamily: FONTS.calibri.bold,
  },
  codes: {
    marginTop: 8,
    fontSize: 14,
    fontWeight: "400",
    lineHeight: 20,
    fontFamily: FONTS.calibri.bold,
    color: COLORS.primary,
    textDecorationLine: "underline",
  },
  worksheetButton: {
    marginTop: 8,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 4,
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
  statusButtonText: {
    fontSize: 16,
    fontWeight: "400",
    lineHeight: 24,
    color: COLORS.black,
    fontFamily: FONTS.calibri.regular,
    textAlign: "center",
  },
});
export default WorkList;
