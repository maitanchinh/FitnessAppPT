
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { SafeAreaView, TouchableOpacity, Button,Dimensions ,TextInput ,Text ,View , StyleSheet } from 'react-native';
import Timeline from 'react-native-timeline-flatlist';
import { useNavigation } from '@react-navigation/core';

const { height, width } = Dimensions.get('window');

const CreateJourney = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={style.container}>
      <View style={{paddingTop:20,paddingHorizontal:20}}>
        <Text style={style.title}>Tên hành trình</Text>
        <View>
          <TextInput style={style.longInput}/>
        </View>
        <View style={style.Row}>
          <Text style={style.title}>Price (VND)</Text>
          <Text style={style.title}>Discount (%)</Text>
        </View>
        <View style={style.Row}>
          <TextInput keyboardType='numeric' style={style.priceInput}/>
          <TextInput keyboardType='numeric' style={style.discountInput}/>
        </View>
        <View style={style.journey}>
            <Timeline
              data={DATA}
              circleSize={20}
              circleColor="rgb(45,156,219)"
              lineColor="rgb(45,156,219)"
              timeContainerStyle={{minWidth: 52, marginTop: -5}}
              timeStyle={{
                textAlign: 'center',
                backgroundColor: '#ff9797',
                color: 'white',
                padding: 5,
                borderRadius: 13,
              }}
              descriptionStyle={{color: 'gray'}}
              options={{
                style: {paddingTop: 5, position: 'absolute'},
              }}
            />
          </View>
          <View style={style.custombutton}>
            <Button title='Thêm' onPress={() => {navigation.navigate('Equipments')}} />
          </View>
          <View style={{marginTop: 100,flexDirection: 'row', justifyContent: 'space-around'}}>
            <TouchableOpacity onPress={() => {navigation.navigate('Journey')}}
            style={{backgroundColor: '#97B2FF', borderRadius: 35, height: 70, width: 120,
            flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
              <Text>Done</Text>
            </TouchableOpacity>
          </View>
      </View>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
    header: {
      fontSize: 22,
      fontWeight: '600',
    },
    longInput: {
      fontSize: 18,
      marginHorizontal: width*0.1,
      paddingHorizontal: width*0.1,
      paddingVertical: 8,
      borderColor:"rgb(45,156,219)",
      borderWidth:1,
      borderRadius:8
    },
    priceInput:{
      paddingHorizontal: 10,
      paddingVertical: 8,
      fontSize: 18,
      fontWeight: '600',
      width: width*0.4,
      borderColor:"rgb(45,156,219)",
      borderWidth:1,
      borderRadius:8
    },
    discountInput:{
      paddingHorizontal: 10,
      paddingVertical: 8,
      fontSize: 18,
      fontWeight: '600',
      width: width*0.2,
      borderColor:"rgb(45,156,219)",
      borderWidth:1,
      borderRadius:8
    },
    Row:{
      flex: 1,
		  flexDirection: 'row',
      justifyContent: 'space-between',
    },
    journey: {
      marginTop: 50,
    },
    title: {
      fontSize: 18,
      marginTop: 6,
      // marginLeft: 10,
      fontWeight: '600',
    },
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    custombutton:{
      color: 'white',
      backgroundColor: "rgb(45,156,219)",
      borderRadius: 10,
      marginLeft: 75,
      width: 150,
      paddingHorizontal: 10,
    }
})
const DATA = [
  {
    time: '01',
    title: 'Tuần 1: Đánh giá sức khỏe',
    description:
      'Kiểm tra sức khỏe của bạn và gửi phản hồi cho huấn luyện viên',
  },
  {
    time: '02',
    title: 'Tuần 2-5: Tập luyện tự chọn',
    description:
      'Huấn luyện viên của bạn tùy chỉnh bài tập mỗi tuần mới dựa trên quá trình tập luyện của bạn',
  },
];

export default CreateJourney;
// =======
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
// import React from 'react';
// import Ionicons from 'react-native-vector-icons/Ionicons';

// import Timeline from 'react-native-timeline-flatlist';
// import {
//   Button,
//   Dimensions,
//   SafeAreaView,
//   StyleSheet,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   View,
// } from 'react-native';

// const {height, width} = Dimensions.get('window');

