import React, { useEffect, useState} from 'react'
import { Text,View,TextInput,ToastAndroid,StyleSheet,Dimensions,ScrollView,KeyboardAvoidingView,Alert,ActivityIndicator,TouchableOpacity} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import axios from 'axios';
import {RadioGroup} from '../constants/RadioButtonCustom';
import DateTimePicker from '@react-native-community/datetimepicker';
import DropdownTextField from '../constants/DropdownTextField';
import LeadStatusDropDown from '../constants/LeadStatusDropDown';
import ValidationTextInput from './ValidationTextInput';
import { useNavigation,useTheme } from '@react-navigation/native';
const baseurl = require('../constants/baseurl');
const suburl = require('../constants/suburl');
import DropdownPtypeUpdate from '../constants/DropdownPtypeUpdate';
import PropTUpdateDropDown from '../constants/PropTUpdateDropDown';


const width= Dimensions.get('window').width

const UpdateLead =({route}) => {

  const {colors} = useTheme();
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [leadData, setleadData]=useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isValid, setIsValid] = useState({
                                          validName:'true',
                                          validMail:'true',
                                          validContact:'true',
                                          validBudget:'true',
                                          validLocation:'true',
                                          validDescription:'true'
                                        });
  const navigation = useNavigation();
  const { value } = route.params;

  const getDataFunc = (receivedKey,receivedValue) => {

    if(receivedKey==="lead_type")
    {
      setleadData({...leadData,lead_type:receivedValue})   
    }
    if(receivedKey==="status")
    {
      console.log("getDaTaFunc",(receivedValue.label))
      // setleadData({...leadData,status:receivedValue})
      setleadData({...leadData,status:receivedValue.label,type:receivedValue.value})   
    }
    // if(receivedKey==="type")
    // {
    //   setleadData({...leadData,type:receivedValue})   
    // }
    if(receivedKey==="location")
    {
      setleadData({...leadData,location:receivedValue})   
    }
    if(receivedKey==="buget")
    {
      setleadData({...leadData,buget:receivedValue})   
    }
    if(receivedKey==="contact")
    {
      setleadData({...leadData,contact:receivedValue})   
    }
    if(receivedKey==="email")
    {
      setleadData({...leadData,email:receivedValue})   
    }
  
};

