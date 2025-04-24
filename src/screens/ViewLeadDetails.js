import React, { useState,useEffect } from "react";
import {View,Text,TouchableOpacity,StyleSheet,ScrollView,ActivityIndicator,Linking, Platform} from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
// import UserAvatar from 'react-native-user-avatar';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Icon , { Icons }  from "./Icons";
import ReactNativePhoneCall from 'react-native-phone-call';
import TimelineScreen from "./TimelineScreen";
const baseurl = require('../constants/baseurl');
const suburl = require('../constants/suburl');
import axios from 'axios';


const makeCall = (phoneNumber) => {
  // let phoneNumberWithoutSpaces = phoneNumber.replace(/\s/g, '');
  let phoneNumberWithoutSpaces = phoneNumber.replace(/\s/g, '');
  let url;

  if (Platform.OS === 'android') {
    url = `tel:${phoneNumberWithoutSpaces}`;
  } else {
    url = `telprompt:${phoneNumberWithoutSpaces}`;
  }

  Linking.openURL(url)
    .then((supported) => {
      if (!supported) {
        console.log('Phone number is not available');
      }
    })
    .catch((err) => console.error('An error occurred: ', err));
};

const ViewLeadDetails = ({route})=>{

  const [leadData, setleadData]=useState(null);
  const [leadTrackData, setLeadTrackData]=useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { value } = route.params;

  useEffect(()=>{
fetchDataFromAPI();
  //   try 
  //   {
  //      axios.get(baseurl.url + suburl.getSingleLead+value)
  //      .then(res => { 
         
  //       if (res.data.status==true)
  //       {
  //        setleadData(res.data.data.leads);
  //        setLeadTrackData(res.data.data.lead_track)
  //           console.log("data Test"+leadTrackData) 
  //        }
  //        else 
  //        {
  //            Alert.alert('Invalid Data!', 'In LeadList Screen', [
  //                { text: 'Okay' }
  //            ]);
             
  //        }
        
  //      }) 
  //    } 
  //  catch (e) 
  //    {
  //      console.log(e)
  //    }
  },[])

  const fetchDataFromAPI = async () => {
    try
      {

        axios.get(baseurl.url + suburl.getSingleLead+value)
        .then(res => { 
          
         if (res.data.status==true)
         { 
          // console.log(res.data)
          setleadData(res.data.data.leads);
          setLeadTrackData(res.data.data.lead_track)
          setIsLoading(false)
             console.log("data Test",leadData) 
             console.log("data test 2",res.data.data.leads)
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
        console.log("Custom Error MSG in ViewLeadDetails",e)
      }
  }
  // const [modalVisible, setModalVisible] = useState(false);
  // const [isEnabled, setIsEnabled] = useState(false);
  // const toggleSwitch = () => setIsEnabled(previousState =>!previousState);
  const makePhoneCall = (contact) => {console.log("Make call fun",contact)
  //   // Check for perfect 10 digit length
  //   if (contact.length != 10) {
  //     alert('Please insert correct contact number');
  //     return;
  //   }
  
    const args = {
      number: {contact },
      prompt: true,
    };
  
   call(args).catch(console.error);
    // Make a call
    // ReactNativePhoneCall.call(args).catch(console.error);
  };
  return( 
          <ScrollView contentContainerStyle={styles.container}>
           
           {isLoading ?( <ActivityIndicator size="large" color="#0000ff" />):(
            <View>
            <View style = {[styles.modal,{flexDirection:"row",alignContent:"space-around",height: hp('15%') }]}>
            
              <View style={{justifyContent:"center",alignItems:'flex-start',margin:10}}>
                <Text style={{fontSize:18,fontWeight:'bold',color:'black'}}>ID : </Text>
                <Text style={{fontSize:18,fontWeight:'bold',color:'black'}}>Name : </Text>
                <Text style={{fontSize:18,fontWeight:'bold',color:'black'}} >Email ID : </Text>
                <TouchableOpacity onPress={()=>makeCall(leadData.contact)}><Text style={{fontSize:20,fontWeight:'bold',color:'black'}}>Contact : </Text></TouchableOpacity>
              </View>
              
              <View style={{flex:1,justifyContent:"center",alignItems:'flex-start'}}>
                <Text style={{fontSize:18,color:'grey'}}>{leadData.id}</Text>
                <Text style={{fontSize:18,color:'grey'}}>{leadData.name}</Text>
                <Text style={{fontSize:18,color:'grey'}}>{leadData.email}</Text>
                <Text style={{fontSize:18,color:'grey'}}>{leadData.contact}</Text>
              </View>
                
              {/* <View style = {{height:hp('10%'),width:wp('95%'),flexDirection:"row",justifyContent:"space-evenly",alignItems:'center'  }}>
                  <TouchableOpacity
                   // onPress={() => navigation.navigate('TabScreen')}
                      style={[styles.login, {
                          borderColor: '#009387',
                          borderWidth: 1,
                          marginTop: 10
                      }]}
                   >
                    <Icon
                      name="call-outline"
                      type={Icons.Ionicons}
                      size={30}
                      color="white"
                    />
                 </TouchableOpacity>
                <TouchableOpacity
                   // onPress={() => navigation.navigate('TabScreen')}
                      style={[styles.login, {
                          borderColor: '#009387',
                          borderWidth: 1,
                          marginTop: 10
                      }]}
                  >
                     <Icon
                        name="whatsapp"
                        type={Icons.FontAwesome}
                        size={40}
                        color="white"
                      />
                </TouchableOpacity>
               
               <TouchableOpacity
                  style={[styles.login,{
                    borderColor:'#009387',
                    borderWidth: 1,
                    marginTop: 10
                  }]}>
                <Icon
                  name="message-square"
                  type={Icons.Feather}
                  size={30}
                  color="white"
                />
                </TouchableOpacity>

                <TouchableOpacity
                  style={[styles.login,{
                    borderColor:'#009387',
                    borderWidth: 1,
                    marginTop: 10
                  }]}>
                    <Icon
                      name="mail"
                      type={Icons.Feather}
                      size={30}
                      color="white"
                    />
                </TouchableOpacity>
                
                {/* <TouchableOpacity
                  style={[styles.login,{
                    borderColor:'#009387',
                    borderWidth: 1,
                    marginTop: 10
                  }]}>
                    <Icon
                      name="map-marked-alt"
                      type={Icons.FontAwesome5}
                      size={30}
                      color="white"
                    />
                </TouchableOpacity> */}
                {/* <TouchableOpacity
                   style={[styles.login,{
                    borderColor:'#009387',
                    borderWidth: 1,
                    marginTop: 10
                  }]}>
                    <Icon
                      name="attachment"
                      type={Icons.Entypo}
                      size={30}
                      color="white"
                    />
                </TouchableOpacity> */}
              {/* </View>  */}

            </View> 
            
            <View style = {[styles.modal,{flexDirection:"row",justifyContent: "space-around",alignContent:"space-around"}]}> 

            <View style = {{flex:1,flexDirection:'column',justifyContent:"space-around"}}>
                                        
                  <View style={styles.chipView}>
                    <Text style={{fontWeight:"500",color:"black"}}>Lead Type</Text>
                    <Text style={{color:"grey"}}>{leadData.lead_type}</Text>
                  </View>
                                  
                  <View style={styles.chipView}>
                    <Text style={{fontWeight:"500",color:"black"}}>Lead Status</Text>
                    <Text style={{color:"grey"}}>{leadData.status}</Text>
                  </View>
                
                  <View style={styles.chipView}>
                    <Text style={{fontWeight:"500",color:"black"}}>Budget</Text>
                    <Text style={{color:"grey"}}>{leadData.buget}</Text>
                  </View>
 
            </View>
      
            <View style={{flex:1,flexDirection:'column',justifyContent:"space-around"}}>
                  <View style={styles.chipView}>
                    <Text style={{fontWeight:"500",color:"black"}}>Property Type</Text>
                    <Text style={{color:"grey"}}>{leadData.type}</Text>
                  </View>
              
                  <View style={styles.chipView}>
                    <Text style={{fontWeight:"500",color:"black"}}>Location</Text>
                    <Text style={{color:"grey"}}>{leadData.location}</Text>
                  </View>
                  <View style={styles.chipView}>
                    <Text style={{fontWeight:"500",color:"black"}}>Project Name</Text>
                    <Text style={{color:"grey"}}>{leadData.lead_type}</Text>
                  </View>
              </View>
          </View>

             {/* <View style = {[styles.modal,{height: 150,flexDirection:'column'}]}>   */}
             {/* <View style = {{height:80,width:'100%',flexDirection:'row',alignItems:'center',justifyContent:'flex-start',justifyContent:'space-evenly'}}> */}
            {/*  optional statement <View style={{flexDirection:'row',justifyContent:'space-between',backgroundColor:'pink'}}> */}
                {/* <View style={{flex:20,margin:10}}>
                  <Icon
                    name="pluscircle"
                    type={Icons.AntDesign}
                    // optional statement color="#009387"
                    color="black"
                    size={40}
                  />
                  
                </View> */}
                {/* <View style={{flex:80,paddingTop:10,}}>
                  <Text style={{color:'#009387'}}>Assignment & Follow-up</Text>
                  <Text style={{color:'black'}}>Assign Linda to your team</Text>
                  <Text style={{color:'black'}}>Set Follow-up for Linda</Text>
                </View>       */}
               
            {/* </View> */}
            
              {/* <View style={{height:70,width:'100%',flexDirection:'column'}}>
                
                  <View style={{borderBottomColor: 'black',
                    borderBottomWidth: StyleSheet.hairlineWidth}}/>
                    
                  <View style={{height:70,width:'100%',flexDirection:'row',justifyContent:'flex-end',alignItems:'center',paddingRight:10}}>
                    <Text style={{fontWeight:"500",color:"black",textAlign:'center',alignContent:'center'}}>Change Follow-up</Text>
                    <Icon 
                      name="right"
                      type={Icons.AntDesign}
                      color="black"
                      size={22}
                    />
                </View>   
              </View> */}
            {/* </View> */}
            
              <TimelineScreen leadTrackData={leadTrackData}/>

            </View>
            
          // </View>
          )}
          
        </ScrollView>
       
        )
    
}

export default ViewLeadDetails;

const styles = StyleSheet.create({

  container :{
    flexGrow: 1,
    alignItems: 'center',  
    // backgroundColor: 'pink',

  },
  modal:{
  // justifyContent: 'center',  
    alignItems: 'center',   
    backgroundColor : "white",   
    // height: 300 ,  
    width:wp('95%'),  
    borderRadius:10,  
    borderWidth: 1,  
    borderColor: '#fff',    
    // marginTop: 80,  
    // marginLeft: 40,  
    // shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    marginBottom:'2%'
 },

 chipView: {
    flex:1,
    // height: '20%',
    flexDirection:"column",
    justifyContent:'space-around',
    alignItems:'center',
    padding:5,
    margin:10,
    borderRadius:5,
    shadowColor: '#000',
    backgroundColor: 'white',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  
  login: {
    width: '15%',
    height: '70%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    backgroundColor:'#009387'
},
modalView: {
  margin: 20,
  backgroundColor: 'white',
  borderRadius: 20,
  padding: 35,
  alignItems: 'center',
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 4,
  elevation: 5,
},
list: {
  flex: 1,
  marginTop:20,
},
})