import React from 'react';
import { View, Text, Button } from 'react-native';
import { useAuth } from '../context/AuthContext';

const SignInScreen = () => {
  const { dispatch } = useAuth();

  const handleSignIn = () => {
    // Perform authentication logic
    const user = { username: 'exampleUser' };
    dispatch({ type: 'SIGN_IN', payload: user });
  };
  return (
    <View>
      <Text>Please sign in</Text>
      <Button title="Sign In" onPress={handleSignIn} />
    </View>
  );
};

export default SignInScreen;