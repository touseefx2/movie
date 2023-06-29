import React from "react";
import { SafeAreaView } from "react-native";
import { styles } from "./styles";
import store from "../../store";
import utils from "../../utils";

export default function Dashboard(props) {
  const headerTitle = "Dashboard";
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
