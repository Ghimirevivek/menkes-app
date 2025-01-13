import React from "react";
import FiltersHeader from "../header/FiltersHeader";
import { StyleSheet, View, Image, ScrollView } from "react-native";
import { COLORS } from "@/theme";
import { SubmitWorkSheet } from "@/utils/constant";
import UnitList from "../tabs/UnitList";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { StackParamList } from "@/navigator/stack/Stack.typeDefs";

type ShowImagesProps = {
  setModalVisible: (visible: boolean) => void;
};

const ShowImages = ({ setModalVisible }: ShowImagesProps) => {
  const navigation = useNavigation<NavigationProp<StackParamList>>();

  const handleModal = () => {
    navigation.navigate("WorkSheetStepFrom");
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <FiltersHeader
          title="Gallery"
          leftButton="Cancel"
          rightButton=""
          setModalVisible={setModalVisible}
          onRightButtonPress={handleModal}
        />
        <View style={{ marginVertical: 16 }}>
          <Image
            source={require("../../assets/images/detailFrame1.png")}
            style={styles.images}
          />
        </View>
        <View style={{ marginVertical: 16 }}>
          <Image
            source={require("../../assets/images/detailFrame2.png")}
            style={styles.images}
          />
        </View>
        <View style={{ marginVertical: 16 }}>
          <Image
            source={require("../../assets/images/detailFrame3.png")}
            style={styles.images}
          />
        </View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    height: "100%",
    padding: 16,
    backgroundColor: COLORS.white,
  },
  images: {
    width: "100%",
    height: 250,
    borderRadius: 8,
  },
});

export default ShowImages;
