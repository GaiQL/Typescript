

/*

    使用命名空间：

    命名空间是位于全局命名空间下的一个普通的带有名字的JavaScript对象。
    这令命名空间十分容易使用。 它们可以在多文件中同时使用，并通过 --outFile结合在一起。
    命名空间是帮你组织Web应用不错的方式，你可以把所有依赖都放在HTML页面的 <script>标签里。

    但就像其它的全局命名空间污染一样，它很难去识别组件之间的依赖关系，尤其是在大型的应用中。

*/

/*

    使用模块:

    像命名空间一样，模块可以包含代码和声明。 不同的是模块可以 声明它的依赖。

    模块会把依赖添加到模块加载器上（例如CommonJs / Require.js）。
    对于小型的JS应用来说可能没必要，但是对于大型应用，这一点点的花费会带来长久的模块化和可维护性上的便利。
    模块也提供了更好的代码重用，更强的封闭性以及更好的使用工具进行优化。

    对于Node.js应用来说，模块是默认并推荐的组织代码的方式。

    从ECMAScript 2015开始，模块成为了语言内置的部分，应该会被所有正常的解释引擎所支持。
    因此，对于新项目来说推荐使用模块做为组织代码的方式。

*/

/*

    常见的错误：

    一个常见的错误是使用/// <reference>引用模块文件，应该使用import。


    导出：
    export namespace Shapes {
      export class Triangle {  }
      export class Square {  }
    }

    导入：
    import * as shapes from "./shapes";
    let t = new shapes.Shapes.Triangle();    // shapes.Shapes?
    TypeScript里模块的一个特点是不同的模块永远也不会在相同的作用域内使用相同的名字。


    不应该对模块使用命名空间，使用命名空间是为了提供逻辑分组和避免命名冲突。
    模块文件本身已经是一个逻辑分组，并且它的名字是由导入这个模块的代码指定，所以没有必要为导出的对象增加额外的模块层。

    // shapes.ts
      export class Triangle {  }
      export class Square {  }

    // shapeConsumer.ts
      import * as shapes from "./shapes";
      let t = new shapes.Triangle();

*/

/*

    模块的取舍:

          就像每个JS文件对应一个模块一样，TypeScript里模块文件与生成的JS文件也是一一对应的。
          这会产生一种影响，根据你指定的目标模块系统的不同，你可能无法连接多个模块源文件。
          例如当目标模块系统为 commonjs或umd时，无法使用outFile选项，
          但是在TypeScript 1.8以上的版本能够使用outFile当目标为amd或system。

*/
