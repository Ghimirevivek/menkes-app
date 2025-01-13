import { COLORS, FONTS } from "@/theme";
import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { StackParamList } from "@/navigator/stack/Stack.typeDefs";
import Button from "@/components/Button/Button";

const ProjectDetailsList: React.FC = () => {
  const navigation = useNavigation<NavigationProp<StackParamList>>();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        {Array(3)
          .fill("")
          .map((_, index) => (
            <View style={styles.card} key={index}>
              <TouchableOpacity
                onPress={() => navigation.navigate("ProjectInformationTab")}
                style={styles.cardContent}
              >
                <View style={styles.textContainer}>
                  <Text style={styles.title}>Bravo at Festival</Text>
                  <Text style={styles.subtitle}>Residential • Vaughan, ON</Text>
                  <View style={styles.badgesContainer}>
                    <View style={styles.badgeHotlist}>
                      <Text style={styles.badgeText}>2 Hotlist</Text>
                    </View>
                    <View style={styles.badgeAllocated}>
                      <Text style={styles.AllocatedText}>3 Allocated</Text>
                    </View>
                  </View>
                </View>
                <Image
                  source={require("../../assets/images/hotel1.png")}
                  style={styles.cardImage}
                />
              </TouchableOpacity>

              <Button
                type="secondary"
                icon="plus"
                label="Submit Worksheet"
                onPress={() => navigation.navigate("ProjectInformationTab")}
              />
            </View>
          ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.formBackground,
  },
  content: {
    padding: 16,
  },
  card: {
    backgroundColor: COLORS.white,
    borderRadius: 8,
    marginBottom: 16,
    padding: 16,
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  cardContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  textContainer: {
    flex: 1,
    marginRight: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: 700,
    lineHeight: 26,
    color: COLORS.primaryBlue,
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    fontFamily: FONTS.calibri.regular,
    fontWeight: 400,
    lineHeight: 20,
    color: COLORS.gray,
    marginBottom: 8,
  },
  badgesContainer: {
    flexDirection: "row",
    gap: 8,
  },
  badgeHotlist: {
    backgroundColor: COLORS.draftBackground,
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 16,
  },
  badgeAllocated: {
    backgroundColor: COLORS.allocted,
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 16,
  },
  badgeText: {
    color: COLORS.gray,
    fontSize: 14,
    fontWeight: 700,
    fontFamily: FONTS.calibri.bold,
  },
  AllocatedText: {
    color: COLORS.primaryBlue,
    fontSize: 14,
    fontWeight: 700,
    fontFamily: FONTS.calibri.bold,
  },
  cardImage: {
    width: 120,
    height: 120,
    borderRadius: 8,
  },
});

export default ProjectDetailsList;
