/* eslint-disable react-native/no-inline-styles */
// /* eslint-disable react-native/no-inline-styles */
// import React, {useState} from 'react';
// import AntDesign from 'react-native-vector-icons/AntDesign';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import { SafeAreaView, Dimensions, ScrollView, FlatList, TextInput, TouchableOpacity, View, Image, Text, StyleSheet } from 'react-native';
// class MeetingSelectExercise extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             selectedIds: []

//         };
//     }
//     handleSelectionMultiple = async (id) => {
//         var selectedIds = [...this.state.selectedIds]
//         if (selectedIds.includes(id))
//             selectedIds = selectedIds.filter(_id => _id !== id)
//         else
//             selectedIds.push(id)
//         await this.setState({ selectedIds })
//     }

//     render() {
//         const data = [
//             { id: 1, name: 'Warm up', image: require('../../asserts/images/warmup.png'), calo: 100, time: 12, isChoose: false },
//             { id: 2, name: 'Squats', image: require('../../asserts/images/squats.png'), calo: 100, time: 12, isChoose: true },
//             { id: 3, name: 'Warm up', image: require('../../asserts/images/warmup.png'), calo: 100, time: 12, isChoose: false },
//             { id: 4, name: 'Warm up', image: require('../../asserts/images/warmup.png'), calo: 100, time: 12, isChoose: false },
//             { id: 5, name: 'Warm up', image: require('../../asserts/images/warmup.png'), calo: 100, time: 12, isChoose: false },
//             { id: 6, name: 'Warm up', image: require('../../asserts/images/warmup.png'), calo: 100, time: 12, isChoose: false },
//             { id: 7, name: 'Warm up', image: require('../../asserts/images/warmup.png'), calo: 100, time: 12, isChoose: false },
//             { id: 8, name: 'Warm up', image: require('../../asserts/images/warmup.png'), calo: 100, time: 12, isChoose: false },
//             { id: 9, name: 'Warm up', image: require('../../asserts/images/warmup.png'), calo: 100, time: 12, isChoose: false },
//             { id: 10, name: 'Warm up', image: require('../../asserts/images/warmup.png'), calo: 100, time: 12, isChoose: false },
//             { id: 11, name: 'Warm up', image: require('../../asserts/images/warmup.png'), calo: 100, time: 12, isChoose: false },
//             { id: 12, name: 'Warm up', image: require('../../asserts/images/warmup.png'), calo: 100, time: 12, isChoose: false },
//         ];
//         return (
//             <SafeAreaView style={styles.container}>
//                 <View style={styles.body}>
//                     <View style={styles.searchBox}>
//                         <TouchableOpacity
//                             onPress={() => {

//                             }}>
//                             <AntDesign name="search1" size={20} style={{ marginHorizontal: 10, color: '#97B2FF' }} />
//                         </TouchableOpacity>
//                         <TextInput placeholder="Search..." />
//                     </View>
//                     <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
//                         Select Exercises:
//                     </Text>
//                     <FlatList
//                         style={{ marginTop: 20 }}
//                         data={data}
//                         extraData={
//                             this.state.selectedIds
//                         }
//                         renderItem={({ item }) =>
//                             <View style={{ flexDirection: 'row', marginVertical: 10 }}>
//                                 <Image source={item.image} style={{ height: 70, width: 70, borderRadius: 35, resizeMode: 'contain', flex: 2 }} />
//                                 <View style={{ width: 130, marginHorizontal: 20, flexDirection: 'column', justifyContent: 'space-around', flex: 7 }}>
//                                     <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
//                                         <Text style={{ fontSize: 22, fontWeight: 'bold', flex: 6 }}>{item.name}</Text>
//                                         <Text style={{ flex: 4, fontSize: 20 }}>{item.time}x</Text>
//                                     </View>
//                                     <Text style={{ fontSize: 20, color: '#707070' }}>{item.calo} Calories Burn</Text>
//                                 </View>
//                                 <TouchableOpacity
//                                     onPress={() => {
//                                         this.handleSelectionMultiple(item.id)
//                                     }}
//                                     style={{ flex: 1 }}>
//                                     {this.state.selectedIds.includes(item.id)
//                                         ? <AntDesign name="minus" style={{ color: '#FF0000', fontSize: 30 }} />
//                                         : <AntDesign name="plus" style={{ color: '#97B2FF', fontSize: 30 }} />}

