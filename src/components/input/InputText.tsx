import React, { useRef, useState } from "react";
import {
  Animated,
  TextInput,
  Text,
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Ionicons from "@expo/vector-icons/Ionicons";
import { COLORS } from "@/theme";
import { getTextInputColor } from "@/utils/utils";

// Define the type for the props

interface AnimatedTextInputProps {
  label: string;
  value: string;
  onChangeText: (text: any) => void;
  onPress?: () => void;
  editable?: boolean;
  keyboardType?: "default" | "email-address" | "numeric" | "phone-pad";
  secureTextEntry?: boolean;
  autoCapitalize?: "none" | "sentences" | "words" | "characters";
  withError?: boolean;
  error?: boolean;
  apiFailed?: boolean;
  inputBackground?: string;
  labelBackground?: string;
  borderless?: boolean;
  labelColor?: string;
}

const AnimatedTextInput: React.FC<AnimatedTextInputProps> = ({
  onPress = () => {},
  editable = true,
  label,
  value,
  onChangeText,
  keyboardType = "default",
  secureTextEntry = false,
  autoCapitalize = "none",
  withError = false,
  error = false,
  apiFailed = false,
  inputBackground = "#fff",
  labelBackground = "#fff",
  borderless = false,
  labelColor = COLORS.lightgray,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const animatedLabelPosition = useRef(
    new Animated.Value(value ? 1 : 0)
  ).current;
  const inputRef = useRef<TextInput>(null);

  const handleFocus = () => {
    setIsFocused(true);
    animateLabel(1);
  };

  const handleBlur = () => {
    setIsFocused(false);
    if (!value) {
      animateLabel(0);
    }
  };

  const animateLabel = (toValue: number) => {
    Animated.timing(animatedLabelPosition, {
      toValue,
      duration: 200,
      useNativeDriver: false,
    }).start();
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const labelStyle = {
    top: animatedLabelPosition.interpolate({
      inputRange: [0, 1],
      outputRange: [26, 8],
    }),
    fontSize: animatedLabelPosition.interpolate({
      inputRange: [0, 1],
      outputRange: [16, 12],
    }),
    backgroundColor: labelBackground, // Apply label background color
    color: labelColor || getTextInputColor({ value, error, isFocused }),
  };

  return (
    <TouchableWithoutFeedback onPress={() => inputRef.current?.focus()}>
      <View
        style={[
          styles.inputContainer,
          {
            backgroundColor: editable
              ? inputBackground
              : COLORS.inputBackground,
            borderColor: borderless
              ? "transparent"
              : getTextInputColor({
                  value,
                  error,
                  isFocused,
                  withError,
                }), // Conditional border based on borderless
          },
        ]}
      >
        <Animated.Text
          style={[
            styles.floatingLabel,
            labelStyle,
            {
              backgroundColor: editable
                ? inputBackground
                : COLORS.inputBackground,
            },
          ]}
        >
          {label}
        </Animated.Text>
        <View style={styles.row}>
          <TextInput
            ref={inputRef}
            style={[
              styles.input,
              { color: editable ? COLORS.black : COLORS.lightgray },
            ]}
            value={value}
            onChangeText={onChangeText}
            onFocus={handleFocus}
            onBlur={handleBlur}
            keyboardType={keyboardType}
            secureTextEntry={secureTextEntry && !isPasswordVisible}
            autoCapitalize={autoCapitalize}
            editable={editable}
            onPress={onPress}
          />

          {apiFailed ? (
            <Ionicons
              name={"alert-circle"}
              size={16}
              color={getTextInputColor({ value, error, isFocused })}
            />
          ) : (
            secureTextEntry && (
              <TouchableOpacity
                onPress={togglePasswordVisibility}
                style={styles.iconContainer}
              >
                <MaterialIcons
                  name={isPasswordVisible ? "visibility" : "visibility-off"}
                  size={20}
                  color={COLORS.gray}
                />
              </TouchableOpacity>
            )
          )}
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    position: "relative",
    backgroundColor: "#fff",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: COLORS.formBackground,
    paddingHorizontal: 12,
    paddingVertical: 12,
    marginBottom: 14,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    flex: 1,
    height: 40,
    marginTop: 8,
    fontSize: 16,
  },
  floatingLabel: {
    position: "absolute",
    left: 8,
    zIndex: 1,
    paddingHorizontal: 4,
  },
  inputFocused: {
    borderColor: COLORS.primary,
  },
  iconContainer: {
    marginLeft: 8,
  },
});

export default AnimatedTextInput;
