import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
  ScrollView,
  Dimensions,
} from "react-native";
import React, { useEffect, useState } from "react";
import Header from "./Header";
const { height } = Dimensions.get("window");
const { width } = Dimensions.get("window");
const ListPlant = (props) => {
  const { navigation } = props;
  const [Data] = useState(datatype);
  const [Dataitem] = useState(data);
  const [selectedindex, setselectedIndex] = useState("1");
  const gotodetail = () => {
    navigation.navigate("Detail");
  };
  const renderMenu = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => setselectedIndex(item.id)} activeOpacity={0.6}>
        <View
          style={[
            styles.view1,
            { backgroundColor: item.id == selectedindex ? "#009245" : "white" },
          ]}
        >
          <Text style={[styles.txt1, { color: item.id == selectedindex ? "white" : "#7D7B7B" }]}>
            {item.type}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };
  const renderItem = ({ item }) => {
    const { id, name, type, price, img } = item;
    return (
      <TouchableOpacity style={styles.bgitem} activeOpacity={0.5} onPress={() => gotodetail()}>
        <View style={styles.bgimg}>
          <Image style={{ width: "100%", height: 134 }} source={img} />
        </View>
        <Text style={styles.txt4}>{name}</Text>
        <Text style={styles.txt5}>{type}</Text>
        <Text style={styles.txt6}>{price} đ</Text>
      </TouchableOpacity>
    );
  };
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <Header txt="Cây trồng" img={require("../assets/img/cartnobg.png")} />
      <View style={{ marginLeft: 20, marginTop: 20 }}>
        <FlatList
          data={Data}
          renderItem={renderMenu}
          keyExtractor={(item) => item.id}
          horizontal={true}
          scrollEnabled={false}
        />
      </View>
      <FlatList
        data={Dataitem}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        numColumns={2}
      />
    </View>
  );
};

export default ListPlant;
const styles = StyleSheet.create({
  txt6: {
    // 250.000đ
    color: "#007537",
    fontSize: 16,
    fontFamily: "Lato Medium",
  },
  txt5: {
    color: "#7D7B7B",
    fontSize: 14,
    fontFamily: "Lato Medium",
  },
  txt4: {
    marginTop: 5,
    color: "#221F1F",
    fontSize: 16,
    fontFamily: "Lato Medium",
  },
  bgimg: {
    width: "100%",
    height: 134,
    backgroundColor: "#F6F6F6",
    borderRadius: 8,
  },
  bgitem: {
    width: 155,
    height: 217,
    margin: 10,
    padding: 5,
  },
  txt1: {
    // Tất cả
    fontSize: 14,
    fontFamily: "Lato Medium",
  },
  view1: {
    minWidth: 63,
    height: 38,
    margin: 5,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    padding: 4,
  },
});
var datatype = [
  {
    id: 1,
    type: "Tất cả",
  },
  { id: 2, type: "Hàng mới về" },
  { id: 3, type: "Ưa sáng" },
  { id: 4, type: "Ưa bóng" },
];
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
    name: "Song of India",
    type: "Ưa bóng",
    price: "280.000",
    img: require("../assets/img/item.png"),
  },
  {
    id: 3,
    name: "Pink Anthurium",
    type: "Ưa bóng",
    price: "280.000",
    img: require("../assets/img/item.png"),
  },
  {
    id: 4,
    name: "Black Love Anthurium",
    type: "Ưa bóng",
    price: "280.000",
    img: require("../assets/img/item.png"),
  },
  {
    id: 5,
    name: "Black Love Anthurium",
    type: "Ưa bóng",
    price: "280.000",
    img: require("../assets/img/item.png"),
  },
  {
    id: 6,
    name: "Black Love Anthurium",
    type: "Ưa bóng",
    price: "280.000",
    img: require("../assets/img/item.png"),
  },
];
