import { COLORS } from '@/theme';
import React from 'react';
import { Modal, View, StyleSheet } from 'react-native';

type ModalWrapperProps = {
  visible: boolean;
  onRequestClose: () => void;
  children: React.ReactNode;
  animationType?: 'none' | 'slide' | 'fade';
  overlayStyle?: object; // Optional styles for the overlay
};

const ModalWrapper: React.FC<ModalWrapperProps> = ({
  visible,
  onRequestClose,
  children,
  animationType = 'slide',
  overlayStyle = {},
}) => {
  return (
    <Modal
      animationType={animationType}
      transparent={true}
      visible={visible}
      onRequestClose={onRequestClose}
    >
      <View style={[styles.modalOverlay, overlayStyle]}>{children}</View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    marginTop: 20,
    justifyContent: 'flex-end',
    backgroundColor: COLORS.transparent,
  },
});

export default ModalWrapper;
