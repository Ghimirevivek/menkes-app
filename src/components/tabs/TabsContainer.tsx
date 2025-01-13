import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { COLORS, FONTS } from "@/theme";

interface Tab {
  id: string;
  label: string;
  icon: React.ReactNode | string | number;
}

interface TabsContainerProps {
  tabs: Tab[];
  viewMode: string;
  setViewMode: (mode: string) => void;
  renderComponents: { [key: string]: React.ReactNode };
}

const TabsContainer: React.FC<TabsContainerProps> = ({
  tabs,
  viewMode,
  setViewMode,
  renderComponents,
}) => (
  <>
    <View style={styles.tabContainer}>
      {tabs.map((tab) => (
        <TouchableOpacity
          key={tab.id}
          style={[styles.tab, viewMode === tab.id && styles.activeTab]}
          onPress={() => setViewMode(tab.id)}
        >
          <View style={styles.tabContent}>
            {tab.icon}
            <Text style={styles.tabText}>{tab.label}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
    <View style={styles.content}>{renderComponents[viewMode]}</View>
  </>
);

const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: "row",
    backgroundColor: COLORS.tabs,
    marginHorizontal: 16,
    borderRadius: 8,
    marginBottom: 12,
    padding: 6,
  },
  tab: {
    flex: 1,
    alignItems: "center",
    padding: 8,
  },
  activeTab: {
    backgroundColor: COLORS.white,
    borderRadius: 8,
  },
  tabContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },
  tabText: {
    fontSize: 16,
    fontFamily: FONTS.calibri.regular,
    color: COLORS.black,
  },
  content: {
    flex: 1,
  },
});

export default TabsContainer;
