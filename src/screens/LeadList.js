import React ,{useState, useEffect}from "react";
import {View, Text, TouchableOpacity, StyleSheet,Alert,FlatList, Image, ActivityIndicator} from "react-native";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import { Avatar} from 'react-native-paper';
import Icon, { Icons } from './Icons';
import axios from 'axios'
import { useTheme } from '@react-navigation/native';
const baseurl = require('../constants/baseurl');
const suburl = require('../constants/suburl');


const actions = [
  {
    text: "Add Lead Form",
    icon: require("./Images/ic_accessibility_white.png"),
    // name: "bt_accessibility",
    name: "B",
    position: 2
  },
  {
    text: "Import Contacts",
    icon: require("./Images/ic_language_white.png"),
    // name: "bt_language",
    name: "ReportTab",
    position: 1
  },
  {
    text: "Add From Call Logs",
    icon: require("./Images/ic_room_white.png"),
    // name: "bt_room",
    name: "ProfileScreen",
    position: 3
  },
  {
    text: "Integration",
    icon: require("./Images/ic_videocam_white.png"),
    name: "CreateLeadTab",
    position: 4
  }
];


const InitialAvatar = ({ name, size }) => {
  const getInitials = (name) => {
    const names = name.split(' ');
    return names
      .map((word) => word.charAt(0).toUpperCase())
      .join('');
  };

  return (
    <View>
      <Avatar.Text size={size} label={getInitials(name)} />
      {/* Optionally, you can display the name below the avatar */}
      {/* <Text>{name}</Text> */}
    </View>
  );
};


