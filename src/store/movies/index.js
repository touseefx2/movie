import { observable, makeObservable, action } from "mobx";
import { persist } from "mobx-persist";
import db from "../../database/index";
import { Alert } from "react-native";
import store from "../index";

class movies {
  constructor() {
    makeObservable(this);
  }

  @observable getDataOnce = false;
  @observable loader = false;
  @persist("object") @observable movies = [];
  @observable isSearchBar = false;
  @observable searchQuery = "";
  @observable isApplySearch = false;

  @action setGetDataOnce = (bool) => {
    this.getDataOnce = bool;
  };

  @action setLoader = (bool) => {
    this.loader = bool;
  };

  @action setMovies = (data) => {
    this.movies = data;
  };

  @action setIsSearchBar = (bool) => {
    this.isSearchBar = bool;
  };

  @action setSearchQuery = (str) => {
    this.searchQuery = str;
  };

  @action setIsApplySearch = (bool) => {
    this.isApplySearch = bool;
  };

  @action attemptToGetMovies = () => {
    this.setLoader(true);
    const endPoint =
      db.apis.BASE_URL + db.apis.GET_MOVIES + store.General.apiKey;
    // console.log("attemptToGetMovies : ", endPoint);
    db.hitApi(
      endPoint, //api
      "get", //requestType
      {}, //body
      store.General.apiAccessToken //token
    )
      ?.then((resp) => {
        this.setLoader(false);
        const data = resp.data.results || [];
        // console.log(`response attemptToGetMovies: `, data.length);
        this.setGetDataOnce(true);
        this.setMovies(data);
      })
      .catch((err) => {
        this.setLoader(false);
        const msg = err.response.data.message || err.response.status || err;
        console.log(`Error in attemptToGetMovies: `, msg);
        if (msg == 503 || msg == 500) {
          Alert.alert("", "Server not response");
          return;
        }

        Alert.alert("", msg.toString());
      });
  };

  @action clearMovies = () => {
    this.setGetDataOnce(false);
    this.setLoader(false);
    this.setMovies([]);
    this.setIsSearchBar(false);
    this.setSearchQuery("");
    this.setIsApplySearch(false);
  };
}
export const Movies = new movies();
