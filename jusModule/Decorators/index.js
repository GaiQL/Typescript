var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function fz() {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9EZWNvcmF0b3JzL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQVlBO0lBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQzlCLE1BQU0sQ0FBQyxVQUFVLE1BQVUsRUFBRSxXQUFtQixFQUFFLFVBQThCO1FBQzVFLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDL0IsQ0FBQyxDQUFBO0FBQ0wsQ0FBQztBQUVEO0lBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQzlCLE1BQU0sQ0FBQyxVQUFVLE1BQVUsRUFBRSxXQUFtQixFQUFFLFVBQThCO1FBQzVFLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDL0IsQ0FBQyxDQUFBO0FBQ0wsQ0FBQztBQUVEO0lBR0ksTUFBTSxLQUFHLENBQUM7Q0FDYjtBQURHO0lBRkMsRUFBRSxFQUFFO0lBQ0osRUFBRSxFQUFFO2lDQUNLIn0=