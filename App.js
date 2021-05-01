import React, {useState, useEffect} from 'react';
import { Text, View, StyleSheet, Image , Root } from 'react-native';
import { Asset } from 'expo-asset';
import Constants from 'expo-constants';
import AppLoading from 'expo-app-loading';
import AppPreLoader from "./components/AppPreLoader";
import AuthNavigation from "./navigations/AuthNavigation"
import LoggedNavigation from "./navigations/LoggedNavigation"


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
      require('./assets/images/star.png'),
      require('./assets/images/avatar.png'),
      require('./assets/images/emptylist.png'),
      require('./assets/images/avatar.jpg'),
      require('./assets/images/nointernet.png'),
      require('./assets/images/contact.png'),
      require('./assets/images/address.png'),
      require('./assets/images/audience.png'),
      require('./assets/images/schedule.png'),
      require('./assets/images/phone.png'),
      require('./assets/images/website.png'),
      require('./assets/images/bookmarked.png'),
      require('./assets/images/checked.png'),
      require('./assets/images/empty-star.png'),
      require('./assets/images/half-star.png')
    ]);

    await Promise.all([...imageAssets]);
  }    

const App = () => {

  const [isReady, setIsReady] = useState(false)
  const [isLogged, setIsLogged] = useState(true)
  const [loaded, setLoaded] = useState(true)   //파이어베이스 작동시 false에서 true로 변하게 해야함


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
           <LoggedNavigation />
        )
     }else{
      return(
        <AuthNavigation />
       )
     }



}


export default App