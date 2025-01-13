import ListIcon from "@/assets/icons/ListIcon";
import TabsContainer from "@/components/tabs/TabsContainer";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import ProjectIconListing from "./ProjectIconListing";
import ProjectDetailsList from "./ProjectDetailsList";
import FillProjectIcon from "@/assets/icons/FillProjectIcon";

const ProjectHome = () => {
  const [viewMode, setViewMode] = useState("icons");
  const tabs = [
    { id: "icons", label: "Icon", icon: <FillProjectIcon color={"#000"} /> },
    { id: "list", label: "List", icon: <ListIcon /> },
  ];

  const renderComponents = {
    icons: <ProjectIconListing />,
    list: <ProjectDetailsList />,
  };

  return (
    <View style={styles.container}>
      <TabsContainer
        tabs={tabs}
        viewMode={viewMode}
        setViewMode={setViewMode}
        renderComponents={renderComponents}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 16,
  },
});

export default ProjectHome;
