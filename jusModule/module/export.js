System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var numberRegexp, ZipCodeValidator;
    return {
        setters: [],
        execute: function () {
            numberRegexp = /^[0-9]+$/;
            exports_1("numberRegexp", numberRegexp);
            ZipCodeValidator = (function () {
                function ZipCodeValidator(name, age) {
                    this.name = name;
                    this.age = age;
                }
                ZipCodeValidator.prototype.isAcceptable = function (s) {
                    return s.length === 5 && numberRegexp.test(s);
                };
                return ZipCodeValidator;
            }());
            exports_1("heihei", ZipCodeValidator);
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwb3J0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vbW9kdWxlL2V4cG9ydC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O1lBTU0sWUFBWSxHQUFHLFVBQVUsQ0FBQzs7WUFFaEM7Z0JBR0ksMEJBQWEsSUFBVyxFQUFDLEdBQVU7b0JBQ2pDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO29CQUNqQixJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztnQkFDakIsQ0FBQztnQkFDRCx1Q0FBWSxHQUFaLFVBQWEsQ0FBUztvQkFDbEIsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxJQUFJLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ2xELENBQUM7Z0JBQ0wsdUJBQUM7WUFBRCxDQUFDLEFBVkQsSUFVQzs7UUFXRCxDQUFDIn0=