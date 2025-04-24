import React, { useContext,useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity,ActivityIndicator, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { AuthContext } from '../context/AuthContext';
import { useTheme } from '@react-navigation/native';
import {_retrieveData} from '../constants/CurrentUserInfo';
import axios from 'axios';
const baseurl = require('../constants/baseurl');
const suburl = require('../constants/suburl');

const ProfileScreen = () => {

  const { signOut } = useContext(AuthContext);
  const { colors } = useTheme();
  const [ userDetail, setUserDetail ] = useState();
  const [isLoading, setIsLoading] =useState(true)
  useEffect(() => {
   
    fetchDataFromAPI();

  }, []);

  const fetchDataFromAPI = async () =>{
          try{
                _retrieveData().then(result=>(  
                axios.get(baseurl.url+suburl.Profile+result)
                .then(res => {
                  console.log(res.data.data)
                if(res.data.status === true)
                {
                  
                   setUserDetail(res.data.data)
                   setIsLoading(false)
                  // setId(JSON.parse(result))
                }
                })
              
              ))
            }
            catch(e)
            {
                console.log("custome Error MSG in HomeScreen",e)
            }
  }
  return (
    <SafeAreaView style={{flex: 1,flexDirection:'column', alignItems: 'center', justifyContent: 'flex-start',backgroundColor :colors.background }}>
      
    { isLoading ? ( <ActivityIndicator size="large" color="#0000ff" />)
      :(
    <View style={styles.container}>
      
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri: "https://media.istockphoto.com/id/1476170969/photo/portrait-of-young-man-ready-for-job-business-concept.webp?b=1&s=170667a&w=0&k=20&c=FycdXoKn5StpYCKJ7PdkyJo9G5wfNgmSLBWk3dI35Zw="
          }}
          style={styles.cardImage}
        />
        
      </View>
      
      <View style={styles.infoContainer}>
{console.log(userDetail)}
      <Text style={[styles.textStyle,{fontSize:22,fontWeight:'bold'}]}>{userDetail.name}</Text>
      <Text style={[styles.textStyle,{fontSize:15,fontWeight:'500'}]}>{userDetail.email}</Text>
      <Text style={[styles.textStyle,{fontSize:15,fontWeight:'500'}]}>{userDetail.contact}</Text>

      </View>

      <View style={styles.buttonFlex}>
       <TouchableOpacity style={[styles.logOutButton]}
        onPress={() => signOut()}>
        <Text style={styles.editProfileButtonText}>Logout</Text>
      </TouchableOpacity>
      </View>
    </View>)}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
  },
  imageContainer:{
    justifyContent:"center",
    alignItems:"center",
    // paddingHorizontal:25
  },
  cardImage:{
    height:150,
    width:150,
    borderRadius:75,
    borderWidth:3,
    borderColor:'#F0F0F0',
    marginVertical:10
  },
  infoContainer:{
    justifyContent:"center",
    alignItems:"center",
    flexDirection:'column',
    padding:25,
    
  },
  textStyle:{
    // color:"#000000",
    paddingBottom:10
  },
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

export default ProfileScreen;
