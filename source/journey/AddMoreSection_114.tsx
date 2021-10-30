/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import RNPPickerSelect from 'react-native-picker-select';


import {
  SafeAreaView,
  Dimensions,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  Text,
  StyleSheet,
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/core';
const AddSection_114 = () => {
  const navigation = useNavigation();
  const route = useRoute();
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 8 }}>
        <View style={{ marginHorizontal: 10 }}>
          <Text style={{ fontSize: 22, fontWeight: 'bold', marginVertical: 10 }}>
            Your trailer Video
          </Text>
          <Image
            source={require('../../asserts/images/workout.jpeg')}
            style={styles.picture}
          />
          <Text style={{ fontSize: 19, fontWeight: 'bold', marginVertical: 10 }}>
            Description
          </Text>
          <TextInput
            style={{
              borderWidth: 1,
              borderRadius: 10,
              padding: 20,
              height: 100,
              fontSize: 18,
            }}
            multiline={true}
            placeholder="Enter description"
          />
          <View
            style={{
              flexDirection: 'row',
              marginVertical: 30,
              justifyContent: 'space-between',
            }}>
            <Text style={{ fontSize: 19, fontWeight: 'bold' }}>Difficulty</Text>
              <RNPPickerSelect
              
                placeholder={{
                  label: 'Select level',
                }}
                style={{}}
                onValueChange={(value) => console.log(value)}
                items={[
                  { label: 'Beginner', value: 'beginner' },
                  { label: 'Professional', value: 'professional' }
                ]}
              />
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={{ fontSize: 19, fontWeight: 'bold' }}>
              Total Calories Burn
            </Text>
            <TextInput
              style={{ fontSize: 20, color: '#676264' }}
              placeholder="Enter amount"
            />
          </View>
        </View>
      </View>

      <View style={{ flex: 2, justifyContent: 'flex-end' }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginBottom: 30,
          }}>
          <TouchableOpacity
          onPress={() => navigation.navigate('Details')}
            style={{
              backgroundColor: '#97B2FF',
              borderRadius: 35,
              height: 70,
              width: 300,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text>Next</Text>
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
  picture: {
    borderRadius: 40,
    alignItems: 'center',
    width: (Dimensions.get('window').width * 95) / 100,
    height: Dimensions.get('window').width * 0.5,
    marginVertical: 10,
  },
});
export default AddSection_114;