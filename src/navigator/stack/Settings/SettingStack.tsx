import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { COLORS } from "@/theme";
import HeaderLeftProjectLogo from "../components/HeaderLeftProjectLogo";
import RightHeaderSearch from "../components/RightHeaderSearch";
import ProjectHome from "@/screens/projects/ProjectHome";
import ProjectInformationTab from "@/screens/projects/ProjectInformationTab";
import CheckInHome from "@/screens/CheckIn/CheckInHome";
import HeaderLeftCheckLogo from "../components/HeaderLeftCheckLogo";
import SettingHome from "@/screens/Settings/SettingHome";
import Profile from "@/screens/Settings/Profile";
import { HeaderLeft } from "../components";
import PrivacyPolicy from "@/screens/Settings/PrivacyPolicy";
import TermsConditions from "@/screens/Settings/TermsConditions";
import ChangePassword from "@/screens/Settings/ChangePassword";

const Stack = createNativeStackNavigator();

const navigationProps = {
  headerTintColor: COLORS.white,
  headerStyle: { backgroundColor: COLORS.primary },
  headerTitleStyle: { fontSize: 16 },
};

const SettingStack = () => {
  return (
    <Stack.Navigator screenOptions={navigationProps}>
      <Stack.Screen
        name="SettingHome"
        component={SettingHome}
        options={({ navigation }) => ({
          title: "",
          headerLeft: () => <HeaderLeftCheckLogo navigation={navigation} />,
          //   headerRight: () => <RightHeaderSearch navigation={navigation} />,
          headerTitleAlign: "center",
          headerShown: true, // Ensure this doesn't override stack-specific headers
        })}
      />

      <Stack.Screen
        name="Profile"
        component={Profile}
        options={({ navigation }) => ({
          title: "Profile Details",
          headerLeft: () => <HeaderLeft navigation={navigation} />,
          //   headerRight: () => <RightHeaderSearch navigation={navigation} />,
          headerTitleAlign: "center",
          headerShown: true, // Ensure this doesn't override stack-specific headers
        })}
      />

      <Stack.Screen
        name="PrivacyPolicy"
        component={PrivacyPolicy}
        options={({ navigation }) => ({
          title: "Privacy Policy",
          headerLeft: () => <HeaderLeft navigation={navigation} />,
          //   headerRight: () => <RightHeaderSearch navigation={navigation} />,
          headerTitleAlign: "center",
          headerShown: true, // Ensure this doesn't override stack-specific headers
        })}
      />
      <Stack.Screen
        name="TermsConditions"
        component={TermsConditions}
        options={({ navigation }) => ({
          title: "Terms & Conditions",
          headerLeft: () => <HeaderLeft navigation={navigation} />,
          //   headerRight: () => <RightHeaderSearch navigation={navigation} />,
          headerTitleAlign: "center",
          headerShown: true, // Ensure this doesn't override stack-specific headers
        })}
      />

      <Stack.Screen
        name="ChangePassword"
        component={ChangePassword}
        options={({ navigation }) => ({
          title: "Change Password",
          headerLeft: () => <HeaderLeft navigation={navigation} />,
          //   headerRight: () => <RightHeaderSearch navigation={navigation} />,
          headerTitleAlign: "center",
          headerShown: true, // Ensure this doesn't override stack-specific headers
        })}
      />
    </Stack.Navigator>
  );
};

export default SettingStack;
