import React, { useEffect, useState } from 'react';
import RNPickerSelect from 'react-native-picker-select';
import { View, StyleSheet } from 'react-native';
import axios from 'axios';
import { _retrieveData } from './CurrentUserInfo';
import { useTheme } from '@react-navigation/native';
const baseurl = require('./baseurl');
const suburl = require('./suburl');


const NewDropDown = (props) => {

  const { colors } = useTheme();
  const [projectName, setProjectName] = useState([])
  const [value, setValue] = useState(null);

  useEffect(() => {
    fetchDataFromAPI();
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
    setProjectName(propertyArray);
  }

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      {/* <View style={[styles.dropDown, { backgroundColor:colors.backgroundbackgroundColor:"green" }]}> */}

      <RNPickerSelect
        onValueChange={(value) => props.getProjectNameReturn(value)}
        items={projectName}
         placeholder={{
          label: 'Project Name',
          value: null,
        }}
        // placeholder={"Property Name"}
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
    borderRadius: 6,

    // padding:55,
  },

});

export default NewDropDown;
