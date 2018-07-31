## bus

bus.js
```javascript
import Vue from 'vue';

export default new Vue({
  data() {
    return {
      a: 3,
    };
  },
});
```

组件A

```javascript
import bus from "../bus";

bus.$on('test', (data) => {
  alert(data.l);
  // this.l = data.l
});
```

组件B
```javascript
import bus from "../bus";

console.log(bus.a);

bus.$emit('test', {
  l:this.kk
});
```
