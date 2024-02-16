interface User {
    // 只读
    readonly name: string;
    age: number;
}

let demo: User = {
    name: 'xk',
    age: 30,
};

// 1
type A = string;
let a: A = '123';

// interface B string 只能写对象

// 2
interface B {
    name: string;
}

interface B {
    age: number;
}

// 接口合并
let b: B = {
    name: 'xk',
    age: 30,
};

// 3
interface C {
    name: string;
}

interface D extends C {
    age: number;
}

// 接口继承
let d: D = {
    name: 'xk',
    age: 30,
};

// 4
type E = {
    [index in 'name' | 'age']: string;
};

let e: E = {
    name: 'xk',
    age: '30',
};

export {};
