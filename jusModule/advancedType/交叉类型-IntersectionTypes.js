function extend(first, second) {
    var result = {};
    for (var key in first) {
        result[key] = first[key];
    }
    for (var id in second) {
        result[key] = second[id];
    }
    return result;
}
var Person = (function () {
    function Person(name) {
        this.name = name;
    }
    return Person;
}());
var ConsoleLogger = (function () {
    function ConsoleLogger() {
    }
    ConsoleLogger.prototype.log = function () {
    };
    return ConsoleLogger;
}());
var jim = extend(new Person("Jim"), new ConsoleLogger());
var n = jim.name;
jim.log();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoi5Lqk5Y+J57G75Z6LLUludGVyc2VjdGlvblR5cGVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vYWR2YW5jZWRUeXBlL+S6pOWPieexu+Weiy1JbnRlcnNlY3Rpb25UeXBlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFRQSxnQkFBc0IsS0FBTyxFQUFDLE1BQVE7SUFDcEMsSUFBSSxNQUFNLEdBQVUsRUFBRSxDQUFDO0lBQ3ZCLEdBQUcsQ0FBQSxDQUFFLElBQUksR0FBRyxJQUFJLEtBQU0sQ0FBQyxDQUFBLENBQUM7UUFDaEIsTUFBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBQ0QsR0FBRyxDQUFBLENBQUUsSUFBSSxFQUFFLElBQUksTUFBTyxDQUFDLENBQUEsQ0FBQztRQUNoQixNQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFDRCxNQUFNLENBQUMsTUFBTSxDQUFBO0FBQ2YsQ0FBQztBQUVEO0lBQ0ksZ0JBQW1CLElBQVk7UUFBWixTQUFJLEdBQUosSUFBSSxDQUFRO0lBQUksQ0FBQztJQUN4QyxhQUFDO0FBQUQsQ0FBQyxBQUZELElBRUM7QUFJRDtJQUFBO0lBSUEsQ0FBQztJQUhHLDJCQUFHLEdBQUg7SUFFQSxDQUFDO0lBQ0wsb0JBQUM7QUFBRCxDQUFDLEFBSkQsSUFJQztBQUNELElBQUksR0FBRyxHQUFHLE1BQU0sQ0FBQyxJQUFJLE1BQU0sQ0FBQyxLQUFLLENBQUMsRUFBRSxJQUFJLGFBQWEsRUFBRSxDQUFDLENBQUM7QUFDekQsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQztBQUNqQixHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMifQ==