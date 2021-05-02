import React, { Component } from 'react';
var styles = require('../assets/files/Styles');
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {WalletScreen, UserListScreen, MatchListScreen, VideoListScreen, SettingScreen} from "../screens/logged-screens"
import { AntDesign } from '@expo/vector-icons';


const LoggedNavigation = () => {
  const Tab = createBottomTabNavigator();


  return (
    <NavigationContainer>
      <Tab.Navigator 
          initialRouteName="WalletScreen" tabBarOptions={{ showLabel: false, activeTintColor: 'tomato',}} activeColor="#dfff00">
        <Tab.Screen name="WalletScreen" component={WalletScreen}
              options={{
          tabBarLabel: 'Wallet',
          tabBarIcon: ({color}) => (
            <AntDesign name="wallet" style={{...styles.iconSidemenu, color}}/>
          ),
        }}
         />
        <Tab.Screen name="UserListScreen" component={UserListScreen}
             options={{
          tabBarLabel: 'User',
          tabBarIcon: ({color}) => (
            <AntDesign name="user" style={{...styles.iconSidemenu, color}}/>
          ),
        }}
        />
        <Tab.Screen name="MatchListScreen" component={MatchListScreen} 
             options={{
          tabBarLabel: 'Match',
          tabBarIcon: ({color}) => (
            <AntDesign name="database" style={{...styles.iconSidemenu, color}}/>
          ),
        }}
        />
        <Tab.Screen name="VideoListScreen" component={VideoListScreen} 
             options={{
          tabBarLabel: 'Video',
          tabBarIcon: ({color}) => (
            <AntDesign name="videocamera" style={{...styles.iconSidemenu, color}}/>
          ),
        }}
          />
	        <Tab.Screen name="SettingScreen" component={SettingScreen} 
             options={{
          tabBarLabel: 'SettingScreen',
          tabBarIcon: ({color}) => (
            <AntDesign name="setting" style={{...styles.iconSidemenu, color}}/>
          ),
        }}
          />	  
      </Tab.Navigator>
    </NavigationContainer>
  );

}


export default LoggedNavigation