import React, { PureComponent } from 'react';
import { View,
          Text,
        Button,
        FlatList,
      ScrollView,
    StyleSheet, } from "react-native";
import HomeMenu from "./HomeMenu";

export default class WorkMain extends PureComponent {

  static navigationOptions = ({navigation}) => ({
    headerStyle: {backgroundColor: 'white'},
  })

  constructor(props){
    super(props)
  }

  render() {
    return (
      <ScrollView style={this.props.style}>
        <HomeMenu style={styles.homeMenu} menuData={this.props.menuData} menuRowCount={this.props.menuRowCount} menuRows={this.props.menuRows}>
        </HomeMenu>
      </ScrollView>
    )
  }
};

const styles = StyleSheet.create({
  homeMenu:{
    
  },
  
})
