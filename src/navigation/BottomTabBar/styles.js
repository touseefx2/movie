import React from "react";
import { View, Text } from "react-native";
import {
  responsiveHeight,
  responsiveFontSize,
} from "react-native-responsive-dimensions";
import utils from "../../utils";
import theme from "../../theme";

const iconSize = responsiveFontSize(3.8);
const focusIconColor = "#FFFFFF";
const unFocusIconColor = "#827D88";
const focusTextStyle = {
  fontSize: responsiveFontSize(1.3),
  fontFamily: theme.fonts.fontBold,
  textTransform: "capitalize",
  color: focusIconColor,
};
const unFocusTextStyle = {
  fontSize: responsiveFontSize(1.4),
  fontFamily: theme.fonts.fontMedium,
  textTransform: "capitalize",
  color: unFocusIconColor,
};
const tabBarStyle = {
  backgroundColor: theme.color.footerBackground,
  borderTopRightRadius: 27,
  borderTopLeftRadius: 27,
  height: responsiveHeight(9),
};

const dashboardIcon = {
  tabBarIcon: ({ focused }) => (
    <View style={{ alignItems: "center", justifyContent: "center" }}>
      <utils.vectorIcon.Entypo
        name="grid"
        size={iconSize}
        color={focused ? focusIconColor : unFocusIconColor}
      />
      <Text
        numberOfLines={1}
        ellipsizeMode="tail"
        style={focused ? focusTextStyle : unFocusTextStyle}
      >
        dashboard
      </Text>
    </View>
  ),
};

const watchIcon = {
  tabBarIcon: ({ focused }) => (
    <View style={{ alignItems: "center", justifyContent: "center" }}>
      <utils.vectorIcon.Entypo
        name="youtube"
        size={iconSize}
        color={focused ? focusIconColor : unFocusIconColor}
      />
      <Text
        numberOfLines={1}
        ellipsizeMode="tail"
        style={focused ? focusTextStyle : unFocusTextStyle}
      >
        watch
      </Text>
    </View>
  ),
};

const mediaLibraryIcon = {
  tabBarIcon: ({ focused }) => (
    <View style={{ alignItems: "center", justifyContent: "center" }}>
      <utils.vectorIcon.Ionicons
        name="folder-open"
        size={iconSize}
        color={focused ? focusIconColor : unFocusIconColor}
      />
      <Text
        numberOfLines={1}
        ellipsizeMode="tail"
        style={focused ? focusTextStyle : unFocusTextStyle}
      >
        media library
      </Text>
    </View>
  ),
};

const moreIcon = {
  tabBarIcon: ({ focused }) => (
    <View style={{ alignItems: "center", justifyContent: "center" }}>
      <utils.vectorIcon.Feather
        name="menu"
        size={iconSize}
        color={focused ? focusIconColor : unFocusIconColor}
      />
      <Text
        numberOfLines={1}
        ellipsizeMode="tail"
        style={focused ? focusTextStyle : unFocusTextStyle}
      >
        more
      </Text>
    </View>
  ),
};

export const styles = {
  tabBarStyle,
  dashboardIcon,
  watchIcon,
  mediaLibraryIcon,
  moreIcon,
};
