### Vue项目基本骨架
+ src : 项目程序目录
+ src/bower_components : bower管理的web前端libs
+ src/components : 组件
+ src/containers : Vue容器文件目录
+ src/js/app.js : 项目入口文件
+ src/pages : 前端页面
+ src/index.html : 项目入口页面
+ src/template.html : webpack生产环境自动生成到dist目录的项目入口页面模板
+ .babelrc : babel配置文件
+ .bowerrc : 指定bower install的组件存放位置
+ .eslintignore : 配置eslint语法规范监测忽略的文件目录
+ .eslintrc.js : 定义eslint语法规范规则
+ .gitignore : 定义git上传忽略的文件目录
+ bower.json : bower配置文件
+ ESLint.md : eslint笔记
+ gulpfile.js : gulp配置文件
+ package.json : npm配置文件
+ typings.json : 智能提示配置文件
+ webpack.develop.config.js : webpack开发时配置文件
+ webpack.publish.config.js : webpack发布生产时配置文件
+ server : node服务器端
+ 运行:
```
npm install
npm run develop

// 打包
npm run publish
```
### 将md文件生成html页面
+ 运行 i5ting_toc -f README.md 命令
+ 在生成的preview目录中运行http服务器查看md文件生成的html页面
+ hs -o -p8020
### v1版本引入element-ui框架的使用

### v2版本引入跨域方式

#### 跨域方式：

##### 方式一：fetch
+ es6中自带了fetch方式解决跨域问题
+ fetch属于cors方式跨域，cors支持get/post等各种方式，
+ fecth方式可以直接获取服务器返回的json或text数据，没法直接获取jsonp方式的返回数据，需要自己将jsonp返回的值进行手动解析成json格式
+ 引入第三方模块 fetch-jsonp 可以直接获取jsonp方式返回的数据
+ jsonp只支持get方式的请求，不支持post方式的请求，因为jsonp的原理就是通过script标签的方式进行跨域访问
+ 代码如下：
```javascript

// fetch方式：
// get请求：
let _url=`http://127.0.0.1:3389/movie/getlist?classify=${movieobj.classify}&pageindex=${movieobj.pageindex}&pagecount=${movieobj.pagecount}&city=杭州`;
fetch(_url)  
    .then((response) => {
        if (response.ok) {
            return response.json()
        } else {
            console.error('服务器繁忙，请稍后再试；\r\nCode:' + response.status)
        }
    })
    .then((data) => {
        console.log(data)
    })
    .catch((err)=> {
        console.error(err)
    })

// post请求：
let _url=`http://127.0.0.1:3389/movie/getlist`;
fetch(_url, {
    method: "POST",
    headers: {
        "Content-Type": "application/x-www-form-urlencoded"
    },
    body: `msg=${_msg}`
    }).then(function(res) {
        if (res.ok) {
            return res.json();
        }
    }).then((data)=>{
        resolve(data);
    }).catch((err)=>{
        reject(err);
    })

// fetch-jsonp实现jsonp方式的请求
// 安装
// npm install fetch-jsonp --save
// 引入
import fetchJsonp from 'fetch-jsonp'
let count=12;
let start=(movieobj.pageindex-1)*count;
let city='杭州';
let _purl=`http://api.douban.com/v2/movie/${movieobj.classify}?start=${start}&count=${count}&city=${city}`
fetchJsonp(_purl)
.then(function(response) {
    return response.json()
}).then(function(json) {
    console.log(json)
}).catch(function(ex) {
    console.log('parsing failed', ex)
})

```
##### 注意：
+ 实现跨域请求需要服务器端也要支持跨域请求才可以
+ 以nodejs为例需要在app.js node的入口文件中加入如下代码才能使服务器端支持跨域请求
```javascript
// 允许访问api的时候cors跨域（允许同域名不同端口号之间的跨域）
// 当工程作为API接口对外提供时，实现允许跨域访问
app.use((req,res,next)=>{
    // 增加了cors跨域的请求头
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    next();
})
```

##### 方式二：Vue有自己的跨域实现方式
+ 方式一：
+ 安装并引入vue-resource
```
npm install vue-resource --save

// 引入vue-resource
import vueResource from 'vue-resource'
Vue.use(vueResource);
```
+ 请求方式：
+ http://www.liubf.com/index.php?c=content&a=show&id=58
```javascript
// get方式：
let count=12;
let start=(movieobj.pageindex-1)*count;
let city='杭州';
let _url=`http://api.douban.com/v2/movie/${movieobj.classify}?start=${start}&count=${count}&city=${city}`
this.$http.get(_url).then(res => {
    // get body data
    this.someData = response.body;
  }, err => {
    // error callback
  });

// jsonp方式
this.$http.jsonp(_url).then(res => {
    // get body data
    this.data = res.body;
  }, err => {
    // error callback
  });

// post方式
let _obj={
    start:0,
    count:10,
    city:'',
    q:''
}
this.$http.post(_url,_obj).then(res => {
    // get body data
    this.data = res.body;
  }, err => {
    // error callback
  });
```
+ 方式二：
+ 安装并引入axios
+ https://github.com/mzabriskie/axios
+ axios也是不支持请求jsonp格式的数据的，如需请求jsonp格式的数据可以参考以下方式：
+ https://github.com/mzabriskie/axios/blob/master/COOKBOOK.md#jsonp
+ 或者直接使用fetch-jsonp的方式
```javascript
// app文件引入axios
import axios from 'axios'
Vue.prototype.$http=axios;

// get方式
this.$http.get('/user?ID=12345')
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });

// get方式二：
this.$http.get('/user', {
    params: {
        ID: 12345
    }
})
.then(function (response) {
    console.log(response);
})
.catch(function (error) {
    console.log(error);
});

// post方式：
this.$http.post('/user', {
    firstName: 'Fred',
    lastName: 'Flintstone'
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });

// 请求图片
this.$http({
  method:'get',
  url:'http://bit.ly/2mTM3nY',
  responseType:'stream'
})
.then(function(response) {
  response.data.pipe(fs.createWriteStream('ada_lovelace.jpg'))
});
```
+ Vue2.0版本推荐跨域请求使用axios方式，因为axios比vue-resource方式更干净，减少不必要的DOM操作，代码简洁，效率高，当然，如果请求第三方API是jsonp格式，则建议在server服务器端进行模拟请求然后再通过axios方式请求server服务器端

### v2版本新增node服务以及跨域访问方式以及封装httpHelper类


