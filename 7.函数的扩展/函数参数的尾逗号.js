// ES2017 允许函数的最后一个参数有尾逗号（trailing comma）。

// 此前，函数定义和调用时，都不允许最后一个参数后面出现逗号。

// function clownsEverywhere(
//   param1,
//   param2
// ) { /* ... */ }

// clownsEverywhere(
//   'foo',
//   'bar'
// );
// 上面代码中，如果在param2或bar后面加一个逗号，就会报错。

// 如果像上面这样，将参数写成多行（即每个参数占据一行），以后修改代码的时候，想为函数clownsEverywhere添加第三个参数，或者调整参数的次序，就势必要在原来最后一个参数后面添加一个逗号。这对于版本管理系统来说，就会显示添加逗号的那一行也发生了变动。这看上去有点冗余，因此新的语法允许定义和调用时，尾部直接有一个逗号。

// function clownsEverywhere(
//   param1,
//   param2,
// ) { /* ... */ }

clownsEverywhere("foo", "bar");
// 这样的规定也使得，函数参数与数组和对象的尾逗号规则，保持一致了。
