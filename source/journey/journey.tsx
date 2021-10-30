import React from 'react';
import { TouchableOpacity, View, StyleSheet, SafeAreaView, ScrollView, Text } from 'react-native';
import JourneyComponent from './journey_component';
import { useNavigation } from '@react-navigation/core';

const Journey = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{flex: 12}}>
        <ScrollView>
          <ScrollView horizontal={true} scrollEnabled={false}>
            {JourneyComponent('Lose Weight Journey', DATA1)}
          </ScrollView>
          <ScrollView horizontal={true} scrollEnabled={false}>
            {JourneyComponent('For Health Journey', DATA1)}
          </ScrollView>
        </ScrollView>
      </View>
      <View style={{ flex: 2 }}>
        <TouchableOpacity onPress={() => { navigation.navigate('Create Journey') }}
          style={style.custombutton}>
          <Text style={{ textAlign: 'center' }}>Create Journey</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Create Discount Campaign')}
          style={style.custombutton2}>
          <Text style={{ textAlign: 'center' }}>Create Discount Campaign</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  custombutton: {
    color: 'white',
    backgroundColor: "rgb(45,156,219)",
    borderRadius: 10,
    width: 200,
    height: 25,
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignSelf: 'center'
  },
  custombutton2: {
    marginTop: 20,
    color: 'white',
    backgroundColor: "#ff9797",
    borderRadius: 10,
    width: 250,
    height: 25,
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignSelf: 'center'
  }

})
const DATA1 = [
  {
    time: '01',
    title: 'Week 1: Assessment week ',
    description:
      'Test your performance and give your coach feedback',
  },
  {
    time: '02',
    title: 'Week 2-5: Custom training',
    description: 'Your coach customizes each new week based on your traning',
  },
  {
    time: '03',
    title: 'Week 6: Hell week ',
    description:
      'Week 6 is Hell week.Time to prove what you’ve acomplised',
  },
  {
    time: '04',
    title: 'Finish Journey',
    description: 'Choose a new one or redo this one',
  },
];
export default Journey;