Backbone Demo
======

用 Yeoman 创建的 Backbone 移动 WebApp 项目示例，使用下列工具：

* Backbone - MVC库
* RequireJS - JS加载管理
* Grunt - JS任务执行
* Bower - 依赖管理

需要环境：

* Node.js 和 npm（http://nodejs.org/）
* Yeoman（http://yeoman.io/）


## 初始化

1. 克隆版本库到本地
2. 执行 `bower install` 和 `npm install` 来安装依赖
3. 执行 `grunt server` 即可启动服务器本地查看 Demo

## 开发工具

### Grunt

内置的 Grunt 任务如下（配置文件 Gruntfile.js）：

1. `grunt server` - 在 localhost 启动一个 www 服务，查看 debug 下的开发页面
2. `grunt build` - 执行 CoffeeScript 和 SASS 编译，JS压缩，CSS压缩，在 release 目录创建发布版本
3. `grunt test` - 执行测试任务
4. `grunt` - 执行 JSHint 检查，然后 grunt test，然后 grunt build 创建发布文件。

### JSHint

JSHint 用来强制约束代码规范，规则在 .jshintrc 中定义。