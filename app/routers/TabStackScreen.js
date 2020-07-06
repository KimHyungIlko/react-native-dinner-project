import React from 'react';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {createStackNavigator} from "@react-navigation/stack";
import EmpScreen from '../screens/EmpScreen';
import MgrScreen from '../screens/MgrScreen';
import RetScreen from '../screens/RetScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import { createDrawerNavigator } from '@react-navigation/drawer';

const TabStack = createBottomTabNavigator();
const EmpStack = createStackNavigator();
const MgrStack = createStackNavigator();
const RetStack = createStackNavigator();


const EmpStackScreen = () => {
    return(
        <EmpStack.Navigator>
            <EmpStack.Screen name="emp" component={EmpScreen} options={{title : "직원용", }}/>
        </EmpStack.Navigator>  
    );
}

const MgrStackScreen = () => {
    return(
        <MgrStack.Navigator>
            <MgrStack.Screen name="mgr" component={MgrScreen} />
        </MgrStack.Navigator>  
    );
}

const RetStackScreen = () => {
    return(
        <RetStack.Navigator>
            <RetStack.Screen name="ret" component={RetScreen} />
        </RetStack.Navigator>  
    );
}


const TabStackScreen = () => {
    return(
      
      
        <TabStack.Navigator screenOptions={({ route }) => ({
            tabBarIcon: ({focused, color, size}) => {
              let iconName;
              if (route.name === '직원') {
                iconName = 'people-outline';
              } else if (route.name === '총무') {
                iconName = 'document-text-ouline';
              } else{
                iconName ='pizza-outline';
              }
              return <Icon name={iconName} size={30} color="gray" />;
            },
          })}
          tabBarOptions={{
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
          }}>
            <TabStack.Screen name ="직원" component={EmpStackScreen} />
            <TabStack.Screen name ="총무" component={MgrStackScreen} />
            <TabStack.Screen name ="매장" component={RetStackScreen} />
        </TabStack.Navigator>   
    );
}
export default TabStackScreen;