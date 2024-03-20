import { View, Text, StyleSheet, Dimensions, Image } from "react-native";
import React from "react";
import Header from "./Header";
const { height } = Dimensions.get("window");
const { width } = Dimensions.get("window");
const Setting = () => {
  return (
    <View style={styles.container}>
      <Header txt={"PROFILE"} />
      <View style={styles.view1}>
        <Image style={styles.img} source={require("../assets/img/avatar.png")} />
        <View style={styles.view2}>
          <Text>Nguyễn Lê Hùng</Text>
          <Text style={[styles.txt2, { opacity: 0.5 }]}>hn123@gmail.com</Text>
        </View>
      </View>
      <View style={[styles.view3, { height: height * 0.3 }]}>
        <Text style={[styles.txt1, { opacity: 0.5 }]}>Chung</Text>
        <Text style={styles.txt2}>Chỉnh sửa thông tin</Text>
        <Text style={styles.txt2}>Cẩm nang trồng cây</Text>
        <Text style={styles.txt2}>Lịch sửa giao dịch</Text>
        <Text style={styles.txt2}>Q & A</Text>
      </View>
      <View style={[styles.view3, { marginTop: height * 0.02, height: height * 0.25 }]}>
        <Text style={[styles.txt1, { opacity: 0.5 }]}>Bảo mật và điều khoản</Text>
        <Text style={styles.txt2}>Điều khoản và điều kiện</Text>
        <Text style={styles.txt2}>Chính sách quyền riêng tư</Text>
        <Text style={[styles.txt2, { color: "#FF0000" }]}>Đăng xuất</Text>
      </View>
    </View>
  );
};

export default Setting;
const styles = StyleSheet.create({
  txt2: {
    fontFamily: "Lato Medium",
  },
  view3: {
    paddingLeft: width * 0.1,
    paddingRight: width * 0.1,
    paddingTop: height * 0.02,
    justifyContent: "space-between",
  },
  txt1: {
    fontFamily: "Lato Medium",
    borderBottomWidth: 1,
    borderBottomColor: "#ABABAB",
  },
  view2: {
    paddingLeft: width * 0.04,
  },
  container: { backgroundColor: "white", flex: 1, justifyContent: "flex-start" },
  view1: {
    height: height * 0.15,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingLeft: width * 0.1,
  },
  img: { width: height * 0.07, height: height * 0.07 },
});
