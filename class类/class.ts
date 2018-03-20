class Greeter{
  greeting:string
  constructor( message:string ){
    this.greeting = message;
  }
  greet(){
    console.log( this.greeting );
  }
}

let greeter = new Greeter( '嘿嘿' );  //会执行构造函数初始化;
greeter.greet();     //嘿嘿
console.log( greeter.greeting );  //嘿嘿

//继承;
//基类（超类）
class Animal{
  public name:string;
  public constructor( Name:string ){
    this.name = Name
  }
  public move( num:number = 0 ){
    console.log( `${ this.name } moved ${num} m` )
  }
}
//派生类（子类）
class Dog extends Animal{
  constructor( name:string ){
    super( name );
  }
  move( num:number = 50 ){
    super.move( num );
  }
}
class Snake extends Animal{
  weight:number;
  constructor( name:string ){
    super( name );
    //派生类包含了一个构造函数，它必须调用 super()，它会执行基类的构造函数。
    //而且，在构造函数里访问 this 的属性之前，我们一定要调用 super()。
    //这个是TypeScript强制执行的一条重要规则。
    this.weight = 50;
    console.log( this.weight )
  }
  move( num:number = 50 ){
    super.move( num );
  }
}

let dog = new Dog( 'Dog' );
let snake:Animal = new Snake( 'Snake' );
//即使被声明为 Animal类型，但因为它的值是Snake，调用 snake.move(34)时，它会调用 Snake里重写的方法：
dog.move(30);
snake.move( 66 );

class person{
  private name:string;
  public age:number;
  constructor( name:string,age:number ){
    this.name = name;
    this.age = age;
  }
  //共有
  public Talkname(){
    console.log( `My name is ${this.name}` );
  }
  //私有                                 
  private TalkAge(){
    console.log( `I'm ${ this.age } years old` );
  }
}
let XiaoMing = new person( '小名',18 );
XiaoMing.Talkname()

class hahahhaha{
   name:string
   constructor(){
     this.name = '123';
   }
}
let hahahahahahhah = new hahahhaha();
console.log( hahahahahahhah.name )
