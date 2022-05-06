```json
{
    "name": "",//名字
    "version": "",//版本
    "description": "",//描述信息
    "keywords": "",//关键词、数组
    "main": "",//指定加载的入口文件
    "script": {//指定运行脚本命令
        "start": "",
        "test": ""
    },
    "author": "",//作者（姓名 邮箱 地址）
    "bugs": {//反馈所存在问题
        "url": "",
        "email": ""
    },
    "files": [],//模块下的文件名或文件夹名
    "license": "ISC",//包的开源协议名称
    "licenses": [//多个包的开源协议名称
        {
            "type": "",
            "url": ""
        }
    ],
    "config": {//添加运行命令行的环境变量
        "port": "8080"
    },
    "engines": {//指明该模块的运行平台，限制node的版本
        "node": ">=0.10.3 <0.1"
    },
    "os": ["linux", "win64"],//指定在哪个操作系统运行
    "cpu": ["x64", "ia32"],//限制只能在某种架构的cpu下运行
    "private": true,//true  在npm平台上拒绝发布  防止一个私有模块发出去
    "publishConfig": {//特定模块发布到特定的npm库
        "tag": "1.0.0",
        "registry": "https://www.npmjs.com/package/domesy-cli",
        "access": "public"
    },
    "repository": {//包的存放地址
        "type": "git",
        "url": "https://github.com/DomeSy",
        "directory": "描述话语"
    },
    "preferGlobal": false,//表示用户不将此模块设置为全局的模块
    "dependencies": {},//项目所需的运行模块
    "devDependencies": {},//开发所需要的模块
    "peerDependencies": {},//供插件指定其工具版本
    "optionalDependencies": {},//无论下载成功失败都不影响npm install
    "bundledDependencies": true,//指定打包时一起打包的依赖
    "browserslist": {//在项目中提供共享的浏览器支持信息，针对浏览器信息采取不同的编译（兼容不同平台）
        ">0.2%",
      "not dead",
      "not op_mini all"
    },
    "development":{
        "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    },
    "bin": { "domesy": "bin/domesy.js" },//指定内部命令对应的可执行文件的位置
    "directories":{},//展示项目的目录结构
}
```
