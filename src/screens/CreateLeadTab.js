import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Icon, { Icons } from './Icons';
import  Color  from './Color';
import CreateLead from './CreateLead';
import QualifiersScreen from './QualifiersScreen';
import FollowUpScreen from './FollowUpScreen';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
const Tab = createMaterialTopTabNavigator();

function CreateLeadTab() {
    return(
        <Tab.Navigator >
            <Tab.Screen name="PROFILE" component={CreateLead}/>
            <Tab.Screen name="QUALIFIERS" component={QualifiersScreen}/>
            <Tab.Screen name="FOLLOW-UP" component={FollowUpScreen}/> 
        </Tab.Navigator>
    );

}

export default CreateLeadTab;