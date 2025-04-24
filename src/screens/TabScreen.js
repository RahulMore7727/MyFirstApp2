import React, { useEffect, useRef } from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

// import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import Icon, { Icons } from './Icons';
import  Color  from './Color';
// import * as Animatable from 'react-native-animatable';
// import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import HomeScreenStack from './HomeScreenStack';
import ProfileScreen from './ProfileScreen';
// import RowLead from './RowLead';
import CreateLead from './CreateLead';
import CreateLeadTab from './CreateLeadTab';
import ReportTab from './ReportTab';
// const TabArr = [
  // { route: 'HomeStack', label: 'HomeStack', type: Icons.FontAwesome, activeIcon: 'group', inActiveIcon: 'group', component: HomeStackScreen },
  // { route: 'CreateLead', label: 'Lead', type: Icons.MaterialCommunityIcons, activeIcon: 'heart-plus', inActiveIcon: 'heart-plus-outline', component: CreateLead },
  // { route: 'rowLead', label: 'rowLead', type: Icons.FontAwesome, activeIcon: 'calendar', inActiveIcon: 'calendar', component: RowLead },
  // { route: 'Search', label: 'Search', type: Icons.MaterialCommunityIcons, activeIcon: 'timeline-plus', inActiveIcon: 'timeline-plus-outline', component: AddressScreen },
  // { route: 'ProfileStack', label: 'ProfileStack', type: Icons.FontAwesome, activeIcon: 'user-circle', inActiveIcon: 'user-circle-o', component:ProfileStackScreen },
 
// ];

// // const Tab = createBottomTabNavigator();
// const Tab = createMaterialTopTabNavigator();
// const Stack =  createNativeStackNavigator();


// function HomeStackScreen(){
//     return(
//         <Stack.Navigator screenOptions={{headerShown: false}}>
//             <Stack.Screen name="HomeScreen" component={HomeScreen}/>
//              {/* <Stack.Screen name="Lead" component={RowLead} /> */}
//             {/*<Stack.Screen name="SubCategory" component={SubCategorySlider} />
//             <Stack.Screen name="ProductDetails" component={ProductDetailsScreen}/>
//             <Stack.Screen name="Address" component={AddressScreen}/>
//              <Stack.Screen name="Payment" component={PaymentScreen}/>
//              <Stack.Screen name="OrderHistoryDetails" component={OrderHistoryDetails}/>  */}
//         </Stack.Navigator>
//   );
// }

//  function ProfileStackScreen(){
    
//   return(
//       <Stack.Navigator 
//           // initialRouteName="Home"
//           screenOptions={{headerShown: false,headerTransparent: true }}
//           >
//            <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
//              {/* <Stack.Screen name="OrderHistory" component={OrderHistory}/> 
//             <Stack.Screen name="AddAddress" component={AddAddressScreen}/> */}
//       </Stack.Navigator>
// );
// }
// // function AddressStackScreen(){

// //   return(
// //     <Stack.Navigator
// //     screenOptions={{headerShown: false }}>
// //             <Stack.Screen name="Address" component={AddressScreen}/>
// //             <Stack.Screen name="AddAddress" component={AddAddressScreen}/>
// //     </Stack.Navigator>
// //   );
// // }



// const TabButton = (props) =>{
   
//      const {item, onPress, accessibilityState} = props;
//      const focused = accessibilityState.selected;
//      const viewRef = useRef(null);

//       useEffect(()=>{
//         if(focused)
//         {
//             viewRef.current.animate({0:{scale: .5}, 1:{scale: 1.6}});
//         }else{
//             viewRef.current.animate({0:{scale: 1.5, rotate:'360deg'}, 1:{scale: 1,rotate:'0deg'}});
//         }

//       },[focused])
//     return(
//       <TouchableOpacity 
//         onPress={onPress}
//         activeOpacity={1}
//         style={styles.container}>
//           <Animatable.View 
//             ref={viewRef}
//             duration={1200}
//           style={styles.container}
//           > 
//          <Icon type={item.type} name={ item.activeIcon } color={focused ? Color.primary : Color.primaryLite}/>
//          </Animatable.View>
//       </TouchableOpacity>
//     )
// }
 

// const TabScreen = () =>{
//   console.log("Tab Screen console log ")
// //  const  ProfileStackScreen = () =>{
//   return(
//     <Tab.Navigator 
//       screenOptions={{
//       headerShown: false,
//       backgroundColor: '#fff',
//       tabBarStyle:{
//         // height:70,
//         // position:'absolute',
        
//         // left:16,
//         // right:16,
//         backgroundColor: 'black',
//         // elevation:0,
        
//         // borderRadius:16,
        
//         // ...styles.shadow
//       }
//     }}>

//       {TabArr.map((item,index)=>{
          
//           return(
//             <Tab.Screen key={index} name={item.route} component={item.component} 
//                 options={({route})=>({
//                    tabBarStyle:{display:getTabBarVisibility(route)},
//                    tabBarShowLabel: false,
                   
//                    tabBarIcon: ({focused}) =>(
                     
//                     <Icon type={item.type} name={focused ? item.activeIcon : item.inActiveIcon} color={focused ? Color.primary : Color.primaryLite} />
//                   ),
//                 tabBarButton: (props) => <TabButton {...props} item={item}/>
//                 })}
//             />

