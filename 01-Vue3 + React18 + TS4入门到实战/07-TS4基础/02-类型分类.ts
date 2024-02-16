let str: String = '123';

let num: Number = 347;

let bigint: BigInt = 1n;

const todo: Function = () => {
    console.log(123);
};

// 联合类型
let item: string | number = 123; // 可允许的类型

// 交叉类型
type A = {
    name: string;
};

type B = {
    age: number;
};

let a: A | B = {
    name: 'xk',
};

// 包含2种类型
let b: A & B = {
    name: 'xk',
    age: 30,
};

// never类型：永不存在的值的类型
// const never:number&string = 132;

function check(option: 1 | 2 | 3) {
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
            const n: never = option; // 检测所有的值是否都可被使用
            break;
    }
}

// any：任意类型
let any: any = 123;
any = 'se14';
any = { name: 'xk' };
any.map((x: any) => x * 2); // 不会检测

// unknown：any 类型对应的安全类型
let unknown: unknown = 'hi';
unknown = 12;
// unknown.map((x:any) => x * 2); 检测

// 类型断言
(unknown as []).map((x: any) => x * 2); // 手动指定类型

// 非空断言
let o: string | undefined = undefined;
o!.length;

const arr1: number[] = [1, 2, 3];
const arr2: Array<number> = arr1; // 泛型

// 元祖类型
const arr3: [number, string] = [1, 'hi']; // 数组个数和元素类型必须一致

// 对象类型
type People = {
    name: string;
    age?: number; // 可选项
    [index: string]: any; // 索引签名（额外的属性 ）
};

const p: People = {
    name: 'xk',
    age: 30,
    gender: 'male',
};

let obj = {} as People; // 使用 断言 支持 空对象

let json: { [index: string]: any }[] = []; // 复杂类型

// 函数类型
function foo(num: number, m?: string): number {
    // 可选项
    console.log(num);
    return num;
}
foo(132); // 实参和形参的个数必须相同

// void类型：表示函数没有如何返回值
let to = function (): void {
    console.log(123);
    return;
};

// 函数重载：传入不同参数，返回不同类型的结果
function fooo(n1: number): any;

function fooo(n1: number, n2: number): any;

function fooo(n1: number, n2: number, n3: number): any;

function fooo(n1: number, n2?: number, n3?: number): any {
    console.log('todo');
}

fooo(1);
fooo(1, 2);
fooo(1, 2, 3);

type test = () => void;
// 可调用注解
type test1 = {
    (): void; // 针对函数重载
};
let testfo: test = () => console.log(123);

// 枚举类型
enum Roles {
    SUPER_ADMIN = 'xk',
    ADMIN = 'xm',
    USER = 'xh',
}

console.log(Roles.ADMIN);

let role: Roles.ADMIN = Roles.ADMIN; // 可作为类型使用

// const 枚举，不编译为对象，优化性能

// function computed(...arg: Array<any>) {
//     return arg.reduce((n1, n2) => n1 + n2);
// }

export {};
