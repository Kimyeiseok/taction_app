import React, {useState, useEffect} from 'react';
var styles = require('../../assets/files/Styles');
import {Alert, Image, TouchableOpacity} from 'react-native';
import { Container, Body, Footer, Input, Icon, Item, Text, Toast, View, Button} from 'native-base';
import { LinearGradient } from 'expo-linear-gradient';
import Strings from '../../utils/Strings';
import ColorsApp from '../../utils/ColorsApp';


const StartScreen = ({navigation}) => {
  return(
   	<Container style={{backgroundColor: '#FFFFFF'}}>
      <Body>
        <View style={{flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
        <Image source={require('../../assets/images/logo.png')} style={styles.logo_start} resizeMode="contain"/>
        
        <Button block onPress={()=>navigation.navigate("LoginScreen")} style={styles.button_start}>
        <Text style={styles.button_start_text}>{Strings.ST26.toUpperCase()}</Text>
        </Button>

        <TouchableOpacity onPress={()=> navigation.navigate("RegisterScreen")} activeOpacity={1}>
        <LinearGradient colors={[ColorsApp.SECOND, ColorsApp.PRIMARY]} start={[0, 0]} end={[1, 0]} style={styles.button_start_2}>
        <Text style={{color: '#FFFFFF', fontWeight: 'bold', fontSize: 14}}>{Strings.ST27.toUpperCase()}</Text>
        </LinearGradient>
        </TouchableOpacity>	
        </View>
      </Body>
		</Container>
  )

}

export default StartScreen