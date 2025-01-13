import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Feather"; // Ensure this matches your usage
import { COLORS } from "@/theme"; // Your theme COLORS
import Home from "@/screens/home/Home"; // Home component
import HomeIcon from "@/assets/icons/HomeIcon";
import ProjectIcon from "@/assets/icons/ProjectIcon";
import SettingIcon from "@/assets/icons/SettingIcon";
import WraperCheckIcon from "@/assets/icons/WraperCheckIcon";
import HomeTabStack from "../stack/TabStack/HomeTabStack";
import ProjectTabStack from "../stack/ProjectStack/ProjectTabStack";
import CheckInHome from "@/screens/CheckIn/CheckInHome";
import CheckIn from "../stack/CheckIn/CheckIn";
import SettingStack from "../stack/Settings/SettingStack";
import FillProjectIcon from "@/assets/icons/FillProjectIcon";

const Tab = createBottomTabNavigator();

function CustomTabBar({ state, descriptors, navigation }: any) {
  return (
    <View style={styles.bottomNav}>
      {state.routes.map((route: any, index: number) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
              ? options.title
              : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        const getIcon = () => {
          const iconProps = {
            color: isFocused ? COLORS.primary : COLORS.tabnavigatorIcon,
          };

          switch (route.name) {
            case "HomeTab":
              return <HomeIcon {...iconProps} />;
            case "ProjectsTab":
              return <FillProjectIcon {...iconProps} />;
            case "SettingsTab":
              return <SettingIcon {...iconProps} />;
            case "CheckInTab":
              return <WraperCheckIcon {...iconProps} />;
            default:
              return null;
          }
        };

        return (
          <TouchableOpacity
            key={route.name}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.navItem}
          >
            {getIcon()}
            <Text
              style={[
                styles.navText,
                { color: isFocused ? COLORS.primary : COLORS.gray },
              ]}
            >
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      tabBar={(props) => <CustomTabBar {...props} />}
    >
      <Tab.Screen
        name="HomeTab"
        component={HomeTabStack}
        options={{ title: "Home" }}
      />

      <Tab.Screen
        name="ProjectsTab"
        component={ProjectTabStack}
        options={{ title: "Projects" }}
      />
      <Tab.Screen
        name="SettingsTab"
        component={SettingStack}
        options={{ title: "Settings" }}
      />
      <Tab.Screen
        name="CheckInTab"
        component={CheckIn}
        options={{ title: "Check In" }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: COLORS.white,
    paddingTop: 16,
    paddingBottom: 26,
    borderTopWidth: 1,
    borderColor: "#dee2e6",
  },
  navItem: {
    alignItems: "center",
    justifyContent: "center",
  },
  navText: {
    fontSize: 12,
    marginTop: 4,
  },
});
