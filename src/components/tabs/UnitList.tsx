import { COLORS, FONTS } from "@/theme";
import React, { useState } from "react";
import {
  FlatList,
  TouchableOpacity,
  View,
  Text,
  Image,
  StyleSheet,
} from "react-native";

interface Unit {
  id: string;
  name: string;
  type: string;
  location: string;
}

interface UnitListProps {
  units: Unit[];
  onUnitPress?: (unit: Unit) => void;
  borderColor?: string;
  textColor?: string;
  selectedBorderColor?: string;
  backgroundColor?: string;
}

const UnitList: React.FC<UnitListProps> = ({
  units,
  onUnitPress,
  borderColor = COLORS.white,
  textColor = COLORS.primary,
  selectedBorderColor = COLORS.white,
  backgroundColor = COLORS.white,
}) => {
  const [selectedUnitId, setSelectedUnitId] = useState<string | null>(null);

  const handleUnitPress = (unit: Unit) => {
    setSelectedUnitId(unit.id);
    onUnitPress?.(unit);
  };

  const renderUnit = ({ item }: { item: Unit }) => {
    const isSelected = item.id === selectedUnitId;
    return (
      <View style={{ paddingHorizontal: 16, paddingVertical: 8 }}>
        <TouchableOpacity onPress={() => handleUnitPress(item)}>
          <View
            style={[
              styles.unitCard,
              {
                backgroundColor: isSelected ? backgroundColor : COLORS.white,
                borderColor: isSelected ? selectedBorderColor : borderColor,
                borderWidth: isSelected ? 2 : 1,
              },
            ]}
          >
            <Image
              style={styles.unitImage}
              source={require("../../assets/images/bravoimage.png")}
            />
            <View style={styles.unitInfo}>
              <Text style={[styles.unitName, { color: textColor }]}>
                {item.name}
              </Text>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text style={[styles.unitDetails]}>{item.type}</Text>
                <View style={styles.dot} />
                <Text style={[styles.unitDetails]}>{item.location}</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  return <FlatList data={units} renderItem={renderUnit} />;
};

const styles = StyleSheet.create({
  unitCard: {
    backgroundColor: COLORS.white,
    borderRadius: 8,
    padding: 8,
    flexDirection: "row",
    alignItems: "center",
    elevation: 2,
    borderWidth: 1,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  unitImage: {
    width: 114,
    height: 88,
  },
  unitInfo: {
    marginLeft: 8,
  },
  unitName: {
    fontSize: 16,
    fontWeight: "700",
    fontFamily: FONTS.calibri.bold,
    color: COLORS.primary,
    marginBottom: 4,
  },
  unitDetails: {
    fontSize: 14,
    fontWeight: 400,
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
});

export default UnitList;
