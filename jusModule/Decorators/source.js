System.register(["reflect-metadata"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __moduleName = context_1 && context_1.id;
    function validate(target, propertyKey, descriptor) {
        var set = descriptor.set;
        descriptor.set = function (value) {
            var type = Reflect.getMetadata("design:type", target, propertyKey);
            if (!(value instanceof type)) {
                throw new TypeError("Invalid type.");
            }
            set(value);
        };
    }
    var Line;
    return {
        setters: [
            function (_1) {
            }
        ],
        execute: function () {
            Line = (function () {
                function Line() {
                }
                Object.defineProperty(Line.prototype, "p0", {
                    get: function () { return this._p0; },
                    set: function (value) { this._p0 = value; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Line.prototype, "p1", {
                    get: function () { return this._p1; },
                    set: function (value) { this._p1 = value; },
                    enumerable: true,
                    configurable: true
                });
                __decorate([
                    validate,
                    Reflect.metadata("design:type", Point),
                    __metadata("design:type", Object),
                    __metadata("design:paramtypes", [Object])
                ], Line.prototype, "p0", null);
                __decorate([
                    validate,
                    Reflect.metadata("design:type", Point),
                    __metadata("design:type", Object),
                    __metadata("design:paramtypes", [Object])
                ], Line.prototype, "p1", null);
                return Line;
            }());
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291cmNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vRGVjb3JhdG9ycy9zb3VyY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0lBdUJBLGtCQUFxQixNQUFXLEVBQUUsV0FBbUIsRUFBRSxVQUFzQztRQUN6RixJQUFJLEdBQUcsR0FBRyxVQUFVLENBQUMsR0FBRyxDQUFDO1FBQ3pCLFVBQVUsQ0FBQyxHQUFHLEdBQUcsVUFBVSxLQUFRO1lBQy9CLElBQUksSUFBSSxHQUFHLE9BQU8sQ0FBQyxXQUFXLENBQUMsYUFBYSxFQUFFLE1BQU0sRUFBRSxXQUFXLENBQUMsQ0FBQztZQUNuRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxZQUFZLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDM0IsTUFBTSxJQUFJLFNBQVMsQ0FBQyxlQUFlLENBQUMsQ0FBQztZQUN6QyxDQUFDO1lBQ0QsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2YsQ0FBQyxDQUFBO0lBQ0wsQ0FBQzs7Ozs7Ozs7O2dCQXhCRDtnQkFhQSxDQUFDO2dCQVBHLHNCQUFJLG9CQUFFO3lCQUNOLGNBQVcsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO3lCQUQ3QixVQUFPLEtBQVksSUFBSSxJQUFJLENBQUMsR0FBRyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUM7OzttQkFBQTtnQkFLMUMsc0JBQUksb0JBQUU7eUJBQ04sY0FBVyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7eUJBRDdCLFVBQU8sS0FBWSxJQUFJLElBQUksQ0FBQyxHQUFHLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQzs7O21CQUFBO2dCQUwxQztvQkFGQyxRQUFRO29CQUNSLE9BQU8sQ0FBQyxRQUFRLENBQUMsYUFBYSxFQUFFLEtBQUssQ0FBQzs7OzhDQUNHO2dCQUsxQztvQkFGQyxRQUFRO29CQUNSLE9BQU8sQ0FBQyxRQUFRLENBQUMsYUFBYSxFQUFFLEtBQUssQ0FBQzs7OzhDQUNHO2dCQUU5QyxXQUFDO2FBQUEsQUFiRDtRQXlCQSxDQUFDIn0=