import React, { PureComponent } from 'react';
import { View,
        Button,
      FlatList,
    ScrollView,
      Animated,
      StyleSheet,
    TouchableOpacity,
  Text, } from "react-native";

export default class StudyMain extends PureComponent {

  static navigationOptions = ({navigation})=>{
    return {
        
    }
  }

  constructor(props) {
    super(props);
    
    this.state = {
      topMouseAni: new Animated.ValueXY,
      selectIndex:0,
    }
  }
  
  _topScrollViewItemOnPress(index){
    this.bottomScrollView.scrollTo({x:index*global.ScreenWidth,y: 0})
  }

  _konPressonAni = (index) =>{
    
    Animated.timing(this.state.topMouseAni,{
      toValue:{x: index * global.ScreenWidth/3,y : 0},
      duration: 300
    }).start();
  }

  render() {
    
    return (
      <View style={this.props.style}>
      <View style={styles.topScrollView}>
        <FlatList
                horizontal={true} 
                showsHorizontalScrollIndicator={false}
                data = {[{key:'享美食'},{key:'住酒店'},{key:'爱玩乐'}]} 
                renderItem={({item:item,index:index})=>{
                  return <TouchableOpacity style={[styles.itemStyle,{width: global.ScreenWidth/3,}]} onPress={this._topScrollViewItemOnPress.bind(this,index)}>
                          <View>
                            <Text  style={[{textAlign:'center',color:this.state.selectIndex == index ? 'rgb(248,58,90)' : 'black',fontWeight:'500'}]}>{item.key}
                            </Text>
                          </View>
                        </TouchableOpacity>}}
                >
        </FlatList>
        <Animated.View style={[styles.topMouse,{width: global.ScreenWidth/3,transform: this.state.topMouseAni.getTranslateTransform()}]}></Animated.View>
      </View>
      <ScrollView ref={(c)=>this.bottomScrollView=c} style={[styles.bottomScrollView,{height: global.ScreenHeight-35,}]} pagingEnabled={true} horizontal={true} onScroll={(event)=>{
        let mul = event.nativeEvent.contentOffset.x/global.ScreenWidth;

        this.setState({
          selectIndex:parseInt(mul),
        })

        this._konPressonAni(mul);
      }} scrollEventThrottle={16}>
        <View style={{backgroundColor: 'gray',width:global.ScreenWidth,height:styles.bottomScrollView.height}} ></View>
        <View style={{backgroundColor: 'yellow',width:global.ScreenWidth,height:styles.bottomScrollView.height}} ></View>
        <View style={{backgroundColor: 'green',width:global.ScreenWidth,height:styles.bottomScrollView.height}} ></View>
      </ScrollView>
      </View>
    )
  }
};

const styles = StyleSheet.create({
  topMouse:{
    height: 5,
    backgroundColor: 'rgb(248,58,90)',
  },
  topScrollView:{
    height: 40,
    backgroundColor: 'white',
  },
  bottomScrollView:{
    backgroundColor: 'yellow',
  },
  itemStyle:{
    alignSelf: 'center',
    backgroundColor: 'white',
    height: 33,
    justifyContent: 'center',
  }
})