//                                 </TouchableOpacity>
//                             </View>
//                         } />
//                 </View>
//                 <View style={{ flex: 1, justifyContent: 'flex-end' }}>
//                     <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
//                         <TouchableOpacity
//                             onPress={() => this.props.navigation.navigate('Add More Section 114',
//                                 {
//                                     exercises: this.state.selectedIds
//                                 }
//                             )}
//                             style={{
//                                 backgroundColor: '#97B2FF', borderRadius: 35, height: 70, width: 120,
//                                 flexDirection: 'row', alignItems: 'center', justifyContent: 'center'
//                             }}>
//                             <Text>Next</Text>
//                         </TouchableOpacity>
//                     </View>
//                 </View>
//                 </View>
//                 <View style={{ flex: 1, justifyContent: 'flex-end' }}>
//                     <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
//                         <TouchableOpacity
//                             onPress={() => this.props.navigation.navigate('Add More Section 114',
//                                 {
//                                     exercises: this.state.selectedIds
//                                 }
//                             )}
//                             style={{
//                                 backgroundColor: '#97B2FF', borderRadius: 35, height: 70, width: 120,
//                                 flexDirection: 'row', alignItems: 'center', justifyContent: 'center'
//                             }}>
//                             <Text>Next</Text>
//                         </TouchableOpacity>
//                     </View>
//                 </View>
//             </SafeAreaView>
//         );
//     }
// }
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#FFFFFF',
//     },
//     body: {
//         marginHorizontal: 30,
//         flex: 9,
//     },
//     searchBox: {
//         borderWidth: 1,
//         borderRadius: 10,
//         borderColor: '#97B2FF',
//         padding: 5,
//         marginVertical: 10,
//         flexDirection: 'row'
//     },
// })
import DropDownPicker from 'react-native-dropdown-picker';
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
import React, {useState} from 'react';
const SelectExercise = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Lose weight', value: 'lose_weight'},
    {label: 'Gain weight', value: 'gain_weight'},
  ]);
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          height: '6%',
          width: '100%',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <TouchableOpacity
          style={{
            height: '100%',
            alignItems: 'center',
            flexDirection: 'row',
            paddingLeft: 10,
          }}
          onPress={() => {
            // navigation.goBack()
          }}>
          {/* <Image source={require('../asserts/icons/back-button.png')} style={{ flex: 1 }} resizeMode="contain" /> */}
          <Ionicons name="chevron-back" size={30} />
          <Text style={{fontSize: 20, paddingLeft: 10, fontWeight: '500'}}>
            Back
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.body}>
        <View style={styles.searchBox}>
          <TouchableOpacity onPress={() => {}}>
            <AntDesign
              name="search1"
              size={20}
              style={{marginHorizontal: 10, color: '#97B2FF'}}
            />
          </TouchableOpacity>
          <TextInput placeholder="Search..." />
        </View>
        <View style={{width: 200, marginVertical: 20, alignSelf: 'flex-end'}}>
          <DropDownPicker
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
            disableBorderRadius={true}
            style={{borderRadius: 30, borderColor: '#97B2FF', height: 40}}
            textStyle={{
              fontSize: 18,
              color: '#707070',
            }}
          />
        </View>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>
          Select Exercises:
        </Text>
        <FlatList
          style={{marginVertical: 20}}
          data={[
            {
              name: 'Warm up',
              image: require('../asserts/images/warmup.png'),
              calo: 100,
              time: 12,
              isChoose: false,
            },
            {
              name: 'Squats',
              image: require('../asserts/images/squats.png'),
              calo: 100,
              time: 12,
              isChoose: true,
            },
            {
              name: 'Warm up',
              image: require('../asserts/images/warmup.png'),
              calo: 100,
              time: 12,
              isChoose: false,
            },
            {
              name: 'Warm up',
              image: require('../asserts/images/warmup.png'),
              calo: 100,
              time: 12,
              isChoose: false,
            },
            {
              name: 'Warm up',
              image: require('../asserts/images/warmup.png'),
              calo: 100,
              time: 12,
              isChoose: false,
            },
            {
              name: 'Warm up',
              image: require('../asserts/images/warmup.png'),
              calo: 100,
              time: 12,
              isChoose: false,
            },
            {
              name: 'Warm up',
              image: require('../asserts/images/warmup.png'),
              calo: 100,
              time: 12,
              isChoose: false,
            },
            {
              name: 'Warm up',
              image: require('../asserts/images/warmup.png'),
              calo: 100,
              time: 12,
              isChoose: false,
            },
            {
              name: 'Warm up',
              image: require('../asserts/images/warmup.png'),
              calo: 100,
              time: 12,
              isChoose: false,
            },
            {
              name: 'Warm up',
              image: require('../asserts/images/warmup.png'),
              calo: 100,
              time: 12,
              isChoose: false,
            },
            {
              name: 'Warm up',
              image: require('../asserts/images/warmup.png'),
              calo: 100,
              time: 12,
              isChoose: false,
            },
            {
              name: 'Warm up',
              image: require('../asserts/images/warmup.png'),
              calo: 100,
              time: 12,
              isChoose: false,
            },
          ]}
          renderItem={({item}) => (
            <View style={{flexDirection: 'row', marginVertical: 10}}>
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
                  <Text style={{fontSize: 22, fontWeight: 'bold', flex: 6}}>
                    {item.name}
                  </Text>
                  <Text style={{flex: 4, fontSize: 20}}>{item.time}x</Text>
                </View>
                <Text style={{fontSize: 20, color: '#707070'}}>
                  {item.calo} Calories Burn
                </Text>
              </View>
              <TouchableOpacity style={{flex: 1}}>
                {item.isChoose ? (
                  <AntDesign
                    name="minus"
                    style={{color: '#FF0000', fontSize: 30}}
                  />
                ) : (
                  <AntDesign
                    name="plus"
                    style={{color: '#97B2FF', fontSize: 30}}
                  />
                )}
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
      <View style={{flex: 1, justifyContent: 'flex-end'}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginBottom: 30,
          }}>
          <TouchableOpacity
            style={{
              backgroundColor: '#97B2FF',
              borderRadius: 35,
              height: 70,
              width: 120,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text>Next</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  body: {
    margin: 30,
    flex: 9,
  },
  searchBox: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#97B2FF',
    padding: 5,
    marginVertical: 10,
    flexDirection: 'row',
  },
});
export default SelectExercise;
