import { observable, makeObservable, action } from "mobx";
import db from "../../database/index";
import { Alert } from "react-native";
import store from "../index";

class movieDetail {
  constructor() {
    makeObservable(this);
  }

  @observable getDataOnce = false;
  @observable loader = false;
  @observable movie = null;
  @observable videos = [];

  @action setGetDataOnce = (bool) => {
    this.getDataOnce = bool;
  };

  @action setLoader = (bool) => {
    this.loader = bool;
  };

  @action setMovie = (obj) => {
    this.movie = obj;
  };

  @action setVideos = (data) => {
    this.videos = data;
  };

  @action attemptToGetSpecificMovieDetail = (movieId) => {
    this.setLoader(true);
    const endPoint =
      db.apis.BASE_URL +
      db.apis.GET_MOVIES_DETAIL +
      movieId +
      "?api_key=" +
      store.General.apiKey;
    // console.log("attemptToGetSpecificMovieDetail : ", endPoint);
    db.hitApi(
      endPoint, //api
      "get", //requestType
      {}, //body
      store.General.apiAccessToken //token
    )
      ?.then((resp) => {
        this.setLoader(false);
        const data = resp.data || null;
        // console.log(`response attemptToGetSpecificMovieDetail: `, data);
        this.setGetDataOnce(true);
        this.setMovie(data);
        this.attemptToGetVideos(movieId);
      })
      .catch((err) => {
        this.setLoader(false);
        const msg = err.response.data.message || err.response.status || err;
        // console.log(`Error in attemptToGetSpecificMovieDetail: `, msg);
        if (msg == 503 || msg == 500) {
          Alert.alert("", "Server not response");
          return;
        }

        Alert.alert("", msg.toString());
      });
  };

  @action attemptToGetVideos = (movieId) => {
    const endPoint =
      db.apis.BASE_URL +
      db.apis.GET_MOVIES_DETAIL +
      movieId +
      "/videos?api_key=" +
      store.General.apiKey;
    // console.log("attemptToGetVideos : ", endPoint);
    db.hitApi(
      endPoint, //api
      "get", //requestType
      {}, //body
      store.General.apiAccessToken //token
    )
      ?.then((resp) => {
        const data = resp.data.results || [];
        // console.log(`response attemptToGetVideos: `, data);
        this.setVideos(data);
      })
      .catch((err) => {
        const msg = err.response.data.message || err.response.status || err;
        // console.log(`Error in attemptToGetVideos: `, msg);
      });
  };

  @action clearMovieDetails = () => {
    this.setGetDataOnce(false);
    this.setLoader(false);
    this.setMovie(null);
    this.setVideos([]);
  };
}
export const MovieDetail = new movieDetail();
