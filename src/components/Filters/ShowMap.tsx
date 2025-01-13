import React from "react";
import FiltersHeader from "../header/FiltersHeader";
import { StyleSheet, View, Image, ScrollView } from "react-native";
import { COLORS } from "@/theme";
import MapView, { Marker } from "react-native-maps";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { StackParamList } from "@/navigator/stack/Stack.typeDefs";
import { useDispatch } from "react-redux";
import { closeModal } from "@/redux/slices/modalSlice";

const ShowMap = () => {
  const dispatch = useDispatch();

  const handleCloseModal = () => {
    dispatch(closeModal()); // Dispatch action to close the modal
  };

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <FiltersHeader
          title="Gallery"
          leftButton="Cancel"
          rightButton="Get Direction"
          setModalVisible={handleCloseModal}
          onRightButtonPress={handleCloseModal}
        />

        <View style={styles.locationContainer}>
          <MapView
            style={styles.mapImage}
            initialRegion={{
              latitude: 43.8979,
              longitude: -78.8666,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
          >
            <Marker coordinate={{ latitude: 43.8979, longitude: -78.8666 }} />
          </MapView>
        </View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    height: "100%",

    backgroundColor: COLORS.white,
  },

  locationContainer: {
    position: "relative",
    marginBottom: 8,
  },
  mapImage: {
    width: "100%",
    height: 700, // Adjust the height as needed
    borderRadius: 8,
  },
});

export default ShowMap;
