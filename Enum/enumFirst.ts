

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
enum E1 { X, Y, Z }
enum E2 {
    A = 1, B, C
}
//3、枚举成员使用 常量枚举表达式初始化。 常数枚举表达式是TypeScript表达式的子集，它可以在编译阶段求值。

//------------------------所有其它情况的枚举成员被当作是需要计算得出的值。

enum FileAccess {
    // 常量
    None,
    Read    = 1 << 1,
    // 该操作符会将第一个操作数向左移动指定的位数。向左被移出的位被丢弃，右侧用 0 补充。
    //   >> 该操作符会将第一个操作数向右移动指定的位数。向右被移出的位被丢弃，拷贝最左侧的位以填充左侧。由于新的最左侧的位总是和以前相同，符号位没有被改变。所以被称作“符号传播”。
    Write   = 1 << 2,
    ReadWrite  = Read | Write,
    // 计算的
    G = "123".length
}
console.log( FileAccess.ReadWrite )

enum ShapeKind {
    Circle,
    Square,
}

interface Circle {
    kind: ShapeKind.Circle;
    radius: number;
}

interface Square {
    kind: ShapeKind.Square;
    sideLength: number;
}

let c: Circle = {
    kind: ShapeKind.Circle,
    //    ~~~~~~~~~~~~~~~~ Error!
    radius: 100,
}


//       枚举类型本身变成了每个枚举成员的 联合
enum Ea {
    Foo,
    Bar,
}

function heihei(x : Ea){
    //           Error~~~~~~
    // if( x !== Ea.Foo || x !== Ea.Bar){
    //
    // }
}
 //    运行时的枚举  :   枚举是在运行时真正存在的对象。

//   反向映射:   要注意的是 不会为字符串枚举成员生成反向映射。
enum Enum{
  num = '123'
}
let heiheiA = Enum.num;

console.log( heiheiA );

enum A{
  //  枚举名字重复时，只有第一个可以使用初始化。  枚举可以用  const 修饰   只能声明一个
  a
}
// enum A{
//   b = '123',
//   c = 1
// }

//   外部枚举:  外部枚举用来描述已经存在的枚举类型的形状。    仅仅是用来描述的么？需要描述？我靠  我真的很无奈啊....
declare enum B {
    b = '123'
}
console.log(B);

//   在正常的枚举里，没有初始化方法的成员被当成常数成员。
//   非常数的外部枚举而言，没有初始化方法时被当做需要经过计算的。
