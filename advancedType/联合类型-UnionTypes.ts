
//  联合类型与交叉类型很有关联，但是使用上却完全不同。

//  联合类型：

function padLeft(value: string, padding: any) {
    if (typeof padding === "number") {
        return Array(padding + 1).join(" ") + value;
    }
    if (typeof padding === "string") {
        return padding + value;
    }
    throw new Error(`Expected string or number, got '${padding}'.`);
}

padLeft("Hello world",true); //  运行时会抛出错误，padding类型既不是Number,也不是string

//  用联合类型代替 any   :    padding: string | number  ;



//如果一个值是联合类型 ， 我们只能访问此联合类型的所有类型里共有的成员。

interface Bird {
    fly():void;
    layEggs:() => void;
}

interface Fish {
    swim():void;
    layEggs():void;
}

function getSmallPet(): Fish | Bird {
    // ...
    return {
      layEggs:function(){},
      fly:function(){}
    }
}

let pet = getSmallPet();
pet.layEggs(); // okay
// 他在这里是不清楚pet的类型的，去实现了哪个接口，Bird?还是Fish?，所以调用不相同的方法会报错，写清楚一个方法让程序知道这里是实现了哪个接口，就可以调用了。(类型谓词 )
// pet.swim();    // errors
// pet.fly();    // errors
//  如果想让上面的方法正常工作；使用类型断言；
(<Bird>pet).fly();
(<Fish>pet).swim();

//    |   去实现其中一个接口，但是访问调用的时候只能使用它们的共同成员；
//    &   去实现所有接口，可访问调用所有成员；
