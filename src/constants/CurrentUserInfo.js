import AsyncStorage from "@react-native-async-storage/async-storage";

export const _retrieveData = async () => {
    try{
        const value = await AsyncStorage.getItem('CurrentUser');
        if(value !== null)
        {
            // console.log((JSON.parse(value)).id)
            return((JSON.parse(value)).id);
        }
    }catch(error)
    {

    }
} 

export const _retrieveUserData = async () => {
    try{
        const value = await AsyncStorage.getItem('CurrentUser');
        if(value !== null)
        {
            // console.log((JSON.parse(value)).id)
            return(JSON.parse(value));
        }
    }catch(error)
    {

    }
} 