// 多泛型
type A<T, U> = T | U;

let a: A<string, number> = 'xl';

// 默认值
type B<T = string> = T;
let b: B = 'xll';

type MyArray<T> = T[];
let c: MyArray<number> = [1, 23, 3];
let d: number[] = [1, 23, 3];

// 函数
function foo<T>(n: T) {}
foo<string>('1234');
foo('xk'); // 类型自动推断

// 函数与泛型结合
interface Test<T> {
    (index?: T): void;
}

const test: Test<string> = (parm) => {
    console.log(parm);
};

// test(123);
test('123');

// 类与泛型结合
class User<T> {
    name!: T;
}
let user = new User<string>();
user.name = '132';

export {};
