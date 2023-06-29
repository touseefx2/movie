import React, { memo } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import theme from "../../theme";
import utils from "../../utils";
import { responsiveFontSize } from "react-native-responsive-dimensions";

export default memo(StackHeader);
function StackHeader({ props, headerTitle }) {
  const title = headerTitle || "";

  const renderTitle = () => {
    return (
      <View
        style={{
          width: "86%",
        }}
      >
        <Text
          numberOfLines={1}
          ellipsizeMode="tail"
          style={[
            styles.headerTitle,
            title === "MovieDetail" && { color: "white" },
          ]}
        >
          {title == "MovieDetail" ? "watch" : title}
        </Text>
      </View>
    );
  };

  const renderBackIcon = () => {
    return (
      <TouchableOpacity
        style={{ padding: 5 }}
        activeOpacity={0.7}
        onPress={() => props.navigation.goBack()}
      >
        <utils.vectorIcon.MaterialIcons
          name="arrow-back-ios"
          color={title === "MovieDetail" ? "white" : theme.color.headerTitle}
          size={responsiveFontSize(3.2)}
        />
      </TouchableOpacity>
    );
  };

  return (
    <View
      style={[
        styles.headerConatainer,
        title === "MovieDetail" && {
          position: "absolute",
          top: theme.window.STATUSBAR_HEIGHT,
          backgroundColor: "transparent",
        },
      ]}
    >
      {renderBackIcon()}
      {renderTitle()}
    </View>
  );
}
