import React, { Component } from 'react';
import { Text, Alert, View, StyleSheet, TextInput, Image} from 'react-native';
import { Form,Left, Right, Picker, Icon, Button, Item, Label, Input, Header, Title, Body, Container } from 'native-base';



export default class Profile extends Component  {


  constructor(props)
{
  super(props)
  
}


render () {
return(
    <View>
      <Header>      
        <Body>
          <Title><Text>Profile</Text></Title>
        </Body>
        <Right>
          <Button onPress={this.onSharePress}>
            <Icon name="ios-create" />
          </Button>
        </Right>
      </Header>
      <View>
        <Image style={styles.imageProfile} source={require('../assets/image/user.png')}></Image>
      </View>
      <View>
        <Text style={styles.nameText}>Youre Name</Text>
      </View>
      <View>
        <Button iconRight info style={styles.buttonProfile}><Text style={styles.textButtonProfile}>My Webtoon Creation</Text><Icon name="ios-arrow-forward"/></Button>
        <Button info style={styles.buttonProfile}><Text style={styles.textButtonProfile}>Log Out</Text></Button>
      </View>
    </View>
)}

}

const styles = StyleSheet.create({
  imageProfile : {
    width : 200,
    height : 200,
    alignSelf : "center",
    marginTop : 60
  },
  nameText : {
    alignSelf : "center",
    marginTop : 30,
    fontSize : 25,
    fontWeight : "bold",
    marginBottom : 50,
  },
  buttonProfile : {
    borderColor : "black",
    borderWidth : 1,
  },
  textButtonProfile : {
    fontWeight : "bold",
    fontSize : 20
  },
});