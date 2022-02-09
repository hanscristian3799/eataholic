import React from "react";
import { Text, View, StyleSheet } from "react-native";

import {
  Montserrat_200ExtraLight,
  Montserrat_300Light,
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_600SemiBold,
  Montserrat_700Bold,
} from "@expo-google-fonts/montserrat";

import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";

const MyText = ({
  children,
  weight,
  fontSize,
  color,
  transform,
  numberOfLines,
}) => {
  let [fontsLoaded, error] = useFonts({
    100: Montserrat_200ExtraLight,
    200: Montserrat_300Light,
    300: Montserrat_400Regular,
    400: Montserrat_500Medium,
    500: Montserrat_600SemiBold,
    600: Montserrat_700Bold,
  });

  const styles = StyleSheet.create({
    textStyle: {
      fontFamily: weight ? weight : "300",
      fontSize: fontSize ? fontSize : 14,
      color: color ? color : "#0f0f0f",
      textTransform: transform ? transform : "none",
    },
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <Text
      style={styles.textStyle}
      numberOfLines={numberOfLines ? numberOfLines : 1}
    >
      {children}
    </Text>
  );
};

export default MyText;
