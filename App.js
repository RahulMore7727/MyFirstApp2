// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  */

// import React from 'react';
// import type {PropsWithChildren} from 'react';
// import {
//   SafeAreaView,
//   ScrollView,
//   StatusBar,
//   StyleSheet,
//   Text,
//   useColorScheme,
//   View,
// } from 'react-native';

// import {
//   Colors,
//   DebugInstructions,
//   Header,
//   LearnMoreLinks,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';

// type SectionProps = PropsWithChildren<{
//   title: string;
// }>;

// function Section({children, title}: SectionProps): React.JSX.Element {
//   const isDarkMode = useColorScheme() === 'dark';
//   return (
//     <View style={styles.sectionContainer}>
//       <Text
//         style={[
//           styles.sectionTitle,
//           {
//             color: isDarkMode ? Colors.white : Colors.black,
//           },
//         ]}>
//         {title}
//       </Text>
//       <Text
//         style={[
//           styles.sectionDescription,
//           {
//             color: isDarkMode ? Colors.light : Colors.dark,
//           },
//         ]}>
//         {children}
//       </Text>
//     </View>
//   );
// }

// function App(): React.JSX.Element {
//   const isDarkMode = useColorScheme() === 'dark';

//   const backgroundStyle = {
//     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
//   };

//   return (
//     <SafeAreaView style={backgroundStyle}>
//       <StatusBar
//         barStyle={isDarkMode ? 'light-content' : 'dark-content'}
//         backgroundColor={backgroundStyle.backgroundColor}
//       />
//       <ScrollView
//         contentInsetAdjustmentBehavior="automatic"
//         style={backgroundStyle}>
//         <Header />
//         <View
//           style={{
//             backgroundColor: isDarkMode ? Colors.black : Colors.white,
//           }}>
//           <Section title="Step One">
//             Edit <Text style={styles.highlight}>App.tsx</Text> to change this
//             screen and then come back to see your edits.
//           </Section>
//           <Section title="See Your Changes">
//             <ReloadInstructions />
//           </Section>
//           <Section title="Debug">
//             <DebugInstructions />
//           </Section>
//           <Section title="Learn More">
//             Read the docs to discover what to do next:
//           </Section>
//           <LearnMoreLinks />
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//   },
//   highlight: {
//     fontWeight: '700',
//   },
// });

// export default App;


import React,{useEffect} from 'react';
import { View, ActivityIndicator, useColorScheme,Appearance } from 'react-native';
import { AuthContext } from './src/context/AuthContext';
import { NavigationContainer, DefaultTheme as NavigationDefaultTheme, DarkTheme as NavigationDarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider as PaperProvider, DefaultTheme as PaperDefaultTheme, DarkTheme as PaperDarkTheme } from 'react-native-paper';
import AsyncStorage from "@react-native-async-storage/async-storage";
import {TabScreen} from './src/screens/TabScreen';
import LoginStackScreen from './src/screens/LoginStackScreen';
import HomeScreenStack from './src/screens/HomeScreenStack';
const Stack = createNativeStackNavigator();

const App = () => {
  // const [isLoading, setIsLoading] = React.useState(true);
  // const [userToken, setUserToken] = React.useState(null);

  // const [isDarkTheme, setIsDarkTheme] = React.useState(false);
  const scheme = useColorScheme();

  const initialLoginState = {
    isLoading: true,
    userName: null,
    userToken: null,
  };

  const CustomDefaultTheme = {
    ...NavigationDefaultTheme,
    ...PaperDefaultTheme,
    colors: {
      ...NavigationDefaultTheme.colors,
      ...PaperDefaultTheme.colors,
      background: '#ffffff',
      text: '#333333'
    }
  }

  const CustomDarkTheme = {
    ...NavigationDarkTheme,
    ...PaperDarkTheme,
    colors: {
      ...NavigationDarkTheme.colors,
      // ...PaperDarkTheme.colors,
      background: '#333333',
      text: '#ffffff'
    }
  }

  // const theme = isDarkTheme ? CustomDarkTheme : CustomDefaultTheme;

  const loginReducer = (prevState, action) => {

    switch (action.type) {
      case 'RETRIEVE_TOKEN':
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false,
        };

      case 'LOGIN':
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        
        };

      case 'LOGOUT':
        return {
          ...prevState,
          userName: null,
          userToken: null,
          isLoading: false,
        };

      case 'REGISTER':
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
    }
  };

  const [loginState, dispatch] = React.useReducer(loginReducer, initialLoginState);

  const authContext = React.useMemo(() => ({
    signIn: async (foundUser) => {
      const userToken = String(foundUser.id);
      const userName = foundUser.username;

      try
       {
        await AsyncStorage.setItem('CurrentUser', JSON.stringify(foundUser));
      //  console.log(await AsyncStorage.getItem('CurrentUser'))
       }
       catch (e)
       {
        console.log(e);
       }
      // console.log('user token: ', userToken);
      dispatch({ type: 'LOGIN', id: userToken, token: userName })
     },
     signOut: async () => {

      try {
        await AsyncStorage.removeItem('CurrentUser');
      } catch (e) {
        console.log(e);
      }
      dispatch({ type: 'LOGOUT' });
    },

    signUp: () => {
      // setUserToken('fgkj');
      // setIsLoading(false);
    },
    // userInfo:async ()=>{

    //   try
    //   {
       
    //   return(await AsyncStorage.getItem('CurrentUser'))
    //   }
    //   catch (e)
    //   {
    //    console.log(e);
    //   }
    // }

  //   toggleTheme: () => {
  //     setIsDarkTheme(isDarkTheme => !isDarkTheme);
  //   }
  }), []);

  useEffect(() => {
    
    setTimeout(async() => {
      
      // setIsLoading(false);
      let userToken;
      userToken = null;
      try {
        userToken = await AsyncStorage.getItem('CurrentUser');
      } catch(e) {
        console.log(e);
      }
      // console.log('user token: ', userToken);
      dispatch({ type: 'RETRIEVE_TOKEN', token: userToken });
    }, 1000);
  }, []);

  
  if( loginState.isLoading ) {
    return(
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <ActivityIndicator size="large" />
        </View>
    );
  }


  return (
    // <PaperProvider theme={scheme ==='dark'? CustomDarkTheme :CustomDefaultTheme}>
    
      <AuthContext.Provider value={authContext}>
        
        {/* <NavigationContainer theme={scheme ==='dark'? CustomDarkTheme :CustomDefaultTheme} > */}
        <NavigationContainer >
          {loginState.userToken !== null 
            ?
            <HomeScreenStack/> 
            :
            <LoginStackScreen/>
          }

        </NavigationContainer>

      </AuthContext.Provider>
    //  </PaperProvider> 
    
  );
   
}

export default App;
// import React from 'react';
// import {Provider} from 'react-redux';
// import Counter from './src/component/Counter';
// import { store } from './src/component/store/store';
// const App = (props) =>{
//   return(
//     <Provider store={store}>
//     <Counter/>
//     </Provider>
//   );
// };

// export default App;
