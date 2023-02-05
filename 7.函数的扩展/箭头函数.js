let getTramItem = (id) => ({
  id: id,
  uname: "Temp",
});

// console.log(getTramItem());

Person = {
  firstName: "LONG",
  lastName: "You",
};

const full = ({ firstName, lastName }) => {
  //   console.log(`${firstName},${lastName}`);
  console.log(arguments);
};

full(Person);

// 箭头函数
// 基本用法
// ES6 允许使用“箭头”（=>）定义函数。

// var f = v => v;

// // 等同于
// var f = function (v) {
//   return v;
// };
// 如果箭头函数不需要参数或需要多个参数，就使用一个圆括号代表参数部分。

// var f = () => 5;
// // 等同于
// var f = function () { return 5 };

// var sum = (num1, num2) => num1 + num2;
// // 等同于
// var sum = function(num1, num2) {
//   return num1 + num2;
// };
// 如果箭头函数的代码块部分多于一条语句，就要使用大括号将它们括起来，并且使用return语句返回。

// var sum = (num1, num2) => { return num1 + num2; }
// 由于大括号被解释为代码块，所以如果箭头函数直接返回一个对象，必须在对象外面加上括号，否则会报错。

// // 报错
// let getTempItem = id => { id: id, name: "Temp" };

// // 不报错
// let getTempItem = id => ({ id: id, name: "Temp" });
// 下面是一种特殊情况，虽然可以运行，但会得到错误的结果。

// let foo = () => { a: 1 };
// foo() // undefined
// 上面代码中，原始意图是返回一个对象{ a: 1 }，但是由于引擎认为大括号是代码块，所以执行了一行语句a: 1。这时，a可以被解释为语句的标签，因此实际执行的语句是1;，然后函数就结束了，没有返回值。

// 如果箭头函数只有一行语句，且不需要返回值，可以采用下面的写法，就不用写大括号了。

// let fn = () => void doesNotReturn();
// 箭头函数可以与变量解构结合使用。

// const full = ({ first, last }) => first + ' ' + last;

// // 等同于
// function full(person) {
//   return person.first + ' ' + person.last;
// }
// 箭头函数使得表达更加简洁。

// const isEven = n => n % 2 === 0;
// const square = n => n * n;
// 上面代码只用了两行，就定义了两个简单的工具函数。如果不用箭头函数，可能就要占用多行，而且还不如现在这样写醒目。

// 箭头函数的一个用处是简化回调函数。

// // 普通函数写法
// [1,2,3].map(function (x) {
//   return x * x;
// });

// // 箭头函数写法
// [1,2,3].map(x => x * x);
// 另一个例子是

// // 普通函数写法
// var result = values.sort(function (a, b) {
//   return a - b;
// });

// // 箭头函数写法
// var result = values.sort((a, b) => a - b);
// 下面是 rest 参数与箭头函数结合的例子。

// const numbers = (...nums) => nums;

// numbers(1, 2, 3, 4, 5)
// // [1,2,3,4,5]

// const headAndTail = (head, ...tail) => [head, tail];

// headAndTail(1, 2, 3, 4, 5)
//  [1,[2,3,4,5]]

// 使用注意点
// 箭头函数有几个使用注意点。

// （1）箭头函数没有自己的this对象（详见下文）。

// （2）不可以当作构造函数，也就是说，不可以对箭头函数使用new命令，否则会抛出一个错误。

// （3）不可以使用arguments对象，该对象在函数体内不存在。如果要用，可以用 rest 参数代替。

// （4）不可以使用yield命令，因此箭头函数不能用作 Generator 函数。

// 上面四点中，最重要的是第一点。对于普通函数来说，内部的this指向函数运行时所在的对象，但是这一点对箭头函数不成立。它没有自己的this对象，内部的this就是定义时上层作用域中的this。也就是说，箭头函数内部的this指向是固定的，相比之下，普通函数的this指向是可变的。

// function foo() {
//   setTimeout(() => {
//     console.log('id:', this.id);
//   }, 100);
// }

// var id = 21;

// foo.call({ id: 42 });
// // id: 42
// 上面代码中，setTimeout()的参数是一个箭头函数，这个箭头函数的定义生效是在foo函数生成时，而它的真正执行要等到 100 毫秒后。如果是普通函数，执行时this应该指向全局对象window，这时应该输出21。但是，箭头函数导致this总是指向函数定义生效时所在的对象（本例是{id: 42}），所以打印出来的是42。

// 下面例子是回调函数分别为箭头函数和普通函数，对比它们内部的this指向。

// function Timer() {
//   this.s1 = 0;
//   this.s2 = 0;
//   // 箭头函数
//   setInterval(() => this.s1++, 1000);
//   // 普通函数
//   setInterval(function () {
//     this.s2++;
//   }, 1000);
// }

// var timer = new Timer();

// setTimeout(() => console.log('s1: ', timer.s1), 3100);
// setTimeout(() => console.log('s2: ', timer.s2), 3100);
// // s1: 3
// // s2: 0
// 上面代码中，Timer函数内部设置了两个定时器，分别使用了箭头函数和普通函数。前者的this绑定定义时所在的作用域（即Timer函数），后者的this指向运行时所在的作用域（即全局对象）。所以，3100 毫秒之后，timer.s1被更新了 3 次，而timer.s2一次都没更新。

