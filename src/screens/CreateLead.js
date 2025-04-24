import React, { useEffect, useState } from 'react'
import { ActivityIndicator, Text, View, TextInput, StyleSheet, Dimensions, ScrollView, KeyboardAvoidingView, TouchableOpacity, Alert,ToastAndroid } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import axios from 'axios';
import { _retrieveData } from '../constants/CurrentUserInfo';
const baseurl = require('../constants/baseurl');
const suburl = require('../constants/suburl');
import { useNavigation, useTheme } from '@react-navigation/native';
// import DropdownPropertyType from '../constants/DropdownPropertyType';
// import DropdownProjectName from '../constants/DropdownProjectName';
import NewDropDown from '../constants/NewDropDown';
import PropertyTypeDropDown from '../constants/PropertyTypeDropDown';

const width = Dimensions.get('window').width

const CreateLead = () => {

  const navigation = useNavigation();
  // const [propertyInfo,setPropertyInfo]=useState([{ property_type: '',project_name:'' }])
  const [Isloading, setIsLoading] = useState(false);
  const { colors } = useTheme();
  const [messages, setMessages] = useState('');
  // const theme = useTheme();
  const [postData, setPostData] = useState({
    name: '',
    email: '',
    contact: '',
    type: '',
    buget: '',
    emp_id: '',
    project_id: '',
  })

  const [isValid, setIsValid] = useState({
    validName: 'true',
    validMail: 'true',
    validContact: 'true',
    validBudget: 'true',
    validLocation: 'true',
  });

  useEffect(() => {
    setUserID();
  }, [])

  const showToastWithGravity = (msg) => {
    ToastAndroid.showWithGravity(
    "Lead Created Sucessfully",
      ToastAndroid.SHORT,
      ToastAndroid.CENTER,
    );
  
  };

  const setUserID = () => {
    // setPostData({...postData,emp_id:'121'});
    _retrieveData().then(result => (setPostData({ ...postData, emp_id: JSON.parse(result) })))

  }
  const getPropertyTypeReturn = (receivedValue) => {
    setPostData({ ...postData, type: receivedValue });

  }
  const getProjectNameReturn = (receivedValue) => {
    setPostData({ ...postData, project_id: receivedValue });

  }
  const validateName = (name) => {

    const nameRegex = /^[a-zA-Z ]*$/;
    const isValidName = nameRegex.test(name);
    setIsValid({ ...isValid, validName: isValidName })

  };

  const validateEmail = (email) => {
    // const emailRegex = /^[a-zA-Z0-9._%+\-\b]+@[a-zA-Z0-9.\-\b]+\.[a-zA-Z]{2,}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValidEmail = emailRegex.test(email);
    setIsValid({ ...isValid, validMail: isValidEmail })
  }

  const validateNumber = (contact) => {
    const mobileNumberRegex = /^\d{10}$/;
    const isValidContact = mobileNumberRegex.test(contact)
    setIsValid({ ...isValid, validContact: isValidContact })
  }

  const validateBudget = (budget) => {
    const budgetRegex = /^[0-9]+$/
    const isValidBudget = budgetRegex.test(budget)
    setIsValid({ ...isValid, validBudget: isValidBudget })
  }

  const validateLocation = (location) => {
    const locationRegex = /^[a-zA-Z ]*$/;
    const isValidLocation = locationRegex.test(location)
    setIsValid({ ...isValid, validLocation: isValidLocation })
  }

  const handleSubmit = () => {

    // if (!postData.name && !postData.email && !postData.contact && !postData.type && !postData.buget && !postData.emp_id && !postData.project_id) {
      if (!postData.name && !postData.email){
    Alert.alert(
        "Messages",
        "All fields are empty",
        [
          {
            text: "Ok",
            onPress: () => console.log("Ok Press")
          }
        ]
      )
    }
    // else if (postData.name && postData.email && postData.contact && postData.type && postData.buget && postData.emp_id && postData.project_id) {
      else if (postData.name && postData.email){  
        console.log("Data of create lead changes",postData.type)
    postDataAPI();
      // Alert.alert(
      //   "Messages",
      //   "All fields have data",
      //   [
      //     {
      //       text:"Ok",
      //       onPress: ()=> console.log("Ok Press")
      //     }
      //   ]
      // )
    }
    else {
      let emptyFields = [];
      if (!postData.name) {
        Alert.alert(
          "Error !!",
          "Enter Name",
          [
            {
              text: "Ok",
              onPress: () => console.log("Ok Press")
            }
          ]
        );
        // old comment emptyFields.push("Name field");
      }
      else if (!postData.email) {
        Alert.alert(
          "Error !!",
          "Enter Mail id",
          [
            {
              text: "Ok",
              onPress: () => console.log("Ok Press")
            }
          ]
        );
        // old comment emptyFields.push("Email field");
      }
      // else if (!postData.contact) {
      //   Alert.alert(
      //     "Error !!",
      //     "Enter Contact Number",
      //     [
      //       {
      //         text: "Ok",
      //         onPress: () => console.log("Ok Press")
      //       }
      //     ]
      //   );
        // old comment emptyFields.push("Contact field");
      // }
      // else if (!postData.type) {
      //   Alert.alert(
      //     "Error !!",
      //     "Enter Property Type",
      //     [
      //       {
      //         text: "Ok",
      //         onPress: () => console.log("Ok Press")
      //       }
      //     ]
      //   );
        // old comment emptyFields.push("Type field");
      // }
      // else if (!postData.buget) {
      //   Alert.alert(
      //     "Error !!",
      //     "Enter Budget",
      //     [
      //       {
      //         text: "Ok",
      //         onPress: () => console.log("Ok Press")
      //       }
      //     ]
      //   );
        // old comment emptyFields.push("Budget field");
      // }
      // else if (!postData.emp_id) {
      //   Alert.alert(
      //     "Error !!",
      //     "Select Project Name",
      //     [
      //       {
      //         text: "Ok",
      //         onPress: () => console.log("Ok Press")
      //       }
      //     ]
      //   );
        // old comment emptyFields.push("Project field");
      // }
      // else if (!postData.project_id) {
      //   Alert.alert(
      //     "Error !!",
      //     "Select Project",
      //     [
      //       {
      //         text: "Ok",
      //         onPress: () => console.log("Ok Press")
      //       }
      //     ]
      //   );
        // old comment emptyFields.push("Project field");
      // }
      // Alert.alert(
      //     "Please Check Text Fields",
      //     emptyFields.join('\n'),
      //     [
      //       {
      //         text:"Ok",
      //         onPress: () => console.log("Ok Press")
      //       }
      //     ]
      //   );
    }
    // postDataAPI(); 
  };

  const postDataAPI = () => {

    try {
      http://crmdemo.exceptionsolvers.com/api/addleade
      axios.post(baseurl.url + "" + suburl.postSingleLead, postData)
        .then(res => {
          setIsLoading(false)
          if (res.status == 200) {
              showToastWithGravity();
              navigation.goBack();
            // {
            //   Alert.alert(
            //     '',
            //     'Lead Added Successfully',
            //     [
            //       { text: 'OK', onPress: () => navigation.goBack() },

            //     ],
            //     { cancelable: false }
            //   );
            // }
          }
          else {
            {
              Alert.alert('',
                'Failed',
                [
                  { text: 'OK', onPress: () => navigation.goBack() },

                ],
                { cancelable: false }
              )
            }

          }
        })
    }
    catch (e) {
      console.log("Custom Error msg in CreateLeads", e)
    }

  }


  return (
    // <KeyboardAvoidingView style={[styles.wrapper,{backgroundColor: colors.background,keyboardVerticalOffset:20} ] }>
    //  <View style={{flex: 1,justifyContent: 'center',padding: 10,backgroundColor: '#fff',}}> 
    <View style={[styles.wrapper,{backgroundColor: colors.background} ]}> 

      {Isloading ? <ActivityIndicator style={{ marginTop: 20 }} size="large" color="blue" /> :
        <ScrollView 
              style={[styles.formContainer, { backgroundColor:colors.background }]}
              contentContainerStyle={{paddingBottom:80}}>
         
            <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 10, marginVertical: 10, borderWidth: 1, borderRadius: 5, borderColor: '#ccc' }}>
              <Icon name={"user"} size={20} color='#888' style={{ marginRight: 10 }} />
              <TextInput
                style={{ flex: 1 }}

                placeholder="Name"
                placeholderTextColor={colors.text}
                onChangeText={(text) => setPostData({ ...postData, name: text })}
                onBlur={() => validateName(postData.name)}
              // onChangeText={(val) => validateFullName(val)}
              />
            </View>

            {isValid.validName ? null :
              <View>
                <Text style={{ color: 'red' }}>It must contain alphabets only</Text>
              </View>
            }

            <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 10, marginVertical: 10, borderWidth: 1, borderRadius: 5, borderColor: '#ccc' }}>
              <Icon name={"envelope"} size={20} color='#888' style={{ marginRight: 10 }} />
              <TextInput
                style={{ flex: 1 }}
                placeholder="Mail"
                placeholderTextColor={colors.text}
                keyboardType="email-addresss"
                // onChangeText={(val) => validateEmail(val)}
                onChangeText={(text) => setPostData({ ...postData, email: text })}
                onBlur={() => validateEmail(postData.email)}
              />
            </View>

            {isValid.validMail ? null :
              <View>
                <Text style={{ color: 'red' }}>Invalid mail id</Text>
              </View>
            }

            <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 10, marginVertical: 10, borderWidth: 1, borderRadius: 5, borderColor: '#ccc' }}>
              <Icon name={"phone"} size={20} color='#888' style={{ marginRight: 10 }} />
              <TextInput
                style={{ flex: 1 }}
                placeholder="Mobile Number"
                placeholderTextColor={colors.text}
                keyboardType="numeric"
                maxLength={10}
                value={postData.contact}
                autoCapitalize="none"
                onChangeText={(text) => setPostData({ ...postData, contact: text })}
                onBlur={() => validateNumber(postData.contact)}
              //  onChangeText={(val) => textInputChange(val)}
              />
            </View>

            {isValid.validContact ? null :
              <View>
                <Text style={{ color: 'red' }}>Invalid contact number</Text>
              </View>
            }
            
            <View style={{ flexDirection: 'row', alignItems: 'center',  marginVertical: 10}}>
              {/* <DropdownPropertyType
           getPropertyTypeReturn={getPropertyTypeReturn}
          //  onSelect={setSelectedOption}
        />  */}
              <PropertyTypeDropDown getPropertyTypeReturn={getPropertyTypeReturn} />
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 10, marginVertical: 10, borderWidth: 1, borderRadius: 5, borderColor: '#ccc' }}>
              <Icon name={"rupee"} size={20} color='#888' style={{ marginRight: 10 }} />
              <TextInput
                style={{ flex: 1 }}
                placeholder="Budget in LAKH"
                placeholderTextColor={colors.text}
                keyboardType="numeric"
                maxLength={10}
                value={postData.buget}
                onChangeText={(text) => setPostData({ ...postData, buget: text })}
                onBlur={() => validateBudget(postData.buget)}
              //  onChangeText={(val) => validateBudget(val)}
              />
            </View>

            {isValid.validBudget ? null :
              <View>
                <Text style={{ color: 'red' }}>Invalid Price</Text>
              </View>
            }

            <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 10, marginVertical: 10, borderWidth: 1, borderRadius: 5, borderColor: '#ccc' }}>
              <Icon name={"map-marker"} size={20} color='#888' style={{ marginRight: 10 }} />
              <TextInput
                style={{ flex: 1 }}
                placeholder="Location"
                placeholderTextColor={colors.text}
                //  onChangeText={(val) => setPostData({...postData,})}
                onBlur={() => validateName(postData.name)}
              //  onChangeText={(val) => validateLocation(val)}
              />
            </View>
            {isValid.validName ? null :
              <View>
                <Text style={{ color: 'red' }}>It must contain alphabets only</Text>
              </View>
            }

            <View style={{ flexDirection: 'row', alignItems: 'center',  marginVertical: 10}}>
              {/* <DropdownProjectName
           getProjectNameReturn={getProjectNameReturn}
        
          />  */}
              <NewDropDown getProjectNameReturn={getProjectNameReturn} />
            </View>

            {/* <View style={{ margin: 10 }}> */}
            {/* Display loader if loading is true */}

            {/* <Button 
              title="Submit" 
              onPress={() => { handleSubmit()}} */}
            {/* disabled={BtnVisibility} */}
            {/* /> */}

            {/* </View> */}
          
        </ScrollView>}
          <View style={styles.buttonFlex}>
            <TouchableOpacity style={[styles.logOutButton]}
              onPress={() => { handleSubmit() }}>

              <Text style={styles.editProfileButtonText}>SUBMIT</Text>
            </TouchableOpacity>
          </View>
    </View> 
//  </KeyboardAvoidingView> 
  );
};

const styles = StyleSheet.create({

  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignContent:'center',
    // backgroundColor:'#2C3333',
    backgroundColor: 'white',
  },

  formContainer: {
    // flexGrow:1,
    padding: 15,
    
  },

  // inputWrapper:{
  //   marginBottom:15,
  // },

  inputStyle: {
    borderColor: '#16213E',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
  },

  buttonFlex: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    padding: 15
  },

  logOutButton: {
    width: 360,
    height: 50,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#000000",
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 10,
  },

  editProfileButtonText: {
color:"#FCF8F3"
  },
})
export default CreateLead;
