import { openModal } from "@/redux/slices/modalSlice";
import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useDispatch } from "react-redux";

const RightHeaderRequest = ({ navigation }: any) => {
  const dispatch = useDispatch();

  const handleIconPress = () => {
    dispatch(openModal()); // Dispatch action to open the modal
  };
  return (
    <AntDesign
      onPress={handleIconPress}
      name="questioncircleo"
      size={24}
      color="#fff"
    />
  );
};

export default RightHeaderRequest;
