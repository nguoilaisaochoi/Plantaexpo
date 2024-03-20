import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import React, { useContext, useState } from "react";
import Header from "./Header";
const { height } = Dimensions.get("window");
const { width } = Dimensions.get("window");
const Cart = () => {
  const [Data] = useState(data);
  const renderItems = ({ item }) => {
    const { name, img, type, price } = item;
    return (
      <View style={styles.view1}>
        <Image style={styles.img1} source={require("../assets/img/checked.png")} />
        <View style={styles.view2}>
          <Image style={{ width: 77, height: 77 }} source={img} />
        </View>
        <View style={{ flexDirection: "column", marginLeft: 15 }}>
          <View>
            <Text style={styles.txt3}>
              {name} | <Text style={{ color: "#7D7B7B" }}>{type}</Text>
            </Text>
          </View>
          <Text style={[styles.txt3, { color: "#007537" }]}>{price}đ</Text>
          <View style={styles.view3}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <TouchableOpacity activeOpacity={0.5}>
                <Image
                  style={{ width: width * 0.07, height: height * 0.04 }}
                  source={require("../assets/img/giam.png")}
                />
              </TouchableOpacity>
              <Text style={styles.txt1}>1</Text>
              <TouchableOpacity activeOpacity={0.5}>
                <Image
                  style={{ width: width * 0.07, height: height * 0.04 }}
                  source={require("../assets/img/tang.png")}
                />
              </TouchableOpacity>
            </View>
            <Text style={styles.txt2}>Xoá</Text>
          </View>
        </View>
      </View>
    );
  };
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <Header
        txt="Giỏ hàng"
        imgdel={require("../assets/img/trash.png")}
        imgl={require("../assets/img/backnobg.png")}
      />
      <FlatList data={Data} keyExtractor={(item) => item.id} renderItem={renderItems} />
      <View style={styles.view4}>
        <View style={styles.view5}>
          <Text style={[styles.txt4, { opacity: 0.5 }]}>Tạm tính</Text>
          <Text style={[styles.txt4]}>500.000đ</Text>
        </View>
        <TouchableOpacity style={styles.touch1} activeOpacity={0.5}>
          <Text style={[styles.txt4, { color: "white", fontSize: 16 }]}>Tiến hành thanh toán</Text>
          <Image
            style={{ width: 24, height: 24 }}
            source={require("../assets/img/rightwhite.png")}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Cart;
const styles = StyleSheet.create({
  txt4: {
    fontFamily: "Lato Medium",
  },
  touch1: {
    height: height * 0.08,
    width: width * 0.9,
    backgroundColor: "#007537",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "center",
    borderRadius: 8,
    paddingRight: width * 0.1,
    paddingLeft: width * 0.1,
  },
  view5: {
    width: "92%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  view4: {
    height: height * 0.15,
    padding: "2%",
    justifyContent: "space-between",
    alignItems: "center",
  },
  txt3: {
    fontFamily: "Lato Medium",
  },
  txt2: {
    // Xoá
    color: "black",
    fontSize: 16,
    fontFamily: "Lato Medium",
    textDecorationLine: "underline",
  },
  txt1: {
    // 2
    color: "black",
    fontSize: 16,
    fontFamily: "Lato Medium",
    marginLeft: 15,
    marginRight: 15,
  },
  view3: {
    //tang giam xoa
    width: "68%",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 15,
    justifyContent: "space-between",
  },
  view2: {
    //background img
    width: 77,
    height: 77,
    backgroundColor: "#F6F6F6",
    borderRadius: 8,
  },
  img1: {
    //img plant
    width: height * 0.037,
    height: height * 0.036,
    marginLeft: 23,
    marginRight: 25,
  },
  view1: {
    //list item 117
    flexShrink: 1,
    height: height * 0.15,
    backgroundColor: "white",
    margin: 10,
    flexDirection: "row",
    alignItems: "center",
  },
});
var data = [
  {
    id: 1,
    name: "Spider Plant",
    type: "Ưa bóng",
    price: "250.000",
    img: require("../assets/img/item.png"),
  },
  {
    id: 2,
    name: "Spider Plant2",
    type: "Ưa bóng",
    price: "280.000",
    img: require("../assets/img/item.png"),
  },
  {
    id: 3,
    name: "Spider Plant2",
    type: "Ưa bóng",
    price: "280.000",
    img: require("../assets/img/item.png"),
  },
  {
    id: 4,
    name: "Spider Plant2",
    type: "Ưa bóng",
    price: "280.000",
    img: require("../assets/img/item.png"),
  },
  {
    id: 5,
    name: "Spider Plant2",
    type: "Ưa bóng",
    price: "280.000",
    img: require("../assets/img/item.png"),
  },
  {
    id: 6,
    name: "Spider Plant2",
    type: "Ưa bóng",
    price: "280.000",
    img: require("../assets/img/item.png"),
  },
];
