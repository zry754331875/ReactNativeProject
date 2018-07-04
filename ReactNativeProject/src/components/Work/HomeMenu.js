import React, { Component } from 'react';
import { View,
        ScrollView,
        StyleSheet,
        FlatList,
        TouchableOpacity,
        Image,
        Text,
             } from 'react-native';


export default class HomeMenu extends Component {

  constructor(props){
    super(props)
  }
  
  render() {

    let {menuData,menuRowCount,menuRows} = this.props

    let menuViews = []

    let menuViewCount = menuData.length/menuRowCount/menuRows
    
    for (let index = 0; index < menuViewCount; index++) {
      
      let menuViewData
      let start
      let end

      if(index + 1 > menuViewCount)
      {
        start = index * menuRowCount * menuRows

        menuViewData = menuData.slice(start)
      }
      else
      {
        start = index * menuRowCount * menuRows

        end = start + menuRowCount * menuRows

        menuViewData = menuData.slice(start,end)
      }

      let menuView = (
          <FlatList key={index} 
                    style={styles.menuView && {backgroundColor: global.randomColor(),width:global.ScreenWidth}}
                    data={menuViewData}
                    renderItem={({item})=>this._renderMenuItem(item)}
                    horizontal={true}
                    keyExtractor={(item,index)=>index+''}
                    scrollEnabled={false}
          >
          </FlatList>
      )

      menuViews.push(menuView)
    }

    return (
      <View style={this.props.style}>
        <ScrollView pagingEnabled={true} horizontal={true}>
            {menuViews}
        </ScrollView>
      </View>
    )
  }

  _renderMenuItem = (item)=>{

    let {title,icon} = item

    let {menuRowCount,menuRows} = this.props

    return (
      <TouchableOpacity style={{width: global.ScreenWidth/menuRows,height: global.ScreenWidth/menuRows,alignItems:'center'}}>
        <Image source={icon} resizeMode={'contain'}>
        </Image>
        <Text>
          title
        </Text>
      </TouchableOpacity>
    )
  }
};

const styles = StyleSheet.create({
  menuView:{
    
  },
  itemView:{
    
  }
})