import React, { Component } from 'react';
import { Text, Alert, View, StyleSheet, TextInput, Image} from 'react-native';
import { Form,Left, Right, Picker, Icon, Button, Item, Label, Input, Header, Title, Body, Container } from 'native-base';
import { createStackNavigator } from 'react-navigation-stack';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import editPage from './profile/Edit'
import myWebtoonPage from './profile/Mywebtoonpage'
import createWebtoonPage from './profile/create'
import createEpisodePage from './profile/createepisode'
import editWebtoonPage from './profile/editwebtoon'
import editEpisodePage from './profile/editepisode'

const name = 'Your Name';
const image = '../assets/image/user.png'

class Profile extends Component  {


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
          <Button onPress={() => this.props.navigation.navigate('edit', {
            url : image,
            name : name
          })}>
            <Icon name="ios-create" />
          </Button>
        </Right>
      </Header>
      <View>
      {
        this.props.navigation.getParam('url') ? 
            <Image style={styles.avatar} source={this.props.navigation.getParam('url')}></Image>
        :
            <Image style={styles.imageProfile} source={require('../assets/image/user.png')}></Image>
      }  
      </View>
      <View>
      {
            this.props.navigation.getParam('name') ?
            <Text style={styles.nameText}>{this.props.navigation.getParam('name')}</Text> :
            <Text style={styles.nameText}>Youre Name</Text>
          }
        
      </View>
      <View>
        <Button onPress={() => {this.props.navigation.navigate('webtoon')}} iconRight info style={styles.buttonProfile}><Text style={styles.textButtonProfile}>My Webtoon Creation</Text><Icon name="ios-arrow-forward"/></Button>
        <Button info style={styles.buttonProfile}><Text style={styles.textButtonProfile}>Log Out</Text></Button>
      </View>
    </View>
)}

}

const appNavigator = createStackNavigator({
  profile : {
    screen : Profile,
    navigationOptions:{
      header:null
    }
  },
    edit : {
    screen : editPage,
    navigationOptions:{
      header:null
    }
  },
  webtoon : {
    screen : myWebtoonPage,
    navigationOptions:{
      header:null
    }
  },
  createWebtoon : {
    screen : createWebtoonPage,
    navigationOptions:{
      header:null
    }
  },
  createEpisode : {
    screen : createEpisodePage,
    navigationOptions:{
      header:null
    }
  },
  editWebtoon : {
    screen : editWebtoonPage,
    navigationOptions:{
      header:null
    }
  },
  editEpisode : {
    screen : editEpisodePage,
    navigationOptions:{
      header:null
    }
  },

},
 {
   initialRouteName : 'profile'
 }
 )

 const appContainer = createAppContainer(appNavigator)

export default appContainer

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
    fontSize : 20,
    marginLeft : 10
  },
  avatar: {
    borderRadius: 100,
    width : 200,
    height : 200,
    alignSelf : "center",
    marginTop : 60
}
});