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
});
