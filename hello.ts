export class Hello{

}

class heihei{

}

//新特性
// 模板字符串
var strA = 'zeizei';

var str = `heiehie

hahahah

  ${ strA }


`
function test( template,name,age ){
  console.log( template,name,age );
}

var myname = 'heihei';
var getAge = function(){
  return 18
}

test`hello my name is ${ myname },i'm${getAge}`

//参数新特性：
var my_name:string = 'zhai liang';
my_name = '123';

//类型推断机制，第一次赋值系统会推断他的类型
var my_Age = 'xixi';
// my_Age = 123;  //报错

var alis:any = 'hehe';  //任何类型
alis = 123;

var bo:boolean = true;

//表明不需要任何的返回值；
function tast():void{
 // return 123  报错
}

function haoba():string{
  return '123123'
}

function zzz( name:string ):string{
  return '';
}

zzz('123123')

//自定义类型
// class或接口自定义类型
class Person{
  name:string;
  age:number;
}

var zhangsan:Person = new Person();
zhangsan.name = 'zhangsan';
zhangsan.age = 18;
