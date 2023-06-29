import React, { memo } from "react";
import { TouchableOpacity, View, Text, Alert } from "react-native";
import { styles } from "./styles";
import { responsiveFontSize } from "react-native-responsive-dimensions";
import theme from "../../../../theme";
import moment from "moment";
import utils from "../../../../utils";

export default memo(ImageContent);
function ImageContent({ release_date, setIsShowTrailer, isInternet }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        in theaters {moment(release_date).format("MMMM DD, YYYY")}
      </Text>

      <TouchableOpacity
        activeOpacity={0.9}
        style={[
          styles.button,
          { backgroundColor: theme.color.buttonBackground },
        ]}
        onPress={() => {
          if (isInternet) {
          } else {
            Alert.alert("", "Please connect internet");
          }
        }}
      >
        <Text numberOfLines={1} ellipsizeMode="tail" style={styles.buttonTitle}>
          Get Tickets
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        activeOpacity={0.9}
        style={[
          styles.button,
          {
            backgroundColor: "transparent",
            borderWidth: 1,
            borderColor: theme.color.buttonBackground,
          },
        ]}
        onPress={() => {
          if (isInternet) {
            setIsShowTrailer(true);
          } else {
            Alert.alert("", "Please connect internet");
          }
        }}
      >
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <utils.vectorIcon.Entypo
            name="controller-play"
            size={responsiveFontSize(3)}
            color={"white"}
            style={{ marginRight: 5 }}
          />
          <Text
            numberOfLines={1}
            ellipsizeMode="tail"
            style={styles.buttonTitle}
          >
            watch trailer
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
