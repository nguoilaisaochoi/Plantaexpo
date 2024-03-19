import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useContext, useState} from 'react';
import Header from './Header';

const Cart = () => {
  const [Data] = useState(data);
  const renderItems = ({item}) => {
    const {name, img, price} = item;
    return (
      <View style={styles.view1}>
        <Image
          style={styles.img1}
          source={require('../assets/img/checked.png')}
        />
        <View style={styles.view2}>
          <Image style={{width: 77, height: 77}} source={img} />
        </View>
        <View style={{flexDirection: 'column', marginLeft: 15}}>
          <Text>{name}</Text>
          <Text>{price}</Text>
          <View style={styles.view3}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <TouchableOpacity activeOpacity={0.5}>
                <Image
                  style={{width: 30, height: 30}}
                  source={require('../assets/img/giam.png')}
                />
              </TouchableOpacity>
              <Text style={styles.txt1}>1</Text>
              <TouchableOpacity activeOpacity={0.5}>
                <Image
                  style={{width: 30, height: 30}}
                  source={require('../assets/img/tang.png')}
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
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <Header txt="Giỏ hàng" imgdel={require('../assets/img/trash.png')} />
      <FlatList
        data={Data}
        keyExtractor={item => item.id}
        renderItem={renderItems}
      />
    </View>
  );
};

export default Cart;
const styles = StyleSheet.create({
  txt2: {
    // Xoá
    color: 'black',
    fontSize: 16,
    fontFamily: 'Lato Medium',
    textDecorationLine: 'underline',
  },
  txt1: {
    // 2
    color: 'black',
    fontSize: 16,
    fontFamily: 'Lato Medium',
    marginLeft: 15,
    marginRight: 15,
  },
  view3: {
    //tang giam xoa
    width: '68%',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
    justifyContent: 'space-between',
  },
  view2: {
    //background img
    width: 77,
    height: 77,
    backgroundColor: '#F6F6F6',
    borderRadius: 8,
  },
  img1: {
    //img plant
    width: 25,
    height: 25,
    marginLeft: 23,
    marginRight: 28,
  },
  view1: {
    //list item
    flexShrink: 1,
    height: 117,
    backgroundColor: 'white',
    elevation: 1,
    margin: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
var data = [
  {
    id: 1,
    name: 'Spider Plant',
    type: 'Ưa bóng',
    price: '250.000',
    img: require('../assets/img/item.png'),
  },
  {
    id: 2,
    name: 'Spider Plant2',
    type: 'Ưa bóng',
    price: '280.000',
    img: require('../assets/img/item.png'),
  },
  {
    id: 3,
    name: 'Spider Plant2',
    type: 'Ưa bóng',
    price: '280.000',
    img: require('../assets/img/item.png'),
  },
  {
    id: 4,
    name: 'Spider Plant2',
    type: 'Ưa bóng',
    price: '280.000',
    img: require('../assets/img/item.png'),
  },
  {
    id: 5,
    name: 'Spider Plant2',
    type: 'Ưa bóng',
    price: '280.000',
    img: require('../assets/img/item.png'),
  },
  {
    id: 6,
    name: 'Spider Plant2',
    type: 'Ưa bóng',
    price: '280.000',
    img: require('../assets/img/item.png'),
  },
];
