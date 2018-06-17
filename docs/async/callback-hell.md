# 回调地狱

## 回调函数
```javascript
function ajax(url, callback) {}
```

```javascript
ajax('/path/to/api1', (json) => {
  console.log(json);
});
```

## 多级回调带来的问题
在实际业务中，多个接口直接往往存在依赖关系，一个接口的参数需要另一个接口的返回结果。

```javascript
ajax('/path/to/api1', (json) => {
  ajax(`/path/to/api2/${json.param}`, (json) => {
    ajax(`/path/to/api3/${json.param}`, (json) => {
      ajax(`/path/to/api4/${json.param}`, (json) => {
        // 终于
        console.log(json);
      });
    });
  });
});
```

向上面的代码，如果多个异步直接有同步依赖关系，会带来回调地狱问题：

1. 代码可读性差，难以理解业务流程。
2. 可维护性差
