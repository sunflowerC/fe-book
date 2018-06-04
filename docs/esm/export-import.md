# 基本导入导出

## 对象
1、导出 a.js
```javascript
export default {
  a: 1,
};
```

2、导入
```javascript
import obj from './a';

console.log(obj.a); // 1
```

## 函数
1、导出 fn.js
```javascript
export default () = {
  return { b: 2 };
};
```

2、导入 fn.js
```javascript
import fn from './fn';

console.log(fn().b ); // 2
```
