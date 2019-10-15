import React, { Component } from 'react';
import { Text, Alert, View, StyleSheet, TextInput, Image, ScrollView, FlatList, TouchableOpacity} from 'react-native';
import { Form, Icon, Button, Item, Label, Input, Content } from 'native-base';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';


const data = [
  {id : 0, favorite :  "100+ Favorite", title : 'The Secret Of Angel', url : 'https://swebtoon-phinf.pstatic.net/20180517_37/1526523687139iRpgs_JPEG/thumb_M.jpg'},
  {id : 1, favorite :  "90 favorite", title : 'Pasutri Gaje', url : 'https://cdn.idntimes.com/content-images/community/2019/03/6d0a9079a454d64fc74322862c0de1ed-66a00b52de00ef98aae34bee81593598_600x400.jpg'},
  {id : 2, favorite :  "85 favorite", title : 'Young Mom', url : 'https://swebtoon-phinf.pstatic.net/20190826_51/1566745782829lKBue_JPEG/thumb_M.jpg'},
  {id : 3, favorite :  "98 favorite", title : 'Terlalu Cantik', url : 'https://scontent-iad3-1.cdninstagram.com/vp/db85664d04ba24a8661595129264ae28/5E3A9C8B/t51.2885-15/e35/66481383_474472033103695_856334970972400762_n.jpg?_nc_ht=scontent-iad3-1.cdninstagram.com&_nc_cat=107'},
]


export default class Favorite extends Component  {


  constructor(props)
{
  super(props)
  this.state = {
    searchText: "",
    filteredData: []
  };
}

search = (searchText) => {
  this.setState({searchText: searchText});

  let filteredData = data.filter(function (item) {
    return item.title.includes(searchText);
  });

  this.setState({filteredData: filteredData});
};


render () {
return(
  <View>
  <Content>
    <Item regular>
      <Input style={styles.searchBar} onChangeText={this.search} value={this.state.searchText}/><Icon name="search" style={styles.searchIcon}/>      
    </Item>
  </Content>

  <View>
        <ScrollView style={{height:"80%"}}>
        <FlatList         
          scrollEnabled={true}                 
          data={this.searchData()}
          renderItem={({item,index})=>(
            <View style={{flexDirection:"row"}}>
              <View key={index} style={styles.viewImageList}>
                <TouchableOpacity>
                  <Image style={styles.imageScroll} source={{uri: item.url}}  />
                </TouchableOpacity>
              </View>
              <View>
                <Text style={styles.textImageList}>{item.title}</Text>
                <Text style={styles.dateImageList}>{item.favorite}</Text>
              </View>
            </View>
          )}
        />
      </ScrollView>
  </View>
  </View>
  
  
)}

searchData (){
  if (this.state.filteredData == ''){
  return data
} else {
  return this.state.filteredData
}
};

}
 
 const styles = StyleSheet.create({
   searchBar : {
     borderWidth : 2,
    alignContent : "center",
    marginLeft : 20,
    marginTop : 15,
    marginBottom : 20,
   },
   imageHeader : {
    width : '100%',
    height : 250,
  },
  viewImageHeader : {
      borderWidth : 2,
      marginBottom : 20
    },
   viewImageList : {
    flexDirection : "row",
  },
  imageScroll : {
    marginLeft : 20,
    marginBottom : 20,
    width : 80,
    height : 80,
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

