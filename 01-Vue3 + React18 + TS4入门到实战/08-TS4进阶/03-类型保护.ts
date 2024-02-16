// 类型保护

function foo1(parm: string | number) {
    if (typeof parm === 'string') {
        console.log(parm.length);
    }
}

function foo2(parm: { username: string } | { age: number }) {
    if ('username' in parm) {
        console.log(parm.username.length);
    }
}

class A {
    username: string = 'xk';
}

class B {
    age: number = 30;
}

// instanceof 用于检查一个对象是否是一个类的实例
function foo3(parm: A | B) {
    if (parm instanceof A) {
        console.log(parm.username.length);
    }
}

function foo4(parm: 'abcd' | 123) {
    if (parm === 'abcd') {
        console.log(parm.length);
    }
}

// is 是一个类型谓词（Type Predicate），它用于判断一个值是否属于某个特定类型
function isString(n: any): n is string {
    return typeof n === 'string';
}

function foo5(parm: string | number) {
    if (isString(parm)) {
        console.log(parm.length);
    }
}

export {};
