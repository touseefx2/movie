import { Platform, StyleSheet } from "react-native";
import theme from "../../theme/index";
import {
  responsiveFontSize,
  responsiveHeight,
} from "react-native-responsive-dimensions";

export const styles = StyleSheet.create({
  headerConatainer: {
    backgroundColor: theme.color.background,
    height: responsiveHeight(7),
    width: "100%",
    paddingHorizontal: 15,
    overflow: "hidden",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    alignSelf: "center",
    marginTop: responsiveHeight(1.5),
  },

  headerTitle: {
    fontSize: responsiveFontSize(2.4),
    fontFamily: theme.fonts.fontMedium,
    color: theme.color.headerTitle,
    textTransform: "capitalize",
  },
  icon: {
    width: responsiveFontSize(3.2),
    height: responsiveFontSize(3.2),
    resizeMode: "contain",
  },

  searchBarConatainer: {
    backgroundColor: theme.color.background2,
    width: "92%",
    paddingHorizontal: 15,
    overflow: "hidden",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    alignSelf: "center",
    marginTop: responsiveHeight(1.5),
    borderRadius: 30,
  },
  input: {
    width: "78%",
    fontSize: responsiveFontSize(1.9),
    fontFamily: theme.fonts.fontRegular,
    color: theme.color.headerTitle,
    height: Platform.OS == "ios" ? responsiveHeight(7) : undefined,
  },
  icon2: {
    width: responsiveFontSize(3.9),
    height: responsiveFontSize(3.9),
  },
});
