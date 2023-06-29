import { StyleSheet } from "react-native";
import theme from "../../../../theme";
import { responsiveFontSize } from "react-native-responsive-dimensions";

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 16,
    marginRight: 10,
    marginTop: 8,
  },
  title: {
    color: "white",
    fontFamily: theme.fonts.fontBold,
    fontSize: responsiveFontSize(1.75),
  },
});
