import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Icon, { Icons } from './Icons';
import  Color  from './Color';
import LeadStageReport from './LeadStageReport';
import ProductGroupReport from './ProductGroupReport';
import CustomerGroupReport from './CustomerGroupReport';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
const Tab = createMaterialTopTabNavigator();

function ReportTab() {
    return(
        <Tab.Navigator >
            <Tab.Screen name="LeadStage" component={LeadStageReport}/>
            <Tab.Screen name="ProductGroup" component={ProductGroupReport}/>
            <Tab.Screen name="CustomerGroup" component={CustomerGroupReport}/> 
        </Tab.Navigator>
    );

}

export default ReportTab;