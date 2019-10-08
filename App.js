import React, { Component } from 'react';
import { Text, Alert, View, StyleSheet, TextInput, Image} from 'react-native';
import { Form, Icon, Button, Item, Label, Input } from 'native-base';
import Login from './components/Login'

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

