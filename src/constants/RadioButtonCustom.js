import React, { useState } from "react";
import { View,TouchableOpacity, Text, StyleSheet } from "react-native";
import { useTheme } from '@react-navigation/native';


export const RadioButtonCustom =({ label, selected, onSelect }) => (
    
    <TouchableOpacity style={styles.radioButton} onPress={onSelect}>
        <View style={styles.radioOuterCircle}>
            {selected && <View style={styles.radioInnerCircle} />}
        </View>
        <Text style={styles.radioLabel}>{label}</Text>
    </TouchableOpacity>
);

export const RadioGroup = (props) => {
    const options = [
        { id: '1', label: 'Cold' },
        { id: '2', label: 'Warm' },
        { id: '3', label: 'Hot' },
      ];
      const { colors } = useTheme();

    const [selectedOption, setSelectedOption] = useState(props.leadType === 'Cold'?{id:'1'} :props.leadType === 'Warm'?{id:'2'}:{id:'3'});

    const handleSelect = (option) => {
        props.getDataFunc(props.identifier,option.label)
        setSelectedOption(option.id === selectedOption?.id ? null : option);
    };

    return(
        <View style={styles.container}>
            <Text style={[styles.title,{color:colors.text}]}>Lead Type</Text>
            {options.map((option) => (
                <RadioButtonCustom
                    key={option.id}
                    label={option.label}
                    selected={option.id === selectedOption?.id}
                    onSelect={ () => handleSelect(option)}
                />
            ))
         }
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
    },
    radioButton: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 8,
    },
    radioOuterCircle: {
        height: 20,
        width: 20,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 8,
    },
    radioInnerCircle: {
        height: 12,
        width: 12,
        borderRadius: 6,
        backgroundColor: '#000',
    },
    radioLabel: {
        fontSize: 16,
    },
    title:{
        color:'#16213E',
        fontSize:15,
        fontWeight:'bold',
        marginBottom:10,
      },
});

