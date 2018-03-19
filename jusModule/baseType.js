var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
var isDone = false;
var Num = 12;
var hexLiteral = 0xf00d;
var str = 'haha';
var Name = 'live';
var Age = 123;
var RMB = " My name is " + Name + " , i will be " + Age + " years old in next month";
var list = [321, '321', true];
var secondList = [123, 321];
var tupleDemo;
tupleDemo = [1, '1', true];
tupleDemo = [1, '1', true];
console.log(tupleDemo[0]);
var Color;
(function (Color) {
    Color[Color["Red"] = 5] = "Red";
    Color[Color["heihei"] = 1] = "heihei";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
console.log(Color[5]);
console.log(Color.heihei);
var notSure = 4;
notSure.toFixed();
var prettySure = 4;
function warnUser() {
    alert("This is my warning message");
}
var u = undefined;
var n = null;
var someValue = "this is a string";
var strLength = someValue.length;
var someValueA = "this is a string";
var strLengthA = someValue.length;
if (someValueA) {
    var strAB = 'hahah';
}
var _a = [1, 2, 3, 4], first = _a[0], rest = _a.slice(1);
console.log(first);
console.log(rest);
var _b = [5, 6, 7, 8], O = _b[1], F = _b[3];
console.log(O);
var v, z;
(_c = { z: "baz", v: 101 }, z = _c.z, v = _c.v);
var o = {
    a: 1,
    b: 2,
    v: 3
};
var a = o.a, b = __rest(o, ["a"]);
console.log(b);
var hei = o.a, ha = o.b;
console.log(hei, ha);
var heih = o.a, hah = o.b;
console.log(hei, hah);
function keepWholeObject(wholeObject) {
    console.log(wholeObject);
    var a = wholeObject.a, _a = wholeObject.b, b = _a === void 0 ? 1001 : _a;
}
keepWholeObject({ a: 'heihei' });
function f(_a) {
    var _b = _a === void 0 ? { a: "", b: 0 } : _a, a = _b.a, b = _b.b;
}
f();
var firstA = [1, 2];
var secondA = [3, 4];
var bothPlusA = [0].concat(firstA, secondA, [5]);
var defaults = { food: "rice", price: "$10", ambiance: "noisy" };
var search = __assign({}, defaults, { food: "heihei" });
var C = (function () {
    function C() {
        this.p = 12;
    }
    C.prototype.m = function () {
    };
    return C;
}());
var c = new C();
var clone = __assign({}, c);
clone.p;
var _c;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZVR5cGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9iYXNlVHlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUdBLElBQUksTUFBTSxHQUFXLEtBQUssQ0FBQztBQUUzQixJQUFJLEdBQUcsR0FBVSxFQUFFLENBQUM7QUFDcEIsSUFBSSxVQUFVLEdBQVcsTUFBTSxDQUFDO0FBR2hDLElBQUksR0FBRyxHQUFVLE1BQU0sQ0FBQztBQUN4QixJQUFJLElBQUksR0FBVSxNQUFNLENBQUM7QUFDekIsSUFBSSxHQUFHLEdBQVUsR0FBRyxDQUFDO0FBQ3JCLElBQUksR0FBRyxHQUFHLGlCQUFnQixJQUFJLHFCQUFrQixHQUFHLDZCQUEyQixDQUFBO0FBSTlFLElBQUksSUFBSSxHQUFnQyxDQUFDLEdBQUcsRUFBQyxLQUFLLEVBQUMsSUFBSSxDQUFDLENBQUU7QUFDMUQsSUFBSSxVQUFVLEdBQVksQ0FBQyxHQUFHLEVBQUMsR0FBRyxDQUFDLENBQUM7QUFHcEMsSUFBSSxTQUFpQyxDQUFDO0FBQ3RDLFNBQVMsR0FBRyxDQUFDLENBQUMsRUFBQyxHQUFHLEVBQUMsSUFBSSxDQUFDLENBQUE7QUFFeEIsU0FBUyxHQUFHLENBQUMsQ0FBQyxFQUFDLEdBQUcsRUFBQyxJQUFJLENBQUMsQ0FBQTtBQUV4QixPQUFPLENBQUMsR0FBRyxDQUFFLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBRyxDQUFBO0FBSTVCLElBQUssS0FBbUM7QUFBeEMsV0FBSyxLQUFLO0lBQUcsK0JBQU8sQ0FBQTtJQUFDLHFDQUFZLENBQUE7SUFBQyxpQ0FBSSxDQUFBO0FBQUMsQ0FBQyxFQUFuQyxLQUFLLEtBQUwsS0FBSyxRQUE4QjtBQUV4QyxPQUFPLENBQUMsR0FBRyxDQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBRSxDQUFBO0FBQ3ZCLE9BQU8sQ0FBQyxHQUFHLENBQUUsS0FBSyxDQUFDLE1BQU0sQ0FBRSxDQUFBO0FBSTNCLElBQUks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