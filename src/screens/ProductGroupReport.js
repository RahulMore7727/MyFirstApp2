import React, { useState } from "react";
import {View, Text,TouchableOpacity,StyleSheet,SafeAreaView, Button } from "react-native";
import { Menu, MenuItem, MenuDivider } from 'react-native-material-menu';
import Timeline from 'react-native-timeline-flatlist'


const ProductGroupReport = () =>{
  const data = [
    {time: '09:00', title: 'Event 1', description: 'Event 1 Description'},
    {time: '10:45', title: 'Event 2', description: 'Event 2 Description'},
    {time: '12:00', title: 'Event 3', description: 'Event 3 Description'},
    {time: '14:00', title: 'Event 4', description: 'Event 4 Description'},
    {time: '16:30', title: 'Event 5', description: 'Event 5 anything'}
  ]
 
    return (
      
      <Timeline
          data={data}
        />
     
    );
 
}
 

export default ProductGroupReport;


