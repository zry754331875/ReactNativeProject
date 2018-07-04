import {
    Dimensions,
  } from 'react-native';

global.server = 'http://zhyl.yong-gang.com';

global.randomColor = function getRandomColor(){
    var r=Math.floor(Math.random()*256);
    var g=Math.floor(Math.random()*256);
    var b=Math.floor(Math.random()*256);
    return "rgb("+r+','+g+','+b+")";
}  

global.ScreenWidth = Dimensions.get('window').width;
global.ScreenHeight = Dimensions.get('window').height;
  