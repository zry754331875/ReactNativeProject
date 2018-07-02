import React, { PureComponent } from 'react';
import { View,
      Button, } from "react-native";

export default class StudyMain extends PureComponent {

  static navigationOptions = ({navigation})=>{
    return {
        title:'学习培训',
    // headerBackTitle:null,
    }
  }

  render() {
    return (
      <View style={{backgroundColor: global.randomColor(),flex:1}}>
      
      </View>
    )
  }
};