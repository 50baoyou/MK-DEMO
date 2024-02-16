// 联合类型 表示值可能是这些类型中的任何一种的值
function printId(id: number | string) {
    console.log('Your ID is: ' + id);
}

type A = 1 | 2;

let a: A = 2; // 必须符合指定值

interface B {
    name: string;
    age: number;
}

// keyof B -> 'name' | 'age'
let b: keyof B = 'age';

export {};
