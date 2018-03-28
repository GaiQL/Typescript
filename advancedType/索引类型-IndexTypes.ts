


//
interface A{
  name:string;
  age:number
}
let B:A = {
  name:'123',
  age:123
}

//  keyof T   索引类型查询操作符;
//  T[K]      索引访问操作符;    确保 K extends keyof T 就好；
function Each<T,K extends keyof T>( v:T,c:K[] ):T[K][]{
  return c.map((e)=>{ return v[e] })
}
Each( B,['name'] )   //   编译器会检查 name是否真的是 B 的一个属性。


let personProps: keyof Person | '123'; // 'name' | 'age' | '123'
personProps = '123'


//    索引类型和字符串索引签名

interface Mapz<T> {
    [key: string]: T;
}
let value: Mapz<number>['foo']; // number
value = 123;
console.log(value);
let keys: keyof Mapz<number>; // string  动态string，所以可以是任意的string；
keys = '123'

interface Mapq<T> {
    str: T;
}
let keyszz: keyof Mapq<number>;
keyszz = 'str';
