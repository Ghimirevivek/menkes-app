import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Share,
} from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";

import { COLORS, FONTS } from "@/theme";

const ProjectDocument = () => {
  const handleShare = async () => {
    try {
      const shareOptions = {
        title: "Share PDF File",
        message: "Here is the file you requested",
      };
      await Share.share(shareOptions); // Use Share.share instead of Share.open
    } catch (error) {
      console.log("Error sharing file:", error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <TouchableOpacity style={styles.header}>
          <Text style={styles.headerText}>Marketing Assets</Text>
          <AntDesign name="down" size={24} color="black" />
        </TouchableOpacity>

        <View style={styles.item}>
          <View style={styles.fileInfo}>
            <Image
              source={require("../../assets/images/pdf.png")}
              style={{ width: 40, height: 40 }}
            />
            <View style={styles.textContainer}>
              <Text style={styles.fileName}>File name</Text>
              <Text style={styles.fileDate}>11-Jan-2023</Text>
            </View>
          </View>
          <TouchableOpacity onPress={handleShare}>
            <Feather name="upload" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <View
          style={{
            borderBottomWidth: 1,
            borderBottomColor: COLORS.inputBackground,
          }}
        />
        <View style={styles.item}>
          <View style={styles.fileInfo}>
            <Image
              source={require("../../assets/images/pdf.png")}
              style={{ width: 40, height: 40 }}
            />
            <View style={styles.textContainer}>
              <Text style={styles.fileName}>File name</Text>
              <Text style={styles.fileDate}>11-Jan-2023</Text>
            </View>
          </View>
          <TouchableOpacity onPress={handleShare}>
            <Feather name="upload" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>

      {["Floor Plans", "Brochures", "Sales Documents"].map((section, index) => (
        <TouchableOpacity key={index} style={styles.section}>
          <View style={styles.header}>
            <Text style={styles.headerText}>{section}</Text>
            <Feather name="chevron-right" size={24} color="black" />
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.formBackground,
    paddingHorizontal: 16,
    marginBottom: 8,
  },
  section: {
    backgroundColor: COLORS.white,
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    elevation: 2,
    shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 8,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 700,
    lineHeight: 26,
    fontFamily: FONTS.calibri.bold,

    color: COLORS.black,
  },
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 16,
    paddingBottom: 12,
  },
  fileInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  textContainer: {
    marginLeft: 14,
  },
  fileName: {
    fontSize: 14,
    fontWeight: 700,
    lineHeight: 20,
    fontFamily: FONTS.calibri.bold,
    color: COLORS.primaryBlue,
  },
  fileDate: {
    fontSize: 14,
    fontWeight: 400,
    lineHeight: 20,
    fontFamily: FONTS.calibri.regular,
    color: COLORS.gray,
  },
});

export default ProjectDocument;
