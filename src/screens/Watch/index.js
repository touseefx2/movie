import React, { useEffect, useCallback, useState } from "react";
import {
  SafeAreaView,
  RefreshControl,
  FlatList,
  BackHandler,
} from "react-native";
import { observer } from "mobx-react";
import store from "../../store";
import { styles } from "./styles";
import utils from "../../utils";
import EmptyListMessage from "./components/EmptyListMessage";
import ItemSeparatorView from "./components/ItemSeparatorView";
import ListHeader from "./components/ListHeader";
import Cards from "./components/Cards";

export default observer(Watch);
function Watch(props) {
  const headerTitle = "Watch";
  const { isInternet } = store.General;
  const {
    attemptToGetMovies,
    getDataOnce,
    loader,
    movies,
    searchQuery,
    isSearchBar,
    isApplySearch,
    setSearchQuery,
    setIsSearchBar,
    setIsApplySearch,
  } = store.Movies;

  const [searchData, setSearchData] = useState([]);

  useEffect(() => {
    if (isInternet && !getDataOnce) onRefresh();
  }, [isInternet, getDataOnce]);

  useEffect(() => {
    const subscription = BackHandler.addEventListener(
      "hardwareBackPress",
      handleBackButtonClick
    );
    return () => {
      subscription.remove();
    };
  }, [isSearchBar, isApplySearch]);

  function handleBackButtonClick() {
    if (!props.navigation.isFocused()) {
      return false;
    }

    if (!isSearchBar && !isApplySearch) {
      props.navigation.goBack();
      return true;
    }

    if (isApplySearch) {
      setIsApplySearch(false);
      return true;
    }

    if (isSearchBar) {
      setIsSearchBar(false);
      setSearchQuery("");
      setSearchData([]);
      return true;
    }
  }

  const onRefresh = useCallback(() => {
    attemptToGetMovies();
  }, []);

  const goToMovieDetail = useCallback(
    (movieId, image, name, release_date, overview) => {
      props.navigation.navigate("MovieDetail", {
        movieId,
        image,
        name,
        release_date,
        overview,
      });
    },
    []
  );

  const renderMovies = useCallback(
    ({ item }) => (
      <Cards
        item={item}
        isSearchBar={isSearchBar}
        searchQuery={searchQuery}
        movies={movies}
        goToMovieDetail={goToMovieDetail}
      />
    ),
    [isSearchBar, searchQuery]
  );

  return (
    <SafeAreaView style={styles.container}>
      {!isInternet && <utils.InternetMessage />}
      <utils.Header
        props={props}
        headerTitle={headerTitle}
        isSearchBar={isSearchBar}
        setIsSearchBar={setIsSearchBar}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        setSearchData={setSearchData}
        isApplySearch={isApplySearch}
        setIsApplySearch={setIsApplySearch}
        searchData={searchData}
        movies={movies}
      />

      {(!isSearchBar || (isSearchBar && searchQuery !== "")) && (
        <FlatList
          decelerationRate={0.6}
          refreshControl={
            <RefreshControl
              refreshing={loader}
              onRefresh={isInternet && onRefresh}
            />
          }
          showsVerticalScrollIndicator={false}
          style={styles.listContainer}
          contentContainerStyle={styles.listContainer2}
          data={searchQuery === "" ? movies : searchData}
          renderItem={renderMovies}
          keyExtractor={(item, index) => index.toString()}
          ListEmptyComponent={!loader && getDataOnce && EmptyListMessage}
          ListHeaderComponent={
            searchData.length > 0 && !isApplySearch && ListHeader
          }
          ItemSeparatorComponent={ItemSeparatorView}
        />
      )}
      {isSearchBar && searchQuery === "" && (
        <FlatList
          decelerationRate={0.6}
          refreshControl={
            <RefreshControl
              refreshing={loader}
              onRefresh={isInternet && onRefresh}
            />
          }
          showsVerticalScrollIndicator={false}
          style={styles.listContainer}
          contentContainerStyle={styles.listContainer2}
          columnWrapperStyle={{ justifyContent: "space-between" }}
          numColumns={2}
          data={movies}
          renderItem={renderMovies}
          keyExtractor={(item, index) => index.toString()}
          ListEmptyComponent={!loader && getDataOnce && EmptyListMessage}
          ItemSeparatorComponent={ItemSeparatorView}
        />
      )}
    </SafeAreaView>
  );
}
