import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';

const Stack = createStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator initialRouteName="Sign In" headerMode="none">
      <Stack.Screen name="Sign In" component={SignInScreen} />
      <Stack.Screen name="Sign Up" component={SignUpScreen} />
      <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
    </Stack.Navigator>
  );
}
//      <Stack.Screen name="Welcome" component={WelcomeScreen} />