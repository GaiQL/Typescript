var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
function sealed(target) {
}
function color(value) {
    return function (target) {
    };
}
function fz() {
    console.log("f(): evaluated");
    return function (target, propertyKey, descriptor) {
        console.log(descriptor);
        console.log(propertyKey);
        console.log(target);
        console.log("f(): called");
    };
}
function gz() {
    console.log("g(): evaluated");
    return function (target, propertyKey, descriptor) {
        console.log("g(): called");
    };
}
var Czz = (function () {
    function Czz() {
    }
    Czz.prototype.method = function () { };
    __decorate([
        fz(),
        gz(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], Czz.prototype, "method", null);
    return Czz;
}());
var Greeterzz = (function () {
    function Greeterzz(message) {
        console.log('嘿嘿');
        this.greeting = message;
    }
    Greeterzz.prototype.greet = function () {
        console.log('哈哈');
        return "Hello, " + this.greeting;
    };
    Greeterzz = __decorate([
        sealedH,
        __metadata("design:paramtypes", [String])
    ], Greeterzz);
    return Greeterzz;
}());
function sealedH(constructor) {
    Object.seal(constructor);
    Object.seal(constructor.prototype);
}
console.log(new Greeterzz('哈'));
function classDecorator(constructor) {
    return (function (_super) {
        __extends(class_1, _super);
        function class_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.newProperty = "new property";
            _this.hello = "override";
            return _this;
        }
        return class_1;
    }(constructor));
}
var GreeterX = (function () {
    function GreeterX(m) {
        this.property = "property";
        this.hello = m;
    }
    GreeterX = __decorate([
        classDecorator,
        __metadata("design:paramtypes", [String])
    ], GreeterX);
    return GreeterX;
}());
console.log(new GreeterX("world"));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGVjb3JhdG9ycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL0RlY29yYXRvcnMvRGVjb3JhdG9ycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBYUEsZ0JBQWdCLE1BQVU7QUFFMUIsQ0FBQztBQUtELGVBQWUsS0FBYTtJQUN4QixNQUFNLENBQUMsVUFBVyxNQUFVO0lBRTVCLENBQUMsQ0FBQTtBQUNMLENBQUM7QUFFRDtJQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUM5QixNQUFNLENBQUMsVUFBVSxNQUFVLEVBQUUsV0FBbUIsRUFBRSxVQUE4QjtRQUM1RSxPQUFPLENBQUMsR0FBRyxDQUFFLFVBQVUsQ0FBRSxDQUFDO1FBQzFCLE9BQU8sQ0FBQyxHQUFHLENBQUUsV0FBVyxDQUFFLENBQUM7UUFDM0IsT0FBTyxDQUFDLEdBQUcsQ0FBRSxNQUFNLENBQUUsQ0FBQztRQUN0QixPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQy9CLENBQUMsQ0FBQTtBQUNMLENBQUM7QUFFRDtJQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUM5QixNQUFNLENBQUMsVUFBVSxNQUFVLEVBQUUsV0FBbUIsRUFBRSxVQUE4QjtRQUM1RSxPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQy9CLENBQUMsQ0FBQTtBQUNMLENBQUM7QUFFRDtJQUFBO0lBSUEsQ0FBQztJQURHLG9CQUFNLEdBQU4sY0FBUyxDQUFDO0lBQVY7UUFGQyxFQUFFLEVBQUU7UUFDSixFQUFFLEVBQUU7Ozs7cUNBQ0s7SUFDZCxVQUFDO0NBQUEsQUFKRCxJQUlDO0FBK0JEO0lBRUksbUJBQVksT0FBZTtRQUN2QixPQUFPLENBQUMsR0FBRyxDQUFFLElBQUksQ0FBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDO0lBQzVCLENBQUM7SUFDRCx5QkFBSyxHQUFMO1FBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBRSxJQUFJLENBQUUsQ0FBQztRQUNwQixNQUFNLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDckMsQ0FBQztJQVRDLFNBQVM7UUFEZCxPQUFPOztPQUNGLFNBQVMsQ0FVZDtJQUFELGdCQUFDO0NBQUEsQUFWRCxJQVVDO0FBQ0QsaUJBQWlCLFdBQXFCO0lBQ2xDLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDekIsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDdkMsQ0FBQztBQUNELE9BQU8sQ0FBQyxHQUFHLENBQUUsSUFBSSxTQUFTLENBQUUsR0FBRyxDQUFFLENBQUUsQ0FBQztBQUlwQyx3QkFBMkQsV0FBYTtJQUNwRSxNQUFNO1FBQWUsMkJBQVc7UUFBekI7WUFBQSxxRUFHTjtZQUZHLGlCQUFXLEdBQUcsY0FBYyxDQUFDO1lBQzdCLFdBQUssR0FBRyxVQUFVLENBQUM7O1FBQ3ZCLENBQUM7UUFBRCxjQUFDO0lBQUQsQ0FBQyxBQUhNLENBQWMsV0FBVyxHQUcvQjtBQUNMLENBQUM7QUFHRDtJQUdJLGtCQUFZLENBQVM7UUFGckIsYUFBUSxHQUFHLFVBQVUsQ0FBQztRQUdsQixJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztJQUNuQixDQUFDO0lBTEMsUUFBUTtRQURiLGNBQWM7O09BQ1QsUUFBUSxDQU1iO0lBQUQsZUFBQztDQUFBLEFBTkQsSUFNQztBQUVELE9BQU8sQ0FBQyxHQUFHLENBQUUsSUFBSSxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUUsQ0FBQyJ9