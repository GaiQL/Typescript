

//   一个常见的任务是将一个已知的类型每个属性都变为可选的：  或只读
interface PersonPartial {
    name?: string;
    age?: number;
}
interface PersonReadonly {
    readonly name: string;
    readonly age: number;
}

//   TypeScript提供了从旧类型中创建新类型的一种方式 — 映射类型



//  新类型以相同的形式去转换旧类型里每个属性。 例如，你可以令每个属性成为 readonly类型或可选的;
interface Person{
  name:string;
  age:number;
}

type Readonlyz<T> = {
    readonly [P in keyof T]: T[P];
}
type Partialz<T> = {
    [P in keyof T]?: T[P];
}

type PersonPartialz = Partial<Person>;
type ReadonlyPerson = Readonly<Person>;

let PersonPartialzzzz:PersonPartialz = {
  name:'zzzzz'
};
PersonPartialzzzz.age = 123;
let ReadonlyPersonzzzz:ReadonlyPerson = {
  name:'zzzzz',
  age:123
};
// ReadonlyPersonzzzz.age = 321;  //error 只读


//最简单的映射类型和它的组成部分：
type Keys = 'option1' | 'option2';
type Flags = { [K in Keys]: boolean };
/*
    type Flags = {
        option1: boolean;
        option2: boolean;
    }
*/
let flagss:Flags = { option1:true,option2:false };

// 它的语法与索引签名的语法类型，内部使用了 for .. in。 具有三个部分：
/*
        1、类型变量 K，它会依次绑定到每个属性。
        2、字符串字面量联合的 Keys，它包含了要迭代的属性名的集合。
        3、属性的结果类型。
*/


// 在真正的应用中：它们会基于一些已存在的类型，且按照一定的方式转换字段。
// 这就是 keyof和索引访问类型要做的事情：
type NullablePerson = { [P in keyof Person]: Person[P] | null }
type PartialPerson = { [P in keyof Person]?: Person[P] }
//更加通用的版本：
type NullablePersonz<T> = { [P in keyof T]:T[P] | null };
type NullablePersonx<T> = { [P in keyof T]?:T[P] };


//  同态
type Pickq<T, K extends keyof T> = {
    [P in K]: T[P];
}
//  不属于同态    非同态类型本质上会创建新的属性，因此它们不会从它处拷贝属性修饰符。
type Recordq<K extends string, T> = {
    [P in K]: T;
}
type ThreeStringProps = Recordq<'prop1' | 'prop2' | 'prop3', string>
let hello : ThreeStringProps = {
  prop1:'123',
  prop2:'123',
  prop3:'123',
}

//  由映射类型进行推断:  拆包：

type Proxy<T> = {
    get(): T;
    set(value: T): void;
}
type Proxify<T> = {
    [P in keyof T]: Proxy<T[P]>;
}
// {
//   name:{
//     get:
//     set:
//   }
//   age:{}
//   bol:{}
// }
function unproxify<T>(t: Proxify<T>): T {
    let result = {} as T;
    for (const k in t) {
        result[k] = t[k].get();
    }
    return result;
}
let proxyProps = {
  //  有句MMP不知当讲不当讲啊...  我靠！！咋试都试不出来！！
}
let originalProps = unproxify(proxyProps);

console.log( originalProps );
//    注意这个拆包推断只适用于同态的映射类型。
//    如果映射类型不是同态的，那么需要给拆包函数一个明确的类型参数。
