import React ,{useContext, useEffect}from "react";
import { View, Dimensions, StyleSheet, Image } from "react-native";
import * as Animatable from "react-native-animatable";
// import LinearGradient from "react-native-linear-gradient";
import  MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { useTheme } from '@react-navigation/native';
import getFCMToken from "../constants/getFCMToken";
import messaging from '@react-native-firebase/messaging';
const SplashScreen =({navigation})=>{
   
    const { colors } = useTheme();

    useEffect(() => {
        getFCMToken();
        const timer = setTimeout(() => {
            navigation.navigate('LoginScreen');
        }, 3000);

        const unsubscribe = messaging().onTokenRefresh(token => {
            console.log('New FCM Token:', token);
          });
        
        //   return unsubscribe;
        
        return () => {
            unsubscribe;
            clearTimeout(timer)};
    }, []);

    return(

        <View style={styles.container}>
            
            <Animatable.View 
                    style={[styles.logoContainer,{backgroundColor:colors.background}]}
                    animation="zoomIn"
                    delay={500}>
            <Image
                style={{
                resizeMode: "contain",
                height: hp('60%'),
                width: wp('60%'),
                
                }}
                source={require("./Images/leadlog.png")}
            />
                {/* <Animatable.Text animation="fadeOutDown" iterationCount={5} direction="alternate" delay={2500}style={[styles.title, {
                    color: "whites"
                }]}>Stay connected with everyone!
                </Animatable.Text> */}
                {/* <Animatable.Text animation="fadeOutDown" iterationCount={5} direction="alternate" delay={2500}>E.S. Development</Animatable.Text> */}
                {/* <Text style={[styles.text,{textAlign:'center'}]}>E.S. Development</Text> */}
            </Animatable.View>
        
    </View>
    
  );
};

export default SplashScreen;

const {height} = Dimensions.get("screen");
// const height_logo = height * 0.28;

const styles = StyleSheet.create({
container: {
  flex: 1, 
//   backgroundColor: 'white'
//   backgroundColor: 'black'
},

logoContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'white'
    // borderTopLeftRadius: 100,
    // borderTopRightRadius: 0,
    // paddingVertical: 0,
    // paddingHorizontal: 0
},
// logo: {
//     width: height_logo,
//     height: height_logo
// },
title: {
    color: '#05375a',
    fontSize: hp('3%'),
    fontWeight: 'bold'
},
text: {
    color: 'grey',
    marginTop: '2%',
    fontSize: hp('2%'),
    fontWeight: 'bold'
},
});


