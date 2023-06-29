import React, { memo } from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";

export default memo(OverView);
function OverView({ overview }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>overview</Text>
      <Text style={styles.subTitle}>{overview}</Text>
    </View>
  );
}
