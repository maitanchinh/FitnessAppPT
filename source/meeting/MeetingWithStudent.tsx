import React from 'react';
import { Text, ScrollView, Image, TouchableOpacity, View, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/core';

const { height, width } = Dimensions.get('window');

const MeetingWithStudent = () => {
  const navigation = useNavigation();
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={{ marginHorizontal: 16, marginTop: 14 }}>
      <Image
        style={{ height: 180, width: width * 0.9, borderRadius: 50 }}
        source={require('../../asserts/images/body.jpeg')}
      />

      <View style={{ height: 180, width: width * 0.9, borderRadius: 50, marginTop: 20 }}>
        <Text>Your Screen</Text>
      </View>
      <Text
        style={{
          fontSize: 24,
          marginTop: 10,
          fontWeight: '600',
        }}>
        Student's Excercises
      </Text>
      <Text
        style={{
          fontSize: 20,
          marginTop: 10,
          fontWeight: '500',
        }}>
        Now Exercise
      </Text>
      <View style={{ flexDirection: 'row', marginVertical: 10 }}>
        <Image source={require('../../asserts/images/nhay_day.png')}
          style={{ height: 70, width: 70, borderRadius: 35, resizeMode: 'contain', flex: 2 }} />
        <View style={{ width: 130, marginHorizontal: 20, flexDirection: 'column', justifyContent: 'space-around', flex: 7 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <Text style={{ fontSize: 22, fontWeight: 'bold', flex: 6 }}>Warm up</Text>
          </View>
          <Text style={{ fontSize: 20, color: '#707070' }}>12x</Text>
        </View>
        <TouchableOpacity style={{ flex: 1 }} onPress={() => { navigation.navigate('ExerciseDetail') }}>
          <Image source={{ uri: 'https://media.discordapp.net/attachments/900392963639750657/900404447602176050/arrow-icon-png-8.png', }}
            style={{
              width: 30,
              height: 70,
              resizeMode: 'stretch',
            }} />
        </TouchableOpacity>
      </View>
      <View
        style={{
          height: 14,
          width: 250,
          backgroundColor: '#97B8FD',
          borderRadius: 12,
          position: 'relative',
          marginLeft: 10,
          marginTop: 8,
        }}
      />
      <View
        style={{
          height: 14,
          width: width * 0.85,
          borderRadius: 12,
          borderColor: '#97B8FD',
          borderWidth: 1,
          position: 'relative',
          top: -22,
          marginLeft: 10,
          marginTop: 8,
        }}
      />
      <Text
        style={{
          fontSize: 20,
          marginTop: 10,
          fontWeight: '500',
        }}>
        Next
      </Text>
      <View style={{ flexDirection: 'row', marginVertical: 10 }}>
        <Image source={require('../../asserts/images/skipping.jpeg')}
          style={{ height: 70, width: 70, borderRadius: 35, resizeMode: 'contain', flex: 2 }} />
        <View style={{ width: 130, marginHorizontal: 20, flexDirection: 'column', justifyContent: 'space-around', flex: 7 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <Text style={{ fontSize: 22, fontWeight: 'bold', flex: 6 }}>Skipping</Text>
          </View>
          <Text style={{ fontSize: 20, color: '#707070' }}>12x</Text>
        </View>
        <TouchableOpacity style={{ flex: 1 }} onPress={() => { navigation.navigate('ExerciseDetail') }}>
          <Image source={{ uri: 'https://media.discordapp.net/attachments/900392963639750657/900404447602176050/arrow-icon-png-8.png', }}
            style={{
              width: 30,
              height: 70,
              resizeMode: 'stretch',
            }} />
        </TouchableOpacity>
      </View>
      <View style={{
        marginVertical: 50,
      }}>
        <TouchableOpacity
          style={{
            height: 25,
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center',
            backgroundColor: '#97B2FF',
            borderRadius: 35,
            width: width * 0.4,
            alignItems: 'center',
            alignSelf: 'center'
          }}
          onPress={() => { navigation.navigate('Meeting Select Exercise') }}>
          <Text style={{
            color: 'white'
          }}>
            Select Excercise
          </Text>
        </TouchableOpacity>
      </View>

    </ScrollView>
  );
}
export default MeetingWithStudent;