/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import Timeline from 'react-native-timeline-flatlist';

const JourneyComponent = (
  title: string,
  data: {
    time: string;
    title: string;
    description: string;
  }[],
) => {
  const [IsOpen, setIsOpen] = useState(false);
  const [Detail, setDetail] = useState(<View></View>);
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          if (IsOpen) {
            setIsOpen(false);
            setDetail(<View></View>);
          } else {
            setIsOpen(true);
            setDetail(
              <View style={style.journey}>
                <Timeline
                  data={data}
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
                    style: {paddingTop: 5},
                  }}
                />
              </View>,
            );
          }
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            backgroundColor: '#bcbcbc',
            padding: 10,
          }}>
          <Text style={style.title}>{title}</Text>
          <Text style={style.title}>V</Text>
        </View>
      </TouchableOpacity>
      {Detail}
    </View>
  );
};

const style = StyleSheet.create({
  journey: {
    paddingHorizontal: 15,
    paddingTop: 15,
    height: 300,
    position: 'relative',
  },
  title: {
    fontSize: 18,
    marginTop: 6,
    // marginLeft: 10,
    fontWeight: '600',
  },
});
export default JourneyComponent;
