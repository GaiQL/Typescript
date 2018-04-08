var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function sealed(target) {
}
function color(value) {
    return function (target) {
    };
}
function fz() {
    let str = '123';
    console.log("f(): evaluated");
    return function (target, propertyKey, descriptor) {
        console.log("f(): called");
    };
}
function gz() {
    console.log("g(): evaluated");
    return function (target, propertyKey, descriptor) {
        console.log("g(): called");
    };
}
class Czz {
    method() { }
}
__decorate([
    fz(),
    gz()
], Czz.prototype, "method", null);
let Greeterzz = class Greeterzz {
    constructor(message) {
        console.log('嘿嘿');
        this.greeting = message;
    }
    greet() {
        console.log('哈哈');
        return "Hello, " + this.greeting;
    }
};
Greeterzz = __decorate([
    sealedH
], Greeterzz);
function sealedH(constructor) {
    Object.seal(constructor);
    Object.seal(constructor.prototype);
}
console.log(new Greeterzz('哈'));
function classDecorator(constructor) {
    return class extends constructor {
        constructor() {
            super(...arguments);
            this.newProperty = "new property";
            this.hello = "override";
        }
    };
}
let GreeterX = class GreeterX {
    constructor(m) {
        this.property = "property";
        this.hello = m;
    }
};
GreeterX = __decorate([
    classDecorator
], GreeterX);
console.log(new GreeterX("world"));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGVjb3JhdG9ycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL0RlY29yYXRvcnMvRGVjb3JhdG9ycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFhQSxnQkFBZ0IsTUFBVTtBQUUxQixDQUFDO0FBSUQsZUFBZSxLQUFhO0lBQ3hCLE1BQU0sQ0FBQyxVQUFXLE1BQVU7SUFFNUIsQ0FBQyxDQUFBO0FBQ0wsQ0FBQztBQUVEO0lBQ0ksSUFBSSxHQUFHLEdBQVUsS0FBSyxDQUFDO0lBQ3ZCLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUM5QixNQUFNLENBQUMsVUFBVSxNQUFVLEVBQUUsV0FBbUIsRUFBRSxVQUE4QjtRQUM1RSxPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQy9CLENBQUMsQ0FBQTtBQUNMLENBQUM7QUFFRDtJQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUM5QixNQUFNLENBQUMsVUFBVSxNQUFVLEVBQUUsV0FBbUIsRUFBRSxVQUE4QjtRQUM1RSxPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQy9CLENBQUMsQ0FBQTtBQUNMLENBQUM7QUFFRDtJQUdJLE1BQU0sS0FBRyxDQUFDO0NBQ2I7QUFERztJQUZDLEVBQUUsRUFBRTtJQUNKLEVBQUUsRUFBRTtpQ0FDSztBQWdDZCxJQUFNLFNBQVMsR0FBZjtJQUVJLFlBQVksT0FBZTtRQUN2QixPQUFPLENBQUMsR0FBRyxDQUFFLElBQUksQ0FBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDO0lBQzVCLENBQUM7SUFDRCxLQUFLO1FBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBRSxJQUFJLENBQUUsQ0FBQztRQUNwQixNQUFNLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDckMsQ0FBQztDQUNKLENBQUE7QUFWSyxTQUFTO0lBRGQsT0FBTztHQUNGLFNBQVMsQ0FVZDtBQUNELGlCQUFpQixXQUFxQjtJQUNsQyxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3pCLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQ3ZDLENBQUM7QUFDRCxPQUFPLENBQUMsR0FBRyxDQUFFLElBQUksU0FBUyxDQUFFLEdBQUcsQ0FBRSxDQUFFLENBQUM7QUFJcEMsd0JBQTJELFdBQWE7SUFDcEUsTUFBTSxDQUFDLEtBQU0sU0FBUSxXQUFXO1FBQXpCOztZQUNILGdCQUFXLEdBQUcsY0FBYyxDQUFDO1lBQzdCLFVBQUssR0FBRyxVQUFVLENBQUM7UUFDdkIsQ0FBQztLQUFBLENBQUE7QUFDTCxDQUFDO0FBR0QsSUFBTSxRQUFRLEdBQWQ7SUFHSSxZQUFZLENBQVM7UUFGckIsYUFBUSxHQUFHLFVBQVUsQ0FBQztRQUdsQixJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztJQUNuQixDQUFDO0NBQ0osQ0FBQTtBQU5LLFFBQVE7SUFEYixjQUFjO0dBQ1QsUUFBUSxDQU1iO0FBRUQsT0FBTyxDQUFDLEdBQUcsQ0FBRSxJQUFJLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBRSxDQUFDIn0=