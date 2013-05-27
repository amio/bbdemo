Backbone Demo
======

用 Yeoman 创建的 Backbone 移动 WebApp 项目示例，使用下列工具：

* Backbone - MVC库
* RequireJS - JS加载管理
* Grunt - 自动化任务执行
* Bower - 依赖管理

需要环境：

* Node.js 和 npm（ http://nodejs.org/ ）
* Yeoman（ http://yeoman.io/ ）


## 初始化

1. 克隆版本库到本地
2. 执行 `bower install` 和 `npm install` 来安装依赖
3. 执行 `grunt server` 即可启动服务器本地查看 Demo

## 开发工具

### Grunt

内置的 Grunt 任务如下（配置文件为 Gruntfile.js）：

1. `grunt server` - 在 localhost 启动一个 www 服务，查看 debug 下的开发页面 <sup>注释1</sup>
2. `grunt build` - 执行 CoffeeScript 和 SASS 编译，JS压缩，CSS压缩，在 release 目录创建发布版本
3. `grunt test` - 执行测试任务
4. `grunt` - 执行 JSHint 检查，然后 grunt test，然后 grunt build 创建发布文件。

<sup>注释1</sup> `grunt server` 运行期间，会通过 livereload 监控目录下的文件修改，在任意IDE中保存文件之后都能自动刷新页面 —— 好用的调试工具。


### JSHint

JSHint 用来强制约束代码规范，规则在 .jshintrc 中定义。  

需要提醒的是：JSHint will hurt your feelings  
所有人初次使用都会很难过的，别紧张……慢慢改，挺过去就好了（而且我已经把一些太变态的配置关掉了 XD）

### EditorConfig

EditorConfig 可以在项目中指定共通的代码规范，支持此功能的 IDE 可以识别 .editorconfig 文件并应用在项目中。

## 我只想做个WebApp而已干嘛要搞这么复杂

Paul Irish ([Web Application Development Workflow #51](https://dl.dropboxusercontent.com/u/39519/talks/html5dc-workflow/index.html#51)):  

> If you're repeating yourself  
> chances are someone's written software to automate it  
> and if they haven't, you're about to.