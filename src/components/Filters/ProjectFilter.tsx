import { COLORS, FONTS } from "@/theme";
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import RangeSlider from "react-native-range-slider-expo/src/RangeSlider";
import AnimatedTextInput from "../input/InputText";
import FiltersHeader from "../header/FiltersHeader";
import FilterOptions from "./component/FilterOptions";
import Button from "../Button/Button";

type ProjectFilterProps = {
  setModalVisible: (visible: boolean) => void;
};

const ProjectFilter = ({ setModalVisible }: ProjectFilterProps) => {
  const [minValue, setMinValue] = useState(100000); // Minimum price
  const [maxValue, setMaxValue] = useState(500000);

  const handleMinInputChange = (value: string) => {
    const numericValue = parseInt(value, 10);
    if (!isNaN(numericValue) && numericValue < maxValue) {
      setMinValue(numericValue);
    }
  };

  const handleMaxInputChange = (value: string) => {
    const numericValue = parseInt(value, 10);
    if (!isNaN(numericValue) && numericValue > minValue) {
      setMaxValue(numericValue);
    }
  };

  const [selectedOptions, setSelectedOptions] = useState<
    Record<string, string>
  >({
    Bedrooms: "All",
    Bathrooms: "All",
    "Square Footage": "Any",
  });

  const handlePress = (filter: string, option: string) => {
    setSelectedOptions((prevState) => ({
      ...prevState,
      [filter]: option,
    }));
  };

  return (
    <View style={styles.container}>
      <FiltersHeader
        leftButton="Close"
        title="Filter Allocated Units"
        setModalVisible={setModalVisible}
      />

      <ScrollView>
        <View style={{ padding: 16 }}>
          <Text style={styles.sectionTitle}>Unit Status</Text>
        </View>

        <View style={styles.row}>
          {["Allocation", "Pending", "Conditional"].map((status) => (
            <TouchableOpacity key={status} style={styles.statusButton}>
              <Text style={styles.statusButtonText}>{status}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <View style={{ paddingTop: 14, paddingHorizontal: 16 }}>
          <Text style={styles.sectionTitle}>Price</Text>
        </View>

        <View style={{ paddingHorizontal: 18, paddingBottom: 14 }}>
          <RangeSlider
            min={100000}
            max={1000000}
            step={10000}
            initialFromValue={minValue}
            initialToValue={maxValue}
            fromValueOnChange={(fromValue) => setMinValue(fromValue)}
            toValueOnChange={(toValue) => setMaxValue(toValue)}
            inRangeBarColor={COLORS.primary}
            outOfRangeBarColor={COLORS.iconbackground}
            fromKnobColor={COLORS.white}
            toKnobColor={COLORS.white}
          />
        </View>

        <View style={styles.row}>
          <View style={styles.inputGroupHalf}>
            <AnimatedTextInput
              label="Minimum"
              value={`$${minValue}`}
              onChangeText={(value) => {
                const numericValue = parseInt(value.replace(/[^0-9]/g, ""), 10);
                handleMinInputChange(numericValue.toString());
              }}
              keyboardType="numeric"
            />
          </View>
          <View style={styles.inputGroupHalf}>
            <AnimatedTextInput
              label="Maximum"
              value={`$${maxValue}`}
              onChangeText={(value) => {
                const numericValue = parseInt(value.replace(/[^0-9]/g, ""), 10);
                handleMaxInputChange(numericValue.toString());
              }}
              keyboardType="numeric"
            />
          </View>
        </View>

        <View>
          {["Bedrooms", "Bathrooms", "Square Footage"].map((filter) => (
            <FilterOptions
              key={filter}
              filter={filter}
              options={
                filter === "Square Footage"
                  ? ["Any", "500 - 1000", "1001 - 1500", "1501 - 2000", "2001+"]
                  : ["All", "1+", "2+", "3+"]
              }
              selectedOption={selectedOptions[filter]}
              onSelect={(option) => handlePress(filter, option)}
            />
          ))}
        </View>
      </ScrollView>
      <View style={{ padding: 20, backgroundColor: COLORS.white }}>
        <Button type="primary" label="Apply" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  selectedButton: {
    backgroundColor: COLORS.allocted,
  },
  selectedButtonText: {
    color: COLORS.primary,
  },
  slider: {
    height: 10,
    width: "100%",
  },
  track: {
    backgroundColor: "white",
    height: 10,
    borderRadius: 5,
  },
  selectedTrack: {
    backgroundColor: COLORS.primary,
    height: 10,
    borderRadius: 5,
  },
  handle: {
    backgroundColor: "white",
    borderColor: COLORS.primary,
    borderWidth: 2,
    width: 20,
    height: 20,
    borderRadius: 10,
  },
  rangeLabels: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 8,
  },
  rangeLabel: {
    fontSize: 16,
    color: COLORS.black,
    fontFamily: FONTS.calibri.regular,
  },
  priceInputs: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 18,
    marginBottom: 14,
  },
  inputGroupHalf: {
    position: "relative",
    flex: 1,
    marginHorizontal: 5,
  },
});

export default ProjectFilter;
