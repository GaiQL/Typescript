
// 可辨识联合的高级模式
// 标签联合
// 代数数据类型


// 1、具有普通的单例类型属性— 可辨识的特征。
// 2、一个类型别名包含了那些类型的联合— 联合。
// 3、此属性上的类型保护。

interface Square {
    kind: "square";   //    kind属性称做 可辨识的特征或 标签。
    size: number;
}
interface Rectangle {
    kind: "rectangle";
    width: number;
    height: number;
}
interface Circle {
    kind: "circle";
    radius: number;
}
interface Triangle {
    kind: "circle";
    radius: number;
}
type Shape = Square | Rectangle | Circle | Triangle;

//  可辨识联合：
function area(s: Shape) {
    switch (s.kind) {
        case "square": return s.size * s.size;
        case "rectangle": return s.height * s.width;
        case "circle": return Math.PI * s.radius ** 2;
        default: return assertNever(s);
    }
}


//  完整性检查:   使用  nerver类型       返回never的函数必须存在无法达到的终点
function assertNever(x:never):never{
  throw new Error( 'hi,it is broken' + x );
}
