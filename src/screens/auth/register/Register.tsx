import { COLORS, FONTS } from "@/theme";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import Swiper from "react-native-swiper";
import React from "react";
import { View, Text, StyleSheet, Image, Dimensions } from "react-native";
import { slides } from "@/utils/constant";
import { StackParamList } from "@/navigator/stack/Stack.typeDefs";
import Button from "@/components/Button/Button";

const Register: React.FC = () => {
  const navigation = useNavigation<NavigationProp<StackParamList>>();

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require("../../../assets/images/menkes-hero 1.png")}
          style={styles.backgroundImage}
        />

        <Image
          source={require("../../../assets/images/Logo.png")}
          style={styles.logo}
        />
      </View>

      <View style={styles.contentContainer}>
        <Swiper
          autoplay={true}
          loop={true}
          showsPagination={true}
          paginationStyle={styles.paginationContainer}
          activeDotColor={COLORS.black}
          dotColor={COLORS.gray}
          dotStyle={styles.dotStyle}
          activeDotStyle={styles.activeDotStyle}
        >
          {slides.map((slide, index) => (
            <View key={index}>
              <Text style={styles.headline}>{slide.headline}</Text>
              <Text style={styles.description}>{slide.description}</Text>
            </View>
          ))}
        </Swiper>

        <View
          style={{ position: "absolute", bottom: 60, width: "100%", gap: 10 }}
        >
          <Button
            type="primary"
            label="Register"
            onPress={() => navigation.navigate("FourStepForm")}
          />
          <Button
            type="secondary"
            label="Log In"
            onPress={() => navigation.navigate("LoginScreen")}
          />
        </View>
      </View>
    </View>
  );
};

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  imageContainer: {
    width: "100%",
    height: "50%",
    position: "relative",
  },
  backgroundImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  logo: {
    position: "absolute",
    alignSelf: "center",
    top: "25%",
    width: 120,
    height: 40,
    resizeMode: "contain",
  },
  contentContainer: {
    flex: 1,
    backgroundColor: COLORS.white,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingTop: 30,
    paddingHorizontal: 40,
    alignItems: "center",
  },
  headline: {
    fontSize: 24,
    fontWeight: 700,
    fontFamily: FONTS.calibri.bold,
    marginBottom: 12,
    lineHeight: 30,
    textAlign: "center",
  },
  description: {
    fontSize: 16,
    color: COLORS.gray,
    lineHeight: 24,
    fontFamily: FONTS.calibri.regular,
    textAlign: "center",
    fontWeight: 400,
  },
  paginationContainer: {
    height: 300,
    position: "absolute",
    bottom: 90,
    alignSelf: "center",
  },
  dotStyle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: COLORS.gray,
  },
  activeDotStyle: {
    width: 14,
    height: 14,
    borderRadius: 10,
    backgroundColor: COLORS.black,
    borderWidth: 2,
    borderColor: COLORS.white,
  },
});

export default Register;
