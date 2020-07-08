import React, {Component} from 'react';
import {StyleSheet,SafeAreaView,View, Text, 
  TouchableOpacity ,ImageBackground, Button} from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },
  wrap: {
    flex: 1,
  },
  button: {
    marginTop: 110,
    alignSelf: 'center',
    borderWidth: 2,
    borderRadius: 10,
    padding: 30,
    borderColor:'orange',
    backgroundColor:'orange',
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    width: "100%",
    height:"100%",
  },
});

const EmpScreen = ({navigation, route}) => {
    return(
      <View style={styles.container}>
        <View></View>
        
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('EmpRet')}>
          <Text>음식점 보기</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('EmpMoney')}>
          <Text>금액 사용 현황</Text>
        </TouchableOpacity>

        <Text>EmpScreen 안녕 잘지내보자 </Text>
      </View>
    );
}
export default EmpScreen;