
//  交叉类型  ：  是将多个类型合并为一个类型。

//  声明的时候逗号分开，   返回或使用的时候使用    & 连接;


//   Person & Serializable & Loggable。
//   同时是 Person 和 Serializable 和 Loggable。 就是说这个类型的对象同时拥有了这三种类型的成员。
function extend<T,U>( first:T,second:U ):T & U {
  let result = <T & U>{};
  for( var key in first ){
    (<any>result)[key] = first[key];
  }
  for( var id in second ){
    (<any>result)[key] = second[id];
  }
  return result
}

class Person {
    constructor(public name: string) { }
}
interface Loggable {
    log(): void;
}
class ConsoleLogger implements Loggable {
    log() {
        // ...
    }
}
var jim = extend(new Person("Jim"), new ConsoleLogger());
var n = jim.name;
jim.log();
