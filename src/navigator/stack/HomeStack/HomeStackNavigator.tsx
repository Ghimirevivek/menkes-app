import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { COLORS } from "@/theme";
import ProjectDetails from "@/screens/AllocatedUnits/ProjectDetails";
import FirmUnitsDetail from "@/screens/FirmUnits/FirmUnitsDetail";
import WorkSheetDetailsList from "@/screens/WorkSheetUnits/WorkSheetDetailsList";
import WorkSheetDetails from "@/screens/FirmUnits/WorkSheetDetails";
import TabNavigator from "@/navigator/tab/Tab";
import HeaderWithNotificationsAndSearch from "../components/HeaderWithNotificationsAndSearch";
import { HeaderBackButton, HeaderLeft } from "../components";
import RighterHeaderRequest from "../components/RightHeaderRequest";
import HeaderLeftLogo from "../components/HeaderLeftLogo";
import TitleWithAdditionalInfo from "../components/TitleWithAdditionalInfo";
import WorkSheetStepFrom from "@/screens/workSheetForm/WorkSheetStepFrom";
import { CloseIcon } from "../components/CloseIcon";
import ProjectInformationTab from "@/screens/projects/ProjectInformationTab";
import RightHeaderRequest from "../components/RightHeaderRequest";

const Stack = createNativeStackNavigator();

const navigationProps = {
  headerTintColor: COLORS.white,
  headerStyle: { backgroundColor: COLORS.primary },
  headerTitleStyle: { fontSize: 16 },
};

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={navigationProps}
    >
      <Stack.Screen
        name="HomeScreen"
        component={TabNavigator}
        options={({ navigation }) => ({
          title: "",
          headerLeft: () => <HeaderLeftLogo navigation={navigation} />,
          headerRight: () => (
            <HeaderWithNotificationsAndSearch navigation={navigation} />
          ),
          headerTitleAlign: "center",
          headerShown: false,
        })}
      />

      <Stack.Screen
        name="ProjectDetails"
        component={ProjectDetails}
        options={({ navigation }) => ({
          title: "Bravo",
          headerLeft: () => <HeaderBackButton navigation={navigation} />,
          headerRight: () => <RighterHeaderRequest navigation={navigation} />,
          headerTitleAlign: "center",
          headerTitle: () => (
            <TitleWithAdditionalInfo
              title="Bravo"
              subtitle="Residential"
              subtitleSecondary="Vaughan, ON"
              dotColor="white"
            />
          ),
        })}
      />

      <Stack.Screen
        name="FirmUnitsDetail"
        component={FirmUnitsDetail}
        options={({ navigation }) => ({
          title: "Bravo",
          headerLeft: () => <HeaderBackButton navigation={navigation} />,
          headerRight: () => <RighterHeaderRequest navigation={navigation} />,
          headerTitleAlign: "center",
          headerTitle: () => (
            <TitleWithAdditionalInfo
              title="Bravo"
              subtitle="Residential"
              subtitleSecondary="Toronto, ON"
              dotColor="white"
            />
          ),
        })}
      />

      <Stack.Screen
        name="WorkSheetDetailsList"
        component={WorkSheetDetailsList}
        options={({ navigation }) => ({
          title: "Bravo",
          headerLeft: () => <HeaderBackButton navigation={navigation} />,
          headerRight: () => <RighterHeaderRequest navigation={navigation} />,
          headerTitleAlign: "center",
          headerTitle: () => (
            <TitleWithAdditionalInfo
              title="Bravo"
              subtitle="Residential"
              subtitleSecondary="Toronto, ON"
              dotColor="white"
            />
          ),
        })}
      />

      <Stack.Screen
        name="WorkSheetDetails"
        component={WorkSheetDetails}
        options={({ navigation }) => ({
          title: "WorkSheet Details",
          headerLeft: () => <HeaderBackButton navigation={navigation} />,
          headerRight: () => <RighterHeaderRequest navigation={navigation} />,
          headerTitleAlign: "center",
          headerShown: true,
        })}
      />

      <Stack.Screen
        name="WorkSheetStepFrom"
        component={WorkSheetStepFrom}
        options={({ navigation }) => ({
          title: "Submit Worksheet",
          headerLeft: () => <HeaderBackButton navigation={navigation} />,
          headerRight: () => <CloseIcon navigation={navigation} />,
          headerTitle: () => (
            <TitleWithAdditionalInfo
              title="Submit Worksheet"
              subtitle="Bravo at Festival"
              dotColor="white"
            />
          ),
          headerTitleAlign: "center",
          headerShown: true,
        })}
      />

      <Stack.Screen
        name="ProjectInformationTab"
        component={ProjectInformationTab}
        options={({ navigation }) => ({
          title: "",
          headerLeft: () => <HeaderLeft navigation={navigation} />,
          headerRight: () => <RightHeaderRequest navigation={navigation} />,
          headerTitleAlign: "center",
          headerShown: true,
          headerTransparent: true, // Makes the header background transparent
          headerStyle: { backgroundColor: "transparent" }, // Ensures no background color is applied
        })}
      />
    </Stack.Navigator>
  );
};

export default HomeStackNavigator;