//           )
//       })}
//       {/* <Tab.Screen name="Home" component={MainHome} 
//           options={{
//             tabBarShowLabel: false,
//             tabBarIcon: ({focused}) =>(
//             <Icon type={Icons.Ionicons} name={focused ? "grid" : "grid-outline"} color={focused ? Color.primary : Color.primaryLite} />
//         ),
//         tabBarButton: () =><TabButton/>
//       }}
//       />
//       <Tab.Screen name="Cart" component={CartProducts}
//           options={{
//             tabBarShowLabel: false,
//             tabBarIcon: ({focused})=>(
//             <Icon type={Icons.MaterialCommunityIcons} name={focused ? "heart-plus" : "heart-plus-outline"} color={focused ? Color.primary : Color.primaryLite} />
//           ),
//           tabBarButton: () =><TabButton/>
//       }} 
//       /> */}
      
      
//       {/* <Tab.Screen name="Discover" component={ProductScreen} options={{
//         tabBarIcon:({focused})=>(
         
//             <CustomeTabBarButton/>
         
//                   )
                  
        
        
//       }}/> */}

//        {/* <Tab.Screen name="Address" component={AddressScreen} 
//             options={{
//                  tabBarShowLabel: false,
//                  tabBarIcon: ({focused})=>(
//                    <Icon type={Icons.MaterialCommunityIcons} name={focused ? "timeline-plus" : "timeline-plus-outline"} color={focused ? Color.primary : Color.primaryLite}/>
//                  ),
//                  tabBarButton: () =><TabButton/>
//           }}
//        />  */}
//       {/* <Tab.Screen name="Profile" component={ProfileScreen}
//             options={{
//                 tabBarShowLabel: false,
//                 tabBarIcon:({focused})=>(
//                     <Icon type={Icons.FontAwesome} name={focused ? "user-circle" : "user-circle-o"} color={focused ? Color.primary : Color.primaryLite}/>
//                 )
//                 }}/> */}
//     </Tab.Navigator>
//   );

// }

// const styles = StyleSheet.create({
//   container: {
//       flex: 1,
//       justifyContent: 'center',
//       alignItems: 'center',
//   }
// });
  
//     // return(
//     // <Tab.Navigator screenOptions={{ headerShown: false },({ route }) => ({
//     //     tabBarIcon: ({ focused, color, size }) => {
//     //       let iconName;

//     //       if (route.name === 'HomeStack') {
//     //         iconName = focused
//     //           ? 'add-circle'
//     //           : 'add-circle-outline';
//     //       } else if (route.name === 'Settings') {
//     //         iconName = focused ? 'add-outline' : 'add-sharp';
//     //       }

//     //       // You can return any component that you like here!
//     //       return <Icon name={iconName} size={size} color={color} />;
//     //     },
//     //     tabBarActiveTintColor: 'tomato',
//     //     tabBarInactiveTintColor: 'gray',
//     //   })} >
   
//     // <Tab.Navigator screenOptions={{ headerShown: false }}>
//     //     <Tab.Screen name="HomeStack" component={HomeStackScreen} 
        
//     //     />
//     //   </Tab.Navigator>
    
//         // );


// const getTabBarVisibility = route =>{
// const routeName = getFocusedRouteNameFromRoute(route)
// console.log("Route Name ",route)
// switch(routeName)
// {
//   case "Address" :
//         return 'none';
//         break;
  
//   // case "AddAddress" :
//   //       return 'none';
//   //       break;
//   case "Product" :
//         return 'none';
//         break;
//   case "CartProducts":
//         return 'none';
//         break;

//   default : return 'flex';

// }
// }
// export default TabScreen;

// // const HomeStackScreen = ({navigation}) => (

// //      <HomeStack.Navigator screenOptions={{ headerShown: false }}
//     //screenOptions={{
//     //         headerStyle: {
//     //         backgroundColor: '#009387',
//     //         },
//     //         headerTintColor: '#fff',
//     //         headerTitleStyle: {
//     //         fontWeight: 'bold'
//     //         }
//     //     }}
//         // >
//             //  <HomeStack.Screen name="Home" component={MainHome}
//             //{/* options={{
//            // title:'Overview',
//             //headerLeft: () => (
//               //  <Icon name="menu" size={25} backgroundColor="#009387" onPress={() => navigation.openDrawer()}></Icon>
//             //)
//            // }} 
//             //  />
//             //  <HomeStack.Screen name="ProductScreen" component={ProductScreen} />
//     // </HomeStack.Navigator>
//     // );import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

// const Tab = createMaterialTopTabNavigator();
const Stack =  createNativeStackNavigator();

function TabScreen() {
  return (

    <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name="HomeScreenStack" component={HomeScreenStack} />
    <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
    <Stack.Screen name="CreateLeadTab" component={CreateLeadTab} />
    <Stack.Screen name='ReportTab' component={ReportTab}/>
  </Stack.Navigator>
    // <Tab.Navigator tabBarOptions={{ showLabel: false }}>
    //   <Tab.Screen name="HomeScreenStack" component={HomeScreenStack}
    //    options={{ tabBarIcon: ({ focused }) =>(
    //     <Icon type={FontAwesome} name={'group'} color={focused ? Color.primary : Color.primaryLite}/>)}}/>
    //   <Tab.Screen name="ProfileScreen" component={ProfileScreen} 
    //    options={{tabBarIcon:({ focused }) => (
    //    <Icon type={FontAwesome} name={ 'calendar' } color={focused ? Color.primary : Color.primaryLite}/>)}}/>

    //   <Tab.Screen name="CreateLead" component={ProfileScreen}
    //     options={{ShowLabel:false, tabBarIcon:({ focused })=>(
    //     <Icon type={FontAwesome} name={ 'bell' } color={focused ? Color.primary : Color.primaryLite}/>  
    //     )}}/> 
        
    // </Tab.Navigator>
  );
}
export default TabScreen;