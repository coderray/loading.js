# loading.js
实现28种css3特效的loading插件，只需几行代码，轻松实现图片预加载和加载特效。

  // Loading.js说明文档

Loading.js是本人最近开发的一款CSS3动画loading小插件。它集合了网上的28种loading动画，只要几句代码就可以轻松实现。它还加入了图片的预加载等功能，小巧易用又好看。

适用范围：
  支持CSS3动画的浏览器，如IE9+,chrome25+,FF5+等现代浏览器。

使用方法：
  1、在head标签之间引入css3效果文件（如ball-pulse.css）;
  2、在body标签后面引入loading.js文件；
  3、在loading.js文件后面进行初始化

参数设置：
  1、loading.init方法的第一个参数为必填项，代表存放容器。格式为“#id”或者对应id的变量值，全屏时可填任意值;
  2、第二个参数为loading参数的设置项，选填;
          size：设置大小，small、normal、big或自定义大小（如"30px"）
          type:设置动画类型，即对应的css文件名（如"ball-pulse"）
          fullscreen：设置全屏，true或false
          color：设置图形颜色，如"#fff"
          bgColor：设置动画背景色，默认"#ed5565"
          imgs：自定义加载的图片数组
  3、第三个参数为回调函数，可不填。


主页地址：http://www.chengguanhui.com/demos/loading-js/