// 箭头函数实际上可以让this指向固定化，绑定this使得它不再可变，这种特性很有利于封装回调函数。下面是一个例子，DOM 事件的回调函数封装在一个对象里面。

// var handler = {
//   id: '123456',

//   init: function() {
//     document.addEventListener('click',
//       event => this.doSomething(event.type), false);
//   },

//   doSomething: function(type) {
//     console.log('Handling ' + type  + ' for ' + this.id);
//   }
// };
// 上面代码的init()方法中，使用了箭头函数，这导致这个箭头函数里面的this，总是指向handler对象。如果回调函数是普通函数，那么运行this.doSomething()这一行会报错，因为此时this指向document对象。

// 总之，箭头函数根本没有自己的this，导致内部的this就是外层代码块的this。正是因为它没有this，所以也就不能用作构造函数。

// 下面是 Babel 转箭头函数产生的 ES5 代码，就能清楚地说明this的指向。

// // ES6
// function foo() {
//   setTimeout(() => {
//     console.log('id:', this.id);
//   }, 100);
// }

// // ES5
// function foo() {
//   var _this = this;

//   setTimeout(function () {
//     console.log('id:', _this.id);
//   }, 100);
// }
// 上面代码中，转换后的 ES5 版本清楚地说明了，箭头函数里面根本没有自己的this，而是引用外层的this。

// 请问下面的代码之中，this的指向有几个？

// function foo() {
//   return () => {
//     return () => {
//       return () => {
//         console.log('id:', this.id);
//       };
//     };
//   };
// }

// var f = foo.call({id: 1});

// var t1 = f.call({id: 2})()(); // id: 1
// var t2 = f().call({id: 3})(); // id: 1
// var t3 = f()().call({id: 4}); // id: 1
// 答案是this的指向只有一个，就是函数foo的this，这是因为所有的内层函数都是箭头函数，都没有自己的this，它们的this其实都是最外层foo函数的this。所以不管怎么嵌套，t1、t2、t3都输出同样的结果。如果这个例子的所有内层函数都写成普通函数，那么每个函数的this都指向运行时所在的不同对象。

// 除了this，以下三个变量在箭头函数之中也是不存在的，指向外层函数的对应变量：arguments、super、new.target。

// function foo() {
//   setTimeout(() => {
//     console.log('args:', arguments);
//   }, 100);
// }

// foo(2, 4, 6, 8)
// // args: [2, 4, 6, 8]
// 上面代码中，箭头函数内部的变量arguments，其实是函数foo的arguments变量。

// 另外，由于箭头函数没有自己的this，所以当然也就不能用call()、apply()、bind()这些方法去改变this的指向。

// (function() {
//   return [
//     (() => this.x).bind({ x: 'inner' })()
//   ];
// }).call({ x: 'outer' });
// // ['outer']
// 上面代码中，箭头函数没有自己的this，所以bind方法无效，内部的this指向外部的this。

// 长期以来，JavaScript 语言的this对象一直是一个令人头痛的问题，在对象方法中使用this，必须非常小心。箭头函数”绑定”this，很大程度上解决了这个困扰。


// 不适用场合
// 由于箭头函数使得this从“动态”变成“静态”，下面两个场合不应该使用箭头函数。

// 第一个场合是定义对象的方法，且该方法内部包括this。

// const cat = {
//   lives: 9,
//   jumps: () => {
//     this.lives--;
//   }
// }
// 上面代码中，cat.jumps()方法是一个箭头函数，这是错误的。调用cat.jumps()时，如果是普通函数，该方法内部的this指向cat；如果写成上面那样的箭头函数，使得this指向全局对象，因此不会得到预期结果。这是因为对象不构成单独的作用域，导致jumps箭头函数定义时的作用域就是全局作用域。

// 再看一个例子。

// globalThis.s = 21;

// const obj = {
//   s: 42,
//   m: () => console.log(this.s)
// };

// obj.m() // 21
// 上面例子中，obj.m()使用箭头函数定义。JavaScript 引擎的处理方法是，先在全局空间生成这个箭头函数，然后赋值给obj.m，这导致箭头函数内部的this指向全局对象，所以obj.m()输出的是全局空间的21，而不是对象内部的42。上面的代码实际上等同于下面的代码。

// globalThis.s = 21;
// globalThis.m = () => console.log(this.s);

// const obj = {
//   s: 42,
//   m: globalThis.m
// };

// obj.m() // 21
// 由于上面这个原因，对象的属性建议使用传统的写法定义，不要用箭头函数定义。

// 第二个场合是需要动态this的时候，也不应使用箭头函数。

// var button = document.getElementById('press');
// button.addEventListener('click', () => {
//   this.classList.toggle('on');
// });
// 上面代码运行时，点击按钮会报错，因为button的监听函数是一个箭头函数，导致里面的this就是全局对象。如果改成普通函数，this就会动态指向被点击的按钮对象。

// 另外，如果函数体很复杂，有许多行，或者函数内部有大量的读写操作，不单纯是为了计算值，这时也不应该使用箭头函数，而是要使用普通函数，这样可以提高代码可读性。

// 嵌套的箭头函数
