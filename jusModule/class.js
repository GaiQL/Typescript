class Greeter {
    constructor(message) {
        this.greeting = message;
    }
    greet() {
        console.log(this.greeting);
    }
}
let greeter = new Greeter('嘿嘿');
greeter.greet();
console.log(greeter.greeting);
class Animal {
    constructor(Name) {
        this.name = Name;
    }
    move(num = 0) {
        console.log(`${this.name} moved ${num} m`);
    }
}
class Dog extends Animal {
    constructor(name) {
        super(name);
    }
    move(num = 50) {
        super.move(num);
    }
}
class Snake extends Animal {
    constructor(name) {
        super(name);
        this.weight = 50;
        console.log(this.weight);
    }
    move(num = 50) {
        super.move(num);
    }
}
let dog = new Dog('Dog');
let snake = new Snake('Snake');
dog.move(30);
snake.move(66);
class person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    Talkname() {
        console.log(`My name is ${this.name}`);
    }
    TalkAge() {
        console.log(`I'm ${this.age} years old`);
    }
}
let XiaoMing = new person('小名', 18);
XiaoMing.Talkname();
class hahahhaha {
    constructor() {
        this.name = '123';
    }
}
let hahahahahahhah = new hahahhaha();
console.log(hahahahahahhah.name);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xhc3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9jbGFzc+exuy9jbGFzcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUVFLFlBQWEsT0FBYztRQUN6QixJQUFJLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQztJQUMxQixDQUFDO0lBQ0QsS0FBSztRQUNILE9BQU8sQ0FBQyxHQUFHLENBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBRSxDQUFDO0lBQy9CLENBQUM7Q0FDRjtBQUVELElBQUksT0FBTyxHQUFHLElBQUksT0FBTyxDQUFFLElBQUksQ0FBRSxDQUFDO0FBQ2xDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQztBQUNoQixPQUFPLENBQUMsR0FBRyxDQUFFLE9BQU8sQ0FBQyxRQUFRLENBQUUsQ0FBQztBQUloQztJQUVFLFlBQW9CLElBQVc7UUFDN0IsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUE7SUFDbEIsQ0FBQztJQUNNLElBQUksQ0FBRSxNQUFhLENBQUM7UUFDekIsT0FBTyxDQUFDLEdBQUcsQ0FBRSxHQUFJLElBQUksQ0FBQyxJQUFLLFVBQVUsR0FBRyxJQUFJLENBQUUsQ0FBQTtJQUNoRCxDQUFDO0NBQ0Y7QUFFRCxTQUFVLFNBQVEsTUFBTTtJQUN0QixZQUFhLElBQVc7UUFDdEIsS0FBSyxDQUFFLElBQUksQ0FBRSxDQUFDO0lBQ2hCLENBQUM7SUFDRCxJQUFJLENBQUUsTUFBYSxFQUFFO1FBQ25CLEtBQUssQ0FBQyxJQUFJLENBQUUsR0FBRyxDQUFFLENBQUM7SUFDcEIsQ0FBQztDQUNGO0FBQ0QsV0FBWSxTQUFRLE1BQU07SUFFeEIsWUFBYSxJQUFXO1FBQ3RCLEtBQUssQ0FBRSxJQUFJLENBQUUsQ0FBQztRQUlkLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO1FBQ2pCLE9BQU8sQ0FBQyxHQUFHLENBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBRSxDQUFBO0lBQzVCLENBQUM7SUFDRCxJQUFJLENBQUUsTUFBYSxFQUFFO1FBQ25CLEtBQUssQ0FBQyxJQUFJLENBQUUsR0FBRyxDQUFFLENBQUM7SUFDcEIsQ0FBQztDQUNGO0FBRUQsSUFBSSxHQUFHLEdBQUcsSUFBSSxHQUFHLENBQUUsS0FBSyxDQUFFLENBQUM7QUFDM0IsSUFBSSxLQUFLLEdBQVUsSUFBSSxLQUFLLENBQUUsT0FBTyxDQUFFLENBQUM7QUFFeEMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUNiLEtBQUssQ0FBQyxJQUFJLENBQUUsRUFBRSxDQUFFLENBQUM7QUFFakI7SUFHRSxZQUFhLElBQVcsRUFBQyxHQUFVO1FBQ2pDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO0lBQ2pCLENBQUM7SUFFTSxRQUFRO1FBQ2IsT0FBTyxDQUFDLEdBQUcsQ0FBRSxjQUFjLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBRSxDQUFDO0lBQzNDLENBQUM7SUFFTyxPQUFPO1FBQ2IsT0FBTyxDQUFDLEdBQUcsQ0FBRSxPQUFRLElBQUksQ0FBQyxHQUFJLFlBQVksQ0FBRSxDQUFDO0lBQy9DLENBQUM7Q0FDRjtBQUNELElBQUksUUFBUSxHQUFHLElBQUksTUFBTSxDQUFFLElBQUksRUFBQyxFQUFFLENBQUUsQ0FBQztBQUNyQyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUE7QUFFbkI7SUFFRztRQUNFLElBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDO0lBQ3BCLENBQUM7Q0FDSDtBQUNELElBQUksY0FBYyxHQUFHLElBQUksU0FBUyxFQUFFLENBQUM7QUFDckMsT0FBTyxDQUFDLEdBQUcsQ0FBRSxjQUFjLENBQUMsSUFBSSxDQUFFLENBQUEifQ==