import React, { useState } from "react";
import { Text, StyleSheet, View, TextInput, TouchableOpacity, Modal } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import { useNavigation } from "@react-navigation/core";
import AntDesign from 'react-native-vector-icons/AntDesign';
const CreateCampaign = () => {
    const [type, setTyle] = useState(1);
    const [option1, setOption1] = useState(false);
    const [option2, setOption2] = useState(false);
    const [option3, setOption3] = useState(false);
    const [popup, setPopup] = useState(false);
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={styles.body}>
                <Text style={styles.title}>Name</Text>
                <TextInput style={styles.input} />
                <Text style={styles.title}>Discount type</Text>
                <View style={{ width: 260, alignSelf: 'center' }}>
                    <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 20 }}
                        onPress={() => setTyle(1)}>
                        <MaterialIcons name={type == 1 ? "radio-button-on" : "radio-button-off"} style={{ fontSize: 30 }} />
                        <Text style={styles.content}>VND Amount (ex: 20000)</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 20 }}
                        onPress={() => setTyle(2)}>
                        <MaterialIcons name={type === 1 ? "radio-button-off" : "radio-button-on"} style={{ fontSize: 30 }} />
                        <Text style={styles.content}>Percentage (ex 20)</Text>
                    </TouchableOpacity>
                </View>
                <TextInput style={styles.input} keyboardType='numeric' />
                <Text style={styles.title}>Description</Text>
                <TextInput
                    style={{
                        height: 123,
                        width: 290,
                        borderColor: '#97B2FF',
                        borderWidth: 1,
                        alignSelf: 'flex-end'
                    }}
                    multiline={true}
                    numberOfLines={5} />
                <Text style={styles.title}>Apply</Text>
                <View style={{ width: 290, alignItems: 'flex-start', alignSelf: 'center' }}>
                    <TouchableOpacity
                        style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginBottom: 20 }}
                        onPress={() => option1 ? setOption1(false) : setOption1(true)}>
                        <Fontisto name={option1 ? "checkbox-active" : "checkbox-passive"} style={{ fontSize: 30 }} />
                        <Text style={styles.content}>Personal trainging</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginBottom: 20 }}
                        onPress={() => option2 ? setOption2(false) : setOption2(true)}>
                        <Fontisto name={option2 ? "checkbox-active" : "checkbox-passive"} style={{ fontSize: 30 }} />
                        <Text style={styles.content}>Lose Weight Journey</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginBottom: 20 }}
                        onPress={() => option3 ? setOption3(false) : setOption3(true)}>
                        <Fontisto name={option3 ? "checkbox-active" : "checkbox-passive"} style={{ fontSize: 30 }} />
                        <Text style={styles.content}>For Health Journey</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{ flex: 1, alignItems: 'center', paddingBottom: 30 }}>
                <TouchableOpacity
                    onPress={() => setPopup(true)}
                    style={{
                        backgroundColor: '#97B2FF',
                        borderRadius: 35,
                        height: 70,
                        width: 300,
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                    <Text>Save</Text>
                </TouchableOpacity>
            </View>
            <Modal
                transparent={true}
                visible={popup}>
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
                        <Text style={styles.title}>Create Successful</Text>
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
                            onPress={() => {setPopup(false)}}>
                            <Text style={{fontSize: 16}}>Ok</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>

    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 19,
        fontWeight: 'bold',
        marginBottom: 10,
        marginTop: 20,
    },
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    body: {
        paddingHorizontal: 20,
        flex: 9
    },
    input: {
        borderColor: '#97B2FF',
        borderWidth: 1,
        borderRadius: 10,
        width: 260,
        height: 32,
        alignSelf: 'center'
    },
    content: {
        fontSize: 19,
        marginLeft: 10
    }
})
export default CreateCampaign;