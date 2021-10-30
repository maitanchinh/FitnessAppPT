/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {
  SafeAreaView,
  ScrollView,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  Text,
  StyleSheet,
} from 'react-native';
import { useNavigation } from '@react-navigation/core';
const AddSection_111 = () => {
  const navigation = useNavigation();
  const data = [{ rope: false }, { barbel: false }];
  const [rope, setRope] = useState(false);
  const [barbel, setBarbel] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.body}>
        <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Tools in need</Text>
        <View style={styles.searchBox}>
          <TouchableOpacity onPress={() => { }}>
            <AntDesign
              name="search1"
              size={20}
              style={{ marginHorizontal: 10, color: '#97B2FF' }}
            />
          </TouchableOpacity>
          <TextInput placeholder="Search..." />
        </View>
        <ScrollView style={{ marginHorizontal: 10 }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              marginVertical: 30,
            }}>
            <TouchableOpacity
              style={{
                flexDirection: 'column',
                height: 150,
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
              onPress={() => { rope ? setRope(false) : setRope(true) }}>
              <Image
                source={require('../../asserts/images/rope.jpeg')}
                style={styles.image}
              />
              {

                rope ? <AntDesign name="checkcircleo"
                  style={{ position: 'absolute', right: 5, top: 5, fontSize: 20, color: '#97B2FF' }} /> : null
              }
              <Text style={{ fontSize: 20, color: '#707070' }}>Rope</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flexDirection: 'column',
                height: 150,
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
              onPress={() => { barbel ? setBarbel(false) : setBarbel(true) }}>
              <Image
                source={require('../../asserts/images/barbel.jpeg')}
                style={styles.image}
              />
              {

                barbel ? <AntDesign name="checkcircleo"
                  style={{ position: 'absolute', right: 5, top: 5, fontSize: 20, color: '#97B2FF' }} /> : null
              }
              <Text style={{ fontSize: 20, color: '#707070' }}>Barbel</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
        <View style={{ flex: 2, justifyContent: 'flex-end', bottom: 20 }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              marginBottom: 30,
            }}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Exercises')}
              style={{
                backgroundColor: '#97B2FF',
                borderRadius: 35,
                height: 70,
                width: 120,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text>Next</Text>
            </TouchableOpacity>
          </View>
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
  searchBox: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#97B2FF',
    padding: 5,
    marginVertical: 10,
    flexDirection: 'row',
  },
  body: {
    margin: 30,
    flex: 8,
  },
  image: {
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#F1EDED',
    height: 114,
    width: 114,
    resizeMode: 'contain',
  },
});

export default AddSection_111;