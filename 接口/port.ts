
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
interface ClockInterface{
  currentTime:Date;
  setTime(d:Date):void;
}
//   接口描述了类的公共部分，而不是公共和私有两部分。 它不会帮你检查类是否具有某些私有成员。
class colck implements ClockInterface{
  //类中必须要有定义的接口，可以多，不能少
  currentTime:Date;
  age:string;
  constructro(hour:number){
    this.currentTime = new Date();
  }
  setTime(heihei:Date){
    console.log( heihei );
  }
}
//  这里因为当一个类实现了一个接口时，只对其实例部分进行类型检查。想要定义类中的静态部分进行检查：
//   类的静态部分类型检查；
interface HAHA {
  new ( str:number,num:number ):HEIHEI;
}
interface HEIHEI {
  talk():any;
}
function Create( ctor:HAHA,str:number,num:number ):HEIHEI{
  return new ctor( str,num );
}
class DigitalClock implements HEIHEI {
    constructor(h: number, m: number) { }
    talk() {
        console.log("beep beep");
    }
}
class AnalogClock implements HEIHEI {
    constructor(h: number, m: number) { }
    talk() {
        console.log("tick tock");
    }
}

let digital = Create(DigitalClock, 12, 17);
let analog = Create(AnalogClock, 7, 32);
analog.talk();

//因为Create的第一个参数是HAHA类型，在Create(AnalogClock, 7, 32)里，会检查AnalogClock是否符合构造函数签名。

// 继承接口
interface Shape{
  color:String
}
interface PenStroke {
    penWidth: number;
}
interface sympathize extends Shape,PenStroke{
  weight:number;
}
let square = <sympathize>{};
//定义了接口后才能添加；
square.color = 'hei';
square.penWidth = 123;

//混合类型
interface Counter{
  (start:number):string;
  interval:number;
  reset():void;
}
function getCounter():Counter{
  let counter = <Counter>function (start: number) { };
  counter.interval = 123;
  counter.reset = function(){ console.log('哈哈') };
  return counter
}
let Reset = getCounter();
console.log( Reset.interval );
Reset.reset();

//接口继承类；    当接口继承了一个类类型时，它会继承类的成员但不包括其实现。
/*
  接口同样会继承到类的private和protected成员。
  这意味着当你创建了一个接口继承了一个拥有私有或受保护的成员的类时，
  这个接口类型只能被这个类或其子类所实现（implement）。
*/
class Control {
    private state: any;
}

//  只有  Control  的子类才能实现  SelectableControl  接口，
//  因为只有 Control的子类才能够拥有一个声明于Control的私有成员state
interface SelectableControl extends Control {
    select(): void;
}

class Button extends Control implements SelectableControl {
    select() { }
}
//   报错，没有Control中定义的 state;
// class Image implements SelectableControl {
//     select() { }
// }
