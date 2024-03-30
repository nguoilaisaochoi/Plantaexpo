import {
  View,
  Text,
  Dimensions,
  Image,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import React from "react";
import Header from "./Compo/Header";
import Total from "./Compo/Total";
const { height } = Dimensions.get("window");
const { width } = Dimensions.get("window");
const EditProfile = () => {
  return (
    <View style={styles.container}>
      <ScrollView keyboardShouldPersistTaps="always" contentContainerStyle={{ height: height}}>
        <Total txt5={"Lưu thông tin"} />
        <Header txt={"Chỉnh sửa thông tin"} imgl={require("../assets/img/backnobg.png")} />
        <Image style={styles.img} source={require("../assets/img/avatar.png")} />
        <View style={{ padding: "10%" }}>
          <Text style={styles.txt1}>
            Thông tin sẽ được lưu cho lần mua kế tiếp. Bấm vào thông tin chi tiết để chỉnh sửa.
          </Text>
          <View style={styles.view1}>
            <TextInput style={styles.txt2} placeholder="Nguyen le hung"></TextInput>
            <TextInput style={styles.txt2} placeholder="hn123@gmail.com"></TextInput>
            <TextInput style={styles.txt2} placeholder="60 Láng Hạ, Ba Đình, Hà Nội"></TextInput>
            <TextInput style={styles.txt2} placeholder="0123456789"></TextInput>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default EditProfile;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  view1: {
    height: height * 0.3,
    marginTop: "5%",
    justifyContent: "space-between",
  },
  txt2: {
    fontFamily: "Lato Regular",
    borderBottomWidth: 1,
    borderBottomColor: "#ABABAB",
    padding: width * 0.01,
  },
  img: {
    alignSelf: "center",
  },
  txt1: {
    fontFamily: "Lato Regular",
  },
});
