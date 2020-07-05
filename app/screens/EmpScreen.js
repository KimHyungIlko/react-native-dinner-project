import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';
const EmpScreen = ({navigation, route}) => {
  const goToDetails = (e)=>{
    navigation.navigate("details");
  }
    return(
      <>
        <View>
          <Text>EmpScreen 안녕 잘지내보자 </Text>
        </View>
      </>
    );
}
export default EmpScreen;