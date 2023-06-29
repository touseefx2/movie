import React, { memo } from "react";
import { Text, View } from "react-native";
import { styles } from "./styles";

export default memo(ListHeader);
function ListHeader() {
  return (
    <View style={{ width: "100%" }}>
      <Text numberOfLines={1} ellipsizeMode="tail" style={styles.title}>
        Top Results
      </Text>
      <View style={styles.line} />
    </View>
  );
}
