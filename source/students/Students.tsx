import { useNavigation } from "@react-navigation/core";
import React, { useState } from "react";
import { Dimensions, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Students = () => {
    const navigation = useNavigation();
    const [now, setNow] = useState(true);
    const [past, setPast] = useState(false);
    const nowList = [
        {
            avt: require('../../asserts/images/avatar.png'),
            name: 'Nguyen Tan A',
            class: 'Lose weight',
            from: '12/10/2021',
            to: '12/11/2021'
        },
        {
            avt: require('../../asserts/images/avatar.png'),
            name: 'Le Van B',
            class: 'Get Fit',
            from: '12/10/2021',
            to: '12/11/2021'
        },
    ]
    const pastList = [
        {
            avt: require('../../asserts/images/avatar.png'),
            name: 'Nguyen Thi C',
            class: 'For health',
            from: '12/10/2020',
            to: '12/11/2020'
        },
        {
            avt: require('../../asserts/images/avatar.png'),
            name: 'Ta Van N',
            class: 'Get Fit',
            from: '12/10/2020',
            to: '12/11/2020'
        },
    ]
    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 20 }}>
                <TouchableOpacity style={now ? styes.selected : styes.unselected}
                    onPress={() => { setNow(true), setPast(false) }}>
                    <Text style={now ? { fontSize: 15 } : { fontSize: 15, fontWeight: '200' }}>Now</Text>
                </TouchableOpacity>
                <TouchableOpacity style={past ? styes.selected : styes.unselected}
                    onPress={() => { setNow(false), setPast(true) }}>
                    <Text style={past ? { fontSize: 15 } : { fontSize: 15, fontWeight: '200' }}>Past</Text>
                </TouchableOpacity>
            </View>
            <View style={{paddingTop: 30, paddingHorizontal: 20}}>
                <FlatList
                    data={now ? nowList : pastList}
                    renderItem={({ item }) => (
                        <TouchableOpacity style={styes.student}
                        onPress={() => navigation.navigate('Student Detail', {
                            name: item.name,
                            avt: item.avt,
                            from: item.from,
                            to: item.to,
                            class: item.class
                        })}>
                            <Image source={item.avt}
                            style={styes.avt}/>
                            <View style={{flexDirection: 'column', height: 80, justifyContent: 'space-evenly'}}>
                                <Text style={{fontSize: 20, fontWeight: 'bold'}}>{item.name}</Text>
                                <Text>{item.from} - {item.to}</Text>
                                <Text>{item.class} Class</Text>
                            </View>
                        </TouchableOpacity>
                    )}
                />
            </View>
        </View>
    );
}

const styes = StyleSheet.create({
    selected: {
        borderRadius: 6,
        height: 26,
        width: 100,
        backgroundColor: '#97B2FF',
        alignItems: 'center',
        justifyContent: 'center'
    },
    unselected: {
        borderWidth: 1,
        borderColor: '#97B2FF',
        borderRadius: 6,
        height: 26,
        width: 100,
        alignItems: 'center',
        justifyContent: 'center'
    },
    student: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10
    },
    avt: {
        borderRadius: 45,
        marginRight: 10,
        height: 90,
        width: 90
    }
})

export default Students;