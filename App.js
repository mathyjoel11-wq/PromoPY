import React from 'react';
import { Text } from 'react-native';  

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'expo-status-bar';

import HomeScreen from './src/screens/HomeScreen';
import SearchScreen from './src/screens/SearchScreen';
import CalendarScreen from './src/screens/CalendarScreen';
import ProfileScreen from './src/screens/ProfileScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="light" />

      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: '#176B45',
          tabBarInactiveTintColor: '#929B93',
          tabBarStyle: {
            backgroundColor: '#FFFFFF',
            height: 65,
            paddingBottom: 8,
            paddingTop: 7,
            borderTopColor: '#E5EDE7',
          },
          tabBarLabelStyle: {
            fontSize: 11,
            fontWeight: '600',
          },
        }}
      >
        <Tab.Screen
          name="Inicio"
          component={HomeScreen}
          options={{
            tabBarIcon: () => (
              <Text style={{ fontSize: 20 }}>🏠</Text>
            ),
          }}
        />

        <Tab.Screen
          name="Buscar"
          component={SearchScreen}
          options={{
            tabBarIcon: () => (
              <Text style={{ fontSize: 20 }}>🔎</Text>
            ),
          }}
        />

        <Tab.Screen
          name="Calendario"
          component={CalendarScreen}
          options={{
            tabBarIcon: () => (
              <Text style={{ fontSize: 20 }}>📅</Text>
            ),
          }}
        />

        <Tab.Screen
          name="Perfil"
          component={ProfileScreen}
          options={{
            tabBarIcon: () => (
              <Text style={{ fontSize: 20 }}>👤</Text>
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
