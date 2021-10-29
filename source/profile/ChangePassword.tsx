/* eslint-disable react-native/no-inline-styles */
import {useNavigation} from '@react-navigation/core';
import {StackActions, NavigationActions} from 'react-navigation';
import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
const ChangePassword = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <Text style={{fontSize: 18, fontWeight: 'bold', marginBottom: 10}}>
          Current Password
        </Text>
        <TextInput secureTextEntry={true} style={styles.password} />
        <Text style={{fontSize: 18, fontWeight: 'bold', marginBottom: 10}}>
          New Password
        </Text>
        <TextInput secureTextEntry={true} style={styles.password} />
        <Text style={{fontSize: 18, fontWeight: 'bold', marginBottom: 10}}>
          Comfirm Password
        </Text>
        <TextInput secureTextEntry={true} style={styles.password} />
      </View>
      <View
        style={{flexDirection: 'row', justifyContent: 'space-evenly', flex: 2}}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            borderRadius: 35,
            borderWidth: 1,
            borderColor: '#97B2FF',
            height: 70,
            width: 120,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            alignSelf: 'center',
          }}>
          <Text>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            backgroundColor: '#97B2FF',
            borderRadius: 35,
            height: 70,
            width: 120,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            alignSelf: 'center',
          }}>
          <Text>Save</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const resetAction = StackActions.reset({
  index: 0,
  actions: [NavigationActions.navigate({routeName: 'Change Password'})],
});

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  body: {
    flex: 8,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  password: {
    width: 252,
    height: 32,
    borderWidth: 1,
    borderColor: '#97B2FF',
    borderRadius: 10,
    alignSelf: 'flex-end',
    marginBottom: 20,
  },
});

export default ChangePassword;
