// 类型保护与区分类型（Type Guards and Differentiating Types）

//    假若我们一旦检查过类型，就能在之后的每个分支里清楚地知道 pet的类型的话就好了。

//    TypeScript里的 类型保护机制  : 类型保护就是一些表达式，它们会在运行时检查以确保在某个作用域里的类型。

//    用户自定义的类型保护
//  要定义一个类型保护，我们只要简单地定义一个函数，它的返回值是一个  ( 类型谓词 ) ：

function isFish( pet:Bird|Fish ) : pet is Fish {
  return (<Fish>pet).swim !== undefined;
}

//  每当使用一些变量调用 isFish时，TypeScript会将变量缩减为那个具体的类型，只要这个类型与变量的原始类型是兼容的。

if (isFish(pet)) {
    pet.swim();
}
else {
    pet.fly();
}

//   pet is Fish  ---->   ( 类型谓词 ) ;
//   谓词为 parameterName is Type这种形式 ;    parameterName是来自当前函数的一个签名里的一个参数名。



//    typeof类型保护:  必须是  "number"， "string"， "boolean"或 "symbol"

function isNumber(x: any): x is number {
    return typeof x === "number";
}

function isString(x: any): x is string {
    return typeof x === "string";
}

//  不用如此添加类型保护，TypeScript 可将 typeof 识别为一个类型保护


//   instanceof类型保护  :   instanceof类型保护是通过构造函数来细化类型的一种方式。

interface Padder {
    getPaddingString(): string
}

class SpaceRepeatingPadder implements Padder {
    constructor(private numSpaces: number) { }
    getPaddingString() {
        return Array(this.numSpaces + 1).join(" ");
    }
}

class StringPadder implements Padder {
    constructor(private value: string) { }
    getPaddingString() {
        return this.value;
    }
}

function getRandomPadder() {
    return Math.random() < 0.5 ?
        new SpaceRepeatingPadder(4) :
        new StringPadder("  ");
}

// 类型为SpaceRepeatingPadder | StringPadder
let padder: Padder = getRandomPadder();

if (padder instanceof SpaceRepeatingPadder) {
     // 类型细化为'SpaceRepeatingPadder'
}
if (padder instanceof StringPadder) {
     // 类型细化为'StringPadder'
}

/*
    instanceof的右侧要求是一个构造函数，TypeScript将细化为：

    1、此构造函数的 prototype属性的类型，如果它的类型不为 any的话
    2、构造签名所返回的类型的联合
*/


/*

  可以为null的类型 ： 类型检查器认为 null与 undefined可以赋值给任何类型。null与 undefined是所有其它类型的一个有效值。

  你阻止不了将它们赋值给其它类型：
    --strictNullChecks标记可以解决此错误：当你声明一个变量时，它不会自动地包含 null或 undefined。
    使用了 --strictNullChecks，可选参数会被自动地加上 | undefined:
    当想使用的时候你可以使用联合类型明确的包含它们。

  TypeScript会把 null和 undefined区别对待。
    string | null，
    string | undefined和
    string | undefined | null
  是不同的类型。
*/
let foo = '123';
foo = null;

function broken(name: string | null): string {
  function postfix(epithet: string) {
    return name.charAt(0) + '.  the ' + epithet; // error, 'name' is possibly null
  }
  name = name || "Bob";
  return postfix("great");
}
broken(null)

//  类型别名：
//  类型别名会给一个类型起个新名字。 类型别名有时和接口很像，但是可以作用于原始值，联合类型，元组以及其它任何你需要手写的类型。
type Name = string;
type NameResolver = () => string;
type NameOrResolver = Name | NameResolver;

type Tree<T> = {
    value: T;
    left: Tree<T>;
    right: Tree<T>;
}

class TryTree implements Tree<number>{
  value:123;
  left:TryTree;
  right:TryTree;
}

//     与交叉类型一起使用，我们可以创建出一些十分稀奇古怪的类型  :
type LinkedList<T> = T & { next: LinkedList<T> };

interface Person {
    name: string;
}

var people: LinkedList<Person>;
var s = people.name;
var s = people.next.name;
var s = people.next.next.name;
var s = people.next.next.next.name;


//然而，类型别名不能出现在声明右侧的任何地方
// type Yikes = Array<Yikes>; // error


//    接口 vs. 类型别名
type Alias = { num: number }
interface Interface {
    num: number;
}
declare function aliased(arg: Alias): Alias;
declare function interfaced(arg: Interface): Interface;

//  如果你无法通过接口来描述一个类型并且需要使用联合类型或元组类型，这时通常会使用类型别名。

//  字符串字面量类型   :  允许你指定字符串必须的固定值。
type str = '123' | '321' | '嘿嘿嘿';
class UIElement{
  animate(dx: number, dy: number, easing: str) {
     if (easing === "123") {
         // ...
     }
     else if (easing === "321") {
     }
     else if (easing === "嘿嘿嘿") {
     }
 }
}
let UIElementObj:UIElement = new UIElement();
// UIElementObj.animate( 123,321,'111' )  //error;
UIElementObj.animate( 123,321,'123' )  //

// 字符串字面量类型还可以用于区分函数重载：
function strFun( str:'111'|'222' ):string{
  if( str == '111' ){
    return str
  }else if( str == '222' ){
    return str
  }
}
// strFun('2222'); //error

// 数字字面量类型:  我们很少直接这样使用，但它们可以用在缩小范围调试bug的时候：
function rollDie(): 1 | 2 | 3 | 4 | 5 | 6 {
    // ...
    // return 7  //errors
    return 1
}
function foo____(x: number) {
    // if (x !== 1 || x !== 2) {   //error
    //     //         ~~~~~~~
    //     // Operator '!==' cannot be applied to types '1' and '2'.
    // }
}

//   枚举成员类型  :  每个枚举成员都是用字面量初始化的时候枚举成员是具有类型的。
     // 单例类型：   多数是指枚举成员类型和数字/字符串字面量类型
