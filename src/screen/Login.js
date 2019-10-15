import React, { Component } from 'react';
import { Text, Alert, View, StyleSheet, TextInput, Image} from 'react-native';
import { Form, Icon, Button, Item, Label, Input } from 'native-base';


export default class Login extends Component  {

  constructor(props)
{
  super(props);
  this.state ={
    inputEmail : '',
    inputPassword : '',
    hideMode : true,
    correctEmail : false,

  }
}

onTextEmail (text){
this.setState({inputEmail : text})

}

onTextPassword (textPassword){
  this.setState({inputPassword : textPassword})
}

emailVerification (textEmail){
  if (textEmail == 'email') {
    let correct = this.state.inputEmail.match(/(^[a-zA-Z]+|^[0-9]+|^[a-zA-Z0-9\.]+)@([a-zA-Z0-9]+)\.([a-zA-Z]+)/g)
    if (correct != null) {
        this.state.correctEmail = true
    } else {
        this.state.correctEmail = false
    }
    console.log("Email is : ", this.state.correctEmail);
}
}

onClickHide=()=>{
  this.setState({
  hideMode : !this.state.hideMode
  })   
 console.log("Hide is : ", this.state.hideMode);
}

render () {
return(
  <View style={styles.container}>
    <View>
      <Image source={require('../assets/logo/webtoon.png')} style={styles.logoImage}/>
      <Text style={styles.textLogin}>LOG IN</Text>
    </View>
    <View>
      <Text style={styles.textLoginSmall}>Login with your account WEBTOON</Text>
    </View>
    <View style={styles.formLogin}>
      <Form style={styles.formLogin}>
        <Item floatingLabel>
          <Label>
            <Text style={styles.textInputLogin}>Email</Text>  
          </Label>
          <Input textContentType={"emailAddress"} value={this.state.inputEmail} onChangeText={(text) => this.onTextEmail(text)} onKeyPress={() => this.emailVerification('email')} style={styles.textInputLogin}></Input>            
        </Item>
        {
          this.state.correctEmail == true ?
        <View>
          <Text style={styles.alertEmailSuccess}>correct Email</Text>
        </View>
        :
        <View>
          <Text style={styles.alertEmailDanger}>incorrect Email</Text>
        </View>
        }
        <Item floatingLabel>
          <Label StackedLabel>
            <Text style={styles.textInputLogin}>Password</Text>  
          </Label>
          <Input value={this.state.inputPassword} onChangeText={(text) => this.onTextPassword(text)} secureTextEntry={this.state.hideMode} style={styles.textInputLogin}></Input>
          { 
            this.state.hideMode  ?  
            <Icon name="eye-off" onPress={this.onClickHide}/> 
            : 
            <Icon name="eye" onPress={this.onClickHide}/>
          }          
        </Item>
        {
          this.state.inputPassword == '' ?
        <View>
          <Text style={styles.alertPasswordDanger}>Incorrect Password</Text>
        </View>
        :
        <View>
          <Text style={styles.alertPasswordSuccess}>Correct Password</Text>
        </View>
        }
      </Form>
    </View>
    <View style={styles.buttonLogin}>
      {
        this.state.inputPassword == '' || this.state.emailVerification == false ?
        <Button disabled onPress={() => this.props.navigation.navigate('ScreenNav')} title="Log IN"><Text style={styles.buttonLoginText}>Log In</Text></Button>
        :
        <Button title="Log IN" onPress={() => this.props.navigation.navigate('ScreenNav')}><Text style={styles.buttonLoginText}>Log In</Text></Button>
      }
    </View>   
  </View>
)}

}


const styles = StyleSheet.create({
  container : {
    // backgroundColor : "#4CAF50",
    flex : 1
  },
  textLogin : {
    fontSize : 30,
    textAlign : "center",
    paddingBottom : 10,
    paddingTop : '10%',
    // fontFamily : 'foo'
  },
  textLoginSmall : {
    fontSize : 20,
    textAlign : "center",
    paddingBottom : 10,
    
  },
  buttonLogin : {
    borderRadius : 50,
    marginLeft : 50,
    marginRight : 50,
    marginTop : 10,
    paddingTop : 20
  },
  buttonLoginText : {
    fontSize : 20,
    color : "white",
    marginLeft : "40%",
    
    
  },
  textInputLogin :{
    // borderWidth : 2,
    // borderRadius : 50,
    // paddingTop : 30,
    // paddingLeft : 10,
    // paddingBottom : 20, 

  },
  formLogin : {
    marginTop : -10,
    paddingLeft : 10,
    paddingRight : 30,
  },
  alertPasswordDanger : {
    marginTop : 5,
    paddingLeft : 16,
    color : "red",
  },
  alertPasswordSuccess : {
    marginTop : 5,
    paddingLeft : 16,
    color : "green",
  },
  alertEmailDanger : {
    marginTop : 5,
    paddingLeft : 16,
    color : "red",
  },
  alertEmailSuccess : {
    marginTop : 5,
    paddingLeft : 16,
    color : "green",
  },
  logoImage : {
    width : 120,
    height : 120,
    marginLeft : 140,
    marginTop : 50
  },
});