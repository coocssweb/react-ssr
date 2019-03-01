<h1 align="center">
  <p align="center">React SSR</p>
  <p align="center" style="font-size: 0.2em">Delightful React Server-Side Rendering</p>
</h1>

# React SSR
这是基于`React`、`React-Router`、`Redux`、`Koa2.0`实现的React服务端渲染方案。为了更好的演示，已实现一个简单的电影首页、电影详情页。
数据资源是豆瓣上的资源。样式也参考了豆瓣的样式

# 快速上手
```
// 安装依赖
npm install

// 为了构建一个模板(dist/index.html)给koa模板引擎使用
npm run build:local

// 启动本地node服务器，这里设置的端口是4322
npm run server:dev

// 启动前端服务，这里的服务端口号是8088
npm start

// 访问 http://localhost:4322进行开发
```

# 功能预览
目前已实现首页、详情页的交互和相关接口
```
首页：(直接访问时，会走服务端渲染出首页dom，浏览器右键可以查看源码)
http://localhost:4322

详情页：(直接访问时，会走服务端渲染出详情页dom，浏览器右键可以查看源码)
http://localhost:4322/detail/30163509

api接口：
http://localhost:4322/api/home
http://localhost:4322/api/movie/30163509

```

# 实现原理

<div>
    <img src="https://raw.githubusercontent.com/coocssweb/coocssweb.github.io/master/photos/react-ssr/how.jpeg" align="center" title="首页" width="800">
</div>
如果你想查看更多原理内容，可以看我的知乎。

<a href="https://zhuanlan.zhihu.com/p/57856814">React SSR 实现原理</a>


## 首页预览 和 浏览器源码


访问 http://localhost:4322

<div>
    <img src="https://coocssweb.github.io/photos/react-ssr/preview-01.jpg" align="center" title="首页" width="800">
</div>


## 详情页预览 和浏览器源码
<div>
    <img src="https://coocssweb.github.io/photos/react-ssr/preview-02.jpg" align="center" title="详情页" width="800">
</div>