import React, {Component} from 'react';
var styles = require('../../assets/files/Styles');
import {Alert, Dimensions, Image, TouchableOpacity, StatusBar} from 'react-native';
import { Container, Body, Footer, Header, Input, Item, Left, Text, Title, Right, View, Button, Toast, Label, Form} from 'native-base';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import Icono from 'react-native-vector-icons/Ionicons';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { LinearGradient } from 'expo-linear-gradient';
import ColorsApp from '../../utils/ColorsApp';
import Strings from '../../utils/Strings';
import { useForm, Controller } from "react-hook-form";
import {Grid, Row, Col } from 'react-native-easy-grid';

const width = Dimensions.get('window').width;

const LoginScreen = ({navigation}) => {

  const { control, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

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
		      	</Form>
 
             <Button onPress={handleSubmit(onSubmit)} style={{ marginTop: 15,  marginBottom: 15, alignSelf: 'center'}} transparent> 
                <LinearGradient colors={[ColorsApp.SECOND, ColorsApp.PRIMARY]} start={[0, 0]} end={[1, 0]} style={styles.button_auth}>  
                    <Text style={{color: '#FFFFFF', fontWeight: 'bold', fontSize: 14,}}>
                      {Strings.ST28.toUpperCase()}
                    </Text>
                 </LinearGradient>
             </Button>

            
            <TouchableOpacity  onPress={()=>navigation.navigate("ForgetPasswordScreen")} style={styles.text_auth} activeOpacity={1}>
              <Text style={styles.text_auth}>{Strings.ST29.toUpperCase()}</Text>
            </TouchableOpacity>
			  </View>
  		</KeyboardAwareScrollView>
		</Container>
  )

}

export default LoginScreen