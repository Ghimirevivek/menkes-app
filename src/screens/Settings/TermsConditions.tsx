import { COLORS, FONTS } from "@/theme";
import React from "react";
import { ScrollView, StyleSheet, Text } from "react-native";

const TermsConditions = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Terms & Conditions</Text>
      <Text style={styles.desc}>
        Lorem Ipsum does not knowingly collect personally identifiable
        information (PII) from persons under the age of 13. If you are under the
        age of 13, please do not provide us with information of any kind
        whatsoever. If you have reason to believe that we may have accidentally
        received information from a child under the age of 13, please contact us
        immediately at legal@wasai.co. If we become aware that we have
        inadvertently received Personal Information from a person under the age
        of 13, we will delete such information from our records.
      </Text>

      <Text style={styles.title}>Information Provided Directly </Text>
      <Text style={styles.desc}>
        We collect information you provide directly to us, such as when you
        request information, create or modify your personal account, request
        Services, subscribe to our Services, complete a Lorem Ipsum form,
        survey, quiz or application, contact customer support, join or enroll
        for an event or otherwise communicate with us in any manner. This
        information may include, without limitation: name, date of birth, e-mail
        address, physical address, business address, phone number, or any other
        personal information you choose to provide.
      </Text>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    padding: 22,
  },
  title: {
    fontSize: 20,
    fontWeight: 700,
    lineHeight: 20,
    fontFamily: FONTS.calibri.bold,
    marginVertical: 16,
    color: COLORS.primaryBlue,
  },
  desc: {
    fontSize: 14,
    fontWeight: 400,
    lineHeight: 20,
    fontFamily: FONTS.calibri.regular,
    color: COLORS.lightgray,
    marginBottom: 10,
  },
});
export default TermsConditions;
