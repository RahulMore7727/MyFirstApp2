import React, { useEffect, useState } from 'react';
import RNPickerSelect from 'react-native-picker-select';
import { View, StyleSheet } from 'react-native';
import axios from 'axios';
import { _retrieveData } from './CurrentUserInfo';
import { useTheme } from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
const baseurl = require('./baseurl');
const suburl = require('./suburl');


const PropertyTypeDropDown = (props) => {

    const [propertyType,setPropertyType]=useState([])
    const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);
    const { colors } = useTheme();

  useEffect(() => {
    fetchDataFromAPI();
  }, [])

  const fetchDataFromAPI = async()=>{
    try{
        // await new Promise(resolve => setTimeout(resolve, 2000));
        // _retrieveData().then(result=>(axios.get(baseurl.url + suburl.propertyType+(JSON.parse(result)))
        _retrieveData().then(result=>(axios.get(baseurl.url + suburl.propertyType))
        .then(res =>{
          if (res.data.status==true)
            {
             console.log("Fetch Function",res.data.data)
               sortPropertyData(res.data.data);
            }
            else 
            {
                Alert.alert('Invalid Data!', 'In LeadList Screeconsn', [
                    { text: 'Okay' }
                ]);  
            }
         
          } ))        
    }
    catch(e)
    {
      console.log(e)
    }}


    const sortPropertyData = (data)=>{
   
        let propertyArray =[];
       {(data).map((value,index) => (
        key={index},
        // console.log("YY ",value.id)
        propertyArray.push({
        
        value:value.id,
        label:value.type,})
        
      ))
    }
    setPropertyType(propertyArray);
    }
  

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      {/* <View style={[styles.dropDown, { backgroundColor:colors.backgroundbackgroundColor:"green" }]}> */}

      <RNPickerSelect
        onValueChange={(value) => props.getPropertyTypeReturn(value)}
        items={propertyType}
        placeholder={{
          label: 'Property Type',
          value: null,
        }}
        style={{
          inputIOS: {
            color: colors.text,

          },
          inputAndroid: {
            color: colors.text,

          },

        }}
      />
      {/* </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    // justifyContent:"space-around",
    // alignContent:"space-around"
    // padding:55,
  },

});

export default PropertyTypeDropDown;
