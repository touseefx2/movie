import React, { useEffect, useCallback, useState } from "react";
import {
  SafeAreaView,
  View,
  ScrollView,
  Text,
  StatusBar,
  ImageBackground,
} from "react-native";
import { observer } from "mobx-react";
import store from "../../store";
import { styles } from "./styles";
import utils from "../../utils";
import GenresCard from "./components/GenresCard";
import OverView from "./components/OverView";
import ImageContent from "./components/ImageContent";
import VideoPlayer from "./components/VideoPlayer";

export default observer(MovieDetail);
function MovieDetail(props) {
  const headerTitle = "MovieDetail";
  const { movieId, image, name, release_date, overview } = props.route.params;
  const { isInternet } = store.General;
  const {
    attemptToGetSpecificMovieDetail,
    getDataOnce,
    movie,
    videos,
    clearMovieDetails,
  } = store.MovieDetail;
  const genres = movie?.genres || [];
  const colors = ["#15D2BC", "#E26CA5", "#564CA3", "#CD9D0F"];

  const [isShowTrailer, setIsShowTrailer] = useState(false);

  useEffect(() => {
    return () => {
      clearMovieDetails();
    };
  }, []);

  useEffect(() => {
    if (isInternet && !getDataOnce) onRefresh();
  }, [isInternet, getDataOnce]);

  const onRefresh = useCallback(() => {
    attemptToGetSpecificMovieDetail(movieId);
  }, []);

  const renderGenres = () => {
    let index = 0;
    const genresShow = genres.map((item) => {
      if (colors[index] == undefined) {
        index = 0;
      }
      const color = colors[index];
      index++;
      return <GenresCard item={item} color={color} />;
    });

    return genresShow;
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        translucent={true}
        backgroundColor={"transparent"}
        barStyle={"light-content"}
      />
      <ImageBackground source={{ uri: image }} style={styles.container1}>
        <utils.StackHeader props={props} headerTitle={headerTitle} />
        {getDataOnce && (
          <ImageContent
            release_date={release_date}
            setIsShowTrailer={setIsShowTrailer}
            isInternet={isInternet}
          />
        )}
      </ImageBackground>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.container2}
        contentContainerStyle={styles.scrollContent}
      >
        {!isInternet && <utils.InternetMessage headerTitle={headerTitle} />}
        {genres.length > 0 && (
          <>
            <Text style={styles.title}>genres</Text>
            <View style={styles.genresContainer}>{renderGenres()}</View>
            <View style={styles.sep} />
          </>
        )}
        <OverView overview={overview} />
        {isShowTrailer && (
          <VideoPlayer
            videos={videos}
            isShowTrailer={isShowTrailer}
            setIsShowTrailer={setIsShowTrailer}
          />
        )}
      </ScrollView>
    </SafeAreaView>
  );
}
