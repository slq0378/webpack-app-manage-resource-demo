 import _ from 'lodash';
 import './style.css';
 import card from './1.png';
 import Data from './data.xml';
 import jsonData from './data.json';

 function component() {
     var element = document.createElement('div');

     // Lodash, currently included via a script, is required for this line to work
     // Lodash, now imported by this script
     element.innerHTML = _.join(['你好', 'webpack'], ' ');
     element.classList.add('hello');

     // 添加照片
     var img = new Image();
     img.src = card;
     element.appendChild(img);
     console.log(Data);
     console.log(jsonData.name);
     return element;
 }

 document.body.appendChild(component());