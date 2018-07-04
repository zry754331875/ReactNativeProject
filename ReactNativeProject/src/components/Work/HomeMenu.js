import React, { Component } from 'react';
import { View,
        ScrollView,
        StyleSheet,
        FlatList,
        TouchableOpacity,
        Image,
        Text,

             } from 'react-native';
import PageControl from 'react-native-page-control';

export default class HomeMenu extends Component {

  constructor(props){
    super(props)

    this.state = {
      currentPage:0,
    }
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
                    style={styles.menuView && {width:global.ScreenWidth}}
                    data={menuViewData}
                    renderItem={({item})=>this._renderMenuItem(item)}
                    keyExtractor={(item,index)=>index+''}
                    listKey={(item,index)=>index+''}
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
        <ScrollView pagingEnabled={true} horizontal={true} showsHorizontalScrollIndicator={false} onScroll={(e)=>this._onScroll(e)}>
            {menuViews}
        </ScrollView>
        <PageControl
          style={{alignSelf: 'center', marginTop: 8,marginBottom: 8,}}
          numberOfPages={Math.ceil(menuViewCount)}
          currentPage={this.state.currentPage}
          hidesForSinglePage
          pageIndicatorTintColor='gray'
          currentPageIndicatorTintColor='#06C1AE'
          indicatorStyle={{borderRadius: 5}}
          currentIndicatorStyle={{borderRadius: 5}}
          indicatorSize={{width:8, height:8}}
          onPageIndicatorPress={this.onItemTap}
          />
      </View>
    )
  }

  _onScroll(e){
    let mul = e.nativeEvent.contentOffset.x/global.ScreenWidth;

    this.setState({
      currentPage:Math.round(mul)
    })
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