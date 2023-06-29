import { StyleSheet } from "react-native";
import theme from "../../theme/index";
import { responsiveHeight } from "react-native-responsive-dimensions";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.color.background,
  },
  listContainer: {
    flex: 1,
    backgroundColor: theme.color.background2,
    marginTop: responsiveHeight(3),
  },
  listContainer2: { paddingHorizontal: 15, paddingVertical: 25 },
});
