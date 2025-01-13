import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import { closeModal } from "@/redux/slices/modalSlice";
import { COLORS, FONTS } from "@/theme";
import { SearchTabs } from "@/utils/constant";

const SearchModal = () => {
  const dispatch = useDispatch();
  const [searchText, setSearchText] = useState("");

  const handleCloseModal = () => {
    dispatch(closeModal());
  };

  const handleClearSearch = () => {
    setSearchText("");
  };
  const [activeTab, setActiveTab] = useState("projects");

  const renderContent = () => {
    switch (activeTab) {
      case "projects":
        return (
          <ScrollView>
            <Text>cdnck</Text>
          </ScrollView>
        );
      case "purchasers":
        return (
          <ScrollView>
            <Text>cdnck</Text>
          </ScrollView>
        );
      case "worksheets":
        return (
          <ScrollView>
            <Text>cdnck</Text>
          </ScrollView>
        );
      case "suites":
        return (
          <ScrollView>
            <Text>cdnck</Text>
          </ScrollView>
        );
      default:
        return null;
    }
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      {/* Header */}
      <View style={[styles.header, { paddingBottom: searchText ? 0 : 10 }]}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Ionicons
            name="arrow-back"
            size={24}
            color="black"
            style={styles.backIcon}
            onPress={handleCloseModal}
          />
          {/* Search Input with Icon */}
          <View style={styles.searchContainer}>
            <Ionicons
              name="search-outline"
              size={20}
              color={COLORS.gray}
              style={styles.searchIcon}
            />

            <TextInput
              style={styles.searchInput}
              placeholder="Search"
              placeholderTextColor={COLORS.primaryBlue}
              value={searchText}
              onChangeText={setSearchText}
            />
            {searchText ? (
              <TouchableOpacity onPress={handleClearSearch}>
                <Ionicons
                  name="close"
                  size={20}
                  color={COLORS.gray}
                  style={styles.clearIcon}
                />
              </TouchableOpacity>
            ) : null}
          </View>
        </View>
        {searchText && (
          <View style={styles.tabBar}>
            {SearchTabs.map((tab) => (
              <TouchableOpacity
                key={tab.key}
                style={[
                  styles.tabItem,
                  activeTab === tab.key && styles.activeTab,
                ]}
                onPress={() => setActiveTab(tab.key)}
              >
                <Text
                  style={[
                    styles.tabLabel,
                    activeTab === tab.key
                      ? { color: COLORS.primary }
                      : { color: COLORS.lightgray },
                  ]}
                >
                  {tab.title}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        )}
      </View>

      {/* Centered Content */}
      <View style={styles.centeredContent}>
        <Ionicons name="search-outline" size={68} color={COLORS.gray} />
        <Text style={styles.instructions}>
          Search by Project Name, Purchaser Name,{"\n"}Worksheet ID or Suite #
        </Text>
      </View>
      {searchText && renderContent()}
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.formBackground,
  },
  header: {
    paddingHorizontal: 16,
    paddingTop: 60,
    backgroundColor: "#FFFFFF",
    elevation: 1,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  backIcon: {
    marginRight: 12,
  },
  searchContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.formBackground,
    borderRadius: 8,
    paddingHorizontal: 12,
    height: 50,
  },
  searchIcon: {
    marginRight: 8,
  },
  clearIcon: {
    marginLeft: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: COLORS.primaryBlue,
  },
  centeredContent: {
    marginTop: 120,
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  instructions: {
    marginTop: 16,
    textAlign: "center",
    fontSize: 18,
    fontWeight: "400",
    lineHeight: 26,
    fontFamily: FONTS.calibri.regular,
    color: COLORS.gray,
  },
  tabBar: {
    paddingTop: 18,
    flexDirection: "row",
    justifyContent: "space-around",
    borderBottomColor: COLORS.inputBackground,
  },
  tabItem: {
    paddingBottom: 18,
    paddingHorizontal: 12,
  },
  activeTab: {
    borderBottomWidth: 3,
    borderBottomColor: COLORS.primary,
  },
  tabLabel: {
    fontSize: 16,
    fontWeight: "700",
  },
});

export default SearchModal;
