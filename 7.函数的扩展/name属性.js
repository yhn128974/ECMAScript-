let abc = function () {
  console.log("abc");
};
// console.log(abc.name);

const bar = function func() {};
console.log(bar.name); // ES5,ES6

// name 属性
// 函数的name属性，返回该函数的函数名。

// function foo() {}
// foo.name // "foo"
// 这个属性早就被浏览器广泛支持，但是直到 ES6，才将其写入了标准。

// 需要注意的是，ES6 对这个属性的行为做出了一些修改。如果将一个匿名函数赋值给一个变量，ES5 的name属性，会返回空字符串，而 ES6 的name属性会返回实际的函数名。

// var f = function () {};

// // ES5
// f.name // ""

// // ES6
// f.name // "f"
// 上面代码中，变量f等于一个匿名函数，ES5 和 ES6 的name属性返回的值不一样。

// 如果将一个具名函数赋值给一个变量，则 ES5 和 ES6 的name属性都返回这个具名函数原本的名字。

// const bar = function baz() {};

// // ES5
// bar.name // "baz"

// // ES6
// bar.name // "baz"
// Function构造函数返回的函数实例，name属性的值为anonymous。

// (new Function).name // "anonymous"
// bind返回的函数，name属性值会加上bound前缀。

// function foo() {};
// foo.bind({}).name // "bound foo"

// (function(){}).bind({}).name // "bound
