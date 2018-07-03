import React, { Component } from 'react';
import { View,
        ScrollView,
        StyleSheet,
             } from 'react-native';

const MenuRowCount = 5;
const MenuRows = 2;

export default class HomeMenu extends Component {
  render() {

    let {menuCount} = this.props

    let menuViews = []

    let menuViewCount = menuCount/MenuRowCount/MenuRows

    for (let index = 0; index < menuViewCount; index++) {
        
        let view = (
            <View style={{backgroundColor: global.randomColor(),}}></View>
        )

        menuViews.push(view)
    }

    return (
      <View>
        <ScrollView style={...this.props.style} pagingEnabled={true}>
            {menuViews}
        </ScrollView>
      </View>
    )
  }


};

const styles = StyleSheet.create({

})