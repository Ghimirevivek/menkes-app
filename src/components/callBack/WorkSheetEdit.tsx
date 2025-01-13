import FiltersHeader from "@/components/header/FiltersHeader";
import AnimatedTextInput from "@/components/input/InputText";
import { COLORS } from "@/theme";
import React, { useState } from "react";
import { StyleSheet, View, Platform } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import ErrorNotificationCard from "../cards/ErrorNotificationCard";

type ProjectFilterProps = {
  setModalVisible: (visible: boolean) => void;
};

const WorkSheetEdit = ({ setModalVisible }: ProjectFilterProps) => {
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [dobError, setDobError] = useState(false); // Error state for DOB
  const [isDatePickerVisible, setDatePickerVisibility] = React.useState(false);
  const [selectedDate, setSelectedDate] = React.useState<Date | null>(
    new Date(dateOfBirth || Date.now())
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

  const calculateAge = (dob: Date) => {
    const today = new Date();
    let age = today.getFullYear() - dob.getFullYear();
    const monthDifference = today.getMonth() - dob.getMonth();
    if (
      monthDifference < 0 ||
      (monthDifference === 0 && today.getDate() < dob.getDate())
    ) {
      age--;
    }
    return age;
  };

  const handleDateChange = (event: any, selectedDate?: Date) => {
    if (Platform.OS === "android") hideDatePicker();
    if (selectedDate) {
      setSelectedDate(selectedDate);
      const age = calculateAge(selectedDate);
      if (age < 19) {
        setDobError(true);
      } else {
        setDobError(false);
      }
      setDateOfBirth(formatDate(selectedDate));
    }
  };

  return (
    <View style={styles.container}>
      <FiltersHeader
        title="Purchaser Personal Details"
        leftButton="Close"
        setModalVisible={setModalVisible}
      />
      <View style={{ padding: 16 }}>
        <AnimatedTextInput
          label="First Name"
          value={firstName}
          onChangeText={(value) => setFirstName(value)}
          inputBackground={COLORS.inputBackground}
          labelBackground={COLORS.inputBackground}
          borderless={true}
        />
        <AnimatedTextInput
          label="Middle Name"
          value={middleName}
          onChangeText={(value) => setMiddleName(value)}
          inputBackground={COLORS.inputBackground}
          labelBackground={COLORS.inputBackground}
          borderless={true}
        />
        <AnimatedTextInput
          label="Last Name"
          value={lastName}
          onChangeText={(value) => setLastName(value)}
          inputBackground={COLORS.inputBackground}
          labelBackground={COLORS.inputBackground}
          borderless={true}
        />

        <AnimatedTextInput
          label={"Birthday"}
          value={selectedDate ? formatDate(selectedDate) : ""}
          onChangeText={handleDateChange}
          onPress={showDatePicker}
          withError={!isDatePickerVisible}
          error={!isDatePickerVisible}
        />
        {isDatePickerVisible && (
          <View style={{ marginBottom: 6 }}>
            <DateTimePicker
              value={selectedDate || new Date()}
              mode="date"
              display="default"
              onChange={handleDateChange}
            />
          </View>
        )}

        {dobError && (
          <View style={{ marginVertical: 12 }}>
            <ErrorNotificationCard message="You must be 19 years old or older" />
          </View>
        )}

        <AnimatedTextInput
          label="Phone"
          value={email}
          onChangeText={(value) => setEmail(value)}
          keyboardType="numeric"
          inputBackground={COLORS.inputBackground}
          labelBackground={COLORS.inputBackground}
          borderless={true}
        />

        <AnimatedTextInput
          label="Phone"
          value={phoneNumber}
          onChangeText={(value) => setPhoneNumber(value)}
          keyboardType="numeric"
          inputBackground={COLORS.inputBackground}
          labelBackground={COLORS.inputBackground}
          borderless={true}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.formBackground,
  },
  errorText: {
    color: COLORS.error,
    marginTop: 8,
    fontSize: 14,
  },
});

export default WorkSheetEdit;
