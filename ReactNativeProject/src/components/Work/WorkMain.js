import React, { PureComponent } from 'react';
import { View,
          Text,
        Button,
        SectionList, } from "react-native";

export default class WorkMain extends PureComponent {

  static navigationOptions = ({navigation}) => ({
    headerStyle: {backgroundColor: 'white'},
  })

  constructor(props){
    super(props)
  }

  render() {
    return (
      <View style={{flex:1}}>
        
      </View>
    )
  }
};
