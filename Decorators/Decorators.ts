

// 装饰器（Decorators）:
//    为我们在类的声明及成员上通过元编程语法添加标注提供了一种方式。


// 注意  装饰器是一项实验性特性，在未来的版本中可能会发生改变!!!!!!!
// 若要启用实验性的装饰器特性，你必须在命令行或tsconfig.json里启用experimentalDecorators编译器选项：

// 装饰器是一种特殊类型的声明，它能够被附加到类声明，方法， 访问符，属性或参数上。

//  装饰器使用 @expression这种形式，expression求值后必须为一个函数，它会在运行时被调用，被装饰的声明信息做为参数传入。

function sealed(target:any) {
    // do something with "target" ...
}


//  装饰器工厂
//  如果我们要定制一个修饰器如何应用到一个声明上，我们得写一个装饰器工厂函数。
function color(value: string) { // 这是一个装饰器工厂
    return function ( target:any ) { //  这是装饰器
        // do something with "target" and "value"...
    }
}

function fz() {
    console.log("f(): evaluated");
    return function (target:any, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log( descriptor );
        console.log( propertyKey );
        console.log( target );
        console.log("f(): called");
    }
}

function gz() {
    console.log("g(): evaluated");
    return function (target:any, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log("g(): called");
    }
}

class Czz {
    @fz()
    @gz()
    method(){}
}


/*

装饰器求值
  类中不同声明上的装饰器将按以下规定的顺序应用：
    1、参数装饰器，然后依次是方法装饰器，访问符装饰器，或属性装饰器应用到每个实例成员。
    2、参数装饰器，然后依次是方法装饰器，访问符装饰器，或属性装饰器应用到每个静态成员。
    3、参数装饰器应用到构造函数。
    4、类装饰器应用到类。

*/

/*

    类装饰器:

    类装饰器在类声明之前被声明（紧靠着类声明）。
    类装饰器应用于类构造函数，可以用来监视，修改或替换类定义。
    类装饰器不能用在声明文件中( .d.ts)，
    也不能用在任何外部上下文中（比如declare的类）。

    类装饰器表达式会在运行时当作函数被调用，类的构造函数作为其唯一的参数。

    如果类装饰器返回一个值，它会使用提供的构造函数来替换类的声明。

    注意 -------> 如果你要返回一个新的构造函数，你必须注意处理好原来的原型链。 在运行时的装饰器调用逻辑中 不会为你做这些。

*/
@sealedH
class Greeterzz {
    greeting: string;
    constructor(message: string) {
        console.log( '嘿嘿' );
        this.greeting = message;
    }
    greet() {
        console.log( '哈哈' );
        return "Hello, " + this.greeting;
    }
}
function sealedH(constructor: Function) {
    Object.seal(constructor);
    Object.seal(constructor.prototype);
}
console.log( new Greeterzz( '哈' ) );


// 重载构造函数
function classDecorator<T extends {new(...args:any[]):{}}>(constructor:T) {
    return class extends constructor {
        newProperty = "new property";
        hello = "override";
    }
}

@classDecorator
class GreeterX {
    property = "property";
    hello: string;
    constructor(m: string) {
        this.hello = m;
    }
}

console.log( new GreeterX("world") );
