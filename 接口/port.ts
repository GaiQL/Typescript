
//  在TypeScript里，接口的作用就是为这些类型命名和为你的代码或第三方代码定义契约。

interface LabelledValue {
  label: string;
  age?: number;  //可选属性
}

function printLabel(labelledObj: LabelledValue) {
  console.log(labelledObj.age);
}

let myObj = {size: 10, label: "Size 10 Object",name:"do it"};
printLabel(myObj);

//只读属性    readonly 设置
interface People{
  readonly name: string;   //只可以赋值一次
  age: number;
}

let P:People = { name:'haha',age:1 };
P.age = 3;
// P.name = 'haha';  //error

// ReadonlyArray<T>  不可变数组
let DCarr:ReadonlyArray< number > = [ 123,321 ];
// DCarr.push(123);  //error
// let DcarrB:any = DCarr; // success
// let DcarrB:number[] = DCarr; // error     ------->
let DcarrB:number[] = DCarr as Array<number>


/*
      readonly vs const
      最简单判断该用readonly还是const的方法是看要把它做为变量使用还是做为一个属性。
      做为变量使用的话用 const，若做为属性则使用readonly。
*/


interface SquareConfig {
    color?: string;
    width?: number;
    [ propName:string ]:any;  // 字符串索引签名，SquareConfig可以有任意数量的属性，并且只要它们不是color和width，那么就无所谓它们的类型是什么。
}

function createSquare(config: SquareConfig): { color: string; area: number } {
    return
}

let data = { colour: "red", width: 100 }

let mySquare = createSquare({ colour: "red", width: 100 });   //error; 添加字符串索引签名后success  最佳方法

//传一个建立过的对象是可以的，但是直接传（ 对象字面量 ）会报错
/*
    对象字面量会被特殊对待而且会经过 额外属性检查，当将它们赋值给变量或作为参数传递的时候。
    如果一个对象字面量存在任何“目标类型”不包含的属性时，你会得到一个错误。
*/

// 在使用对象字面量的时候可以绕过这些检查：
// let mySquare = createSquare({ colour: "red", width: 100 } as SquareConfig ) ;  //  使用类型断言； 最简方法
// 如同第一个例子一样，把传入的对象先进行复制，然后把变量传入进来。



// 对于包含方法和内部状态的复杂对象字面量来讲，你可能需要使用这些技巧，但是大部额外属性检查错误是真正的bug。


//---------函数类型
interface SearchFunc{
 ( source:string,subString:string ):boolean
}
let HE:SearchFunc
// 对于函数类型的类型检查来说，函数的参数名不需要与接口里定义的名字相匹配，但是参数不能多传
HE = function( src,sub ){
  console.log( src,sub )
  return false
}
console.log( HE( '123','123' ) );

let SHE = function( src:number,sub:number ):string{
  console.log(src,sub);
  return '234'
}
// console.log( SHE( 123,321,123 ) )  //不能多传。。

// 可索引的类型  共有支持两种索引签名：字符串和数字。 可以同时使用两种类型的索引，但是数字索引的返回值必须是字符串索引返回值类型的子类型。
interface StringArray {
  [index: string]: string;
}

let myArray: StringArray;
myArray = {ab:'sb'};

let myStr: string = myArray[0];
console.log( myArray['ab'] )

interface NumberDictionary{
  [index:string]:number;
  length:number;
  // heihei:string;  // 错误，`name`的类型与索引类型返回值的类型不匹配
}
let HERO:NumberDictionary;
HERO = { a:3,b:4,length:213 }

//类类型
