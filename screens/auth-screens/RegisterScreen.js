import React, {Component, useRef, useState} from 'react';
var styles = require('../../assets/files/Styles');
import {Alert, Dimensions, Image, TouchableOpacity, FlatList, ScrollView, StatusBar} from 'react-native';
import { Container, Body, Footer, Header, Input, Item, Left, Text, Title, Right, View, Button, Toast, Form, Spinner} from 'native-base';
import Icono from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { LinearGradient } from 'expo-linear-gradient';
import ColorsApp from '../../utils/ColorsApp';
import Strings from '../../utils/Strings';
import { useForm, Controller } from "react-hook-form";
import {Grid, Row, Col } from 'react-native-easy-grid';
import {auth} from "../../config/firebaseConfig"

const width = Dimensions.get('window').width;


const RegisterScreen = () => {
 const [isLoading, setIsLoading] = useState(false)
 const { control, handleSubmit, formState: { errors } , watch} = useForm();
 const password = useRef({});
  password.current = watch("password", "");
	
  const errorHandler = ((e)=>{
	  setIsLoading(false)
            console.log(e);
            if(e.code == 'auth/email-already-in-use'){
				Toast.show({ text: `${Strings.ST36}`, position: 'bottom', buttonText: `${Strings.ST33}` })
               
            } else {
				Toast.show({ text: `${Strings.ST32}`, position: 'bottom', buttonText: `${Strings.ST33}` })
            }

        })
	
 const onSubmit = async (data) => {
	  setIsLoading(true)
	  const name = data.name
	  const email = data.email
	  const password = data.password
	  
	  await auth.createUserWithEmailAndPassword(email, password).then((response) => {
            auth.currentUser.updateProfile({
                displayName : name,
            }).then(()=>{
            }).catch(errorHandler);

        }).catch(errorHandler)
 } 

  return(
     <Container style={styles.background_general}>
      <KeyboardAwareScrollView>
        <View style={{flex: 0.8, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: 20}}>
			    <Image source={require('../../assets/images/logo_dark.png')} style={styles.logo_start} resizeMode="contain"/>
		      	<Form >
             <Controller
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                  <Item rounded style={styles.inputLogin}>
                    <Icono name="md-person" style={{fontSize: 18, marginLeft: 18, marginRight: 5, color: '#a4a4a4'}} />
                    <Input 
                      onChangeText={value => onChange(value)}
                      placeholder="Username" 
                      placeholderTextColor="#a4a4a4" 
                      style={{fontSize: 16, color: '#a4a4a4'}} 
                      autoCapitalize="none"
                    />
                  </Item>
                )}
                name="name"
                rules={{ required: {
                              value: true,
                              message : "This is required"
                            },
                 }}
                defaultValue=""
              />
              {errors.name && errors.name.type == "required" &&
               <Text style={{fontSize: 16, color: '#F32013', marginLeft: 25, marginBottom: 15}}>{errors.name.message}</Text>}
             <Controller
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                  <Item rounded style={styles.inputLogin}>
                    <Icono name="md-mail" style={{fontSize: 18, marginLeft: 18, marginRight: 5, color: '#a4a4a4'}} />
                    <Input 
                      onChangeText={value => onChange(value)}
                      placeholder="E-mail" 
                      placeholderTextColor="#a4a4a4" 
                      style={{fontSize: 16, color: '#a4a4a4'}} 
                      autoCapitalize="none"
                    />
                  </Item>
                )}
                name="email"
                rules={{ required: {
                              value: true,
                              message : "This is required"
                            },
                       pattern: {
                              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                              message: "invalid email address"
                            }
                 }}
                defaultValue=""
              />
              {errors.email && errors.email.type == "required" &&
               <Text style={{fontSize: 16, color: '#F32013', marginLeft: 25, marginBottom: 15}}>{errors.email.message}</Text>}
              {errors.email && errors.email.type == "pattern" &&
               <Text style={{fontSize: 16, color: '#F32013', marginLeft: 25, marginBottom: 15}}>{errors.email.message}</Text>}
              <Controller
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                  <Item rounded style={styles.inputLogin}>
                    <Icono name="md-lock-closed" style={{fontSize: 18, marginLeft: 18, marginRight: 5, color: '#a4a4a4'}} />
                    <Input 
                      onChangeText={value => onChange(value)}
                      placeholder={Strings.ST108} 
                      placeholderTextColor="#a4a4a4" 
                      style={{fontSize: 16, color: '#a4a4a4'}} 
                      secureTextEntry={true} 
                      autoCapitalize="none"
                    />
                  </Item>
                )}
                name="password"
                 rules={{ required: {
                              value: true,
                              message : "This is required"
                            },
                       minLength: {
                              value: 6,
                              message: "too short"
                            }
                 }}
                defaultValue=""
              />
              {errors.password && errors.password.type == "required" &&
               <Text style={{fontSize: 16, color: '#F32013', marginLeft: 25, marginBottom: 5}}>{errors.password.message}</Text>}
               {errors.password && errors.password.type == "minLength" &&
               <Text style={{fontSize: 16, color: '#F32013', marginLeft: 25, marginBottom: 5}}>{errors.password.message}</Text>}
                             <Controller
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                  <Item rounded style={styles.inputLogin}>
                    <Icono name="md-lock-closed" style={{fontSize: 18, marginLeft: 18, marginRight: 5, color: '#a4a4a4'}} />
                    <Input 
                      onChangeText={value => onChange(value)}
                      placeholder="Confirm Password"
                      placeholderTextColor="#a4a4a4" 
                      style={{fontSize: 16, color: '#a4a4a4'}} 
                      secureTextEntry={true} 
                      autoCapitalize="none"
                    />
                  </Item>
                )}
                name="password2"
                 rules={{ required: {
                              value: true,
                              message : "This is required"
                            },
                           validate:  value => value === password.current || "Passwords does not match",

                 }}
                defaultValue=""
              />
              {errors.password2 && errors.password2.type == "required" &&
               <Text style={{fontSize: 16, color: '#F32013', marginLeft: 25, marginBottom: 5}}>{errors.password2.message}</Text>}
              {errors.password2 && errors.password2.type == "validate" &&
              <Text style={{fontSize: 16, color: '#F32013', marginLeft: 25, marginBottom: 5}}>{errors.password2.message}</Text>}
		      	</Form>
 
             <Button onPress={handleSubmit(onSubmit)} style={{ marginTop: 15,  marginBottom: 15, alignSelf: 'center'}} transparent> 
                <LinearGradient colors={[ColorsApp.SECOND, ColorsApp.PRIMARY]} start={[0, 0]} end={[1, 0]} style={styles.button_auth}>  
                    <Text style={{color: '#FFFFFF', fontWeight: 'bold', fontSize: 14,}}>
                     {isLoading?
						<Spinner color='white' /> 
						: <Text style={{color: '#FFFFFF', fontWeight: 'bold', fontSize: 14,}}>
							{Strings.ST28.toUpperCase() }     
                    	  </Text>
					}
                    </Text>
                 </LinearGradient>
             </Button>
			  </View>
  		</KeyboardAwareScrollView>
		</Container>
  )

}

export default RegisterScreen
