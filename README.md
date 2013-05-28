Backbone Demo
======

用 Yeoman 创建的 Backbone 移动 WebApp 项目示例，包含以下内容：

* Backbone - MVC库
* RequireJS - JS加载管理
* Grunt - 自动化任务执行
* Bower - 依赖管理

辅助工具所需环境：

* Node.js 和 npm（ http://nodejs.org/ ）
* Yeoman（ http://yeoman.io/ ）


## 初始化

1. 克隆版本库到本地
2. 执行 `bower install` 和 `npm install` 来安装依赖
3. 执行 `grunt server` 即可启动服务器本地查看 Demo

## 配套工具

### Grunt

[Grunt](http://gruntjs.com/) 是一个基于Node环境的自动化任务执行工具。此项目中已经配置好的 Grunt 任务如下（配置文件为 Gruntfile.js）：

1. `grunt server` - 在 localhost 启动一个 www 服务，查看 debug 下的开发页面 <sup>注释1</sup>
2. `grunt build` - 执行 CoffeeScript 和 SASS 编译，JS压缩，CSS压缩，在 release 目录创建发布版本
3. `grunt test` - 执行测试任务
4. `grunt` - 执行 JSHint 检查，然后 grunt test，然后 grunt build 创建发布文件。

<sup>注释1</sup> `grunt server` 运行期间，会通过 livereload 监控目录下的文件修改，在任意IDE中保存文件之后都能自动刷新页面 —— 方便的测试工具 :D

### Bower

[Bower](http://bower.io/) 用于管理前端JS库的依赖。

`bower list` 命令可以查看当前已安装的库：
```shell
$ bower list
bower discover Please wait while newer package versions are being discovered
usebb
├── backbone-amd#1.0.0
├── jquery#2.0.0 (2.0.1 now available)
├── modernizr#2.6.2
├── requirejs#2.1.6
├── requirejs-text#2.0.6
└── underscore-amd#1.4.4
```
如上所示列出了安装的库，咦，jQuery 有了 2.0.1 版本可以更新：
```shell
bower install jquery
```
更新库之后的好习惯是去冲杯咖啡，同时跑下自动测试：
```shell
grunt test
```

### JSHint

[JSHint](http://www.jshint.com/) 用来强制约束代码规范，规则在 .jshintrc 中定义。  

> 警告：**JSHint will hurt your feelings**

所有人初次使用都会很难过的，别紧张……慢慢改，挺过去就好了（而且我已经把一些太变态的配置关掉了 XD）

### EditorConfig

[EditorConfig](http://editorconfig.org/) 可以在项目中指定共通的代码规范，支持此功能的 IDE 可以识别 .editorconfig 文件并应用在项目中。

## 我只想做个WebApp而已干嘛搞这么复杂

Paul Irish ([Web Application Development Workflow #51](https://dl.dropboxusercontent.com/u/39519/talks/html5dc-workflow/index.html#51)):  
![If you're repeating yourself](https://f.cloud.github.com/assets/215282/567659/17cd9816-c6bc-11e2-998b-f4336db8a8b1.png)
