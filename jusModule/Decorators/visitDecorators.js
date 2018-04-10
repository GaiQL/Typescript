var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var Greeterzzz = (function () {
    function Greeterzzz(message) {
        this.greeting = message;
    }
    Greeterzzz.prototype.greet = function () {
        return "Hello, " + this.greeting;
    };
    Greeterzzz.prototype.heihei = function () {
    };
    __decorate([
        zsealedzz(false),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], Greeterzzz.prototype, "greet", null);
    return Greeterzzz;
}());
function zsealedzz(value) {
    return function (target, propertyKey, descriptor) {
        console.log(target);
        console.log(propertyKey);
        console.log(descriptor);
        descriptor.enumerable = value;
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlzaXREZWNvcmF0b3JzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vRGVjb3JhdG9ycy92aXNpdERlY29yYXRvcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBc0JBO0lBRUksb0JBQVksT0FBZTtRQUN2QixJQUFJLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQztJQUM1QixDQUFDO0lBR0QsMEJBQUssR0FBTDtRQUNJLE1BQU0sQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUNyQyxDQUFDO0lBQ0QsMkJBQU0sR0FBTjtJQUVBLENBQUM7SUFMRDtRQURDLFNBQVMsQ0FBQyxLQUFLLENBQUM7Ozs7MkNBR2hCO0lBSUwsaUJBQUM7Q0FBQSxBQWJELElBYUM7QUFFRCxtQkFBbUIsS0FBYztJQUM3QixNQUFNLENBQUMsVUFBVSxNQUFXLEVBQUUsV0FBbUIsRUFBRSxVQUE4QjtRQUU3RSxPQUFPLENBQUMsR0FBRyxDQUFFLE1BQU0sQ0FBRSxDQUFDO1FBRXRCLE9BQU8sQ0FBQyxHQUFHLENBQUUsV0FBVyxDQUFFLENBQUM7UUFFM0IsT0FBTyxDQUFDLEdBQUcsQ0FBRSxVQUFVLENBQUUsQ0FBQztRQUMxQixVQUFVLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztJQUNsQyxDQUFDLENBQUM7QUFDTixDQUFDIn0=