import React from 'react';
import { TouchableOpacity,View, StyleSheet, SafeAreaView,ScrollView,Text } from 'react-native';

const ListCampaign = () =>{
  return (
    <SafeAreaView>
    <ScrollView style={{paddingTop: 50}}>
      <View>
        <View style={style.title}>
          <Text>Discount 20%</Text>
          <TouchableOpacity onPress={() => {}}
            style={style.custombutton}>
            <Text style={{textAlign:'center',color:'white', fontSize: 10}}>Delete</Text>
          </TouchableOpacity>
        </View>
        <View style={{paddingHorizontal:10, paddingVertical: 20}}>
          <View style={{flexDirection:'row',justifyContent: 'space-between'}}>
            <Text>Discount Type: 20%</Text>
            <View style={{flexDirection:'row',justifyContent: 'space-between'}}>
              <Text>Status : </Text>
              <Text style={{color:'green'}}>Active</Text>
            </View>
          </View>
          <Text>Start date: 29/10/2021</Text>
          <Text>End date: 30/11/2021</Text>
          <View style={{flexDirection:'row',justifyContent: 'flex-start'}}>
            <Text>Apply for : </Text>
            <View>
              <Text>Persional Training</Text>
              <Text>For Health Journey</Text>
            </View>
          </View>
        </View>
      </View>

      <View>
        <View style={style.title}>
          <Text>Discount 50000VND</Text>
          <TouchableOpacity onPress={() => {}}
            style={style.custombutton}>
            <Text style={{textAlign:'center',color:'white', fontSize: 10}}>Delete</Text>
          </TouchableOpacity>
        </View>
        <View style={{paddingHorizontal:10, paddingVertical: 20}}>
          <View style={{flexDirection:'row',justifyContent: 'space-between'}}>
            <Text>Discount Type: 50000VND</Text>
            <View style={{flexDirection:'row',justifyContent: 'space-between'}}>
              <Text>Status : </Text>
              <Text style={{color:'red'}}>Expired</Text>
            </View>
          </View>
          <Text>Start date: 20/10/2021</Text>
          <Text>End date: 25/11/2021</Text>
          <View style={{flexDirection:'row',justifyContent: 'flex-start'}}>
            <Text>Apply for : </Text>
            <View>
              <Text>Persional Training</Text>
              <Text>For Health Journey</Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  title: {
    height: 25,
    flexDirection:'row',
    justifyContent: 'space-between',
    backgroundColor:'#bcbcbc',
    paddingHorizontal:10
  },
  custombutton:{
    backgroundColor: "red",
    borderRadius: 10,
    width: 45,
    marginTop:5,
    height: 15,
  },
})
export default ListCampaign;