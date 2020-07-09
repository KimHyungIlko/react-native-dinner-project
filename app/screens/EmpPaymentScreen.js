import React, {Component} from 'react';
import {
  TextInput, ScrollView, View, Image, StyleSheet, Text,
 } from 'react-native';
 import { 
   Card ,Button
 } from 'react-native-paper'; 
 
export default class EmpPaymentScreen extends React.Component {
  render(){
    console.log(this.props.navigation);

    return (
      <ScrollView>
        <View style={styles.container}>
          
          <Image style = {styles.food}
          source={this.props.navigation.state.params.image}
          />

          <View style={styles.textline}>
              <TextInput
                placeholder="인원을 입력하세요"
                onChangeText={(text) => this.setState({text})}
              />
              <Text style={styles.staticText}>원</Text>
          </View>
          <View style={styles.textline}>
            <TextInput
              style={styles.textline}
              placeholder="금액을 입력하세요"
              onChangeText={(text) => this.setState({text})}
            />
            <Text style={styles.staticText}>명</Text>
          </View>
          <Card style={styles.cardSpot}>
         <Card.Actions>
          <Button>확인</Button>
          <Button>취소</Button>
         </Card.Actions>
        </Card>
        </View>
      </ScrollView>
    ) 
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems:'center',
  },
  food : {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9AA9FF',
    width : 200,
    height : 200,
    marginTop: 32,
    borderRadius : 90,
  },
  textline : {
    height: 40,
    marginTop : 30,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor:'#eee',
    borderBottomWidth:0.5,
  },
  staticText: {
    flexDirection: 'row',
    marginTop : 20,
    marginLeft : 5,
  },
  cardSpot : {
    marginTop : 50,
  },
});