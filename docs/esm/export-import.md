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

## 花括号
module a
```
export const a = 1;
export const b = 1;
export const fn = () => {};

export default {
  d: 1
};
```
module b
```
import test, { fn } from './a.js';
import React, { Component } from 'react';

test.d;
```
