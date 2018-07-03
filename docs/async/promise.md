# Promise

## Promise 是什么
为解决前端回调地狱问题，前端社区提出的一种规范设计，目前已经成为标准。

Promise 是前端异常逻辑的核心概念，比如 async function 返回 Promise 对象。

Promise 对象又三种状态：
1. pending 准备状态
2. resolved 已完成异步
3. rejected 异步失败

## 创建 Promise 对象
```javascript
const p = new Promise((resolve, reject) => {
  // 异步代码
  setTimeout(() => resolve({ a: 1 }), 500);
});

p.then((data) => console.log(data));
```
## 转换成 Promise
Promise 是前端处理异步问题的核心对象，经常需要把一些数据串联或并联到一起，就需要将普通对象转换为 Promise 对象。

1. Promise.resolve 将对象转换为 resolved 状态
2. Promise.reject 将对象转换为 rejected 状态

```javascript
const p = Promise.resolve({ a: 1 });
p.then((data) => console.log(data));
```

```javascript
const p = Promise.reject({ a: 1 });
p.catch(err => console.log(err));
```
## 串行调用
在 Promise 对象的 then 函数中返回一个新的 Promise 对象，将会串联执行这些 Promise 对象。

```javascript
Promise.resolve({ a: 1 })
.then(data => {
  return Promise.resolve({
    ...data,
    b: 1,
  })
})
.then(data => {
  return Promise.resolve({
    ...data,
    c: 1,
  })
})
.then(data => console.log(data));
```
## 并行调用
一般使用 Promise.all 方法组合多个 Promise 对象

```javascript
const p1 = Promise.resolve({ a: 1 });
const p2 = Promise.resolve({ b: 1 });
const p3 = Promise.resolve({ c: 1 });

Promise.all([ p1, p2, p3 ])
.then(data => {
  const [ data1, data2, data3 ] = data;
  console.log(
    {
      ...data1,
      ...data2,
      ...data3,
    }
  );
});
```
## Promise 的异常处理
对比创建 Promise 的代码，当异步代码发生异常时，比如后端接口报错，可以通过 reject 报错。

```javascript
const p = new Promise((resolve, reject) => {
  // 异步代码
  setTimeout(() => reject({ error: 'http error' }), 500);
});

p.catch((data) => console.log(data));
```