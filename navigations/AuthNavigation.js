import React, { Component } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import StartScreen from "../screens/auth-screens/StartScreen"
import LoginScreen from "../screens/auth-screens/LoginScreen"
import RegisterScreen from "../screens/auth-screens/RegisterScreen"
import ForgetPasswordScreen from "../screens/auth-screens/ForgetPasswordScreen"



const AuthNavigation = () => {
  const Stack = createStackNavigator();
  const stackNavigatorOption = {
            headerStyle: {
              backgroundColor: '#ffffff',
              borderWidth: 0,
			      	borderBottomWidth: 0
            },
            headerTintColor: '#000',
            headerTitleStyle: {
              fontSize: 16,
              color: '#000',
              fontWeight: 'bold',
            },
            headerTitleAlign: 'center',
  }

  return (
    <NavigationContainer>
      <Stack.Navigator 
          initialRouteName="StartScreen"
          screenOptions={stackNavigatorOption}
      >
        <Stack.Screen name="StartScreen" component={StartScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ title: "Login" }}/>
        <Stack.Screen name="RegisterScreen" component={RegisterScreen} options={{ title: "Sign Up" }}/>
        <Stack.Screen name="ForgetPasswordScreen" component={ForgetPasswordScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );

}


export default AuthNavigation