import React from 'react';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {createStackNavigator} from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
import EmpScreen from '../screens/EmpScreen';
import MgrScreen from '../screens/MgrScreen';
import EmpRetScreen from '../screens/EmpRetScreen';
import EmpMoneyScreen from '../screens/EmpMoneyScreen';

const TabStack = createBottomTabNavigator();
const Stack = createStackNavigator();

const MyStack = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen name="Emp" component={EmpScreen} 
            options={{ title: '직원용',
                        headerTitleAlign: 'center',
                        headerStyle: {backgroundColor: 'transparent',},
                        headerTintColor: 'black',
                        headerTitleStyle: {
                        fontWeight: 'bold',
                        },
                    }} />
            <Stack.Screen name="Mgr" component={MgrScreen} options={{headerShown: "false"}}/>
            <Stack.Screen name="EmpRet" component={EmpRetScreen} 
            options={{ title: '음식점',
                        headerTitleAlign: 'center',
                        headerStyle: {backgroundColor: 'transparent',},
                        headerTintColor: 'black',
                        headerTitleStyle: {
                        fontWeight: 'bold',
                        },
                    }}/>
            <Stack.Screen name="EmpMoney" component={EmpMoneyScreen} 
                        options={{ title: '금액 현황',
                        headerTitleAlign: 'center',
                        headerStyle: {backgroundColor: 'transparent',},
                        headerTintColor: 'black',
                        headerTitleStyle: {
                        fontWeight: 'bold',
                        },
                    }}/>
        </Stack.Navigator>  
    );
}

export default MyStack;