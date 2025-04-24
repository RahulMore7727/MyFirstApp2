import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Icon, { Icons } from './Icons';
import  Color  from './Color';
import HomeScreen from './HomeScreen';
import ProfileScreen from './ProfileScreen';
import ViewLeadDetails from './ViewLeadDetails';
import LeadList from './LeadList';
import UpdateLead from './UpdateLead';
import TimelineScreen from './TimelineScreen';
import CreateLead from './CreateLead';
import WorkingLead from './WorkingLead';
import OpenLead from './OpenLead';
import LeadStageReport from './LeadStageReport';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();
const Stack =  createNativeStackNavigator();
// const Tab = createMaterialTopTabNavigator();


const HomeTab = () => {
  return (

     <Tab.Navigator 
            screenOptions={{
                tabBarShowLabel: false,
                tabBarIndicatorStyle: {
                 
                  borderBottomWidth: 1.5,
                  borderBottomColor: 'black',
              }
              }}>

                <Tab.Screen name="HomeScreen" component={HomeScreen}
                options={{ tabBarIcon: ({ focused }) =>(
                <Icon type={FontAwesome} name={'group'} color={focused ? Color.black : Color.grey}/>)}}/>
                
                <Tab.Screen name="WorkingLead" component={WorkingLead} 
                options={{tabBarIcon:({ focused }) => (
                <Icon type={FontAwesome} name={ 'calendar' } color={focused ? Color.black : Color.grey}/>)}}/>

                <Tab.Screen name="ProfileScreen" component={ProfileScreen}
                 options={{ShowLabel:false, tabBarIcon:({ focused })=>( 
                 <Icon type={FontAwesome} name={ 'bell' } color={focused ? Color.black : Color.grey}/> 
            )}}/> 


      </Tab.Navigator>

    // <Stack.Navigator
    // >
    //   <Stack.Screen
    //     name="Home"
    //     component={HomeScreen}
    //     options={{headerShown: false}}
    //   />
    //   <Stack.Screen
    //     name="UpdateLead"
    //     component={UpdateLead}
    //     options={{headerShown: false}}
    //     // options={({route}) => ({
    //     //   title: route.params?.title,
    //     // })}
    //   />
    // </Stack.Navigator>
  );
};

// const UpdateLeadTab =()=>{

//   return(
//     <Tab.Navigator >
//         <Tab.Screen name="Profile" component={EditProfile}/>
//         <Tab.Screen name="Qualifiers" component={EditQualifiers}/>
//         <Tab.Screen name="Info" component={EditInfo}/>
//     </Tab.Navigator>
//   )
// }
function HomeScreenStack() {
        return(

 <Stack.Navigator
    >
      <Stack.Screen
        name="HomeTab"
        component={HomeTab}
        options={{headerShown: false}}
      />
       <Stack.Screen
        name="UpdateLead"
        component={UpdateLead}
        // options={{headerShown:false}}
      />
      <Stack.Screen
        name="ViewLeadDetails"
        component={ViewLeadDetails}
        // options={{headerShown:false}}
      />
       <Stack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        // options={{headerShown:false}}
      />
      <Stack.Screen
        name="TimelineScreen"
        component={TimelineScreen}
        options={{headerShown: false}}
        // options={({route}) => ({
        //   title: route.params?.title,
        // })}
      />
     
      <Stack.Screen
        name="Lead Statistics"
        component={LeadStageReport}
        // options={{headerShown: false}}
        // options={({route}) => ({
        //   title: route.params?.title,
        // })}
      />
     
      <Stack.Screen
        name="LeadList"
        component={LeadList}
        options={({ route }) => ({ title: route.params.ScreenName })}
        // options={{headerShown:false}}
      />
     
      <Stack.Screen
        name="CreateLead"
        component={CreateLead}
        // options={{headerShown:false}}
        />
    </Stack.Navigator>


            // <Tab.Navigator 
            // screenOptions={{
            //     tabBarShowLabel: false,
                
            //   }}>

            //     <Tab.Screen name="HomeStack" component={HomeStack}
            //     options={{ tabBarIcon: ({ focused }) =>(
            //     <Icon type={FontAwesome} name={'group'} color={focused ? Color.primary : Color.primaryLite}/>)}}/>
                
            //     <Tab.Screen name="ProfileScreen" component={ProfileScreen} 
            //     options={{tabBarIcon:({ focused }) => (
            //     <Icon type={FontAwesome} name={ 'calendar' } color={focused ? Color.primary : Color.primaryLite}/>)}}/>

            //     <Tab.Screen name="CreateLead" component={ProfileScreen}
            //      options={{ShowLabel:false, tabBarIcon:({ focused })=>( 
            //      <Icon type={FontAwesome} name={ 'bell' } color={focused ? Color.primary : Color.primaryLite}/> 
            // )}}/> 


            // </Tab.Navigator>
           
        )
}
export default HomeScreenStack;