/* eslint-disable react-native/no-inline-styles */
import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
const AddStep = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          height: '6%',
          width: '100%',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <TouchableOpacity
          style={{
            height: '100%',
            alignItems: 'center',
            flexDirection: 'row',
            paddingLeft: 10,
          }}
          onPress={() => {
            navigation.goBack();
          }}>
          {/* <Image source={require('../asserts/icons/back-button.png')} style={{ flex: 1 }} resizeMode="contain" /> */}
          <Ionicons name="chevron-back" size={30} />
          <Text style={{fontSize: 20, paddingLeft: 10, fontWeight: '500'}}>
            Back
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.body}>
        <Text style={{fontSize: 19, fontWeight: 'bold', marginVertical: 10}}>
          Picture
        </Text>
        <View
          style={{
            width: 350,
            height: 200,
            borderRadius: 30,
            alignItems: 'center',
            alignSelf: 'center',
            backgroundColor: '#D7D7D7',
            marginBottom: 10,
          }}>
          <Image
            source={require('../../asserts/images/no_photo.png')}
            style={{resizeMode: 'contain', flex: 1}}
          />
          <TouchableOpacity
            style={{
              alignSelf: 'flex-end',
              position: 'absolute',
              top: 131,
              right: 10,
            }}
            onPress={() => {}}>
            <View
              style={{
                width: 60,
                height: 60,
                borderRadius: 30,
                backgroundColor: 'white',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Ionicons
                name="camera"
                style={{color: '#97B2FF', fontSize: 50}}
              />
            </View>
          </TouchableOpacity>
        </View>
        <Text style={{fontSize: 19, fontWeight: 'bold', marginVertical: 10}}>
          Name
        </Text>
        <TextInput
          placeholder="Name of step"
          style={{
            borderRadius: 10,
            borderWidth: 1,
            paddingHorizontal: 10,
            width: 280,
            height: 40,
            alignSelf: 'flex-end',
            marginBottom: 10,
            borderColor: '#97B2FF',
            fontSize: 18,
          }}
        />
        <Text style={{fontSize: 19, fontWeight: 'bold', marginVertical: 10}}>
          Description
        </Text>
        <TextInput
          style={{
            borderWidth: 1,
            borderRadius: 10,
            borderColor: '#97B2FF',
            height: 80,
            width: 280,
            padding: 10,
            alignSelf: 'flex-end',
            fontSize: 18,
          }}
          placeholder="Description of step"
          multiline={true}
        />
      </View>
      <View style={{justifyContent: 'flex-end'}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
          }}>
          <TouchableOpacity
            style={{
              backgroundColor: '#97B2FF',
              borderRadius: 35,
              height: 70,
              width: 120,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text>Done</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  body: {
    marginHorizontal: 20,
    flex: 9,
  },
});

export default AddStep;
