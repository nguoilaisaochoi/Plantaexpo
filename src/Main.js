import React from 'react';
import {StyleSheet, Image, View} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './Home';
import Setting from './Setting';
import Detail from './Detail';
import ListPlant from './ListPlant';
import Cart from './Cart';
import Search from './Search';
import Noti from './Noti';


const Main = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Hometabs" component={HomeTabs} />
      <Stack.Screen name="Detail" component={Detail} />
      <Stack.Screen name="ListPlant" component={ListPlant} />
      <Stack.Screen
        name="Cart"
        component={Cart}
        options={{animation: 'fade'}}
      />
    </Stack.Navigator>
  );
};

const HomeTabs = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator screenOptions={tabScreenOptions}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="Noti" component={Noti} />
      <Tab.Screen name="Setting" component={Setting} />
    </Tab.Navigator>
  );
};
const tabScreenOptions = ({route}) => {
  return {
    headerShown: false,
    tabBarShowLabel: false,
    style: {height: 60},
    tabBarStyle: {height: '8%', backgroundColor: 'white', borderTopWidth: 0},
    tabBarIcon: ({focused}) => {
      if (route.name == 'Home') {
        return (
          <View>
            <Image
              style={styles.icon}
              source={require('../assets/img/bottomtab/home.png')}
            />
            {focused ? <View style={styles.dot}></View> : null}
          </View>
        );
      } else if (route.name == 'Search') {
        return (
          <View>
            <Image
              style={styles.icon}
              source={require('../assets/img/bottomtab/search.png')}
            />
            {focused ? <View style={styles.dot}></View> : null}
          </View>
        );
      } else if (route.name === 'Noti') {
        return (
          <View>
            <Image
              style={styles.icon}
              source={require('../assets/img/bottomtab/bell.png')}
            />
            {focused ? <View style={styles.dot}></View> : null}
          </View>
        );
      } else if (route.name === 'Setting') {
        return (
          <View>
            <Image
              style={styles.icon}
              source={require('../assets/img/bottomtab/user.png')}
            />
            {focused ? <View style={styles.dot}></View> : null}
          </View>
        );
      }
    },
  };
};
const styles = StyleSheet.create({
  icon: {width: 25, height: 25},
  dot: {
    alignSelf: 'center',
    width: 6, // Độ rộng của chấm
    height: 6, // Chiều cao của chấm
    marginTop: 3,
    borderRadius: 5, // Để tạo hình dạng hình tròn cho chấm
    backgroundColor: 'black', // Màu của chấm
  },
});
export default Main;
