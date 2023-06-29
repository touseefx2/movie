import React, { memo } from "react";
import { TouchableOpacity, Image, View, Text } from "react-native";
import { styles } from "./styles";
import {
  responsiveHeight,
  responsiveFontSize,
} from "react-native-responsive-dimensions";
import theme from "../../../../theme";
import ProgressiveFastImage from "@freakycoder/react-native-progressive-fast-image";

export default memo(Cards);
function Cards({ item, isSearchBar, searchQuery, goToMovieDetail }) {
  const movieId = item.id;
  const photoUri = "https://image.tmdb.org/t/p/original/" + item.poster_path;
  const title = item.title || "Unknown";
  const language = item.original_language || "en";
  const release_date = item.release_date || "Unknown";
  const overview = item.overview || "";

  const renderCard = () => {
    return (
      <TouchableOpacity
        onPress={() =>
          goToMovieDetail(movieId, photoUri, title, release_date, overview)
        }
        activeOpacity={0.9}
        style={[
          styles.container,
          {
            width: isSearchBar && searchQuery === "" ? "48%" : "100%",
            height: responsiveHeight(isSearchBar ? 24 / 1.5 : 24),
          },
        ]}
      >
        <ProgressiveFastImage
          style={styles.image}
          source={{ uri: photoUri }}
          loadingImageStyle={styles.imageLoader}
          loadingSource={require("../../../../assets/images/imageLoading.gif")}
          blurRadius={7}
        />

        <View style={styles.textContainer}>
          <Text
            numberOfLines={1}
            ellipsizeMode="tail"
            style={[
              styles.title,
              { fontSize: responsiveFontSize(isSearchBar ? 2.3 : 2.6) },
            ]}
          >
            {title}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  const renderCard2 = () => {
    return (
      <>
        <View
          style={[
            styles.container,
            {
              width: "45%",
              height: responsiveHeight(isSearchBar ? 24 / 1.5 : 24),
            },
          ]}
        >
          <ProgressiveFastImage
            style={styles.image}
            source={{ uri: photoUri }}
            loadingImageStyle={styles.imageLoader}
            loadingSource={require("../../../../assets/images/imageLoading.gif")}
            blurRadius={7}
          />
        </View>

        <View style={{ width: "40%" }}>
          <Text
            numberOfLines={1}
            ellipsizeMode="tail"
            style={[
              styles.title,
              {
                fontSize: responsiveFontSize(2.3),
                color: theme.color.headerTitle,
              },
            ]}
          >
            {title}
          </Text>
          <Text
            numberOfLines={1}
            ellipsizeMode="tail"
            style={[
              styles.title,
              {
                fontSize: responsiveFontSize(1.9),
                color: "#DBDBDF",
                textTransform: "capitalize",
              },
            ]}
          >
            {language}
          </Text>
        </View>

        <TouchableOpacity activeOpacity={0.5} onPress={() => {}}>
          <Image
            source={require("../../../../assets/icons/menu.png")}
            style={styles.icon}
          />
        </TouchableOpacity>
      </>
    );
  };

  if (isSearchBar && searchQuery !== "") {
    return (
      <TouchableOpacity
        onPress={() =>
          goToMovieDetail(movieId, photoUri, title, release_date, overview)
        }
        activeOpacity={0.9}
        style={styles.mainContainer}
      >
        {renderCard2()}
      </TouchableOpacity>
    );
  } else {
    return <>{renderCard()}</>;
  }
}
