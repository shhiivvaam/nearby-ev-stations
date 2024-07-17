import { View, Text } from 'react-native'
import React from 'react'
// import { Ionicons } from '@expo/vector-icons'
import { FontAwesome } from '@expo/vector-icons';
import Colors from '../Constants/Color'

// navigators
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
// screens
import HomeScreen from '../Screens/home/HomeScreen';
import FavouriteScreen from '../Screens/Favourite/FavouriteScreen';
import ProfileScreen from '../Screens/Profile/ProfileScreen';

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Tab.Screen
        name='home'
        component={HomeScreen}
        options={{
          tabBarLabel: 'Search',
          tabBarActiveTintColor: Colors.PRIMARY,
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name='search' size={size} color={color} />
          )
        }}
      />
      <Tab.Screen
        name='favourite'
        component={FavouriteScreen}
        options={{
          tabBarLabel: 'Favourite',
          tabBarActiveTintColor: Colors.PRIMARY,
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name='heart' size={size} color={color} />
          )
        }}
      />
      <Tab.Screen
        name='profile'
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarActiveTintColor: Colors.PRIMARY,
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name='user' size={size} color={color} />
          )
        }}
      />
    </Tab.Navigator>
  )
}