import { StyleSheet } from "react-native";
import theme from "../../theme/index";
import { responsiveFontSize } from "react-native-responsive-dimensions";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  container1: {
    flex: 1.8,
    backgroundColor: theme.color.background2,
    justifyContent: "flex-end",
  },
  container2: {
    flex: 1,
    backgroundColor: theme.color.background,
  },
  scrollContent: { paddingHorizontal: 20, paddingVertical: 15 },
  title: {
    color: theme.color.headerTitle,
    fontFamily: theme.fonts.fontMedium,
    fontSize: responsiveFontSize(2.2),
    textTransform: "capitalize",
  },
  sep: {
    width: "100%",
    height: 0.5,
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    alignSelf: "center",
    marginVertical: 20,
  },
  genresContainer: { flexDirection: "row", flexWrap: "wrap" },
});
