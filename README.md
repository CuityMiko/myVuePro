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
+ 运行:npm run start
### 将md文件生成html页面
+ 运行 i5ting_toc -f README.md 命令
+ 在生成的preview目录中运行http服务器查看md文件生成的html页面
+ hs -o -p8020
### v1版本引入element-ui框架的使用
