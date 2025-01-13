import UnitItem from "@/components/tabs/UnitItems";
import { COLORS, FONTS } from "@/theme";
import { units } from "@/utils/constant";
import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

const ProjectsAllocatedUnits = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>3 Allocated Units</Text>
      </View>
      <FlatList
        data={units}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <UnitItem item={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.formBackground,
  },
  header: {
    marginBottom: 10,
    paddingHorizontal: 20,
  },
  headerText: {
    fontSize: 16,
    fontWeight: 700,
    lineHeight: 24,
    fontFamily: FONTS.calibri.bold,
    color: COLORS.black,
  },
});

export default ProjectsAllocatedUnits;
