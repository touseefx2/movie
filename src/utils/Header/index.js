import React, { memo } from "react";
import { View, Text, Image, TouchableOpacity, TextInput } from "react-native";
import { styles } from "./styles";
import utils from "../index";
import { responsiveFontSize } from "react-native-responsive-dimensions";

export default memo(Header);
function Header({
  headerTitle,
  isSearchBar,
  setIsSearchBar,
  searchQuery,
  setSearchQuery,
  setSearchData,
  isApplySearch,
  setIsApplySearch,
  searchData,
  movies,
}) {
  const isWatchScreen = headerTitle === "Watch" ? true : false;

  const renderTitle = () => {
    return (
      <View
        style={{
          width:
            isWatchScreen && !isApplySearch
              ? "70%"
              : isWatchScreen && isApplySearch
              ? "86%"
              : "100%",
        }}
      >
        <Text numberOfLines={1} ellipsizeMode="tail" style={styles.headerTitle}>
          {isWatchScreen && isApplySearch
            ? searchData.length + " results found"
            : headerTitle}
        </Text>
      </View>
    );
  };

  const renderSearchIcon = () => {
    return (
      <TouchableOpacity
        disabled={isSearchBar}
        activeOpacity={0.7}
        onPress={() => setIsSearchBar(true)}
      >
        <Image
          source={require("../../assets/icons/search.png")}
          style={styles.icon}
        />
      </TouchableOpacity>
    );
  };

  const renderBackIcon = () => {
    return (
      <TouchableOpacity
        style={{ padding: 5 }}
        activeOpacity={0.7}
        onPress={() => setIsApplySearch(false)}
      >
        <utils.vectorIcon.MaterialIcons
          name="arrow-back-ios"
          color={theme.color.headerTitle}
          size={responsiveFontSize(3.2)}
        />
      </TouchableOpacity>
    );
  };

  const renderInput = () => {
    const onChangeText = (text) => {
      setSearchQuery(text);
      if (text.trim() !== "" && movies.length <= 0) {
        setSearchData([]);
      } else {
        setSearchData(
          movies.filter((item) => {
            return item.title
              .toLowerCase()
              .trim()
              .includes(text.toLowerCase().trim());
          })
        );
      }
    };

    return (
      <TextInput
        returnKeyType={"go"}
        value={searchQuery}
        onChangeText={onChangeText}
        placeholderTextColor={"rgba(32, 44, 67, 0.3)"}
        style={styles.input}
        placeholder="Tv shows, movies and more"
        onSubmitEditing={() => {
          setIsApplySearch(true);
        }}
      />
    );
  };

  const renderClose = () => {
    return (
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => {
          setIsSearchBar(false);
          setSearchQuery("");
          setSearchData([]);
        }}
      >
        <Image
          source={require("../../assets/icons/close.png")}
          style={styles.icon2}
        />
      </TouchableOpacity>
    );
  };

  if (!isSearchBar && !isApplySearch) {
    return (
      <View style={styles.headerConatainer}>
        {renderTitle()}
        {isWatchScreen && renderSearchIcon()}
      </View>
    );
  } else if (isSearchBar && !isApplySearch) {
    return (
      <View style={[styles.searchBarConatainer]}>
        {renderSearchIcon()}
        {renderInput()}
        {renderClose()}
      </View>
    );
  } else if (isSearchBar && isApplySearch) {
    return (
      <View style={styles.headerConatainer}>
        {renderBackIcon()}
        {renderTitle()}
      </View>
    );
  }
}
