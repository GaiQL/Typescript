let myAdd;
myAdd = (a, y) => {
    return a + y;
};
myAdd(1, 2, 3);
function HE(a = 'heihei', x, y, z, c = 123) {
    console.log(x, y);
}
HE(undefined, 2);
function Arg(str, ...num) {
    console.log(num);
    return str + num.join(',');
}
Arg('123', 1, 2, 3);
let deck = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    createCardPicker: function (x, y) {
        console.log(x, y);
        return () => {
            let pickedCard = Math.floor(Math.random() * 52);
            let pickedSuit = Math.floor(pickedCard / 13);
            console.log(this);
            return { suit: this.suits[pickedSuit], card: pickedCard % 13 };
        };
    }
};
let cardPicker = deck.createCardPicker('123', '321');
let pickedCard = cardPicker();
class HeHe {
    addFuntion(onclick) {
        onclick('str');
        console.log();
    }
}
let hehe = new HeHe();
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
let captain;
captain = function (str) {
};
captain({ str: '123', num: 123 });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnVuY3Rpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9mdW5jdGlvbi9mdW5jdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFXQSxJQUFJLEtBQTRDLENBQUE7QUFDaEQsS0FBSyxHQUFHLENBQUUsQ0FBQyxFQUFDLENBQUMsRUFBVSxFQUFFO0lBQ3ZCLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFBO0FBQ2QsQ0FBQyxDQUFBO0FBR0QsS0FBSyxDQUFFLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFFLENBQUE7QUFJZCxZQUNFLElBQVcsUUFBUSxFQUNuQixDQUFRLEVBQ1IsQ0FBUyxFQUNULENBQVMsRUFDVCxJQUFXLEdBQUc7SUFFZCxPQUFPLENBQUMsR0FBRyxDQUFFLENBQUMsRUFBQyxDQUFDLENBQUUsQ0FBQTtBQUNwQixDQUFDO0FBRUQsRUFBRSxDQUFFLFNBQVMsRUFBQyxDQUFDLENBQUUsQ0FBQTtBQU9qQixhQUFjLEdBQVUsRUFBQyxHQUFHLEdBQVk7SUFDdEMsT0FBTyxDQUFDLEdBQUcsQ0FBRSxHQUFHLENBQUUsQ0FBQztJQUNsQixNQUFNLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUE7QUFDM0IsQ0FBQztBQUNELEdBQUcsQ0FBRSxLQUFLLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLENBQUUsQ0FBQTtBQXNCcEIsSUFBSSxJQUFJLEdBQVU7SUFDZCxLQUFLLEVBQUUsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxVQUFVLENBQUM7SUFDaEQsS0FBSyxFQUFFLEtBQUssQ0FBQyxFQUFFLENBQUM7SUFDaEIsZ0JBQWdCLEVBQUUsVUFBVSxDQUFRLEVBQUMsQ0FBUTtRQUN6QyxPQUFPLENBQUMsR0FBRyxDQUFFLENBQUMsRUFBQyxDQUFDLENBQUUsQ0FBQTtRQUNsQixNQUFNLENBQUMsR0FBRyxFQUFFO1lBQ1IsSUFBSSxVQUFVLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUM7WUFDaEQsSUFBSSxVQUFVLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDLENBQUM7WUFDN0MsT0FBTyxDQUFDLEdBQUcsQ0FBRSxJQUFJLENBQUUsQ0FBQTtZQUVuQixNQUFNLENBQUMsRUFBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsRUFBRSxJQUFJLEVBQUUsVUFBVSxHQUFHLEVBQUUsRUFBQyxDQUFDO1FBQ2pFLENBQUMsQ0FBQTtJQUNMLENBQUM7Q0FDSixDQUFBO0FBQ0QsSUFBSSxVQUFVLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBQyxLQUFLLENBQUMsQ0FBQztBQUNwRCxJQUFJLFVBQVUsR0FBRyxVQUFVLEVBQUUsQ0FBQztBQVU5QjtJQUNFLFVBQVUsQ0FBRSxPQUF1QztRQUNqRCxPQUFPLENBQUUsS0FBSyxDQUFFLENBQUM7UUFDakIsT0FBTyxDQUFDLEdBQUcsRUFBRSxDQUFDO0lBQ2hCLENBQUM7Q0FDRjtBQUNELElBQUksSUFBSSxHQUFHLElBQUksSUFBSSxFQUFJLENBQUM7QUFDeEIsSUFBSSxDQUFDLFVBQVUsQ0FBRTtJQUNmLE9BQU8sQ0FBQyxHQUFHLENBQUUsSUFBSSxDQUFFLENBQUE7QUFDckIsQ0FBQyxDQUFFLENBQUM7QUEwQkosY0FBZSxDQUFLO0lBQ2xCLEVBQUUsQ0FBQSxDQUFFLE9BQU8sQ0FBQyxJQUFJLFFBQVMsQ0FBQyxDQUFBLENBQUM7UUFDekIsTUFBTSxDQUFDLEdBQUcsQ0FBQTtJQUNaLENBQUM7SUFBQSxJQUFJLENBQUMsRUFBRSxDQUFBLENBQUUsT0FBTyxDQUFDLElBQUksUUFBUyxDQUFDLENBQUEsQ0FBQztRQUMvQixNQUFNLENBQUMsRUFBRSxJQUFJLEVBQUMsUUFBUSxFQUFDLElBQUksRUFBQyxRQUFRLEVBQUUsQ0FBQTtJQUN4QyxDQUFDO0FBQ0gsQ0FBQztBQUVELE9BQU8sQ0FBQyxHQUFHLENBQUUsSUFBSSxDQUFFLENBQUMsRUFBQyxJQUFJLEVBQUMsS0FBSyxFQUFDLElBQUksRUFBQyxLQUFLLEVBQUMsRUFBQyxFQUFDLElBQUksRUFBQyxLQUFLLEVBQUMsSUFBSSxFQUFDLEtBQUssRUFBQyxDQUFDLENBQUUsQ0FBRSxDQUFDO0FBNkJ6RSxJQUFJLE9BQXVELENBQUM7QUFDNUQsT0FBTyxHQUFHLFVBQVUsR0FBRztBQUV2QixDQUFDLENBQUE7QUFDRCxPQUFPLENBQUUsRUFBQyxHQUFHLEVBQUMsS0FBSyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsQ0FBRSxDQUFBIn0=