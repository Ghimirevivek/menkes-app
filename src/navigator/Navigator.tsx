import { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import * as SplashScreen from "expo-splash-screen";
import { loadImages, loadFonts } from "@/theme";

import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import HomeStackNavigator from "./stack/HomeStack/HomeStackNavigator";
import AuthStackNavigator from "./stack/AuthStack/AuthStackNavigator";
// import { AuthStackNavigator, HomeStackNavigator } from "./stack/Stack";

// Keep the splash screen visible while loading resources
SplashScreen.preventAutoHideAsync();

const Navigator = () => {
  const { loggedIn, isCheckedL } = useSelector(
    (state: RootState) => state.registration
  );

  useEffect(() => {
    const loadAssets = () =>
      Promise.all([loadImages(), loadFonts()]).finally(SplashScreen.hideAsync);

    loadAssets();
  }, []);

  return (
    <NavigationContainer>
      {isCheckedL && loggedIn ? <HomeStackNavigator /> : <AuthStackNavigator />}
    </NavigationContainer>
  );
};

export default Navigator;
