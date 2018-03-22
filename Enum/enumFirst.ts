

//   数字枚举
//   自增长
enum Direction {
    Up = 1,
    Down,   //2
    Left,   //3
    Right   //4
}
console.log( Direction );

//可以完全不使用初始化器
enum Directian{
  Up,     //0
  Down,   //1
  Left,   //2
  Right   //3
}
console.log( Directian );
//    数字枚举可以被混入到 计算过的和常量成员
//   不带初始化器的枚举或者被放在第一的位置，或者被放在使用了数字常量或其它常量初始化了的枚举后面。

let getSomeValue:(x:number) => number;
getSomeValue = ( x ) => {
  console.log(123);
  return x
}
enum smallError{
  hezzzz,    //被放在第一位；
  hi = getSomeValue(123),
  he = 1,
  hez        //error  被放在使用了数字常量或(---其它常量)初始化了的枚举后面；
}

//字符串枚举  ；    每个成员都必须用字符串字面量，或另外一个字符串枚举成员进行初始化。
enum DirectionS {
    Up = 'up',
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT",
    eastward = 'heihei'
}

//异构枚举 : 枚举可以混合字符串和数字成员;   不知道为啥，他说我不会这么做...为啥我觉得我会经常这样做....
//  除非你真的想要利用JavaScript运行时的行为，否则我们不建议这样做。
enum BooleanLikeHeterogeneousEnum {
    No = 0,
    Yes = "YES"
}

//   计算的和常量成员
/*
     每个枚举成员都带有一个值，它可以是 常量 或 计算 出来的。 当满足如下条件时，枚举成员被当作是常量:
*/
//1、它是枚举的第一个成员且没有初始化器，这种情况下它被赋予值 0：
enum E { X }
//2、它不带有初始化器且它之前的枚举成员是一个 数字常量。 这种情况下，当前枚举成员的值为它上一个枚举成员的值加1。
//3、枚举成员使用 常量枚举表达式初始化。 常数枚举表达式是TypeScript表达式的子集，它可以在编译阶段求值。
