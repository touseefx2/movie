import { StyleSheet } from "react-native";
import theme from "../../../../theme";
import {
  responsiveFontSize,
  responsiveHeight,
} from "react-native-responsive-dimensions";

const borderRadius = 10;
export const styles = StyleSheet.create({
  container: {
    width: "80%",
    bottom: 30,
    alignSelf: "center",
  },
  title: {
    color: "white",
    fontFamily: theme.fonts.fontMedium,
    fontSize: responsiveFontSize(2.2),
    textTransform: "capitalize",
    textAlign: "center",
  },
  button: {
    width: "100%",
    height: responsiveHeight(7.5),
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    paddingHorizontal: 15,
  },
  buttonTitle: {
    fontFamily: theme.fonts.fontBold,
    fontSize: responsiveFontSize(2),
    textTransform: "capitalize",
    color: "white",
  },
});
