# vue 全家桶

## 一、vue 基础
### 理解数据驱动
### 理解组件化思想

## 二、vue cli
### 创建项目

## 三、eslint
1. 编辑阶段：编辑器配置 eslint 插件，项目中安装 airbnb javascript 规范；
2. 编译阶段：设置保存文件时，检查语言规范；

## 四、组件之间通信方式
### 子向父
1. @click="$emit('aaa','1'，'2')"
2. 在 methods 中的方法，需要用 this.$emit

### 兄弟组件： 消息总线bus
1. 在项目中安装 vue-events 模块

## 五、使用 slot 分发内容
### 默认 slot
### 具名 slot
### slot-scope 为插槽中的内容提供数据 

## 六、vue-router https://router.vuejs.org/
### 两种模式：hash or histroy
### 基本路由
### 路由传递参数
### 路由钩子函数
### 嵌套路由

## 七、组件库 iView https://www.iviewui.com/
### 全量引入
### 按需引入
