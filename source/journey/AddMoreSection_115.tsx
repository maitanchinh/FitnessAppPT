/* eslint-disable @typescript-eslint/no-unused-vars */
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

import {useNavigation, useRoute} from '@react-navigation/core';

const AddSection_115 = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const data = [
    {
      id: 1,
      name: 'Warm up',
      image: require('../../asserts/images/warmup.png'),
      calo: 100,
      time: 12,
      isChoose: false,
    },
    {
      id: 2,
      name: 'Squats',
      image: require('../../asserts/images/squats.png'),
      calo: 100,
      time: 12,
      isChoose: true,
    },
    {
      id: 3,
      name: 'Warm up',
      image: require('../../asserts/images/warmup.png'),
      calo: 100,
      time: 12,
      isChoose: false,
    },
    {
      id: 4,
      name: 'Warm up',
      image: require('../../asserts/images/warmup.png'),
      calo: 100,
      time: 12,
      isChoose: false,
    },
    {
      id: 5,
      name: 'Warm up',
      image: require('../../asserts/images/warmup.png'),
      calo: 100,
      time: 12,
      isChoose: false,
    },
    {
      id: 6,
      name: 'Warm up',
      image: require('../../asserts/images/warmup.png'),
      calo: 100,
      time: 12,
      isChoose: false,
    },
    {
      id: 7,
      name: 'Warm up',
      image: require('../../asserts/images/warmup.png'),
      calo: 100,
      time: 12,
      isChoose: false,
    },
    {
      id: 8,
      name: 'Warm up',
      image: require('../../asserts/images/warmup.png'),
      calo: 100,
      time: 12,
      isChoose: false,
    },
    {
      id: 9,
      name: 'Warm up',
      image: require('../../asserts/images/warmup.png'),
      calo: 100,
      time: 12,
      isChoose: false,
    },
    {
      id: 10,
      name: 'Warm up',
      image: require('../../asserts/images/warmup.png'),
      calo: 100,
      time: 12,
      isChoose: false,
    },
    {
      id: 11,
      name: 'Warm up',
      image: require('../../asserts/images/warmup.png'),
      calo: 100,
      time: 12,
      isChoose: false,
    },
    {
      id: 12,
      name: 'Warm up',
      image: require('../../asserts/images/warmup.png'),
      calo: 100,
      time: 12,
      isChoose: false,
    },
  ];
  let list;
  function getData() {
    route.params.exercises.forEach(id => {
      list = data.filter(item => {
        return item.id === id;
      });
    });
  }
  return (
    <SafeAreaView style={styles.container}>
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
          {/* <ScrollView horizontal={true} scrollEnabled={false}>
            <FlatList
              data={}
              renderItem={({ item }) =>
                <View style={{ marginBottom: 20 }}>
                  <Text style={{ fontSize: 22, marginBottom: 10 }}>Session 2</Text>
                  <View style={{ flexDirection: 'row', paddingHorizontal: 10 }}>
                    <Image
                      source={item.image}
                      style={{
                        height: 70,
                        width: 70,
                        borderRadius: 35,
                        resizeMode: 'contain',
                      }}
                    />
                    <View style={{ marginHorizontal: 30 }}>
                      <Text style={{ fontWeight: 'bold' }}>item.name</Text>
                      <Text>{item.time}x</Text>
                    </View>
                  </View>
                </View>} />
          </ScrollView> */}
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
