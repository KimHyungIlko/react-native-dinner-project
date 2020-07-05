import React from 'react';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {createStackNavigator} from "@react-navigation/stack";
import EmpScreen from '../screens/EmpScreen';
import MgrScreen from '../screens/MgrScreen';
import RetScreen from '../screens/RetScreen';

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
        <TabStack.Navigator>
            <TabStack.Screen name ="직원" component={EmpStackScreen} />
            <TabStack.Screen name ="총무" component={MgrStackScreen} />
            <TabStack.Screen name ="매장" component={RetStackScreen} />
        </TabStack.Navigator>   
    );
}
export default TabStackScreen;