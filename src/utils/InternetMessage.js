import React, { memo } from "react";
import { View, Text } from "react-native";
import theme from "../theme/index";
import { responsiveFontSize } from "react-native-responsive-dimensions";

export default InternetMessage;
function InternetMessage(props) {
  const color = props.color || "red";
  const title = props.headerTitle || "";

  return (
    <View
      style={[
        title === "MovieDetail"
          ? { width: "100%", padding: 1 }
          : { width: "100%", padding: 2, backgroundColor: color },
      ]}
    >
      <Text
        style={{
          alignSelf: "center",
          color: title === "MovieDetail" ? "red" : "white",
          fontSize: responsiveFontSize(1.85),
          fontFamily: theme.fonts.fontMedium,
        }}
      >
        No internet connection
      </Text>
    </View>
  );
}
