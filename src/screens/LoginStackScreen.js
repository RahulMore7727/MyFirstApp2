import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from "./LoginScreen";
import SplashScreen from "./SplashScreen";
import HomeStackScreen from "./TabScreen";
import TabScreen from "./TabScreen";

const RootStack = createNativeStackNavigator();

const LoginStackScreen = ({navigation}) => (
    <RootStack.Navigator screenOptions={{headerShown: false}} >
        <RootStack.Screen name="SplashScreen" component={SplashScreen} />
        <RootStack.Screen name="LoginScreen" component={LoginScreen}/>
        <RootStack.Screen name ="TabScreen" component={TabScreen}/>
        
    </RootStack.Navigator>
);

export default LoginStackScreen;