/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Button, View, StyleSheet, SafeAreaView, ScrollView} from 'react-native';
import JourneyComponent from './journey_component';
import {useNavigation} from '@react-navigation/core';

const Journey = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={style.container}>
      <ScrollView style={{paddingTop: 50}}>
        {JourneyComponent('Hành trình giảm cân', DATA1)}
        {JourneyComponent('Hành trình rèn luyện sức khỏe', DATA2)}
        <View style={style.custombutton}>
          <Button
            title="Tạo hành trình mới"
            onPress={() => {
              navigation.navigate('Create Journey');
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  custombutton: {
    marginTop: 50,
    color: 'white',
    backgroundColor: 'rgb(45,156,219)',
    borderRadius: 10,
    marginLeft: 75,
    width: 250,
    paddingHorizontal: 10,
  },
});
const DATA1 = [
  {
    time: '01',
    title: 'Tuần 1: Đánh Giá ',
    description:
      'Kiểm tra hiệu suất của bạn và cung cấp phản hồi cho huấn luyện viên',
  },
  {
    time: '02',
    title: 'Tuần 2-5:Lên Lịch Tập Luyện',
    description:
      'Huấn luyện viên của bạn tùy chỉnh mỗi tuần mới dựa trên quá trình đào tạo của bạn',
  },
  {
    time: '03',
    title: 'Tuần 6 : Đánh Giá Hiệu Quả ',
    description:
      'Đánh giá lại những gì mình tập luyện xem có hiệu quả hay không',
  },
  {
    time: '04',
    title: 'Kết Thúc Hành Trình',
    description: 'Hãy chọn hành trình tiếp để tập luyện',
  },
];
const DATA2 = [
  {
    time: '01',
    title: 'Tuần 1: Đánh Giá ',
    description:
      'Kiểm tra hiệu suất của bạn và cung cấp phản hồi cho huấn luyện viên',
  },
  {
    time: '02',
    title: 'Tuần 2-5:Lên Lịch Tập Luyện',
    description:
      'Huấn luyện viên của bạn tùy chỉnh mỗi tuần mới dựa trên quá trình đào tạo của bạn',
  },
  {
    time: '03',
    title: 'Tuần 6 : Đánh Giá Hiệu Quả ',
    description:
      'Đánh giá lại những gì mình tập luyện xem có hiệu quả hay không',
  },
  {
    time: '04',
    title: 'Kết Thúc Hành Trình',
    description: 'Hãy chọn hành trình tiếp để tập luyện',
  },
];
export default Journey;
