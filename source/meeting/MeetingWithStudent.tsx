/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  View,
  Dimensions,
} from 'react-native';
import {useNavigation} from '@react-navigation/core';

const {width} = Dimensions.get('window');

const MeetingWithStudent = () => {
  const navigation = useNavigation();
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{marginHorizontal: 16, marginTop: 14}}>
      <Image
        style={{height: 180, width: width * 0.9, borderRadius: 50}}
        source={require('../asserts/images/body.jpeg')}
      />

      <Image
        source={{
          uri: 'https://www.ocregister.com/wp-content/uploads/2020/04/OCR-L-PREMIUM-MAGAZINE-WORKOUTS-0426-1-1.jpg?w=863',
        }}
        style={{
          height: 180,
          width: width * 0.9,
          borderRadius: 50,
          marginTop: 20,
        }}
      />
      <Text
        style={{
          fontSize: 24,
          marginTop: 10,
          fontWeight: '600',
        }}>
        Bài tập của học viên
      </Text>
      <Text
        style={{
          fontSize: 20,
          marginTop: 10,
          fontWeight: '500',
        }}>
        Bài tập bây giờ
      </Text>
      <View style={{flexDirection: 'row', marginVertical: 10}}>
        <Image
          source={require('../asserts/images/nhay_day.png')}
          style={{
            height: 70,
            width: 70,
            borderRadius: 35,
            resizeMode: 'contain',
            flex: 2,
          }}
        />
        <View
          style={{
            width: 130,
            marginHorizontal: 20,
            flexDirection: 'column',
            justifyContent: 'space-around',
            flex: 7,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text style={{fontSize: 22, fontWeight: 'bold', flex: 6}}>
              Làm nóng người
            </Text>
          </View>
          <Text style={{fontSize: 20, color: '#707070'}}>12x</Text>
        </View>
        <TouchableOpacity
          style={{flex: 1}}
          onPress={() => {
            navigation.navigate('ExerciseDetail');
          }}>
          <Image
            source={{
              uri: 'https://media.discordapp.net/attachments/900392963639750657/900404447602176050/arrow-icon-png-8.png',
            }}
            style={{
              width: 30,
              height: 70,
              resizeMode: 'stretch',
            }}
          />
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
        Kế Tiếp
      </Text>
      <View style={{flexDirection: 'row', marginVertical: 10}}>
        <Image
          source={require('../asserts/images/gap-ung.jpg')}
          style={{
            height: 70,
            width: 70,
            borderRadius: 35,
            resizeMode: 'contain',
            flex: 2,
          }}
        />
        <View
          style={{
            width: 130,
            marginHorizontal: 20,
            flexDirection: 'column',
            justifyContent: 'space-around',
            flex: 7,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text style={{fontSize: 22, fontWeight: 'bold', flex: 6}}>
              Gập bụng
            </Text>
          </View>
          <Text style={{fontSize: 20, color: '#707070'}}>12x</Text>
        </View>
        <TouchableOpacity
          style={{flex: 1}}
          onPress={() => {
            navigation.navigate('ExerciseDetail');
          }}>
          <Image
            source={{
              uri: 'https://media.discordapp.net/attachments/900392963639750657/900404447602176050/arrow-icon-png-8.png',
            }}
            style={{
              width: 30,
              height: 70,
              resizeMode: 'stretch',
            }}
          />
        </TouchableOpacity>
      </View>
      <View
        style={{
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
            marginLeft: width * 0.3,
            width: width * 0.4,
          }}
          onPress={() => {
            navigation.navigate('Meeting Select Exercise');
          }}>
          <Text
            style={{
              color: 'white',
            }}>
            Chọn bài tập
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};
export default MeetingWithStudent;
