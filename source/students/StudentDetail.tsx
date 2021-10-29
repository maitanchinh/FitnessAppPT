/* eslint-disable react-native/no-inline-styles */
import {useRoute} from '@react-navigation/core';
import React, {useState} from 'react';
import {
  Image,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
const StudentDetail = () => {
  const route = useRoute();
  const [popup, setPopup] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <Image source={route.params.avt} style={styles.avt} />
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 20,
            color: '#97B2FF',
            alignSelf: 'center',
            marginVertical: 10,
          }}>
          {route.params.name}
        </Text>
        <Text style={{fontSize: 19, fontWeight: 'bold', marginVertical: 10}}>
          Phone Number
        </Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 10,
          }}>
          <View
            style={{
              width: 190,
              height: 32,
              borderRadius: 10,
              borderColor: '#97B2FF',
              borderWidth: 1,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={{fontSize: 19, fontWeight: '300'}}>0123456789</Text>
          </View>
          <Feather
            name="phone-call"
            style={{
              color: '#97B2FF',
              fontSize: 30,
              position: 'absolute',
              right: 20,
            }}
          />
        </View>
        <Text style={{fontSize: 19, fontWeight: 'bold', marginVertical: 10}}>
          Email
        </Text>
        <View
          style={{
            width: 280,
            height: 32,
            borderRadius: 10,
            borderColor: '#97B2FF',
            borderWidth: 1,
            alignItems: 'center',
            justifyContent: 'center',
            alignSelf: 'center',
          }}>
          <Text style={{fontSize: 19, fontWeight: '300'}}>
            lehoangluan@gmail.com
          </Text>
        </View>
        <Text
          style={{
            fontSize: 19,
            fontWeight: 'bold',
            marginBottom: 10,
            marginTop: 20,
          }}>
          Class information
        </Text>
        <Text style={{fontSize: 18, alignSelf: 'center', marginBottom: 5}}>
          {route.params.class} Class
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: 200,
            alignSelf: 'center',
            marginVertical: 5,
          }}>
          <Text style={{fontSize: 18, fontWeight: '600'}}>From:</Text>
          <Text style={{fontSize: 18}}>{route.params.from}</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: 200,
            alignSelf: 'center',
            marginVertical: 5,
          }}>
          <Text style={{fontSize: 18, fontWeight: '600'}}>To:</Text>
          <Text style={{fontSize: 18}}>{route.params.to}</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: 200,
            alignSelf: 'center',
            marginVertical: 5,
          }}>
          <Text style={{fontSize: 18, fontWeight: '600'}}>Hour/day:</Text>
          <Text style={{fontSize: 18}}>1</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: 200,
            alignSelf: 'center',
            marginVertical: 5,
          }}>
          <Text style={{fontSize: 18, fontWeight: '600'}}>Total:</Text>
          <Text style={{fontSize: 18}}>7</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: 200,
            alignSelf: 'center',
            marginVertical: 5,
          }}>
          <Text style={{fontSize: 18, fontWeight: '600'}}>Price:</Text>
          <Text style={{fontSize: 18}}>350.000 VND</Text>
        </View>
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: '#97B2FF',
          borderRadius: 35,
          height: 40,
          width: 150,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          alignSelf: 'center',
          flex: 1,
          marginBottom: 30,
        }}
        onPress={() => setPopup(true)}>
        <Text style={{fontSize: 18}}>View Feedback</Text>
      </TouchableOpacity>
      <Modal transparent={true} visible={popup}>
        <View
          style={{
            backgroundColor: '#000000aa',
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View
            style={{
              backgroundColor: 'white',
              borderRadius: 24,
              borderWidth: 1,
              borderColor: '#97B2FF',
              height: 200,
              width: 330,
              justifyContent: 'center',
            }}>
            <View
              style={{
                marginHorizontal: 20,
                marginTop: 20,
                flexDirection: 'row',
                height: 20,
              }}>
              <Text style={{fontSize: 18, fontWeight: 'bold', marginRight: 50}}>
                Rating
              </Text>
              <AntDesign
                name="star"
                style={{fontSize: 20, color: '#F7A116', marginRight: 5}}
              />
              <AntDesign
                name="star"
                style={{fontSize: 20, color: '#F7A116', marginRight: 5}}
              />
              <AntDesign
                name="star"
                style={{fontSize: 20, color: '#F7A116', marginRight: 5}}
              />
              <AntDesign
                name="star"
                style={{fontSize: 20, color: '#F7A116', marginRight: 5}}
              />
              <AntDesign
                name="staro"
                style={{fontSize: 20, color: '#F7A116', marginRight: 5}}
              />
            </View>
            <View
              style={{
                marginHorizontal: 20,
                marginTop: 20,
                flex: 1,
                flexDirection: 'row',
              }}>
              <Text style={{fontSize: 18, fontWeight: 'bold', marginRight: 25}}>
                Feedback
              </Text>
              <View style={{width: 190}}>
                <Text style={{fontSize: 16, fontWeight: '300'}}>
                  The Lose Weigh Journey is perfect, PT Hoang is very nice also
                </Text>
              </View>
            </View>
            <TouchableOpacity
              style={{
                height: 28,
                width: 82,
                borderRadius: 41,
                backgroundColor: '#97B2FF',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'absolute',
                right: 10,
                bottom: 10,
              }}
              onPress={() => setPopup(false)}>
              <Text style={{fontSize: 16}}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  body: {
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingTop: 20,
    flex: 12,
  },
  avt: {
    borderRadius: 45,
    marginRight: 10,
    height: 90,
    width: 90,
    alignSelf: 'center',
  },
});

export default StudentDetail;
