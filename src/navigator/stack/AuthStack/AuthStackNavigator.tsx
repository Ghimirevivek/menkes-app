// AuthStackNavigator.tsx
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { COLORS } from "@/theme";
import { HeaderBackButton, HeaderLeft } from "../components";
import Register from "@/screens/auth/register/Register";
import FourStepForm from "@/screens/auth/register/registerProfile/FourStepForm";
import RegisterSuccess from "@/screens/auth/register/registerProfile/RegisterSuccess";
import LoginScreen from "@/screens/auth/login/LoginScreen";
import FaceIDScreen from "@/screens/auth/login/FaceIdScreen";
import NotificationsScreen from "@/screens/auth/login/NotificationsScreen";
import BiometricsScreen from "@/screens/auth/login/BiometricsScreen";
import ForgetPasswordScreen from "@/screens/auth/forgot/ForgetPasswordScreen";
import VerificationScreen from "@/screens/auth/forgot/VerificationScreen";
import NewPasswordScreen from "@/screens/auth/forgot/NewPasswordScreen";
import PasswordUpdateSuccess from "@/screens/auth/forgot/PasswordUpdateSuccess";
import AccountDeActivate from "@/screens/auth/login/AccountDeActivate";

const Stack = createNativeStackNavigator();

const navigationProps = {
  headerTintColor: COLORS.white,
  headerStyle: { backgroundColor: COLORS.primary },
  headerTitleStyle: { fontSize: 16 },
};

const AuthStackNavigator = () => {
  const currentStep = useSelector((state: RootState) => state.step.currentStep);
  console.log("🚀 ~ AuthStackNavigator ~ currentStep:", currentStep);

  return (
    <Stack.Navigator screenOptions={navigationProps}>
      <Stack.Screen
        options={{ headerShown: false }}
        component={Register}
        name="RegisterScreen"
      />

      <Stack.Screen
        name="FourStepForm"
        component={FourStepForm}
        options={({ navigation }) => ({
          title: "Register",
          headerLeft: () => <HeaderBackButton navigation={navigation} />,
          headerTitleAlign: "center",
        })}
      />

      <Stack.Screen
        name="RegisterSuccess"
        component={RegisterSuccess}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="AccountDeActivate"
        component={AccountDeActivate}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={({ navigation }) => ({
          title: "Log in",
          headerLeft: () => <HeaderLeft navigation={navigation} />,
          headerTitleAlign: "center",
        })}
      />

      <Stack.Screen
        name="FaceIdScreen"
        component={FaceIDScreen}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="BiometricsScreen"
        component={BiometricsScreen}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="NotificationsScreen"
        component={NotificationsScreen}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="ForgetPasswordScreen"
        component={ForgetPasswordScreen}
        options={({ navigation }) => ({
          title: "Forgot Password",
          headerLeft: () => <HeaderLeft navigation={navigation} />,
          headerTitleAlign: "center",
        })}
      />

      <Stack.Screen
        name="VerificationScreen"
        component={VerificationScreen}
        options={({ navigation }) => ({
          title: "Check your email",
          headerLeft: () => <HeaderLeft navigation={navigation} />,
          headerTitleAlign: "center",
        })}
      />

      <Stack.Screen
        name="NewPasswordScreen"
        component={NewPasswordScreen}
        options={({ navigation }) => ({
          title: "Log in",
          headerLeft: () => <HeaderLeft navigation={navigation} />,
          headerTitleAlign: "center",
        })}
      />

      <Stack.Screen
        name="PasswordUpdateSuccess"
        component={PasswordUpdateSuccess}
        options={({ navigation }) => ({
          title: "Set new password",
          headerLeft: () => <HeaderLeft navigation={navigation} />,
          headerTitleAlign: "center",
        })}
      />
    </Stack.Navigator>
  );
};

export default AuthStackNavigator;
