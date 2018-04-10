/**

    访问器装饰器:


 */
 /*
        类装饰器表达式会在运行时当作函数被调用，类的构造函数作为其唯一的参数。
        方法装饰器表达式会在运行时当作函数被调用，传入下列3个参数。
        访问器装饰器表达式会在运行时当作函数被调用，传入下列3个参数。
        属性装饰器表达式会在运行时当作函数被调用，传入下列2个参数：
          1、对于静态成员来说是类的构造函数，对于实例成员是类的原型对象。
          2、成员的名字。
          属性描述符只能用来监视类中是否声明了某个名字的属性。

        参数装饰器表达式会在运行时当作函数被调用，传入下列3个参数：
          1、对于静态成员来说是类的构造函数，对于实例成员是类的原型对象。
          2、成员的名字。
          3、参数在函数参数列表中的索引。
          参数装饰器只能用来监视一个方法的参数是否被传入。

 */
class Greeterzzz {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }

    @zsealedzz(false)
    greet() {
        return "Hello, " + this.greeting;
    }
    heihei(){

    }
}

function zsealedzz(value: boolean) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        // 对于静态成员来说是类的构造函数，对于实例成员是类的原型对象。
        console.log( target );
        // 成员的名字。
        console.log( propertyKey );
        // 成员的属性描述符。
        console.log( descriptor );
        descriptor.enumerable = value;
    };
}
