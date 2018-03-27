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
    当想使用的时候你可以使用联合类型明确的包含它们。

  TypeScript会把 null和 undefined区别对待。
    string | null，
    string | undefined和
    string | undefined | null
  是不同的类型。
*/
