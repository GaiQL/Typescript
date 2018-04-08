
import {   numberRegexp,
  StringValidator,
  heihei } from './export';

// import * as validator from './export';

// import zip = require("./export");

interface Join{
  //  参数不限类型，不限数量？？
  join(...paths: any[]): string;
}

class cadence implements Join{
  join( spring:any,winter:string ){
    console.log(  );
    return '123';
  }
}



let star = new cadence();
star.join( '123','321' );
console.log( star );


console.log( heihei );


/*

  现在我们可以/// <reference> node.d.ts并且使用
  import url = require("url");
  或import * as URL from "url"加载模块。

*/



// /// <reference> node.d.ts
// import Person = require("person");
//
// Person.parse = function( hope:string,appearance:number ){
//
//   return {
//     choose:appearance
//   };
// }
// let cannotback = Person.parse('123',123);
// console.log( cannotback );
// // import * as URL from "url";

/// <reference path="node.d.ts"/>
import URL = require("url");
let myUrl = URL.parse("http://www.typescriptlang.org");

console.log( myUrl );

// 如果仅导出单个 class 或 function，使用 export default

// 如果要导出多个对象，把它们放在顶层里导出;
// 相反地，当导入的时候：明确地列出导入的名字;


// 使用命名空间导入模式当你要导出大量内容的时候
// 导出；
// export class Dog { ... }
// export class Cat { ... }
// export class Tree { ... }
// export class Flower { ... }

// 导入；
// import * as myLargeModule from "./MyLargeModule.ts";
// let x = new myLargeModule.Dog();

/*

        你可能经常需要去扩展一个模块的功能。
        JS里常用的一个模式是JQuery那样去扩展原对象。
        如我们之前提到的，模块不会像全局命名空间对象那样去 合并。
        推荐的方案是 不要去改变原来的对象，而是导出一个新的实体来提供新的功能。

*/

/*

              命名空间在使用模块时几乎没什么价值，模块里不要使用命名空间！！！！！

  危险信号：
          以下均为模块结构上的危险信号。重新检查以确保你没有在对模块使用命名空间：

          文件的顶层声明是export namespace Foo { ... } （删除Foo并把所有内容向上层移动一层）
          文件只有一个export class或export function （考虑使用export default）
          多个文件的顶层具有同样的export namespace Foo { （不要以为这些会合并到一个Foo中！）

*/
