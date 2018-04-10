
//        这两个类  mixins   两个类的合并？？？
class Disposable {
    isDisposed: boolean;
    dispose() {
        this.isDisposed = true;
    }

}

// Activatable Mixin
class Activatable {
    isActive: boolean;
    activate() {
        this.isActive = true;
    }
    deactivate() {
        console.log(123);
        this.isActive = false;
    }
}

//  我们使用它们来创建一个新类，同时具有这两种功能。
class SmartObjectC implements Disposable, Activatable {
    // 需要提前定义一些占位属性。
  isDisposed: boolean = false;
  dispose: () => void;
  isActive: boolean = false;
  activate: () => void;
  deactivate: () => void;
}


function applyMixins(derivedCtor: any, baseCtors: any[]) {
    baseCtors.forEach(baseCtor => {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
            derivedCtor.prototype[name] = baseCtor.prototype[name];
        })
    });
}

applyMixins(SmartObjectC, [Disposable, Activatable]);
console.log( new SmartObjectC().deactivate );
