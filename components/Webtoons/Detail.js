import React, { Component } from 'react';
import { Text, Alert, View, StyleSheet, TextInput, Image, FlatList, ScrollView, Share} from 'react-native';
import { Form,Left, Right, Picker, Icon, Button, Item, Label, Input, Header, Title, Body, Container } from 'native-base';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

const data = [
    {id : 0, date :  "1 Desember 2018", title : 'Ep 1', url : 'https://akcdn.detik.net.id/community/media/visual/2019/04/03/dac43146-7dd4-49f4-89ca-d81f57b070fc.jpeg?w=770&q=90'},
    {id : 1, date :  "7 Desember 2018", title : 'Ep 2', url : 'https://akcdn.detik.net.id/community/media/visual/2019/04/03/dac43146-7dd4-49f4-89ca-d81f57b070fc.jpeg?w=770&q=90'},
    {id : 2, date :  "14 Desember 2018", title : 'Ep 3', url : 'https://akcdn.detik.net.id/community/media/visual/2019/04/03/dac43146-7dd4-49f4-89ca-d81f57b070fc.jpeg?w=770&q=90'},
    {id : 3, date :  "21 Desember 2018", title : 'Ep 4', url : 'https://akcdn.detik.net.id/community/media/visual/2019/04/03/dac43146-7dd4-49f4-89ca-d81f57b070fc.jpeg?w=770&q=90'},
]

const shareOption = {
  title : "Title",
  message : "message dasdsa"
}


export default class Detail extends Component  {


  constructor(props)
{
  super(props)
  
}

onSharePress =()=>
Share.share(shareOption);

FlatItem({item, index}){
    return(
      
      <View style={{flexDirection:"row"}}>
        <View key={index} style={styles.viewImageList}>
            <Image style={styles.imageScroll} source={{uri: item.url}}  />
        </View>
        <View>
            <Text style={styles.textImageList}>{item.title}</Text>
            <Text style={styles.dateImageList}>{item.date}</Text>
        </View>
      </View>
    )
}

render () {
return(
    
    <View>
      <Header>
        <Left>
          <Button transparent onPress={()=>this.props.navigation.goBack()}>
            <Icon name='arrow-back' />
          </Button>
        </Left>      
        <Body>
          <Title><Text>{JSON.stringify(this.props.navigation.getParam('title'))}</Text></Title>
        </Body>
        <Right>
          <Button onPress={this.onSharePress}>
            <Icon name='share' />
            {/* <Picker 
              mode="dropdown"
              iosHeader="Select your SIM"
              iosIcon={<Icon name="arrow-dropdown-circle" style={{ color: "#007aff", fontSize: 25 }} />}
              style={{ width: undefined }} 
              >
                <Item label="Wallet" value="key0" />
                <Item label="ATM Card" value="key1" />
            </Picker>             */}
          </Button>
        </Right>
      </Header>
    <View style={styles.viewImageHeader}>
        <Image style={styles.imageHeader} source={{uri: 'https://cdn.idntimes.com/content-images/community/2019/03/6d0a9079a454d64fc74322862c0de1ed-66a00b52de00ef98aae34bee81593598_600x400.jpg'}}  />
    </View>
    <ScrollView style={{height:"50%"}}>
        <FlatList         
          scrollEnabled={true}       
          data={data}
          renderItem={this.FlatItem}
        />
      </ScrollView>
    </View>

)}

}

const styles = StyleSheet.create({
    imageHeader : {
      width : '100%',
      height : 250,
    },
    viewImageHeader : {
        borderWidth : 2,
        marginBottom : 20
      },
      imageScroll : {
        marginLeft : 20,
        marginBottom : 20,
        width : 80,
        height : 80,
      },
      viewImageList : {
        flexDirection : "row",
      },
      textImageList : {
        fontWeight : "bold",
        fontSize : 20,
        marginLeft : 20
      },
      dateImageList : {
        fontWeight : "bold",
        fontSize : 12,
        marginLeft : 20
      },
  });