import { View, Text } from 'react-native'
import React from 'react'
import messaging from '@react-native-firebase/messaging';
const  getFCMToken = async () => {
    const token = await messaging().getToken();
    console.log('FCM Token:', token);
//   return (
//     <View>
//       <Text>async </Text>
//     </View>
//   )
}

export default getFCMToken 