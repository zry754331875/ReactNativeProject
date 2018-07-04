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

  _renderItem=(item)=>{

    let {brandname,imgurl,title,price} = item

    return(
      <View>
        <Text>
          {title}
        </Text>
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
  }
})
