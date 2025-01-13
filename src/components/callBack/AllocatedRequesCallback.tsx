import { COLORS, FONTS } from "@/theme";
import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "@/redux/slices/modalSlice";
import FiltersHeader from "@/components/header/FiltersHeader";

const AllocatedRequesCallback = () => {
  const dispatch = useDispatch();

  const handleCloseModal = () => {
    dispatch(closeModal()); // Dispatch action to close the modal
  };
  return (
    <View style={styles.container}>
      <FiltersHeader
        title="Request Callback"
        leftButton="Close"
        setModalVisible={handleCloseModal}
      />

      <View style={{ padding: 16 }}>
        <Text style={styles.heroTitle}>
          Need assistance or have any questions? Our team will give you a call
          back shortly.
        </Text>
      </View>
      <View style={{ padding: 16 }}>
        <View style={styles.types}>
          <View>
            <Text style={styles.typetitle}>Type</Text>
            <Text style={styles.typeText}>Allocated Units Inquiry</Text>
          </View>
          <View>
            <AntDesign name="down" color={COLORS.black} size={20} />
          </View>
        </View>

        <View style={styles.types}>
          <View>
            <Text style={styles.typetitle}>Callback Phone #</Text>
            <Text style={styles.typeText}>416-123-3533</Text>
          </View>
        </View>

        <View style={styles.typeMessage}>
          <View>
            <Text style={styles.typetitle}>Message</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.formBackground,
  },
  header: {
    paddingTop: 20,
    paddingHorizontal: 18,
    backgroundColor: COLORS.white,
    height: 60,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 0,
  },
  headerButton: {
    fontSize: 16,
    fontWeight: 400,
    lineHeight: 24,
    color: COLORS.primary,
    fontFamily: FONTS.calibri.regular,
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: 700,
    lineHeight: 24,
    color: COLORS.black,
    fontFamily: FONTS.calibri.bold,
  },
  heroTitle: {
    fontSize: 16,
    fontWeight: 400,
    lineHeight: 24,
    color: COLORS.primaryBlue,
    fontFamily: FONTS.calibri.regular,
  },
  types: {
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: COLORS.disablebutton,
    backgroundColor: COLORS.white,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  typetitle: {
    fontSize: 14,
    fontWeight: 400,
    lineHeight: 24,
    color: COLORS.gray,
    fontFamily: FONTS.calibri.regular,
    paddingBottom: 4,
  },
  typeText: {
    fontSize: 16,
    fontWeight: 400,
    lineHeight: 24,
    color: COLORS.primaryBlue,
    fontFamily: FONTS.calibri.regular,
    paddingBottom: 4,
  },
  typeMessage: {
    borderRadius: 8,
    paddingVertical: 16,
    height: 200,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: COLORS.disablebutton,
    backgroundColor: COLORS.white,
    flexDirection: "row",
    justifyContent: "space-between",
    // alignItems: "center",
    marginBottom: 16,
  },
});

export default AllocatedRequesCallback;
