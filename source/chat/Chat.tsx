import React, { useState } from "react";
import { FlatList, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import AntDesign from 'react-native-vector-icons/AntDesign';
class Chat extends React.Component {
    // constructor (props) {
    //     super(props)
    //     this.state = 
    // }
    render() {
        return (
            <View style={styles.body}>
                <View style={styles.searchBox}>
                    <TouchableOpacity onPress={() => { }}>
                        <AntDesign
                            name="search1"
                            size={20}
                            style={{ marginHorizontal: 10, color: '#97B2FF' }}
                        />
                    </TouchableOpacity>
                    <TextInput placeholder="Search..." />
                </View>
                <FlatList
                    style={{ marginHorizontal: 20 }}
                    data={[
                        {
                            avt: require('../../asserts/images/avatar.png'),
                            name: 'Le Van A',
                            message: 'Help me!',
                            read: false
                        },
                        {
                            avt: require('../../asserts/images/avatar.png'),
                            name: 'Nguyen Van B',
                            message: 'How are you?',
                            read: true
                        }
                    ]}
                    renderItem={({ item }) => (
                        <TouchableOpacity style={styles.conversation}
                            onPress={() => this.props.navigation.navigate('ChatBox',
                            {
                                name: item.name,
                                message: item.message,
                                avatar: item.avt
                            })}>
                            <Image
                                source={item.avt}
                                style={styles.avatar} />
                            <View style={{ flexDirection: 'column', justifyContent: 'space-evenly', height: 65 }}>
                                <Text style={{ fontSize: 20, fontWeight: '500' }}>{item.name}</Text>
                                <Text style={{ fontSize: 16 }}>{item.message}</Text>
                            </View>
                        </TouchableOpacity>
                    )}
                />
                {/* <ScrollView style={{marginHorizontal: 20 }}>
                <TouchableOpacity style={styles.conversation}>
                    <Image
                        source={require('../../asserts/images/avatar.png')}
                        style={styles.avatar} />
                    <View style={{ flexDirection: 'column', justifyContent: 'space-evenly', height: 65 }}>
                        <Text style={{ fontSize: 20, fontWeight: '500' }}>Le Van A</Text>
                        <Text style={{ fontSize: 16 }}>GoodLuck =))</Text>
                    </View>
                    <Image source={require('../../asserts/images/new_message.png')}
                        style={{ height: 16, width: 16, borderRadius: 8, right: 5, position: 'absolute'}} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.conversation}>
                    <Image
                        source={require('../../asserts/images/avatar.png')}
                        style={styles.avatar} />
                    <View style={{ flexDirection: 'column', justifyContent: 'space-evenly', height: 65 }}>
                        <Text style={{ fontSize: 20, fontWeight: '500' }}>Le Van A</Text>
                        <Text style={{ fontSize: 16 }}>GoodLuck =))</Text>
                    </View>
                </TouchableOpacity>
            </ScrollView> */}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: '#FFFFFF',
    },
    searchBox: {
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#97B2FF',
        padding: 5,
        flexDirection: 'row',
        marginHorizontal: 10,
        marginVertical: 20
    },
    body: {
        flex: 1,
        backgroundColor: 'white'
    },
    conversation: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        height: 85
    },
    avatar: {
        height: 65,
        width: 65,
        marginRight: 30
    }
})

export default Chat;