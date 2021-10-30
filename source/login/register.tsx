import { useNavigation, useRoute } from "@react-navigation/core";
import React, { useState } from "react";
import { Dimensions, FlatList, Image, Modal, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import RNPickerSelect from 'react-native-picker-select';
// import SelectDropdown from 'react-native-select-dropdown';
class Register extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
          popup: false
        }
     }
    render() {
        return (
            <SafeAreaView style={{ backgroundColor: 'white' }}>
                <ScrollView style={styles.container}>
                    <View style={{ flexDirection: 'column', alignItems: 'center', marginVertical: 30 }}>
                        <Image
                            source={require('../../asserts/images/avatar.png')}
                            style={{ height: 100, width: 100, borderRadius: 50 }}
                        />
                        <TouchableOpacity
                            style={{ alignSelf: 'flex-end', position: 'absolute', top: 70, right: 140 }}
                            onPress={() => { }}>
                            <View style={{ width: 40, height: 40, borderRadius: 20, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center' }}>
                                <Ionicons name="camera" style={{ color: '#97B2FF', fontSize: 30 }} />
                            </View>
                        </TouchableOpacity>
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
                                <TextInput
                                    style={{ marginLeft: 40 }}
                                />
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
                                <TextInput
                                    style={{ marginLeft: 40 }}
                                />
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
                                <TextInput
                                    style={{ marginLeft: 40 }}
                                />
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
                                <TextInput
                                    style={{ marginLeft: 40 }}
                                />
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
                                <TextInput
                                    style={{ marginLeft: 40 }}
                                />
                            </View>
                        </View>
                    </View>
                    <Text style={{ fontSize: 19, fontWeight: 'bold', marginLeft: 30, marginBottom: 10 }}>Address</Text>
                    <View style={{ alignItems: 'center' }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: 252, marginBottom: 20, flex: 1 }}>
                            <Text>Province/City</Text>
                            <RNPickerSelect
                                placeholder={{
                                    label: 'Ho Chi Minh',
                                    value: null
                                }}
                                pickerProps={{ style: { height: 114, overflow: 'hidden' } }}
                                onClose={() => { }}
                                onValueChange={(value) => console.log(value)}
                                items={[
                                    { label: 'Ho Chi Minh', value: 'Hochiminh' },
                                    { label: 'Ha Noi', value: 'Hanoi' }
                                ]}
                            />
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: 252, marginBottom: 20 }}>
                            <Text>District</Text>
                            <RNPickerSelect
                                placeholder={{
                                    label: '1 District',
                                    value: null
                                }}
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
                            <RNPickerSelect
                                placeholder={{
                                    label: 'Ward 1',
                                    value: null
                                }}
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
                                }} />
                        </View>
                    </View>
                    <Text style={{ fontSize: 19, fontWeight: 'bold', marginLeft: 30, marginBottom: 10 }}>Year Experience</Text>
                    <View style={{ justifyContent: 'center', width: 252, marginBottom: 20, alignItems: 'center', alignSelf: 'center' }}>
                        <RNPickerSelect
                            placeholder={{
                                label: '1-2 years',
                                value: null
                            }}
                            onValueChange={(value) => console.log(value)}
                            items={[
                                { label: '1-2 years', value: '1_2years' },
                                { label: '3-5 years', value: '3_5years' },
                            ]}
                        />
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                        <TouchableOpacity
                            onPress={() => { this.props.navigation.goBack() }}
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
                            onPress={() => {this.setState({popup: true})}}
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
                </ScrollView>
                <Modal
                    transparent={true}
                    visible={this.state.popup}>
                    <View style={{ backgroundColor: '#000000aa', flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                        <View
                            style={{
                                backgroundColor: 'white',
                                borderRadius: 24,
                                borderWidth: 1,
                                borderColor: '#97B2FF',
                                height: 130,
                                width: 330,
                                justifyContent: 'space-around',
                                alignItems: 'center'
                            }}>
                            <Text style={styles.title}>Thanks you for apply. Waiting for admin approve.</Text>
                            <TouchableOpacity
                                style={{
                                    height: 28,
                                    width: 82,
                                    borderRadius: 41,
                                    backgroundColor: '#97B2FF',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    // position: 'absolute',
                                    // right: 10,
                                    // bottom: 10
                                }}
                                onPress={() => { this.setState({popup: false}) 
                                this.props.navigation.goBack()}}>
                                <Text style={{ fontSize: 16 }}>Ok</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white'
    },
    title: {
        fontSize: 19,
        fontWeight: 'bold',
        marginBottom: 10,
        marginTop: 20,
    },
})

export default Register;