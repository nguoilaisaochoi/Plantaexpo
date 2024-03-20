import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions } from "react-native";
import React from "react";
import Header from "./Header";
const { height } = Dimensions.get("window");
const { width } = Dimensions.get("window");
const { fontSize } = Dimensions.get("window");
const baseFontSize = height * 0.03;
const Detail = () => {
  return (
    <View style={{ backgroundColor: "white", flex: 1, justifyContent: "space-between" }}>
      <Header
        txt="Detail Page"
        img={require("../assets/img/cartnobg.png")}
        imgl={require("../assets/img/backnobg.png")}
      />
      <View style={styles.view1}>
        <Image style={styles.img3} source={require("../assets/img/rightitem.png")} />
        <Image style={styles.img4} source={require("../assets/img/rightitem.png")} />
        <View style={styles.view3}>
          {[...Array(3)].map((a, index) => (
            <View key={index} style={styles.view2}></View>
          ))}
        </View>
        <Image style={styles.img5} source={require("../assets/img/itemdetail.png")} />
      </View>
      <View style={styles.view8}>
        <View style={styles.touch1}>
          <Text style={styles.txt2}>Cây trồng</Text>
        </View>
        <View style={styles.touch1}>
          <Text style={styles.txt2}>Ưa bóng</Text>
        </View>
      </View>
      <Text style={styles.txt3}>250.000đ</Text>
      <View style={styles.view4}>
        <Text style={styles.txt4}>Chi tiết sản phẩm </Text>
      </View>
      <View style={styles.view5}>
        <Text style={styles.txt5}>Kích cỡ </Text>
        <Text style={styles.txt5}>Nhỏ </Text>
      </View>
      <View style={styles.view5}>
        <Text style={styles.txt5}>Xuất xứ </Text>
        <Text style={styles.txt5}>Châu phi </Text>
      </View>
      <View style={styles.view5}>
        <Text style={styles.txt5}>Tình trạng </Text>
        <Text style={[styles.txt5, { color: "green" }]}>Còn 156 sp </Text>
      </View>

      <View style={styles.view6}>
        <Text>Đã chọn 1 sản phẩm</Text>
        <Text>Tạm tính</Text>
      </View>

      <View style={styles.view6}>
        <View style={styles.view7}>
          <TouchableOpacity activeOpacity={0.6}>
            <Image
              style={{ width: width * 0.08, height: height * 0.04 }}
              source={require("../assets/img/giam.png")}
            />
          </TouchableOpacity>
          <Text style={[styles.txt6, { fontSize: 18 }]}>1</Text>
          <TouchableOpacity activeOpacity={0.6}>
            <Image
              style={{ width: width * 0.08, height: height * 0.04 }}
              source={require("../assets/img/tang.png")}
            />
          </TouchableOpacity>
        </View>
        <Text style={[styles.txt6, { fontSize: baseFontSize }]}>250.000d</Text>
      </View>
      <TouchableOpacity style={styles.touch2} activeOpacity={0.7}>
        <Text style={styles.txt7}>Chọn mua</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Detail;
const styles = StyleSheet.create({
  view8: {
    marginLeft: height * 0.025,
    flexDirection: "row",
  },
  img5: { width: 337, height: "100%", alignSelf: "center" },
  txt7: {
    // Chọn mua
    color: "white",
    fontSize: 16,
    fontFamily: "Lato Medium",
    textTransform: "uppercase",
  },
  touch2: {
    //chọn mua
    backgroundColor: "#007537",
    height: height * 0.08,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 30,
    marginRight: 30,
    borderRadius: 8,
    marginBottom: height * 0.02,
  },
  txt6: {
    // 1
    color: "black",
    fontFamily: "Lato Medium",
  },
  view7: {
    //tăng giảm
    flexDirection: "row",
    width: 132,
    height: 30,
    justifyContent: "space-between",
    alignItems: "center",
  },
  view6: {
    //đã chọn 1 sp tạm tính
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: 30,
    marginRight: 30,
    alignItems: "center",
  },
  txt5: {
    // Chi tiết sản phẩm
    color: "#3A3A3A",
    fontSize: fontSize,
    fontFamily: "Lato Medium",
    paddingBottom: 5,
  },
  view5: {
    //viền thông tin
    marginLeft: 30,
    marginRight: 30,
    borderBottomWidth: 1,
    borderColor: "#ABABAB",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  txt4: {
    // Chi tiết sản phẩm
    color: "#3A3A3A",
    fontSize: fontSize,
    fontFamily: "Lato Black",
    paddingBottom: 5,
  },
  view4: {
    //viền thông tin
    marginLeft: 30,
    marginRight: 30,
    borderBottomWidth: 1,
    borderColor: "#221F1F",
  },
  txt3: {
    // 250.000đ
    color: "#007537",
    fontSize: baseFontSize,
    marginLeft: 30,
    fontFamily: "Lato Medium",
  },
  txt2: {
    // Cây trồng
    color: "white",
    fontSize: fontSize,
    fontFamily: "Lato Medium",
  },
  touch1: {
    width: width * 0.2,
    height: height * 0.05,
    padding: 4,
    backgroundColor: "#009245",
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 10,
    marginRight: 10,
  },
  view3: {
    position: "absolute",
    zIndex: 1,
    bottom: -5,
    flexDirection: "row",
    alignSelf: "center",
  },
  view2: {
    //dot
    bottom: 10,
    alignSelf: "center",
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "black",
    margin: 3,
  },
  img4: {
    //nút >
    position: "absolute",
    top: height * 0.15,
    right: 20,
    transform: [{ rotateY: "180deg" }],
  },
  img3: {
    //nút <
    position: "absolute",
    top: height * 0.15,
    left: 20,
  },
  view1: {
    position: "relative",
    height: height * 0.35,
    backgroundColor: "#F6F6F6",
  },
});
