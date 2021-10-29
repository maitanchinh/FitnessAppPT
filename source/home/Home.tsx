/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  Dimensions,
  FlatList,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
const Home = () => {
  return (
    <View>
      <View
        style={{
          width: 330,
          borderRadius: 20,
          backgroundColor: '#B9CBFF',
          alignSelf: 'center',
          padding: 5,
          marginVertical: 10,
          alignItems: 'center',
        }}>
        <Text style={{fontSize: 16}}>You have 4 class meeting left to day</Text>
      </View>
      <FlatList
        style={{marginVertical: 20}}
        data={[
          {
            time: '07:00am - 08:00am',
            name: 'Nguyen Van A',
            class: 'For health',
          },
          {
            time: '09:00am - 11:00am',
            name: 'Nguyen Van B',
            class: 'Lose weight',
          },
          {
            time: '13:00pm - 14:00pm',
            name: 'Nguyen Van C',
            class: 'Lose weight',
          },
          {
            time: '16:00pm - 17:00pm',
            name: 'Nguyen Van D',
            class: 'Lose weight',
          },
        ]}
        renderItem={({item}) => (
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              backgroundColor: 'white',
              borderRadius: 20,
              marginHorizontal: 10,
              marginVertical: 10,
            }}>
            <View
              style={{
                flexDirection: 'column',
                height: 100,
                paddingLeft: 20,
                paddingVertical: 5,
                justifyContent: 'space-around',
                flex: 8,
              }}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Ionicons name="person" style={styles.icon} />
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: '500',
                    marginHorizontal: 10,
                  }}>
                  {item.name}
                </Text>
              </View>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <MaterialCommunityIcons name="clock" style={styles.icon} />
                <Text style={{marginHorizontal: 10, fontSize: 16}}>
                  {item.time}
                </Text>
              </View>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <MaterialIcons name="class" style={styles.icon} />
                <Text style={{marginHorizontal: 10, fontSize: 16}}>
                  {item.class}
                </Text>
              </View>
            </View>
            <View
              style={{flex: 2, alignItems: 'center', justifyContent: 'center'}}>
              <MaterialIcons
                name="arrow-forward-ios"
                style={{fontSize: 30, color: '#D2A4F3'}}
              />
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  body: {
    backgroundColor: '#C4C4C4',
    marginHorizontal: 30,
  },
  icon: {
    color: '#707070',
    fontSize: 20,
  },
});
export default Home;
