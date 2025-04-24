import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, TextInput, Platform, StyleSheet, StatusBar, Image, Alert, Dimensions, KeyboardAvoidingView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as Animatable from 'react-native-animatable';
// import LinearGradient from 'react-native-linear-gradient';
import { AuthContext } from '../context/AuthContext';
import axios from 'axios'
const baseurl = require('../constants/baseurl');
const suburl = require('../constants/suburl');
import { useTheme } from '@react-navigation/native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const LoginScreen = ({ navigation }) => {

    const { signIn } = useContext(AuthContext);
    const { width, height } = Dimensions.get('window');
    const { colors } = useTheme();
    const [data, setData] = React.useState({ isValidUser: false, isValidPassword: false, username: '', password: 'null' });

    const textInputChange = (val) => {
        // if (val.trim().length >= 4|| /^[a-zA-Z0-9@]*$/.test(val)) {
        if (/^[a-zA-Z0-9@.]*$/.test(val) || val === '') {
            setData({
                ...data,
                username: val,
                check_textInputChange: true,
                isValidUser: true
            });
        } else {
            setData({
                ...data,
                username: val,
                check_textInputChange: false,
                isValidUser: false
            });
        }
    }

    const handlePasswordChange = (val) => {
        // if (val.trim().length >= 6) {
        if (/^[a-zA-Z0-9@.]*$/.test(val) || val === '') {
            setData({
                ...data,
                password: val,
                isValidPassword: true
            });
        } else {
            setData({
                ...data,
                password: val,
                isValidPassword: false
            });
        }
    }

    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        });
    }


    const loginHandle = () => {

        console.log(data.username,data.password)
        foundUser();

    }

    const foundUser = () => {

        var param = {
            email: data.username,
            password: data.password
        }

        try {
            axios.post(baseurl.url + suburl.login, param)
                .then(res => {
                    console.log(res.data);
                    if (res.data.status_code == 200) {

                        signIn(res.data.data);
                        // dispatch(initialvalue(res.data.cart_total));            
                    }
                    else {

                        Alert.alert('Invalid User!', 'Username or password is incorrect.', [
                            { text: 'Okay' }
                        ]);
                        // return;
                    }
                })
        }
        catch (e) {
            alert(e)
        }

    }

    return (

        <View style={[styles.container, { backgroundColor: colors.background }]}>
            <KeyboardAvoidingView style={{ flex: 1, justifyContent: 'center' }} behavior="height" enabled keyboardVerticalOffset={10}>
                {/* <StatusBar backgroundColor='#009387' barStyle="light-content" /> */}
                <View style={[styles.header, { backgroundColor: colors.background }]}>
                    <Animatable.View
                        style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: 'transparent'
                        }}
                        animation="fadeInUpBig"
                        delay={1000}>

                        <Image
                            style={{
                                resizeMode: "contain",
                                height: hp('35%'),
                                width: wp('70%'),
                                justifyContent: 'center',
                                alignItems: 'center',

                            }}
                            source={require("./Images/6333040.jpg")}
                        />
                    </Animatable.View>
                </View>
                <Animatable.View
                    animation="fadeInUpBig"
                    delay={1000}
                    style={[styles.footer, {
                        backgroundColor: colors.background
                    }]}
                >

{/* 
                    <TextFieldWithIcon
                        iconName="user"
                        placeholder="Your Username"
                        placeholderTextColor="#666666"
                        
                        onChangeText={(val) => textInputChange(val)}
                        // onEndEditing={(e) => handleValidUser(e.nativeEvent.text)}
                        value={data.username}
                    
                        
                    /> */}

                    <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 10, marginVertical: 10, borderWidth: 1, borderRadius: 5, borderColor: '#ccc' }}>
                        <Icon name={"user"} size={20} color='#888' style={{ marginRight: 10 }} />
                        <TextInput style={{ flex: 1 }}
                            placeholder="Your Username"
                            placeholderTextColor={colors.text}

                            onChangeText={(val) => textInputChange(val)}
                        //    onEndEditing={(e) => handleValidUser(e.nativeEvent.text)}
                        />
                    </View>
                    {/* {data.check_textInputChange ?
                      <Animatable.View
                          animation="bounceIn"
                      >
                          <FontAwesome
                              name="check-circle"
                              color="green"
                              size={20}
                          />
                      </Animatable.View>
                      : null} */}


                    {/* <TextFieldWithIcon
                     iconName="lock"
                     placeholder="Password"
                     placeholderTextColor="#666666"
                     secureTextEntry={data.secureTextEntry ? true : false}
                     onChangeText={(val) => handlePasswordChange(val)}
                    //  onEndEditing={(e) => handleValidUser(e.nativeEvent.text)}
                 /> */}

                    <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 10, marginVertical: 10, borderWidth: 1, borderRadius: 5, borderColor: '#ccc' }}>
                        <Icon name={"lock"} size={20} color='#888' style={{ marginRight: 10 }} />
                        <TextInput style={{ flex: 1 }}
                            placeholder="Password"
                            placeholderTextColor={colors.text}

                            onChangeText={(val) => handlePasswordChange(val)}
                        />
                    </View>
                    
                    {/* <TouchableOpacity */}
                    {/* onPress={updateSecureTextEntry} */}
                    {/* > */}
                    {/* {data.secureTextEntry ? */}
                    {/* <Feather */}
                    {/* name="eye-off" */}
                    {/* color="grey" */}
                    {/* size={20} */}
                    {/* /> */}
                    {/* : */}
                    {/* <Feather */}
                    {/* name="eye" */}
                    {/* color="grey" */}
                    {/* size={20} */}
                    {/* /> */}
                    {/* } */}
                    {/* </TouchableOpacity>  */}
                    {/* </View> */}


                    <View style={styles.buttonFlex}>

                        <TouchableOpacity
                            onPress={() => { loginHandle() }}
                            style={styles.login}
                        >
                            <Text style={{color:"#FCF8F3"}}>Login</Text>
                        </TouchableOpacity>
                    </View>
                </Animatable.View>
            </KeyboardAvoidingView>
        </View>

    );
};

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        width: wp('100%'),
        height: hp('100%'),
        backgroundColor: 'white'
    },
    header: {
        //   flex: 1,
        width: wp('100%'),
        height: hp('50%'),
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50,
        backgroundColor: "white"
    },

    footer: {
        //   flex: 1,
        width: wp('100%'),
        height: hp('50%'),
        backgroundColor: '#fff',
        //   borderTopLeftRadius: 30,
        //   borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30,
        //   backgroundColor: 'blue'
    },

    textInput: {
        //   flex: 1,
        width: wp('80%'),
        height: hp('5%'),
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
        backgroundColor: 'pink'
    },

    buttonFlex: {
        flex: 1,
        // justifyContent: "center",
        alignItems: "center",
        padding: 15
      },
    login: {
        width: 300,
        height: 50,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#000000",
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 10,
      },

});