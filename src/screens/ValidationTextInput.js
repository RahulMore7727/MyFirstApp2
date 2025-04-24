import { TextInput, StyleSheet, View, Text } from "react-native";
import { useState } from "react";

export default function ValidationTextInput(props){
    const [text, setText] = useState(props.val);
    const [validationMessage, setValidationMessage] = useState();

    const handleTextChange = (input) => {
        setText(input);

        if(validationMessage){
            validate(input);
        }
    };

    const validate = (input) => {
        const isValid = props.regex.test(input);
        if(!isValid){
            setValidationMessage(props.validationMessage);
        }
        else{
            props.getDataFunc(props.identifier,text)
            // console.log('props.onChanges(props.identifier,input)')
            // return input;
            // setValidationMessage();
        }
    }

    return(
            <View style={styles.container}>
                
                <TextInput 
                    style={styles.inputStyle}
                    placeholderTextColor="#666666"
                    keyboardType={props.keyboardTypes}
                    onChangeText={handleTextChange}
                    onEndEditing={()=> validate(text)}
                    value={text}
                    
                    {...props} 
                />
                <Text style={styles.errorTxt}>{validationMessage}</Text>
            </View>

    );
}

const styles = StyleSheet.create({
    container: {
        alignSelf:'stretch',
        // marginHorizontal: 16,
        marginVertical: 8
    },
    errorTxt:{
        fontSize:12,
        color:'#FF0D10',
      },
    inputStyle:{
        backgroundColor:'red',
        // width:'100%',
        // height:'25%',
        borderColor:'#16213E',
        borderWidth:1,
        borderRadius:10,
        padding:10,
      },
});