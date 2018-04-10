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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZVR5cGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9iYXNlQW5kU3RhdGVtZW50L2Jhc2VUeXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR0EsSUFBSSxNQUFNLEdBQVcsS0FBSyxDQUFDO0FBRTNCLElBQUksR0FBRyxHQUFVLEVBQUUsQ0FBQztBQUNwQixJQUFJLFVBQVUsR0FBVyxNQUFNLENBQUM7QUFHaEMsSUFBSSxHQUFHLEdBQVUsTUFBTSxDQUFDO0FBQ3hCLElBQUksSUFBSSxHQUFVLE1BQU0sQ0FBQztBQUN6QixJQUFJLEdBQUcsR0FBVSxHQUFHLENBQUM7QUFDckIsSUFBSSxHQUFHLEdBQUcsaUJBQWdCLElBQUkscUJBQWtCLEdBQUcsNkJBQTJCLENBQUE7QUFJOUUsSUFBSSxJQUFJLEdBQWdDLENBQUMsR0FBRyxFQUFDLEtBQUssRUFBQyxJQUFJLENBQUMsQ0FBRTtBQUMxRCxJQUFJLFVBQVUsR0FBWSxDQUFDLEdBQUcsRUFBQyxHQUFHLENBQUMsQ0FBQztBQUdwQyxJQUFJLFNBQWlDLENBQUM7QUFDdEMsU0FBUyxHQUFHLENBQUMsQ0FBQyxFQUFDLEdBQUcsRUFBQyxJQUFJLENBQUMsQ0FBQTtBQUV4QixTQUFTLEdBQUcsQ0FBQyxDQUFDLEVBQUMsR0FBRyxFQUFDLElBQUksQ0FBQyxDQUFBO0FBRXhCLE9BQU8sQ0FBQyxHQUFHLENBQUUsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFHLENBQUE7QUFJNUIsSUFBSyxLQUFtQztBQUF4QyxXQUFLLEtBQUs7SUFBRywrQkFBTyxDQUFBO0lBQUMscUNBQVksQ0FBQTtJQUFDLGlDQUFJLENBQUE7QUFBQyxDQUFDLEVBQW5DLEtBQUssS0FBTCxLQUFLLFFBQThCO0FBRXhDLE9BQU8sQ0FBQyxHQUFHLENBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFFLENBQUE7QUFDdkIsT0FBTyxDQUFDLEdBQUcsQ0FBRSxLQUFLLENBQUMsTUFBTSxD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