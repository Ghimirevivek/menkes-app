import { COLORS, FONTS } from "@/theme";
import { getStatusStyles } from "@/utils/utils";
import React, { useState } from "react";
import { Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import WorkSheetEdit from "../callBack/WorkSheetEdit";
import ErrorNotificationCard from "../cards/ErrorNotificationCard";
import ModalWrapper from "../modal/ModalWrapper";

interface HeaderProps {
  status?: any | "Conditional";
}

export const Header = ({ status }: HeaderProps) => {
  const { backgroundColor, textColor } = getStatusStyles({ status });
  return (
    <View style={styles.header}>
      <View>
        <Text style={styles.name}>David Smith, Robert Smith</Text>
        <Text style={styles.date}>East Tower (Unit 23)</Text>
        <Text style={styles.unit}>Submitted 11-Nov-2023</Text>
      </View>
      <View>
        <View style={[styles.badge, { backgroundColor }]}>
          <Text style={[styles.badgeText, { color: textColor }]}>{status}</Text>
        </View>
        <Text style={styles.badgecode}>WS# ADA12221</Text>
      </View>
    </View>
  );
};

const DetailsSection = ({
  title,
  details,
  status,
  actionlable,
  onEditPress,
}: {
  onEditPress?: () => void; // Add a callback prop
  actionlable?: string;
  status?: string;
  title: string;
  details: Array<{ label: string; value: string }>;
}) => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={{ padding: 16 }}>
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>{title}</Text>
          {status === "Incomplete" && (
            <TouchableOpacity onPress={() => setModalVisible(true)}>
              <Text style={styles.actionText}>{actionlable}</Text>
            </TouchableOpacity>
          )}
        </View>
        {status === "Incomplete" && (
          <View style={{ paddingBottom: 16 }}>
            <ErrorNotificationCard message="Date of Birth is under 19 years old" />
          </View>
        )}
        {details.map((detail, index) => (
          <View key={index}>
            <View style={styles.details}>
              <Text style={styles.label}>{detail.label}</Text>
              <Text style={styles.detailText}>{detail.value}</Text>
            </View>
            {index < details.length - 1 && (
              <View style={{ paddingVertical: 12 }}>
                {" "}
                <View style={styles.separator} />{" "}
              </View>
            )}
          </View>
        ))}
      </View>

      <ModalWrapper
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <WorkSheetEdit setModalVisible={setModalVisible} />
      </ModalWrapper>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.formBackground,
  },
  separator: {
    padding: 0.3,
    backgroundColor: "lightgray",
    width: "100%",
    alignItems: "center",
    marginVertical: 4,
  },
  header: {
    backgroundColor: COLORS.white,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
    padding: 16,
  },
  name: {
    fontSize: 16,
    fontWeight: 700,
    lineHeight: 24,
    fontFamily: FONTS.calibri.bold,
    color: COLORS.primaryBlue,
    marginBottom: 4,
  },
  date: {
    fontSize: 14,
    fontWeight: 400,
    lineHeight: 20,
    fontFamily: FONTS.calibri.regular,
    color: COLORS.gray,
    marginBottom: 4,
  },
  unit: {
    fontSize: 14,
    fontWeight: 400,
    lineHeight: 20,
    fontFamily: FONTS.calibri.regular,
    color: COLORS.gray,
    marginBottom: 4,
  },
  badge: {
    paddingVertical: 4,
    height: 30,
    paddingHorizontal: 7,
    borderRadius: 100,
    alignItems: "center",
    marginBottom: 4,
  },

  badgecode: {
    fontSize: 14,
    fontWeight: 400,
    lineHeight: 20,
    fontFamily: FONTS.calibri.regular,
    color: COLORS.gray,
  },

  badgeText: {
    fontSize: 14,
    fontWeight: 700,
    lineHeight: 20,
    fontFamily: FONTS.calibri.bold,
  },
  section: {
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    padding: 16,
    paddingBottom: 20,
    marginBottom: 16,

    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 700,
    fontFamily: FONTS.calibri.bold,
    textAlign: "left",
    marginTop: 12,
    marginBottom: 20,
    color: COLORS.primaryBlue,
  },
  actionText: {
    fontSize: 14,
    fontWeight: 700,
    fontFamily: FONTS.calibri.bold,
    color: COLORS.primary,
    lineHeight: 20,
    textDecorationLine: "underline",
  },
  details: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  detailText: {
    fontSize: 16,
    color: COLORS.gray,
    fontFamily: FONTS.calibri.regular,
    lineHeight: 20,
    fontWeight: "400",
    textAlign: "right",
    maxWidth: 180,
  },
  label: {
    fontSize: 16,
    color: COLORS.gray,
    fontFamily: FONTS.calibri.bold,

    lineHeight: 20,
    fontWeight: "700",
  },
  modalOverlay: {
    marginTop: 40,
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
});

export default DetailsSection;
