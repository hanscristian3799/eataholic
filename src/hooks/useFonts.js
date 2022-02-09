import * as Font from "expo-font";

export default useFonts = async () => {
  await Font.loadAsync({
    Montserrat200: require("../../assets/fonts/Montserrat-ExtraLight.ttf"),
    Montserrat300: require("../../assets/fonts/Montserrat-Light.ttf"),
    Montserrat400: require("../../assets/fonts/Montserrat-Regular.ttf"),
    Montserrat500: require("../../assets/fonts/Montserrat-Medium.ttf"),
    Montserrat600: require("../../assets/fonts/Montserrat-SemiBold.ttf"),
    Montserrat700: require("../../assets/fonts/Montserrat-Bold.ttf"),
  });
};
