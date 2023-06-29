import React from "react";
import { SafeAreaView } from "react-native";
import store from "../../store";
import { styles } from "./styles";
import utils from "../../utils";

export default function MediaLibrary(props) {
  const headerTitle = "Media Library";
  const { isInternet } = store.General;

  return (
    <>
      <SafeAreaView style={styles.container}>
        {!isInternet && <utils.InternetMessage />}
        <utils.Header props={props} headerTitle={headerTitle} />
      </SafeAreaView>
    </>
  );
}
