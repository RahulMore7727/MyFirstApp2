import React from "react";
import {View, Text,TouchableOpacity,StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import { Menu, MenuItem, MenuDivider } from 'react-native-material-menu';
import PieChart from 'react-native-pie-chart';
import { useTheme } from '@react-navigation/native';

const LeadStageReport = (route) =>{
  
  const widthAndHeight = 250
  const sliceColor = ['#fbd203', '#0ae0f7', '#220af7', '#ff6c00', '#ff3c00']
  const { leadsCount } = route.route.params;
  const { colors } = useTheme();
  const series = [leadsCount.raw_leads,leadsCount.open_leads,leadsCount.working_leads,
                  leadsCount.overdue_leads,leadsCount.close_leads]
    return (

      <View style={{ flex: 1, alignItems: 'center',justifyContent:'space-around', backgroundColor:colors.background }}>
                    {console.log(JSON.stringify(route.route))}
                     {/* {console.log(JSON.stringify(leadsCount.raw_leads))} */}
            {/* <View style = {[styles.modal,{height: 300,justifyContent: 'center',backgroundColor:colors.background}]}>  */}
                              
                  <PieChart
                    widthAndHeight={widthAndHeight}
                    series={series}
                    sliceColor={sliceColor}
                    coverRadius={0.45}
                    coverFill={'#FFF'}
                  />
          
            {/* </View> */}
            
            <View style = {[styles.modal,{marginVertical:20 ,height: 370,flexDirection:'column',backgroundColor:colors.background}]}> 
            
            <View style = {{height:60,width:'100%',flexDirection:'row',alignItems:'center',justifyContent:'flex-start',justifyContent:'space-between'}}>
            
                <Text style={{fontSize:18,fontWeight:'bold',color:'black',paddingStart:5}}>Lead Potential</Text>
                <Text style={{fontSize:18,fontWeight:'bold',color:'black',paddingEnd:10}}>Leads</Text>
                  
            </View>
            
              <View style={{height:300,width:'100%',flexDirection:'column'}}>
                
                  <View style={{borderBottomColor: 'black',
                    borderBottomWidth: StyleSheet.hairlineWidth}}/>
                    
                 <View style={{height:60,width:'100%',flexDirection:'row',justifyContent:'space-between',alignItems:'center',alignContent:'center'}}>
                    <View style={{height:60,width:'50%',flexDirection:'row',justifyContent:'flex-start',alignItems:'center',alignContent:'center',paddingStart:5}}>
                      <View style={[styles.chipView,{backgroundColor: '#fbd203'}]}/>
                      <Text style={{color:'black',paddingStart:5}}>Row Lead</Text>
                    </View>
                   <Text style={{color:'grey',paddingEnd:20}}>{leadsCount.raw_leads}</Text>
                </View> 
                
                <View style={{borderBottomColor: 'lightgrey',
                    borderBottomWidth: StyleSheet.hairlineWidth}}/> 
                    <View style={{height:60,width:'100%',flexDirection:'row',justifyContent:'space-between',alignItems:'center',alignContent:'center'}}>
                    <View style={{height:60,width:'50%',flexDirection:'row',justifyContent:'flex-start',alignItems:'center',alignContent:'center',paddingStart:5}}>
                      <View style={[styles.chipView,{backgroundColor: '#0ae0f7'}]}/>
                      <Text style={{color:'black',paddingStart:5}}>Open Lead</Text>
                    </View>
                   <Text style={{color:'grey',paddingEnd:20}}>{leadsCount.open_leads}</Text>
                </View> 

                <View style={{borderBottomColor: 'lightgrey',
                    borderBottomWidth: StyleSheet.hairlineWidth}}/> 
                    <View style={{height:60,width:'100%',flexDirection:'row',justifyContent:'space-between',alignItems:'center',alignContent:'center'}}>
                    <View style={{height:60,width:'50%',flexDirection:'row',justifyContent:'flex-start',alignItems:'center',alignContent:'center',paddingStart:5}}>
                      <View style={[styles.chipView,{backgroundColor: '#220af7'}]}/>
                      <Text style={{color:'black',paddingStart:5}}>Working Lead</Text>
                    </View>
                   <Text style={{color:'grey',paddingEnd:20}}>{leadsCount.working_leads}</Text>
                </View>
                
                <View style={{borderBottomColor: 'lightgrey',
                    borderBottomWidth: StyleSheet.hairlineWidth}}/> 
                    <View style={{height:60,width:'100%',flexDirection:'row',justifyContent:'space-between',alignItems:'center',alignContent:'center'}}>
                    <View style={{height:60,width:'50%',flexDirection:'row',justifyContent:'flex-start',alignItems:'center',alignContent:'center',paddingStart:5}}>
                      <View style={[styles.chipView,{backgroundColor: '#ff6c00'}]}/>
                      <Text style={{color:'black',paddingStart:5}}>Overdue Leads</Text>
                    </View>
                   <Text style={{color:'grey',paddingEnd:20}}>{leadsCount.overdue_leads}</Text>
                </View> 

                <View style={{borderBottomColor: 'lightgrey',
                    borderBottomWidth: StyleSheet.hairlineWidth}}/> 
                    <View style={{height:60,width:'100%',flexDirection:'row',justifyContent:'space-between',alignItems:'center',alignContent:'center'}}>
                    <View style={{height:60,width:'50%',flexDirection:'row',justifyContent:'flex-start',alignItems:'center',alignContent:'center',paddingStart:5}}>
                      <View style={[styles.chipView,{backgroundColor: '#ff3c00'}]}/>
                      <Text style={{color:'black',paddingStart:5}}>Closed Leads</Text>
                    </View>
                   <Text style={{color:'grey',paddingEnd:20}}>{leadsCount.close_leads}</Text>
                </View> 
              </View>
            </View>
      </View>
    );
 
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
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
      // marginBottom:'2%'
   },

   chipView: {
    height: '40%' ,  
    width: '15%', 
    borderRadius: 4,
    paddingStart:5,
    justifyContent:'center',
    alignItems:'center',
    textAlign:'center',
    shadowColor: '#000',
           
  },
  
  title: {
    fontSize: 24,
    margin: 10,
  },
})

export default LeadStageReport;


