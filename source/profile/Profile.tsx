import { useNavigation } from "@react-navigation/core";
import React from "react";
import { Image, StyleSheet, View, Text, TouchableOpacity } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
const Profile = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                flex: 2,
                alignItems: 'center',
                backgroundColor: 'white',
                marginVertical: 1
            }}>
                <Image
                    source={require('../../asserts/images/avatar.png')}
                    style={{
                        height: 90,
                        width: 90,
                    }} />
                <View style={{ flexDirection: 'column', height: 70, justifyContent: 'space-evenly' }}>
                    <Text style={{ fontSize: 26, fontWeight: '500' }}>Le Hoang Luan</Text>
                    <Text style={{ fontSize: 18 }}>Professional PT</Text>
                </View>
            </View>
            <View
                style={{
                    marginVertical: 1,
                    flex: 7,
                    backgroundColor: 'white'
                }}>
                <TouchableOpacity
                    style={{
                        flexDirection: 'row',
                        // justifyContent: 'space-evenly',
                        marginTop: 20,
                        alignItems: 'center'
                    }}
                    onPress={() => navigation.navigate('Personal Profile', {
                        name: 'Le Hoang Luan'
                    })}>
                    <Image
                        source={require('../../asserts/images/profile_icon.png')}
                        style={{
                            height: 40,
                            width: 40,
                            marginHorizontal: 30
                        }} />
                    <Text style={{ fontSize: 22 }}>Personal Profile</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{
                        flexDirection: 'row',
                        // justifyContent: 'space-evenly',
                        marginTop: 20,
                        alignItems: 'center'
                    }}
                    onPress={() => navigation.navigate('Change Password')}>
                    <Image
                        source={require('../../asserts/images/security.png')}
                        style={{
                            height: 40,
                            width: 40,
                            marginHorizontal: 30
                        }} />
                    <Text style={{ fontSize: 22 }}>Change Password</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{
                        flexDirection: 'row',
                        // justifyContent: 'space-evenly',
                        marginTop: 20,
                        alignItems: 'center'
                    }}>
                    <Image
                        source={require('../../asserts/images/bank.png')}
                        style={{
                            height: 40,
                            width: 40,
                            marginHorizontal: 30
                        }} />
                    <Text style={{ fontSize: 22 }}>Bank Link</Text>
                </TouchableOpacity>
                <TouchableOpacity
                onPress={() => navigation.navigate('Campaign')}
                    style={{
                        flexDirection: 'row',
                        // justifyContent: 'space-evenly',
                        marginTop: 20,
                        alignItems: 'center'
                    }}>
                    <Image
                        source={require('../../asserts/images/discount.png')}
                        style={{
                            height: 40,
                            width: 40,
                            marginHorizontal: 30
                        }} />
                    <Text style={{ fontSize: 22 }}>List Discount Campaign</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity
            onPress={() => navigation.navigate('Login')}
                style={{
                    backgroundColor: 'white',
                    flex: 1,
                    flexDirection: 'row',
                    alignItems: 'center'
                }}>
                <Image
                    source={require('../../asserts/images/logout.png')}
                    style={{
                        height: 40,
                        width: 40,
                        marginHorizontal: 30
                    }} />
                <Text style={{ fontSize: 22 }}>Log out</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: '#FFFFFF',
    },
})

export default Profile;
