function debounce(fn) {
  let timeout = null;
  return function() {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      fn.apply(this, arguments);
    }, 500)
  }
}
function sayHi() {
  console.log('防抖成功');
}

debounce(sayHi)


var name = '小王', age = 17;
var obj = {
  name: '小张',
  objAge: this.age,
  myFun: function(fm,t) {
    console.log( this.name + '年龄' + this.age,'来自'+ fm+ '去往'+t);
  }
}
var db = {
  name: '德玛',
  age: 99,
}

obj.myFun.call(db,'T','M')
obj.myFun.apply(db,['T','M'])
obj.myFun.bind(db,'T','M')()


const s = new Set();
console.log(s);
[2,3,5,4,5,2,2].forEach(x => s.add(x))
console.log(s);
for (let i of s) {
  console.log(i);
}

const set = new Set([1,2,3,4,4,4,4,4,4,4]);
console.log([...set]);

const car = { make: 'Honda', model: 'Accord', year: 1998 };

delete car.make;
if ('make' in car === false) {
  car.make = 'Suzuki';
}

console.log(car.make);

const obj = {a: 100, b: 200}
with(obj) {
  console.log(obj.a);
  console.log(obj.b);
  console.log(obj.c);
}
