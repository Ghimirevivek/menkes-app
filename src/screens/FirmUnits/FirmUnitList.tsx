import React from "react";
import { View, Text, StyleSheet, FlatList, ScrollView } from "react-native";
import { FirmUnitData } from "@/utils/constant";
import { COLORS } from "@/theme";
import FirmUnitCard from "@/components/tabs/FirmUnitCard";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { StackParamList } from "@/navigator/stack/Stack.typeDefs";

const FirmUnitList = () => {
  const navigation = useNavigation<NavigationProp<StackParamList>>();
  return (
    <View style={styles.container}>
      <View style={{ paddingHorizontal: 16 }}>
        <Text style={styles.header}>2 Firm Units</Text>
      </View>
      <ScrollView>
        <FlatList
          data={FirmUnitData}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <FirmUnitCard
              unit={item}
              onPress={() =>
                navigation.navigate("WorkSheetDetails", {
                  status: item?.status,
                })
              }
            />
          )}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.formBackground,
  },
  header: {
    fontSize: 18,
    fontWeight: "600",
    color: "#1f2937",
    marginBottom: 12,
  },
});

export default FirmUnitList;
