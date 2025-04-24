import React, { useEffect, useState } from 'react';
import RNPickerSelect from 'react-native-picker-select';
import { View, StyleSheet } from 'react-native';
import axios from 'axios';
import { _retrieveData } from './CurrentUserInfo';
import { useTheme } from '@react-navigation/native';
const baseurl = require('./baseurl');
const suburl = require('./suburl');

const data = [
  { label: 'Open', value: '1' },
  { label: 'Working', value: '2' },
  { label: 'Overdue', value: '3' },
  { label: 'Close', value: '4' },
];

const LeadStatusDropDown = (props) => {

    const [value, setValue] = useState(props.leadStatus === 'Working'? '2' :props.leadStatus === 'overdue'?'3':props.leadStatus === "Close"?'4':'1');
    const [isFocus, setIsFocus] = useState(false);
    const { colors } = useTheme();

    
  useEffect(() => {
    fetchDataFromAPI();
    // console.log(props.leadStatus)
  }, [])

  const fetchDataFromAPI = async () => {
    try {
      // await new Promise(resolve => setTimeout(resolve, 2000));
      _retrieveData().then(result => (axios.get(baseurl.url + suburl.propertyDetails + (JSON.parse(result)))
        .then(res => {
          if (res.data.status == true) {

             sortPropertyData(res.data.data);
          }
          else {
            Alert.alert('Invalid Data!', 'In LeadList Screeconsn', [
              { text: 'Okay' }
            ]);
          }

        })))
    }
    catch (e) {
      console.log(e)
    }
  }

  const sortPropertyData = (data) => {

    let propertyArray = [];
    {
      Object.entries(data).map(([key, value], index) => (

        propertyArray.push({
          value: value.id,
          label: value.project_name,
        })
      ))
    }
  }
  const handleValueChange = (value) =>{
    const item = data.find(item =>{
      if(item.value === value)
      {props.getDataFunc("status",item)
        setValue(value);  
      }
      });
    
    
    
  }

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      {/* <View style={[styles.dropDown, { backgroundColor:colors.backgroundbackgroundColor:"green" }]}> */}

      <RNPickerSelect
        onValueChange={handleValueChange 
          // console.log("Click Value",value )
          // props.getDataFunc(value)
        }
        items={data}
        value={value}

        style={{
          inputIOS: {
            color: colors.text,

          },
          inputAndroid: {
            color: colors.text,

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
    borderRadius: 5,

    // padding:55,
  },

});

export default LeadStatusDropDown;
