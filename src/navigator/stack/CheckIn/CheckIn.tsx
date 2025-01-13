import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { COLORS } from "@/theme";
import HeaderLeftProjectLogo from "../components/HeaderLeftProjectLogo";
import RightHeaderSearch from "../components/RightHeaderSearch";
import ProjectHome from "@/screens/projects/ProjectHome";
import ProjectInformationTab from "@/screens/projects/ProjectInformationTab";
import CheckInHome from "@/screens/CheckIn/CheckInHome";
import HeaderLeftCheckLogo from "../components/HeaderLeftCheckLogo";

const Stack = createNativeStackNavigator();

const navigationProps = {
  headerTintColor: COLORS.white,
  headerStyle: { backgroundColor: COLORS.primary },
  headerTitleStyle: { fontSize: 16 },
};

const CheckIn = () => {
  return (
    <Stack.Navigator screenOptions={navigationProps}>
      <Stack.Screen
        name="CheckInHome"
        component={CheckInHome}
        options={({ navigation }) => ({
          title: "",
          headerLeft: () => <HeaderLeftCheckLogo navigation={navigation} />,
          //   headerRight: () => <RightHeaderSearch navigation={navigation} />,
          headerTitleAlign: "center",
          headerShown: true, // Ensure this doesn't override stack-specific headers
        })}
      />
    </Stack.Navigator>
  );
};

export default CheckIn;
