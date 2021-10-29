import React from 'react';
import { Dimensions ,Text ,View, StyleSheet, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/core';

const { height, width } = Dimensions.get('window');

const PictureStep3 = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <LinearGradient
        colors={['#94A7FE','transparent']}
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          top: 0,
          height: 600,}}
      />
      <View>
        <Text style={styles.Title}>Step 3: Skipping</Text>
      </View>
      <View>
        <Image 
          style={styles.ImageStyle}
          source={require('../../asserts/images/nhay_day.png')}/>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
            <TouchableOpacity onPress={() => {navigation.goBack}}
            style={{borderWidth: 1, borderRadius: 35, height: 70, width: 120, 
            borderColor: '#97B2FF', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
              <Text style={{color: '#97B2FF'}}>Back</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {navigation.navigate('PictureStep4')}}
            style={{backgroundColor: '#97B2FF', borderRadius: 35, height: 70, width: 120,
            flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
              <Text>Next</Text>
            </TouchableOpacity>
          </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  ImageStyle:{
    margin: 15,
    width: width*0.9,
    height: height*0.7,
    resizeMode: 'stretch',
  },
  Title:{
    color: 'white',
    paddingVertical: 10,
    height: 50,
    backgroundColor: '#5869f4',
    paddingLeft: width*0.1,
  }
})
export default PictureStep3;