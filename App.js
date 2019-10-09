import React, { Component } from 'react';
import { Text, Alert, View, StyleSheet, TextInput, Image} from 'react-native';
import { Form, Icon, Button, Item, Label, Input } from 'native-base';
import Login from './components/Login'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';


// const AppStack = createStackNavigator({
//   Login : {
//     screen : Login
//   }
// })

// export default createAppContainer(AppStack)


export default class App extends Component  {


  constructor(props)
{
  super(props)
  
}


render () {
return(
  <Login/>
)}

}

