/**
 * @format
 */

import {AppRegistry,Alert} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import messaging from '@react-native-firebase/messaging';

messaging().setBackgroundMessageHandler(async remoteMessage => {
  console.log('Message handled in the background!', remoteMessage);

  Alert.alert('New backend APK Notification', remoteMessage.notification?.title || 'New Backend message received!');
});
// messaging().setBackgroundMessageHandler(async remoteMessage => {
//     console.log('Message handled in the background!', remoteMessage);
    // Handle background message (store in local storage, display notification, etc.)
  // });
  
AppRegistry.registerComponent(appName, () => App);
