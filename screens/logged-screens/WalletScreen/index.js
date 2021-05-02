import React, {useState, useEffect} from 'react';
import { Text, View, StyleSheet, Image  } from 'react-native';
import {auth} from "../../../config/firebaseConfig"


 const WalletScreen = () => {
	 console.log('hi')
  console.log(auth.currentUser)	
	 const [userName, setUserName] = useState('')
	 
  const getUserInfo = async () => {
	 const userInfo = await auth.currentUser
	 setUserName(userInfo.displayName)
  }	 
	 
  useEffect(()=>{
    getUserInfo()
  },[])	 
	 
  return(
    <View>
      <Text>
        Hi! {userName}
      </Text>
    </View>
  )

}

 export default WalletScreen