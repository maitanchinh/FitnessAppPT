import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { icons } from './constants';
import AddSection_111 from './source/journey/AddMoreSection_111';
import AddSection_114 from './source/journey/AddMoreSection_114';
import AddSection_112 from './source/journey/AddMoreSection_112';
import AddSection_115 from './source/journey/AddMoreSection_115';
import Journey from './source/journey/journey';
import AddExercise from './source/exercises/AddExercise';
import ExerciseDetail from './source/exercises/ExerciseDetail';
import AddStep from './source/exercises/AddStep';
import Chat from './source/chat/Chat';
import ChatBox from './source/chat/ChatBox';
import EditProfile from './source/profile/EditProfile';
import ChangePassword from './source/profile/ChangePassword';
import StudentDetail from './source/students/StudentDetail';
import PersonalProfile from './source/profile/PersonalProfile';
import { Image, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Home from './source/home/Home';
import Exercises from './source/exercises/Exercises';
import { useNavigation } from '@react-navigation/core';
import Students from './source/students/Students';
import Profile from './source/profile/Profile';
import CreateJourney from './source/journey/createJourney';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
function MyTabs() {
  const navigation = useNavigation();
  return (
    <Tab.Navigator
      initialRouteName={'Home'}
      screenOptions={({ route }: { route: any }) => ({
        tabBarIcon: ({ focused }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused ? icons.home : icons.home;
          } else if (route.name === 'Exercises') {
            iconName = focused ? icons.exercises : icons.exercises;
          } else if (route.name === 'Journey') {
            iconName = focused ? icons.profile : icons.profile;
          } else if (route.name === 'Profile') {
            iconName = focused ? icons.profile : icons.profile;
          } else if (route.name === 'Students') {
            iconName = focused ? icons.students : icons.students;
          }
          return (
            <Image
              source={iconName}
              style={{ height: 20, width: 20 }}
              resizeMode="contain"
            />
          );
        },
        tabBarActiveTintColor: '#f0a314',
        tabBarInactiveTintColor: '#000',
      })}>
      <Tab.Screen name="Home" component={Home} options={{
        headerRight: () => (
          <TouchableOpacity>
            <Ionicons name="chatbubble"
              style={{
                fontSize: 40,
                marginRight: 20,
                color: '#97B2FF'
              }}
              onPress={() => navigation.navigate('Chat')}
            />
          </TouchableOpacity>
        )
      }} />
      <Tab.Screen name="Exercises" component={Exercises} options={{
        headerRight: () => (
          <TouchableOpacity>
            <Ionicons name="chatbubble"
              style={{
                fontSize: 40,
                marginRight: 20,
                color: '#97B2FF'
              }}
              onPress={() => navigation.navigate('Chat')}
            />
          </TouchableOpacity>
        )
      }} />
      <Tab.Screen name="Journey" component={Journey} options={{
        headerRight: () => (
          <TouchableOpacity>
            <Ionicons name="chatbubble"
              style={{
                fontSize: 40,
                marginRight: 20,
                color: '#97B2FF'
              }}
              onPress={() => navigation.navigate('Chat')}
            />
          </TouchableOpacity>
        )
      }} />
      <Tab.Screen name="Students" component={Students} options={{
        headerRight: () => (
          <TouchableOpacity>
            <Ionicons name="chatbubble"
              style={{
                fontSize: 40,
                marginRight: 20,
                color: '#97B2FF'
              }}
              onPress={() => navigation.navigate('Chat')}
            />
          </TouchableOpacity>
        )
      }} />
      <Tab.Screen name="Profile" component={Profile} options={{
        headerRight: () => (
          <TouchableOpacity>
            <Ionicons name="chatbubble"
              style={{
                fontSize: 40,
                marginRight: 20,
                color: '#97B2FF'
              }}
              onPress={() => navigation.navigate('Chat')}
            />
          </TouchableOpacity>
        )
      }} />
    </Tab.Navigator>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: true,
        }}>
        <Stack.Screen
          name="MyTabs"
          component={MyTabs}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Equipments" component={AddSection_111} />
        <Stack.Screen name="Exercises" component={AddSection_112} />
        <Stack.Screen name="Infomations" component={AddSection_114} />
        <Stack.Screen name="Details" component={AddSection_115} />
        <Stack.Screen name="AddExercise" component={AddExercise} />
        <Stack.Screen name="ExerciseDetail" component={ExerciseDetail} />
        <Stack.Screen name="AddStep" component={AddStep} />
        <Stack.Screen name="Chat" component={Chat} />
        <Stack.Screen name="ChatBox" component={ChatBox} />
        <Stack.Screen name="Personal Profile" component={PersonalProfile} />
        <Stack.Screen name="Edit Profile" component={EditProfile} />
        <Stack.Screen name="Change Password" component={ChangePassword} />
        <Stack.Screen name="Student Detail" component={StudentDetail} />
        <Stack.Screen name="Create Journey" component={CreateJourney} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
