import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { COLORS, FONTS } from "@/theme";
import { AllocationUnits, units } from "@/utils/constant";
import UnitItem from "@/components/tabs/UnitItems";

const ProjectList = () => {
  return (
    <ScrollView>
      <View style={styles.section}>
        <View>
          <Text style={styles.sectionTitle}>BRAVO</Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={styles.desc}>Residential</Text>
            <View style={styles.dot} />
            <Text style={styles.desc}>Toronto, ON</Text>
          </View>
        </View>
        <View>
          <View style={styles.notification}>
            <Text style={styles.statusButtonText}>3</Text>
          </View>
        </View>
      </View>

      <FlatList
        data={units}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <UnitItem item={item} />}
      />

      <View style={styles.section}>
        <View>
          <Text style={styles.sectionTitle}>SUGAR WHARF</Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={styles.desc}>Residential</Text>
            <View style={styles.dot} />
            <Text style={styles.desc}>Toronto, ON</Text>
          </View>
        </View>
        <View>
          <View style={styles.notification}>
            <Text style={styles.statusButtonText}>4</Text>
          </View>
        </View>
      </View>

      <FlatList
        data={AllocationUnits}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <UnitItem item={item} />}
      />
    </ScrollView>
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
  dot: {
    height: 2,
    width: 2,
    borderRadius: 50,
    padding: 3,
    backgroundColor: COLORS.gray,
    marginHorizontal: 5,
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

export default ProjectList;
