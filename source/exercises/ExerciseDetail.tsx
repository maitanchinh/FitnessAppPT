import React, { Component } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Timeline from 'react-native-timeline-flatlist';
import { SafeAreaView, Text, View, TouchableOpacity, StyleSheet, Image, Dimensions, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/core';
const data = [
    {
        time: 1,
        title: 'Spread Your Arms',
        description: 'To make the gestures feel more relaxed stretch your arms as you start this movement. No bending of hands'
    },
    {
        time: 2,
        title: 'Rest At The Toe',
        description: 'To make the gestures feel more relaxed stretch your arms as you start this movement. No bending of hands'
    },
    {
        time: 3,
        title: 'Adjust Foot Movement',
        description: 'To make the gestures feel more relaxed stretch your arms as you start this movement. No bending of hands'
    },
    {
        time: 4,
        title: 'Clapping Both Hands',
        description: 'To make the gestures feel more relaxed stretch your arms as you start this movement. No bending of hands'
    }
];
class ExerciseDetail extends Component {
    render(){
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.body}>
                    <ScrollView horizontal={false}>
                        <Image source={this.props.route.params.image} style={styles.picture} />
                        <Text style={{ fontSize: 22, fontWeight: '500', marginVertical: 10 }}>{this.props.route.params.name}</Text>
                        <Text style={{ fontSize: 16, color: '#707070' }}>Easy | {this.props.route.params.calo} calories</Text>
                        <Text style={{ fontSize: 22, fontWeight: '500', marginBottom: 10, marginTop: 20 }}>Description</Text>
                        <Text style={{ fontSize: 16, color: '#707070' }}>An exercise in which a standing person jumps to a position with the legs and arm spread out and then jumps back to the original position</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                            <Text style={{ fontSize: 22, fontWeight: '500', marginBottom: 10, marginTop: 20 }}>How To Do It</Text>
                            <Text style={{ fontSize: 16, color: '#707070' }}>4 Steps</Text>
                        </View>
                        <ScrollView horizontal={true}>
                            <Timeline
                                data={data}
                                style={{ flex: 1 }}
                                circleSize={20}
                                circleColor='rgb(45,156,219)'
                                lineColor='rgb(45,156,219)'
                                timeContainerStyle={{ minWidth: 52, marginTop: -5 }}
                                timeStyle={{
                                    textAlign: 'center',
                                    backgroundColor: '#ff9797',
                                    color: 'white',
                                    padding: 5,
    
                                    borderRadius: 13,
                                }}
                                descriptionStyle={{ color: 'gray' }}
                                options={{
                                    style: { paddingTop: 5, position: 'relative', width: Dimensions.get('window').width },
                                }}
                            />
                        </ScrollView>
                    </ScrollView>
                </View>
                <View style={{ flexDirection: 'column', justifyContent: 'space-around', flex: 2, alignItems: 'center', backgroundColor: '#FFFFFF', position: 'relative',alignSelf: 'center', width: Dimensions.get('window').width, height: 130 }}>
                    <TouchableOpacity style={{ height: 50, width: 250, borderRadius: 40, backgroundColor: '#97B2FF', alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ fontSize: 22, fontWeight: '500' }}>See picture step</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ height: 50, width: 100, borderRadius: 40, backgroundColor: '#97B2FF', alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ fontSize: 22, fontWeight: '500' }}>Edit</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        );
    };
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    picture: {
        resizeMode: 'stretch',
        borderRadius: 50,
        width: 370,
        height: 220,
        marginVertical: 10
    },
    body: {
        marginHorizontal: 10,
        flex: 9,
    }
})
export default ExerciseDetail;