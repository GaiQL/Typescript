
// 类型 兼容性：
interface Named {
    name: string;
}

class Person {
    name: string;
}

let p: Named;
// OK, because of structural typing
p.name = '123';
p = new Person();   //这个对象下是有name：string的


//    关于可靠性的注意事项

/*
      当一个类型系统具此属性时，被当做是“不可靠”的。
      类型系统允许某些在编译阶段无法确认其安全性的操作。

*/


interface Named {
    name: string;
}

let x: Named;
let y = { name: 'Alice', location: 'Seattle' };   //y中有name字符串，是可以实现Named这个接口
x = y;

function greet( name:Named ){
  console.log( name )
}
// greet({ name:'123',age:321 });    直接传值会检查所有的属性和数量必须一致
greet( y );
//  只有目标类型（这里是 Named）的成员会被一一检查是否兼容。  这个比较过程是递归进行的，检查每个成员及子成员。


//  比较两个函数：
//  首先看它们的参数列表   :  x的每个参数必须能在y里找到对应类型的参数。 注意的是参数的名字相同与否无所谓，只看它们的类型。
//


let q = (a: number) => 0;
let w = (b: number, s: string) => 0;

w = q; // OK         w 中包含 q 的实现
// q = w; // Error      q 中不包含 w 的实现     因为y有个必需的第二个参数，但是x并没有

function trya( args: any[], callback: (...args: any[]) => void ){
  console.log( name )
}
let heihei = 123;
trya( [1,2,3],()=>{} );

interface Age {
    age:number,
    name:string
}

//实现接口里的内容；
class H implements Age{
  age:number
  name:string
  hi:number
}


//  类型系统强制源函数的返回值类型必须是目标函数返回值类型的子类型。
let e = () => ({name: 'Alice'});
let r = () => ({name: 'Alice', location: 'Seattle'});

e = r; // OK
// r = e; // Error because x() lacks a location property


//  函数参数双向协变   看了半天例子没看懂.....罢了罢了，回头再悟。

//   可选参数及剩余参数
function invokeLater(args: any[], callback: (...args: any[]) => void) {
    callback();
    /* ... Invoke callback with 'args' ... */
}

// Unsound - invokeLater "might" provide any number of arguments
invokeLater([1, 2,3,4], (x, y) => console.log(x + ', ' + y));

// Confusing (x and y are actually required) and undiscoverable
invokeLater([1, 2], (x?, y?) => console.log(x + ', ' + y));


// 函数重载:
//    对于有重载的函数，源函数的每个重载都要在目标函数上找到对应的函数签名。 这确保了目标函数可以在所有源函数可调用的地方调用。

//  枚举:
//      枚举类型与数字类型兼容，并且数字类型与枚举类型兼容。不同枚举类型之间是不兼容的

enum Status { Ready, Waiting };
enum Color { Red, Blue, Green };

let num:number = 123;
let statusa = Status.Ready;
statusa = num;
// statusa = Color.Green;  //error

//类   :   类有静态部分和实例部分的类型。 比较两个类类型的对象时，只有实例的成员会被比较。 静态成员和构造函数不在比较的范围内。
//   类的构造函数属于静态部分；

class Animal {
    feet: number;
    constructor(name: string, numFeet: number) { }
}

class Size {
    feet: number;
    constructor(numFeet: number) { }
}

let a: Animal;
let s: Size;

a = s;
s = a;

// 类的私有成员 : 私有成员会影响兼容性判断。
// 当类的实例用来检查兼容时，如果目标类型包含一个私有成员，那么源类型必须包含来自同一个类的这个私有成员。
// 这允许子类赋值给父类，但是不能赋值给其它有同样类型的类。

//   泛型:  因为TypeScript是结构性的类型系统，类型参数只影响使用其做为类型一部分的结果类型

interface Empty<T> {
  // data:T   //T被使用后，f与g不再兼容，没有使用前默认为any，使用后类型被定义
}
let f: Empty<number>;
let g: Empty<string>;

f = g;

let identityA = function<C>(x: C): C {
    // ...
    return
}

let reverseA = function<U>(y: U): U {
    // ...
    return
}

identityA = reverseA;  // Okay because (x: any)=>any matches (y: any)=>any

// 高级主题
// 子类型与赋值         赋值扩展了子类型兼容
