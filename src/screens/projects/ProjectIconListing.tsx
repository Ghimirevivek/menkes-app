import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { COLORS, FONTS } from "@/theme";
import { StackParamList } from "@/navigator/stack/Stack.typeDefs";

import ProjectCard from "@/components/cards/ProjectCard";

const ProjectIconListing: React.FC = () => {
  const navigation = useNavigation<NavigationProp<StackParamList>>();

  const navigateToProjectInfo = () =>
    navigation.navigate("ProjectInformationTab");

  return (
    <View style={styles.container}>
      <ScrollView>
        <ProjectCard
          imageSource={require("../../assets/images/hotel1.png")}
          logoSource={require("../../assets/images/Frame.png")}
          title="Bravo at Festival"
          subtitle="Residential • Vaughan, ON"
          hotlist={2}
          allocated={3}
          onPress={navigateToProjectInfo}
        />
        <ProjectCard
          imageSource={require("../../assets/images/hotel2.png")}
          logoSource={require("../../assets/images/Frame.png")}
          title="Encore at Festival"
          subtitle="Residential • Vaughan, ON"
          onPress={navigateToProjectInfo}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.formBackground,
    padding: 16,
  },
});

export default ProjectIconListing;
