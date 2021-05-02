import React, {useState, useEffect} from 'react';
var styles = require('../../../assets/files/Styles');
import {Alert, Dimensions, Image, TouchableOpacity, StatusBar, StyleSheet} from 'react-native';
import { Container, Body, Footer, Header, Input, Item, Left, Text, Title, Right, View, Button, Toast, Label, Form} from 'native-base';
import Constants from 'expo-constants';
import {auth} from "../../../config/firebaseConfig"



const SettingScreen = () => {
	
	
  const signout = async() => {
	 await auth.signOut()
			.then(() => {
				
			})
			.catch(error => {
				
			})
  }	
	
  return(
    <View style={styles1.container}>
		  
		<TouchableOpacity  onPress={()=>signout()} style={styles.text_auth} activeOpacity={1}>
              <Text style={styles.text_auth}>Sign Out</Text>
            </TouchableOpacity>
    </View>
  )

}
 
 
const styles1 = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
}); 

export default SettingScreen