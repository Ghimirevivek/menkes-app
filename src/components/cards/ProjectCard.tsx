import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { COLORS, FONTS } from "@/theme";
import Button from "@/components/Button/Button";

const Badge = ({ text, style, textStyle }: any) => (
  <View style={[styles.badge, style]}>
    <Text style={[styles.badgeText, textStyle]}>{text}</Text>
  </View>
);

const ProjectCard = ({
  imageSource,
  logoSource,
  title,
  subtitle,
  hotlist,
  allocated,
  onPress,
}: any) => (
  <View style={styles.card}>
    <View style={styles.imageContainer}>
      <Image source={imageSource} style={styles.image} />
      {(hotlist || allocated) && (
        <View style={styles.badgesContainer}>
          {hotlist && (
            <Badge
              text={`${hotlist} Hotlist`}
              style={styles.badgeHotlist}
              textStyle={{ color: COLORS.gray }}
            />
          )}
          {allocated && (
            <Badge
              text={`${allocated} Allocated`}
              style={styles.badgeAllocated}
              textStyle={{ color: COLORS.primary }}
            />
          )}
        </View>
      )}
    </View>

    <View style={styles.details}>
      <View style={styles.detailsRow}>
        <View style={styles.logoContainer}>
          <Image source={logoSource} style={styles.logo} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>{subtitle}</Text>
        </View>
      </View>
      <Button
        type="secondary"
        icon="plus"
        label="Submit Worksheet"
        onPress={onPress}
      />
    </View>
  </View>
);

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.white,
    borderRadius: 8,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  imageContainer: {
    position: "relative",
  },
  image: {
    width: "100%",
    height: 200,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  badgesContainer: {
    position: "absolute",
    top: 8,
    left: 8,
    flexDirection: "row",
    gap: 8,
  },
  badge: {
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 16,
  },
  badgeHotlist: {
    backgroundColor: COLORS.draftBackground,
  },
  badgeAllocated: {
    backgroundColor: COLORS.allocted,
  },
  badgeText: {
    fontSize: 14,
    fontWeight: "700",
    lineHeight: 20,
    fontFamily: FONTS.calibri.bold,
  },
  details: {
    paddingTop: 20,
    paddingBottom: 12,
    paddingHorizontal: 18,
  },
  detailsRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  logoContainer: {
    borderWidth: 1,
    borderColor: COLORS.inputBackground,
    justifyContent: "center",
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 4,
    alignItems: "center",
  },
  logo: {
    width: 80,
    height: 80,
    borderRadius: 8,
  },
  textContainer: {
    marginLeft: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    lineHeight: 28,
    fontFamily: FONTS.calibri.bold,
    color: COLORS.primaryBlue,
  },
  subtitle: {
    fontSize: 14,
    fontFamily: FONTS.calibri.regular,
    lineHeight: 20,
    color: COLORS.gray,
  },
});

export default ProjectCard;
