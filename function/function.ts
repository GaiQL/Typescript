

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

// alert("card: " + pickedCard.card + " of " + pickedCard.suit);



// 回调函数中的this;
interface Hi{
  addFuntion( onclick:( this:void,ev:string ) => void ):void;
}
class HeHe implements Hi{
  addFuntion( onclick:( this:void,ev:string ) => void ){
    onclick( 'str' );
    console.log();
  }
}
let hehe = new HeHe(  );
hehe.addFuntion( function(){
  console.log( this ) // window;
} );

//
// class Handler {
//     info: string;
//     onClickBad(this: Handler, e: Event) {
//         // oops, used this here. using this callback would crash at runtime
//         this.info = e.message;
//     }
// }
// let h = new Handler();



//      重载：       函数根据传入参数的不同会返回不同的类型。   如何进行函数返回的类型检查


//重载  ----   函数参数和返回值设置any      function pickCard(x:any): any并不是重载列表的一部分
//    因此这里只有两个重载：一个是接收对象另一个接收数字。 以其它参数调用 pickCard会产生错误。
function live( x:number ):{ suit:string;card:string };
function live( x:{ suit:string;card:string }[] ):number;
//overload  超载
//signature    签名，信号
//compatible    兼容的能共处的；
//implementation  实现履行
//  在tsconfig中设置了 "noImplicitAny": true   ，所以参数x隐式any会报错；    官方实例中的x参数在定义函数这一行是没有any的
function live( x:any ):any{
  if( typeof x == 'object' ){
    return 123
  }else if( typeof x == 'number' ){
    return { suit:'string',card:'string' }
  }
}

console.log( live( [{suit:'123',card:'123'},{suit:'123',card:'123'}] ) );


// let suits = ["hearts", "spades", "clubs", "diamonds"];
//
// function pickCard(x: {suit: string; card: number; }[]): number;
// function pickCard(x: number): {suit: string; card: number; };
// function pickCard(x: any): any {
//     // Check to see if we're working with an object/array
//     // if so, they gave us the deck and we'll pick the card
//     if (typeof x == "object") {
//         let pickedCard = Math.floor(Math.random() * x.length);
//         return pickedCard;
//     }
//     // Otherwise just let them pick the card
//     else if (typeof x == "number") {
//         let pickedSuit = Math.floor(x / 13);
//         return { suit: suits[pickedSuit], card: x % 13 };
//     }
// }
//
// let myDeck = [{ suit: "diamonds", card: 2 }, { suit: "spades", card: 10 }, { suit: "hearts", card: 4 }];
// let pickedCard1 = myDeck[pickCard(myDeck)];
// alert("card: " + pickedCard1.card + " of " + pickedCard1.suit);
//
// let pickedCard2 = pickCard(15);
// alert("card: " + pickedCard2.card + " of " + pickedCard2.suit);


let captain : ( heihei:{ str:string;num:number; } ) => void;
captain = function( str ){

}
captain( {str:'123',num:123} )


//   商户后台  医生和技师的注册  去掉用户 密码  重复  整个联系人方式
//   出生日期
//   全款商品改促销时，如果选择了收益归平台---，平台预计收入--促销价   和商家预计收入0
//   用户创建的手机号11和密码不少于6位
//  圈子 178 178   750 314
//   退款和驳回
//   所有地图的地址再加一个文本框

//  js的加法问题。以及订单查看详情时的联系人信息更改
