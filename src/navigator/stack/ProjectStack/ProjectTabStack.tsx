import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { COLORS } from "@/theme";
import HeaderLeftProjectLogo from "../components/HeaderLeftProjectLogo";
import RightHeaderSearch from "../components/RightHeaderSearch";
import ProjectHome from "@/screens/projects/ProjectHome";
import ProjectInformationTab from "@/screens/projects/ProjectInformationTab";
import { HeaderLeft } from "../components";
import RightHeaderRequest from "../components/RightHeaderRequest";

const Stack = createNativeStackNavigator();

const navigationProps = {
  headerTintColor: COLORS.white,
  headerStyle: { backgroundColor: COLORS.primary },
  headerTitleStyle: { fontSize: 16 },
};

const ProjectTabStack = () => {
  return (
    <Stack.Navigator screenOptions={navigationProps}>
      <Stack.Screen
        name="Home"
        component={ProjectHome}
        options={({ navigation }) => ({
          title: "",
          headerLeft: () => <HeaderLeftProjectLogo navigation={navigation} />,
          headerRight: () => <RightHeaderSearch navigation={navigation} />,
          headerTitleAlign: "center",
          headerShown: true, // Ensure this doesn't override stack-specific headers
        })}
      />
    </Stack.Navigator>
  );
};

export default ProjectTabStack;
