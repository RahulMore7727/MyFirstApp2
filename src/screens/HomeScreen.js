import React, { useState, useEffect } from "react";
import {View, Text,TouchableOpacity,StyleSheet,ActivityIndicator,ScrollView,RefreshControl,SafeAreaView,Alert } from "react-native";
import { FloatingAction } from "react-native-floating-action";
import Icon , { Icons }  from "./Icons";
import PopupMenu from "./PopupMenu";
import { AuthContext } from '../context/AuthContext';
import {_retrieveData} from '../constants/CurrentUserInfo';
import baseurl from "../constants/baseurl";
import suburl from "../constants/suburl";
import axios from 'axios';
import { useTheme } from '@react-navigation/native';
import messaging from '@react-native-firebase/messaging';
// import PushNotification from 'react-native-push-notification';

const actions = [
  {
    text: "Add Lead",
    icon: require("./Images/ic_accessibility_white.png"),
    // name: "bt_accessibility",
    name: "CreateLead",
    position: 1,
    color:"#000000"
  },
  
  {
    text: "Reports",
    icon: require("./Images/ic_language_white.png"),
    // name: "bt_language",
    name: "Lead Statistics",
    position: 2,
    color:"#000000"
  },
  // {
  //   text: "Option 3",
  //   icon: require("./Images/ic_room_white.png"),
  //   // name: "bt_room",
  //   name: "ViewLeadDetails",
  //   position: 3,
  //   color:"#000000"
  // },
  // {
  //   text: "Option 4",
  //   icon: require("./Images/ic_videocam_white.png"),
  //   name: "ProfileScreen",
  //   position: 4,
  //   color:"#000000"
  // }
];



const HomeScreen = ({navigation}) =>{
  const [isLoading, setIsLoading] = useState(true);
  const [id, setId] = useState(0);
  const [leadsCount, setLeadsCount] = useState();
  const [refreshing, setRefreshing] = useState(false);
  const { colors } = useTheme();
  
  useEffect(() => {
   
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      console.log('A new FCM message arrived!', JSON.stringify(remoteMessage));
      // PushNotification.localNotification({
      //   title: remoteMessage.notification?.title,
      //   message: remoteMessage.notification?.body,
      // });
      // You can use a third-party library like react-native-push-notification or your own custom UI
      Alert.alert('New Notification', remoteMessage.notification?.title || 'New message received!');
    });

     
    fetchDataFromAPI();
    return unsubscribe;
  }, []);

  const fetchDataFromAPI = async () => {
    try
      {
        _retrieveData().then(result=>(  
          axios.get(baseurl.url+suburl.leadsCountName+JSON.parse(result))
          .then(res => {
            if(res.data.status === true)
            {console.log("in Home SCreen",res.data.data)
              setLeadsCount(res.data.data)
              
              setIsLoading(false)
              setId(JSON.parse(result))
            }
            })
          
          ))
          // await new Promise(resolve => setTimeout(resolve, 2000));

          // axios.get('http://crmdemo.exceptionsolvers.com/api/getstats/121')
        // axios.get(baseurl.url+suburl.leadsCount+id)
        // .then(res => {
        //   if(res.data.status === true)
        //   {
        //     setLeadsCount(res.data.data)
        //     setIsLoading(false)
        //   }
        // })
      }
    catch(e)
      {
          // console.log("custome Error MSG in HomeScreen",e)
      }
  }

  const onRefresh = () =>{
    setRefreshing(true)
    fetchDataFromAPI()
    setRefreshing(false)
  }
