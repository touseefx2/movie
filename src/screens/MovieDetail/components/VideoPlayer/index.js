import React, { memo, useCallback } from "react";
import { View, Modal, StatusBar, TouchableOpacity, Text } from "react-native";
import { styles } from "./styles";
import YoutubePlayer from "react-native-youtube-iframe";
import theme from "../../../../theme";

export default memo(VideoPlayer);
function VideoPlayer({ videos, isShowTrailer, setIsShowTrailer }) {
  const closeModal = () => {
    setIsShowTrailer(!isShowTrailer);
  };

  const onStateChange = useCallback((state) => {
    if (state === "ended") {
      closeModal();
    }
  }, []);

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isShowTrailer}
      // onRequestClose={closeModal}
    >
      <StatusBar backgroundColor={"black"} barStyle={"light-content"} />
      <View style={styles.modalView}>
        <YoutubePlayer
          width={theme.window.Width}
          height={theme.window.Height}
          play={true}
          videoId={videos[0].key}
          webViewProps={{
            injectedJavaScript: `
          var element = document.getElementsByClassName('container')[0];
          element.style.position = 'unset';
          element.style.paddingBottom = 'unset';
          true;
        `,
          }}
          onChangeState={onStateChange}
        />
        <View style={styles.headerContainer}>
          <TouchableOpacity
            style={styles.button}
            activeOpacity={0.8}
            onPress={closeModal}
          >
            <Text style={styles.buttonTitle}>Done</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}
