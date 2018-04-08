System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var numberRegexp, ZipCodeValidator;
    return {
        setters: [],
        execute: function () {
            numberRegexp = /^[0-9]+$/;
            exports_1("numberRegexp", numberRegexp);
            ZipCodeValidator = class ZipCodeValidator {
                constructor(name, age) {
                    this.name = name;
                    this.age = age;
                }
                isAcceptable(s) {
                    return s.length === 5 && numberRegexp.test(s);
                }
            };
            exports_1("heihei", ZipCodeValidator);
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwb3J0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vbW9kdWxlL2V4cG9ydC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O1lBTU0sWUFBWSxHQUFHLFVBQVUsQ0FBQzs7WUFFaEMsbUJBQUE7Z0JBR0ksWUFBYSxJQUFXLEVBQUMsR0FBVTtvQkFDakMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7b0JBQ2pCLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO2dCQUNqQixDQUFDO2dCQUNELFlBQVksQ0FBQyxDQUFTO29CQUNsQixNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU0sS0FBSyxDQUFDLElBQUksWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDbEQsQ0FBQzthQUNKLENBQUE7O1FBV0QsQ0FBQyJ9