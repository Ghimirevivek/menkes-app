import { COLORS, FONTS } from "@/theme";
import { getStatusStyles } from "@/utils/utils";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Feather from "@expo/vector-icons/Feather";

const UnitItem = ({ item }: any) => {
  const { backgroundColor, textColor } = getStatusStyles({ item });

  return (
    <TouchableOpacity>
      <View style={styles.unitContainer}>
        <View>
          <View style={styles.unitInfo}>
            <Text style={styles.price}>{item.price}</Text>
            <Text style={styles.suite}>{item.suite}</Text>
          </View>
          <View style={styles.detailsRow}>
            <Text style={styles.details}>{item.details1}</Text>
            <View style={styles.dot} />
            <Text style={styles.details}>{item.details2}</Text>
            <View style={styles.dot} />
            <Text style={styles.details}>{item.details3}</Text>
          </View>
          <View style={styles.detailsRow}>
            <Text style={styles.details}>{item.details5}</Text>
            <View style={styles.dot} />
            <Text style={styles.details}>{item.details4}</Text>
          </View>
        </View>
        <View>
          <View style={[styles.statusButton, { backgroundColor }]}>
            <Text style={[styles.statusText, { color: textColor }]}>
              {item.status}
            </Text>
          </View>
          {item.status === "Allocation" ? (
            <TouchableOpacity style={styles.worksheetButton}>
              <Feather name="plus" size={20} color={"#000"} />
              <Text style={styles.worksheetButtonText}>Worksheet</Text>
            </TouchableOpacity>
          ) : (
            <Text style={styles.codes}>{item.codes}</Text>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
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
    borderRadius: 8,
    backgroundColor: COLORS.white,
    borderWidth: 1,
    borderColor: COLORS.disablebutton,
    alignItems: "center",
    flexDirection: "row",
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

export default UnitItem;
