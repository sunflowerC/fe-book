// 原型链继承
// TODO

// 定义类
class MyPromise {
  constructor(name, num) {
    console.log('init');
    // 属性
    this.name = name;
    this.legs = num;
  }

  // 方法
  myThen() {
    console.log(this.name);
    console.log(this.legs);
    console.log('myThen');
  }

  myCatch() {
    console.log('myCatch');
  }
}

// 创建实例
const p = new MyPromise('promiseA', 2);
p.myThen();
p.myCatch();





class People {
  constructor(name) {
    this.name = name;
  }

  say() {
    console.log(this.name);
  }
}

class Teacher extends People {
  constructor(name) {
    super(name);
  }

  say() {
    console.log(`Teacher ${ this.name }`);
  }
}

const teacher = new Teacher('hh');
teacher.say();