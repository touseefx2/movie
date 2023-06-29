import { StyleSheet } from "react-native";
import theme from "../../../../theme";
import { responsiveFontSize } from "react-native-responsive-dimensions";

export const styles = StyleSheet.create({
  title: {
    fontSize: responsiveFontSize(1.8),
    color: theme.color.headerTitle,
    fontFamily: theme.fonts.fontMedium,
  },
  line: {
    width: "100%",
    height: 1,
    backgroundColor: "rgba(0, 0, 0, 0.11)",
    marginBottom: 20,
    marginTop: 5,
  },
});
