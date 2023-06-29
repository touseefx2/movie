import React, { memo } from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";

export default memo(GenresCard);
function GenresCard({ item, color }) {
  const name = item.name || "unknown";
  return (
    <View style={[styles.container, { backgroundColor: color }]}>
      <Text style={styles.title}>{name}</Text>
    </View>
  );
}
