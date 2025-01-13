import { COLORS, FONTS } from "@/theme";
import DateTimePicker from "@react-native-community/datetimepicker";
import Entypo from "@expo/vector-icons/Entypo";
import React from "react";
import {
  Text,
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Platform,
} from "react-native";
import AnimatedTextInput from "@/components/input/InputText";
import PasswordCloseIcon from "@/assets/icons/PasswordCloseIcon";

type ProfileDetailsProps = {
  formState: {
    firstName: string;
    middleName: string;
    lastName: string;
    phone: string;
    birthday: string;
  };
  updateFormState: (
    field: keyof ProfileDetailsProps["formState"],
    value: string
  ) => void;
};

const ProfileDetails: React.FC<ProfileDetailsProps> = ({
  formState,
  updateFormState,
}) => {
  const [isDatePickerVisible, setDatePickerVisibility] = React.useState(false);
  const [selectedDate, setSelectedDate] = React.useState<Date | null>(
    new Date(formState.birthday || Date.now())
  );

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }).format(date);
  };

  const handleDateChange = (event: any, date?: Date) => {
    if (Platform.OS === "android") hideDatePicker();
    if (date) {
      setSelectedDate(date);
      updateFormState("birthday", formatDate(date)); // Store the formatted date
    }
  };

  const handleAlphabetOnlyInput = (text: string) => {
    return text.replace(/[^a-zA-Z\s]/g, "");
  };

  return (
    <TouchableWithoutFeedback>
      <View>
        <Text style={styles.sectionTitle}>Profile Details</Text>
        <AnimatedTextInput
          label={"First Name"}
          value={formState.firstName}
          onChangeText={(text: string) =>
            updateFormState("firstName", handleAlphabetOnlyInput(text))
          }
        />
        <AnimatedTextInput
          label={"Middle Name (optional)"}
          value={formState.middleName}
          onChangeText={(text: string) =>
            updateFormState("middleName", handleAlphabetOnlyInput(text))
          }
        />
        <AnimatedTextInput
          label={"Last Name"}
          value={formState.lastName}
          onChangeText={(text: string) =>
            updateFormState("lastName", handleAlphabetOnlyInput(text))
          }
        />
        <AnimatedTextInput
          label={"Phone"}
          value={formState.phone}
          onChangeText={(text: string) => {
            const numericText = text.replace(/[^0-9]/g, "");
            updateFormState("phone", numericText);
          }}
          keyboardType="numeric"
        />
        {formState.phone.length !== 10 && (
          <View
            style={{
              marginBottom: 14,
              marginLeft: 8,
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <PasswordCloseIcon />
              <Text
                style={[
                  styles.errorText,
                  { marginLeft: formState.phone.length ? 12 : 8 },
                ]}
              >
                Enter a valid Phone
              </Text>
            </View>
          </View>
        )}
        <AnimatedTextInput
          label={"Birthday"}
          value={selectedDate ? formatDate(selectedDate) : ""}
          onChangeText={() => {}}
          onPress={showDatePicker} // Show the date picker when the field is pressed
        />
        {isDatePickerVisible && (
          <DateTimePicker
            value={selectedDate || new Date()}
            mode="date"
            display="default"
            onChange={(event, date) => {
              handleDateChange(event, date);
              if (date) {
                hideDatePicker(); // Hide the date picker after the user selects a date
              }
            }}
          />
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  sectionTitle: {
    fontSize: 24,
    fontWeight: "700",
    lineHeight: 30,
    fontFamily: FONTS.calibri.bold,
    marginBottom: 16,
    marginTop: 20,
    color: COLORS.black,
  },
  errorText: {
    color: "black",
    fontSize: 12,
    fontWeight: 400,
    lineHeight: 16,
  },
});

export default ProfileDetails;
