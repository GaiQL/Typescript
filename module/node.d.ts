

/*

  在Node.js里大部分工作是通过加载一个或多个模块实现的。
  我们可以使用顶级的 export声明来为每个模块都定义一个.d.ts文件，
  但最好还是写在一个大的.d.ts文件里。


  我们使用与构造一个外部命名空间相似的方法，
  但是这里使用 module关键字并且把名字用引号括起来，方便之后import。

*/

declare module "person" {
  export interface person{
    name:string;
    age:number;
    speak( content:string ):string;
  }

  export interface hei{
    choose?:number;
  }

  export function parse(urlStr: string, parseQueryString:number): hei;
}

declare module "path" {
  export function normalize(p: string): string;
  export function join(...paths: any[]): string;
  export let sep: string;
}


//   为了描述不是用TypeScript编写的类库的类型，我们需要声明类库导出的API。
 // 为了让TypeScript编译器识别它的类型，我们使用外部命名空间声明。            对外部模块的类型限制？？？
declare namespace D3 {
    export interface Selectors {
        select: {
            (selector: string): Selection;
            (element: EventTarget): Selection;
        };
    }

    export interface Event {
        x: number;
        y: number;
    }

    export interface Base extends Selectors {
        event: Event;
    }
}

declare var d3: D3.Base;



declare module "url" {
    export interface Url {
        protocol?: string;
        hostname?: string;
        pathname?: string;
    }

    export function parse(urlStr: string, parseQueryString?:any, slashesDenoteHost?:any): Url;
}
