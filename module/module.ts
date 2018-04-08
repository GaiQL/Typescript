

//  外部模块 --- 模块
//  内部模块 --- 命名空间
// 为了与 ECMAScript 2015里的术语保持一致

// 导出声明
// 任何声明（比如变量，函数，类，类型别名或接口）都能够通过添加export关键字来导出。

//导出语句  :  as  对导出的模块重命名


// 导入与导出；

/*
    默认导出：
      类和函数声明可以直接被标记为默认导出。 标记为默认导出的类和函数的名字是可以省略的。
      default导出也可以是一个值:  export default "123";

*/
/*

      若要导入一个使用了export =的模块时，必须使用TypeScript提供的特定语法import module = require("module")。

*/
/*

    为了编译，我们必需要在命令行上指定一个模块目标。对于Node.js来说，使用--module commonjs； 对于Require.js来说，使用--module amd。
    编译完成后，每个模块会生成一个单独的.js文件。 好比使用了reference标签，编译器会根据 import语句编译相应的文件。

    动态模块加载

*/
/*

    可选的模块加载和其它高级加载场景
    Node.js里的动态模块加载
    require.js里的动态模块加载
    System.js里的动态模块加载

*/
