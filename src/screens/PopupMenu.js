import React, { useState } from "react";
import {Text,View, Modal,TouchableOpacity,StyleSheet,SafeAreaView,Alert, Image, Button } from "react-native";
import Icon , { Icons }  from "./Icons";
import { Menu, MenuItem, MenuDivider } from 'react-native-material-menu';
import ViewLeadDetails from "./ViewLeadDetails";
import UpdateLead from './UpdateLead';
import { useNavigation } from '@react-navigation/native';


const PopupMenu = ({value})=>{

    const [visible, setVisible] = useState(false);

    const hideMenu = () => setVisible(false);
  
    const showMenu = () => setVisible(true);
    const navigation = useNavigation();
    
    return (
      <View style={{ height: '20%', alignItems: 'baseline', justifyContent: 'center',alignContent:'flex-end',alignItems:'flex-end'}}>

        <Menu
          visible={visible}
          anchor={<TouchableOpacity
            onPress={showMenu}
            // style={{backgroundColor:'green'}}
        //   style={[styles.btn, {
        //     borderColor: '#009387',
        //     borderWidth: 1,
        //     marginTop: 10
        // }]}
        >
           <Icon
              // name="ellipsis-horizontal-circle-outline"
              // type={Icons.Ionicons}
              name="dots-three-horizontal"
              type={Icons.Entypo}
              size={25}
              color="grey"
            />
          
        </TouchableOpacity>}
          // anchor={<Text onPress={showMenu}>Show menu</Text> }
          onRequestClose={hideMenu}
        >
          <MenuItem onPress={()=>navigation.navigate('UpdateLead',{value:value})} >Update</MenuItem>
          <MenuDivider />
          <MenuItem onPress={()=>navigation.navigate('ViewLeadDetails',{value:value})}>View</MenuItem>
          {/* <MenuItem disabled>Remove Lead</MenuItem> */}
          {/* <MenuItem onPress={hideMenu}>hide</MenuItem> */}
        </Menu>
      </View>
    );
  // }


    // { Alert.alert('in')}
{/* Custom Popup code
    const [visible,setVisible] = useState(false);
    const options=[
        {
            title: 'View Lead Detail',
            icon:'dots-three-horizontal',
            action:()=>alert('one'),
        },
        {
            title: 'Update Lead Detail ',
            icon:"dots-three-horizontal",
            action:()=>alert('two'),
        },
        {
            title: 'Remove Lead',
            icon:'dots-three-horizontal',
            action:()=>alert('three'),
        },
    ]
    return(
    
       <>
    <TouchableOpacity onPress={()=> setVisible(true)}>
    <Icon
                  name="dots-three-horizontal"
                  type={Icons.Entypo}
                  size={20}
                  color="grey"
                />
    </TouchableOpacity> 
     <Modal transparent visible={visible}>
        <SafeAreaView 
            style={{flex:1}} 
            onTouchStart={()=>setVisible(false)}
        >
            <View style={styles.popup}>
            {options.map((op, i)=>(
                <TouchableOpacity style={[styles.option,{borderBottomWidth: i === options.length - 1 ? 0:1}]} key={i} onPress={op.action}>
                    <Text>{op.title}</Text>
                    
                    <Icon name="user" types={Icons.FontAwesome} size={26} color={'#212121'}/>
                    
                    </TouchableOpacity>
            ))}
            </View>
        </SafeAreaView>

    </Modal> 
    </>
    )
            */}
}

{/* Custome Popup code
const styles = StyleSheet.create({
    popup:{
        borderRadius: 8,
        borderColor: '#333',
        borderWidth: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 10,
        position: 'absolute',
        // top: 76,
        // right: 20
    },
    option:{
        flex:1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical:  7,
        borderBottomColor: '#ccc',

    }
})
*/}
const styles = StyleSheet.create({
btn: {
  width: '50%',
  height: 50,
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: 10
},
})
export default PopupMenu;