const showToastWithGravity = (msg) => {
  ToastAndroid.showWithGravity(
  "Lead Updated Sucessfully",
    ToastAndroid.SHORT,
    ToastAndroid.CENTER,
  );

};

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios'); // On iOS, the picker is not dismissed automatically, so we need to handle it manually
    setDate(currentDate);
    setleadData({...leadData,reminder:currentDate.toLocaleDateString('en-US')})
  };
  const showMode = (currentMode) => {
    setShow(true);
    // setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
      
  };

  useEffect(()=>{
    fetchDataFromAPI();
   },[])

   const fetchDataFromAPI = async()=>{
    try{
      await new Promise(resolve => setTimeout(resolve, 2000));
      axios.get(baseurl.url + suburl.getSingleLead+value)
      .then(res =>{
  
        if (res.data.status==true)
         {
            console.log(res.data.data.leads)
            setleadData(res.data.data.leads);
            setIsLoading(false)
         }
         else 
         {
             Alert.alert('Invalid Data!', 'In LeadList Screen', [
                 { text: 'Okay' }
             ]);
             
         }
      })
    }
  catch(e)
  {
    console.log(e)
  }
   }
  const postDataAPI=  ()=>{
  
      try 
      {
      // axios.post(baseurl.url+""+suburl.updateLead,{
        axios.post('http://crmdemo.exceptionsolvers.com/api/updatesingleleads',{
          lead_id:leadData.id,
                        name:leadData.name,
                        email:leadData.email,
                        contact:leadData.contact,
                        type:leadData.type,
                        buget:leadData.buget,
                        location:leadData.location,
                        reminder:leadData.reminder,
                        status:leadData.status,
                        lead_type:leadData.lead_type,    
                        info:leadData.info,
        // params:leadDataCopy
        })
        .then(res => { 
         
          // console.log(res.status == 200);
        setIsLoading(false)
         if (res.status == 200)
           {
           
            showToastWithGravity()
            navigation.goBack();
            // Alert.alert(
            //   '',
            //   'Lead Updated Successfully',
            //   [
            //     { text: 'OK', onPress: () => navigation.goBack() },
            //     // You can add more buttons with different callbacks as needed
            //   ],
            //   { cancelable: false }
            // );  
           }
           else{

              Alert.alert(
                '',
                'Lead Update Failed',
                [
                    { text: 'OK',onPress:()=> navigation.goBack()},
                ],
                {cancelable:false}
              );
           }
         
        }) 
      } 
      catch (e) 
      {
        alert(e)
      }
  
  }

  const handleSubmit = () => {
    
    setIsLoading(true);
    // postDataAPI();
    // if(isValid.validBudget&&isValid.validContact&&isValid.validMail&&isValid.validName&&isValid.validLocation)
    if(isValid.validMail&&isValid.validName)
    {console.log("true 1nd cond enter ")
      
      // if(leadData.name && leadData.email && leadData.contact && leadData.buget && leadData.type && leadData.location && leadData.status && leadData.lead_type)
      if(leadData.name && leadData.email)      
      { 
        postDataAPI();
      }
      else
       {console.log("false 1nd cond enter ")
          let emptyFields = [];
          if(!leadData.name)
            {console.log(" 1 cond enter ")
              ToastAndroid.showWithGravity(
                "Lead Updated Sucessfully",
                  ToastAndroid.SHORT,
                  ToastAndroid.CENTER,
                );
            }
            if(!leadData.email)
              {console.log(" 2 cond enter ")
                Alert.alert(
                  "Error !!!",
                  "Email Id", 
                  [
                    { text: 'Okay' }
                  ])
              }
              // if(!leadData.contact)
              //   {console.log(" 3 cond enter ")
              //     Alert.alert(
              //       "Error !!!",
              //       "Contact", 
              //       [
              //         { text: 'Okay' }
              //       ])
              //   }
                // if(!leadData.buget)
                //   {console.log(" 4 cond enter ")
                //     Alert.alert(
                //       "Error !!!",
                //       "Budget", 
                //       [
                //         { text: 'Okay' }
                //       ])
                //   }
                  // if(!leadData.type)
                  //   {console.log(" 5 cond enter ")
                  //     Alert.alert(
                  //       "Error !!!",
                  //       "Type", 
                  //       [
                  //         { text: 'Okay' }
                  //       ])
                  //   }
                    // if(!leadData.location)
                    //   {console.log(" 6 cond enter ")
                    //     Alert.alert(
                    //       "Error !!!",
                    //       "Location", 
                    //       [
                    //         { text: 'Okay' }
                    //       ])
                    //   }
                      // if(!leadData.reminder)
                      //   {
                      //     emptyFields.push("Reminder Field");
                      //   }
                        // if(!leadData.status)
                        //   {console.log(" 7 cond enter ",leadData.status)
                        //     Alert.alert(
                        //       "Error !!!",
                        //       "Status", 
                        //       [
                        //         { text: 'Okay' }
                        //       ])
                        //   }
                          // if(!leadData.leadType)
                          //   {
                          //     emptyFields.push("Lead Type");
                          //   }
                            // if(!leadData.info)
                            //   {
                            //     emptyFields.push("Info Field");
                            //   }
            }
    }
    else
      {console.log("false 2nd cond enter ")
      Alert.alert('Invalid Data enter', '', [
        { text: 'Okay' }
      ])}
    
    setIsLoading(false);
  };
  
  const validateName = (name) => {
    // Regular expression for a valid full name (allowing only letters and spaces)
    const nameRegex = /^[a-zA-Z ]*$/;
    const isValidName = nameRegex.test(name);
    setIsValid({...isValid,validName:isValidName})
    
  };

  const validateEmail = (email) =>{
    // const emailRegex = /^[a-zA-Z0-9._%+\-\b]+@[a-zA-Z0-9.\-\b]+\.[a-zA-Z]{2,}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValidEmail = emailRegex.test(email);
    setIsValid({...isValid,validEmail:isValidEmail}) 
  }

  // const validateNumber = (contact) => {
  //   const mobileNumberRegex = /^\d{10}$/;
  //   const isValidContact = mobileNumberRegex.test(contact)
  //   setIsValid({...isValid,validContact:isValidContact})
  // }

  const validateBudget = (budget) =>{
    const budgetRegex = /^[0-9]+$/
    const isValidBudget = budgetRegex.test(budget)
    setIsValid({...isValid,validBudget:isValidBudget})
  }

  const validateLocation = (location) =>{
    const locationRegex = /^[a-zA-Z ]*$/;
    const isValidLocation = locationRegex.test(location)
    setIsValid({...isValid,validLocation:isValidLocation})
  }

  const validateDescription = (info) =>{
    const descriptionRegex = /^[a-zA-Z ]*$/;
    const isValidDescription = descriptionRegex.test(info)
    setIsValid({...isValid,validDescription:isValidDescription})
  }

  const getPropertyTypeReturn = (receivedValue) => {
    setleadData({...leadData,type:receivedValue});
     
  }
  return (
  
    <View style={{ flex: 1,justifyContent:'center',alignContent:'center',backgroundColor:colors.background}}>
    
      {isLoading ? (
      // <View style={{ justifyContent:'center',alignContent:'center',alignItems: 'center' }}>
          <ActivityIndicator size="large" color="#0000ff" />
          // </View>
        ) : (
        <ScrollView 
               style={ {padding: 15, backgroundColor:colors.background }}
               contentContainerStyle={{ paddingBottom:80 }}>
     
      
      <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal:10, marginVertical:10,borderWidth: 1, borderRadius: 5, borderColor:'#ccc'}}>
          <Icon name={"user"} size={20} color='#888' style={{ marginRight: 10 }} />
          <TextInput  
            style={{flex:1,color:colors.text}}
            placeholder="Name"
            placeholderTextColor={colors.text}
            value={leadData.name}
            onChangeText={(text)=>setleadData({...leadData,name:text})}
            // onBlur={()=>validateName(leadData.name)}
            // onChangeText={(text)=>validateFullName(text)}
            // onChangeText={(text) => setleadData({...leadData,name:text})}
          />
      </View>

      {isValid.validName ? null :
          <View>
            {/* <Text style={{color:'red'}}>It must contain alphabets only</Text> */}
          </View>
      }
    
      <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal:10, marginVertical:10,borderWidth: 1, borderRadius: 5, borderColor:'#ccc'}}>
          <Icon name={"envelope"} size={20} color='#888' style={{ marginRight: 10 }} />
          <TextInput  
            style={{flex:1,borderColor:isValid?'black':'red',color:colors.text}}
            placeholder="Email"
            placeholderTextColor={colors.text}
            value={leadData.email}
            onChangeText={(text)=>setleadData({...leadData,email:text})}
            // onBlur={()=>validateEmail(leadData.email)}
            // onChangeText={(text)=>validateEmail(text)}
            // onChangeText={(text) => setleadData({...leadData,email:text})}
          />
      </View> 
     
      {isValid.validMail ? null :
          <View>
            <Text style={{color:'red'}}>Invalid mail id</Text>
          </View>
      }

      
      <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal:10, marginVertical:10,borderWidth: 1, borderRadius: 5, borderColor:'#ccc'}}>
          <Icon name={"phone"} size={20} color='#888' style={{ marginRight: 10 }} />
          <TextInput  
            style={{flex:1,color:colors.text}}
            placeholder="Phone number"
            placeholderTextColor={colors.text}
            keyboardType="numeric"
            value={leadData.contact}
            onChangeText={(text) =>setleadData({...leadData,contact:text})}
            // onBlur={()=>validateNumber(leadData.contact)}
            // onChangeText={(text) => setleadData({...leadData,contact:text})}
          />
      </View> 
     
      {isValid.validContact ? null :
          <View>
            <Text style={{color:'red'}}>Invalid contact number</Text>
          </View>
      }
     {/* <View style={{ flexDirection:'row',alignItems:'center',paddingHorizontal:10, marginVertical:10,borderWidth:1,borderRadius:5, borderColor:'#CCC'}}>
            <Icon name={"building"} size={20} color='#888' style={{ marginRight:10}}/>
            <TextInput
              style={{flex:1}}
              placeholder='Property Type'
              value={leadData.type}
              />
     </View> */}

      <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical:10}}>
        <PropTUpdateDropDown
        //  getDataFunc={getDataFunc}
        //  identifier="status"
         PropertyType={leadData.type}
           getPropertyTypeReturn={getPropertyTypeReturn}
          // onSelect={leadData.type}
        /> 
       </View>
     {/* <View>
        <DropdownPropertyType
           getPropertyTypeReturn={getPropertyTypeReturn}
          onSelect={leadData.type}
        /> 
       </View> */}

      <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal:10, marginVertical:10,borderWidth: 1, borderRadius: 5, borderColor:'#ccc'}}>
          <Icon name={"rupee"} size={20} color='#888' style={{ marginRight: 10 }} />
          <TextInput  
            style={{flex:1,color:colors.text}}
            placeholder="Budget"
            placeholderTextColor={colors.text}
            keyboardType="numeric"
            value={leadData.buget}
            onChangeText={(text) => setleadData({...leadData,buget:text})}
            // onBlur={()=>validateBudget(leadData.buget)}
          />
      </View>      

      {isValid.validBudget ? null :
          <View>
            <Text style={{color:'red'}}>Invalid Price</Text>
          </View>
      }

      <View style={{ flexDirection:'row', alignItems:'center', paddingHorizontal:10, marginVertical:10, borderWidth:1, borderRadius:5, borderColor:'#CCC'}}>
          <Icon name={"map-marker"} size={20} color='#888' style={{ marginRight:10}}/>
          <TextInput
            style={{flex:1,color:colors.text}}
            placeholder="location"
            placeholderTextColor={colors.text}
            value={leadData.location}
            onChangeText={(text) =>setleadData({...leadData,location:text})}
            // onBlur={()=>validateLocation(leadData.location)}
          />
      </View>

        {isValid.validLocation ? null :
          <View>
            <Text style={{color:'red'}}>Invalid location</Text>
          </View>
        }

      <View style={{ flexDirection:'row', alignItems:'center',paddingHorizontal:10, marginVertical:10, borderWidth:1, borderRadius:5, borderColor:'#CCC'}}> 
          <Icon name={"edit"} size={20} color='#888' style={{ marginRight:10}}/>
          <TextInput
            style={{flex:1,color:colors.text}}
            placeholder="description "
            placeholderTextColor={colors.text}
            onChangeText={(text) =>setleadData({...leadData,info:text})}
            // onBlur={()=>validateDescription(leadData.info)}
          />
      </View>
    
       {isValid.validDescription ? null :
          <View>
            <Text style={{color:'red'}}>Only alphabets allowed</Text>
          </View>
        }

      {/* <TextFieldWithIcon
        iconName="calendar"
        placeholder="calendar"
        keyboardType="numeric"
      /> */}
      <View style={{ flexDirection:'row', alignItems:'center',paddingHorizontal:10, marginVertical:10, borderWidth:1, borderRadius:5, borderColor:'#CCC'}}> 
          <Icon name={"calendar"} size={20} color='#888' style={{ marginRight:10}}/>
          <TextInput
            style={{flex:1,color:colors.text}}
            placeholder="YYYY-MM-DD"
            placeholderTextColor={colors.text}
            value={date.toISOString().split('T')[0]}
          onPressIn={showDatepicker}
          />
      </View>
        {/* <TextFieldWithIcon
          iconName="calendar"
          placeholder="YYYY-MM-DD"
          // placeholderTextColor="#666666"
          style={{borderColor:'#16213E',borderWidth:1,borderRadius:10,padding:10}}
          value={date.toISOString().split('T')[0]}
          onPressIn={showDatepicker}
        /> */}

        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode={mode} 
            is24Hour={true}
            display="default"
            onChange={onChange}
            style={{
              backgroundColor: colors.background,
              color:colors.text
            }}
          />
          )
        } 
        <View style={{ flexDirection: 'row', alignItems: 'center',  marginVertical:10}}>
      <RadioGroup 
        getDataFunc={getDataFunc}
        identifier="lead_type"
        
        leadType={leadData.lead_type}
      />
      </View>
    {/* <DropdownTextField
      getDataFunc={getDataFunc}
      identifier="status"
      leadStatus={leadData.status}
      
    />  */}
    <View style={{ flexDirection: 'row', alignItems: 'center',  marginVertical:10}}>
      <LeadStatusDropDown
        getDataFunc={getDataFunc}
        
        identifier="status"
        leadStatus={leadData.status}
      />
    </View>
      {/* <TextFieldWithIcon
        iconName="building"
        placeholder="Status"
        keyboardType="numeric"
      /> */}
    
          
          </ScrollView>)}
          <View style={styles.buttonFlex}>
            <TouchableOpacity style={[styles.logOutButton]}
              onPress={() => { handleSubmit() }}>

              <Text style={styles.editProfileButtonText}>Update</Text>
            </TouchableOpacity>
          </View>
          </View> );
};
      {/* Add more inputs as needed */}
      {/* <View style={{ margin: 10 }}>
        {/* Display loader if loading is true */}
     
          // <Button title="Submit" onPress={handleSubmit} />
        
      // </View> 
  
const styles = StyleSheet.create({
    buttonFlex: {
      flex:1,
      justifyContent:"flex-end",
      alignItems:"center",
      padding:20
    },

    logOutButton: {
      width:360,
      height:50,
      borderRadius:15,
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:"#000000",
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
});
export default UpdateLead;
