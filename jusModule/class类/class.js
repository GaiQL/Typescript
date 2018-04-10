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
var Greeter = (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.greet = function () {
        console.log(this.greeting);
    };
    return Greeter;
}());
var greeter = new Greeter('嘿嘿');
greeter.greet();
console.log(greeter.greeting);
var Animal = (function () {
    function Animal(Name) {
        this.name = Name;
    }
    Animal.prototype.move = function (num) {
        if (num === void 0) { num = 0; }
        console.log(this.name + " moved " + num + " m");
    };
    return Animal;
}());
var Dog = (function (_super) {
    __extends(Dog, _super);
    function Dog(name) {
        return _super.call(this, name) || this;
    }
    Dog.prototype.move = function (num) {
        if (num === void 0) { num = 50; }
        _super.prototype.move.call(this, num);
    };
    return Dog;
}(Animal));
var Snake = (function (_super) {
    __extends(Snake, _super);
    function Snake(name) {
        var _this = _super.call(this, name) || this;
        _this.weight = 50;
        console.log(_this.weight);
        return _this;
    }
    Snake.prototype.move = function (num) {
        if (num === void 0) { num = 50; }
        _super.prototype.move.call(this, num);
    };
    return Snake;
}(Animal));
var dog = new Dog('Dog');
var snake = new Snake('Snake');
dog.move(30);
snake.move(66);
var person = (function () {
    function person(name, age) {
        this.name = name;
        this.age = age;
    }
    person.prototype.Talkname = function () {
        console.log("My name is " + this.name);
    };
    person.prototype.TalkAge = function () {
        console.log("I'm " + this.age + " years old");
    };
    return person;
}());
var XiaoMing = new person('小名', 18);
XiaoMing.Talkname();
var hahahhaha = (function () {
    function hahahhaha() {
        this.name = '123';
    }
    return hahahhaha;
}());
var hahahahahahhah = new hahahhaha();
console.log(hahahahahahhah.name);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xhc3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9jbGFzc+exuy9jbGFzcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7SUFFRSxpQkFBYSxPQUFjO1FBQ3pCLElBQUksQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDO0lBQzFCLENBQUM7SUFDRCx1QkFBSyxHQUFMO1FBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBRSxJQUFJLENBQUMsUUFBUSxDQUFFLENBQUM7SUFDL0IsQ0FBQztJQUNILGNBQUM7QUFBRCxDQUFDLEFBUkQsSUFRQztBQUVELElBQUksT0FBTyxHQUFHLElBQUksT0FBTyxDQUFFLElBQUksQ0FBRSxDQUFDO0FBQ2xDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQztBQUNoQixPQUFPLENBQUMsR0FBRyxDQUFFLE9BQU8sQ0FBQyxRQUFRLENBQUUsQ0FBQztBQUloQztJQUVFLGdCQUFvQixJQUFXO1FBQzdCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFBO0lBQ2xCLENBQUM7SUFDTSxxQkFBSSxHQUFYLFVBQWEsR0FBYztRQUFkLG9CQUFBLEVBQUEsT0FBYztRQUN6QixPQUFPLENBQUMsR0FBRyxDQUFNLElBQUksQ0FBQyxJQUFJLGVBQVcsR0FBRyxPQUFJLENBQUUsQ0FBQTtJQUNoRCxDQUFDO0lBQ0gsYUFBQztBQUFELENBQUMsQUFSRCxJQVFDO0FBRUQ7SUFBa0IsdUJBQU07SUFDdEIsYUFBYSxJQUFXO2VBQ3RCLGtCQUFPLElBQUksQ0FBRTtJQUNmLENBQUM7SUFDRCxrQkFBSSxHQUFKLFVBQU0sR0FBZTtRQUFmLG9CQUFBLEVBQUEsUUFBZTtRQUNuQixpQkFBTSxJQUFJLFlBQUUsR0FBRyxDQUFFLENBQUM7SUFDcEIsQ0FBQztJQUNILFVBQUM7QUFBRCxDQUFDLEFBUEQsQ0FBa0IsTUFBTSxHQU92QjtBQUNEO0lBQW9CLHlCQUFNO0lBRXhCLGVBQWEsSUFBVztRQUF4QixZQUNFLGtCQUFPLElBQUksQ0FBRSxTQU1kO1FBRkMsS0FBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7UUFDakIsT0FBTyxDQUFDLEdBQUcsQ0FBRSxLQUFJLENBQUMsTUFBTSxDQUFFLENBQUE7O0lBQzVCLENBQUM7SUFDRCxvQkFBSSxHQUFKLFVBQU0sR0FBZTtRQUFmLG9CQUFBLEVBQUEsUUFBZTtRQUNuQixpQkFBTSxJQUFJLFlBQUUsR0FBRyxDQUFFLENBQUM7SUFDcEIsQ0FBQztJQUNILFlBQUM7QUFBRCxDQUFDLEFBYkQsQ0FBb0IsTUFBTSxHQWF6QjtBQUVELElBQUksR0FBRyxHQUFHLElBQUksR0FBRyxDQUFFLEtBQUssQ0FBRSxDQUFDO0FBQzNCLElBQUksS0FBSyxHQUFVLElBQUksS0FBSyxDQUFFLE9BQU8sQ0FBRSxDQUFDO0FBRXhDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDYixLQUFLLENBQUMsSUFBSSxDQUFFLEVBQUUsQ0FBRSxDQUFDO0FBRWpCO0lBR0UsZ0JBQWEsSUFBVyxFQUFDLEdBQVU7UUFDakMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7SUFDakIsQ0FBQztJQUVNLHlCQUFRLEdBQWY7UUFDRSxPQUFPLENBQUMsR0FBRyxDQUFFLGdCQUFjLElBQUksQ0FBQyxJQUFNLENBQUUsQ0FBQztJQUMzQyxDQUFDO0lBRU8sd0JBQU8sR0FBZjtRQUNFLE9BQU8sQ0FBQyxHQUFHLENBQUUsU0FBUSxJQUFJLENBQUMsR0FBRyxlQUFhLENBQUUsQ0FBQztJQUMvQyxDQUFDO0lBQ0gsYUFBQztBQUFELENBQUMsQUFmRCxJQWVDO0FBQ0QsSUFBSSxRQUFRLEdBQUcsSUFBSSxNQUFNLENBQUUsSUFBSSxFQUFDLEVBQUUsQ0FBRSxDQUFDO0FBQ3JDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQTtBQUVuQjtJQUVHO1FBQ0UsSUFBSSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUM7SUFDcEIsQ0FBQztJQUNKLGdCQUFDO0FBQUQsQ0FBQyxBQUxELElBS0M7QUFDRCxJQUFJLGNBQWMsR0FBRyxJQUFJLFNBQVMsRUFBRSxDQUFDO0FBQ3JDLE9BQU8sQ0FBQyxHQUFHLENBQUUsY0FBYyxDQUFDLElBQUksQ0FBRSxDQUFBIn0=