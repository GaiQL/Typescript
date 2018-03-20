class people{
  public readonly name:string;
  public age:number;
  constructor( name:string ){
    this.name = name;
    this.age = 123;
  }
  private conSoleAge(){
    console.log(this.age)
  }
  protected conSoleName(){
    console.log(this.name)
  }
}
//people的子类
class Hong extends people{
  constructor(){
    super( 'hong' );
    console.log( this.name );     //是错误的，name 为基类私有。
    // super.conSoleAge();   //派生类中无法访问的。
    super.conSoleName();   //protected 时  在类中依然可以访问
    // console.log( super.age )
  }
}

class Ming{
  private Mname:string;
  constructor( name:string ){
    this.Mname = name;
  }
}
let People = new people( 'P' );
// console.log( People.name = 'hahaha' )
let xiaoHong = new Hong();
// xiaoHong.conSoleName();  //protected 时  无法被访问
// console.log( xiaoHong.name ); //



let xiaoming = new Ming( 'M' );

People = xiaoHong;

// People = xiaoming; //报错

//   因为 Animal和 Rhino共享了来自 Animal里的私有成员定义 private name: string，因此它们是兼容的。
//   然而 Employee却不是这样。当把 Employee赋值给 Animal的时候，得到一个错误，说它们的类型不兼容。
//   尽管 Employee里也有一个私有成员 name，但它明显不是 Animal里面定义的那个。



// protected   派生类可以访问，生成实例化对象后的外部无法访问
// public      三个地方都可以访问
// private     只有基类自己可以访问


//  构造函数也可以被标记成 protected。 这意味着这个类不能在包含它的类外被实例化，但是能被继承。（ 只能继承的类 ）

//  readonly  修饰符 将类的属性设置为只读；

// 参数属性  通过访问限定符在构造函数中去直接定义并初始化一个成员；
class Drinks{
  constructor(
    public name:string
  ){
    this.name = name;
  }
}


//  存储器，需要在tsconfig中配置target:ES6
let password = 'heihei';

class Employee{
  //存储器的属性时私有的。
  private _xxx:string;
  //获取这个属性时的返回值
  get fullName():string{
    return this._xxx;
  }
  //设置这个属性时的判断
  set fullName(newName: string){
    if( password && password == 'heihei' ){
      this._xxx = newName;
    }else{
      console.log('Error');
    }
  }
  //只带有 get不带有 set的存取器自动被推断为 readonly。
}

let employee = new Employee();
employee.fullName = 'heiheihei';
if( employee.fullName ){
  console.log( employee.fullName );
}


//类的实例成员:那些仅当类被实例化的时候才会被初始化的属性。   实例化后类中this调用属性
//类的静态成员:这些属性存在于类本身上面而不是类的实例上。     用类的名字调用属性     static定义


// let miss = new Miss( );    abstract后实例会报错；
// console.log( Miss.state.a );   //外面也是直接用这个类的名字调用而不是实例化对象的名字

//  抽象类：做为其它派生类的基类使用。 它们一般不会直接被实例化。      不同于接口，抽象类可以包含成员的实现细节。
// abstract关键字是用于定义抽象类和在抽象类内部定义抽象方法。

abstract class Miss{
  //定义这个类的静态属性
  static state = {
    a:1,
    b:2,
    c:3,
  }

  constructor( public name?:string ){
    console.log( `my name is ${ this.name }` );
  }
  // 抽象类中的抽象方法不包含具体实现并且必须在派生类中实现。   派生类中必须含有此方法；
  abstract makeSound(): void;

  protected makeMiss(){
    console.log( this.name )
  }
}
class MissShe extends Miss{
  constructor( name:string ){
    super( name );
    console.log( Miss.state.a );
  }
  makeSound(){
    console.log('hi girl');
  }
  makeOther(){
    console.log( 'other' );
  }
};
class MissHe extends Miss{
  constructor( name:string ){
    super( name );
  }
  makeSound(){

  }
}
let she:Miss;
she = new MissShe( `xiaoMing` );
she.makeSound();
// she.makeOther();  //  如果一开始对she进行一个抽象类型的引用，这里是会报错的，应该是只允许有接口的方法； 不引用直接进行实例是不影响的。
let he = new MissHe( `xiaoHong` );




//
abstract class Department {

    constructor(public name: string) {
    }

    printName(): void {
        console.log('Department name: ' + this.name);
    }

    abstract printMeeting(): void; // 必须在派生类中实现
}

class AccountingDepartment extends Department {

    constructor() {
        super('Accounting and Auditing'); // 在派生类的构造函数中必须调用 super()
    }

    printMeeting(): void {
        console.log('The Accounting Department meets each Monday at 10am.');
    }

    generateReports(): void {
        console.log('Generating accounting reports...');
    }
}

let department: Department; // 允许创建一个对抽象类型的引用
// department = new Department(); // 错误: 不能创建一个抽象类的实例
department = new AccountingDepartment(); // 允许对一个抽象子类进行实例化和赋值
department.printName();
department.printMeeting();
// department.generateReports(); // 错误: 方法在声明的抽象类中不存在

//高级技巧  .......
//构造函数

//     类定义会创建两个东西：类的实例类型和一个构造函数。
class Wonder {
    //静态属性与构造函数
    static standardGreeting = "Hello, there";
    greeting: string;
    //实例类型
    greet() {
        if (this.greeting) {
            return "Hello, " + this.greeting;
        }
        else {
            return Wonder.standardGreeting;
        }
    }
}
let first:Wonder;              //first类的实例 的类型是 Wonder;  把类当做接口使用
first = new Wonder();
console.log( first.greet() );

let second:typeof Wonder = Wonder;             //   这个变量保存了类的构造函数
second.standardGreeting = "Hey there!";

let third:Wonder = new second();
console.log( third.greet() );
