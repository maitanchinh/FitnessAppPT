import React from 'react';
import { ScrollView,View,Dimensions, Text, TextInput, Image, TouchableOpacity,StyleSheet} from 'react-native';
import { useNavigation } from '@react-navigation/core';


const { height, width } = Dimensions.get('window');

const Login = () => {
  const navigation = useNavigation();
  return (
    <ScrollView>
    <View style={{marginHorizontal: 16, marginTop: 70}}>
      <Text style={style.text}>Sign In</Text>
      <Text style={[style.text, style.mv]}>To Account</Text>
      <Text style={{color: '#A5A5A5'}}>
        Sign with username or email and password to use your account
      </Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-start',
          height: 44,
          width: width*0.9,
          borderWidth: 0.2,
          paddingLeft: 8,
          borderRadius: 6,
          marginTop: 40,
          marginBottom: 20,
        }}>
          <Image style={style.icons}
          source={require('../../asserts/icons/mail.png')}/>
          <TextInput
            placeholder={'huytq@gmail.com'}
            placeholderTextColor={'#919191'}
            keyboardType={'email-address'}
          />
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-start',
          height: 44,
          width: width*0.9,
          borderWidth: 0.2,
          paddingLeft: 8,
          borderRadius: 6,
        }}>
          <Image style={style.icons}
          source={require('../../asserts/icons/padlock-unlocked.png')}/>
          <TextInput
            placeholder={'*******'}
            placeholderTextColor={'#919191'}
            keyboardType={'default'}
            keyboardAppearance={'default'}
            secureTextEntry
          />
      </View>
      
      <TouchableOpacity
        onPress={() => {navigation.navigate('Home')}}
        style={{
          height: 50,
          width: width*0.9,
          marginTop: 70,
          borderRadius: 10,
          backgroundColor: '#1981F8',
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 14,
          }}>
          <Text
            style={{
              color: 'white',
              fontSize: 20,
              fontWeight: '500',
              textAlign: 'center',
            }}>
            Sign In
          </Text>
        </View>
      </TouchableOpacity>

      
      <TouchableOpacity onPress={() => {navigation.navigate('Register')}}>
        <Text
          style={{
            textAlign: 'center',
            marginTop: 70,
            fontSize: 16,
            color: '#D4D4D4',
            fontWeight: '500',
          }}>
          Don't have an account?-{' '}
          <Text style={{color: '#4F92F8'}}>Sign Up</Text>
        </Text>
      </TouchableOpacity>
    </View>
    </ScrollView>
  );
};

export default Login;
const style = StyleSheet.create({
  text: {
    fontSize: 20,
    color: '#434343',
    fontWeight: '500',
  },
  mv: {
    marginVertical: 10,
  },
  icons:{
    resizeMode:'stretch',
    width: 20,
    height: 20,
    marginTop: 12,
    marginHorizontal: 6,
  }
});