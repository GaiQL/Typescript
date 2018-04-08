
/*

*/


namespace Shapes {
    export interface Person {
        name:string;
        age:number;
    }
    export namespace Polygons {
        export class Triangle { }
        export class Square { }
    }
}


//   使用 Import ， 这与使用 var相似，但它还适用于类型和导入的具有命名空间含义的符号。
import polygons = Shapes.Polygons;
import ShapesInterface = Shapes.Person;
// var ShapesInterface = Shapes.Person; //报错

let sq = new polygons.Square(); // Same as "new Shapes.Polygons.Square()"


/*
    为指定的符号创建一个别名。 你可以用这种方法为任意标识符创建别名，也包括导入的模块中的对象。
*/
