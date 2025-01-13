import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { COLORS, FONTS } from "@/theme";
import { AppDispatch, RootState } from "@/redux/store";
import { registerUser } from "@/redux/slices/authSlice";
import { setStep } from "@/redux/slices/stepSlice";
import { StackParamList } from "@/navigator/stack/Stack.typeDefs";
import Button from "@/components/Button/Button";

const TermsConditions: React.FC<{
  formData: any;
  profileImage: string | null;
  handleNext: () => void;
}> = ({ formData, profileImage, handleNext }) => {
  const navigation = useNavigation<NavigationProp<StackParamList>>();
  const dispatch = useDispatch<AppDispatch>();
  const [loading, setLoading] = useState(false);
  const { isCheckedL } = useSelector((state: RootState) => state.registration);

  const handleAgreeAndContinue = async () => {
    setLoading(true);
    try {
      const payload = {
        ...formData,
        profileImage,
      };

      const resultAction = await dispatch(registerUser(payload));

      if (registerUser.fulfilled.match(resultAction)) {
        const successPayload = resultAction.payload as { message: string };
        Alert.alert(
          "Success",
          successPayload.message || "Registration successful!"
        );
        dispatch(setStep(1));
        if (!isCheckedL) {
          navigation.navigate("RegisterSuccess");
        }

        if (handleNext) handleNext();
      } else if (registerUser.rejected.match(resultAction)) {
        const errorPayload = resultAction.payload as string;
        Alert.alert("Error", errorPayload || "Something went wrong!");
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Terms & Conditions</Text>
      </View>

      <ScrollView style={styles.scrollView}>
        <Text style={styles.contentText}>
          Reference site about Lorem Ipsum, giving information on its origins,
          as well as a random Lipsum generator. Reference site about Lorem
          Ipsum, giving information on its origins, as well as a random Lipsum
          generator. Reference site about Lorem Ipsum, giving information on its
          origins, as well as a random Lipsum generator.
        </Text>
        <Text style={styles.contentText}>
          Reference site about Lorem Ipsum, giving information on its origins,
          as well as a random Lipsum generator. Reference site about Lorem
          Ipsum, giving information on its origins, as well as a random Lipsum
          generator. Reference site about Lorem Ipsum, giving information on its
          origins, as well as a random Lipsum generator. Reference site
          about Lorem Ipsum, giving information on its origins, as well as a
          random Lipsum generator.
        </Text>
        <Text style={styles.contentText}>
          Reference site about Lorem Ipsum, giving information on its origins,
          as well as a random Lipsum generator. Reference site about Lorem
          Ipsum, giving information on its origins, as well as a random Lipsum
          generator. Reference site about Lorem Ipsum, giving information on its
          origins, as well as a random Lipsum generator.
        </Text>
      </ScrollView>

      <TouchableOpacity
        style={{
          backgroundColor: COLORS.transparent,
          position: "relative",
          width: "90%",
          margin: "auto",
          bottom: 45,
        }}
        disabled={loading}
      >
        {loading ? (
          <ActivityIndicator color="#FFFFFF" />
        ) : (
          <Button
            type="primary"
            label="Agree and continue"
            onPress={handleAgreeAndContinue}
          />
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  header: {
    paddingHorizontal: 20,
    paddingVertical: 18,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "700",
    lineHeight: 30,
    color: "#000000",
    fontFamily: FONTS.calibri.bold,
  },
  scrollView: {
    flex: 1,
    marginHorizontal: 20,
    marginBottom: 10,
  },
  contentText: {
    fontSize: 16,
    fontWeight: "400",
    fontFamily: FONTS.calibri.regular,
    color: COLORS.gray,
    lineHeight: 24,
    marginBottom: 12,
    textAlign: "left",
  },
  button: {
    backgroundColor: COLORS.primary,
    paddingVertical: 15,
    alignItems: "center",
    marginHorizontal: 20,
    marginBottom: 20,
    borderRadius: 5,
  },
  buttonDisabled: {
    backgroundColor: COLORS.gray,
  },
  buttonText: {
    fontSize: 16,
    color: "#FFFFFF",
    fontWeight: "bold",
  },
});

export default TermsConditions;
