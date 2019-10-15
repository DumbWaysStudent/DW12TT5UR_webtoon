import React, { Component } from 'react';
import { Text, Alert, View, StyleSheet, TextInput, Image} from 'react-native';
import { Form, Icon, Button, Item, Label, Input } from 'native-base';
import SwitchNavPage from './src/navigation/SwitchNav'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';



export default class App extends Component  {

  constructor(props)
{
  super(props)
  
}


render () {
return(
  <SwitchNavPage/>
)}

}

