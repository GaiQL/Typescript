
//  类型是在哪里如何被推断的。

//  TypeScript里，在有些没有明确指出类型的地方，类型推论会帮助提供类型。


let x = 3;

// x = '123';  //error,类型推断为Number。

let y = [0, 1, null];   //number 和  Null。

// y[0] = null;

class Rhino{

}
class Elephant{

}
class Snake{

}

let Anummm : Array<Rhino|Elephant|Snake>;
// Anummm = [123,321,123];

//    候选类型共享相同的通用类型，但是却没有一个类型能做为所有候选类型的类型。     ......这都是啥
let zoo:Anummm = [new Rhino(), new Elephant(), new Snake()];
zoo[0] = 123;

//  如果没有找到最佳通用类型的话，类型推断的结果为联合数组类型，(Rhino | Elephant | Snake)[]。    原地爆炸...

function heiheihei(x:any){
  console.log(x)
}
heiheihei(123);
//  上下文类型：
window.onmousedown = function(mouseEvent) {
    //可以推断出 mouseEvent 的类型
    console.log(mouseEvent.button);  //<- Error？？？
};