const LeadList = ({route,navigation}) =>{
// const [Id,setId]=useState('121/open')
const { id, status } = route.params;
const [isLoading, setIsLoading] = useState(true)
const [leadData, setleadData] = useState(null);
const { colors } = useTheme();

useEffect(() => {
  fetchDataFromAPI();
  // try 
  //  {
  //     axios.get(baseurl.url + suburl.getLeads+id+"/"+status)
  //     .then(res => { 
        
  //      if (res.data.status==true)
  //      {
  //       setleadData(res.data.data);
            
  //       }
  //       else 
  //       {
  //           Alert.alert('Invalid Data!', 'In LeadList Screen', [
  //               { text: 'Okay' }
  //           ]);
  //           // 
  //       }
       
  //     }) 
  //   } 
  // catch (e) 
  //   {
  //     console.log(e)
  //   }
  
},[]);

const fetchDataFromAPI = async() =>{

  try
  {
    await new Promise(resolve => setTimeout(resolve, 200));
    {console.log("id in lead list ",status)}
    axios.get(baseurl.url + suburl.getLeads+id+"/"+status)
    .then(res => {
      if (res.data.status==true)
      {
       setleadData(res.data.data);
        setIsLoading(false)
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
    console.log("Custom Error in LeadList",e);
  }
}

    return(
    
        <View style={[styles.container,{backgroundColor:colors.background}]}>
           
           {isLoading ?(
        <ActivityIndicator size="large" color="#0000ff" />):(

            <FlatList
            horizontal={false}
            showsVerticalScrollIndicator={false}

            data={leadData}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) =>(
             
            <View style={{height:hp('10%'),width:wp('95%'),flexDirection:"row",borderRadius:2, backgroundColor:colors.background,shadowOffset:{width:0,height:2,},shadowOpacity:0.15,shadowRadius:3.84,elevation:1,marginBottom:'2%'}}>
            <View style={{flex:20,padding:5}}>
              {/* <UserAvatar size={80} name="M" /> */}
              <InitialAvatar name={item.name} size={70} />
            </View>
            <View style={{flex:40,paddingHorizontal:5,alignItems:'baseline'}}>
                <Text style={{fontWeight:'bold',paddingBottom:'3%',color:colors.text}}>{item.name}</Text>
                <Text style={{paddingBottom:'3%',color:colors.text}}>{item.email}</Text>
                <View style={{flexDirection:'row',alignItems:'center',paddingTop:'3%'}}>
                    {/* <FontAwesome
                      name="bell"
                      // color={colors.text}
                      size={15}
                    /> */}
                   
                   <Text style={{paddingBottom:'3%',color:colors.text}}>{item.lead_type}</Text> 
                </View>
            </View>
           
            <View style={{flexDirection:'column',justifyContent:'space-evenly',alignItems:'center'}}>
                
                {/* <PopupMenu value={item.id}/> */}
                <TouchableOpacity style={{padding:10}} onPress={()=>navigation.navigate('ViewLeadDetails',{value:item.id})}>
                  <Icon
                    name="eye"
                    type={Icons.Feather}
                    size={25}
                    color="#009387"
                  />
                 </TouchableOpacity>

                 <TouchableOpacity  onPress={()=>navigation.navigate('UpdateLead',{value:item.id})}>
                

                    <Icon
                        name="edit"
                        type={Icons.Feather}
                        size={25}
                        color="#009387"
                      />
                 </TouchableOpacity>
                 </View>
                 {/* {console.log(leadData)} */}
            </View>)}>

            </FlatList>

          // <View style={{height:hp('10%'),width:wp('95%'),flexDirection:"row",borderRadius:2, backgroundColor:'white',shadowOffset:{width:0,height:2,},shadowOpacity:0.15,shadowRadius:3.84,elevation:1,marginBottom:'2%'}}>
          //   <View style={{flex:20}}>
          //     <UserAvatar size={80} name="H" />
          //   </View>
          //   <View style={{flex:40,paddingHorizontal:5,alignItems:'baseline'}}>
          //       <Text style={{fontWeight:'bold',paddingBottom:'3%'}}>Hemant Sharma</Text>
          //       <Text style={{paddingBottom:'3%'}}>HelloLeads</Text>
          //       <View style={{flexDirection:'row',alignItems:'center',paddingTop:'3%'}}>
          //           {/* <FontAwesome
          //             name="bell"
          //             // color={colors.text}
          //             size={15}
          //           /> */}
          //           <Icon
          //           name="bell"
          //           types={Icons.FontAwesome}
          //           size={20}
          //           color="grey"
          //           />
          //           <Text>Set Follow-Up</Text>
          //       </View>
          //   </View>
           
          //   <View style={{flex:40,paddingHorizontal:5,alignItems:'baseline',alignItems:'flex-end'}}>
          //        <Text style={{paddingBottom:'3%'}}>Customer</Text>
          //        <Text style={{paddingBottom:'3%'}}>Low</Text>
          //        <PopupMenu/>
          //        </View>
          //   </View>

            // <View style={{height:hp('10%'),width:wp('95%'),flexDirection:"row",borderRadius:2, backgroundColor:'white',shadowOffset:{width:0,height:2,},shadowOpacity:0.15,shadowRadius:3.84,elevation:1,marginBottom:'2%'}}>
            // <View style={{flex:20,}}>
            //   <UserAvatar size={80} name="A" />
            // </View>
            // <View style={{flex:40,paddingHorizontal:5,alignItems:'baseline'}}>
            //     <Text style={{fontWeight:'bold',paddingBottom:'3%'}}>Akshay Mirgal</Text>
            //     <Text style={{paddingBottom:'3%'}}>AIRTAG</Text>
            //     <View style={{flexDirection:'row',alignItems:'center',paddingTop:'3%'}}>
            //         {/* <FontAwesome
            //           name="bell"
            //           // color={colors.text}
            //           size={15}
            //         /> */}
            //         <Icon
            //         name="bell"
            //         types={Icons.FontAwesome}
            //         size={20}
            //         color="grey"
            //         />
            //         <Text>Set Follow-Up</Text>
            //     </View>
            // </View>
           
            // <View style={{flex:40,paddingHorizontal:5,alignItems:'baseline',alignItems:'flex-end'}}>
            //     <Text style={{paddingBottom:'3%'}}>Qualified</Text>
            //     <Text style={{paddingBottom:'3%'}}>MEDIUM</Text>
            //     <PopupMenu/>
            //     </View>
            // </View>


            // <View style={{height:hp('10%'),width:wp('95%'),flexDirection:"row",borderRadius:2, backgroundColor:'white',shadowOffset:{width:0,height:2,},shadowOpacity:0.15,shadowRadius:3.84,elevation:1}}>
            // <View style={{flex:20,}}>
            //   <UserAvatar size={80} name="O" />
            // </View>
            // <View style={{flex:40,paddingHorizontal:5,alignItems:'baseline'}}>
            //     <Text style={{fontWeight:'bold',paddingBottom:'3%'}}>Omkar</Text>
            //     <Text style={{paddingBottom:'3%'}}>NeuSoftTechnology</Text>
            //     <View style={{flexDirection:'row',alignItems:'center',paddingTop:'3%'}}>
            //         {/* <FontAwesome
            //           name="bell"
            //           // color={colors.text}
            //           size={15}
            //         /> */}
            //         <Icon
            //         name="bell"
            //         types={Icons.FontAwesome}
            //         size={20}
            //         color="grey"
            //         />
            //         <Text>Set Follow-Up</Text>
            //     </View>
            // </View>
           
            // <View style={{flex:40,paddingHorizontal:5,alignItems:'baseline',alignItems:'flex-end'}}>
            //     <Text style={{paddingBottom:'3%'}}>Contacted</Text>
            //     <Text style={{paddingBottom:'3%'}}>Open</Text>
            //     <PopupMenu/>
            //     </View>
            // </View>

            //  <FloatingAction
            //     actions={actions} 
            //      onPressItem={name => { 
            //       navigation.navigate({name}) 
            //      {/* console.log(`selected button: ${name}`); */}
            //     }} 
            //  />  
            //  {console.log(leadData)}
              
            // :<View><ActivityIndicator size="large" /></View>}
        )}
        </View>)
    
}

export default LeadList;

const styles = StyleSheet.create({

    container :{
        flex: 1,
        flexDirection:'column',
        backgroundColor: 'white',
        padding:10,
        borderRadius:20
    },

   
})


// Options data must contain 'item' & 'id' keys

