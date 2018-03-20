
//此外还提供了实用的枚举类型方便我们使用。

let isDone:boolean = false;

let Num:number = 12;
let hexLiteral: number = 0xf00d;
//除了支持十进制和十六进制字面量，TypeScript还支持ECMAScript 2015中引入的二进制和八进制字面量。

let str:string = 'haha';
let Name:string = 'live';
let Age:number = 123;
let RMB = ` My name is ${ Name } , i will be ${ Age } years old in next month`

   
// Array
let list:Array<string|boolean|number> = [321,'321',true] ;  //fist method
let secondList:number[] = [123,321];   //second method

//元组  Tuple  :   元组类型允许表示一个已知元素数量和类型的数组，各元素的类型不必相同
let tupleDemo:[number,string,boolean];
tupleDemo = [1,'1',true]
// tupleDemo = [1,'1',1]      false
tupleDemo = [1,'1',true]    // true,后面应该都是默认的any类型,---联合类型？是啥，与中文文档冲突......版本一致的，可能是我还没悟到.....

console.log( tupleDemo[0]  )


//枚举  :   enum类型是对JavaScript标准数据类型的一个补充。 像C#等其它语言一样，使用枚举类型可以为一组数值赋予友好的名字。
enum Color { Red = 5,'heihei' = 1,Blue } //
// let c:Color = Color.Green;
console.log( Color[5] ) //Red
console.log( Color.heihei ) //1


//Any
let notSure: any = 4;
// notSure.ifItExists(); // okay
notSure.toFixed(); // okay

let prettySure: Object = 4;  //允许随意复制，但是无法调用方法
// prettySure.toFixed(); // Error

// Void   只能是 Null 或 undefined;
function warnUser(): void {
    alert("This is my warning message");
}

//undefined 和 null
let u: undefined = undefined;
let n: null = null;
//默认情况下null和undefined是所有类型的子类型。 就是说你可以把 null和undefined赋值给number类型的变量。
//然而，当你指定了--strictNullChecks标记，null和undefined只能赋值给void和它们各自。 这能避免 很多常见的问题


// Never : 返回never的函数必须存在无法达到的终点   真的不清楚这个能用来干啥........
// function error(message: string): never {
//     throw new Error(message);
// }
// function infiniteLoop(): never {
//     while (true) {
//     }
// }


//  类型断言   类型转换   它没有运行时的影响，只是在编译阶段起作用。 TypeScript会假设你，程序员，已经进行了必须的检查。
// first method   尖括号
let someValue: any = "this is a string";
let strLength: number = (<string>someValue).length;   //

//  as 语法
let someValueA: any = "this is a string";
let strLengthA: number = (someValue as string).length;


if( someValueA ){
  let strAB = 'hahah'
}

// console.log( strAB );  //not find

//数组结构
let [first, ...rest] = [1, 2, 3, 4];
console.log(first); // outputs 1
console.log(rest); // outputs [ 2, 3, 4 ]

let [,O,,F] = [5,6,7,8];
console.log( O );

//对象结构
let v,z
({ z, v } = { z: "baz", v: 101 });

let o = {
  a:1,
  b:2,
  v:3
}
let { a,...b } = o
console.log( b )   //{ b:2,v:3 }
//对象解构----属性重命名
let { a:hei,b:ha } = o
console.log( hei,ha )
//对象解构----属性重命名----声明类型
let { a:heih,b:hah }:{ a:number,b:number } = o
console.log( hei,hah )

//默认值
function keepWholeObject(wholeObject: { a: string, b?: number }) {    //默认值可以让你在属性为 undefined 时使用缺省值,这样不传b也不会报错
    console.log(  wholeObject  );
    let { a, b = 1001 } = wholeObject;
}
keepWholeObject( { a:'heihei' } )

//函数声明
// type C = { a: string, b?: number }
// function f({ a, b }: C): void {
//     // ...
// }
function f({ a, b } = { a: "", b: 0 }): void {

}
f();
// ok, default to { a: "", b: 0 }

//-------------------解构表达式要尽量保持小而简单。




// 展开操作符
let firstA = [1, 2];
let secondA = [3, 4];
let bothPlusA = [0, ...firstA, ...secondA, 5];

let defaults = { food: "rice", price: "$10", ambiance: "noisy" };
let search = { ...defaults, food: "heihei" };
//浅拷贝展开，defaults.food会被重新

//展开对象会丢失方法

class C {
  p = 12;
  m() {
  }
}
let c = new C();
let clone = { ...c };
clone.p; // ok
// clone.m(); // error
