

/*

    相对和非相对模块的导入：

      根据模块引用是相对的还是非相对的，模块导入会以不同的方式解析。


      相对导入是以/，./或../开头的。
      所有其它形式的导入被当作非相对的。

      相对导入在解析时是相对于导入它的文件，并且不能解析为一个外部模块声明。
      你应该为你自己写的模块使用相对导入，这样能确保它们在运行时的相对位置。

      非相对模块的导入可以相对于baseUrl或通过下文会讲到的路径映射来进行解析。
      它们还可以被解析成 外部模块声明。 使用非相对路径来导入你的外部依赖。



    模块解析策略：

      共有两种可用的模块解析策略：Node和Classic。可以使用 --moduleResolution标记来指定使用哪种模块解析策略。
      若未指定，那么在使用了 --module AMD | System | ES2015时的默认值为Classic，其它情况时则为Node。

      Classic：

        这种策略在以前是TypeScript默认的解析策略。 现在，它存在的理由主要是为了向后兼容。

        相对导入：
            /root/src/folder/moduleB.ts
            /root/src/folder/moduleB.d.ts

        非相对模块的导入：
            /root/src/folder/moduleB.ts
            /root/src/folder/moduleB.d.ts
            /root/src/moduleB.ts
            /root/src/moduleB.d.ts
            /root/moduleB.ts
            /root/moduleB.d.ts
            /moduleB.ts
            /moduleB.d.ts

        Node：

          相对路径：
            1、检查/root/src/moduleB.js文件是否存在。

            2、检查/root/src/moduleB目录是否包含一个package.json文件，且package.json文件指定了一个"main"模块。
              在我们的例子里，如果Node.js发现文件 /root/src/moduleB/package.json包含了{ "main": "lib/mainModule.js" }，
              那么Node.js会引用/root/src/moduleB/lib/mainModule.js。

            3、检查/root/src/moduleB目录是否包含一个index.js文件。 这个文件会被隐式地当作那个文件夹下的"main"模块。

          绝对路径：
              /root/src/node_modules/moduleB.js
              /root/src/node_modules/moduleB/package.json (如果指定了"main"属性)
              /root/src/node_modules/moduleB/index.js

              /root/node_modules/moduleB.js
              /root/node_modules/moduleB/package.json (如果指定了"main"属性)
              /root/node_modules/moduleB/index.js

              /node_modules/moduleB.js
              /node_modules/moduleB/package.json (如果指定了"main"属性)
              /node_modules/moduleB/index.js

              注意Node.js在步骤（4）和（7）会向上跳一级目录。


*/
/*

    TypeScript如何解析模块:
      TypeScript是模仿Node.js运行时的解析策略来在编译阶段定位模块定义文件。
      因此，TypeScript在Node解析逻辑基础上增加了TypeScript源文件的扩展名（ .ts，.tsx和.d.ts）。
      同时，TypeScript在 package.json里使用字段"types"来表示类似"main"的意义 - 编译器会使用它来找到要使用的"main"定义文件。

*/
