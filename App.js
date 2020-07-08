import React from 'react';
import {StyleSheet, View, Text, SafeAreaView} from 'react-native';
import TabStackScreen from './app/routers/TabStackScreen';
import {NavigationContainer} from "@react-navigation/native";

export default function App(){
  return(
    <NavigationContainer>
      <SafeAreaView style ={{flex: 1}}> 
        <TabStackScreen /> 
      </SafeAreaView>
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