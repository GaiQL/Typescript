var myAdd;
myAdd = function (a, y) {
    return a + y;
};
myAdd(1, 2, 3);
function HE(a, x, y, z, c) {
    if (a === void 0) { a = 'heihei'; }
    if (c === void 0) { c = 123; }
    console.log(x, y);
}
HE(undefined, 2);
function Arg(str) {
    var num = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        num[_i - 1] = arguments[_i];
    }
    console.log(num);
    return str + num.join(',');
}
Arg('123', 1, 2, 3);
var deck = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    createCardPicker: function (x, y) {
        var _this = this;
        console.log(x, y);
        return function () {
            var pickedCard = Math.floor(Math.random() * 52);
            var pickedSuit = Math.floor(pickedCard / 13);
            console.log(_this);
            return { suit: _this.suits[pickedSuit], card: pickedCard % 13 };
        };
    }
};
var cardPicker = deck.createCardPicker('123', '321');
var pickedCard = cardPicker();
var HeHe = (function () {
    function HeHe() {
    }
    HeHe.prototype.addFuntion = function (onclick) {
        onclick('str');
        console.log();
    };
    return HeHe;
}());
var hehe = new HeHe();
hehe.addFuntion(function () {
    console.log(this);
});
function live(x) {
    if (typeof x == 'object') {
        return 123;
    }
    else if (typeof x == 'number') {
        return { suit: 'string', card: 'string' };
    }
}
console.log(live([{ suit: '123', card: '123' }, { suit: '123', card: '123' }]));
var captain;
captain = function (str) {
};
captain({ str: '123', num: 123 });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnVuY3Rpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9mdW5jdGlvbi9mdW5jdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFXQSxJQUFJLEtBQTRDLENBQUE7QUFDaEQsS0FBSyxHQUFHLFVBQUUsQ0FBQyxFQUFDLENBQUM7SUFDWCxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQTtBQUNkLENBQUMsQ0FBQTtBQUdELEtBQUssQ0FBRSxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBRSxDQUFBO0FBSWQsWUFDRSxDQUFtQixFQUNuQixDQUFRLEVBQ1IsQ0FBUyxFQUNULENBQVMsRUFDVCxDQUFjO0lBSmQsa0JBQUEsRUFBQSxZQUFtQjtJQUluQixrQkFBQSxFQUFBLE9BQWM7SUFFZCxPQUFPLENBQUMsR0FBRyxDQUFFLENBQUMsRUFBQyxDQUFDLENBQUUsQ0FBQTtBQUNwQixDQUFDO0FBRUQsRUFBRSxDQUFFLFNBQVMsRUFBQyxDQUFDLENBQUUsQ0FBQTtBQU9qQixhQUFjLEdBQVU7SUFBQyxhQUFlO1NBQWYsVUFBZSxFQUFmLHFCQUFlLEVBQWYsSUFBZTtRQUFmLDRCQUFlOztJQUN0QyxPQUFPLENBQUMsR0FBRyxDQUFFLEdBQUcsQ0FBRSxDQUFDO0lBQ2xCLE1BQU0sQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQTtBQUMzQixDQUFDO0FBQ0QsR0FBRyxDQUFFLEtBQUssRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBRSxDQUFBO0FBc0JwQixJQUFJLElBQUksR0FBVTtJQUNkLEtBQUssRUFBRSxDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLFVBQVUsQ0FBQztJQUNoRCxLQUFLLEVBQUUsS0FBSyxDQUFDLEVBQUUsQ0FBQztJQUNoQixnQkFBZ0IsRUFBRSxVQUFVLENBQVEsRUFBQyxDQUFRO1FBQTNCLGlCQVNqQjtRQVJHLE9BQU8sQ0FBQyxHQUFHLENBQUUsQ0FBQyxFQUFDLENBQUMsQ0FBRSxDQUFBO1FBQ2xCLE1BQU0sQ0FBQztZQUNILElBQUksVUFBVSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDO1lBQ2hELElBQUksVUFBVSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQyxDQUFDO1lBQzdDLE9BQU8sQ0FBQyxHQUFHLENBQUUsS0FBSSxDQUFFLENBQUE7WUFFbkIsTUFBTSxDQUFDLEVBQUMsSUFBSSxFQUFFLEtBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLEVBQUUsSUFBSSxFQUFFLFVBQVUsR0FBRyxFQUFFLEVBQUMsQ0FBQztRQUNqRSxDQUFDLENBQUE7SUFDTCxDQUFDO0NBQ0osQ0FBQTtBQUNELElBQUksVUFBVSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUMsS0FBSyxDQUFDLENBQUM7QUFDcEQsSUFBSSxVQUFVLEdBQUcsVUFBVSxFQUFFLENBQUM7QUFVOUI7SUFBQTtJQUtBLENBQUM7SUFKQyx5QkFBVSxHQUFWLFVBQVksT0FBdUM7UUFDakQsT0FBTyxDQUFFLEtBQUssQ0FBRSxDQUFDO1FBQ2pCLE9BQU8sQ0FBQyxHQUFHLEVBQUUsQ0FBQztJQUNoQixDQUFDO0lBQ0gsV0FBQztBQUFELENBQUMsQUFMRCxJQUtDO0FBQ0QsSUFBSSxJQUFJLEdBQUcsSUFBSSxJQUFJLEVBQUksQ0FBQztBQUN4QixJQUFJLENBQUMsVUFBVSxDQUFFO0lBQ2YsT0FBTyxDQUFDLEdBQUcsQ0FBRSxJQUFJLENBQUUsQ0FBQTtBQUNyQixDQUFDLENBQUUsQ0FBQztBQTBCSixjQUFlLENBQUs7SUFDbEIsRUFBRSxDQUFBLENBQUUsT0FBTyxDQUFDLElBQUksUUFBUyxDQUFDLENBQUEsQ0FBQztRQUN6QixNQUFNLENBQUMsR0FBRyxDQUFBO0lBQ1osQ0FBQztJQUFBLElBQUksQ0FBQyxFQUFFLENBQUEsQ0FBRSxPQUFPLENBQUMsSUFBSSxRQUFTLENBQUMsQ0FBQSxDQUFDO1FBQy9CLE1BQU0sQ0FBQyxFQUFFLElBQUksRUFBQyxRQUFRLEVBQUMsSUFBSSxFQUFDLFFBQVEsRUFBRSxDQUFBO0lBQ3hDLENBQUM7QUFDSCxDQUFDO0FBRUQsT0FBTyxDQUFDLEdBQUcsQ0FBRSxJQUFJLENBQUUsQ0FBQyxFQUFDLElBQUksRUFBQyxLQUFLLEVBQUMsSUFBSSxFQUFDLEtBQUssRUFBQyxFQUFDLEVBQUMsSUFBSSxFQUFDLEtBQUssRUFBQyxJQUFJLEVBQUMsS0FBSyxFQUFDLENBQUMsQ0FBRSxDQUFFLENBQUM7QUE2QnpFLElBQUksT0FBdUQsQ0FBQztBQUM1RCxPQUFPLEdBQUcsVUFBVSxHQUFHO0FBRXZCLENBQUMsQ0FBQTtBQUNELE9BQU8sQ0FBRSxFQUFDLEdBQUcsRUFBQyxLQUFLLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxDQUFFLENBQUEifQ==