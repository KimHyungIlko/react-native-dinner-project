import React, {Component} from 'react';
import {
  View, Image, Text, TouchableOpacity, 
  ImageBackground ,StyleSheet, Dimensions, FlatList} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import AntDesign from 'react-native-vector-icons/AntDesign';

const width = Dimensions.get("screen").width
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'transparent',
  },
  header: {
    marginTop:0,
  },
  bar: {
    flex:1
  },
  ImageBackground: {
    width: width*0.4,
    height: width * 0.2,
    alignItems:'center'
  },
  title: {
    color:'white',
    marginTop:25,
    fontWeight: 'bold',
    fontSize:25,
    left : 5,
  },
  flatList:{
    flex:1,
    // marginTop:10,
  },
  item:{
    flex:1,
    paddingVertical:10,
    paddingHorizontal:10,
    flexDirection:'row',
    borderRadius:10,
  },
  image_container:{
    width:90,
    height:90
  },
  image: {
    width: '100%',
    height: '100%',
    borderWidth:5,
    borderColor:'white',
    borderRadius:10,
  },
  content:{
    flex:1,
    justifyContent:'center',
    paddingHorizontal:10,
  },
  name:{
    color:'white',
    fontWeight:'bold',
    fontSize:20,
  },
  rating:{
    marginTop:5,
    flexDirection:'row',
  },
  button:{
    width:30,
    height:30,
    backgroundColor:'white',
    borderRadius:15,
    justifyContent:'center',
    alignItems:'center',
  },
  price_container:{
    flexDirection:'row',
    marginTop:10,
  },
  price:{
    backgroundColor:'white',
    paddingVertical:5,
    paddingHorizontal:50,
    borderRadius:50,
  },
  textprice:{
    color:'black',
    fontWeight: 'bold',
  }
});


export default class EmpRetScreen extends React.Component {
  constructor(props){
    super(props);
    this.state={
      data:[
        {
          name: 'Stewed Mushrooms',
          image: require('../../images/background.png'),
          ratings: 3,
          price: '$126'
        },
        {
          name: 'Stewed Mushrooms22',
          image: require('../../images/background.png'),
          ratings: 2,
          price: '$125'
        },
        {
          name: 'Stewed Mushrooms33',
          image: require('../../images/background.png'),
          ratings: 1,
          price: '$124'
        },
        {
          name: 'Stewed Mushrooms44',
          image: require('../../images/background.png'),
          ratings: 5,
          price: '$132'
        },
        {
          name: 'Stewed Mushrooms55',
          image: require('../../images/background.png'),
          ratings: 4,
          price: '$112'
        },
      ]
    }
  }

  _rating(item){
    let rating =[];
    let i;
    for(i=0;i<item;i++){
      rating.push(
        <Image
          source={require('../../images/background.png')}
          style={{width:15, height:15, marginLeft:3}}
          resizeMode="cover"
        />
      )
    }
    return rating;
  }

  renderItem =({item}) => {
    return(
      <LinearGradient 
      colors={['#4c669f', '#2b4887']}
      start={{x:0, y:1}} end={{x:1,y:0}}
      style={styles.item}>
      
      
        <View style={styles.image_container}>
          <Image source={item.image} style={styles.image}/>
        </View>

        <View style={styles.content}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.rating}>
            {this._rating(item.ratings)}
          </Text>
          <Text style={styles.price_container}>
            <Text style={styles.price}>
              <Text style={styles.textprice}>
              {item.price}
              </Text>
            </Text>
          </Text>
        </View>
        <TouchableOpacity 
        onPress={() => this.props.navigation.navigate('EmpPayment',
          {image:item.image,
          price: item.price,
          name:item.name}
          )} 
        style={styles.button}>
          <AntDesign
            name='arrowright'
            color="black"
            size={15}
          />
        </TouchableOpacity>
      </LinearGradient>
    )
  }

  ItemSeparatorComponent=()=>{
    return(
      <View
        style={{height:10,}}
      />
    )
  }

  render(){
    return(
        <View style ={styles.container}>
          <View style={styles.header}>
            <ImageBackground 
            source ={require('../../images/background.png')}
            style={styles.ImageBackground}
            resizeMode="center">
            <Text style={styles.title}>직원 확인</Text>
            </ImageBackground>
          </View>
          <View style={styles.flatList}>
            <FlatList 
              data={this.state.data}
              renderItem={this.renderItem}
              keyExtractor={(item,index)=>index.toString()}
              ItemSeparatorComponent={this.ItemSeparatorComponent}
              showsVerticalScrollIndicator={false}
            />
          </View>
        </View>
    );
  }
}