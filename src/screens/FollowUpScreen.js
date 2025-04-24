import React, { useState } from "react";
import {View, Text, Switch, TouchableOpacity, StyleSheet, Image, Button} from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
// import UserAvatar from 'react-native-user-avatar';
import FontAwesome from 'react-native-vector-icons/FontAwesome';


const FollowUpScreen = () =>{

    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState =>!previousState);

    return(<View style={styles.container}>
              
              <View style = {[styles.modal,{height: 300 }]}>
                <View style={{height:80,width:'100%',flexDirection:'column'}}>
                  <Text style={{fontWeight:'bold',fontSize:15}}>Assigned to</Text>
                  <Text style={{fontWeight:'bold',fontSize:15}}>Rahul Pandurang More</Text>
                </View>
                <View style={{height:220,width:'100%',flexDirection:'column'}}>
                  <View style={{flex:1,height:80,width:'100%',flexDirection:'row',alignItems:'center',justifyContent:'flex-start',paddingLeft:10}}>
                    <FontAwesome
                      name="clock-o"
                      // color={colors.text}
                      size={30}
                     
                    />
                    <Text style={{fontWeight:'bold',fontSize:15,paddingLeft:10}}>Next follow-up Date</Text>
                  </View>
                  <View style={{height:140,width:'100%',flexDirection:'column'}}>

                  <View style={{flex:1,flexDirection:'row',justifyContent:'space-evenly'}}>
             
                <View style = {styles.chipView}>
                <Text >In Next Hour</Text>
                </View>
                
                <View style = {styles.chipView}>
                <Text >Tomorrow</Text>
                </View>
                </View> 

                <View style={{flex:1,flexDirection:'row',justifyContent:'space-evenly'}}>
             
             <View style = {styles.chipView}>
             <Text >Next Weekly</Text>
             </View>
             
             <View style = {styles.chipView}>
             <Text >Custom</Text>
             </View>
             </View> 

                

                  </View>
                </View>
              </View> 
              
              <View style = {[styles.modal,{height: 200,flexDirection:'column' }]}> 
              <View style = {{height:80,width:'100%',flexDirection:'row',alignItems:'center',justifyContent:'flex-start',justifyContent:'space-evenly'}}>
              <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                  <View style={{flex:1,flexDirection:'row',alignItems:'center',justifyContent:'flex-start',justifyContent:'space-evenly'}}>
                    <FontAwesome
                      name="repeat"
                      // color={colors.text}
                      size={30}
                    />
                    <Text style={{fontWeight:'bold',fontSize:15}}>Repeat follow-up</Text>
                  </View>
                   
                    <View style={{flex:1,justifyContent:'flex-end'}}>
                      <Switch 
                            trackColor={{false: '#767577', true: '#81b0ff'}}
                            thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={toggleSwitch}
                            value={isEnabled}
                            />
                    </View>
                </View>
                    
              </View>
              <View style={{height:120,width:'100%',flexDirection:'column'}}>
              <View style={{flex:1,flexDirection:'row',justifyContent:'space-evenly'}}>
              {/* <Text >Repeat Follow-up</Text> */}
                <View style = {styles.chipView}>
                <Text >Weekly</Text>
                </View>
                
                <View style = {styles.chipView}>
                <Text >Monthly</Text>
                </View>
                </View> 
                <View style={{flex:1,flexDirection:'row',justifyContent:'space-evenly'}}>
              {/* <Text >Repeat Follow-up</Text> */}
                <View style = {styles.chipView}>
                <Text >Quarterly</Text>
                </View>
                
                <View style = {styles.chipView}>
                <Text >Annually</Text>
                </View>
                </View> 
                </View>
              </View>
              <View style = {[styles.modal,{height: 80,justifyContent: 'center'}]}> 

              <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                  <View style={{flex:1,flexDirection:'row',alignItems:'center',justifyContent:'flex-start',justifyContent:'space-evenly'}}>
                    <FontAwesome
                      name="ban"
                      // color={colors.text}
                      size={30}
                    />
                    <Text style={{fontWeight:'bold',fontSize:15}}>Do not follow-up</Text>
                  </View>
                   
                    <View style={{flex:1,justifyContent:'flex-end'}}>
                      <Switch 
                            trackColor={{false: '#767577', true: '#81b0ff'}}
                            thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={toggleSwitch}
                            value={isEnabled}
                            />
                    </View>
                </View>
              {/* <Text >Do not follow-up</Text> */}
              </View>

             
            
          </View>)
    
}

export default FollowUpScreen;

const styles = StyleSheet.create({

    container :{
        flex: 1,
        alignItems: 'center',  
        justifyContent: 'space-evenly',
        backgroundColor: 'white',

    },
    modal:{
      // justifyContent: 'center',  
      alignItems: 'center',   
      backgroundColor : "white",   
      // height: 300 ,  
      width: '90%',  
      borderRadius:10,  
      borderWidth: 1,  
      borderColor: '#fff',    
      // marginTop: 80,  
      // marginLeft: 40,  
      // shadowColor: '#000',
      // shadowOffset: {
      //   width: 0,
      //   height: 2,
      // },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
       
    },

    chipView: {
        height: '50%' ,  
        width: '40%', 
        backgroundColor: 'white',
        borderRadius: 20,
       justifyContent:'center',
        // alignContent:'center',
        alignItems:'center',
        // padding: 35,
        // alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
      },
})
