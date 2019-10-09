import React, { Component } from 'react';
import { Text, Alert, View, StyleSheet, TextInput, Image} from 'react-native';
import { Form, Icon, Button, Item, Label, Input } from 'native-base';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import HomeScreen from './Home'
import FavoriteScreen from './Favorite'
import ProfileScreen from './Profil'

  
  const TabNavigator = createBottomTabNavigator({
    Home: {
        screen : HomeScreen,
        navigationOptions : {
            tabBarIcon : () => (
                <Icon name="apps" />
            )
        }
    },
    Favorite: {
        screen : FavoriteScreen,
        navigationOptions : {
            tabBarIcon : () =>
                <Icon name="star"/>
        }
    },
    Profile: {
        screen : ProfileScreen,
        navigationOptions : {
            tabBarIcon : () =>
                <Icon name="contact"/>
        }
    },
  });
  
  export default createAppContainer(TabNavigator);