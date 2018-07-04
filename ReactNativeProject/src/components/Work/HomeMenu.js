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
                    keyExtractor={(item,index)=>index+''}
                    scrollEnabled={false}
                    numColumns={menuRows}
                    columnWrapperStyle={{marginTop: 8}}
          >
          </FlatList>
      )

      menuViews.push(menuView)
    }

    return (
      <View style={this.props.style}>
        <ScrollView pagingEnabled={true} horizontal={true} showsHorizontalScrollIndicator={false}>
            {menuViews}
        </ScrollView>
      </View>
    )
  }

  _renderMenuItem = (item)=>{

    let {title,icon} = item

    let {menuRowCount,menuRows} = this.props
    
    return (
      <TouchableOpacity style={{width: global.ScreenWidth/menuRows,height: global.ScreenWidth/menuRows/2+28,}}>
        <View style={{alignItems:'center'}}>
          <Image source={icon} resizeMode={'contain'} style={{height: global.ScreenWidth/menuRows/2}}>
          </Image>
          <Text style={{marginTop: 8}}>
            {title}
          </Text>
        </View>
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