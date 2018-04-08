

// TypeScript中的声明会创建以下三种实体之一：命名空间，类型或值。

/*

      接口合并：

*/
interface Box {
    height: number;
    width: number;
}

interface Box {
    scale: number;
    // 接口的非函数的成员应该是唯一的。如果它们不是唯一的，那么它们必须是相同的类型。
    /*
      对于函数成员，每个同名函数声明都会被当成这个函数的一个重载。 同时需要注意，当接口 A与后来的接口 A合并时，后面的接口具有更高的优先级。
    */
    // width:string;
}

// let box: Box = {height: 5, width: 6, scale: 10};
class Sheep{}
class Cat{}

interface Cloner {
    clone(animal: Animal): Animal;
}

interface Cloner {
    clone(animal: Sheep): Sheep;
}

interface Cloner {
    clone(animal: Dog): Dog;
    clone(animal: Cat): Cat;
}

// 合并后：   后面声明的接口提前，优先级更高；
// interface Cloner {
//     clone(animal: Dog): Dog;
//     clone(animal: Cat): Cat;
//     clone(animal: Sheep): Sheep;
//     clone(animal: Animal): Animal;
// }

// 例外：当出现特殊的函数签名时。
// 如果签名里有一个参数的类型是 单一的字符串字面量（比如，不是字符串字面量的联合类型），那么它将会被提升到重载列表的最顶端。

interface Document {
    createElement(tagName: any): Element;
}
interface Document {
    createElement(tagName: "div"): HTMLDivElement;
    createElement(tagName: "span"): HTMLSpanElement;
}
interface Document {
    createElement(tagName: string): HTMLElement;
    createElement(tagName: "canvas"): HTMLCanvasElement;
}
// 合并后：   后声明的优先级最高；但是一个参数的类型是 单一的字符串字面量会被提升到最顶端，
// interface Document {
//     createElement(tagName: "canvas"): HTMLCanvasElement;
//     createElement(tagName: "div"): HTMLDivElement;
//     createElement(tagName: "span"): HTMLSpanElement;
//     createElement(tagName: string): HTMLElement;
//     createElement(tagName: any): Element;
// }

/*

      合并命名空间：

        与接口相似，同名的命名空间也会合并其成员。
        对于命名空间里值的合并，如果当前已经存在给定名字的命名空间，那么后来的命名空间的导出成员会被加到已经存在的那个模块里。

        非导出成员仅在其原有的（合并前的）命名空间内可见。这就是说合并之后，从其它命名空间合并进来的成员无法访问非导出成员。

*/
namespace Animals {
    export class Zebra { }
}

namespace Animals {
    export interface Legged { numberOfLegs: number; }
    export class Dog { }
}
//  等同于：
  // namespace Animals {
  //     export interface Legged { numberOfLegs: number; }
  //
  //     export class Zebra { }
  //     export class Dog { }
  // }


  /*

        命名空间与类和函数和枚举类型合并：

          命名空间可以与其它类型的声明进行合并。 只要命名空间的定义符合将要合并类型的定义。合并结果包含两者的声明类型。
          TypeScript使用这个功能去实现一些JavaScript里的设计模式。

  */
  class Album {
      label: Album.AlbumLabel;
  }
  namespace Album {
      export let str:string = '123'
      export class AlbumLabel { }   //  我们必须导出 AlbumLabel类，好让合并的类能访问。
  }

// 合并结果是一个类并带有一个内部类。 你也可以使用命名空间为类增加一些静态属性。

/*
    除了内部类的模式，你在JavaScript里，创建一个函数稍后扩展它增加一些属性也是很常见的。
    TypeScript使用声明合并来达到这个目的并保证类型安全。
*/

function buildLabel(name: string): string {
    return buildLabel.prefix + name + buildLabel.suffix;
}
// 扩展这个函数，增加一些属性
namespace buildLabel {
    export let suffix = "";
    export let prefix = "Hello, ";
}

alert(buildLabel("Sam Smith"));
// 相似的，命名空间可以用来扩展枚举型：

enum Color {
    red = 1,
    green = 2,
    blue = 4
}
namespace Color {

    export function mixColor(colorName: string) {
        if (colorName == "yellow") {
            return Color.red + Color.green;
        }
        else if (colorName == "white") {
            return Color.red + Color.green + Color.blue;
        }
        else if (colorName == "magenta") {
            return Color.red + Color.blue;
        }
        else if (colorName == "cyan") {
            return Color.green + Color.blue;
        }
    }

}

//  非法的合并   :    类不能与其它类或变量合并


//   模块扩展:   虽然JavaScript不支持合并，但你可以为导入的对象打补丁以更新它们。

// observable.js
// export class Observablez<T> {
//     //.....
// }

// map.js
// import { Observablez } from "./observable";
// Observablez.prototype.map = function (f) {
//     // ...
// }
// 可以很好的工作，但编译器对 Observable.prototype.map 一无所知。
//  你可以使用扩展模块来将它告诉编译器：

// 全局扩展:在模块内部添加声明到全局作用域中。
class Observable<T> {
    // ... still no implementation ...
}

declare global {
    interface Array<T> {
        toObservable(): Observable<T>;
    }
}

Array.prototype.toObservable = function () {
    // ...
}

// 模块扩展!!!!!!!!!!!!!!静不下心了 回家了  明天再看下，马上就可以开始进行TS+EX+MO后台项目的构建了;哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈啊哈哈哈哈哈哈
// 还有枚举的问题要在解决下，对枚举的实际作用有些模糊
