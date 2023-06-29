import { AppState } from "react-native";
import { observable, makeObservable, action } from "mobx";

class general {
  constructor() {
    makeObservable(this);
  }

  @observable apiAccessToken =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNzBjYjhkYjJlNmZlNGZjYjg4YTZhMGZhZGIxMzEyYyIsInN1YiI6IjY0OWI1MTY1YjFmNjhkMDEzYmU3MGJkYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.MOb8_MH0Z8IUCb-F6k-gVxVhF6-XHOCdDXo4WfjbGHY";
  @observable apiKey = "d70cb8db2e6fe4fcb88a6a0fadb1312c";
  @observable isInternet = false;
  @observable appState = AppState.currentState;

  @action setInternet = (obj) => {
    this.isInternet = obj;
  };

  @action setappState = (obj) => {
    this.appState = obj;
  };
}
export const General = new general();