// _retrieveData().then(result=>( setId(JSON.parse(result))))
  

    return (
      
      <SafeAreaView style={{flex: 1,flexDirection:'column', alignItems: 'center', justifyContent: 'flex-start',backgroundColor :colors.background }}>
      <ScrollView 
          contentContainerStyle={{flex: 1,flexDirection:'column', alignItems: 'center', justifyContent: 'flex-start',backgroundColor :colors.background }}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
            />
          }
      >

      {/* <View style={{ flex: 1,flexDirection:'column', alignItems: 'center', justifyContent: 'flex-start',backgroundColor :colors.background }}> */}
      
        {isLoading ? (
          
        <ActivityIndicator size="large" color="#0000ff" />)
       :(<View>
        {console.log("LLLLLLL",leadsCount)}
          {/* <View style = {{height:120,width:'100%',flexDirection:'row',alignItems:'center',justifyContent:'flex-start',justifyContent:'space-evenly',backgroundColor:'green'}}> */}
            <View style={[styles.modal]}>
              {/* <View style={{height:'20%',flexDirection:'row',justifyContent:'center',alignItems:'center',backgroundColor:'grey'}}> */}
                <TouchableOpacity 
                    onPress={() => navigation.navigate('LeadList',{id,status:'Row Leads',ScreenName:"Row Lead"})}
                    style={[styles.chipView,{flexDirection:'column',justifyContent:'space-evenly',backgroundColor:'white'}]}>
                        <Icon
                          name='open-with'
                          type={Icons.MaterialIcons}
                          size={40}
                          color="#009387"
                        />
                    
                       <Text style={styles.textStyle}>Row Leads</Text>
                       <Text style={{color:"grey",fontSize:15}}>{leadsCount.raw_leads}</Text>
                </TouchableOpacity>
                            
                <TouchableOpacity
                    onPress={() => navigation.navigate('LeadList',{id:id,status:"open",ScreenName:"Open Lead"})}
                    style={[styles.chipView,{flexDirection:'column',justifyContent:'space-evenly',backgroundColor:'white'}]}>
                    
                        <Icon
                          name="open-with"
                          type={Icons.MaterialIcons}
                          size={40}
                          color="#009387"
                        />
                    
                        <Text style={styles.textStyle}>Open Leads</Text>
                        <Text style={{color:"grey",fontSize:15}}>{leadsCount.open_leads}</Text>
                </TouchableOpacity>
              
            </View>

            <View style={[styles.modal]}>
            {/* <View style={{height:'20%',flexDirection:'row',justifyContent:'center',alignItems:'center',backgroundColor:'pink'}}> */}
              <TouchableOpacity 
                onPress={() => navigation.navigate('LeadList',{id:id,status:"Working",ScreenName:"Working Lead"})}
                style={[styles.chipView,{flexDirection:'column',justifyContent:'space-evenly',backgroundColor:'white'}]}>
                
                  
                     <Icon
                        name="work"
                        type={Icons.MaterialIcons}
                        size={40}
                        color="#009387"
                      />
                  
                     <Text style={styles.textStyle}>Working Leads</Text>
                     <Text style={{color:"grey",fontSize:15}}>{leadsCount.working_leads}</Text>
              </TouchableOpacity>
             
              <TouchableOpacity 
                  onPress={() => navigation.navigate('LeadList',{id:id,status:"Overdue",ScreenName:"Overdue Lead"})}
                style={[styles.chipView,{flexDirection:'column',justifyContent:'space-evenly',backgroundColor:'white'}]}>
                     
                       <Icon
                          name="call-missed-outgoing"
                          type={Icons.MaterialIcons}
                          size={40}
                          color="#009387"
                        />   
                
                     <Text style={styles.textStyle}>Overdue Leads</Text>
                     <Text style={{color:"grey",fontSize:15}}>{leadsCount.overdue_leads}</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.modal}>
            {/* <View style={{height:'20%',flexDirection:'row',justifyContent:'center',alignItems:'center',backgroundColor:'black'}}> */}
                 
              <TouchableOpacity
                  onPress={() => navigation.navigate('LeadList',{id:id,status:"Close",ScreenName:"Closed Lead"})} 
                  style={[styles.chipView,{flexDirection:'column',justifyContent:'space-evenly',backgroundColor:'white'}]}>
                
                      <Icon
                        name="close"
                        type={Icons.MaterialIcons}
                        size={40}
                        color="#009387"
                      />
              
                    <Text style={styles.textStyle}>Close Leads</Text>
                    <Text style={{color:"grey",fontSize:15}}>{leadsCount.close_leads}</Text>
              </TouchableOpacity>
                
              <TouchableOpacity 
                    onPress={() => navigation.navigate('LeadList',{id:id,status:"visit",ScreenName:"Visit Lead"})}
                    style={[styles.chipView,{flexDirection:'column',justifyContent:'space-evenly',backgroundColor:'white'}]}>
                     
                      <Icon
                        name="airport-shuttle"
                        type={Icons.MaterialIcons}
                        size={40}
                        color="#009387"
                      />
                      
                      <Text style={styles.textStyle}>Visiting Schedule</Text> 
                      <Text style={{color:"grey",fontSize:15}}>{leadsCount.visit_leads}</Text>
                 
              </TouchableOpacity>
              
            </View>

            <View style={styles.modal}>
            {/* <View style={{height:'20%',flexDirection:'row',justifyContent:'center',alignItems:'center',backgroundColor:'red'}}> */}
                        
              <TouchableOpacity 
                    onPress={() => navigation.navigate('LeadList',{id:id,status:"lead successfully done",ScreenName:"Complete Lead"})}
                    style={[styles.chipView,{flexDirection:'column',justifyContent:'space-evenly',backgroundColor:'white'}]}>
                   
                      <Icon
                        name="check-circle"
                        type={Icons.MaterialIcons}
                        size={40}
                        color="#009387"
                      />
                     
                      <Text style={styles.textStyle}>Lead Successfully</Text>
                      <Text style={{color:"grey",fontSize:15}}>{leadsCount.success_leads}</Text>
                 
              </TouchableOpacity>
              
               {/* <TouchableOpacity 
                    onPress={() => navigation.navigate('ProfileScreen')}
                    style={[styles.chipView,{flexDirection:'column',justifyContent:'space-evenly',}]}>
                  
                      <Icon
                        name="user"
                        type={Icons.FontAwesome}
                        size={40}
                        color="#009387"
                      />
      
                      <Text style={styles.textStyle}>Profile</Text>
                      <Text style={{color:"grey",fontSize:15}}>{id}</Text>
                  
              </TouchableOpacity> */}
            </View>              
           
           
        {/* </View> */}
        {/* </View> */}
        </View>)
          }
        <FloatingAction
                 actions={actions} 
                 onPressItem={name => { 
                 navigation.navigate(name,{leadsCount:leadsCount}) 
                }} 
                color="#000000"
             />  
    {/* </View> */}
    </ScrollView>
    </SafeAreaView>
  );
 
}
 
export default HomeScreen;

const styles = StyleSheet.create({

// modal:{
//     flex:1,
//     flexDirection:'row',
//     justifyContent:'center',
//     alignContent:'space-between',
//     alignItems:'center',    
//     width:wp('100%'),  
//     // backgroundColor:'grey',
//     // borderRadius:10,  
//     // borderWidth: 1,  
//     // borderColor: '#fff',    
//     // shadowOffset: {
//     //   width: 0,
//     //   height: 2,
//     // },
//     // shadowOpacity: 0.25,
//     // shadowRadius: 4,
//     // elevation: 5,
//     // marginBottom:'2%'
//  },

 modal:{
        height:'23%',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        // backgroundColor:'red'                        
 },

 chipView: {
  margin:10,
  height: '80%' ,  
  width: '45%', 
  borderRadius: 20,
  justifyContent:'center',
  alignItems:'center',
  textAlign:'center',
  shadowColor: '#000',
  backgroundColor: 'white',
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 4,
  elevation: 10,
},
textStyle:{
  color:'black',
  fontSize:15,
  fontWeight:'bold'
}
})
