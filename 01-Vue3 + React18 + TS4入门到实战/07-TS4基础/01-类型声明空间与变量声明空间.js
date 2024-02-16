// 类型注解
var a = 'hello!!!'; // 强制类型
// a = 123;
a = 'hi';
// 类型推断
var b = 123;
// b = a; 自动类型注解
console.log(a);
var Item = /** @class */ (function () {
    function Item() {
    }
    return Item;
}());
