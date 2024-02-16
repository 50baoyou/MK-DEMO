type A = {
    name: string;
    age: number;
};

type B<T> = {
    // [name] : A[name]
    readonly [index in keyof T]: T[index];
};

type C = B<A>;

interface NumberDictionary {
    [index: string]: number | string;
    length: number; // 可以，length是number类型
    name: string; // 错误，`name`的类型与索引类型返回值的类型不匹配
}

let test: NumberDictionary = {
    length: 10,
    name: '123',
    [1]: 1,
};



export {};
