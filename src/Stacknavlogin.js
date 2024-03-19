import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './Login';
import Reg from './Reg';
const Stacknavlogin = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false, animation: 'fade_from_bottom'}}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Reg" component={Reg} />
    </Stack.Navigator>
  );
};

export default Stacknavlogin;
