// Header.tsx
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { COLORS, FONTS } from '@/theme';

type HeaderProps = {
  setModalVisible: (visible: boolean) => void;
  title: string;
  subtitle?: string;
  leftButton?: string | 'Close';
  rightButton?: string | 'reset';
  onRightButtonPress?: () => void;
};

const FiltersHeader = ({
  setModalVisible,
  title,
  subtitle,
  leftButton,
  rightButton = 'Reset',
  onRightButtonPress,
}: HeaderProps) => (
  <View style={styles.header}>
    <TouchableOpacity onPress={() => setModalVisible(false)}>
      <Text style={styles.headerButton}>{leftButton}</Text>
    </TouchableOpacity>
    <View>
      <Text style={styles.headerTitle}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
    <TouchableOpacity onPress={onRightButtonPress}>
      <Text style={styles.headerButton}>{rightButton}</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  header: {
    paddingTop: 20,
    paddingHorizontal: 18,
    backgroundColor: COLORS.white,
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerButton: {
    fontSize: 16,
    fontWeight: 400,
    color: COLORS.primary,
    fontFamily: FONTS.calibri.regular,
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: 700,
    color: COLORS.black,
    fontFamily: FONTS.calibri.bold,
  },
  subtitle: {
    fontSize: 14,
    fontWeight: 400,
    lineHeight: 20,
    color: COLORS.gray,
    textAlign: 'center',
    fontFamily: FONTS.calibri.regular,
  },
});

export default FiltersHeader;
