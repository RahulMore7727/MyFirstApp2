import React, { useState } from 'react';
  import { StyleSheet, Text, View } from 'react-native';
  import { Dropdown } from 'react-native-element-dropdown';
  import { useTheme } from '@react-navigation/native';
  // import AntDesign from '@expo/vector-icons/AntDesign';
  import FontAwesome from 'react-native-vector-icons/FontAwesome';

  const data = [
    { label: 'Open', value: '1' },
    { label: 'Working', value: '2' },
    { label: 'Overdue', value: '3' },
    { label: 'Close', value: '4' },
  ];
 

  const DropdownTextField = (props) => {
    // console.log("check pass data",props.status)
    const [value, setValue] = useState(props.leadStatus === 'working'? '2' :props.leadStatus === 'overdue'?'3':props.leadStatus === "Close"?'4':'1');
    const [isFocus, setIsFocus] = useState(false);
    const { colors } = useTheme();

    const renderLabel = () => {
      if (value || isFocus) {
        return (
          <Text style={[styles.label, isFocus && { color: 'blue' }]}>
            Dropdown label
          </Text>
        );
      }
      return null;
    };

    return (
      <View style={styles.container}>
        {/* {renderLabel()} */}
        {console.log(value,props.leadStatus)}
        <Dropdown
        
          style={[styles.dropdown, isFocus && { borderColor: '#16213E' }]}
          // placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={[styles.selectedTextStyle,{color:colors.text}]}
          inputSearchStyle={styles.inputSearchStyle}
          // iconStyle={styles.iconStyle}
          data={data}
          // search
         
          maxHeight={100}
          labelField="label"
          valueField="value"
          // placeholder={!isFocus ? 'Select status' : '...'}
          // searchPlaceholder="Search..."
          value={value}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
          props.getDataFunc(props.identifier,item.label)
          setValue(item.value);
          setIsFocus(false);
            
        }}
         renderLeftIcon={() => (
            <FontAwesome
              name="building"
              size={20}
            />
          )}
         renderRightIcon={()=>(
          false
         )}
        />
      </View>
    );
  };

  

  const styles = StyleSheet.create({
    container: {
      backgroundColor: 'red',
      // padding: 15,
    },
    dropdown: {
      height: 50,
      borderColor: '#ccc',
      borderWidth:1,
      borderRadius:5,
      paddingHorizontal: 8,
      backgroundColor:"black"
    },
    icon: {
      marginRight: 5,
    },
    label: {
      position: 'absolute',
      backgroundColor: "black",
      left: 22,
      top: 8,
      zIndex: 999,
      paddingHorizontal: 8,
      fontSize: 14,
    },
    placeholderStyle: {
      fontSize: 16,
    },
    selectedTextStyle: {
      fontSize: 16,
      marginHorizontal:10
    },
    iconStyle: {
      width: 20,
      height: 20,
    },
    inputSearchStyle: {
      height: 40,
      fontSize: 16,
    },
  });

  export default DropdownTextField;