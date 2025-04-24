import React, { useState } from "react";
import {View,Text,Switch,TouchableOpacity,StyleSheet,Image,Button} from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
// import UserAvatar from 'react-native-user-avatar';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Icon , { Icons }  from "./Icons";



import Dialog from "react-native-dialog";
import { Chip } from 'react-native-paper';
import Feather from 'react-native-vector-icons/Feather';

const EditQualifiers = () =>{

    const [visible, setVisible] = useState(false);

  const showDialog = () => {
    setVisible(true);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  const handleDelete = () => {
    // The user has pressed the "Delete" button, so here you can do your own logic.
    // ...Your logic
    setVisible(false);
  };


  return (

    <View style={styles.container}>

      <View style={{flex:2, }}>
        <View style={{flex:1,flexDirection:'row',justifyContent:'space-between'}}>
           <View >
              <Text style={styles.textStyle}>Product Group</Text>
           </View>
          <View style={{marginRight:20,marginTop: 5}}>
            <TouchableOpacity
                 
                    onPress={showDialog}
                      // style={[styles.login, {
                      //     borderColor: '#009387',
                      //     borderWidth: 1,
                      //     marginTop: 10
                      // }]}
                  >
                    <Feather
                      name="search"
                      color="white"
                      size={20}
                    />
            </TouchableOpacity>
          </View>
        </View>
        
        <View style={{flex:2,flexDirection:'row'}}></View>
          {/* <Chip icon="information" onPress={() => console.log('Pressed')}>Example Chip
          </Chip> */}
      </View>
      <View style={{borderBottomColor: 'black',
    borderBottomWidth: StyleSheet.hairlineWidth}}/>
      <View style={{flex:2,}}>
        <View style={{flex:1,flexDirection:'row',justifyContent:'space-between'}}>
          <View >
            <Text style={styles.textStyle}>Customer Group</Text>
          </View>
          <View style={{marginRight:20, marginTop: 5}}>
            <TouchableOpacity
            onPress={showDialog} >
              <Feather
                name="search"
                color="white"
                size={20}
              />
            </TouchableOpacity>

          </View>
        </View>
           <View style={{flex:2,flexDirection:'row'}}></View> 
      </View>
      <View style={{borderBottomColor:'black',borderBottomWidth: StyleSheet.hairlineWidth}}/>
      
      <View style={{flex:1}}>
         <Text style={styles.textStyle}>$</Text>
      </View>
      <View style={{borderBottomColor:'black',borderBottomWidth: StyleSheet.hairlineWidth}}/>
      <View style={{flex:2,flexDirection:'column' }}>
          <Text style={styles.textStyle}>Lead Potential</Text>
          
          <View style={{flex:2,flexDirection:'column'}}>
          <View style={{flex:1,flexDirection:'row',justifyContent:'space-evenly'}}>
              <View style={styles.chip}>
                <Chip icon="information" onPress={() => console.log('Pressed')}>Low</Chip>
              </View>
              <View style={styles.chip}>
                <Chip icon="information" onPress={() => console.log('Pressed')}>Medium</Chip>
              </View>
          </View>
          <View style={{flex:1,flexDirection:'row',justifyContent:'space-evenly'}}>
              <View style={styles.chip}>
                <Chip icon="information" onPress={() => console.log('Pressed')}>High</Chip>
              </View>
              <View style={styles.chip}>
                <Chip icon="information" onPress={() => console.log('Pressed')}>Not Relevant</Chip>
              </View>
          </View>
          </View>
      </View>
<View style={{borderBottomColor: 'black',
    borderBottomWidth: StyleSheet.hairlineWidth}}/>
      <View style={{flex:3,flexDirection:'column'}}>
        <Text style={styles.textStyle}>Lead Stage</Text>

          <View style={{flex:3,flexDirection:'column'}}>
          <View style={{flex:1, flexDirection:'row',justifyContent:'space-evenly'}}>
              <View style={styles.chip}>
                <Chip icon="information" onPress={() => console.log('Pressed')}>Open</Chip>
              </View>
              <View style={styles.chip}>
                <Chip icon="information" onPress={() => console.log('Pressed')}>Contacted</Chip>
              </View>
          </View>  
          <View style={{flex:1,flexDirection:'row',justifyContent:'space-evenly'}}>
              <View style={styles.chip}>
                <Chip icon="information" onPress={() => console.log('Pressed')}>Qualified</Chip>
              </View>
              <View style={styles.chip}>  
                <Chip icon="information" onPress={() => console.log('Pressed')}>Customer</Chip>
              </View>  
          </View>
          <View style={{flex:1,flexDirection:'row',justifyContent:'space-evenly'}}>
              <View style={styles.chip}>
                <Chip icon="information" onPress={() => console.log('Pressed')}>Qualified</Chip>
              </View>
              <View style={styles.chip}>  
                <Chip icon="information" onPress={() => console.log('Pressed')}>Inactive</Chip>
              </View>  
          </View>
          </View>
      </View>
      <View style={{flex:2 }}>
        <View style={{flex:1,flexDirection:'row',justifyContent:'space-between'}}>
           <View  style={styles.action}>
            <Feather
                name='tag'
                size={20}
              />

              <Text style={styles.textStyle}>Tags</Text>
           </View>
          <View style={{marginRight:20,marginTop: 5}}>
            <TouchableOpacity
                 
                    onPress={showDialog}
                      // style={[styles.login, {
                      //     borderColor: '#009387',
                      //     borderWidth: 1,
                      //     marginTop: 10
                      // }]}
                  >
                    <Feather
                      name="plus-circle"
                      color="white"
                      size={20}
                    />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{flex:2,flexDirection:'row'}}></View>
        </View>
      {/* <Button title="Show dialog" onPress={showDialog} /> */}
      <Dialog.Container visible={visible}>
        <Dialog.Title>Product Search</Dialog.Title>
                    <Dialog.Input label="Product" onChangeText={(email) => this.handleEmail(email)}>

                    </Dialog.Input>
        <Dialog.Button label="Cancel" onPress={handleCancel} />
        <Dialog.Button label="Search" onPress={handleDelete} />
      </Dialog.Container>
    </View>
    
  );

  
}

export default EditQualifiers;

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "grey",
        // backgroundColor: "#fff",
        flexDirection: 'column' 
      },
      textStyle:{
        fontSize:15,
        fontWeight:'bold',
        paddingLeft:20,
        marginVertical:5,
      },
      chip: {
        width: 120,
        marginLeft: 20,
        marginTop: 5,
        // marginBottom: 5,
      },
      action: {
        flexDirection: 'row',
        // marginTop: 10,
        // borderBottomWidth: 1,
        // borderBottomColor: '#f2f2f2',
        paddingBottom: 5,
        // backgroundColor:'green'
    },
})