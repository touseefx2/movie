import React, { memo } from "react";
import { View } from "react-native";
import { styles } from "./styles";

export default memo(ItemSeparatorView);
function ItemSeparatorView() {
  return <View style={styles.sep} />;
}
