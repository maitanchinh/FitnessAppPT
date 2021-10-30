/* eslint-disable react-native/no-inline-styles */
import React, { Component, useState } from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import DropDownPicker from 'react-native-dropdown-picker';
import { useNavigation } from '@react-navigation/core';
import {
    SafeAreaView,
    FlatList,
    TextInput,
    TouchableOpacity,
    View,
    Image,
    Text,
    StyleSheet,
} from 'react-native';
import { open } from 'fs';
export default class Exercise extends Component {
    // dropDown() {
    //     let [open, setOpen] = useState(false);
    //     let [value, setValue] = useState(null);
    //     let [items, setItems] = useState([
    //         { label: 'Lose weight', value: 'lose_weight' },
    //         { label: 'Gain weight', value: 'gain_weight' },
    //     ]);
    // }
    render() {

        return (
            <SafeAreaView style={styles.container}>
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
                    <View style={{ width: 200, marginVertical: 20, alignSelf: 'flex-end' }}>
                        {/* <DropDownPicker
                            open={this.dropDown}
                            value={value}
                            items={items}
                            setOpen={setOpen}
                            setValue={setValue}
                            setItems={setItems}
                            disableBorderRadius={true}
                            style={{ borderRadius: 30, borderColor: '#97B2FF', height: 40 }}
                            textStyle={{
                                fontSize: 18,
                                color: '#707070',
                            }}
                        /> */}
                    </View>
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
                        Select Exercises:
                    </Text>
                    <FlatList
                        style={{ marginVertical: 20 }}
                        data={[
                            {
                                name: 'Warm up',
                                image: require('../../asserts/images/warmup.png'),
                                calo: 100,
                                time: 12,
                                isChoose: false,
                            },
                            {
                                name: 'Squats',
                                image: require('../../asserts/images/squats.png'),
                                calo: 100,
                                time: 12,
                                isChoose: true,
                            },
                            {
                                name: 'Warm up',
                                image: require('../../asserts/images/warmup.png'),
                                calo: 100,
                                time: 12,
                                isChoose: false,
                            },
                            {
                                name: 'Warm up',
                                image: require('../../asserts/images/warmup.png'),
                                calo: 100,
                                time: 12,
                                isChoose: false,
                            },
                            {
                                name: 'Warm up',
                                image: require('../../asserts/images/warmup.png'),
                                calo: 100,
                                time: 12,
                                isChoose: false,
                            },
                            {
                                name: 'Warm up',
                                image: require('../../asserts/images/warmup.png'),
                                calo: 100,
                                time: 12,
                                isChoose: false,
                            },
                            {
                                name: 'Warm up',
                                image: require('../../asserts/images/warmup.png'),
                                calo: 100,
                                time: 12,
                                isChoose: false,
                            },
                            {
                                name: 'Warm up',
                                image: require('../../asserts/images/warmup.png'),
                                calo: 100,
                                time: 12,
                                isChoose: false,
                            },
                            {
                                name: 'Warm up',
                                image: require('../../asserts/images/warmup.png'),
                                calo: 100,
                                time: 12,
                                isChoose: false,
                            },
                            {
                                name: 'Warm up',
                                image: require('../../asserts/images/warmup.png'),
                                calo: 100,
                                time: 12,
                                isChoose: false,
                            },
                            {
                                name: 'Warm up',
                                image: require('../../asserts/images/warmup.png'),
                                calo: 100,
                                time: 12,
                                isChoose: false,
                            },
                            {
                                name: 'Warm up',
                                image: require('../../asserts/images/warmup.png'),
                                calo: 100,
                                time: 12,
                                isChoose: false,
                            },
                        ]}
                        renderItem={({ item }) => (
                            <TouchableOpacity
                                style={{ flexDirection: 'row', marginVertical: 10 }}
                                onPress={() => {
                                    this.props.navigation.navigate('ExerciseDetail',
                                        {
                                            name: item.name,
                                            image: item.image,
                                            calo: item.calo,
                                            time: item.time
                                        })
                                }}>
                                <Image
                                    source={item.image}
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
                                        <Text style={{ fontSize: 22, fontWeight: 'bold', flex: 6 }}>
                                            {item.name}
                                        </Text>
                                        <Text style={{ flex: 4, fontSize: 20 }}>{item.time}x</Text>
                                    </View>
                                    <Text style={{ fontSize: 20, color: '#707070' }}>
                                        {item.calo} Calories Burn
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        )}
                    />
                </View>
                <View style={styles.touchableOpacityStyle}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Add Exercise')}>
                        <Text style={{ fontSize: 35, fontWeight: '300', color: 'white' }}>+</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        );
    }
}
// const Exercises = () => {
//     const [open, setOpen] = useState(false);
//     const [value, setValue] = useState(null);
//     const [items, setItems] = useState([
//         { label: 'Lose weight', value: 'lose_weight' },
//         { label: 'Gain weight', value: 'gain_weight' },
//     ]);
//     const navigation = useNavigation();
//     return (
//         <SafeAreaView style={styles.container}>
//             <View style={styles.body}>
//                 <View style={styles.searchBox}>
//                     <TouchableOpacity onPress={() => { }}>
//                         <AntDesign
//                             name="search1"
//                             size={20}
//                             style={{ marginHorizontal: 10, color: '#97B2FF' }}
//                         />
//                     </TouchableOpacity>
//                     <TextInput placeholder="Search..." />
//                 </View>
//                 <View style={{ width: 200, marginVertical: 20, alignSelf: 'flex-end' }}>
//                     <DropDownPicker
//                         open={open}
//                         value={value}
//                         items={items}
//                         setOpen={setOpen}
//                         setValue={setValue}
//                         setItems={setItems}
//                         disableBorderRadius={true}
//                         style={{ borderRadius: 30, borderColor: '#97B2FF', height: 40 }}
//                         textStyle={{
//                             fontSize: 18,
//                             color: '#707070',
//                         }}
//                     />
//                 </View>
//                 <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
//                     Select Exercises:
//                 </Text>
//                 <FlatList
//                     style={{ marginVertical: 20 }}
//                     data={[
//                         {
//                             name: 'Warm up',
//                             image: require('../../asserts/images/warmup.png'),
//                             calo: 100,
//                             time: 12,
//                             isChoose: false,
//                         },
//                         {
//                             name: 'Squats',
//                             image: require('../../asserts/images/squats.png'),
//                             calo: 100,
//                             time: 12,
//                             isChoose: true,
//                         },
//                         {
//                             name: 'Warm up',
//                             image: require('../../asserts/images/warmup.png'),
//                             calo: 100,
//                             time: 12,
//                             isChoose: false,
//                         },
//                         {
//                             name: 'Warm up',
//                             image: require('../../asserts/images/warmup.png'),
//                             calo: 100,
//                             time: 12,
//                             isChoose: false,
//                         },
//                         {
//                             name: 'Warm up',
//                             image: require('../../asserts/images/warmup.png'),
//                             calo: 100,
//                             time: 12,
//                             isChoose: false,
//                         },
//                         {
//                             name: 'Warm up',
//                             image: require('../../asserts/images/warmup.png'),
//                             calo: 100,
//                             time: 12,
//                             isChoose: false,
//                         },
//                         {
//                             name: 'Warm up',
//                             image: require('../../asserts/images/warmup.png'),
//                             calo: 100,
//                             time: 12,
//                             isChoose: false,
//                         },
//                         {
//                             name: 'Warm up',
//                             image: require('../../asserts/images/warmup.png'),
//                             calo: 100,
//                             time: 12,
//                             isChoose: false,
//                         },
//                         {
//                             name: 'Warm up',
//                             image: require('../../asserts/images/warmup.png'),
//                             calo: 100,
//                             time: 12,
//                             isChoose: false,
//                         },
//                         {
//                             name: 'Warm up',
//                             image: require('../../asserts/images/warmup.png'),
//                             calo: 100,
//                             time: 12,
//                             isChoose: false,
//                         },
//                         {
//                             name: 'Warm up',
//                             image: require('../../asserts/images/warmup.png'),
//                             calo: 100,
//                             time: 12,
//                             isChoose: false,
//                         },
//                         {
//                             name: 'Warm up',
//                             image: require('../../asserts/images/warmup.png'),
//                             calo: 100,
//                             time: 12,
//                             isChoose: false,
//                         },
//                     ]}
//                     renderItem={({ item }) => (
//                         <TouchableOpacity
//                             style={{ flexDirection: 'row', marginVertical: 10 }}
//                             onPress={() => navigation.navigate('ExerciseDetail')}>
//                             <Image
//                                 source={item.image}
//                                 style={{
//                                     height: 70,
//                                     width: 70,
//                                     borderRadius: 35,
//                                     resizeMode: 'contain',
//                                     flex: 2,
//                                 }}
//                             />
//                             <View
//                                 style={{
//                                     width: 130,
//                                     marginHorizontal: 20,
//                                     flexDirection: 'column',
//                                     justifyContent: 'space-around',
//                                     flex: 7,
//                                 }}>
//                                 <View
//                                     style={{
//                                         flexDirection: 'row',
//                                         justifyContent: 'space-between',
//                                         alignItems: 'center',
//                                     }}>
//                                     <Text style={{ fontSize: 22, fontWeight: 'bold', flex: 6 }}>
//                                         {item.name}
//                                     </Text>
//                                     <Text style={{ flex: 4, fontSize: 20 }}>{item.time}x</Text>
//                                 </View>
//                                 <Text style={{ fontSize: 20, color: '#707070' }}>
//                                     {item.calo} Calories Burn
//                                 </Text>
//                             </View>
//                         </TouchableOpacity>
//                     )}
//                 />
//             </View>
//             <View style={styles.touchableOpacityStyle}>
//                 <TouchableOpacity onPress={() => navigation.navigate('AddExercise')}>
//                     <Text style={{ fontSize: 35, fontWeight: '300', color: 'white' }}>+</Text>
//                 </TouchableOpacity>
//             </View>
//         </SafeAreaView>
//     );
// };
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    body: {
        margin: 30,
    },
    searchBox: {
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#97B2FF',
        padding: 5,
        flexDirection: 'row',
    },
    touchableOpacityStyle: {
        position: 'absolute',
        width: 50,
        height: 50,
        borderWidth: 0,
        alignItems: 'center',
        justifyContent: 'center',
        right: 20,
        bottom: 20,
        borderRadius: 25,
        backgroundColor: '#D2A4F3',
        zIndex: 100,
    }
});
// export default Exercises;
