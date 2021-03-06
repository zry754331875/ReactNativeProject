import React, { PureComponent } from 'react';
import {StackNavigator, TabNavigator, TabBarBottom} from 'react-navigation'
import  MineMainC  from "./containers/MineMainC";
import  StudyMainC  from "./containers/StudyMainC";
import  WorkMainC  from "./containers/WorkMainC";
import  TabBarItem  from "./components/common/TabBarItem";

export default class MainScene extends PureComponent {
  render() {
    return (
      <Navigator>
      </Navigator>
    )
  }
};

const Tab = TabNavigator(
    {
        work: {
            screen: WorkMainC,
            navigationOptions: ({navigation}) => ({
                title: '首页',
                tabBarIcon: ({focused, tintColor}) => (
                    <TabBarItem
                        tintColor={tintColor}
                        focused={focused}
                        normalImage={require('./img/tabbar/tabbar_homepage.png')}
                        selectedImage={require('./img/tabbar/tabbar_homepage_selected.png')}
                    />
                )
            }),
        },
        study: {
            screen: StudyMainC,
            navigationOptions: ({navigation}) => ({
                title: '附近',
                tabBarIcon: ({focused, tintColor}) => (
                    <TabBarItem
                        tintColor={tintColor}
                        focused={focused}
                        normalImage={require('./img/tabbar/tabbar_merchant.png')}
                        selectedImage={require('./img/tabbar/tabbar_merchant_selected.png')}
                    />
                )
            }),
        },

        mine: {
            screen: MineMainC,
            navigationOptions: ({navigation}) => ({
                title: '我的',
                tabBarIcon: ({focused, tintColor}) => (
                    <TabBarItem
                        tintColor={tintColor}
                        focused={focused}
                        normalImage={require('./img/tabbar/tabbar_order.png')}
                        selectedImage={require('./img/tabbar/tabbar_order_selected.png')}
                    />
                )
            }),
        },
    },
    {
        tabBarComponent: TabBarBottom,
        tabBarPosition: 'bottom',
        lazy: true,
        animationEnabled: false,
        swipeEnabled: false,
        tabBarOptions: {
            activeTintColor: '#06C1AE',
            inactiveTintColor: '#979797',
            style: {backgroundColor: '#ffffff'},
        },
    }

)

const Navigator = StackNavigator(
    {
        Tab: {screen: Tab,}
    },
    {
        navigationOptions: {
            // headerStyle: { backgroundColor: color.primary }
            headerBackTitle: null,
            headerTintColor: '#333333',
            showIcon: true,
        },
    }
)
