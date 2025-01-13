import Button from "@/components/Button/Button";
import { COLORS, FONTS } from "@/theme";
import { images } from "@/utils/constant";
import { Image } from "expo-image";
import MapView, { Marker } from "react-native-maps";
import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import ModalWrapper from "@/components/modal/ModalWrapper";
import ShowImages from "@/components/Filters/ShowImages";
import LeftRightIcon from "@/assets/icons/LeftRightIcon";
import ShowMap from "@/components/Filters/ShowMap";
import { useDispatch, useSelector } from "react-redux";
import { closeModal, openModal } from "@/redux/slices/modalSlice";
import AllocatedRequesCallback from "@/components/callBack/AllocatedRequesCallback";

const ProjectInformation = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const dispatch = useDispatch();
  const isModalOpen = useSelector((state: any) => state.modal.isOpen);
  return (
    <View style={styles.outerContainer}>
      <View style={styles.sectionContainer}>
        <Text style={styles.title}>Overview</Text>
        <Text style={styles.desc}>
          Welcome to Bravo, the next chapter at Festival South VMC. The pinnacle
          of creativity and celebration, Bravo's unique gleaming towers rise
          above a vibrant streetscape only steps from the VMC transit hub. This
          is a place where you can put down roots and feel at home, and with so
          much going on around you, every day you can experience something new
          and different.
        </Text>
        <Text style={styles.readText}>Read More</Text>
      </View>

      <View style={styles.sectionContainer}>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <Text style={styles.title}>Gallery</Text>
        </TouchableOpacity>
        <View style={styles.galleryContainer}>
          {images.map((item) => (
            <View key={item.id} style={styles.galleryItem}>
              <Image source={item.image} style={styles.galleryImage} />
              {item.duration && (
                <Text style={styles.duration}>{item.duration}</Text>
              )}
            </View>
          ))}
        </View>
      </View>

      <View style={styles.sectionContainer}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text style={styles.title}>Location</Text>
          <TouchableOpacity
            onPress={() => dispatch(openModal())}
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 20,
            }}
          >
            <LeftRightIcon />
            <Text style={styles.directionsText}>Direction</Text>
          </TouchableOpacity>
        </View>
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
            {/* Add a marker to show the location */}
            <Marker coordinate={{ latitude: 43.8979, longitude: -78.8666 }} />
          </MapView>
        </View>
        <Text style={styles.locationText}>
          2375 Ritson Rd N, Oshawa, Ontario, L1H 0P5
        </Text>
      </View>

      <ModalWrapper
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <ShowImages setModalVisible={(value) => setModalVisible(value)} />
      </ModalWrapper>

      <ModalWrapper
        visible={isModalOpen}
        onRequestClose={() => dispatch(closeModal())}
      >
        <ShowMap />
      </ModalWrapper>
    </View>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    backgroundColor: COLORS.formBackground,
  },

  sectionContainer: {
    padding: 16,
    backgroundColor: COLORS.white,
    marginVertical: 8,
    paddingBottom: 30,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    lineHeight: 28,
    fontFamily: FONTS.calibri.bold,
    color: COLORS.primaryBlue,
    marginBottom: 20,
  },
  desc: {
    fontSize: 16,
    fontWeight: "400",
    lineHeight: 24,
    fontFamily: FONTS.calibri.regular,
    color: COLORS.gray,
    marginBottom: 10,
  },
  readText: {
    fontSize: 16,
    fontWeight: "700",
    lineHeight: 24,
    fontFamily: FONTS.calibri.bold,
    color: COLORS.primary,
    marginVertical: 6,
  },
  galleryContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  galleryItem: {
    width: "30%",
    aspectRatio: 1,
    marginBottom: 8,
    borderRadius: 8,
    overflow: "hidden",
    position: "relative",
  },
  galleryImage: {
    width: "100%",
    height: "100%",
    borderRadius: 8,
  },
  duration: {
    position: "absolute",
    bottom: 8,
    right: 8,
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    color: COLORS.white,
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
    fontSize: 12,
    fontWeight: "600",
  },
  moreOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    justifyContent: "center",
    alignItems: "center",
  },
  moreText: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: "700",
  },

  locationContainer: {
    position: "relative",
    marginBottom: 8,
  },
  mapImage: {
    width: "100%",
    height: 200, // Adjust the height as needed
    borderRadius: 8,
  },

  directionsText: {
    color: COLORS.primary, // Replace with your COLORS.white
    fontSize: 16,
    fontWeight: "700",
    lineHeight: 24,
    fontFamily: FONTS.calibri.bold,
  },
  locationText: {
    fontSize: 16,
    color: COLORS.primaryBlue,
    fontWeight: 400,
    lineHeight: 24,
    fontFamily: FONTS.calibri.regular, // Replace with your COLORS.gray
    marginVertical: 16,
  },
  modalOverlay: {
    flex: 1,
    marginTop: 40,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
});

export default ProjectInformation;