// const CreateJourney = () => {
//   return (
//     <SafeAreaView style={style.container}>
//       <View
//         style={{
//           height: '6%',
//           width: '100%',
//           flexDirection: 'row',
//           alignItems: 'center',
//           justifyContent: 'space-between',
//         }}>
//         <TouchableOpacity
//           style={{
//             height: '100%',
//             aspectRatio: 1.8,
//             alignItems: 'center',
//             flexDirection: 'row',
//             paddingLeft: 10,
//           }}
//           onPress={() => {
//             // navigation.goBack()
//           }}>
//           {/* <Image source={require('../asserts/icons/back-button.png')} style={{ flex: 1 }} resizeMode="contain" /> */}
//           <Ionicons name="chevron-back" size={30} />
//           <Text style={{fontSize: 20, paddingLeft: 10, fontWeight: '500'}}>
//             Back
//           </Text>
//         </TouchableOpacity>
//       </View>
//       <View style={{paddingTop: 20, paddingHorizontal: 20}}>
//         <Text style={style.title}>Tên hành trình</Text>
//         <View>
//           <TextInput style={style.longInput} />
//         </View>
//         <View style={style.Row}>
//           <Text style={style.title}>Price (VND)</Text>
//           <Text style={style.title}>Discount (%)</Text>
//         </View>
//         <View style={style.Row}>
//           <TextInput keyboardType="numeric" style={style.priceInput} />
//           <TextInput keyboardType="numeric" style={style.discountInput} />
//         </View>
//         <View style={style.journey}>
//           <Timeline
//             data={DATA}
//             circleSize={20}
//             circleColor="rgb(45,156,219)"
//             lineColor="rgb(45,156,219)"
//             timeContainerStyle={{minWidth: 52, marginTop: -5}}
//             timeStyle={{
//               textAlign: 'center',
//               backgroundColor: '#ff9797',
//               color: 'white',
//               padding: 5,
//               borderRadius: 13,
//             }}
//             descriptionStyle={{color: 'gray'}}
//             options={{
//               style: {paddingTop: 5, position: 'absolute'},
//             }}
//           />
//         </View>
//         <View style={style.custombutton}>
//           <Button title="Thêm" onPress={() => {}} />
//         </View>
//         <View
//           style={{
//             marginTop: 100,
//             flexDirection: 'row',
//             justifyContent: 'space-around',
//           }}>
//           <TouchableOpacity
//             style={{
//               backgroundColor: '#97B2FF',
//               borderRadius: 35,
//               height: 70,
//               width: 120,
//               flexDirection: 'row',
//               alignItems: 'center',
//               justifyContent: 'center',
//             }}>
//             <Text>Done</Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//     </SafeAreaView>
//   );
// };

// const style = StyleSheet.create({
//   header: {
//     fontSize: 22,
//     fontWeight: '600',
//   },
//   longInput: {
//     fontSize: 18,
//     marginHorizontal: width * 0.1,
//     paddingHorizontal: width * 0.1,
//     paddingVertical: 8,
//     borderColor: 'rgb(45,156,219)',
//     borderWidth: 1,
//     borderRadius: 8,
//   },
//   priceInput: {
//     paddingHorizontal: 10,
//     paddingVertical: 8,
//     fontSize: 18,
//     fontWeight: '600',
//     width: width * 0.4,
//     borderColor: 'rgb(45,156,219)',
//     borderWidth: 1,
//     borderRadius: 8,
//   },
//   discountInput: {
//     paddingHorizontal: 10,
//     paddingVertical: 8,
//     fontSize: 18,
//     fontWeight: '600',
//     width: width * 0.2,
//     borderColor: 'rgb(45,156,219)',
//     borderWidth: 1,
//     borderRadius: 8,
//   },
//   Row: {
//     flex: 1,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
//   journey: {
//     marginTop: 50,
//   },
//   title: {
//     fontSize: 18,
//     marginTop: 6,
//     // marginLeft: 10,
//     fontWeight: '600',
//   },
//   container: {
//     flex: 1,
//     backgroundColor: '#FFFFFF',
//   },
//   custombutton: {
//     color: 'white',
//     backgroundColor: 'rgb(45,156,219)',
//     borderRadius: 10,
//     marginLeft: 75,
//     width: 150,
//     paddingHorizontal: 10,
//   },
// });
// const DATA = [
//   {
//     time: '01',
//     title: 'Tuần 1: Đánh giá sức khỏe',
//     description:
//       'Kiểm tra sức khỏe của bạn và gửi phản hồi cho huấn luyện viên',
//   },
//   {
//     time: '02',
//     title: 'Tuần 2-5: Tập luyện tự chọn',
//     description:
//       'Huấn luyện viên của bạn tùy chỉnh bài tập mỗi tuần mới dựa trên quá trình tập luyện của bạn',
//   },
// ];

// export default CreateJourney;
