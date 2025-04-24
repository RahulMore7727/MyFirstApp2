import React, { useEffect, useState } from "react";
import {View,Text,Switch,TouchableOpacity,StyleSheet,TextInput,Modal,Dimensions,ScrollView,KeyboardAvoidingView} from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
// import UserAvatar from 'react-native-user-avatar';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Icon , { Icons }  from "./Icons";
import SelectBox from 'react-native-multi-selectbox';
import { xorBy } from 'lodash';
import Slider from '@react-native-community/slider';
import {_retrieveUserData} from '../constants/CurrentUserInfo';
const width= Dimensions.get('window').width

const EditProfile = () =>{
  useEffect(()=>{console.log(_retrieveUserData().data)})

return(
    <View style={{flex: 1,justifyContent: 'center',padding: 10,backgroundColor: '#fff',}}>
    <ScrollView >
    {/* <View style={{ flex: 1, padding: 30,justifyContent:'space-evenly' }}> */}
     
    <View style={styles.action}>
    <Icon
          name="user-o"
          type={Icons.FontAwesome}
          size={20}
          color="grey"
      />
                  <TextInput
                      placeholder="First Name"
                      placeholderTextColor="#666666"
                      style={[styles.textInput, {
                          // color: colors.text
                      }]}
                      autoCapitalize="none"
                      // onChangeText={(val) => textInputChange(val)}
                      // onEndEditing={(e) => handleValidUser(e.nativeEvent.text)}
                  />
                  {/* {data.check_textInputChange ?
                      <Animatable.View
                          animation="bounceIn"
                      >
                          <Feather
                              name="check-circle"
                              color="green"
                              size={20}
                          />
                      </Animatable.View>
                      : null} */}
              </View>

    <View style={styles.action}>
      
      <Icon
          name="user-o"
          type={Icons.FontAwesome}
          size={20}
          color="grey"
      />
     <TextInput
                      placeholder="Last Name"
                      placeholderTextColor="#666666"
                      style={[styles.textInput, {
                          // color: colors.text
                      }]}
                      autoCapitalize="none"
                      // onChangeText={(val) => textInputChange(val)}
                      // onEndEditing={(e) => handleValidUser(e.nativeEvent.text)}
                  />
    </View>
   
    <View style={styles.action}>
      
        <Icon
           name="black-tie"
           type={Icons.FontAwesome}
           size={30}
           color="grey"
        />
       <TextInput
                      placeholder="Designation"
                      placeholderTextColor="#666666"
                      style={[styles.textInput, {
                          // color: colors.text
                      }]}
                      autoCapitalize="none"
                      // onChangeText={(val) => textInputChange(val)}
                      // onEndEditing={(e) => handleValidUser(e.nativeEvent.text)}
                  />
    </View>
   
    <View style={styles.action}>

        <Icon
            name="organization"
            type={Icons.Octicons}
            size={30}
            color="grey"
        />
        <TextInput
                      placeholder="Organization"
                      placeholderTextColor="#666666"
                      style={[styles.textInput, {
                          // color: colors.text
                      }]}
                      autoCapitalize="none"
                      // onChangeText={(val) => textInputChange(val)}
                      // onEndEditing={(e) => handleValidUser(e.nativeEvent.text)}
                  />
    </View>

    <View style={styles.action}>
    
        <Icon
            name="mail"
            type={Icons.Octicons}
            size={30}
            color="grey"/>
        <TextInput
                      placeholder="Mail"
                      placeholderTextColor="#666666"
                      style={[styles.textInput, {
                          // color: colors.text
                      }]}
                      autoCapitalize="none"
                      // onChangeText={(val) => textInputChange(val)}
                      // onEndEditing={(e) => handleValidUser(e.nativeEvent.text)}
                  />
    </View>

    <View style={styles.action}> 
    
        <Icon
           name="mobile-phone"
           type= {Icons.FontAwesome}
           size={40}
           color='grey'
           />
        <TextInput
                      placeholder="Mobile Number"
                      placeholderTextColor="#666666"
                      style={[styles.textInput, {
                          // color: colors.text
                      }]}
                      autoCapitalize="none"
                      // onChangeText={(val) => textInputChange(val)}
                      // onEndEditing={(e) => handleValidUser(e.nativeEvent.text)}
                  />
    </View>
   
    <View style={styles.action}>
        
        <Icon
            name="sticky-note-o"
            type={Icons.FontAwesome}
            size={30}
            color='grey'
        />
       <TextInput
                      placeholder="Notes"
                      placeholderTextColor="#666666"
                      style={[styles.textInput, {
                          // color: colors.text
                      }]}
                      autoCapitalize="none"
                      // onChangeText={(val) => textInputChange(val)}
                      // onEndEditing={(e) => handleValidUser(e.nativeEvent.text)}
                  />
    </View>
{/* <View style={{ margin: 30 }}>
    
      <Text style={{ fontSize: 20, paddingBottom: 10 }}>Location</Text>
      <SelectBox
        label="Select Location"
        options={Location_Name}
        value={selectedTeam}
        onChange={onChange()}
        hideInputFilter={false}
      />
      <View style={{ height: 40 }} />
      <Text style={{ fontSize: 20, paddingBottom: 10 }}>Project Names</Text>
      <SelectBox
        label="Select Project"
        options={Project_Names}
        selectedValues={selectedTeams}
        onMultiSelect={onMultiChange()}
        onTapClose={onMultiChange()}
        isMulti
      />
    </View> */}
   {/* <View style={{flex:1,flexDirection:'column'}}>
   <View style={ {flexDirection:'row',justifyContent:'space-between',marginTop: 15}}>
                
                    <Text style={{
                          color: '#009387',fontSize:18,fontWeight:'bold'
                      }}>Price</Text>
                
              
                    <Text style={{
                          color: '#009387',fontSize:18,fontWeight:'bold'
                      }}>{price}Rs</Text>
               
              </View>
      <Slider
          style={{width:width-60, height: 30}}
          minimumValue={0}
          maximumValue={100}
          step={1}
          minimumTrackTintColor="#FFFFFF"
          maximumTrackTintColor="#100000"

          onValueChange={(value)=>setPrice(value)}
          
          />

          
  </View> */}
  <View style={styles.buttonSubmit}>
    <TouchableOpacity
      // onPress={}
      style={[styles.btn, {
        borderColor: '#009387',
        borderWidth: 1,
        marginTop: 10
    }]}>
       <Text style={[styles.textStyle, {
                          color: '#009387'
                      }]}>SUBMIT</Text>
    </TouchableOpacity>
  </View>
 {/* <Modal
  //        animationType="slide"
    //      transparent={true}
      //    visible={modalVisible} 
          // onRequestClose={() => {
          //   Alert.alert('Modal has been closed.');
          //   this.setState({modalVisible: !modalVisible});
          // }}
        //  >
            <View style={styles.modalView}>
              <View style={{flexDirection:'column'}}>
                <Text>Flat</Text>
                <Text>Plot</Text>
                <Text>RowHouse</Text>
              </View>
    </View>
    </Modal>  */}
    {/* </View> */}

    </ScrollView>
    </View>
  //  {/* </KeyboardAvoidingView> */}
  )
  
}

export default EditProfile;

const styles = StyleSheet.create({
    container :{
        flex: 1, 
        padding: 10,
        backgroundColor: '#fff',
        // justifyContent:'space-between'
      },
      buttonSubmit: {
        alignItems: 'center',
        marginTop: 0
    },
    btn: {
        width: '50%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textStyle: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    textInput: {
      flex: 1,
      marginTop: Platform.OS === 'ios' ? 0 : -12,
      paddingLeft: 10,
      color: '#05375a',
    },
    
      modalView: {
        marginHorizontal: 35,
        backgroundColor: 'white',
        borderRadius: 20,
        flexDirection:'column',
        // padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
      },
      action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        // borderBottomColor: '#f2f2f2',
        borderBottomColor:'grey',
        paddingBottom: 5
    },
    textInput: {
      flex: 1,
      marginTop: Platform.OS === 'ios' ? 0 : -12,
      paddingLeft: 10,
      color: '#05375a',
    },
    
  
})