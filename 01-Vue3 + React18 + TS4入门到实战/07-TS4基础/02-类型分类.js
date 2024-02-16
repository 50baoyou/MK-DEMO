"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var str = '123';
var num = 347;
var bigint = 1n;
var todo = function () {
    console.log(123);
};
// 联合类型
var item = 123; // 可允许的类型
var a = {
    name: 'xk',
};
// 包含2种类型
var b = {
    name: 'xk',
    age: 30,
};
// never类型：永不存在的值的类型
// const never:number&string = 132;
function check(option) {
    switch (option) {
        case 1:
            console.log(option);
            break;
        case 2:
            console.log(option);
            break;
        case 3:
            console.log(option);
            break;
        default:
            var n = option; // 检测所有的值是否都可被使用
            break;
    }
}
// any：任意类型
var any = 123;
any = 'se14';
any = { name: 'xk' };
any.map(function (x) { return x * 2; }); // 不会检测
// unknown：any 类型对应的安全类型
var unknown = 'hi';
unknown = 12;
// unknown.map((x:any) => x * 2); 检测
// 类型断言
unknown.map(function (x) { return x * 2; }); // 手动指定类型
// 非空断言
var o = undefined;
o.length;
var arr1 = [1, 2, 3];
var arr2 = arr1; // 泛型
// 元祖类型
var arr3 = [1, 'hi']; // 数组个数和元素类型必须一致
var p = {
    name: 'xk',
    age: 30,
    gender: 'male',
};
var obj = {}; // 使用 断言 支持 空对象
var json = []; // 复杂类型
// 函数类型
function foo(num, m) {
    // 可选项
    console.log(num);
    return num;
}
foo(132); // 实参和形参的个数必须相同
// void类型：表示函数没有如何返回值
var to = function () {
    console.log(123);
    return;
};
function fooo(n1, n2, n3) {
    console.log('todo');
}
fooo(1);
fooo(1, 2);
fooo(1, 2, 3);
var testfo = function () { return console.log(123); };
// 枚举类型
var Roles;
(function (Roles) {
    Roles["SUPER_ADMIN"] = "xk";
    Roles["ADMIN"] = "xm";
    Roles["USER"] = "xh";
})(Roles || (Roles = {}));
console.log(Roles.ADMIN);
var role = Roles.ADMIN; // 可作为类型使用
