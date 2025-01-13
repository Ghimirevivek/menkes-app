import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { COLORS, FONTS } from "@/theme";

const ConditionRow = ({ condition }: any) => {
  return (
    <View style={styles.row}>
      <AntDesign
        name={condition.status ? "checkcircle" : "closecircle"}
        color={condition.status ? COLORS.IndicatorBar : COLORS.error}
        size={20}
      />
      <Text style={styles.conditionText}>{condition.label}</Text>
    </View>
  );
};

const FirmUnitCard = ({ unit, onPress }: any) => {
  return (
    <View style={styles.card}>
      <TouchableOpacity onPress={() => onPress(unit)}>
        <View style={styles.headerRow}>
          <View>
            <Text style={styles.names}>{unit.names}</Text>
            <View style={styles.row}>
              <Text style={styles.price}>{unit.price}</Text>
              <Text style={styles.suite}>({unit.suite})</Text>
            </View>
            <Text style={styles.details}>{unit.details}</Text>
          </View>
          <TouchableOpacity>
            <Text style={styles.code}>{unit.code}</Text>
          </TouchableOpacity>
        </View>

        {/* Conditions Section */}
        <View>
          {unit.conditions.map((condition: any, index: any) => (
            <ConditionRow key={index} condition={condition} />
          ))}
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.white,
    padding: 16,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.disablebutton,
    shadowRadius: 4,
    elevation: 3,
  },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  names: {
    fontSize: 16,
    fontWeight: "700",
    lineHeight: 24,
    color: COLORS.primaryBlue,
    fontFamily: FONTS.calibri.bold,
    marginBottom: 8,
  },

  price: {
    fontSize: 14,
    fontWeight: "700",
    lineHeight: 20,
    color: COLORS.gray,
    fontFamily: FONTS.calibri.bold,
  },
  suite: {
    fontSize: 14,
    fontWeight: "400",
    lineHeight: 20,
    color: COLORS.gray,
    fontFamily: FONTS.calibri.regular,
    marginLeft: 4,
  },
  details: {
    fontSize: 14,
    fontWeight: "400",
    lineHeight: 20,
    color: COLORS.gray,
    fontFamily: FONTS.calibri.regular,
    marginBottom: 8,
  },
  code: {
    fontSize: 14,
    fontWeight: "400",
    color: COLORS.primary,
    fontFamily: FONTS.calibri.regular,
    lineHeight: 20,
    textDecorationLine: "underline",
    marginBottom: 8,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    marginBottom: 8,
  },

  conditionText: {
    fontSize: 14,
    fontWeight: "400",
    color: COLORS.primaryBlue,
    fontFamily: FONTS.calibri.regular,
    lineHeight: 20,
  },
});

export default FirmUnitCard;
