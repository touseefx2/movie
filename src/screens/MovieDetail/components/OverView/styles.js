import { StyleSheet } from "react-native";
import theme from "../../../../theme";
import { responsiveFontSize } from "react-native-responsive-dimensions";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  title: {
    color: theme.color.headerTitle,
    fontFamily: theme.fonts.fontMedium,
    fontSize: responsiveFontSize(2.2),
    textTransform: "capitalize",
  },
  subTitle: {
    color: "#8F8F8F",
    fontFamily: theme.fonts.fontRegular,
    fontSize: responsiveFontSize(1.8),
  },
});
