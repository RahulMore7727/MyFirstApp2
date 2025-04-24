import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import axios from 'axios';
import { _retrieveData } from './CurrentUserInfo';
import { useTheme } from '@react-navigation/native';
const baseurl = require('./baseurl');
const suburl = require('./suburl');

const data = [
    { label: 'Flat', value: '1' },
    { label: 'Plot', value: '2' },
    { label: 'residential', value: '3' },
    { label: 'commercial', value: '4' },
  ];

const PropTUpdateDropDown = (props) => {

    const [value, setValue] = useState(props.PropertyType === 'Flat'? '1' :props.PropertyType === 'Plot'?'2':props.PropertyType === "residential"?'3':'4');
    const [isFocus, setIsFocus] = useState(false);
    const { colors } = useTheme();


  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      {/* <View style={[styles.dropDown, { backgroundColor:colors.backgroundbackgroundColor:"green" }]}> */}

      <RNPickerSelect
        onValueChange={(value) => props.getPropertyTypeReturn(value)}
        items={data}
        value={value}
        style={{
          inputIOS: {
            color: colors.text,

          },
          inputAndroid: {
            // color: colors.text,
            color:'black'
          },
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,

  },

});

export default PropTUpdateDropDown;
