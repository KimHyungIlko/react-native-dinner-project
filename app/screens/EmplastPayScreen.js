import React, {Component} from 'react';
import {
  TextInput,
  ScrollView,
  View,
  Image,
  StyleSheet,
  Text,
} from 'react-native';
import {Card, Button} from 'react-native-paper';

export default class EmplastPayScreen extends React.Component {
  render() {
    console.log('---최종 스크린 ---props: ', this.props.route.params);
    return (
        <View style={styles.container}>
          <Image style={styles.food} source={this.props.route.params.image} />
          <View style={styles.textline}>
            <Text style={styles.staticText}>{this.props.route.params.people}</Text>
            <Text style={styles.staticText}>명</Text>
          </View>
          <View style={styles.textline}>
            <Text style={styles.staticText}>{this.props.route.params.price}</Text>
            <Text style={styles.staticText}>원</Text>
            
          </View>
          <View style={styles.textline}>
            <Text style={styles.staticText2}>최종 결제 되었습니다</Text>
          </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: 'white',
    flex:1,
  },
  food: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9AA9FF',
    width: 230,
    height: 230,
    marginTop: 50,
    borderRadius: 90,
    borderWidth: 10,
  },
  textline: {
    height: 40,
    marginTop: 50,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#eee',
    borderBottomWidth: 0.5,
    fontSize: 17,
  },
  staticText: {
    flexDirection: 'row',
    marginTop: 45,
    marginLeft: 10,
    fontWeight: 'bold',
    fontSize: 25,
  },
  staticText2: {
    flexDirection: 'row',
    marginTop: 45,
    marginLeft: 10,
    fontWeight: 'bold',
    fontSize: 25,
    color: 'red',
  },
  cardSpot: {
    marginTop: 50,
  },
});
