import React from 'react';
import {StyleSheet, View, Text, SafeAreaView} from 'react-native';
import TabStackScreen from './app/routers/TabStackScreen';
import {NavigationContainer} from "@react-navigation/native";
import { createDrawerNavigator } from '@react-navigation/drawer';
import EmpScreen from './app/screens/EmpScreen';
import MgrScreen from './app/screens/MgrScreen';
import RetScreen from './app/screens/RetScreen';

const Drawer = createDrawerNavigator();
export default function App(){
  return(
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Emp" component={EmpScreen} />
        <Drawer.Screen name="Mgr" component={MgrScreen} />
        <Drawer.Screen name="Ret" component={RetScreen} />
      </Drawer.Navigator>
      {/* <SafeAreaView style ={{flex: 1}}>  */}
        {/* <TabStackScreen />  */}
      {/* </SafeAreaView> */}
    </NavigationContainer>
  );
}

const style = StyleSheet.create({
  container: {
    flex : 1,
    justifyContent : 'center',
    alignItems : 'center'
  },
});