

/*

    当应用越来越大时，我们要把代码分离到不同的文件以便维护。
     尽管是不同的文件，它们仍是同一个命名空间，并且在使用的时候就如同它们在一个文件中定义的一样。
     因为不同文件之间存在依赖关系，所以我们加入了引用标签来告诉编译器文件之间的关联。

*/


/// <reference path="morefile1.ts" />
/// <reference path="morefile2.ts" />
/// <reference path="morefile3.ts" />

//  使用
let stringsT = ["Hello", "98052", "101"];

// Validators to use
let validatorsT: { [s: string]: Validation.StringValidator; } = {};
validatorsT["ZIP code"] = new Validation.ZipCodeValidator();
validatorsT["Letters only"] = new Validation.LettersOnlyValidator();

// Show whether each string passed each validator
for (let s of stringsT) {
    for (let name in validatorsT) {
        console.log(`"${ s }" - ${ validatorsT[name].isAcceptable(s) ? "matches" : "does not match" } ${ name }`);
    }
}

/*

    当涉及到多文件时，我们必须确保所有编译后的代码都被加载了。 我们有两种方式。

    第一种方式，把所有的输入文件编译为一个输出文件，需要使用--outFile标记 ：  tsc --outFile sample.js Test.ts

    第二种方式，我们可以编译每一个文件（默认方式），那么每个源文件都会对应生成一个JavaScript文件。
    然后，在页面上通过 <script>标签把所有生成的JavaScript文件按正确的顺序引进来。

*/
