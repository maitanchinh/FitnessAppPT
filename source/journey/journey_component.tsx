import React,{useState} from 'react';
import {Text ,View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import Timeline from 'react-native-timeline-flatlist';

const JourneyComponent = (titledata:string,data:{
    time: string;
    title: string;
    description: string;
}[]) => {
  const [IsOpen, setIsOpen] = useState(false);
  const [Detail, setDetail] = useState(<View></View>);
  const [Arrow, setArrow] = useState(<Image style={style.ImageStyle} source={require('../../asserts/icons/back-button.png')}/>);
  return (
    <View>
      <TouchableOpacity
      onPress={()=>{
        if(IsOpen){
          setIsOpen(false);
          setDetail(<View></View>);
          setArrow(<Image style={style.ImageStyle} source={require('../../asserts/icons/back-button.png')}/>);
        } else  {
          setIsOpen(true);
          setArrow(<Image style={style.ImageStyle} source={require('../../asserts/icons/down-arrow.png')}/>);
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
          </View>);
        }
      }}>
          <View style={{backgroundColor:'#bcbcbc',padding: 10,height:45}}>
            <Text style={style.title}>{titledata}</Text>
            {/* <View>{Arrow}</View> */}
          </View>
      </TouchableOpacity>
      {Detail}
    </View>
  );
}

const style = StyleSheet.create({
  journey:{
    paddingHorizontal: 15,
    paddingTop: 15,
    height: 350,
    position: 'relative'
  },
  title: {
    fontSize: 18,
    // marginLeft: 10,
    fontWeight: '600',
  },
  ImageStyle:{
    height:18,
    width:18,
  }
})
export default JourneyComponent;