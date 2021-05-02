import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { Text, View, StyleSheet, Image  } from 'react-native';
import { Root } from "native-base";
import * as Font from 'expo-font';
import { Asset } from 'expo-asset';
import Constants from 'expo-constants';
import AppLoading from 'expo-app-loading';
import AppPreLoader from "./components/AppPreLoader";
import AuthNavigation from "./navigations/AuthNavigation"
import LoggedNavigation from "./navigations/LoggedNavigation"
import {auth} from "./config/firebaseConfig"


const cacheImages = (images) => {
      return images.map(image => {
        if (typeof image === 'string') {
          return Image.prefetch(image);
        } else {
          return Asset.fromModule(image).downloadAsync();
        }
      });
    }

const _loadAssetsAsync = async() => {
    const imageAssets = cacheImages([
      require('./assets/images/header.jpg'),
      require('./assets/images/logo.png'),
      require('./assets/images/logo_dark.png'),
    ]);

    await Promise.all([...imageAssets]);

  } 



const  App = () => {
  const [isReady, setIsReady] = useState(false)
  const [isLogged, setIsLogged] = useState(false)
  const [loaded, setLoaded] = useState(false)   //파이어베이스 작동시 false에서 true로 변하게 해야함	
  
  const loadEnvironment = async () => {
	  	await Font.loadAsync({
			  Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
			  'Entypo': require('@expo/vector-icons/build/vendor/react-native-vector-icons/Fonts/Entypo.ttf'),
			  'FontAwesome': require('@expo/vector-icons/build/vendor/react-native-vector-icons/Fonts/FontAwesome.ttf'),
			  'Ionicons': require('@expo/vector-icons/build/vendor/react-native-vector-icons/Fonts/Ionicons.ttf'),
			  'MaterialCommunityIcons': require('@expo/vector-icons/build/vendor/react-native-vector-icons/Fonts/MaterialCommunityIcons.ttf'),
			  'SimpleLineIcons': require('@expo/vector-icons/build/vendor/react-native-vector-icons/Fonts/SimpleLineIcons.ttf'),
			  'FontAwesome': require('@expo/vector-icons/build/vendor/react-native-vector-icons/Fonts/FontAwesome.ttf')
			});
	     await auth.onAuthStateChanged((user) => {
			 console.log('파이어베이스 실행완료')
			  if(user !== null) {
				  setLoaded(true)
				  setIsLogged(true)
			  } else {
				  setLoaded(true)
				  setIsLogged(false)
			  }
			})
 	}
  
  useEffect(()=>{
	  loadEnvironment();

	return loadEnvironment
  },[])

      if (!isReady) {
      return (
        <AppLoading
          startAsync={_loadAssetsAsync}
          onFinish={() => setIsReady(true)}
          onError={console.warn}
        />
      ); }


    if ( ! loaded) {
      return (
        <AppPreLoader/>
        );
    }
	
     if(isLogged && isReady){
        return(
			<Root>
				<LoggedNavigation />
			</Root>
			
        )
     }else{
      return(
		<Root>
		   <AuthNavigation />
		  </Root>
			

       )
     }
}



export default App