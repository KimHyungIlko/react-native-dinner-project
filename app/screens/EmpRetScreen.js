import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import { useNavigation } from '@react-navigation/native'; //필수로 필요함 페이지 이동시에 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor:'transparent'
  },
  button: {
    marginTop: 110,
    alignSelf: 'center',
    borderWidth: 2,
    borderRadius: 10,
    padding: 30,
    borderColor:'gray',
    backgroundColor:'transparent',
    width:200,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    width: "100%",
    height:"100%",
  },
  buttonText:{
    fontSize: 20,
    fontWeight: "bold",
    color:"black",
    alignSelf: 'center',
  }
});
const EmpRetScreen = () => {
  const navigation = useNavigation(); //페이지이동 필수 요소
    return(
        <View style ={{flex:1}}>

          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('EmpMoney')}>
          <Text style={styles.buttonText}>금액 현황 보기</Text>
          </TouchableOpacity>

          <Text>EmpRetScreen 안녕 잘지내보자 </Text>
        </View>
    );

}

export default EmpRetScreen;