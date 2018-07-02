import { AppRegistry } from 'react-native';
import App from './App';
import './src/contansts/global'
import { YellowBox } from 'react-native';

YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);
YellowBox.ignoreWarnings(['Method `jumpToIndex` is deprecated', 'Module RCTImageLoader']);

AppRegistry.registerComponent('ReactNativeProject', () => App);
