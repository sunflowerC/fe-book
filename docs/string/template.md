# 模版字符串

```javascript
const title = '用户信息';

const user = {
  name: 'hh',
  email: 'hh@dd.com',
};

const tpl = `
<h3>${title}</h3>
<ul>
  <li>${user.name}</li>
  <li>${user.email}</li>
</ul>
`;
```

[参考](http://es6.ch-un.com/#string)