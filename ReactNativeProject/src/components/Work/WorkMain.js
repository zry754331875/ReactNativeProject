import React, { PureComponent } from 'react';
import { View,
          Text,
        Button,
        FlatList,
      ScrollView,
    StyleSheet,
          Image, } from "react-native";
import HomeMenu from "./HomeMenu";

export default class WorkMain extends PureComponent {

  static navigationOptions = ({navigation}) => ({
    headerStyle: {backgroundColor: 'white'},
  })

  constructor(props){
    super(props)
  }

  componentWillMount(){
    this.props.fetchMenuItems()
  }

  render() {
    return (
      <FlatList 
                  renderItem={({item})=>this._renderItem(item)}
                  data={this.props.menuItemData}
                  keyExtractor={(item,index)=>index+''}
                  listKey={(item,index)=>index+''}
                  ListHeaderComponent={this._ListHeaderComponent}
                  ItemSeparatorComponent={this._renderSeparator}
        >
      </FlatList>
    )
  }

  _ListHeaderComponent=()=>{
    return(
      <View style={styles.gridViewHeader}>
        <HomeMenu style={styles.homeMenu} menuData={this.props.menuData} menuRowCount={this.props.menuRowCount} menuRows={this.props.menuRows}>
        </HomeMenu>
        <View style={{backgroundColor: 'rgb(235,235,241)',height: 15}}></View>
        <View style={{height: 30,marginLeft:15,justifyContent:'center'}}>
          <Text>
          猜你喜欢
          </Text>
        </View>
      </View>
    )
  }

  _renderSeparator=()=>{
    return(
      <View style={styles.Separator}>
      </View>
    )
  }

  _renderItem=(item)=>{

    let {brandname,squareimgurl,title,price} = item

    let imageUrl = squareimgurl.replace('w.h','120.0')
    
    return(
      <View style={{flexDirection:'row',backgroundColor:'white'}}>
        <Image source={{uri:imageUrl}} style={styles.cellImage}>
        </Image>
        <View style={{flex:1,justifyContent:'space-between',padding:8}}>
          <Text style={{fontWeight:'bold'}}>{brandname}</Text>
          <Text style={{color:'gray'}}>{title}</Text>
          <Text style={{color:'#06C1AE',fontWeight:'bold'}}>{price}</Text>
        </View>
      </View>
    )
  }
};

const styles = StyleSheet.create({
  homeMenu:{
    backgroundColor:'white'
  },
  gridViewHeader:{
    backgroundColor: 'white',
  },
  cellImage:{
    width: 110,
    height: 80,
    margin: 8,
    borderRadius:3
  },
  Separator:{
    backgroundColor:'rgb(235,235,241)',
    height:1,
  }
})
