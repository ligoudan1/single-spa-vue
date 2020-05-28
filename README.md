# 基于single-spa的vue项目
整个项目采用vue框架,外层总体框架是vue,内部也是vue;

运行项目:

`` npm install:all``

``npm run start ``

框架项目运行在8080端口,子项目1运行在3000端口,子项目2运行在3001端口,请确认端口不冲突.

已完成:
1.全局组件通信,使用redux和原生window.dispatchEvent方式(已知问题:redux只能传递值,不能监听store的变化)
2.全局国际化
