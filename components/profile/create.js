import React, { Component } from 'react';
import { Text, Alert, View, StyleSheet, TextInput, Image, ScrollView, FlatList, TouchableOpacity} from 'react-native';
import { Form, Icon, Button, Item, Label, Input, Header, Left, Body, Title, Container, Fab, Content, Right } from 'native-base';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';

const data = [
    {id : 0, date :  "12 Desember", title : 'The Secret Of Angel', url : 'https://swebtoon-phinf.pstatic.net/20180517_37/1526523687139iRpgs_JPEG/thumb_M.jpg'},
    {id : 1, date :  "19 Desember", title : 'Pasutri Gaje', url : 'https://cdn.idntimes.com/content-images/community/2019/03/6d0a9079a454d64fc74322862c0de1ed-66a00b52de00ef98aae34bee81593598_600x400.jpg'},
    {id : 2, date :  "26 Desember", title : 'Young Mom', url : 'https://swebtoon-phinf.pstatic.net/20190826_51/1566745782829lKBue_JPEG/thumb_M.jpg'},
    {id : 3, date :  "5 Januari", title : 'Terlalu Cantik', url : 'https://scontent-iad3-1.cdninstagram.com/vp/db85664d04ba24a8661595129264ae28/5E3A9C8B/t51.2885-15/e35/66481383_474472033103695_856334970972400762_n.jpg?_nc_ht=scontent-iad3-1.cdninstagram.com&_nc_cat=107'},
  ]

export default class Create extends Component  {


  constructor(props)
{
  super(props)
  this.state = {
    searchText: "",
  };
}

search = (searchText) => {
    this.setState({searchText: searchText});
  };


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
                <Title><Text>Create Webtoon</Text></Title>
            </Body>
            <Right>
                <Button transparent onPress={()=>this.props.navigation.goBack()}>
                <Icon name='md-checkmark' />
                </Button>
            </Right>    
        </Header>
        <View>
            <Text style={styles.textTitle}>Title</Text>
            <TextInput style={styles.title} onChangeText={this.search} value={this.state.searchText}/>      
        </View>          

        <View>
            <ScrollView style={{height:"50%"}}>
                <FlatList         
                    scrollEnabled={true}                 
                    data={data}
                    renderItem={({item,index})=>(
                    <View style={{flexDirection:"row"}}>
                    <View key={index} style={styles.viewImageList}>
                        <TouchableOpacity>
                            <Image style={styles.imageScroll} source={{uri: item.url}}  />
                        </TouchableOpacity>
                    </View>
                    <View>
                        <Text style={styles.textImageList}>{item.title}</Text>
                        <Text style={styles.episodeImageList}>{item.date}</Text>
                    </View>
                </View>
                )}
                />
            </ScrollView>  
            <View>
                <Button info style={styles.buttonAdd}><Text style={styles.textButtonAdd}>+ Add Episode</Text></Button>
            </View>
        </View>
    </View>
)}
}

const styles = StyleSheet.create({
    title : {
        borderWidth : 2,
       alignContent : "center",
       marginLeft : 20,
       marginRight : 20,
       marginTop : 15,
       marginBottom : 20,
      },
      textTitle : {
       alignContent : "center",
       marginLeft : 20,
       marginRight : 20,
       marginTop : 15,
       fontSize : 20
      },

    viewImageList : {
     flexDirection : "row",
   },
   imageScroll : {
     marginLeft : 20,
     marginTop : 20,
     width : 80,
     height : 80,
   },
   textImageList : {
     fontWeight : "bold",
     fontSize : 20,
     marginLeft : 20,
     marginTop : 30,
   },
   episodeImageList : {
     fontWeight : "bold",
     fontSize : 12,
     marginLeft : 20
   },
buttonAdd: {
    height: 55,
    marginTop : 20,
    width : "80%",
    alignSelf : "center",
    
},
textButtonAdd: {
    fontWeight: "bold",
    fontSize : 20,
    width : "80%",
    textAlign : "center",
    
}
  });
 
 

