import { StyleSheet } from "react-native";
import theme from "../../../../theme";
import { responsiveFontSize } from "react-native-responsive-dimensions";

export const styles = StyleSheet.create({
  title: {
    marginTop: "50%",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    fontSize: responsiveFontSize(2),
    color: "silver",
    fontFamily: theme.fonts.fontMedium,
  },
});
