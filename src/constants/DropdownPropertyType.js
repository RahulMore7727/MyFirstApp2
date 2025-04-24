import React, { useEffect,useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import axios from 'axios';
import {_retrieveData} from './CurrentUserInfo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useTheme } from '@react-navigation/native';
const baseurl = require('./baseurl');
const suburl = require('./suburl');

const DropdownPropertyType = (props) => {
  
  const [propertyType,setPropertyType]=useState([])
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const { colors } = useTheme();

  useEffect(()=>{
    fetchDataFromAPI();
   },[])

   const fetchDataFromAPI = async()=>{
    try{
        // await new Promise(resolve => setTimeout(resolve, 2000));
        _retrieveData().then(result=>(axios.get(baseurl.url + suburl.propertyDetails+(JSON.parse(result)))
        .then(res =>{
          if (res.data.status==true)
            {
             
               sortPropertyData(res.data.data);
            }
            else 
            {
                Alert.alert('Invalid Data!', 'In LeadList Screeconsn', [
                    { text: 'Okay' }
                ]);  
            }
         
          } )))        
    }
    catch(e)
    {
      console.log(e)
    }}

    const sortPropertyData = (data)=>{
   
      let propertyArray =[];
     {Object.entries(data).map(([key, value], index) => (
      
      propertyArray.push({
      value:value.id,
      label:value.property_type,})
      
    ))
  }
  setPropertyType(propertyArray);
  }

  return (
    
    <View style={[styles.container, { backgroundColor:colors.background }]}>
     
      <Dropdown
        // style={[styles.dropdown, isFocus && {  borderColor: '#ccc' }]}
        style={[styles.dropdown, { backgroundColor:colors.background }]}
        placeholderStyle={[styles.placeholderStyle,{color:colors.text,backgroundColor:colors.background}]}
        selectedTextStyle={[styles.selectedTextStyle,{backgroundColor:colors.background}]}
        inputSearchStyle={[styles.inputSearchStyle,{backgroundColor:colors.background}]}
        iconStyle={styles.iconStyle}
        containerStyle={{backgroundColor:colors.background}}
        data={propertyType}
        // search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={!isFocus ? 'Property Type' : '...'}
        // searchPlaceholder="Search..."
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={item => {
          props.getPropertyTypeReturn(item.label)
          setValue(item.value);
          setIsFocus(false);
        }}
        renderLeftIcon={() => (
          <FontAwesome
            style={styles.icon}
            // color={isFocus ? 'blue' : 'black'}
            name="building"
            size={20}
          />
        )}
      />
      
    </View>
  );
};

export default DropdownPropertyType;

const styles = StyleSheet.create({
  container: {

    // backgroundColor: 'white',
    // padding: 16,
    // justifyContent:'center',
    // alignContent:'center'
  },
  dropdown: {
    height: 50,
    borderColor:'#ccc',
    borderWidth:1,
    borderRadius:5,
    paddingHorizontal: 10,
    marginVertical:10,    
   
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});