import React, { useState } from 'react';
  import { StyleSheet, Text, View } from 'react-native';
  import { Dropdown } from 'react-native-element-dropdown';
  import { useTheme } from '@react-navigation/native';
  // import AntDesign from '@expo/vector-icons/AntDesign';
  import FontAwesome from 'react-native-vector-icons/FontAwesome';

  const data = [
    { label: 'Flat', value: '1' },
    { label: 'Plot', value: '2' },
    { label: 'residential', value: '3' },
    { label: 'commercial', value: '4' },
  ];
 

  const DropdownPtypeUpdate = (props) => {
    // console.log("check pass data",props.status)
    const [value, setValue] = useState(props.PropertyType === 'Flat'? '1' :props.PropertyType === 'Plot'?'2':props.PropertyType === "residential"?'3':'4');
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
        {console.log(value,props.PropertyType)}
        <Dropdown
          style={[styles.dropdown, isFocus && { borderColor: '#16213E' }]}
          // placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={[styles.selectedTextStyle,{color:colors.text}]}
          inputSearchStyle={styles.inputSearchStyle}
          // iconStyle={styles.iconStyle}
          data={data}
          // search
          maxHeight={300}
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
      // backgroundColor: 'white',
      // padding: 15,
    },
    dropdown: {
      height: 50,
      borderColor: '#ccc',
      borderWidth:1,
      borderRadius:5,
      paddingHorizontal: 8,
    },
    icon: {
      marginRight: 5,
    },
    label: {
      position: 'absolute',
      backgroundColor: 'white',
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

  export default DropdownPtypeUpdate;