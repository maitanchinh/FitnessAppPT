/* eslint-disable react-native/no-inline-styles */
import {useNavigation, useRoute} from '@react-navigation/core';
import React, {useState} from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import RNPPickerSelect from 'react-native-picker-select';
class PersonalProfile extends React.Component {
    render() {
        return (
            <SafeAreaView style={{ backgroundColor: 'white' }}>
                <ScrollView style={styles.container}>
                    <View style={{ flexDirection: 'column', alignItems: 'center', marginVertical: 30 }}>
                        <Image
                            source={require('../../asserts/images/avatar.png')}
                            style={{ height: 100, width: 100, borderRadius: 50 }}
                        />
                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <View style={{ height: 40, justifyContent: 'flex-end', marginBottom: 20 }}>
                            <View
                                style={{
                                    backgroundColor: 'white',
                                    position: 'absolute',
                                    left: 30,
                                    bottom: 25,
                                    zIndex: 1,
                                    paddingHorizontal: 3
                                }}>
                                <Text style={{ color: '#5B5B5B' }}>Fullname</Text>
                            </View>
                            <View
                                style={{
                                    borderRadius: 12,
                                    flexDirection: 'row',
                                    width: 252,
                                    height: 32,
                                    borderWidth: 1,
                                    borderColor: '#97B2FF',
                                    alignItems: 'center'
                                }}>
                                <Ionicons name="person-outline"
                                    style={{
                                        left: 5,
                                        alignSelf: 'center',
                                        position: 'absolute',
                                        fontSize: 20,
                                        color: '#5B5B5B'
                                    }} />
                                <Text style={{ marginLeft: 40 }}>
                                    {this.props.route.params.name}
                                </Text>
                            </View>
                        </View>
                        <View style={{ height: 40, justifyContent: 'flex-end', marginBottom: 20 }}>
                            <View
                                style={{
                                    backgroundColor: 'white',
                                    position: 'absolute',
                                    left: 30,
                                    bottom: 25,
                                    zIndex: 1,
                                    paddingHorizontal: 3
                                }}>
                                <Text style={{ color: '#5B5B5B' }}>Phone</Text>
                            </View>
                            <View
                                style={{
                                    borderRadius: 12,
                                    flexDirection: 'row',
                                    width: 252,
                                    height: 32,
                                    borderWidth: 1,
                                    borderColor: '#97B2FF',
                                    alignItems: 'center'
                                }}>
                                <Ionicons name="phone-portrait-sharp"
                                    style={{
                                        left: 5,
                                        alignSelf: 'center',
                                        position: 'absolute',
                                        fontSize: 20,
                                        color: '#5B5B5B'
                                    }} />
                                <Text style={{ marginLeft: 40 }}>
                                    0123-456-789
                                </Text>
                            </View>
                        </View>
                        <View style={{ height: 40, justifyContent: 'flex-end', marginBottom: 20 }}>
                            <View
                                style={{
                                    backgroundColor: 'white',
                                    position: 'absolute',
                                    left: 30,
                                    bottom: 25,
                                    zIndex: 1,
                                    paddingHorizontal: 3
                                }}>
                                <Text style={{ color: '#5B5B5B' }}>Email</Text>
                            </View>
                            <View
                                style={{
                                    borderRadius: 12,
                                    flexDirection: 'row',
                                    width: 252,
                                    height: 32,
                                    borderWidth: 1,
                                    borderColor: '#97B2FF',
                                    alignItems: 'center'
                                }}>
                                <Ionicons name="mail-outline"
                                    style={{
                                        left: 5,
                                        alignSelf: 'center',
                                        position: 'absolute',
                                        fontSize: 20,
                                        color: '#5B5B5B'
                                    }} />
                                <Text style={{ marginLeft: 40 }}>
                                    lehoangluan@gmail.com
                                </Text>
                            </View>
                        </View>
                        <View style={{ height: 40, justifyContent: 'flex-end', marginBottom: 20 }}>
                            <View
                                style={{
                                    backgroundColor: 'white',
                                    position: 'absolute',
                                    left: 30,
                                    bottom: 25,
                                    zIndex: 1,
                                    paddingHorizontal: 3
                                }}>
                                <Text style={{ color: '#5B5B5B' }}>Birthday</Text>
                            </View>
                            <View
                                style={{
                                    borderRadius: 12,
                                    flexDirection: 'row',
                                    width: 252,
                                    height: 32,
                                    borderWidth: 1,
                                    borderColor: '#97B2FF',
                                    alignItems: 'center'
                                }}>
                                <FontAwesome name="birthday-cake"
                                    style={{
                                        left: 5,
                                        alignSelf: 'center',
                                        position: 'absolute',
                                        fontSize: 20,
                                        color: '#5B5B5B'
                                    }} />
                                <Text style={{ marginLeft: 40 }}>
                                    01/01/2000
                                </Text>
                            </View>
                        </View>
                        <View style={{ height: 40, justifyContent: 'flex-end', marginBottom: 20 }}>
                            <View
                                style={{
                                    backgroundColor: 'white',
                                    position: 'absolute',
                                    left: 30,
                                    bottom: 25,
                                    zIndex: 1,
                                    paddingHorizontal: 3
                                }}>
                                <Text style={{ color: '#5B5B5B' }}>Gender</Text>
                            </View>
                            <View
                                style={{
                                    borderRadius: 12,
                                    flexDirection: 'row',
                                    width: 252,
                                    height: 32,
                                    borderWidth: 1,
                                    borderColor: '#97B2FF',
                                    alignItems: 'center'
                                }}>
                                <FontAwesome name="transgender"
                                    style={{
                                        left: 5,
                                        alignSelf: 'center',
                                        position: 'absolute',
                                        fontSize: 20,
                                        color: '#5B5B5B'
                                    }} />
                                <Text style={{ marginLeft: 40 }}>
                                    Male
                                </Text>
                            </View>
                        </View>
                    </View>
                    <Text style={{ fontSize: 19, fontWeight: 'bold', marginLeft: 30, marginBottom: 10 }}>Address</Text>
                    <View style={{ alignItems: 'center' }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: 252, marginBottom: 20 }}>
                            <Text>Province/City</Text>
                            <RNPPickerSelect
                                placeholder={{
                                    label: 'Ho Chi Minh',
                                }}
                                disabled={true}
                                style={{}}
                                onValueChange={(value) => console.log(value)}
                                items={[
                                    { label: 'Ho Chi Minh', value: 'Hochiminh' },
                                    { label: 'Ha Noi', value: 'Hanoi' }
                                ]}
                            />
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: 252, marginBottom: 20 }}>
                            <Text>District</Text>
                            <RNPPickerSelect
                                placeholder={{
                                    label: 'Binh Thanh',
                                }}
                                disabled={true}
                                style={{}}
                                onValueChange={(value) => console.log(value)}
                                items={[
                                    { label: '1 District', value: '1_district' },
                                    { label: '3 District', value: '3_district' },
                                    { label: 'District Binh Thanh', value: 'binhthanh_district' },
                                ]}
                            />
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: 252, marginBottom: 20 }}>
                            <Text>Ward</Text>
                            <RNPPickerSelect
                                placeholder={{
                                    label: '2 Ward',
                                }}
                                disabled={true}
                                style={{}}
                                onValueChange={(value) => console.log(value)}
                                items={[
                                    { label: 'Ward 1', value: 'ward_1' },
                                    { label: 'Ward 2', value: 'ward_2' },
                                    { label: 'Ward 4', value: 'ward_3' },
                                    { label: 'Ward 5', value: 'ward_4' },
                                    { label: 'Ward 6', value: 'ward_5' },
                                    { label: 'Ward 7', value: 'ward_6' },
                                    { label: 'Ward 8', value: 'ward_7' },
                                    { label: 'Ward 9', value: 'ward_8' },
                                ]}
                            />
                        </View>
                        <View
                            style={{
                                width: 252,
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                marginBottom: 20
                            }}>
                            <Text>Address</Text>
                            <TextInput
                                style={{
                                    width: 190,
                                    borderColor: '#97B2FF',
                                    borderRadius: 10,
                                    borderWidth: 1,
                                    height: 32,
                                    padding: 5
                                }}
                                placeholder="280/29 Bui Huu Nghia" />
                        </View>
                    </View>
                    <Text style={{ fontSize: 19, fontWeight: 'bold', marginLeft: 30, marginBottom: 10 }}>Year Experience</Text>
                    <View style={{ justifyContent: 'center', width: 252, marginBottom: 20, alignItems: 'center', alignSelf: 'center' }}>
                        <RNPPickerSelect
                            placeholder={{
                                label: '1-2 years',
                            }}
                            disabled={true}
                            style={{}}
                            onValueChange={(value) => console.log(value)}
                            items={[
                                { label: '1-2 years', value: '1_2years' },
                                { label: '3-5 years', value: '3_5years' },
                            ]}
                        />
                    </View>
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
                        }}
                        onPress={() => this.props.navigation.navigate('Edit Profile', {
                            name: this.props.route.params.name,
                            phone: '0123-456-789',
                            email: 'nguyenhuyhoang@gmail.com',
                            birthday: '01/01/2000',
                            gender: 'Male',
                            city: 'Ho Chi Minh',
                            district: 'Binh Thanh',
                            ward: '2 Ward',
                            address: '280/29 Bui Huu Nghia'
                        })}>
                        <Text>Edit</Text>
                    </TouchableOpacity>
                </ScrollView>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
});

export default PersonalProfile;
