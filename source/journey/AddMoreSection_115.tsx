/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { useNavigation } from '@react-navigation/core';

const AddSection_115 = () => {
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
        // navigation.goBack()
          }}>
          {/* <Image source={require('../asserts/icons/back-button.png')} style={{ flex: 1 }} resizeMode="contain" /> */}
          <Ionicons name="chevron-back" size={30} />
          <Text style={{fontSize: 20, paddingLeft: 10, fontWeight: '500'}}>
            Back
          </Text>
        </TouchableOpacity>
      </View>
      <ScrollView>
        <View style={{marginHorizontal: 10, marginVertical: 10}}>
          <Image
            style={styles.picture}
            source={require('../../asserts/images/workout.jpeg')}
          />
        </View>
        <View style={{marginHorizontal: 30}}>
          <Text style={{color: '#676264', fontSize: 22, fontWeight: 'bold'}}>
            Week 1: Assessment week
          </Text>
          <Text style={{color: '#676264', marginVertical: 5}}>
            6 session | 320 calories
          </Text>
          <View
            style={{
              backgroundColor: '#F7E9FB',
              height: 45,
              borderRadius: 16,
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginVertical: 5,
            }}>
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingLeft: 20,
              }}>
              <AntDesign
                name="swap"
                size={30}
                color="#676264"
                style={{marginRight: 5}}
              />
              <Text style={{color: '#676264'}}>Difficulty</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingRight: 20,
              }}>
              <Text style={{color: '#676264'}}>Beginer</Text>
              <MaterialIcon
                name="arrow-forward-ios"
                size={30}
                color="#676264"
                style={{marginLeft: 5}}
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              marginVertical: 30,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text style={{fontSize: 22, fontWeight: 'bold'}}>You'll need</Text>
            <Text style={{color: '#676264'}}>5 Items</Text>
          </View>
          <View>
            <ScrollView horizontal={true}>
              <View
                style={{
                  flexDirection: 'column',
                  alignItems: 'center',
                  marginHorizontal: 20,
                }}>
                <Image
                  source={require('../../asserts/images/barbel.jpeg')}
                  style={{borderRadius: 14, width: 114, height: 114}}
                />
                <Text style={{fontSize: 20, color: '#676264'}}>Barbel</Text>
              </View>
              <View
                style={{
                  flexDirection: 'column',
                  alignItems: 'center',
                  marginHorizontal: 20,
                }}>
                <Image
                  source={require('../../asserts/images/rope.jpeg')}
                  style={{borderRadius: 14, width: 114, height: 114}}
                />
                <Text style={{fontSize: 20, color: '#676264'}}>Rope</Text>
              </View>
            </ScrollView>
          </View>
          <View
            style={{
              marginVertical: 30,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text style={{fontSize: 22, fontWeight: 'bold'}}>Exercises</Text>
            <Text style={{color: '#676264'}}>5 Session</Text>
          </View>
          <View style={{marginBottom: 20}}>
            <Text style={{fontSize: 22, marginBottom: 10}}>Session 1</Text>
            <View style={{flexDirection: 'row', paddingHorizontal: 10}}>
              <Image
                source={require('../../asserts/images/warmup.png')}
                style={{
                  height: 70,
                  width: 70,
                  borderRadius: 35,
                  resizeMode: 'contain',
                }}
              />
              <View style={{marginHorizontal: 30}}>
                <Text style={{fontWeight: 'bold'}}>Warm Up</Text>
                <Text>12x</Text>
              </View>
            </View>
          </View>
          <View style={{marginBottom: 20}}>
            <Text style={{fontSize: 22, marginBottom: 10}}>Session 2</Text>
            <View style={{flexDirection: 'row', paddingHorizontal: 10}}>
              <Image
                source={require('../../asserts/images/squats.png')}
                style={{
                  height: 70,
                  width: 70,
                  borderRadius: 35,
                  resizeMode: 'contain',
                }}
              />
              <View style={{marginHorizontal: 30}}>
                <Text style={{fontWeight: 'bold'}}>Warm Up</Text>
                <Text>20x</Text>
              </View>
            </View>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
            <TouchableOpacity
            onPress={() => navigation.reset({
              index: 0,
              routes: [{name: 'Create Journey'}],
            })}
              style={{
                backgroundColor: '#97B2FF',
                borderRadius: 35,
                height: 70,
                width: 120,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text>Finish</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  picture: {
    borderRadius: 40,
    alignItems: 'center',
    width: (Dimensions.get('window').width * 95) / 100,
    height: Dimensions.get('window').width * 0.5,
  },
});
export default AddSection_115;
