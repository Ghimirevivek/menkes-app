import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Alert } from "react-native";
import Octicons from "@expo/vector-icons/Octicons";
import * as DocumentPicker from "expo-document-picker";
import { COLORS, FONTS } from "@/theme";
import Button from "@/components/Button/Button";

interface WorkSheetAttaachementFormProps {
  handleContinue: () => void;
}

interface DocumentResult {
  uri: string;
  name: string;
  type: string;
}

const WorkSheetAttaachementForm = ({
  handleContinue,
}: WorkSheetAttaachementFormProps) => {
  const [selectedFiles, setSelectedFiles] = useState<string | null>(null);

  const handleFileSelect = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({
        type: "*/*",
      });

      if (result && "uri" in result) {
        const { uri, name }: any = result;
        setSelectedFiles(uri);
        Alert.alert("File Selected", `You selected: ${name}`);
        console.log("File URI:", uri);
      } else {
        console.log("File selection canceled");
      }
    } catch (error) {
      console.error("Error selecting file:", error);
    }
  };

  return (
    <View style={styles.container}>
      <View>
        <View style={styles.section}>
          <Text style={styles.title}>Proof of Canadian Residency</Text>
          <Text style={styles.description}>
            Acceptable documents include Canadian Passport, Canadian PR Card,
            Etc.
          </Text>
          <TouchableOpacity style={styles.button} onPress={handleFileSelect}>
            <Octicons name="upload" size={24} color="black" />
            <Text style={styles.buttonText}>Attach files</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.section}>
          <Text style={styles.title}>Primary ID with Address</Text>
          <Text style={styles.description}>
            Acceptable documents include Driver's License etc. Please upload at
            least one per Purchaser.
          </Text>
          <TouchableOpacity style={styles.button} onPress={handleFileSelect}>
            <Octicons name="upload" size={24} color="black" />
            <Text style={styles.buttonText}>Attach files</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <TouchableOpacity>
          <Button type="primary" label="Continue" onPress={handleContinue} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: COLORS.formBackground,
    padding: 20,
    height: 720,
  },
  section: {
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    lineHeight: 24,
    fontFamily: FONTS.calibri.bold,
    color: COLORS.primaryBlue,
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    fontWeight: "400",
    lineHeight: 24,
    fontFamily: FONTS.calibri.regular,
    color: COLORS.gray,
    marginBottom: 8,
  },
  button: {
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#E2E8F0",
    borderRadius: 8,
    paddingVertical: 18,
    paddingHorizontal: 15,
    marginTop: 10,
  },
  buttonText: {
    marginLeft: 10,
    fontSize: 16,
    fontWeight: "700",
    lineHeight: 24,
    fontFamily: FONTS.calibri.bold,
    color: COLORS.primaryBlue,
  },
});

export default WorkSheetAttaachementForm;
