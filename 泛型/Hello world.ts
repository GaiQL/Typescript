

/*
我们需要一种方法使返回值的类型与传入参数的类型是相同的。
这里，我们使用了 类型变量，它是一种特殊的变量，只用于表示类型而不是值。
*/

function identity<T>( any:T ):T{
  return any
}

//使用：
// method one   <>明确类型，一些极复杂的情况下可能会用到....
// console.log( identity<string,number>( '123' ) );
// method two   编译器根据传入值类型推断。
console.log( identity( '123' ) );


//泛型变量  :  数组里面可以有任何类型的值；
function loggingIdentity<T>( any:T[] ):T[]{
  console.log( any.length );
  return any
}
loggingIdentity( ['123',123,321,true,{ heihie:123 }] )
//or
function loggingIdentityS<T>( any:Array<T> ):Array<T>{
  return any
}
loggingIdentityS( ['123',123,321,true,{ heihie:123 }] )


//泛型类型  ：  函数本身类型，以及如何创建泛型接口
interface GenericIdentityFna {
    <U>(argX: U): U;
    <T>(arg: T): T;
}

function identitya<T>(arg: T): T {
    return arg;
}

let myIdentitya: GenericIdentityFna = identitya;
//  把泛型参数当作整个接口的一个参数。 这样我们就能清楚的知道使用的具体是哪个泛型类型
//  当我们使用 GenericIdentityFn的时候，还得传入一个类型参数来指定泛型类型，
//  锁定了之后代码里使用的类型。
interface GenericIdentityFn<T>{
  (arg:T) : T;
}
function GenericIdentityFnF<T>(arg:T):T{
  return arg;
}
let myIdentity : GenericIdentityFn<number> = GenericIdentityFnF;
// 对于描述哪部分类型属于泛型部分来说，理解何时把参数放在调用签名里和何时放在接口上是很有帮助的。



//     除了泛型接口，我们还可以创建泛型类。 注意，无法创建泛型枚举和泛型命名空间。
class GenericNumber<T>{
  str:T;
  add:( x:T,y:T ) => T;
  static state = {};   //静态属性;
}
let myGenericNumber = new GenericNumber<number>();
myGenericNumber.str = 0;
myGenericNumber.add = function(x, y) { return x + y; };
//   泛型类指的是实例部分的类型，所以类的静态属性不能使用这个泛型类型。

//  泛型约束
function loggingIdentityError<T>(arg: T): T {
    // console.log(arg.length);  // Error:不是每种类型都含有.lenght     any就可以，这是为啥.....
    return arg;
}

// 只要传入的类型有这个属性，我们就允许，就是说至少包含这一属性。
// 为此，我们定义一个接口来描述约束条件。 创建一个包含 .length属性的接口，使用这个接口和extends关键字来实现约束：


interface Lengthwise {
    length: number;
}
function loggingIdentityzzzz<T extends Lengthwise>(arg: T): T {
    console.log(arg.length);  // Now we know it has a .length property, so no more error
    return arg;
}
// loggingIdentityzzzz( 5 )    //error: 我们必须要传入带length属性的类型，length的值为数字类型；
loggingIdentityzzzz( {length:1} )

// 在泛型约束中使用类型参数!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

    //这个T与K类型变量  总是说名字没有找到，官站并没有给出函数中声明多个的方式.....而且官码拉下来不能运行，可不可以投诉.....

// function getProperty< T,K >(obj: T, key: K) {
//     return obj[key];
// }
//
// let x = { a: 1, b: 2, c: 3, d: 4 };
//
// getProperty<string,number>('abc', 123); // okay
// getProperty(x, "m"); // error: Argument of type 'm' isn't assignable to 'a' | 'b' | 'c' | 'd'.

//  在泛型里使用类类型

function create<T>( c:{new():T} ):T{
  return new c();
}

//  使用原型属性推断并约束构造函数与类实例的关系。
class BeeKeeper {
    hasMask: boolean;
}

class ZooKeeper {
    nametag: string;
}

class Animal {
    numLegs: number;
}

class Bee extends Animal {
    keeper: BeeKeeper;
}

class Lion extends Animal {
    keeper: ZooKeeper;
}

function createInstance<A extends Animal>(c: new () => A): A {
    return new c();
}
createInstance( Lion ).keeper.nametag = '123'; //string;
// createInstance( ZooKeeper )  //error
createInstance( Bee )
