import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { ScrollView, TouchableOpacity, Button,Dimensions ,TextInput ,Text ,View , StyleSheet } from 'react-native';
import Timeline from 'react-native-timeline-flatlist';
import { useNavigation } from '@react-navigation/core';

const { height, width } = Dimensions.get('window');

const CreateJourney = () => {
  const navigation = useNavigation();
  return (
    <ScrollView>
      <View style={{paddingTop:20,paddingHorizontal:20}}>
        <Text style={style.title}>Journey Name</Text>
        <TextInput style={style.longInput}/>
        <Text style={style.title}>Price (VND)</Text>
        <TextInput keyboardType='numeric' style={style.priceInput}/>
        <ScrollView style={style.journey} horizontal={true} scrollEnabled={false}>
            <Timeline
              data={DATA}
              circleSize={20}
              circleColor="rgb(45,156,219)"
              lineColor="rgb(45,156,219)"
              timeContainerStyle={{minWidth: 52, marginTop: -5}}
              timeStyle={{
                textAlign: 'center',
                backgroundColor: '#ff9797',
                color: 'white',
                padding: 5,
                borderRadius: 13,
              }}
              descriptionStyle={{color: 'gray'}}
              options={{
                style: {paddingTop: 5},
              }}
            />
          </ScrollView>
          <TouchableOpacity onPress={() => {
               navigation.navigate('Equipments')
            }}
            style={style.custombutton}>
              <Text style={{textAlign:'center'}}>Add more</Text>
            </TouchableOpacity>
          <View style={{marginTop: 50,flexDirection: 'row', justifyContent: 'space-around'}}>
            <TouchableOpacity onPress={() => {
               navigation.navigate('MyTabs')
            }}
            style={{backgroundColor: '#97B2FF', borderRadius: 35, height: 70, width: 300,
            flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
              <Text>Done</Text>
            </TouchableOpacity>
          </View>
      </View>
    </ScrollView>
  );
}

const style = StyleSheet.create({
    header: {
      fontSize: 22,
      fontWeight: '600',
    },
    longInput: {
      fontSize: 18,
      marginHorizontal: width*0.1,
      paddingHorizontal: width*0.1,
      paddingVertical: 8,
      borderColor:"rgb(45,156,219)",
      borderWidth:1,
      borderRadius:8
    },
    priceInput:{
      paddingHorizontal: 10,
      paddingVertical: 8,
      fontSize: 18,
      fontWeight: '600',
      width: width*0.4,
      borderColor:"rgb(45,156,219)",
      borderWidth:1,
      borderRadius:8
    },
    Row:{
      flex: 1,
		  flexDirection: 'row',
      justifyContent: 'space-between',
    },
    journey: {
      height: height*0.4,
      marginTop: 50,
    },
    title: {
      fontSize: 18,
      marginTop: 6,
      // marginLeft: 10,
      fontWeight: '600',
    },
    custombutton:{
      color: 'white',
      backgroundColor: "rgb(45,156,219)",
      borderRadius: 10,
      alignSelf: 'center',
      width: 150,
      padding: 10,
    }
})
const DATA = [
  {
    time: '01',
    title: 'Week 1: Assessment week',
    description:
      'Test your performance and give your coach feedback',
  },
  {
    time: '02',
    title: 'Week 2-5: Custom training',
    description:
      'Your coach customizes each new week based on your traning',
  },
];

export default CreateJourney;