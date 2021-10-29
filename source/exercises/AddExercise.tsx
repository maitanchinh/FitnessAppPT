/* eslint-disable react-native/no-inline-styles */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useState} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  TextInput,
  Dimensions,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/core';
import Timeline from 'react-native-timeline-flatlist';
import ImagePicker from 'react-native-image-crop-picker';

const AddExercise = () => {
  const [isChoose, setIsChoose] = useState(Boolean);
  const [target, setTarget] = useState('');
  const [image, setImage] = useState('../../asserts/images/no_photo.png');
  const navigation = useNavigation();

  let lose = false;
  let getFit = false;
  let health = false;
  let yoga = false;
  function select(status, value) {
    if (value == 'lose') {
      setIsChoose(status);
      setTarget(value);
    }
    if (value == 'getFit') {
      setIsChoose(status);
      setTarget(value);
    }
    if (value == 'health') {
      setIsChoose(status);
      setTarget(value);
    }
    if (value == 'yoga') {
      setIsChoose(status);
      setTarget(value);
    }
  }
  if (isChoose == true) {
    if (target === 'lose') {
      lose = true;
    }
    if (target === 'getFit') {
      getFit = true;
    }
    if (target === 'health') {
      health = true;
    }
    if (target === 'yoga') {
      yoga = true;
    }
  }
  const data = [
    {
      time: 1,
      title: 'Spread Your Arms',
      description:
        'To make the gestures feel more relaxed stretch your arms as you start this movement. No bending of hands',
    },
    {
      time: 2,
      title: 'Rest At The Toe',
      description:
        'To make the gestures feel more relaxed stretch your arms as you start this movement. No bending of hands',
    },
  ];

  // const takePhotoFromCamera = () => {
  //   ImagePicker.openCamera({
  //     width: 300,
  //     height: 400,
  //     cropping: true,
  //   }).then(image => {
  //     console.log(image);
  //   });
  // };

  // const choosePhotoFromLibrary = () => {
  //   console.warn('Choose photo');
  //   ImagePicker.openPicker({
  //     width: 300,
  //     height: 400,
  //     cropping: true,
  //   }).then(image => {
  //     console.log(image);
  //     setImage(image.path);
  //   });
  // };
  return (
    <View style={styles.container}>
      <ScrollView style={styles.body} horizontal={false}>
        <Text
          style={{
            fontSize: 22,
            fontWeight: 'bold',
            marginVertical: 10,
          }}>
          Video Exercise
        </Text>
        <View
          style={{
            width: 350,
            height: 200,
            borderRadius: 30,
            alignItems: 'center',
            alignSelf: 'center',
            backgroundColor: '#D7D7D7',
            marginBottom: 10,
          }}>
          <Image
            source={require('../../asserts/images/no_photo.png')}
            style={{resizeMode: 'contain', flex: 1}}
          />
          <TouchableOpacity
            style={{
              alignSelf: 'flex-end',
              position: 'absolute',
              top: 131,
              right: 10,
            }}
            onPress={() => choosePhotoFromLibrary()}>
            <View
              style={{
                width: 60,
                height: 60,
                borderRadius: 30,
                backgroundColor: 'white',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Ionicons
                name="camera"
                style={{color: '#97B2FF', fontSize: 50}}
              />
            </View>
          </TouchableOpacity>
        </View>
        <Text style={{fontSize: 19, fontWeight: 'bold', marginVertical: 10}}>
          Name
        </Text>
        <TextInput
          placeholder="Name of exercise"
          style={{
            borderRadius: 10,
            borderWidth: 1,
            paddingHorizontal: 10,
            width: 280,
            height: 40,
            alignSelf: 'flex-end',
            marginBottom: 10,
            borderColor: '#97B2FF',
          }}
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginVertical: 10,
          }}>
          <Text style={{fontSize: 19, fontWeight: 'bold', marginVertical: 10}}>
            Calories burn
          </Text>
          <TextInput
            style={{
              width: 65,
              height: 40,
              borderColor: '#97B2FF',
              borderRadius: 10,
              borderWidth: 1,
              textAlign: 'center',
              fontSize: 18,
            }}
            keyboardType="numbers-and-punctuation"
            placeholder="Amount"
          />
        </View>
        <Text style={{fontSize: 19, fontWeight: 'bold', marginVertical: 10}}>
          Description
        </Text>
        <TextInput
          style={{
            borderWidth: 1,
            borderRadius: 10,
            borderColor: '#97B2FF',
            height: 80,
            width: 280,
            padding: 10,
            alignSelf: 'flex-end',
            fontSize: 18,
          }}
          placeholder="Description of exercise"
          multiline={true}
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginVertical: 20,
          }}>
          <Text style={{fontSize: 19, fontWeight: 'bold', marginVertical: 10}}>
            Default number of times
          </Text>
          <TextInput
            style={{
              width: 65,
              height: 40,
              borderColor: '#97B2FF',
              borderRadius: 10,
              borderWidth: 1,
              textAlign: 'center',
              fontSize: 18,
            }}
            keyboardType="numbers-and-punctuation"
            placeholder="Times"
          />
        </View>
        <Text style={{fontSize: 19, fontWeight: 'bold', marginVertical: 10}}>
          Expected to
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginVertical: 10,
          }}>
          <TouchableOpacity
            style={lose ? styles.selected : styles.unselected}
            onPress={() =>
              lose ? select(false, 'lose') : select(true, 'lose')
            }>
            <Text style={{fontSize: 18}}>Lose weight</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={getFit ? styles.selected : styles.unselected}
            onPress={() =>
              getFit ? select(false, 'getFit') : select(true, 'getFit')
            }>
            <Text style={{fontSize: 18}}>Git Fit</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginVertical: 10,
          }}>
          <TouchableOpacity
            style={health ? styles.selected : styles.unselected}
            onPress={() =>
              health ? select(false, 'health') : select(true, 'health')
            }>
            <Text style={{fontSize: 18}}>For Health</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={yoga ? styles.selected : styles.unselected}
            onPress={() =>
              yoga ? select(false, 'yoga') : select(true, 'yoga')
            }>
            <Text style={{fontSize: 18}}>Yoga</Text>
          </TouchableOpacity>
        </View>
        <Text style={{fontSize: 19, fontWeight: 'bold', marginVertical: 10}}>
          How to do it
        </Text>
        <ScrollView horizontal={true}>
          <Timeline
            data={data}
            style={{flex: 1}}
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
              style: {
                paddingTop: 5,
                position: 'relative',
                width: Dimensions.get('window').width,
              },
            }}
          />
        </ScrollView>
        <TouchableOpacity
          style={{
            borderRadius: 10,
            backgroundColor: '#D2A4F3',
            flexDirection: 'row',
            width: 140,
            height: 30,
            alignItems: 'center',
            justifyContent: 'space-around',
          }}
          onPress={() => navigation.navigate('AddStep')}>
          <AntDesign
            name="pluscircleo"
            style={{fontSize: 20, color: 'white'}}
          />
          <Text style={{fontSize: 14, fontWeight: 'bold', color: 'white'}}>
            Add more step
          </Text>
        </TouchableOpacity>
      </ScrollView>
      <SafeAreaView>
        {/* <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                    }}> */}
        <TouchableOpacity
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
          <Text>Finish</Text>
        </TouchableOpacity>
        {/* </View> */}
      </SafeAreaView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  body: {
    marginHorizontal: 20,
  },
  selected: {
    width: 130,
    height: 40,
    borderRadius: 10,
    backgroundColor: '#97B2FF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  unselected: {
    width: 130,
    height: 40,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#97B2FF',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default AddExercise;
