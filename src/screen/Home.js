import React, { Component } from 'react';
import { Text, Alert, View, StyleSheet, TextInput, Image, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import { Input, Form, Item, Icon, Content, Container, Button} from 'native-base';
import Slideshow from 'react-native-slideshow';

export default class Home extends Component  {

  constructor(props)
{
  super(props)
  this.state = {
    position: 1,
    interval: null,
    dataSource: [
      {
        id: 1,
        title: 'The Secret of Angel',
        url: 'https://swebtoon-phinf.pstatic.net/20180517_37/1526523687139iRpgs_JPEG/thumb_M.jpg',
      }, {
        id: 2,
        title: 'Pasutri Gaje',
        url: 'https://cdn.idntimes.com/content-images/community/2019/03/6d0a9079a454d64fc74322862c0de1ed-66a00b52de00ef98aae34bee81593598_600x400.jpg',
      }, {
        id: 3,
        title: 'Young Mom',
        url: 'https://swebtoon-phinf.pstatic.net/20190826_51/1566745782829lKBue_JPEG/thumb_M.jpg',
      }, {
        id: 4,
        title: 'Terlalu Cantik',
        url: 'https://scontent-iad3-1.cdninstagram.com/vp/db85664d04ba24a8661595129264ae28/5E3A9C8B/t51.2885-15/e35/66481383_474472033103695_856334970972400762_n.jpg?_nc_ht=scontent-iad3-1.cdninstagram.com&_nc_cat=107',
      },
    ],
  };
  
}

componentWillMount() {
  this.setState({
    interval: setInterval(() => {
      this.setState({
        position: this.state.position === this.state.dataSource.length ? 0 : this.state.position + 1
      });
    }, 5000)
  });
}

componentWillUnmount() {
  clearInterval(this.state.interval);
}

render () {
return(
  <ScrollView>


    <Content>
      <Item regular>
      <Input style={styles.searchBar}><Icon name="search" style={styles.searchIcon}/></Input>      
      </Item>
    </Content>


    <View style={styles.slideShow}>
      <Slideshow 
        dataSource={this.state.dataSource}
        position={this.state.position}
        onPositionChanged={position => this.setState({ position })} 
      />
    </View>


    <View>
      <Text style={styles.textFavorite}>Favorite</Text>
    </View>


    <FlatList         
          scrollEnabled={true}       
          data={this.state.dataSource}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({item,index})=>(
            <View>
            <View style={styles.viewImageList}>
                <View>
                  <TouchableOpacity onPress={() => this.props.navigation.navigate('detail', this.state.dataSource[index])}>
                    <Image name="test" style={styles.imageList} source={{uri: item.url}}  />
                  </TouchableOpacity>
                  <Text style={styles.textImageList}>{item.title}</Text>
                </View>
            </View>
            </View>    
          )}
        />

        <View>
          <Text style={styles.textAll}>All</Text>
        </View>

        <FlatList         
          scrollEnabled={true}       
          data={this.state.dataSource}
          vertical={true}
          renderItem={({item,index})=>(
            <View>
            <View style={styles.viewImageList}>

                <View style={styles.viewImageListVertical}>
                  <TouchableOpacity onPress={() => this.props.navigation.navigate('detail', this.state.dataSource[index])}>
                    <Image style={styles.imageListVertical} source={{uri: item.url}}  />
                  </TouchableOpacity>
                  <View>
                    <Text style={styles.textImageListVertical}>{item.title}</Text>
                    <Button style={styles.buttonImageList}><Text style={styles.textButtonImageList}>+ Favorite</Text></Button>
                  </View>
                </View>
            </View>
            </View>    
          )}
        />
  </ScrollView>
  
  
)}
}

const styles = StyleSheet.create({
  searchBar : {
    borderWidth : 2,
    // alignItems : "center",
      alignContent : "center",
      marginLeft : 20,
      marginRight : 20,
      marginTop : 15,
      marginBottom : 20,
    // marginBottom : 20
  },
  searchIcon : {
      borderWidth : 2,
    // alignItems : "center",
      alignContent : "center",
      marginLeft : 50,
      marginRight : 20,
      marginTop : 15,
    // marginBottom : 20
  },
  slideShow : {
      borderWidth : 2,
    // alignItems : "center",
      alignContent : "center",
      marginLeft : 20,
      marginRight : 20,
    // marginBottom : 20
  },
  imageList : {
      width: 150, 
      height: 150,
      marginLeft : 20,
      borderWidth : 2,
      borderColor : "black"

  },
  imageListVertical : {
      width: 150, 
      height: 150,
      marginLeft : 20,
      borderWidth : 2,
      borderColor : "black"

  },
  viewImageList : {
      marginTop : 12,
      marginRight : 20,
    
  },
  viewImageListVertical : {
      flexDirection : "row",
      marginTop : 20,
      marginRight : 20,
    
  },
  textImageList : {
      marginLeft : 20,
      fontWeight : "bold",
      fontSize : 15,

  },
  textImageListVertical : {
      marginLeft : 15,
      marginTop : 20,
      marginBottom : 20,
      fontWeight : "bold",
      fontSize : 15,

  },
  textFavorite : {
      marginLeft : 20,
      marginTop : 20,
      fontWeight : "bold",
      fontSize : 25
  },
  textAll : {
      marginLeft : 20,
      marginTop : 20,
      fontWeight : "bold",
      fontSize : 25
  },
  buttonImageList : {
      marginLeft : 20,
      width : 100,
      backgroundColor : "orange",
      borderWidth : 2,
  },
  textButtonImageList : {
      marginLeft : 20,
      backgroundColor : "orange",
      fontWeight : "bold",
  },
});