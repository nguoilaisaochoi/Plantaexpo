import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  Dimensions,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import Header from "./Compo/Header";
const { height } = Dimensions.get("window");
const { width } = Dimensions.get("window");
const Search = () => {
  const [Data] = useState(data);
  const renderitem = ({ item }) => {
    const { id, date, price, name, category, quantity, img } = item;
    return (
      <TouchableOpacity style={styles.view5}>
        <View style={styles.view4}>
          <View style={styles.view2img}>
            <Image style={{ width: 77, height: 77 }} source={img} />
          </View>
          <View style={{ flexDirection: "column", marginLeft: 15 }}>
            <View>
              <Text style={styles.txt3}>
                {name} | <Text style={{ color: "#7D7B7B" }}>{category}</Text>
              </Text>
            </View>
            <Text>{price}đ</Text>
            <Text>Còn {quantity} sản phẩm</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      <Header txt="Tìm kiếm" imgl={require("../assets/img/backnobg.png")} />

      <View style={styles.view2}>
        <View style={styles.view1}>
          <TextInput style={styles.input1} placeholder="Tìm kiếm" />
          <Image style={styles.img1} source={require("../assets/img/search.png")} />
        </View>
        <FlatList
          data={Data}
          renderItem={renderitem}
          keyExtractor={(item) => item.id}
          scrollEnabled={false}
        />
      </View>
    </View>
  );
};

export default Search;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  view1: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "black",
  },
  input1: {
    width: "90%",
  },
  img1: {
    width: width * 0.06,
    height: width * 0.06,
  },
  view2: {
    paddingTop: "5%",
    paddingLeft: "10%",
    paddingRight: "10%",
  },
  view4: {
    flexDirection: "row",
    paddingTop: "5%",
  },
  view2img: {
    //background img
    width: 77,
    height: 77,
    backgroundColor: "#F6F6F6",
    borderRadius: 8,
  },
  txt3: {
    fontFamily: "Lato Medium",
  },
  view5: {
    //list item 117
    flexShrink: 1,
    minHeight: height * 0.15,
    backgroundColor: "white",
    marginLeft: width * 0.02,
    marginRight: width * 0.02,
    marginTop: height * 0.02,
    justifyContent: "flex-start",
  },
});
var data = [
  {
    id: 1,
    name: "Sipder Plant",
    category: "Ưa bóng",
    quantity: "2",
    price: "200.000",
    img: require("../assets/img/item.png"),
  },
];
