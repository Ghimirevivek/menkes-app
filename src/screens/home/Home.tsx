import FileIcon from "@/assets/icons/FileIcon";
import OptionCard from "@/components/cards/OptionCard";
import WelcomeSection from "@/components/header/WelcomeSection";
import { setUserNull } from "@/redux/slices/authSlice";
import { setStep } from "@/redux/slices/stepSlice";
import { COLORS, FONTS } from "@/theme";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import Swiper from "react-native-swiper";
import Feather from "@expo/vector-icons/Feather";
import Octicons from "@expo/vector-icons/Octicons";
import { useDispatch, useSelector } from "react-redux";
import { StackParamList } from "@/navigator/stack/Stack.typeDefs";
import Button from "@/components/Button/Button";
import ModalWrapper from "@/components/modal/ModalWrapper";
import ProjectFilter from "@/components/Filters/ProjectFilter";
import AllocatedRequesCallback from "@/components/callBack/AllocatedRequesCallback";
import { closeModal } from "@/redux/slices/modalSlice";
import SearchModal from "@/components/modal/SearchModal";

const Home = () => {
  const navigation = useNavigation<NavigationProp<StackParamList>>();
  const dispatch = useDispatch();
  const isModalOpen = useSelector((state: any) => state.modal.isOpen);

  const [viewMode, setViewMode] = useState("project");
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <ScrollView style={styles.container}>
      <View>
        <Swiper
          style={styles.swiper}
          showsPagination={false}
          autoplay={true}
          autoplayTimeout={3}
        >
          {[...Array(3)].map((_, index) => (
            <View style={styles.promotionCard} key={index}>
              <Image
                source={{
                  uri: `https://picsum.photos/seed/picsum${index}/200/300`,
                }}
                style={styles.promotionImage}
              />
              <View style={styles.promotionContent}>
                <Text style={styles.promotionTitle}>
                  Summer Promotions {index + 1}
                </Text>
                <Text style={styles.promotionDescription}>
                  Lorem Ipsum has been the industry's standard dummy text ever
                  since the 1500s, when an unknown printer took
                </Text>
                <Text style={styles.validDate}>Valid until Nov 11, 2024</Text>
              </View>
            </View>
          ))}
        </Swiper>
      </View>

      <WelcomeSection title="Welcome David" text="Menkes ID: 15550" />

      <View style={styles.options}>
        <OptionCard
          onPress={() => navigation.navigate("AllocatedUnits")}
          icon={<Feather name="folder" size={22} color={COLORS.primary} />}
          label="Allocated Units"
        />
        <OptionCard
          onPress={() => navigation.navigate("FirmUnits")}
          icon={
            <Octicons name="check-circle" size={22} color={COLORS.primary} />
          }
          label="Firm Units"
          badge="1"
        />
        <OptionCard
          onPress={() => navigation.navigate("WorkSheetUnits")}
          icon={<FileIcon />}
          label="Worksheets"
        />
      </View>

      <View style={{ padding: 16 }}>
        <Button type="primary" label="Submit Worksheet" icon="plus" />
      </View>

      <ModalWrapper
        visible={isModalOpen}
        onRequestClose={() => dispatch(closeModal())}
        overlayStyle={{
          marginTop: 0,
        }}
      >
        <SearchModal />
      </ModalWrapper>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.formBackground,
  },
  swiper: {
    height: 280,
  },
  promotionCard: {
    margin: 16,
    borderRadius: 8,
    position: "relative",
    marginHorizontal: 10,
  },
  promotionImage: {
    width: "100%",
    height: 260,
    borderRadius: 8,
  },
  promotionContent: {
    padding: 16,
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "90%",
  },
  promotionTitle: {
    fontSize: 16,
    fontWeight: 700,
    lineHeight: 24,
    fontFamily: FONTS.calibri.bold,
    marginBottom: 4,
    color: COLORS.white,
  },
  promotionDescription: {
    textAlign: "left",
    fontSize: 14,
    fontWeight: 400,
    lineHeight: 20,
    fontFamily: FONTS.calibri.regular,
    // marginBottom: 8,
    color: COLORS.white,
  },
  validDate: {
    width: "45%",
    backgroundColor: COLORS.white,
    borderRadius: 50,
    paddingVertical: 5,
    alignItems: "center",
    marginTop: 10,
    textAlign: "center",
    fontSize: 12,
    fontWeight: 400,
    lineHeight: 20,
    fontFamily: FONTS.calibri.regular,
  },
  options: {
    paddingHorizontal: 16,
  },
  modalOverlay: {
    flex: 1,
    // marginTop: 40,
    justifyContent: "flex-end",
    backgroundColor: "#FFF",
  },
});

export default Home;
