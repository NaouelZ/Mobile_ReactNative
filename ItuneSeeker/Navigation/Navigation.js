import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Search from '../components/Search';
import AddSong from '../components/AddSong';
import Favoris from '../components/Favoris';
import { createStackNavigator } from '@react-navigation/stack';

const SettingsStack = createStackNavigator();

function ListStackScreen() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="Rechercher" component={Search} />
      <SettingsStack.Screen name="Ajouter" component={AddSong} />
    </SettingsStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Recherche" component={ListStackScreen} />
        <Tab.Screen name="Favoris" component={Favoris} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}