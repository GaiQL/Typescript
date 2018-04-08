var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
class GreeterF {
    constructor(message) {
        this.greeting = message;
    }
    greet() {
        return "Hello, " + this.greeting;
    }
}
__decorate([
    enumerable(false)
], GreeterF.prototype, "greet", null);
function enumerable(value) {
    return function (target, propertyKey, descriptor) {
        console.log(descriptor);
        descriptor.enumerable = value;
    };
}
let objz = new GreeterF('嘿');
console.log(objz.greet.prototype);
console.log('heihei');
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnVuY3Rpb25EZWNvcmF0b3JzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vRGVjb3JhdG9ycy9mdW5jdGlvbkRlY29yYXRvcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBMkJFO0lBRUksWUFBWSxPQUFlO1FBQ3ZCLElBQUksQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDO0lBQzVCLENBQUM7SUFHRCxLQUFLO1FBQ0QsTUFBTSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3JDLENBQUM7Q0FDSjtBQUhHO0lBREMsVUFBVSxDQUFDLEtBQUssQ0FBQztxQ0FHakI7QUFHTCxvQkFBb0IsS0FBYztJQUNoQyxNQUFNLENBQUMsVUFBVSxNQUFXLEVBQUUsV0FBbUIsRUFBRSxVQUE4QjtRQUM3RSxPQUFPLENBQUMsR0FBRyxDQUFFLFVBQVUsQ0FBRSxDQUFDO1FBQzFCLFVBQVUsQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO0lBQ2xDLENBQUMsQ0FBQztBQUNKLENBQUM7QUFFSCxJQUFJLElBQUksR0FBRyxJQUFJLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUM3QixPQUFPLENBQUMsR0FBRyxDQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFFLENBQUM7QUFFcEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyJ9