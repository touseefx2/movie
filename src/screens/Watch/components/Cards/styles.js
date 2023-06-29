import { StyleSheet } from "react-native";
import theme from "../../../../theme";
import { responsiveFontSize } from "react-native-responsive-dimensions";

const borderRadius = 10;
export const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: "grey",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
  },

  image: {
    flex: 1,
    width: "100%",
    height: "100%",
    borderRadius: borderRadius,
  },
  imageLoader: {
    width: "30%",
    height: "30%",
  },
  textContainer: {
    width: "100%",
    position: "absolute",
    bottom: 10,
    paddingHorizontal: 12,
  },
  title: {
    color: "white",
    fontFamily: theme.fonts.fontMedium,
  },
  mainContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  icon: {
    width: responsiveFontSize(2.8),
    height: responsiveFontSize(2.8),
    resizeMode: "contain",
  },
});
