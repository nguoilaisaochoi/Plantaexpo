import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  Dimensions,
  Alert,
} from "react-native";
import React, { useContext, useState } from "react";
import Header from "./Compo/Header";
import Total from "./Compo/Total";
import Animated, { withSequence } from "react-native-reanimated";
const { height } = Dimensions.get("window");
const { width } = Dimensions.get("window");
const Cart = (props) => {
  const { navigation } = props;
  const [Data] = useState(data);
  const [selectedItems, setSelectedItems] = useState([]);
  const gotopay = () => {
    navigation.navigate("Pay");
  };

  const xoa = () => {
    Alert.alert("Xác nhận xoá");
  };

  const renderItems = ({ item }) => {
    const { id, name, img, type, price } = item;
    const isSelected = selectedItems.includes(id);
    const toggleSelectItem = (itemId) => {
      if (selectedItems.includes(itemId)) {
        setSelectedItems(selectedItems.filter((item) => item !== itemId));
        console.log(
          `danh sách sau khi loại item ${selectedItems.filter((item) => item !== itemId)}`
        );
      } else {
        setSelectedItems([...selectedItems, itemId]);
      }
    };
    return (
      <TouchableOpacity
        style={styles.view1}
        activeOpacity={0.6}
        onPress={() => toggleSelectItem(id)}
      >
        <Image
          style={styles.img1}
          source={
            isSelected
              ? require("../assets/img/checked.png")
              : require("../assets/img/noncheck.png")
          }
        />
        <View style={styles.view2}>
          <Image style={{ width: 77, height: 77 }} source={img} />
        </View>
        <View style={styles.view6}>
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
            <Text style={styles.txt2} onPress={() => xoa()}>
              Xoá
            </Text>
          </View>
        </View>
      </TouchableOpacity>
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

      <Total txt1={"Tạm tính"} price1={"000.000đ"} txt4={"Tiến hành thanh toán"} />
    </View>
  );
};

export default Cart;
const styles = StyleSheet.create({
  txt4: {
    fontFamily: "Lato Medium",
  },
  view6: { flexDirection: "column", marginLeft: 15,  width: "50%" },
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
    position: "absolute",
    height: height * 0.15,
    padding: "2%",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white",
    bottom: 0,
    left: 0,
    right: 0,
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
    marginLeft: "6%",
    width: "50%",
    height: "100%",
    textAlign: "center",
    paddingTop: "3%",
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
    width: height * 0.031,
    height: height * 0.03,
    marginLeft: "5%",
    marginRight: "7%",
  },
  view1: {
    //list item 117
    flexShrink: 1,
    height: height * 0.15,
    backgroundColor: "white",
    margin: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent:'space-around'
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
