
/*

  当一个对象实现了Symbol.iterator属性时，我们认为它是可迭代的。
  一些内置的类型如 Array，Map，Set，String，Int32Array，Uint32Array等都已经实现了各自的Symbol.iterator。
  对象上的 Symbol.iterator函数负责返回供迭代的值。

*/


let someArray = [1, "string", false];

//  objectb不可
for (let entry of someArray) {
    console.log(entry); // 1, "string", false
}


/*

  for..of vs. for..in 语句

  for..in迭代的是对象的 键 的列表，而for..of则迭代对象的键对应的值。

*/


//  内置对象Map和Set

let pets:any = new Set(["Cat", "Dog", "Hamster"]);
pets["species"] = "mammals";
console.log( pets );

//   当生成目标为ES5或ES3，迭代器只允许在Array类型上使用。
//   在非数组值上使用 for..of语句会得到一个错误，就算这些非数组值已经实现了Symbol.iterator属性。

//   当目标为兼容ECMAScipt 2015的引擎时，编译器会生成相应引擎的for..of内置迭代器实现方式。
