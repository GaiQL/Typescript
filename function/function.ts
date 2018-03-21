

//  书写完整的函数类型；

// let myAdd:(x:number,y:number) => number =
// function( a:number,y:number ):number{
//   return a + y
// }


//  推断类型
let myAdd:(x:number,y:number,c:number) => number
myAdd = ( a,y ):number => {
  return a + y
}
//  可选参数和默认参数
// 传递给一个函数的参数个数必须与函数期望的参数个数一致。
myAdd( 1,2,3 )

// JavaScript里，每个参数都是可选的，可传可不传。 没传参的时候，它的值就是undefined。
// 在TypeScript里我们可以在参数名旁使用 ?实现可选参数的功能。 比如，我们想让last name是可选的：
function HE(
  a:string = 'heihei',
  x:number,
  y?:number,
  z?:number,
  c:number = 123
):void{
  console.log( x,y )
}
// HE( 3 )  //error
HE( undefined,2 )

//  可选参数需要咋所有参数最后面...
//  果带默认值的参数出现在必须参数前面，用户必须明确的传入 undefined值来获得默认值。  放在后面时不用；

// 剩余参数：
//  js中的使用 arguments来访问所有传入的参数。 当我们不晓得函数会有多少参数被传进来时
function Arg( str:string,...num:number[] ):string{
  console.log( num ); //[1,2,3]  后面可以随意加数字类型的参数，最后会把他们收到num这个数组中
   return str + num.join(',')
  }
  Arg( '123',1,2,3 )


//   箭头函数能保存函数创建时的 this值，而不是调用时的值
//   ypeScript会警告你犯了一个错误，如果你给编译器设置了--noImplicitThis标记。 它会指出 this.suits[pickedSuit]里的this的类型为any。
interface HAHA{
  suit:string;
  card:number;
}
interface HEIEHI{
  //  修改的方法是，提供一个显式的 this参数。 this参数是个假的参数，它出现在参数列表的最前面：   约束this指针指向本身;
  //  现在TypeScript知道createCardPicker期望在某个HEIEHI对象上调用。
  //  也就是说 this是 HEIEHI 类型的，而非any
  createCardPicker( this:HEIEHI,x:string,y:string ):() => HAHA;
  suits:string[];
  cards:number[];
}

let deck:HEIEHI = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    createCardPicker: function( x:string,y:string ) {
        console.log( x,y )
        return () => {
            let pickedCard = Math.floor(Math.random() * 52);
            let pickedSuit = Math.floor(pickedCard / 13);
            console.log( this )
            //编译器开启了noImplicitThis
            return {suit: this.suits[pickedSuit], card: pickedCard % 13};
        }
    }
}
let cardPicker = deck.createCardPicker('123','321');
let pickedCard = cardPicker();

alert("card: " + pickedCard.card + " of " + pickedCard.suit);
