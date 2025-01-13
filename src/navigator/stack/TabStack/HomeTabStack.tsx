import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { COLORS } from "@/theme";
import AllocatedUnits from "@/screens/AllocatedUnits/AllocatedUnits";
import FirmUnits from "@/screens/FirmUnits/FirmUnits";
import WorkSheetUnits from "@/screens/WorkSheetUnits/WorkSheetUnits";
import { HeaderBackButton } from "../components";
import RightHeaderRequest from "../components/RightHeaderRequest";
import HeaderWithNotificationsAndSearch from "../components/HeaderWithNotificationsAndSearch";
import Home from "@/screens/home/Home";
import HeaderLeftLogo from "../components/HeaderLeftLogo";

const Stack = createNativeStackNavigator();

const navigationProps = {
  headerTintColor: COLORS.white,
  headerStyle: { backgroundColor: COLORS.primary },
  headerTitleStyle: { fontSize: 16 },
};

const HomeTabStack = () => {
  return (
    <Stack.Navigator screenOptions={navigationProps}>
      <Stack.Screen
        name="Home"
        component={Home}
        options={({ navigation }) => ({
          title: "",
          headerLeft: () => <HeaderLeftLogo navigation={navigation} />,
          headerRight: () => (
            <HeaderWithNotificationsAndSearch navigation={navigation} />
          ),
          headerTitleAlign: "center",
          headerShown: true, // Ensure this doesn't override stack-specific headers
        })}
      />
      <Stack.Screen
        name="AllocatedUnits"
        component={AllocatedUnits}
        options={({ navigation }) => ({
          title: "Allocated Units",
          headerLeft: () => <HeaderBackButton navigation={navigation} />,
          headerRight: () => <RightHeaderRequest navigation={navigation} />,
          headerTitleAlign: "center",
          headerShown: true,
        })}
      />

      <Stack.Screen
        name="FirmUnits"
        component={FirmUnits}
        options={({ navigation }) => ({
          title: "Firm Units",
          headerLeft: () => <HeaderBackButton navigation={navigation} />,
          headerRight: () => <RightHeaderRequest navigation={navigation} />,
          headerTitleAlign: "center",
          headerShown: true,
        })}
      />

      <Stack.Screen
        name="WorkSheetUnits"
        component={WorkSheetUnits}
        options={({ navigation }) => ({
          title: "WorkSheet",
          headerLeft: () => <HeaderBackButton navigation={navigation} />,
          headerRight: () => <RightHeaderRequest navigation={navigation} />,
          headerTitleAlign: "center",
          headerShown: true,
        })}
      />
    </Stack.Navigator>
  );
};

export default HomeTabStack;
