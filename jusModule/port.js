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
function printLabel(labelledObj) {
    console.log(labelledObj.age);
}
var myObj = { size: 10, label: "Size 10 Object", name: "do it" };
printLabel(myObj);
var P = { name: 'haha', age: 1 };
P.age = 3;
var DCarr = [123, 321];
var DcarrB = DCarr;
function createSquare(config) {
    return;
}
var data = { colour: "red", width: 100 };
var mySquare = createSquare({ colour: "red", width: 100 });
var HE;
HE = function (src, sub) {
    console.log(src, sub);
    return false;
};
console.log(HE('123', '123'));
var SHE = function (src, sub) {
    console.log(src, sub);
    return '234';
};
var myArray;
myArray = { ab: 'sb' };
var myStr = myArray[0];
console.log(myArray['ab']);
var HERO;
HERO = { a: 3, b: 4, length: 213 };
var colck = (function () {
    function colck() {
    }
    colck.prototype.constructro = function (hour) {
        this.currentTime = new Date();
    };
    colck.prototype.setTime = function (heihei) {
        console.log(heihei);
    };
    return colck;
}());
function Create(ctor, str, num) {
    return new ctor(str, num);
}
var DigitalClock = (function () {
    function DigitalClock(h, m) {
    }
    DigitalClock.prototype.talk = function () {
        console.log("beep beep");
    };
    return DigitalClock;
}());
var AnalogClock = (function () {
    function AnalogClock(h, m) {
    }
    AnalogClock.prototype.talk = function () {
        console.log("tick tock");
    };
    return AnalogClock;
}());
var digital = Create(DigitalClock, 12, 17);
var analog = Create(AnalogClock, 7, 32);
analog.talk();
var square = {};
square.color = 'hei';
square.penWidth = 123;
function getCounter() {
    var counter = function (start) { };
    counter.interval = 123;
    counter.reset = function () { console.log('哈哈'); };
    return counter;
}
var Reset = getCounter();
console.log(Reset.interval);
Reset.reset();
var Control = (function () {
    function Control() {
    }
    return Control;
}());
var Button = (function (_super) {
    __extends(Button, _super);
    function Button() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Button.prototype.select = function () { };
    return Button;
}(Control));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9ydC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL+aOpeWPoy9wb3J0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFRQSxvQkFBb0IsV0FBMEI7SUFDNUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDL0IsQ0FBQztBQUVELElBQUksS0FBSyxHQUFHLEVBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsZ0JBQWdCLEVBQUMsSUFBSSxFQUFDLE9BQU8sRUFBQyxDQUFDO0FBQzdELFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQVFsQixJQUFJLENBQUMsR0FBVSxFQUFFLElBQUksRUFBQyxNQUFNLEVBQUMsR0FBRyxFQUFDLENBQUMsRUFBRSxDQUFDO0FBQ3JDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDO0FBSVYsSUFBSSxLQUFLLEdBQTJCLENBQUUsR0FBRyxFQUFDLEdBQUcsQ0FBRSxDQUFDO0FBSWhELElBQUksTUFBTSxHQUFZLEtBQXNCLENBQUE7QUFnQjVDLHNCQUFzQixNQUFvQjtJQUN0QyxNQUFNLENBQUE7QUFDVixDQUFDO0FBRUQsSUFBSSxJQUFJLEdBQUcsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsQ0FBQTtBQUV4QyxJQUFJLFFBQVEsR0FBRyxZQUFZLENBQUMsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDO0FBcUIzRCxJQUFJLEVBQWEsQ0FBQTtBQUVqQixFQUFFLEdBQUcsVUFBVSxHQUFHLEVBQUMsR0FBRztJQUNwQixPQUFPLENBQUMsR0FBRyxDQUFFLEdBQUcsRUFBQyxHQUFHLENBQUUsQ0FBQTtJQUN0QixNQUFNLENBQUMsS0FBSyxDQUFBO0FBQ2QsQ0FBQyxDQUFBO0FBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBRSxFQUFFLENBQUUsS0FBSyxFQUFD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