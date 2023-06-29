import { StyleSheet } from "react-native";
import { responsiveFontSize } from "react-native-responsive-dimensions";
import theme from "../../../../theme";

export const styles = StyleSheet.create({
  modalView: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.9)",
  },
  headerContainer: {
    position: "absolute",
    top: theme.window.APPBAR_HEIGHT + 10,
    right: 15,
  },
  button: {
    backgroundColor: theme.color.buttonBackground,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
  buttonTitle: {
    fontSize: responsiveFontSize(1.9),
    color: "white",
    fontFamily: theme.fonts.fontBold,
  },
});
