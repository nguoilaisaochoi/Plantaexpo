import { View, Text, Image, Dimensions, StyleSheet } from "react-native";
import React from "react";
const { height } = Dimensions.get("window");
const { width } = Dimensions.get("window");
const Loading = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.img} source={require("../../assets/img/loading.gif")} />
    </View>
  );
};

export default Loading;
const styles = StyleSheet.create({
  container: {
    width: width,
    height: height,
    backgroundColor: "black",
    position: "absolute",
    zIndex: 2,
    opacity: 0.5,
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    width: "20%",
    height: "10%",
  },
});
