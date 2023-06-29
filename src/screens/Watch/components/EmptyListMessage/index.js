import React, { memo } from "react";
import { Text } from "react-native";
import { styles } from "./styles";

export default memo(EmptyListMessage);
function EmptyListMessage() {
  return <Text style={styles.title}>No movies found.</Text>;
}
